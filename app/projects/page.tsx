"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Code2, Box, Layers, Cpu, Globe, Zap } from "lucide-react";

// Project Data with Real Images
const projects = [
  {
    category: "AI PAIR PROGRAMMER",
    title: "바이브 코더",
    desc: "개발자의 의도를 파악하고 실시간으로 코드를 제안하는 차세대 AI 페어 프로그래밍 도구입니다.",
    icon: Code2,
    image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?q=80&w=2670&auto=format&fit=crop",
    color: "text-blue-500",
  },
  {
    category: "3D CANVAS WORKSPACE",
    title: "아이디어 플로우",
    desc: "무한한 3D 캔버스 위에서 아이디어를 시각화하고 구조화하는 혁신적인 기획 협업 툴입니다.",
    icon: Box,
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop", 
    color: "text-purple-500",
  },
  {
    category: "AUTOMATED PACKAGING",
    title: "오토 래퍼 (Closure)",
    desc: "복잡한 배포 프로세스를 원클릭으로 자동화하여 개발 생산성을 획기적으로 높여주는 솔루션입니다.",
    icon: Layers,
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?q=80&w=2672&auto=format&fit=crop",
    color: "text-green-500",
  },
  {
    category: "SYSTEM MONITORING",
    title: "DMS 시스템 관제",
    desc: "대규모 서버 인프라의 상태를 실시간으로 시각화하고 이상 징후를 사전에 탐지하는 관제 대시보드입니다.",
    icon: Zap,
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2670&auto=format&fit=crop",
    color: "text-rose-500",
  }
];

export default function ProjectsPage() {
  return (
    <main className="w-full min-h-screen bg-[#050B1B] text-white font-poppins selection:bg-neon-sky selection:text-[#050B1B] pt-32 pb-20">
      
      {/* Header Section */}
      <section className="max-w-7xl mx-auto px-6 mb-24">
        <motion.div
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.6 }}
        >
            <div className="flex items-center gap-4 mb-6">
                <span className="h-[2px] w-12 bg-neon-sky" />
                <span className="text-neon-sky font-semibold tracking-widest text-sm uppercase">SELECTED WORKS</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold leading-tight">
                디지털 경험을<br />
                <span className="text-neon-sky">확장하는 프로젝트.</span>
            </h1>
        </motion.div>
      </section>

      {/* Projects Grid */}
      <section className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, idx) => (
                <motion.div
                    key={project.title}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                    className="group bg-white rounded-[2rem] overflow-hidden hover:-translate-y-2 transition-transform duration-300 flex flex-col h-full shadow-xl"
                >
                    {/* Image Area */}
                    <div className="h-64 w-full relative overflow-hidden">
                         {/* Background Image */}
                         <img 
                            src={project.image} 
                            alt={project.title}
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                         />
                         <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-300" />
                         
                         {/* Icon - Top Right (Reference Style) */}
                         <div className="absolute top-4 right-4 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg z-10">
                            <project.icon className={`w-5 h-5 ${project.color}`} />
                         </div>
                    </div>

                    {/* Content */}
                    <div className="p-8 flex flex-col flex-grow">
                        <div className="text-xs font-bold text-gray-400 tracking-widest uppercase mb-3">{project.category}</div>
                        <h3 className="text-2xl font-bold text-[#050B1B] mb-4 group-hover:text-neon-sky transition-colors">{project.title}</h3>
                        <p className="text-gray-600 text-sm leading-relaxed mb-8 flex-grow line-clamp-3">
                            {project.desc}
                        </p>
                        
                        <button className="self-start px-6 py-3 rounded-full border border-gray-200 text-[#050B1B] font-bold text-sm flex items-center gap-2 hover:bg-[#050B1B] hover:text-white hover:border-[#050B1B] transition-all">
                            자세히 보기 <ArrowRight className="w-4 h-4" />
                        </button>
                    </div>
                </motion.div>
            ))}
        </div>
      </section>

    </main>
  );
}
