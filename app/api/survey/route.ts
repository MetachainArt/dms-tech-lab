import { NextResponse } from 'next/server';
import { Resend } from 'resend';

// Default to process.env.RESEND_API_KEY
const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { text, html } = await req.json();

    if (!text) {
      return NextResponse.json({ error: 'Text content is required' }, { status: 400 });
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
