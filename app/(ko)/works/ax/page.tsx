import { editorialCover } from "@/lib/editorial-art";
import Link from "next/link";
import Image from "next/image";
import styles from "@/components/brand/FiberContent.module.css";
import { ArrowLeft } from "lucide-react";
import { generateMetadata as generateSeoMetadata } from "@/lib/metadata";
import { WORKS_DATA } from "@/lib/works-projects-data";

export const metadata = generateSeoMetadata({
  title: "AX 전환 설계",
  description: "도구 몇 개를 붙이는 자동화가 아니라, 업무 흐름 전체를 AI 기준으로 다시 설계하는 과정을 단계별로 정리했습니다.",
  path: "/works/ax",
});

export default function AxLandingPage() {
  const work = WORKS_DATA["ax"];

  return (
    <main className={styles.page}>
      <section className={styles.container}>
        <div className="mx-auto max-w-7xl">
          <div>
            <Link
              href="/works"
              className={styles.back}
            >
              <ArrowLeft className="h-4 w-4" />
              대표 작업으로 돌아가기
            </Link>
          </div>

          <header className={styles.hero}>
            <p className={styles.eyebrow}>DMS.LABS / AX Transformation</p>
            <p className={styles.display} aria-hidden="true">Rethink the<br /><em>workflow.</em></p>
            <h1 className={styles.title}>{work.title}</h1>
            <p className={styles.description}>{work.description}</p>
          </header>

          <div className={styles.grid}>
            <Link href="/works/ai-performance-measurement" className={styles.entry}>
              <div className="space-y-4">
                <div className={styles.image}><Image src="/images/works/ai-performance-measurement/measurement.webp" alt="업무 성과를 기록하는 책상 장면" fill sizes="(max-width: 700px) 88vw, 44vw" /></div>
                <span className={styles.eyebrow}>실무 가이드 · 한국어 / English</span>
                <p className={styles.eyebrow}>AI PERFORMANCE MEASUREMENT</p>
                <h2>AI 도입 성과 측정</h2>
                <p className="text-sm leading-7 text-paperfolio-text-muted">매출·비용·검수시간을 함께 보는 법. KISDI 연구를 바탕으로 기준선과 검수 비용, 확대·수정·중단 기준을 정리했습니다.</p>
                <div className={styles.tags}><span>AX</span><span>성과 측정</span><span>실무 가이드</span></div>
              </div>
            </Link>
            {work.projects.map((project) => (
              <Link
                key={project.id}
                href={`/works/ax/${project.id}`}
                className={styles.entry}
              >
                <div className="space-y-4">
                  <div className={styles.image}>
                    <Image src={editorialCover(`project:${project.id}`) || project.coverImage} alt={editorialCover(`project:${project.id}`) ? `${project.title} 콘셉트 이미지` : project.title} fill sizes="(max-width: 700px) 88vw, 44vw" />
                  </div>
                  <span className={styles.eyebrow}>
                    {project.status}
                  </span>
                  <p className={styles.eyebrow}>{project.subtitle}</p>
                  <h2>{project.title}</h2>
                  <p className="text-sm leading-7 text-paperfolio-text-muted">{project.description}</p>
                  <div className={styles.tags}>
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
