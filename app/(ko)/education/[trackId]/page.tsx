import { EDUCATION_TRACKS } from "@/lib/education-data";
import { getCourseStructure } from "@/lib/education-fs";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import EducationAccordion from "@/components/education/EducationAccordion";
import { editorialCover } from "@/lib/editorial-art";
import styles from "@/components/brand/FiberContent.module.css";
import { generateMetadata as generateSeoMetadata } from "@/lib/metadata";

// 광통신 현장 교육 FAQ (2026-10-11 사용자 결정: 교육 일수·비용·정원·수료 방식은 '문의 시 안내'로 공개)
function opticalTrainingFaq(lessonCount: number) {
    return [
        {
            q: "광통신 현장 교육은 어떤 내용을 다루나요?",
            a: `이 페이지의 FTTx 광통신 커리큘럼 ${lessonCount}강을 기본으로 합니다. 망 구조, 분기 손실, 광 파워 버지트, 접속함체 작업, 장애 위치 찾기처럼 현장에서 링크가 살아나는지를 가르는 판단을 다룹니다.`,
        },
        {
            q: "현장 교육의 일수, 비용, 정원, 수료 방식은 어떻게 정해지나요?",
            a: "교육 대상, 인원, 운영 중인 설비와 현장 조건에 맞춰 상담한 뒤 안내합니다. 문의하실 때 팀 규모와 자주 막히는 작업을 함께 적어 주시면 더 정확하게 답할 수 있습니다.",
        },
        {
            q: "우리 팀이 쓰는 장비와 설비에 맞춰 교육할 수 있나요?",
            a: "네. 실제로 운영하는 분기비, 접속함체, 측정 기록을 기준으로 내용을 구성합니다.",
        },
        {
            q: "누가 가르치나요?",
            a: "리도(박종선)가 직접 가르칩니다. 광통신 인프라와 FTTx 장비 설계·개발을 20년 가까이 해 왔고, 베트남·태국·뉴질랜드·프랑스·카타르·레바논·중국·인도네시아·오만 9개국 현장에서 엔지니어 교육을 진행했습니다.",
        },
        {
            q: "어떤 언어와 방식으로 진행하나요?",
            a: "한국어와 영어로 진행할 수 있고, 한국을 기반으로 화상 미팅(Zoom·Meet)을 포함해 원격으로도 협업합니다. 방문 교육 여부는 현장 조건에 맞춰 상담합니다.",
        },
        {
            q: "어디로 문의하나요?",
            a: "이메일 dms@dmssolution.co.kr 로 문의해 주세요. 영업일 기준 1~2일 안에 답장합니다.",
        },
    ];
}

interface PageProps {
    params: Promise<{
        trackId: string;
    }>;
}

// 트랙별 고유 title·description·self canonical (기존 트랙 제목·설명 사용)
export async function generateMetadata({ params }: PageProps) {
    const { trackId } = await params;
    const track = EDUCATION_TRACKS[trackId];
    if (!track) return;

    return generateSeoMetadata({
        title: track.title,
        description: track.description,
        path: `/education/${track.id}`,
        keywords: track.tags,
    });
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

            {trackId === "optical-training" ? (
                <section className="border-t border-paperfolio-line px-6 py-20">
                    <script
                        type="application/ld+json"
                        dangerouslySetInnerHTML={{
                            __html: JSON.stringify({
                                "@context": "https://schema.org",
                                "@type": "FAQPage",
                                mainEntity: opticalTrainingFaq(lessonCount).map((item) => ({
                                    "@type": "Question",
                                    name: item.q,
                                    acceptedAnswer: { "@type": "Answer", text: item.a },
                                })),
                            }),
                        }}
                    />
                    <div className="mx-auto max-w-3xl">
                        <div className="mb-10 space-y-3">
                            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-paperfolio-accent-blue">FAQ</p>
                            <h2 className="paperfolio-h2 text-paperfolio-text">현장 교육 자주 묻는 질문</h2>
                        </div>
                        <dl className="space-y-8">
                            {opticalTrainingFaq(lessonCount).map((item) => (
                                <div key={item.q} className="border-b border-paperfolio-line pb-6">
                                    <dt className="text-lg font-semibold text-paperfolio-text">{item.q}</dt>
                                    <dd className="paperfolio-body mt-3">{item.a}</dd>
                                </div>
                            ))}
                        </dl>
                        <a
                            href="mailto:dms@dmssolution.co.kr?subject=%EA%B4%91%ED%86%B5%EC%8B%A0%20%ED%98%84%EC%9E%A5%20%EA%B5%90%EC%9C%A1%20%EB%AC%B8%EC%9D%98"
                            className="mt-10 inline-flex items-center justify-center rounded-full bg-paperfolio-text px-7 py-4 text-sm font-semibold text-white hover:bg-paperfolio-accent-blue"
                        >
                            현장 교육 문의하기
                        </a>
                    </div>
                </section>
            ) : null}
        </main>
    );
}
