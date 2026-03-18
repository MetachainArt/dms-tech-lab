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
      <section className="px-6 pb-16 pt-40">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-end">
            <div className="space-y-6">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-paperfolio-accent-blue">대표 작업</p>
              <h1 className="paperfolio-display max-w-4xl">말보다 작업물이 먼저 설명하게 합니다</h1>
              <p className="max-w-2xl text-lg leading-8 text-paperfolio-text-muted">
                자동화, 설계, 교육, 콘텐츠를 어떻게 실제 결과로 만들었는지 따로 모았습니다. 홈의 요약 섹션이 아니라, 작업만 따로 보고 판단할 수 있는 페이지입니다.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
              <div className="rounded-[28px] border border-paperfolio-line bg-white px-6 py-5 shadow-[0_16px_50px_rgba(31,41,55,0.05)]">
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-paperfolio-accent-coral">대표 작업</p>
                <p className="mt-3 font-playfair text-3xl text-paperfolio-text">{SHOWCASE_WORKS.length}</p>
              </div>
              <div className="rounded-[28px] border border-paperfolio-line bg-white px-6 py-5 shadow-[0_16px_50px_rgba(31,41,55,0.05)]">
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-paperfolio-accent-blue">관리 경로</p>
                <p className="mt-3 text-base font-semibold text-paperfolio-text">`/works` + `content/works`</p>
              </div>
              <div className="rounded-[28px] border border-paperfolio-line bg-white px-6 py-5 shadow-[0_16px_50px_rgba(31,41,55,0.05)]">
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-paperfolio-accent-yellow">용도</p>
                <p className="mt-3 text-base font-semibold text-paperfolio-text">사례 + 결과 + 작업 흐름</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-paperfolio-line bg-paperfolio-surface px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div className="space-y-4">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-paperfolio-accent-blue">Works</p>
              <h2 className="paperfolio-h1">지금 보고 싶은 작업부터 고르면 됩니다</h2>
              <p className="paperfolio-body max-w-2xl">
                글 목록과 분리해 작업만 모아뒀습니다. 필요하면 각 작업 상세로 바로 들어가고, 외부 프로젝트는 그대로 연결됩니다.
              </p>
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
