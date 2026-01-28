import { EDUCATION_TRACKS } from "@/lib/education-data";
import { getLessonBySlug } from "@/lib/education-fs";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Calendar, Clock } from "lucide-react";
import { MDXRemote } from "next-mdx-remote/rsc";
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

    // Use FS utility to find lesson in any chapter folder
    const lessonData = getLessonBySlug(trackId, lessonId);
    
    // Fallback if MDX file doesn't exist yet
    if (!lessonData) {
        return (
            <main className="min-h-screen bg-[#050B1B] text-white pt-32 px-6 flex flex-col items-center justify-center">
                <h1 className="text-2xl font-bold mb-4">Lesson Content Not Found</h1>
                <p className="text-gray-400 mb-8">This lesson content is being prepared.</p>
                <Link href={`/education/${trackId}`} className="text-neon-sky hover:underline">
                    Back to Curriculum
                </Link>
            </main>
        );
    }

    return (
        <main className="min-h-screen bg-[#050B1B] text-white">
            {/* Hero Section with Background Image */}
            <section className="relative w-full min-h-[50vh] flex items-end overflow-hidden pt-32">
                {/* Background Image */}
                {lessonData.frontmatter.coverImage && (
                    <div className="absolute inset-0 z-0">
                        <Image 
                            src={lessonData.frontmatter.coverImage}
                            alt=""
                            fill
                            className="object-cover opacity-50"
                        />
                        <div className="absolute inset-0 bg-gradient-to-b from-[#050B1B] via-[#050B1B]/60 to-[#050B1B]" />
                    </div>
                )}
                
                {/* Header Content */}
                <div className="relative z-10 max-w-3xl mx-auto px-6 pb-12 w-full">
                    <Link 
                        href={`/education/${trackId}`}
                        className="inline-flex items-center text-sm text-gray-400 hover:text-white mb-6 transition-colors"
                    >
                        <ArrowLeft className="w-4 h-4 mr-2" /> 
                        Back to {track.title}
                    </Link>
                    
                    <div className={`inline-block px-3 py-1 rounded-full bg-${track.color}-500/20 text-${track.color}-400 text-xs font-bold tracking-widest mb-4 border border-${track.color}-500/30`}>
                        LESSON
                    </div>
                    
                    <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-6">
                        {lessonData.frontmatter.title || "Untitled Lesson"}
                    </h1>
                    
                    <div className="flex items-center gap-6 text-sm text-gray-500">
                        <div className="flex items-center">
                            <Calendar className="w-4 h-4 mr-2" />
                            {lessonData.frontmatter.date || "2024.01.28"}
                        </div>
                    </div>
                </div>
            </section>

            {/* Content Area */}
            <article className="max-w-3xl mx-auto px-6 pb-32">
                <div className="w-full border-t border-white/10 pt-12">
                    <MDXRemote source={lessonData.content} components={EducationMDXComponents} />
                </div>
            </article>
        </main>
    );
}
