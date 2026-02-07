import { NextResponse } from "next/server";

import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";

// Allowed file extensions
const ALLOWED_EXTENSIONS = [
  '.jpg', '.jpeg', '.png', '.gif', '.webp', '.svg', 
  '.json', '.xml', '.yaml', '.txt', '.csv', 
  '.pdf', '.zip', '.rar', '.7z', 
  '.mp4', '.webm'
];

// Allowed MIME types
const ALLOWED_MIME_TYPES = [
  'image/jpeg',
  'image/png',
  'image/gif',
  'image/webp',
  'image/svg+xml',
  'application/json',
  'text/xml',
  'text/yaml',
  'text/plain',
  'text/csv',
  'application/pdf',
  'application/zip',
  'application/x-zip-compressed', // Added for Windows compatibility
  'application/x-rar-compressed',
  'application/x-7z-compressed',
  'application/octet-stream', // Fallback for unknown binary types
  'video/mp4',
  'video/webm',
  'audio/mpeg',
  'audio/wav',
];

// Max file size: 50MB
const MAX_FILE_SIZE = 50 * 1024 * 1024; // 50MB

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

// Handle upload (client-side token generation)
import { handleUpload, type HandleUploadBody } from '@vercel/blob/client';

export async function POST(request: Request): Promise<NextResponse> {
  const body = (await request.json()) as HandleUploadBody;

  try {
    const jsonResponse = await handleUpload({
      body,
      request,
      onBeforeGenerateToken: async (pathname: string, clientPayload: string | null) => {
        // 인증 확인
        const session = await getServerSession(authOptions);
        if (!session?.user) {
          throw new Error('Unauthorized');
        }

        // Admin 권한 확인
        if (session.user.email !== process.env.ADMIN_EMAIL) {
            throw new Error('Forbidden');
        }

        // 파일 확장자 검증 (Optional: more strict checks can be added here if needed)
        // const extension = pathname.split('.').pop()?.toLowerCase();
        // if (!extension || !ALLOWED_EXTENSIONS.includes(`.${extension}`)) {
        //     throw new Error('Invalid file extension');
        // }

        return {
          allowedContentTypes: ALLOWED_MIME_TYPES,
          tokenPayload: JSON.stringify({
            userId: session.user.email,
          }),
        };
      },
      onUploadCompleted: async ({ blob, tokenPayload }) => {
        // 업로드 완료 후 로직 (예: DB 저장 등) - 현재는 불필요
        console.log('Upload completed:', blob.url);
      },
    });

    return NextResponse.json(jsonResponse);
  } catch (error) {
    return NextResponse.json(
      { error: (error as Error).message },
      { status: 400 }, // The webhook will retry 5 times automatically if you return 400-599
    );
  }
}
