import styles from "@/components/brand/FiberArticle.module.css";
import Image from "next/image";
import { EDUCATION_TRACKS } from "@/lib/education-data";
import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import type { ComponentProps } from "react";
import { ArticleFigure, ArticleNextImage, ArticleTable } from "@/components/mdx/ArticleFigure";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Calendar, Clock } from "lucide-react";
import { MDXRemote } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";
import { EducationMDXComponents } from "@/components/education/EducationMDXComponents";
import { generateMetadata as generateSeoMetadata } from "@/lib/metadata";

const LESSON_ID = "dome-closure-seal-flash-test";
const EnglishEducationMDX = {
  ...EducationMDXComponents,
  img: (props: ComponentProps<typeof ArticleFigure>) => <ArticleFigure {...props} locale="en" />,
  Image: (props: ComponentProps<typeof ArticleNextImage>) => <ArticleNextImage {...props} locale="en" />,
  table: (props: ComponentProps<typeof ArticleTable>) => <ArticleTable {...props} locale="en" />,
};
function getEnglishLesson() {
  const file = path.join(process.cwd(), "content", "education-en", "optical-training", LESSON_ID + ".mdx");
  if (!fs.existsSync(file)) return null;
  const { data, content } = matter(fs.readFileSync(file, "utf8"));
  return { frontmatter: data as Record<string, unknown>, content, chapter: { title: "Supplementary lesson" } };
}

// 레슨별 고유 title·description·self canonical. 본문 frontmatter(title/desc/coverImage)를 그대로 쓴다.
export async function generateMetadata() {
    const trackId = "optical-training"; const lessonId = LESSON_ID;
    const track = EDUCATION_TRACKS[trackId];
    if (!track) return;

    const lessonData = getEnglishLesson();
    const path = `/en/education/${track.id}/${lessonId}`;

    if (!lessonData) {
        // 준비 중 안내만 나오는 주소는 색인하지 않는다.
        return generateSeoMetadata({ title: track.title, description: track.description, path, noIndex: true });
    }

    const { frontmatter } = lessonData;
    const title = typeof frontmatter.title === "string" && frontmatter.title ? frontmatter.title : track.title;
    const description = typeof frontmatter.desc === "string" && frontmatter.desc ? frontmatter.desc : track.description;

    return generateSeoMetadata({
        title,
        description,
        path,
        image: typeof frontmatter.coverImage === "string" ? frontmatter.coverImage : undefined,
        keywords: track.tags,
    });
}

export default async function LessonPage() {
    const trackId = "optical-training"; const lessonId = LESSON_ID;
    const track = EDUCATION_TRACKS[trackId];

    if (!track) return notFound();

    const lessonData = getEnglishLesson();

    if (!lessonData) {
        return (
            <main className="flex min-h-screen flex-col items-center justify-center bg-paperfolio-bg px-6 pt-32 text-paperfolio-text">
                <h1 className="paperfolio-h2 mb-4">Lesson in preparation</h1>
                <p className="paperfolio-body mb-8">This lesson is not available yet.</p>
                <Link
                    href="/fttx-training"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-paperfolio-accent-blue hover:text-paperfolio-accent-coral"
                >
                    <ArrowLeft className="h-4 w-4" />
                    Back to the curriculum
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
                        href="/fttx-training"
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
                        <MDXRemote source={content} components={{ ...EnglishEducationMDX, h1: EducationMDXComponents.h2 }} options={{ mdxOptions: { remarkPlugins: [remarkGfm] } }} />
                    </article>

                    <div className="mt-16 border-t border-paperfolio-line pt-8">
                        <Link
                            href="/fttx-training"
                            className={styles.back}
                        >
                            <ArrowLeft className="h-4 w-4" />
                            Back to the curriculum
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
                                Need training for your field team?
                            </h2>
                            <p className="max-w-2xl text-sm leading-7 text-white/72 md:text-base">
                                Training can be adapted to the plant, equipment and operating conditions your team works with.
                            </p>
                        </div>
                        <Link
                            href="/en/#contact"
                            className={styles.ctaLink}
                        >
                            Get in touch
                        </Link>
                    </div>
                </div>
            </section>
        </main>
    );
}
