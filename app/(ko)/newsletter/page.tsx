import type { Metadata } from "next";
import NewsletterSubscribeForm from "@/components/newsletter/NewsletterSubscribeForm";
import { SITE_CONFIG } from "@/lib/seo";

export const metadata: Metadata = {
  title: "리도인사이트 뉴스레터 | Reedo",
  description: "AI, 자동화, 수익화에 대한 현장의 기록을 이메일로 받아보세요. 새 글이 발행될 때만 발송됩니다.",
  openGraph: {
    title: "리도인사이트 뉴스레터",
    description: "AI, 자동화, 수익화에 대한 현장의 기록을 이메일로 받아보세요.",
    url: `${SITE_CONFIG.url}/newsletter`,
    images: [
      {
        url: `${SITE_CONFIG.url}/images/newsletter-og.jpeg`,
        width: 1200,
        height: 630,
        alt: "리도인사이트 뉴스레터",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "리도인사이트 뉴스레터",
    description: "AI, 자동화, 수익화에 대한 현장의 기록을 이메일로 받아보세요.",
    images: [`${SITE_CONFIG.url}/images/newsletter-og.jpeg`],
  },
};

const TOPICS = [
  { emoji: "🤖", label: "AI 활용 실전 가이드" },
  { emoji: "⚙️", label: "자동화 설계와 운영 인사이트" },
  { emoji: "🎨", label: "AI 이미지·영상 크리에이티브" },
  { emoji: "💰", label: "디지털 수익화 전략" },
];

export default function NewsletterPage() {
  return (
    <main className="min-h-screen bg-paperfolio-bg text-paperfolio-text selection:bg-paperfolio-accent-yellow/70 selection:text-paperfolio-text">
      {/* Hero */}
      <section className="px-6 pb-0 pt-36">
        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.28em] text-paperfolio-accent-yellow">
            Newsletter
          </p>
          <h1 className="paperfolio-display mb-6 text-paperfolio-text">
            리도인사이트
          </h1>
          <p className="text-lg leading-8 text-paperfolio-text-muted">
            AI, 자동화, 수익화에 대한 현장의 기록을<br className="hidden sm:block" />
            이메일로 꾸준히 보내드립니다.
          </p>
        </div>
      </section>

      {/* Topics */}
      <section className="px-6 py-16">
        <div className="mx-auto max-w-2xl">
          <p className="mb-8 text-center text-xs font-semibold uppercase tracking-[0.2em] text-paperfolio-text-muted">
            이런 내용을 보내드려요
          </p>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            {TOPICS.map(({ emoji, label }) => (
              <div
                key={label}
                className="flex items-center gap-4 rounded-2xl border border-paperfolio-line bg-paperfolio-surface px-6 py-5"
              >
                <span className="text-2xl">{emoji}</span>
                <span className="font-semibold text-paperfolio-text">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Subscribe Form */}
      <section className="px-6 pb-24">
        <div className="mx-auto max-w-lg">
          <div className="rounded-[32px] bg-paperfolio-text px-8 py-12 shadow-[0_24px_80px_rgba(26,26,46,0.18)] md:px-12">
            <p className="mb-2 text-center text-xs font-semibold uppercase tracking-[0.28em] text-paperfolio-accent-yellow">
              무료 구독
            </p>
            <h2 className="mb-2 text-center font-playfair text-2xl text-white md:text-3xl">
              새 글이 나오면 바로 알려드릴게요
            </h2>
            <p className="mb-8 text-center text-sm leading-7 text-white/50">
              스팸 없이, 새 글이 발행될 때만 발송됩니다.<br />언제든 구독 해지 가능합니다.
            </p>
            <NewsletterSubscribeForm />
          </div>

          <p className="mt-8 text-center text-xs text-paperfolio-text-muted">
            현재{" "}
            <span className="font-semibold text-paperfolio-text">리도인사이트</span>를
            구독하고 계신 분들과 함께하고 있습니다.
          </p>
        </div>
      </section>
    </main>
  );
}
