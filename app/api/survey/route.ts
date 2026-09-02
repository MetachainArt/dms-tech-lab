import { NextResponse } from 'next/server';
import { Resend } from 'resend';

function getResendClient(): Resend | null {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    return null;
  }

  return new Resend(apiKey);
}

export async function POST(req: Request) {
  try {
    const { text, html } = await req.json();

    if (!text) {
      return NextResponse.json({ error: 'Text content is required' }, { status: 400 });
    }

    const resend = getResendClient();

    if (!resend) {
      console.error('RESEND_API_KEY is not configured.');
      return NextResponse.json({ error: 'Email service is not configured' }, { status: 500 });
    }

    const { data, error } = await resend.emails.send({
      from: 'Acme <onboarding@resend.dev>', // Use onboarding@resend.dev for testing, it only sends to the verified email
      to: ['reedo.dev@gmail.com'], // Send to the admin email
      subject: '[새로운 제출] 자동화 및 기술교육 사전 질의응답',
      text: text,
      html: html || text.replace(/\n/g, '<br/>'), // Fallback to basic HTML if not provided
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json({ error }, { status: 400 });
    }

    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error("Failed to send email:", error);
    return NextResponse.json({ error: 'Failed to send email' }, { status: 500 });
  }
}
