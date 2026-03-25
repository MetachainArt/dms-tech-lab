// ─────────────────────────────────────────────
// Reedo Newsletter Email Templates
// ─────────────────────────────────────────────

const BASE_STYLES = `
  <style>
    @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;1,400&display=swap');
    * { box-sizing: border-box; margin: 0; padding: 0; }
    body { background: #f5f0ea; font-family: 'Apple SD Gothic Neo', 'Malgun Gothic', Arial, sans-serif; }
  </style>
`;

const emailWrapper = (content: string) => `
<!DOCTYPE html>
<html lang="ko">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  ${BASE_STYLES}
</head>
<body style="background:#f5f0ea;margin:0;padding:40px 16px;">
  <table width="100%" cellpadding="0" cellspacing="0" role="presentation">
    <tr><td align="center">
      <table width="600" style="max-width:600px;width:100%;" cellpadding="0" cellspacing="0" role="presentation">
        ${content}
      </table>
    </td></tr>
  </table>
</body>
</html>
`;

// ── 공통 헤더 ──────────────────────────────────
const emailHeader = () => `
<tr>
  <td style="padding:40px 0 24px;text-align:center;">
    <a href="https://dmssolution.co.kr" style="text-decoration:none;">
      <span style="font-family:'Georgia',serif;font-size:26px;font-weight:700;color:#1a1a2e;letter-spacing:-0.5px;">Reedo</span>
      <span style="display:block;font-size:10px;letter-spacing:3px;color:#999;text-transform:uppercase;margin-top:4px;">Insights</span>
    </a>
  </td>
</tr>
`;

// ── 공통 푸터 ──────────────────────────────────
const emailFooter = (unsubscribeUrl: string) => `
<tr>
  <td style="padding:36px 24px;text-align:center;border-top:1px solid #e8e2d9;">
    <p style="font-size:12px;color:#aaa;line-height:1.8;margin:0 0 8px;">
      이 이메일은 <strong style="color:#888;">dmssolution.co.kr</strong>에서 뉴스레터를 구독하셨기 때문에 발송됩니다.
    </p>
    <a href="${unsubscribeUrl}" style="font-size:12px;color:#bbb;text-decoration:underline;">수신 거부하기</a>
  </td>
</tr>
`;


// ────────────────────────────────────────────────
// 1. 환영 이메일
// ────────────────────────────────────────────────
export function welcomeEmailHtml({ email, siteUrl }: { email: string; siteUrl: string }) {
  const unsubscribeUrl = `${siteUrl}/api/newsletter/unsubscribe?email=${encodeURIComponent(email)}`;

  return emailWrapper(`
    ${emailHeader()}

    <!-- Hero -->
    <tr>
      <td style="background:#1a1a2e;border-radius:20px;padding:56px 40px;text-align:center;">
        <p style="font-size:38px;margin:0 0 20px;">✦</p>
        <h1 style="font-family:'Georgia',serif;font-size:30px;color:#fff;font-weight:700;line-height:1.3;margin:0 0 16px;">
          구독해 주셔서 감사합니다
        </h1>
        <p style="font-size:16px;color:rgba(255,255,255,0.6);line-height:1.8;margin:0;">
          AI, 자동화, 설계에 대한 현장의 기록을<br>이메일로 꾸준히 보내드리겠습니다.
        </p>
      </td>
    </tr>

    <!-- Spacer -->
    <tr><td style="height:28px;"></td></tr>

    <!-- What to expect -->
    <tr>
      <td style="background:#fff;border-radius:20px;padding:36px 40px;">
        <p style="font-size:11px;letter-spacing:3px;text-transform:uppercase;color:#999;margin:0 0 20px;">앞으로 받으실 내용</p>
        <table width="100%" cellpadding="0" cellspacing="0" role="presentation">
          <tr>
            <td style="padding:14px 0;border-bottom:1px solid #f0ebe4;">
              <span style="font-size:18px;margin-right:12px;">🤖</span>
              <span style="font-size:15px;color:#333;font-weight:600;">AI 활용 실전 가이드</span>
            </td>
          </tr>
          <tr>
            <td style="padding:14px 0;border-bottom:1px solid #f0ebe4;">
              <span style="font-size:18px;margin-right:12px;">⚙️</span>
              <span style="font-size:15px;color:#333;font-weight:600;">자동화 설계와 운영 인사이트</span>
            </td>
          </tr>
          <tr>
            <td style="padding:14px 0;border-bottom:1px solid #f0ebe4;">
              <span style="font-size:18px;margin-right:12px;">🎨</span>
              <span style="font-size:15px;color:#333;font-weight:600;">AI 이미지·영상 크리에이티브</span>
            </td>
          </tr>
          <tr>
            <td style="padding:14px 0;">
              <span style="font-size:18px;margin-right:12px;">💰</span>
              <span style="font-size:15px;color:#333;font-weight:600;">디지털 수익화 전략</span>
            </td>
          </tr>
        </table>
      </td>
    </tr>

    <!-- Spacer -->
    <tr><td style="height:20px;"></td></tr>

    <!-- CTA -->
    <tr>
      <td style="background:#fff;border-radius:20px;padding:32px 40px;text-align:center;">
        <p style="font-size:15px;color:#555;margin:0 0 20px;line-height:1.7;">
          지금 바로 최근 글을 확인해 보세요.
        </p>
        <a href="${siteUrl}/blog"
          style="display:inline-block;padding:14px 36px;background:#1a1a2e;color:#fff;text-decoration:none;border-radius:999px;font-size:14px;font-weight:700;letter-spacing:0.5px;">
          블로그 읽기 →
        </a>
      </td>
    </tr>

    <!-- Spacer -->
    <tr><td style="height:8px;"></td></tr>

    ${emailFooter(unsubscribeUrl)}
  `);
}

