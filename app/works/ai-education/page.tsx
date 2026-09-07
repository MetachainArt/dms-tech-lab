import { editorialCover } from "@/lib/editorial-art";
import Link from "next/link";
import Image from "next/image";
import styles from "@/components/brand/FiberContent.module.css";
import { ArrowLeft } from "lucide-react";
import { generateMetadata as generateSeoMetadata } from "@/lib/metadata";
import { WORKS_DATA } from "@/lib/works-projects-data";

export const metadata = generateSeoMetadata({
  title: "실무형 AI 교육 프로그램 설계",
  description: "처음 배우는 사람도 바로 써볼 수 있도록 실습 중심 커리큘럼과 예제를 설계했습니다.",
  path: "/works/ai-education",
});

export default function AiEducationLandingPage() {
  const work = WORKS_DATA["ai-education"];

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
            <p className={styles.eyebrow}>DMS.LABS / AI Education</p>
            <p className={styles.display} aria-hidden="true">Learn.<br /><em>Apply.</em></p>
            <h1 className={styles.title}>{work.title}</h1>
            <p className={styles.description}>{work.description}</p>
          </header>

          <div className={styles.grid}>
            {work.projects.map((project) => (
              <Link
                key={project.id}
                href={`/works/ai-education/${project.id}`}
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
