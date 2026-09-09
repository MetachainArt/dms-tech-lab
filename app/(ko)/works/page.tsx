import FiberPageHeader from "@/components/brand/FiberPageHeader";
import styles from "@/components/brand/FiberPages.module.css";
import Link from "next/link";
import ProjectCover from "@/components/brand/ProjectCover";
import { ArrowRight } from "lucide-react";
import { generateMetadata as generateSeoMetadata } from "@/lib/metadata";
import { SHOWCASE_WORKS } from "@/lib/works-showcase";

export const metadata = generateSeoMetadata({
  title: "대표 작업",
  description: "자동화, 설계, 교육, 콘텐츠까지 리도가 직접 만들고 운영한 대표 작업들을 따로 모았습니다.",
  path: "/works",
});

export default function WorksPage() {
  return (
    <main className={styles.page}>
      <FiberPageHeader
        eyebrow="Projects / Works" lead="Proof of" accent="possibility." variant="projects"
        title="작업"
        description="자동화, 설계, 교육, 콘텐츠를 어떻게 실제 결과로 만들었는지 따로 모았습니다. 작업만 따로 보고 판단할 수 있는 페이지입니다."
        note={<><span>{SHOWCASE_WORKS.length} works · 2024 — 2026</span><span>The work speaks before the words do</span></>}
      />

      <section className={styles.section}>
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div className="space-y-4">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-paperfolio-accent-blue">Works</p>
              <h2 className="paperfolio-h1">지금 보고 싶은 작업부터 고르면 됩니다</h2>
            </div>
          </div>

          <div className={styles.workGrid}>
            {SHOWCASE_WORKS.map((work, index) => {
              const isExternalLink = Boolean(work.link?.startsWith("http"));
              const content = (
                <>
                  <div className={styles.workImage}>
                    <ProjectCover work={work} index={index} />
                  </div>
                  <h3 className="text-2xl font-semibold tracking-tight text-paperfolio-text">{work.title}</h3>
                  <p className="text-sm leading-7 text-paperfolio-text-muted">{work.summary}</p>
                  <div className="flex flex-wrap gap-2 pt-2">
                    {work.tags.map((tag) => (
                      <span
                        key={tag}
                        className={styles.tag}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  {work.link ? (
                    <span className="inline-flex items-center gap-2 pt-2 text-sm font-semibold text-paperfolio-text">
                      작업 보기
                      <ArrowRight className="h-4 w-4" />
                    </span>
                  ) : null}
                </>
              );

              if (!work.link) {
                return (
                  <article key={work.title} className={styles.workEntry}>
                    <div className="space-y-4">{content}</div>
                  </article>
                );
              }

              return isExternalLink ? (
                <a
                  key={work.title}
                  href={work.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.workEntry}
                >
                  <div className="space-y-4">{content}</div>
                </a>
              ) : (
                <Link
                  key={work.title}
                  href={work.link}
                  className={styles.workEntry}
                >
                  <div className="space-y-4">{content}</div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}
