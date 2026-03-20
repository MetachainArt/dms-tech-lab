import Link from "next/link";
import { notFound } from "next/navigation";
import SeriesPostList from "@/components/blog/SeriesPostList";
import ProjectSeriesHeader from "@/components/works/ProjectSeriesHeader";
import { generateMetadata as generateSeoMetadata } from "@/lib/metadata";
import { WORKS_DATA } from "@/lib/works-projects-data";

export const metadata = generateSeoMetadata({
  title: "생성형 활용 및 바이브코딩 자동화",
  description: "생성형 AI 활용부터 이미지·영상·음악 생성, 바이브코딩, 자동화, Openclaw까지 — 12회 격주 2시간, 실습 중심 AI 커리큘럼입니다.",
  path: "/works/ai-education/icheon-ai",
});

export default function IcheonAiProjectPage() {
  const work = WORKS_DATA["ai-education"];
  const project = work.projects.find((p) => p.id === "icheon-ai");

  if (!project) {
    notFound();
  }

  const posts = project.steps.map((step, index) => ({
    slug: step.id,
    href: `/works/ai-education/icheon-ai/${step.id}`,
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
            href="/works/ai-education"
            className="inline-flex items-center gap-2 text-sm font-semibold text-paperfolio-text-muted hover:text-paperfolio-accent-blue"
          >
            실무형 AI 교육 프로그램 설계로 돌아가기
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
