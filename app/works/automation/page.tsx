import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { generateMetadata as generateSeoMetadata } from "@/lib/metadata";
import { WORKS_DATA } from "@/lib/works-projects-data";

export const metadata = generateSeoMetadata({
  title: "업무 자동화 실험실",
  description: "반복되는 업무를 자동화로 줄이고, 실제 현장에서 바로 쓸 수 있는 흐름을 만든 실험 기록입니다.",
  path: "/works/automation",
});

export default function AutomationLandingPage() {
  const work = WORKS_DATA["automation"];

  return (
    <main className="min-h-screen bg-paperfolio-bg text-paperfolio-text selection:bg-paperfolio-accent-yellow/70 selection:text-paperfolio-text">
      <section className="px-6 pb-16 pt-36">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10">
            <Link
              href="/works"
              className="inline-flex items-center gap-2 text-sm font-semibold text-paperfolio-text-muted hover:text-paperfolio-accent-blue"
            >
              <ArrowLeft className="h-4 w-4" />
              대표 작업으로 돌아가기
            </Link>
          </div>

          <div className="mb-12 space-y-4">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-paperfolio-accent-blue">Automation</p>
            <h1 className="paperfolio-h1">{work.title}</h1>
            <p className="paperfolio-body max-w-2xl">{work.description}</p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {work.projects.map((project) => (
              <Link
                key={project.id}
                href={`/works/automation/${project.id}`}
                className="block rounded-[30px] border border-paperfolio-line bg-white p-7 shadow-[0_18px_70px_rgba(31,41,55,0.05)] transition-shadow hover:shadow-[0_20px_80px_rgba(31,41,55,0.08)]"
              >
                <div className="space-y-4">
                  <div className="mb-8 aspect-[4/3] relative overflow-hidden rounded-[24px] bg-[linear-gradient(135deg,rgba(47,93,124,0.10),rgba(201,111,74,0.10),rgba(210,167,95,0.18))]">
                    <img src={project.coverImage} alt={project.title} className="h-full w-full object-cover" />
                  </div>
                  <span className="inline-flex rounded-full bg-[#e2ecf3] px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#2f5d7c]">
                    {project.status}
                  </span>
                  <p className="text-xs font-semibold uppercase tracking-[0.24em] text-paperfolio-accent-blue">{project.subtitle}</p>
                  <h3 className="text-2xl font-semibold tracking-tight text-paperfolio-text">{project.title}</h3>
                  <p className="text-sm leading-7 text-paperfolio-text-muted">{project.description}</p>
                  <div className="flex flex-wrap gap-2 pt-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-paperfolio-line bg-paperfolio-bg px-3 py-1 text-xs font-semibold text-paperfolio-text-muted"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
