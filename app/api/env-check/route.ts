import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    hasNextAuthUrl: !!process.env.NEXTAUTH_URL,
    hasNextAuthSecret: !!process.env.NEXTAUTH_SECRET,
    hasGoogleClientId: !!process.env.GOOGLE_CLIENT_ID,
    hasGoogleClientSecret: !!process.env.GOOGLE_CLIENT_SECRET,
    hasKakaoClientId: !!process.env.KAKAO_CLIENT_ID,
    hasKakaoClientSecret: !!process.env.KAKAO_CLIENT_SECRET,
    hasAuthTrustHost: !!process.env.AUTH_TRUST_HOST,
    nodeEnv: process.env.NODE_ENV,
  });
}
