"use client";

import { motion } from "framer-motion";
import NeuralBackground from "@/components/ui/NeuralBackground";
import SeriesCard from "@/components/blog/SeriesCard";
import { BLOG_SERIES } from "@/lib/blog-data";

export default function BlogPage() {
  const series = Object.values(BLOG_SERIES);

  return (
    <main className="w-full min-h-screen bg-[#050B1B] text-white font-poppins selection:bg-neon-sky selection:text-[#050B1B]">
      
      {/* 1. Hero Section */}
      <section className="relative w-full pt-40 pb-20 px-6 overflow-hidden">
        <NeuralBackground />
        <div className="absolute inset-0 bg-gradient-to-b from-[#050B1B] via-transparent to-[#050B1B] z-0" />
        
        <div className="max-w-7xl mx-auto relative z-10 text-center">
            <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-5xl md:text-7xl font-bold mb-6"
            >
                Reedo <span className="text-neon-sky">Insights</span>
            </motion.h1>
            <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-xl text-gray-400 max-w-2xl mx-auto"
            >
                기술과 예술, 그리고 인간의 경계에서.
                <br />
                깊이 있는 시선을 담은 연재 시리즈.
            </motion.p>
        </div>
      </section>

      {/* 2. Series Gallery (Bookshelf Style) */}
      <section className="px-6 pb-32">
        <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16">
                {series.map((item, index) => (
                    <motion.div
                        key={item.id}
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.2 }}
                    >
                        <SeriesCard 
                            {...item} 
                            postCount={item.posts.length}
                        />
                    </motion.div>
                ))}
            </div>
        </div>
      </section>

    </main>
  );
}
