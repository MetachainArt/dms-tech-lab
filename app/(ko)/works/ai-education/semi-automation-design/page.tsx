import Link from "next/link";
import { notFound } from "next/navigation";
import SeriesPostList from "@/components/blog/SeriesPostList";
import ProjectSeriesHeader from "@/components/works/ProjectSeriesHeader";
import { generateMetadata as generateSeoMetadata } from "@/lib/metadata";
import { WORKS_DATA } from "@/lib/works-projects-data";

export const metadata: import("next").Metadata = generateSeoMetadata({
  title: "AI와 함께 배우는 반자동화 설계 입문",
  description: "도구 사용법보다 사고방식을 먼저. 문제 발견부터 바이브코딩으로 작은 프로그램을 직접 만들기까지, 5개 모듈 9시간 커리큘럼입니다.",
  path: "/works/ai-education/semi-automation-design",
});

export default function SemiAutomationDesignPage() {
  const work = WORKS_DATA["ai-education"];
  const project = work.projects.find((p) => p.id === "semi-automation-design");

  if (!project) {
    notFound();
  }

  const posts = project.steps.map((step, index) => ({
    slug: step.id,
    href: `/works/ai-education/semi-automation-design/${step.id}`,
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

      <ProjectSeriesHeader
        project={project}
        stepCount={posts.length}
        externalLink={{ href: "https://untitled-4ymcur9.gamma.site/", label: "자세한 내용 보기" }}
      />

      <section className="px-6 pb-28">
        <div className="mx-auto max-w-5xl">
          <SeriesPostList posts={posts} color={project.color} />
        </div>
      </section>
    </main>
  );
}
