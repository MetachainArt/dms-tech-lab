import { NextResponse } from "next/server";
import { put } from '@vercel/blob';
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";

// Allowed file extensions
const ALLOWED_EXTENSIONS = ['.jpg', '.jpeg', '.png', '.gif', '.webp', '.svg'];

// Allowed MIME types
const ALLOWED_MIME_TYPES = [
  'image/jpeg',
  'image/png',
  'image/gif',
  'image/webp',
  'image/svg+xml',
];

// Max file size: 5MB
const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5MB

// CORS 헤더 설정 함수
function corsHeaders() {
  const allowedOrigin = process.env.NEXT_PUBLIC_APP_URL || (process.env.NODE_ENV === 'production' ? null : '*');
  return {
    "Access-Control-Allow-Origin": allowedOrigin || "",
    "Access-Control-Allow-Methods": "POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
    "Access-Control-Allow-Credentials": "true",
  };
}

export async function OPTIONS() {
  return new NextResponse(null, {
    status: 204,
    headers: corsHeaders(),
  });
}

export async function POST(req: Request) {
  try {
    // 인증 확인
    const session = await getServerSession(authOptions);
    if (!session?.user) {
      return NextResponse.json(
        { error: "Unauthorized" },
        { status: 401, headers: corsHeaders() }
      );
    }

    // Admin 권한 확인
    const userEmail = session.user.email;
    if (userEmail !== process.env.ADMIN_EMAIL) {
      return NextResponse.json(
        { error: "Forbidden" },
        { status: 403, headers: corsHeaders() }
      );
    }

    const formData = await req.formData();
    const file = formData.get("file") as File;

    if (!file) {
      return NextResponse.json({ error: "No file received." }, { status: 400, headers: corsHeaders() });
    }

    // Validate file size
    if (file.size > MAX_FILE_SIZE) {
      return NextResponse.json({
        error: "File size exceeds the limit."
      }, { status: 400, headers: corsHeaders() });
    }

    if (file.size === 0) {
      return NextResponse.json({
        error: "File is empty."
      }, { status: 400, headers: corsHeaders() });
    }

    // Validate MIME type
    if (!ALLOWED_MIME_TYPES.includes(file.type)) {
      return NextResponse.json({
        error: "Invalid file type."
      }, { status: 400, headers: corsHeaders() });
    }

    // Vercel Blob에 업로드
    const blob = await put(file.name, file, {
      access: 'public',
    });

    return NextResponse.json({
      url: blob.url,
      success: true
    }, { headers: corsHeaders() });

  } catch (error) {
    console.error("Upload failed:", error);
    return NextResponse.json({ error: `Upload failed: ${error instanceof Error ? error.message : String(error)}` }, { status: 500, headers: corsHeaders() });
  }
}
