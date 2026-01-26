import { NextResponse } from "next/server";
import { writeFile, mkdir } from "fs/promises";
import path from "path";
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

// 파일 매직 바이트 검증
async function validateFileContent(buffer: Buffer, expectedMimeType: string): Promise<boolean> {
  const magicBytes: { [key: string]: number[][] } = {
    'image/jpeg': [[0xFF, 0xD8, 0xFF]],
    'image/png': [[0x89, 0x50, 0x4E, 0x47, 0x0D, 0x0A, 0x1A, 0x0A]],
    'image/gif': [[0x47, 0x49, 0x46, 0x38, 0x37, 0x61], [0x47, 0x49, 0x46, 0x38, 0x39, 0x61]],
    'image/webp': [[0x52, 0x49, 0x46, 0x46]], // RIFF header, need to check for WEBP
    'image/svg+xml': [], // SVG는 텍스트 기반이라 매직 바이트 검증 어려움
  };

  const signatures = magicBytes[expectedMimeType];
  if (!signatures || signatures.length === 0) {
    // SVG는 텍스트 검증
    if (expectedMimeType === 'image/svg+xml') {
      const text = buffer.toString('utf-8', 0, Math.min(100, buffer.length));
      return text.trim().startsWith('<svg') || text.includes('<svg');
    }
    return true; // 알 수 없는 타입은 통과 (하지만 이미 MIME type 검증 완료)
  }

  for (const signature of signatures) {
    if (buffer.length < signature.length) continue;
    
    let matches = true;
    for (let i = 0; i < signature.length; i++) {
      if (buffer[i] !== signature[i]) {
        matches = false;
        break;
      }
    }
    
    if (matches) {
      // WebP의 경우 추가 검증
      if (expectedMimeType === 'image/webp') {
        const text = buffer.toString('ascii', 8, 12);
        return text === 'WEBP';
      }
      return true;
    }
  }

  return false;
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

    // Validate file extension
    const extension = path.extname(file.name).toLowerCase();
    if (!ALLOWED_EXTENSIONS.includes(extension)) {
      return NextResponse.json({
        error: "Invalid file extension."
      }, { status: 400, headers: corsHeaders() });
    }

    // Read file buffer for content validation
    const buffer = Buffer.from(await file.arrayBuffer());
    
    // Validate actual file content (magic bytes)
    const isValidContent = await validateFileContent(buffer, file.type);
    if (!isValidContent) {
      return NextResponse.json({
        error: "File content does not match file type."
      }, { status: 400, headers: corsHeaders() });
    }

    // Sanitize filename
    const timestamp = Date.now();
    const sanitizedFilename = file.name
      .replace(/[^a-zA-Z0-9.-]/g, '_')
      .toLowerCase();
    const filename = `${timestamp}_${sanitizedFilename}`;

    // Ensure uploads directory exists
    const uploadDir = path.join(process.cwd(), "public/uploads");
    try {
      await mkdir(uploadDir, { recursive: true });
    } catch (e) {
      // Ignore if exists
    }

    const filePath = path.join(uploadDir, filename);
    await writeFile(filePath, buffer);

    return NextResponse.json({
      url: `/uploads/${filename}`,
      success: true
    }, { headers: corsHeaders() });
  } catch (error) {
    console.error("Upload failed:", error);
    return NextResponse.json({ error: "Upload failed." }, { status: 500, headers: corsHeaders() });
  }
}
