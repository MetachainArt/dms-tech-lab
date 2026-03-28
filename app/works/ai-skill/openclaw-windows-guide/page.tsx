import Link from "next/link";
import { notFound } from "next/navigation";
import SeriesPostList from "@/components/blog/SeriesPostList";
import ProjectSeriesHeader from "@/components/works/ProjectSeriesHeader";
import { generateMetadata as generateSeoMetadata } from "@/lib/metadata";
import { WORKS_DATA } from "@/lib/works-projects-data";

export const metadata = generateSeoMetadata({
  title: "오픈클로 윈도우 설치 완벽 가이드",
  description: "윈도우에서 오픈클로(OpenClaw)를 처음 설치하는 분을 위한 단계별 설치 매뉴얼. WSL부터 Slack 연결까지.",
  path: "/works/ai-skill/openclaw-windows-guide",
});

export default function OpenclawWindowsGuidePage() {
  const work = WORKS_DATA["ai-skill"];
  const project = work.projects.find((p) => p.id === "openclaw-windows-guide");

  if (!project) {
    notFound();
  }

  const posts = project.steps.map((step, index) => ({
    slug: step.id,
    href: `/works/ai-skill/openclaw-windows-guide/${step.id}`,
    chapter: String(index + 1),
    title: step.title,
    excerpt: step.excerpt,
    date: step.date,
    readTime: step.readTime,
  }));

  return (
    <main className="min-h-screen bg-paperfolio-bg text-paperfolio-text selection:bg-paperfolio-accent-yellow/70 selection:text-paperfolio-text">
      <section className="px-6 pt-36">
        <div className="mx-auto max-w-7xl">
          <Link
            href="/works/ai-skill"
            className="inline-flex items-center gap-2 text-sm font-semibold text-paperfolio-text-muted hover:text-paperfolio-accent-blue"
          >
            AI 스킬 및 구축으로 돌아가기
          </Link>
        </div>
      </section>

      <ProjectSeriesHeader project={project} stepCount={posts.length} />

      <section className="px-6 pb-28">
        <div className="mx-auto max-w-5xl">
          <SeriesPostList posts={posts} color={project.color} />
        </div>
      </section>
    </main>
  );
}
