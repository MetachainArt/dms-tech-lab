import Link from "next/link";
import { notFound } from "next/navigation";
import SeriesPostList from "@/components/blog/SeriesPostList";
import ProjectSeriesHeader from "@/components/works/ProjectSeriesHeader";
import { generateMetadata as generateSeoMetadata } from "@/lib/metadata";
import { WORKS_DATA } from "@/lib/works-projects-data";

export const metadata = generateSeoMetadata({
  title: "AX 전환 플레이북",
  description: "업무 지도 작성부터 핸드오프 설계, 도입 후 90일 측정까지. 조직의 일을 AI 기준으로 다시 설계할 때 실제로 밟게 되는 순서를 정리했습니다.",
  path: "/works/ax/ax-playbook",
});

export default function AxPlaybookPage() {
  const work = WORKS_DATA["ax"];
  const project = work.projects.find((p) => p.id === "ax-playbook");

  if (!project) {
    notFound();
  }

  const posts = project.steps.map((step, index) => ({
    slug: step.id,
    href: `/works/ax/ax-playbook/${step.id}`,
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
            href="/works/ax"
            className="inline-flex items-center gap-2 text-sm font-semibold text-paperfolio-text-muted hover:text-paperfolio-accent-blue"
          >
            AX 전환 설계로 돌아가기
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
