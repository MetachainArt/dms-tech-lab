"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight, Cpu, Code2, Database, Globe } from "lucide-react";
import Link from "next/link";

// Curriculum Data
const tracks = [
  {
    category: "AI CREATIVE",
    title: "Generative AI",
    desc: "Midjourney, Stable Diffusion, Runway 등 최신 생성형 AI 도구의 심화 활용법. 상상을 압도적인 퀄리티의 비주얼과 영상으로 구현하는 프로페셔널 가이드.",
    image: "/icons/3d-curriculum-ai.png", // Updated to 3D Image
    color: "text-blue-600",
    bg: "bg-blue-50",
  },
  {
    category: "VIBE CODING",
    title: "Vibe Coding",
    desc: "Cursor, Bolt, V0 등 AI 코딩 툴을 마스터하여 아이디어를 즉시 배포 가능한 웹 서비스로 전환. 코딩 지식이 없어도 감각만으로 개발하는 로우코드/노코드 혁명.",
    image: "/icons/3d-curriculum-code.png", // Updated to 3D Image
    color: "text-purple-600",
    bg: "bg-purple-50",
  },
  {
    category: "BUSINESS AUTOMATION",
    title: "AI Automation",
    desc: "N8N, Zapier, LangChain을 활용한 업무 자동화 설계. 반복적인 업무를 AI 에이전트에게 위임하고, 24시간 멈추지 않는 무인 비즈니스 시스템을 구축하는 노하우.",
    image: "/icons/3d-curriculum-hw.png", // Updated to 3D Image
    color: "text-teal-600",
    bg: "bg-teal-50",
  },
];

export default function EducationPage() {
  return (
    <main className="w-full min-h-screen bg-[#050B1B] text-white font-poppins selection:bg-neon-sky selection:text-[#050B1B] relative">
      {/* 1. Hero Section */}
      <section className="relative w-full min-h-[60vh] flex flex-col justify-center px-6 overflow-hidden pt-32 z-10">
        <div className="max-w-7xl mx-auto w-full relative text-center md:text-left">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            >
                <div className="inline-block px-4 py-2 rounded-full border border-neon-sky/30 bg-neon-sky/10 text-neon-sky text-sm font-bold tracking-widest mb-6 backdrop-blur-sm">
                    PROFESSIONAL ENGINEERING ACADEMY
                </div>
                <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-8">
                    다양한 AI & 엔지니어링<br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">교육자료를 제공합니다.</span>
                </h1>
                <p className="text-xl text-white/60 max-w-2xl leading-relaxed mb-10 md:mx-0 mx-auto">
                    이론이 아닌 실무에서 바로 적용 가능한 기술을 전수합니다.<br />
                    산업 현장의 노하우를 담은 맞춤형 커리큘럼으로 전문가를 양성합니다.
                </p>

                <a href="https://open.kakao.com/o/sSPHn33g" target="_blank" rel="noopener noreferrer" className="px-8 py-4 bg-white text-[#050B1B] font-bold rounded-full hover:bg-neon-sky transition-colors flex items-center gap-2 mx-auto md:mx-0 inline-flex">
                    수강 문의하기 <ArrowRight className="w-4 h-4" />
                </a>
            </motion.div>
        </div>
      </section>

      {/* 2. Curriculum Grid */}
      <section className="py-24 px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
            <div className="mb-16">
                <span className="text-neon-sky font-bold tracking-widest text-sm uppercase mb-2 block">Our Services</span>
                <h2 className="text-4xl font-bold text-white mb-4">
                    디지털 혁신을 위한<br />
                    <span className="text-neon-sky">맞춤형 솔루션.</span>
                </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
                {tracks.map((track, idx) => (
                    <motion.div
                        key={track.title}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.1 }}
                        className="group relative rounded-[1.5rem] bg-white text-slate-800 overflow-hidden hover:-translate-y-2 transition-transform duration-300 shadow-xl"
                    >
                        {/* Top Image Area */}
                        <div className={`h-48 w-full ${track.bg} relative flex items-center justify-center overflow-hidden`}>
                             <div className="relative w-24 h-24 drop-shadow-xl group-hover:scale-110 transition-transform duration-500">
                                 <Image 
                                    src={track.image}
                                    alt={track.title}
                                    fill
                                    className="object-contain"
                                 />
                             </div>
                             {/* Decorative Shine */}
                             <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/30 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform translate-x-[-100%] group-hover:translate-x-[100%] transition-transform" />
                        </div>

                        {/* Content Body */}
                        <div className="p-8 flex flex-col h-full min-h-[320px]">
                            {/* Category */}
                            <span className="text-[11px] font-bold tracking-widest text-gray-500 uppercase mb-3 block">
                                {track.category}
                            </span>

                            {/* Title */}
                            <h3 className="text-2xl font-bold mb-4 text-slate-900 leading-tight">
                                {track.title}
                            </h3>

                            {/* Description */}
                            <p className="text-slate-500 text-[15px] leading-relaxed mb-8 line-clamp-4 flex-grow">
                                {track.desc}
                            </p>

                            {/* Button */}
                            <div className="mt-auto pt-6 border-t border-slate-100">
                                <button className="px-6 py-2.5 rounded-full border border-slate-200 text-sm font-bold text-slate-600 hover:bg-slate-50 hover:border-slate-300 transition-all flex items-center gap-2 group/btn w-fit">
                                    자세히 보기
                                    <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                                </button>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
            
        </div>
      </section>

    </main>
  );
}
