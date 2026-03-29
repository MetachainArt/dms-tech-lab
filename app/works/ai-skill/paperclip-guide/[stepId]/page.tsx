import { ArrowLeft, Calendar, Clock } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import AuthorCard from "@/components/blog/AuthorCard";
import { MDXComponents } from "@/components/mdx/MDXComponents";
import StepNavigation from "@/components/works/StepNavigation";
import { generateMetadata as generateSeoMetadata } from "@/lib/metadata";
import { WORKS_DATA } from "@/lib/works-projects-data";

export async function generateMetadata(props: { params: Promise<{ stepId: string }> }) {
  const params = await props.params;
  const work = WORKS_DATA["ai-skill"];
  const project = work.projects.find((p) => p.id === "paperclip-guide");
  const step = project?.steps.find((s) => s.id === params.stepId);

  if (!step) {
    return;
  }

  return generateSeoMetadata({
    title: step.title,
    description: step.excerpt,
    path: `/works/ai-skill/paperclip-guide/${step.id}`,
  });
}

export async function generateStaticParams() {
  const work = WORKS_DATA["ai-skill"];
  const project = work.projects.find((p) => p.id === "paperclip-guide");

  if (!project) return [];

  return project.steps.map((step) => ({
    stepId: step.id,
  }));
}

export default async function StepDetailPage(props: { params: Promise<{ stepId: string }> }) {
  const params = await props.params;
  const work = WORKS_DATA["ai-skill"];
  const project = work.projects.find((p) => p.id === "paperclip-guide");
  const step = project?.steps.find((s) => s.id === params.stepId);

  if (!project || !step) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-paperfolio-bg text-paperfolio-text selection:bg-paperfolio-accent-yellow/70 selection:text-paperfolio-text">
      <section className="px-6 pb-14 pt-36">
        <div className="mx-auto max-w-3xl space-y-7">
          <Link
            href="/works/ai-skill/paperclip-guide"
            className="inline-flex items-center gap-2 text-sm font-semibold text-paperfolio-text-muted hover:text-paperfolio-accent-blue"
          >
            <ArrowLeft className="h-4 w-4" />
            프로젝트로 돌아가기
          </Link>

          <div className="flex flex-wrap items-center gap-3 text-sm text-paperfolio-text-muted">
            <span className="rounded-full border border-paperfolio-accent-blue/20 bg-paperfolio-accent-blue/10 px-3 py-1 font-semibold text-paperfolio-accent-blue">
              {project.title}
            </span>
            <time dateTime={step.date} className="inline-flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              {step.date}
            </time>
            <span className="inline-flex items-center gap-2">
              <Clock className="h-4 w-4" />
              {step.readTime}
            </span>
          </div>

          <div className="space-y-5">
            <h1 className="paperfolio-display text-paperfolio-text">{step.title}</h1>
            <p className="text-lg leading-8 text-paperfolio-text-muted">{step.excerpt}</p>
          </div>
        </div>
      </section>

      <section className="border-t border-paperfolio-line bg-paperfolio-surface px-6 py-20">
        <div className="mx-auto max-w-3xl">
          <article className="editorial-prose">
            <MDXRemote source={step.content} components={MDXComponents} />
          </article>
          <StepNavigation
            steps={project.steps}
            currentStepId={step.id}
            basePath="/works/ai-skill/paperclip-guide"
          />
          <AuthorCard />
        </div>
      </section>

      <section className="px-6 pb-24">
        <div className="mx-auto max-w-5xl rounded-[36px] bg-paperfolio-text px-8 py-12 text-white shadow-[0_24px_90px_rgba(31,41,55,0.18)] md:px-12">
          <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
            <div className="space-y-4">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-paperfolio-accent-yellow">다음 대화</p>
              <h2 className="font-playfair text-3xl leading-tight md:text-4xl">읽고 끝내지 말고, 실제 문제로 이어가도 좋습니다.</h2>
              <p className="max-w-2xl text-sm leading-7 text-white/72 md:text-base">
                자동화, 설계, 교육, 콘텐츠 중 무엇이든 지금 필요한 문제부터 같이 정리해볼 수 있습니다.
              </p>
            </div>
            <Link
              href="/#contact"
              className="inline-flex items-center justify-center rounded-full bg-white px-7 py-4 text-sm font-semibold text-paperfolio-text hover:bg-paperfolio-accent-yellow"
            >
              편하게 문의하기
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
