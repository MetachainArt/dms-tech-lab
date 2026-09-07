import { editorialCover } from "@/lib/editorial-art";
import { ArrowUpRight, MessageCircle } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import type { WorkProject } from "@/lib/works-projects-data";
import styles from "@/components/brand/FiberContent.module.css";

const KAKAO_URL = "https://open.kakao.com/o/sSPHn33g";
interface ProjectSeriesHeaderProps {
  project: WorkProject;
  stepCount: number;
  externalLink?: { href: string; label: string };
}
export default function ProjectSeriesHeader({ project, stepCount, externalLink }: ProjectSeriesHeaderProps) {
  const conceptCover = editorialCover(`project:${project.id}`);
  const coverImage = conceptCover || project.coverImage;
  return (
    <section className={styles.series}>
      <div className={styles.seriesInner}>
        <figure>
          <div className={styles.seriesImage} style={conceptCover ? { aspectRatio: "3 / 2" } : undefined}>
            <Image src={coverImage} alt={conceptCover ? `${project.title} 콘셉트 이미지` : project.title} fill priority sizes="(max-width: 700px) 88vw, 36vw" />
          </div>
          <figcaption className={styles.seriesCaption}>
            <span className={styles.eyebrow}>{project.subtitle}</span>
            <p>{project.title}</p>
          </figcaption>
        </figure>
        <div className={styles.seriesCopy}>
          <p className={styles.eyebrow}>DMS.LABS / 진행 프로젝트</p>
          <h1>{project.title}</h1>
          <p className={styles.description}>{project.description}</p>
          <dl className={styles.facts}>
            <div><dt>분류</dt><dd>{project.category}</dd></div>
            <div><dt>단계</dt><dd>{stepCount}단계</dd></div>
            <div><dt>상태</dt><dd>{project.status}</dd></div>
          </dl>
          <div className={styles.actions}>
            <Link href={KAKAO_URL} target="_blank" rel="noopener noreferrer" className={styles.button}>
              교육문의 <MessageCircle size={16} aria-hidden="true" />
            </Link>
            {externalLink && (
              <Link href={externalLink.href} target="_blank" rel="noopener noreferrer" className={styles.button}>
                {externalLink.label} <ArrowUpRight size={16} aria-hidden="true" />
              </Link>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
