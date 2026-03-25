import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null;
const AUDIENCE_ID = process.env.RESEND_AUDIENCE_ID ?? "";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const email = searchParams.get("email");
  const contactId = searchParams.get("id");

  if (!email && !contactId) {
    return new NextResponse(`
      <html><body style="font-family:sans-serif;max-width:480px;margin:80px auto;text-align:center;color:#333">
        <p style="font-size:18px">잘못된 수신 거부 링크입니다.</p>
      </body></html>
    `, { headers: { "Content-Type": "text/html" } });
  }

  try {
    if (resend && AUDIENCE_ID && (email || contactId)) {
      if (contactId) {
        await resend.contacts.update({ id: contactId, audienceId: AUDIENCE_ID, unsubscribed: true });
      } else if (email) {
        // email로 contactId 조회 후 unsubscribe
        const { data } = await resend.contacts.list({ audienceId: AUDIENCE_ID });
        const contact = data?.data?.find((c: { email: string }) => c.email === email);
        if (contact) {
          await resend.contacts.update({ id: contact.id, audienceId: AUDIENCE_ID, unsubscribed: true });
        }
      }
    }
  } catch (err) {
    console.error("Unsubscribe error:", err);
  }

  return new NextResponse(`
    <!DOCTYPE html>
    <html lang="ko">
    <head><meta charset="UTF-8"><title>수신 거부 완료</title></head>
    <body style="font-family:'Apple SD Gothic Neo',sans-serif;background:#faf8f5;margin:0;min-height:100vh;display:flex;align-items:center;justify-content:center;">
      <div style="text-align:center;padding:48px 24px;max-width:480px;">
        <div style="font-size:40px;margin-bottom:20px;">✦</div>
        <h1 style="font-size:24px;font-weight:700;color:#1a1a2e;margin:0 0 12px">수신 거부가 완료되었습니다</h1>
        <p style="color:#666;font-size:15px;line-height:1.7;margin:0 0 32px">더 이상 Reedo 뉴스레터를 받지 않으실 수 있습니다.<br>언제든지 다시 구독하실 수 있습니다.</p>
        <a href="https://dmssolution.co.kr/blog" style="display:inline-block;padding:12px 28px;background:#1a1a2e;color:#fff;text-decoration:none;border-radius:999px;font-size:14px;font-weight:600;">블로그로 돌아가기</a>
      </div>
    </body>
    </html>
  `, { headers: { "Content-Type": "text/html; charset=utf-8" } });
}
