import Link from "next/link";
import { notFound } from "next/navigation";
import SeriesPostList from "@/components/blog/SeriesPostList";
import ProjectSeriesHeader from "@/components/works/ProjectSeriesHeader";
import { generateMetadata as generateSeoMetadata } from "@/lib/metadata";
import { WORKS_DATA } from "@/lib/works-projects-data";

export const metadata = generateSeoMetadata({
  title: "Openclaw + SNS 카드뉴스 자동화",
  description: "Openclaw 에이전트와 SNS 카드뉴스 제작 흐름을 연결해, 아이디어 입력 하나로 이미지·텍스트·게시까지 자동화한 실전 사례입니다.",
  path: "/works/automation/openclaw-sns",
});

export default function OpenclawSnsProjectPage() {
  const work = WORKS_DATA["automation"];
  const project = work.projects.find((p) => p.id === "openclaw-sns");

  if (!project) {
    notFound();
  }

  const posts = project.steps.map((step, index) => ({
    slug: step.id,
    href: `/works/automation/openclaw-sns/${step.id}`,
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
            href="/works/automation"
            className="inline-flex items-center gap-2 text-sm font-semibold text-paperfolio-text-muted hover:text-paperfolio-accent-blue"
          >
            업무 자동화 실험실로 돌아가기
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
