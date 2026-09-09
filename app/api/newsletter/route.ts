import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { checkRateLimit } from "@/lib/rate-limit";
import { welcomeEmailHtml } from "@/lib/email-templates";

const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null;
const AUDIENCE_ID = process.env.RESEND_AUDIENCE_ID ?? "";
const FROM_EMAIL = process.env.RESEND_FROM_EMAIL ?? "리도인사이트 <newsletter@dmssolution.co.kr>";
const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://dmssolution.co.kr";

export async function POST(request: NextRequest) {
  try {
    const forwardedFor = request.headers.get("x-forwarded-for");
    const ip = forwardedFor?.split(",")[0]?.trim() ?? request.headers.get("x-real-ip") ?? "unknown";

    const rateLimitResult = await checkRateLimit(ip, "auth");
    if (!rateLimitResult.success) {
      return NextResponse.json({ error: "요청이 너무 많습니다. 잠시 후 다시 시도해주세요." }, { status: 429 });
    }

    const { email } = await request.json();
    if (typeof email !== "string" || email.length > 254 || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json({ error: "유효한 이메일을 입력해주세요." }, { status: 400 });
    }

    if (!resend || !AUDIENCE_ID) {
      return NextResponse.json({ error: "현재 구독 서비스를 이용할 수 없습니다. 잠시 후 다시 시도해주세요." }, { status: 503 });
    }

    // Resend Audiences에 연락처 저장
    try {
      const contact = await resend.contacts.create({
        email,
        audienceId: AUDIENCE_ID,
        unsubscribed: false,
      });
      if (contact.error || !contact.data?.id) {
        return NextResponse.json({ error: "구독 처리 중 오류가 발생했습니다." }, { status: 502 });
      }
    } catch (contactError: unknown) {
      void contactError;
      console.error("Newsletter contact creation failed");
      return NextResponse.json({ error: "구독 처리 중 오류가 발생했습니다." }, { status: 500 });
    }

    // 환영 이메일 발송 (실패해도 구독은 성공 처리)
    try {
      await resend.emails.send({
        from: FROM_EMAIL,
        to: [email],
        subject: "Reedo 뉴스레터 구독을 환영합니다 ✦",
        html: welcomeEmailHtml({ email, siteUrl: SITE_URL }),
      });

    } catch (emailError: unknown) {
      void emailError;
      console.error("Newsletter welcome email failed");
    }

    return NextResponse.json({ success: true, message: "구독이 완료되었습니다." });
  } catch (error: unknown) {
    void error;
    console.error("Newsletter subscription failed");
    return NextResponse.json({ error: "구독 처리 중 오류가 발생했습니다." }, { status: 500 });
  }
}
