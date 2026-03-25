/**
 * Reedo Newsletter Auto-Send Script
 * GitHub Actions에서 실행됨: 새 MDX 포스트 → 전체 구독자 이메일 발송
 */

import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { Resend } from "resend";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.join(__dirname, "..");

// ── 환경변수 ──────────────────────────────────
const RESEND_API_KEY = process.env.RESEND_API_KEY;
const AUDIENCE_ID = process.env.RESEND_AUDIENCE_ID;
const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL ?? "https://dmssolution.co.kr").replace(/\/$/, "");
const NEW_POST_FILES = process.env.NEW_POST_FILES ?? "";
const FROM_EMAIL = process.env.RESEND_FROM_EMAIL ?? "리도레터 <newsletter@dmssolution.co.kr>";

if (!RESEND_API_KEY || !AUDIENCE_ID) {
  console.error("❌ RESEND_API_KEY 또는 RESEND_AUDIENCE_ID 환경변수가 설정되지 않았습니다.");
  process.exit(1);
}

const resend = new Resend(RESEND_API_KEY);

// ── frontmatter 파싱 (gray-matter 없이) ──────
function parseFrontmatter(content) {
  const match = content.match(/^---\n([\s\S]*?)\n---/);
  if (!match) return {};
  const fm = {};
  for (const line of match[1].split("\n")) {
    const colonIdx = line.indexOf(":");
    if (colonIdx === -1) continue;
    const key = line.slice(0, colonIdx).trim();
    const val = line.slice(colonIdx + 1).trim().replace(/^["']|["']$/g, "");
    if (key) fm[key] = val;
  }
  return fm;
}

// ── 새 포스트 목록 파싱 ───────────────────────
function getNewPosts() {
  const files = NEW_POST_FILES.trim().split(/\s+/).filter(Boolean);
  const posts = [];

  for (const filePath of files) {
    const fullPath = path.join(ROOT, filePath);
    if (!fs.existsSync(fullPath)) continue;

    const content = fs.readFileSync(fullPath, "utf8");
    const fm = parseFrontmatter(content);
    if (!fm.title || !fm.excerpt) continue;

    const slug = path.basename(filePath, ".mdx");
    posts.push({
      title: fm.title,
      excerpt: fm.excerpt,
      date: fm.date ?? "",
      readTime: fm.readTime ?? "5 min",
      slug,
      series: fm.series,
      coverImage: fm.coverImage,
    });
  }

  return posts;
}

// ── 이메일 HTML 빌드 ─────────────────────────
function buildEmailHtml({ contactId, email, post }) {
  const postUrl = `${SITE_URL}/blog/${post.slug}`;
  const unsubUrl = contactId
    ? `${SITE_URL}/api/newsletter/unsubscribe?id=${contactId}`
    : `${SITE_URL}/api/newsletter/unsubscribe?email=${encodeURIComponent(email)}`;

  const dateStr = post.date.replace(/(\d{4})[.\-](\d{2})[.\-\s](\d{2}).*/, "$1년 $2월 $3일");

  return `<!DOCTYPE html>
<html lang="ko">
<head>
  <meta charset="UTF-8"/>
  <meta name="viewport" content="width=device-width,initial-scale=1"/>
  <title>${post.title}</title>
</head>
<body style="margin:0;padding:40px 16px;background:#f5f0ea;font-family:'Apple SD Gothic Neo','Malgun Gothic',Arial,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" role="presentation">
  <tr><td align="center">
  <table width="600" style="max-width:600px;width:100%;" cellpadding="0" cellspacing="0">

    <!-- Header -->
    <tr><td style="padding:0 0 28px;text-align:center;">
      <a href="${SITE_URL}" style="text-decoration:none;">
        <span style="font-family:Georgia,serif;font-size:26px;font-weight:700;color:#1a1a2e;letter-spacing:-0.5px;">Reedo</span>
        <span style="display:block;font-size:10px;letter-spacing:3px;color:#999;text-transform:uppercase;margin-top:4px;">Insights</span>
      </a>
    </td></tr>

    <!-- Badge -->
    <tr><td style="padding:0 0 16px;text-align:center;">
      <span style="display:inline-block;background:#f8f0dc;border-radius:999px;padding:6px 18px;font-size:11px;letter-spacing:2px;text-transform:uppercase;color:#9a7a26;font-weight:700;">
        새 글이 발행되었습니다
      </span>
    </td></tr>

    <!-- Post Card -->
    <tr><td style="background:#fff;border-radius:24px;overflow:hidden;box-shadow:0 4px 32px rgba(26,26,46,0.08);">
      <div style="height:6px;background:linear-gradient(90deg,#1a1a2e,#4a4a7e,#1a1a2e);"></div>
      <div style="padding:40px 40px 36px;">
        ${post.series ? `<p style="font-size:11px;letter-spacing:2px;text-transform:uppercase;color:#9a7a26;font-weight:700;margin:0 0 14px;">${post.series}</p>` : ""}
        <h1 style="font-family:Georgia,serif;font-size:26px;color:#1a1a2e;font-weight:700;line-height:1.35;margin:0 0 16px;">${post.title}</h1>
        <p style="font-size:15px;color:#666;line-height:1.8;margin:0 0 24px;">${post.excerpt}</p>
        <p style="font-size:13px;color:#999;margin:0 0 32px;">📅 ${dateStr} &nbsp;·&nbsp; ⏱ ${post.readTime}</p>
        <a href="${postUrl}" style="display:inline-block;padding:16px 40px;background:#1a1a2e;color:#fff;text-decoration:none;border-radius:999px;font-size:15px;font-weight:700;">
          글 읽기 →
        </a>
      </div>
    </td></tr>

    <!-- Spacer -->
    <tr><td style="height:20px;"></td></tr>

    <!-- Series promo -->
    <tr><td style="background:#fff;border-radius:20px;padding:24px 36px;">
      <table width="100%" cellpadding="0" cellspacing="0">
        <tr>
          <td><p style="font-size:13px;color:#999;margin:0 0 4px;">연재 시리즈</p>
              <p style="font-size:15px;color:#333;font-weight:600;margin:0;">주제별로 깊이 읽고 싶다면 →</p></td>
          <td align="right"><a href="${SITE_URL}/blog" style="font-size:13px;color:#1a1a2e;font-weight:700;text-decoration:none;border-bottom:1px solid #1a1a2e;padding-bottom:2px;">전체 보기</a></td>
        </tr>
      </table>
    </td></tr>

    <!-- Spacer -->
    <tr><td style="height:8px;"></td></tr>

    <!-- Footer -->
    <tr><td style="padding:32px 24px;text-align:center;border-top:1px solid #e8e2d9;">
      <p style="font-size:12px;color:#aaa;line-height:1.8;margin:0 0 8px;">
        이 이메일은 <strong style="color:#888;">dmssolution.co.kr</strong> 뉴스레터 구독자에게 발송됩니다.
      </p>
      <a href="${unsubUrl}" style="font-size:12px;color:#bbb;text-decoration:underline;">수신 거부하기</a>
    </td></tr>

  </table>
  </td></tr>
  </table>
</body>
</html>`;
}

// ── 메인 실행 ─────────────────────────────────
async function main() {
  const posts = getNewPosts();

  if (posts.length === 0) {
    console.log("발송할 포스트가 없습니다.");
    return;
  }

  console.log(`📝 발송 대상 포스트: ${posts.map((p) => p.title).join(", ")}`);

  // 구독자 목록 조회
  const contactsRes = await resend.contacts.list({ audienceId: AUDIENCE_ID });
  const contacts = contactsRes.data?.data ?? [];
  const activeContacts = contacts.filter((c) => !c.unsubscribed);

  if (activeContacts.length === 0) {
    console.log("활성 구독자가 없습니다.");
    return;
  }

  console.log(`👥 활성 구독자: ${activeContacts.length}명`);

  // 각 포스트별로 전체 구독자에게 발송
  for (const post of posts) {
    console.log(`\n📧 발송 중: "${post.title}"`);
    let sent = 0;
    let failed = 0;

    for (const contact of activeContacts) {
      try {
        await resend.emails.send({
          from: FROM_EMAIL,
          to: [contact.email],
          subject: `✦ 새 글: ${post.title}`,
          html: buildEmailHtml({ contactId: contact.id, email: contact.email, post }),
        });
        sent++;
        // Resend 무료 플랜 rate limit 대비 (100 req/s)
        await new Promise((r) => setTimeout(r, 50));
      } catch (err) {
        console.error(`  ❌ ${contact.email}: ${err.message}`);
        failed++;
      }
    }

    console.log(`  ✅ 발송 완료: ${sent}명 성공, ${failed}명 실패`);
  }

  console.log("\n🎉 뉴스레터 발송 완료");
}

main().catch((err) => {
  console.error("Fatal error:", err);
  process.exit(1);
});