// ────────────────────────────────────────────────
// 2. 새 글 발행 뉴스레터
// ────────────────────────────────────────────────
export interface NewPostEmailOptions {
  contactId?: string;
  email: string;
  post: {
    title: string;
    excerpt: string;
    date: string;
    readTime: string;
    slug: string;
    series?: string;
    coverImage?: string;
  };
  siteUrl: string;
}

export function newPostEmailHtml({ contactId, email, post, siteUrl }: NewPostEmailOptions) {
  const postUrl = `${siteUrl}/blog/${post.slug}`;
  const unsubscribeUrl = contactId
    ? `${siteUrl}/api/newsletter/unsubscribe?id=${contactId}`
    : `${siteUrl}/api/newsletter/unsubscribe?email=${encodeURIComponent(email)}`;

  const formattedDate = post.date.replace(/(\d{4})[.\-](\d{2})[.\-\s](\d{2}).*/, "$1년 $2월 $3일");
  const seriesLabel = post.series ? `<span style="font-size:11px;letter-spacing:2px;text-transform:uppercase;color:#9a7a26;font-weight:700;">${post.series}</span>` : "";

  return emailWrapper(`
    ${emailHeader()}

    <!-- Label -->
    <tr>
      <td style="padding:0 0 16px;text-align:center;">
        <span style="display:inline-block;background:#f8f0dc;border-radius:999px;padding:6px 18px;font-size:11px;letter-spacing:2px;text-transform:uppercase;color:#9a7a26;font-weight:700;">
          새 글이 발행되었습니다
        </span>
      </td>
    </tr>

    <!-- Post Card -->
    <tr>
      <td style="background:#fff;border-radius:24px;overflow:hidden;box-shadow:0 4px 32px rgba(26,26,46,0.08);">

        <!-- Cover area (colored top bar instead of image) -->
        <div style="height:6px;background:linear-gradient(90deg,#1a1a2e,#4a4a7e,#1a1a2e);"></div>

        <!-- Content -->
        <div style="padding:40px 40px 36px;">
          ${seriesLabel ? `<div style="margin-bottom:14px;">${seriesLabel}</div>` : ""}

          <h1 style="font-family:'Georgia',serif;font-size:26px;color:#1a1a2e;font-weight:700;line-height:1.35;margin:0 0 16px;">
            ${post.title}
          </h1>

          <p style="font-size:15px;color:#666;line-height:1.8;margin:0 0 28px;">
            ${post.excerpt}
          </p>

          <!-- Meta -->
          <table cellpadding="0" cellspacing="0" role="presentation" style="margin-bottom:32px;">
            <tr>
              <td style="padding-right:20px;">
                <span style="font-size:13px;color:#999;">📅 ${formattedDate}</span>
              </td>
              <td>
                <span style="font-size:13px;color:#999;">⏱ ${post.readTime}</span>
              </td>
            </tr>
          </table>

          <!-- CTA Button -->
          <a href="${postUrl}"
            style="display:inline-block;padding:16px 40px;background:#1a1a2e;color:#fff;text-decoration:none;border-radius:999px;font-size:15px;font-weight:700;letter-spacing:0.3px;">
            글 읽기 →
          </a>
        </div>
      </td>
    </tr>

    <!-- Spacer -->
    <tr><td style="height:20px;"></td></tr>

    <!-- Series promo -->
    <tr>
      <td style="background:#fff;border-radius:20px;padding:28px 40px;">
        <table width="100%" cellpadding="0" cellspacing="0" role="presentation">
          <tr>
            <td>
              <p style="font-size:13px;color:#999;margin:0 0 6px;letter-spacing:1px;text-transform:uppercase;">연재 시리즈</p>
              <p style="font-size:15px;color:#333;font-weight:600;margin:0;">주제별로 깊이 읽고 싶다면 →</p>
            </td>
            <td align="right" style="white-space:nowrap;">
              <a href="${siteUrl}/blog" style="font-size:13px;color:#1a1a2e;font-weight:700;text-decoration:none;border-bottom:1px solid #1a1a2e;padding-bottom:2px;">
                전체 보기
              </a>
            </td>
          </tr>
        </table>
      </td>
    </tr>

    <!-- Spacer -->
    <tr><td style="height:8px;"></td></tr>

    ${emailFooter(unsubscribeUrl)}
  `);
}
