import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { checkRateLimit } from "@/lib/rate-limit";
import { contactCopy, type ContactLocale } from "@/lib/contact-copy";

const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null;
const RECIPIENT_EMAIL = process.env.CONTACT_EMAIL || "dms@dmssolution.co.kr";

function escapeHtml(value: string) {
  return value.replace(/[&<>"']/g, (character) => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;",
  })[character]!);
}

export async function POST(request: NextRequest) {
  let locale: ContactLocale = "ko";
  try {
    let body: unknown;
    try {
      body = await request.json();
    } catch {
      return NextResponse.json({ error: contactCopy[locale].invalidBody }, { status: 400 });
    }
    if (!body || typeof body !== "object" || Array.isArray(body)) {
      return NextResponse.json({ error: contactCopy[locale].invalidBody }, { status: 400 });
    }
    const input = body as Record<string, unknown>;
    if (input.locale !== undefined && input.locale !== "ko" && input.locale !== "en") {
      return NextResponse.json({ error: contactCopy[locale].invalidBody }, { status: 400 });
    }
    locale = input.locale === "en" ? "en" : "ko";
    const copy = contactCopy[locale];
    const forwardedFor = request.headers.get("x-forwarded-for");
    const firstForwardedIp = forwardedFor?.split(",")[0]?.trim();
    const ip = firstForwardedIp || request.headers.get("x-real-ip") || "unknown";
    const rateLimitResult = await checkRateLimit(ip, "auth");
    if (!rateLimitResult.success) {
      return NextResponse.json({ error: copy.rateLimited }, { status: 429 });
    }
    const fields = ["email", "firstName", "lastName", "name", "company", "inquiryType", "budget", "timeline", "message"] as const;
    if (fields.some((field) => input[field] !== undefined && (typeof input[field] !== "string" || (input[field] as string).length > (field === "message" ? 20000 : 1000)))) {
      return NextResponse.json({ error: copy.invalidBody }, { status: 400 });
    }
    const { email = "", firstName = "", lastName = "", name = "", company, inquiryType, budget, timeline, message = "" } = input as Partial<Record<typeof fields[number], string>>;
    const trimmedEmail = email.trim();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmedEmail)) {
      return NextResponse.json({ error: copy.invalidEmail }, { status: 400 });
    }
    if (!message.trim()) {
      return NextResponse.json({ error: copy.requiredMessage }, { status: 400 });
    }
    // There is no database persistence in this flow. Receipt requires the administrator email to be accepted.
    if (!resend) {
      return NextResponse.json({ error: copy.unavailable }, { status: 503 });
    }
    const fullName = name.trim() || (locale === "en" ? `${firstName} ${lastName}` : `${lastName} ${firstName}`).trim() || (locale === "en" ? "No name provided" : "이름 없음");
    const detailRows = [["이름", fullName], ["이메일", trimmedEmail], ["회사/팀", company], ["문의 유형", inquiryType], ["예산", budget], ["희망 일정", timeline], ["언어", locale], ["내용", message]].filter((row): row is [string, string] => Boolean(row[1]));
    const notification = await resend.emails.send({
      from: "Reedo 문의 <onboarding@resend.dev>",
      to: [RECIPIENT_EMAIL],
      replyTo: trimmedEmail,
      subject: `[Reedo] 새 문의: ${fullName.replace(/[\r\n]/g, " ")}`,
      html: `<div style="font-family:sans-serif;max-width:600px;margin:0 auto"><h2>새로운 문의가 도착했습니다</h2><table style="width:100%;border-collapse:collapse">${detailRows.map(([label, value]) => `<tr><th style="padding:12px;text-align:left">${label}</th><td style="padding:12px;white-space:pre-wrap">${escapeHtml(value)}</td></tr>`).join("")}</table><p>Reedo 홈페이지에서 발송됨</p></div>`,
    });
    if (notification.error || !notification.data?.id) {
      return NextResponse.json({ error: copy.failure }, { status: 502 });
    }
    // Once the inquiry is accepted, an auto-reply failure must not encourage a duplicate submission.
    let confirmationEmailSent = false;
    try {
      const en = locale === "en";
      const confirmation = await resend.emails.send({
        from: "Reedo <onboarding@resend.dev>",
        to: [trimmedEmail],
        subject: en ? "[Reedo] Your inquiry has been received" : "[Reedo] 문의가 접수되었습니다",
        html: `<div lang="${locale}" style="font-family:sans-serif;max-width:600px;margin:0 auto"><h2>${en ? `Thank you, ${escapeHtml(fullName)}!` : `감사합니다, ${escapeHtml(fullName)}님!`}</h2><p>${copy.success}</p><p>${copy.successDescription}</p><p>${en ? "Your message:" : "보내주신 내용:"}</p><blockquote style="white-space:pre-wrap">${escapeHtml(message)}</blockquote><p>Reedo | <a href="https://dmssolution.co.kr${en ? "/en" : ""}">dmssolution.co.kr</a></p></div>`,
      });
      confirmationEmailSent = !confirmation.error && Boolean(confirmation.data?.id);
    } catch {
      // Keep the received inquiry successful; no personal details are written to logs.
    }
    return NextResponse.json({ success: true, message: copy.success, confirmationEmailSent });
  } catch {
    return NextResponse.json({ error: contactCopy[locale].failure }, { status: 500 });
  }
}
