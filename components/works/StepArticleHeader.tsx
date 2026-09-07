import { editorialCover } from "@/lib/editorial-art";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Calendar, Clock } from "lucide-react";

import type { WorkProject, WorkStep } from "@/lib/works-projects-data";
import styles from "./StepArticleHeader.module.css";

interface StepArticleHeaderProps {
  project: WorkProject;
  step: WorkStep;
  /** 프로젝트 목록으로 돌아가는 경로 */
  basePath: string;
  /** 상위 랜딩 이름 (예: "AX 전환 설계") */
  parentLabel?: string;
  parentPath?: string;
}

/** Shared chapter header; source content and project navigation remain unchanged. */
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
  // WorkStep has no cover field. Reuse the project's reference only when the chapter has no image.
  const hasBodyImage = /!\[[^\]]*\]\(|<(?:img|Image)\b/.test(step.content);
  const conceptCover = editorialCover(`project:${project.id}`);
  const coverImage = !hasBodyImage ? conceptCover || project.coverImage : undefined;

  return (
    <section className={styles.header}>
      <div className={styles.inner}>
        <nav className={styles.breadcrumbs} aria-label="프로젝트 경로">
          <Link href={basePath}>
            <ArrowLeft className="h-4 w-4" />
            {project.title}
          </Link>
          {parentLabel && parentPath ? (
            <>
              <span className="opacity-40">·</span>
              <Link href={parentPath}>
                {parentLabel}
              </Link>
            </>
          ) : null}
        </nav>

        <div className={styles.composition}>
          <div className={styles.serial} aria-label={`전체 ${total}개 글 중 ${current}번째 글`}>
            <p className={styles.serialLabel}>FIELD NOTES</p>
            <p className={styles.number} aria-hidden="true">
              {String(current).padStart(2, "0")}
            </p>
            <p className={styles.total} aria-hidden="true">/ {String(total).padStart(2, "0")}</p>
          </div>

          <div className={styles.copy}>
            <p className={styles.eyebrow}>
              {project.subtitle}
            </p>
            <h1 className={styles.title}>{step.title}</h1>
            <p className={styles.description}>{step.excerpt}</p>

            <div className={styles.meta}>
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
        <div className={styles.progress} aria-hidden="true">
          {project.steps.map((s, i) => (
            <span
              key={s.id}
              className={i < current ? styles.complete : undefined}
            />
          ))}
        </div>
        {coverImage ? (
          <figure className={styles.cover}>
            <div className={styles.image}>
              <Image src={coverImage} alt={`${project.title} ${conceptCover ? "콘셉트 이미지" : "프로젝트 대표 이미지"}`} fill sizes="(max-width: 767px) 90vw, 70vw" />
            </div>
            <figcaption className={styles.caption}>
              {!conceptCover ? <span>{`프로젝트 대표 이미지 · ${project.title}`}</span> : null}
              <a href={coverImage} target="_blank" rel="noopener noreferrer">원본 전체 보기 ↗</a>
            </figcaption>
          </figure>
        ) : null}
      </div>
    </section>
  );
}
