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
        <main className="min-h-screen bg-paperfolio-bg text-paperfolio-text selection:bg-paperfolio-accent-yellow/70 selection:text-paperfolio-text">
            <section className="px-6 pb-14 pt-36">
                <div className="mx-auto max-w-3xl space-y-7">
                    <Link
                        href={`/education/${trackId}`}
                        className="inline-flex items-center gap-2 text-sm font-semibold text-paperfolio-text-muted hover:text-paperfolio-accent-blue"
                    >
                        <ArrowLeft className="h-4 w-4" />
                        {track.title}
                    </Link>

                    <div className="flex flex-wrap items-center gap-3 text-sm text-paperfolio-text-muted">
                        <span className="rounded-full border border-paperfolio-accent-blue/20 bg-paperfolio-accent-blue/10 px-3 py-1 font-semibold text-paperfolio-accent-blue">
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
                        <h1 className="paperfolio-display text-paperfolio-text">
                            {String(frontmatter.title || "Untitled Lesson")}
                        </h1>
                        {frontmatter.desc ? (
                            <p className="text-lg leading-8 text-paperfolio-text-muted">{String(frontmatter.desc)}</p>
                        ) : null}
                    </div>
                </div>
            </section>

            <section className="border-t border-paperfolio-line bg-paperfolio-surface px-6 py-20">
                <div className="mx-auto max-w-3xl">
                    <article className="editorial-prose">
                        <MDXRemote source={content} components={EducationMDXComponents} options={{ mdxOptions: { remarkPlugins: [remarkGfm] } }} />
                    </article>

                    <div className="mt-16 border-t border-paperfolio-line pt-8">
                        <Link
                            href={`/education/${trackId}`}
                            className="inline-flex items-center gap-2 text-sm font-semibold text-paperfolio-text-muted hover:text-paperfolio-accent-blue"
                        >
                            <ArrowLeft className="h-4 w-4" />
                            커리큘럼으로 돌아가기
                        </Link>
                    </div>
                </div>
            </section>

            <section className="px-6 pb-24">
                <div className="mx-auto max-w-5xl rounded-[36px] bg-paperfolio-text px-8 py-12 text-white shadow-[0_24px_90px_rgba(31,41,55,0.18)] md:px-12">
                    <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
                        <div className="space-y-4">
                            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-paperfolio-accent-yellow">
                                Training
                            </p>
                            <h2 className="font-playfair text-3xl leading-tight md:text-4xl">
                                현장 팀에 맞춘 교육이 필요하신가요?
                            </h2>
                            <p className="max-w-2xl text-sm leading-7 text-white/72 md:text-base">
                                실제 운용하시는 설비와 조건에 맞춰 커리큘럼을 다시 구성할 수 있습니다.
                            </p>
                        </div>
                        <Link
                            href="/#contact"
                            className="inline-flex items-center justify-center rounded-full bg-white px-7 py-4 text-sm font-semibold text-paperfolio-text hover:bg-paperfolio-accent-yellow"
                        >
                            문의하기
                        </Link>
                    </div>
                </div>
            </section>
        </main>
    );
}
