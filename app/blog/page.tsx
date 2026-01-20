"use client";

import { motion } from "framer-motion";

export default function BlogPage() {
  return (
    <main className="w-full min-h-screen bg-[#050B1B] text-white font-poppins pt-32 pb-20 flex items-center justify-center">
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="text-center px-6"
      >
        <span className="text-neon-sky font-semibold tracking-widest text-sm uppercase block mb-4">DMS BLOG</span>
        <h1 className="text-5xl md:text-7xl font-bold mb-6">블로그</h1>
        <p className="text-white/60 text-lg max-w-2xl mx-auto">
            최신 기술 트렌드와 인사이트를 공유합니다.<br/>
            콘텐츠를 준비 중입니다.
        </p>
      </motion.div>
    </main>
  );
}
