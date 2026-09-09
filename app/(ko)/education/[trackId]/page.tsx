import { EDUCATION_TRACKS } from "@/lib/education-data";
import { getCourseStructure } from "@/lib/education-fs";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import EducationAccordion from "@/components/education/EducationAccordion";
import { editorialCover } from "@/lib/editorial-art";
import styles from "@/components/brand/FiberContent.module.css";

interface PageProps {
    params: Promise<{
        trackId: string;
    }>;
}

export default async function EducationTrackPage({ params }: PageProps) {
    const { trackId } = await params;
    const track = EDUCATION_TRACKS[trackId];

    if (!track) {
        return notFound();
    }

    const course = getCourseStructure(trackId);

    if (!course || course.chapters.length === 0) {
        return (
            <main className="min-h-screen bg-paperfolio-bg text-paperfolio-text pt-36 pb-24">
                <div className="mx-auto max-w-3xl px-6 text-center">
                    <p className="paperfolio-body">준비 중인 과정입니다.</p>
                    <Link href="/education" className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-paperfolio-accent-blue">
                        <ArrowLeft className="h-4 w-4" />
                        교육으로 돌아가기
                    </Link>
                </div>
            </main>
        );
    }

    const lessonCount = course.chapters.reduce((sum, chapter) => sum + chapter.lessons.length, 0);
    const firstLesson = course.chapters.flatMap(chapter => chapter.lessons)[0];
    const cover = firstLesson ? editorialCover(`content/education/${trackId}/${firstLesson.path.replaceAll('\\', '/')}`) : undefined;

    return (
        <main className={styles.page}>
            <section className="px-6 pb-16 pt-36">
                <div className="mx-auto max-w-7xl">
                    <Link
                        href="/education"
                        className="mb-10 inline-flex items-center gap-2 text-sm font-semibold text-paperfolio-text-muted hover:text-paperfolio-accent-blue"
                    >
                        <ArrowLeft className="h-4 w-4" />
                        교육으로 돌아가기
                    </Link>

                    <div className="grid gap-12 md:grid-cols-2 md:items-center">
                        <div className="relative order-2 aspect-[4/3] w-full overflow-hidden bg-paperfolio-surface">
                            <Image src={cover || track.image} alt={track.title} fill sizes="(max-width: 767px) 90vw, 45vw" className="object-cover" />
                        </div>

                        <div className="order-1 space-y-5">
                            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-paperfolio-accent-blue">
                                Vol. {track.vol}
                            </p>
                            <h1 className={styles.fttxTitle}>{track.title}</h1>
                            <p className="paperfolio-body max-w-2xl">{track.description}</p>

                            <div className="flex flex-wrap gap-2 pt-2">
                                {track.tags.map((tag) => (
                                    <span
                                        key={tag}
                                        className="rounded-full border border-paperfolio-line bg-white px-3 py-1 text-xs font-semibold text-paperfolio-text-muted"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>

                            <div className="flex items-center gap-6 pt-2 text-sm text-paperfolio-text-muted">
                                <span>{course.chapters.length} chapters</span>
                                <span>{lessonCount} lessons</span>
                            </div>

                            {track.externalLink ? (
                                <div className="pt-2">
                                    <a
                                        href={track.externalLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center justify-center rounded-full bg-paperfolio-text px-7 py-4 text-sm font-semibold text-white hover:bg-paperfolio-accent-blue"
                                    >
                                        공식 사이트 보기
                                    </a>
                                </div>
                            ) : null}
                        </div>
                    </div>
                </div>
            </section>

            <section className="border-t border-paperfolio-line bg-paperfolio-surface px-6 py-20">
                <div className="mx-auto max-w-3xl">
                    <div className="mb-10 space-y-3">
                        <p className="text-sm font-semibold uppercase tracking-[0.24em] text-paperfolio-accent-blue">Curriculum</p>
                        <h2 className="paperfolio-h2 text-paperfolio-text">커리큘럼</h2>
                    </div>

                    <EducationAccordion chapters={course.chapters} trackId={trackId} />
                </div>
            </section>
        </main>
    );
}
