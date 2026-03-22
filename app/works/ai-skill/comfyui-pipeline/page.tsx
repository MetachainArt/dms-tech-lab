import Link from "next/link";
import { notFound } from "next/navigation";
import SeriesPostList from "@/components/blog/SeriesPostList";
import ProjectSeriesHeader from "@/components/works/ProjectSeriesHeader";
import { generateMetadata as generateSeoMetadata } from "@/lib/metadata";
import { WORKS_DATA } from "@/lib/works-projects-data";

export const metadata = generateSeoMetadata({
  title: "ComfyUI API 파이프라인 구축 가이드",
  description: "ComfyUI를 API로 연동해 외부 서버에서 이미지를 자동 생성하는 파이프라인을 처음부터 구축하는 단계별 가이드입니다.",
  path: "/works/ai-skill/comfyui-pipeline",
});

export default function ComfyuiPipelineProjectPage() {
  const work = WORKS_DATA["ai-skill"];
  const project = work.projects.find((p) => p.id === "comfyui-pipeline");

  if (!project) {
    notFound();
  }

  const posts = project.steps.map((step, index) => ({
    slug: step.id,
    href: `/works/ai-skill/comfyui-pipeline/${step.id}`,
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
