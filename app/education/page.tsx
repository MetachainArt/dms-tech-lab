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
    image: "/icons/3d-curriculum-ai.png", 
    color: "blue", // Simplified for template usage
    tags: ["Midjourney", "Stable Diffusion", "Runway"],
    vol: "01"
  },
  {
    category: "VIBE CODING",
    title: "Vibe Coding",
    desc: "Cursor, Bolt, V0 등 AI 코딩 툴을 마스터하여 아이디어를 즉시 배포 가능한 웹 서비스로 전환. 코딩 지식이 없어도 감각만으로 개발하는 로우코드/노코드 혁명.",
    image: "/icons/3d-curriculum-code.png", 
    color: "purple",
    tags: ["Cursor", "Bolt", "V0"],
    vol: "02"
  },
  {
    category: "BUSINESS AUTOMATION",
    title: "AI Automation",
    desc: "N8N, Zapier, LangChain을 활용한 업무 자동화 설계. 반복적인 업무를 AI 에이전트에게 위임하고, 24시간 멈추지 않는 무인 비즈니스 시스템을 구축하는 노하우.",
    image: "/icons/3d-curriculum-hw.png", 
    color: "teal",
    tags: ["N8N", "Zapier", "LangChain"],
    vol: "03"
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

      {/* 2. Curriculum Grid (Blog Style) */}
      <section className="px-6 pb-32 relative z-10">
        <div className="max-w-7xl mx-auto">
            
            {/* Removed "Our Services" Header Section */}

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16">
                {tracks.map((track, idx) => (
                    <motion.div
                        key={track.title}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.2 }}
                        className="group relative block w-full"
                    >
                        <div className="relative aspect-[3/4] w-full rounded-[20px] transition-all duration-500 group-hover:-translate-y-2 group-hover:shadow-2xl hover:shadow-neon-sky/20 perspective-1000">
                             
                             {/* Book Spine Effect (Left Side) */}
                             <div className="absolute left-0 top-0 bottom-0 w-3 rounded-l-[20px] bg-gradient-to-r from-white/20 to-transparent z-20 pointer-events-none" />
                             
                             {/* Cover Image/Background */}
                             <div className="absolute inset-0 rounded-[20px] overflow-hidden bg-[#0A1124] border-2 border-white/20 group-hover:border-white/40 transition-colors shadow-lg flex items-center justify-center">
                                {/* Use icon as the main visual, centered like the blog covers often do or just distinct */}
                                <div className={`absolute inset-0 bg-gradient-to-input from-${track.color}-900/50 to-slate-900 z-0`} /> 
                                <div className="relative w-40 h-40 drop-shadow-[0_0_30px_rgba(255,255,255,0.2)] z-0 transition-transform duration-700 group-hover:scale-110">
                                     <Image 
                                        src={track.image}
                                        alt={track.title}
                                        fill
                                        className="object-contain"
                                     />
                                </div>

                                {/* Gradient Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#050B1B]/60 to-[#050B1B]/95 z-10" />
                             </div>

                             {/* Content */}
                             <div className="absolute inset-0 p-8 flex flex-col justify-end z-20">
                                 {/* Top Badge (Tags) */}
                                 <div className="absolute top-6 left-6 flex flex-wrap gap-2">
                                     {track.tags.map((tag, i) => (
                                         <span key={i} className="px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white/90 shadow-sm">
                                             {tag}
                                         </span>
                                     ))}
                                 </div>

                                 {/* Vol Badge */}
                                 <div className={`absolute top-6 right-6 w-12 h-16 bg-${track.color}-500 rounded-b-lg shadow-lg flex flex-col items-center justify-center text-white font-bold opacity-0 -translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 delay-100`}>
                                     <span className="text-xs opacity-80">Vol.</span>
                                     <span className="text-lg">{track.vol}</span>
                                 </div>

                                 {/* Title Section */}
                                 <div className="transform transition-transform duration-300 group-hover:translate-y-[-10px]">
                                     <span className={`block text-${track.color}-400 text-sm font-bold tracking-widest uppercase mb-2 opacity-90`}>
                                         {track.category}
                                     </span>
                                     <h3 className="text-3xl font-bold text-white mb-4 leading-tight group-hover:text-neon-sky transition-colors">
                                         {track.title}
                                     </h3>
                                     <div className="h-0 group-hover:h-auto overflow-hidden transition-all duration-500 opacity-0 group-hover:opacity-100">
                                         <p className="text-gray-300 text-sm leading-relaxed mb-4 line-clamp-3">
                                             {track.desc}
                                         </p>
                                         <button className="flex items-center text-white font-semibold text-sm hover:text-neon-sky transition-colors">
                                             View Curriculum <ArrowRight className="w-4 h-4 ml-2" />
                                         </button>
                                     </div>
                                 </div>
                             </div>

                             {/* Hover Glow Effect */}
                             <div className={`absolute -inset-1 rounded-[24px] bg-gradient-to-br from-${track.color}-500/20 to-transparent blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10`} />
                        </div>
                        
                        {/* Reflection */}
                        <div className="absolute -bottom-4 left-4 right-4 h-4 bg-black/50 blur-lg rounded-[100%] opacity-0 group-hover:opacity-40 transition-opacity duration-500 transform scale-x-90" />
                    </motion.div>
                ))}
            </div>
            
        </div>
      </section>

    </main>
  );
}
