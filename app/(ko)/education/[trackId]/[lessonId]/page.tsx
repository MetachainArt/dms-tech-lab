import styles from "@/components/brand/FiberArticle.module.css";
import Image from "next/image";
import { EDUCATION_TRACKS } from "@/lib/education-data";
import { getLessonBySlug } from "@/lib/education-fs";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Calendar, Clock } from "lucide-react";
import { MDXRemote } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";
import { EducationMDXComponents } from "@/components/education/EducationMDXComponents";

interface PageProps {
    params: Promise<{
        trackId: string;
        lessonId: string;
    }>;
}

export default async function LessonPage({ params }: PageProps) {
    const { trackId, lessonId } = await params;
    const track = EDUCATION_TRACKS[trackId];

    if (!track) return notFound();

    const lessonData = getLessonBySlug(trackId, lessonId);

    if (!lessonData) {
        return (
            <main className="flex min-h-screen flex-col items-center justify-center bg-paperfolio-bg px-6 pt-32 text-paperfolio-text">
                <h1 className="paperfolio-h2 mb-4">준비 중인 강의입니다</h1>
                <p className="paperfolio-body mb-8">이 강의의 내용은 곧 공개됩니다.</p>
                <Link
                    href={`/education/${trackId}`}
                    className="inline-flex items-center gap-2 text-sm font-semibold text-paperfolio-accent-blue hover:text-paperfolio-accent-coral"
                >
                    <ArrowLeft className="h-4 w-4" />
                    커리큘럼으로 돌아가기
                </Link>
            </main>
        );
    }

    const { frontmatter, content, chapter } = lessonData;

    return (
        <main className={styles.page}>
            <section className={styles.header}>
                <div className={styles.inner}>
                  <div className={styles.copy}>
                    <div className={styles.rail}>
                    <Link
                        href={`/education/${trackId}`}
                        className={styles.back}
                    >
                        <ArrowLeft className="h-4 w-4" />
                        {track.title}
                    </Link>
                      <span className={styles.railLabel}>DMS ACADEMY / LEARNING NOTES</span>
                    </div>

                    <div className={styles.meta}>
                        <span className={styles.category}>
                            {chapter.title}
                        </span>
                        {frontmatter.date ? (
                            <span className="inline-flex items-center gap-2">
                                <Calendar className="h-4 w-4" />
                                {String(frontmatter.date)}
                            </span>
                        ) : null}
                        <span className="inline-flex items-center gap-2">
                            <Clock className="h-4 w-4" />
                            {String(frontmatter.readTime || "10 min")}
                        </span>
                    </div>

                    <div className="space-y-5">
                        <h1 className={styles.title}>
                            {String(frontmatter.title || "Untitled Lesson")}
                        </h1>
                        {frontmatter.desc ? (
                            <p className={styles.summary}>{String(frontmatter.desc)}</p>
                        ) : null}
                    </div>
                  </div>
                  {typeof frontmatter.coverImage === "string" && (
                    <figure className={styles.cover}>
                      <div className={styles.coverImage}>
                        <Image src={frontmatter.coverImage} alt={String(frontmatter.title || track.title)} fill priority sizes="(max-width: 767px) 100vw, 78vw" />
                      </div>
                      <figcaption><span>DMS / LEARNING STUDY</span></figcaption>
                    </figure>
                  )}
                </div>
            </section>

            <section className={styles.body}>
                <div className={styles.reading}>
                    <article className={`editorial-prose ${styles.prose}`}>
                        <MDXRemote source={content} components={{ ...EducationMDXComponents, h1: EducationMDXComponents.h2 }} options={{ mdxOptions: { remarkPlugins: [remarkGfm] } }} />
                    </article>

                    <div className="mt-16 border-t border-paperfolio-line pt-8">
                        <Link
                            href={`/education/${trackId}`}
                            className={styles.back}
                        >
                            <ArrowLeft className="h-4 w-4" />
                            커리큘럼으로 돌아가기
                        </Link>
                    </div>
                </div>
            </section>

            <section className={styles.cta}>
                <div className={styles.ctaInner}>
                    <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
                        <div className="space-y-4">
                            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-paperfolio-accent-yellow">
                                Training
                            </p>
                            <h2 className={styles.ctaTitle}>
                                현장 팀에 맞춘 교육이 필요하신가요?
                            </h2>
                            <p className="max-w-2xl text-sm leading-7 text-white/72 md:text-base">
                                실제 운용하시는 설비와 조건에 맞춰 커리큘럼을 다시 구성할 수 있습니다.
                            </p>
                        </div>
                        <Link
                            href="/#contact"
                            className={styles.ctaLink}
                        >
                            문의하기
                        </Link>
                    </div>
                </div>
            </section>
        </main>
    );
}
