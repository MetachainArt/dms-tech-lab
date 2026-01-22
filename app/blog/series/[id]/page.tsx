"use client";

import { useParams } from "next/navigation";
import { motion } from "framer-motion";
import NeuralBackground from "@/components/ui/NeuralBackground";
import SeriesPostList from "@/components/blog/SeriesPostList";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { BLOG_SERIES } from "@/lib/blog-data";

// Data Mapping (DB replacement)


export default function SeriesDetailPage() {
  const params = useParams();
  const id = params?.id as string;
  const data = BLOG_SERIES[id];

  if (!data) {
    return (
      <div className="min-h-screen bg-[#050B1B] text-white flex items-center justify-center">
        <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">Series Not Found</h1>
            <Link href="/blog" className="text-neon-sky hover:underline">Return to Blog</Link>
        </div>
      </div>
    );
  }

  return (
    <main className="w-full min-h-screen bg-[#050B1B] text-white font-poppins selection:bg-neon-sky selection:text-[#050B1B]">
      <NeuralBackground />
      
      {/* Header Section (Like a Book Cover) */}
      <section className="relative w-full pt-32 pb-20 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#050B1B]/80 via-transparent to-[#050B1B] z-0" />
        
        {/* Background Blur Image */}
        <div className="absolute inset-0 opacity-20 blur-3xl z-[-1]">
             <img src={data.coverImage} className="w-full h-full object-cover" alt="bg" />
        </div>

        <div className="max-w-4xl mx-auto relative z-10">
            <Link href="/blog" className="inline-flex items-center text-gray-400 hover:text-white mb-8 transition-colors">
                <ArrowLeft className="w-4 h-4 mr-2" /> Back to Series
            </Link>

            <div className="flex flex-col md:flex-row gap-12 items-center md:items-start">
                {/* Book Cover Image */}
                <motion.div 
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="w-48 md:w-64 shrink-0 rounded-2xl overflow-hidden shadow-2xl shadow-neon-sky/10 border border-white/10"
                >
                    <div className="aspect-[3/4] relative">
                        <img src={data.coverImage} alt={data.title} className="w-full h-full object-cover" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-6">
                            <span className="text-xs font-bold text-white/60 mb-2">{data.subtitle}</span>
                            <h1 className="text-2xl font-bold text-white leading-tight">{data.title}</h1>
                        </div>
                    </div>
                </motion.div>

                {/* Series Info */}
                <div className="flex-grow text-center md:text-left">
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 }}
                    >
                        <span className={`inline-block px-3 py-1 rounded-full bg-${data.color}-500/20 text-${data.color}-400 text-xs font-bold tracking-wider mb-4 border border-${data.color}-500/30`}>
                            SERIES
                        </span>
                        <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">{data.title}</h1>
                        <p className="text-xl text-gray-300 leading-relaxed mb-8">
                            {data.description}
                        </p>
                        
                        <div className="flex flex-wrap gap-8 justify-center md:justify-start text-sm text-gray-400 border-t border-white/10 pt-6">
                            <div className="flex flex-col">
                                <span className="text-xs text-gray-500 uppercase tracking-widest mb-1">Author</span>
                                <span className="text-white font-semibold">Reedo</span>
                            </div>
                            <div className="flex flex-col">
                                <span className="text-xs text-gray-500 uppercase tracking-widest mb-1">Episodes</span>
                                <span className="text-white font-semibold">{data.posts.length} Chapters</span>
                            </div>
                            <div className="flex flex-col">
                                <span className="text-xs text-gray-500 uppercase tracking-widest mb-1">Status</span>
                                <span className="text-neon-sky font-semibold">Ongoing</span>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
      </section>

      {/* Post List Section */}
      <section className="px-6 pb-32">
        <motion.div 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="max-w-4xl mx-auto"
        >
            <SeriesPostList posts={data.posts} color={data.color} />
        </motion.div>
      </section>

    </main>
  );
}
