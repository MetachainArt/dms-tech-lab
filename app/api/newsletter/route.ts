import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { checkRateLimit } from "@/lib/rate-limit";
import { welcomeEmailHtml } from "@/lib/email-templates";

const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null;
const AUDIENCE_ID = process.env.RESEND_AUDIENCE_ID ?? "";
const FROM_EMAIL = process.env.RESEND_FROM_EMAIL ?? "리도레터 <newsletter@dmssolution.co.kr>";
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
    if (!email || !email.includes("@")) {
      return NextResponse.json({ error: "유효한 이메일을 입력해주세요." }, { status: 400 });
    }

    if (!resend || !AUDIENCE_ID) {
      console.log(`구독 시도 (API 키 미설정): email=${email}, resend=${!!resend}, AUDIENCE_ID=${AUDIENCE_ID}`);
      return NextResponse.json({ success: true, message: "구독이 완료되었습니다." });
    }

    // Resend Audiences에 연락처 저장
    try {
      await resend.contacts.create({
        email,
        audienceId: AUDIENCE_ID,
        unsubscribed: false,
      });
      console.log(`✅ Contact created: ${email}`);
    } catch (contactError: unknown) {
      const isAlreadyExists =
        contactError &&
        typeof contactError === "object" &&
        ("statusCode" in contactError
          ? (contactError as { statusCode: number }).statusCode === 422
          : "status" in contactError
            ? (contactError as { status: number }).status === 422
            : false);
      if (isAlreadyExists) {
        console.log(`ℹ️ Already subscribed: ${email}`);
        return NextResponse.json({ success: true, message: "이미 구독 중인 이메일입니다." });
      }
      console.error("contacts.create error:", JSON.stringify(contactError));
      return NextResponse.json({ error: "구독 처리 중 오류가 발생했습니다." }, { status: 500 });
    }

    // 환영 이메일 발송 (실패해도 구독은 성공 처리)
    try {
      const sendResult = await resend.emails.send({
        from: FROM_EMAIL,
        to: [email],
        subject: "Reedo 뉴스레터 구독을 환영합니다 ✦",
        html: welcomeEmailHtml({ email, siteUrl: SITE_URL }),
      });
      console.log(`✅ Welcome email sent to ${email}:`, JSON.stringify(sendResult));
    } catch (emailError: unknown) {
      console.error(`❌ Welcome email failed for ${email}:`, JSON.stringify(emailError));
    }

    return NextResponse.json({ success: true, message: "구독이 완료되었습니다." });
  } catch (error: unknown) {
    console.error("Newsletter subscribe error:", error);
    return NextResponse.json({ error: "구독 처리 중 오류가 발생했습니다." }, { status: 500 });
  }
}
