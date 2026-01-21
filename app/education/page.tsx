"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight, Cpu, Code2, Database, Globe } from "lucide-react";
import Link from "next/link";
import NeuralBackground from "@/components/ui/NeuralBackground";

// Curriculum Data
const tracks = [
  {
    title: "AI & Automation",
    desc: "N8N과 Opal로 만드는 24시간 무인 비즈니스. 워크플로우 자동화의 모든 것.",
    level: "초급 ~ 중급",
    duration: "4주 완성",
    icon: Database,
    color: "text-blue-500",
    bg: "bg-blue-500/10",
    border: "border-blue-500/20",
  },
  {
    title: "Vibe Coding",
    desc: "코딩 없이 감각으로 완성하는 웹 앱 개발. 아이디어를 즉시 프로덕트로.",
    level: "입문",
    duration: "4주 완성",
    icon: Code2,
    color: "text-purple-500",
    bg: "bg-purple-500/10",
    border: "border-purple-500/20",
  },
  {
    title: "H/W Interface",
    desc: "하드웨어와 AI의 융합 설계. 피지컬 컴퓨팅과 제어 시스템의 기초.",
    level: "중급",
    duration: "6주 완성",
    icon: Cpu,
    color: "text-teal-500",
    bg: "bg-teal-500/10",
    border: "border-teal-500/20",
  },
];

export default function EducationPage() {
  return (
    <main className="w-full min-h-screen bg-[#050B1B] text-white font-poppins selection:bg-neon-sky selection:text-[#050B1B]">
      
      {/* 1. Hero Section */}
      <section className="relative w-full min-h-[60vh] flex flex-col justify-center px-6 overflow-hidden pt-32">
        {/* Background - Reusing Neural for tech feel, lower opacity */}
        <div className="absolute inset-0 z-0 opacity-40">
            <NeuralBackground />
            <div className="absolute inset-0 bg-gradient-to-b from-[#050B1B] via-[#050B1B]/80 to-[#050B1B]" />
        </div>

        <div className="max-w-7xl mx-auto w-full relative z-10 text-center md:text-left">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            >
                <div className="inline-block px-4 py-2 rounded-full border border-neon-sky/30 bg-neon-sky/10 text-neon-sky text-sm font-bold tracking-widest mb-6 backdrop-blur-sm">
                    GLOBAL FIELD ENGINEERING
                </div>
                <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-8">
                    글로벌 엔지니어링의 정점,<br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">차원이 다른 기술 교육.</span>
                </h1>
                <p className="text-xl text-white/60 max-w-2xl leading-relaxed mb-10 md:mx-0 mx-auto">
                    이론이 아닌 '동작하는' 지식을 전수합니다.<br />
                    글로벌 엔지니어링 경험을 바탕으로 실전형 인재를 양성합니다.
                </p>
                
                <button className="px-8 py-4 bg-white text-[#050B1B] font-bold rounded-full hover:bg-neon-sky transition-colors flex items-center gap-2 mx-auto md:mx-0">
                    수강 문의하기 <ArrowRight className="w-4 h-4" />
                </button>
            </motion.div>
        </div>
      </section>

      {/* 2. Curriculum Grid */}
      <section className="py-24 px-6 bg-[#050B1B]">
        <div className="max-w-7xl mx-auto">
            <div className="mb-16">
                <h2 className="text-3xl font-bold text-white mb-4">Curriculum Tracks</h2>
                <div className="h-1 w-20 bg-neon-sky rounded-full" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
                {tracks.map((track, idx) => (
                    <motion.div
                        key={track.title}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.1 }}
                        className={`group relative p-8 rounded-[2rem] border ${track.border} bg-[#0A1124] hover:bg-[#0F1830] transition-colors duration-300 flex flex-col`}
                    >
                        {/* Icon */}
                        <div className={`w-14 h-14 rounded-2xl ${track.bg} ${track.color} flex items-center justify-center mb-6`}>
                            <track.icon className="w-7 h-7" />
                        </div>

                        {/* Title */}
                        <h3 className="text-2xl font-bold mb-3 group-hover:text-neon-sky transition-colors">{track.title}</h3>
                        <p className="text-gray-400 text-sm leading-relaxed mb-8 flex-grow">
                            {track.desc}
                        </p>

                        {/* Badges */}
                        <div className="flex flex-wrap gap-2 pt-6 border-t border-white/5">
                            <span className="px-3 py-1 rounded-full text-xs font-medium bg-white/5 text-white/70 border border-white/10">
                                {track.level}
                            </span>
                            <span className="px-3 py-1 rounded-full text-xs font-medium bg-white/5 text-white/70 border border-white/10">
                                {track.duration}
                            </span>
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* Featured Article Moved to Blog */}
        </div>
      </section>

      {/* 3. Instructor Profile */}
      <section className="py-20 px-6 bg-[#030712] border-t border-white/5">
        <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                {/* Image Side */}
                <motion.div 
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="relative"
                >
                    <div className="aspect-[4/5] rounded-[2rem] overflow-hidden bg-gray-800 relative z-10">
                         {/* Founder Image - Tech/Engineering Vibe (Portrait) */}
                         <img 
                            src="/images/instructor_portrait.jpg"
                            alt="Instructor Portrait"
                            className="w-full h-full object-cover grayscale opacity-80 hover:opacity-100 hover:grayscale-0 transition-all duration-500"
                         />
                    </div>
                    {/* Decorative Blob */}
                    <div className="absolute top-10 -left-10 w-full h-full border border-neon-sky/20 rounded-[2rem] -z-0" />
                </motion.div>

                {/* Text Side - Added z-10 and relative to ensure visibility */}
                <div className="flex flex-col justify-center relative z-10">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-6 w-fit">
                        <Globe className="w-4 h-4 text-neon-sky" />
                        <span className="text-xs font-bold text-white/80 tracking-wide uppercase">Head Instructor</span>
                    </div>
                    <h2 className="text-4xl font-bold mb-6 leading-tight">
                        20년의 엔지니어링,<br />
                        <span className="text-neon-sky">경험을 공유합니다.</span>
                    </h2>
                    <p className="text-white/60 mb-8 leading-relaxed">
                        전 세계 30개국 이상의 현장에서 다양한 기술 문제를 해결해왔습니다.
                        단순한 코딩 기술이 아닌, 실제 비즈니스 환경에서 살아남는
                        엔지니어링 마인드셋과 실전 노하우를 가르칩니다.
                    </p>
                    
                    {/* Stats/Badges */}
                    <div className="grid grid-cols-2 gap-6">
                        <div className="bg-[#0A1124] p-5 rounded-2xl border border-white/5">
                            <span className="block text-3xl font-bold text-white mb-1">20+</span>
                            <span className="text-sm text-gray-500">Years Experience</span>
                        </div>
                        <div className="bg-[#0A1124] p-5 rounded-2xl border border-white/5">
                            <span className="block text-3xl font-bold text-white mb-1">30+</span>
                            <span className="text-sm text-gray-500">Global Projects</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </section>

    </main>
  );
}
