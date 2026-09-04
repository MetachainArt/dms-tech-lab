import Link from "next/link";
import { ArrowLeft, Calendar, Clock } from "lucide-react";

import type { WorkProject, WorkStep } from "@/lib/works-projects-data";

interface StepArticleHeaderProps {
  project: WorkProject;
  step: WorkStep;
  /** 프로젝트 목록으로 돌아가는 경로 */
  basePath: string;
  /** 상위 랜딩 이름 (예: "AX 전환 설계") */
  parentLabel?: string;
  parentPath?: string;
}

/**
 * 연재 글 상단부.
 *
 * 기존 헤더는 뒤로가기 · 배지 · 제목 · 요약을 평평하게 쌓기만 했다.
 * 여기서는 몇 번째 글인지를 큰 숫자로 세우고, 그 아래에 진행 눈금을 둬서
 * 연재 중 어디쯤인지가 읽기 전에 보이게 한다.
 */
export default function StepArticleHeader({
  project,
  step,
  basePath,
  parentLabel,
  parentPath,
}: StepArticleHeaderProps) {
  const index = project.steps.findIndex((s) => s.id === step.id);
  const current = index < 0 ? 1 : index + 1;
  const total = project.steps.length;

  return (
    <section className="relative overflow-hidden border-b border-paperfolio-line bg-paperfolio-bg px-6 pb-16 pt-36">
      {/* 배경 도형 — 아주 옅게 깔리는 큰 원 */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 -top-24 h-[420px] w-[420px] rounded-full border border-paperfolio-line/70"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-8 top-24 h-[260px] w-[260px] rounded-full bg-paperfolio-accent-blue/[0.05]"
      />

      <div className="relative mx-auto max-w-3xl">
        <nav className="flex flex-wrap items-center gap-2 text-sm text-paperfolio-text-muted">
          <Link href={basePath} className="inline-flex items-center gap-1.5 hover:text-paperfolio-accent-blue">
            <ArrowLeft className="h-4 w-4" />
            {project.title}
          </Link>
          {parentLabel && parentPath ? (
            <>
              <span className="opacity-40">·</span>
              <Link href={parentPath} className="hover:text-paperfolio-accent-blue">
                {parentLabel}
              </Link>
            </>
          ) : null}
        </nav>

        <div className="mt-10 flex items-start gap-6">
          <div className="shrink-0 pt-1">
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-paperfolio-text-muted">
              {String(current).padStart(2, "0")}
            </p>
            <p className="font-playfair text-5xl leading-none text-paperfolio-accent-blue md:text-6xl">
              {current}
            </p>
            <p className="mt-1 text-[11px] tracking-[0.16em] text-paperfolio-text-muted">/ {total}</p>
          </div>

          <div className="min-w-0 flex-1 space-y-5">
            <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-paperfolio-accent-coral">
              {project.subtitle}
            </p>
            <h1 className="paperfolio-display text-paperfolio-text">{step.title}</h1>
            <p className="text-lg leading-8 text-paperfolio-text-muted">{step.excerpt}</p>

            <div className="flex flex-wrap items-center gap-4 pt-1 text-sm text-paperfolio-text-muted">
              <time dateTime={step.date} className="inline-flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                {step.date}
              </time>
              <span className="inline-flex items-center gap-2">
                <Clock className="h-4 w-4" />
                {step.readTime}
              </span>
            </div>
          </div>
        </div>

        {/* 연재 진행 눈금 */}
        <div className="mt-10 flex gap-1.5" aria-hidden="true">
          {project.steps.map((s, i) => (
            <span
              key={s.id}
              className={`h-1 flex-1 rounded-full transition-colors ${
                i < current ? "bg-paperfolio-accent-blue" : "bg-paperfolio-line"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
