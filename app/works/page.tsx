import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { generateMetadata as generateSeoMetadata } from "@/lib/metadata";
import { SHOWCASE_WORKS } from "@/lib/works-showcase";

export const metadata = generateSeoMetadata({
  title: "대표 작업",
  description: "자동화, 설계, 교육, 콘텐츠까지 리도가 직접 만들고 운영한 대표 작업들을 따로 모았습니다.",
  path: "/works",
});

export default function WorksPage() {
  return (
    <main className="min-h-screen bg-paperfolio-bg text-paperfolio-text selection:bg-paperfolio-accent-yellow/70 selection:text-paperfolio-text">
      <header className="px-10 py-20 lg:py-28 border-b border-paperfolio-line bg-paperfolio-surface">
        <div className="mx-auto max-w-7xl flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-paperfolio-accent-coral mb-4">
              Works
            </p>
            <h1 className="font-playfair text-paperfolio-text"
              style={{ fontSize: "clamp(3.5rem, 9vw, 7rem)", lineHeight: 1.0, letterSpacing: "-0.02em" }}>
              작업
            </h1>
            <p className="font-playfair italic text-paperfolio-text-muted mt-4"
              style={{ fontSize: "clamp(1rem, 2vw, 1.35rem)" }}>
              The work speaks before the words do
            </p>
          </div>
          <p className="text-sm text-paperfolio-text-muted max-w-sm leading-[1.9]"
            style={{ fontFamily: "var(--font-korean), serif", wordBreak: "keep-all" }}>
            자동화, 설계, 교육, 콘텐츠를 어떻게 실제 결과로 만들었는지 따로 모았습니다. 작업만 따로 보고 판단할 수 있는 페이지입니다.
          </p>
        </div>
        <div className="mx-auto max-w-7xl mt-14 pt-8 border-t border-paperfolio-line flex items-center justify-between">
          <span className="text-xs tracking-[0.18em] uppercase text-paperfolio-text-muted">
            {SHOWCASE_WORKS.length} works
          </span>
          <span className="text-xs tracking-[0.18em] uppercase text-paperfolio-text-muted">
            2024 — 2026
          </span>
        </div>
      </header>

      <section className="border-t border-paperfolio-line bg-paperfolio-surface px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div className="space-y-4">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-paperfolio-accent-blue">Works</p>
              <h2 className="paperfolio-h1">지금 보고 싶은 작업부터 고르면 됩니다</h2>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {SHOWCASE_WORKS.map((work) => {
              const isExternalLink = Boolean(work.link?.startsWith("http"));
              const content = (
                <>
                  <div className="mb-8 aspect-[4/3] rounded-[24px] bg-[linear-gradient(135deg,rgba(47,93,124,0.10),rgba(201,111,74,0.10),rgba(210,167,95,0.18))] relative overflow-hidden">
                    <img src={work.image} alt={work.title} className="h-full w-full object-cover" />
                  </div>
                  <h3 className="text-2xl font-semibold tracking-tight text-paperfolio-text">{work.title}</h3>
                  <p className="text-sm leading-7 text-paperfolio-text-muted">{work.summary}</p>
                  <div className="flex flex-wrap gap-2 pt-2">
                    {work.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-paperfolio-line bg-paperfolio-bg px-3 py-1 text-xs font-semibold text-paperfolio-text-muted"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  {work.link ? (
                    <span className="inline-flex items-center gap-2 pt-2 text-sm font-semibold text-paperfolio-text">
                      작업 보기
                      <ArrowRight className="h-4 w-4" />
                    </span>
                  ) : null}
                </>
              );

              if (!work.link) {
                return (
                  <article key={work.title} className="rounded-[30px] border border-paperfolio-line bg-white p-7 shadow-[0_18px_70px_rgba(31,41,55,0.05)]">
                    <div className="space-y-4">{content}</div>
                  </article>
                );
              }

              return isExternalLink ? (
                <a
                  key={work.title}
                  href={work.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block rounded-[30px] border border-paperfolio-line bg-white p-7 shadow-[0_18px_70px_rgba(31,41,55,0.05)] transition-shadow hover:shadow-[0_20px_80px_rgba(31,41,55,0.08)]"
                >
                  <div className="space-y-4">{content}</div>
                </a>
              ) : (
                <Link
                  key={work.title}
                  href={work.link}
                  className="block rounded-[30px] border border-paperfolio-line bg-white p-7 shadow-[0_18px_70px_rgba(31,41,55,0.05)] transition-shadow hover:shadow-[0_20px_80px_rgba(31,41,55,0.08)]"
                >
                  <div className="space-y-4">{content}</div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}
