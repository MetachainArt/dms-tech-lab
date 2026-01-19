"use client";

import { motion } from "framer-motion";
import { ArrowRight, Terminal, Box, BrainCircuit, Activity, ChevronRight } from "lucide-react";
import Link from "next/link";
import { useRef } from "react";

const projects = [
  {
    title: "바이브 코더",
    subtitle: "AI Pair Programmer",
    description: "개발자의 의도를 파악하고 실시간으로 코드를 제안하는 차세대 AI 페어 프로그래밍 도구입니다.",
    icon: Terminal,
    color: "bg-blue-50 text-blue-600",
    image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?q=80&w=2670&auto=format&fit=crop"
  },
  {
    title: "아이디어 플로우",
    subtitle: "3D Canvas Workspace",
    description: "무한한 3D 캔버스 위에서 아이디어를 시각화하고 구조화하는 혁신적인 기획 협업 툴입니다.",
    icon: BrainCircuit,
    color: "bg-purple-50 text-purple-600",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop"
  },
  {
    title: "오토 래퍼 (Closure)",
    subtitle: "Automated Packaging",
    description: "복잡한 배포 프로세스를 원클릭으로 자동화하여 개발 생산성을 획기적으로 높여주는 솔루션입니다.",
    icon: Box,
    color: "bg-emerald-50 text-emerald-600",
    image: "https://images.unsplash.com/photo-1607799275518-d58665d099db?q=80&w=2670&auto=format&fit=crop"
  },
  {
    title: "DMS 시스템 관제",
    subtitle: "Real-time Monitoring",
    description: "대규모 서버 인프라의 상태를 실시간으로 시각화하고 이상 징후를 사전에 탐지하는 관제 대시보드입니다.",
    icon: Activity,
    color: "bg-rose-50 text-rose-600",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2670&auto=format&fit=crop"
  }
];

export default function Apps() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <section id="projects" ref={containerRef} className="w-full py-32 px-6 flex flex-col items-center bg-[#050B1B] overflow-hidden relative">
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 mix-blend-overlay"></div>
      
      {/* 3D Geometric Decoration (Simulated) */}
      <div className="absolute right-[-10%] top-[20%] w-[600px] h-[600px] bg-gradient-to-br from-neon-purple/30 to-neon-sky/30 blur-3xl rounded-full opacity-40 pointer-events-none" />

      <div className="max-w-7xl w-full relative z-10">
        {/* Header */}
        <div className="mb-20 flex flex-col items-start gap-4">
            <div className="flex items-center gap-3">
                <span className="h-[1px] w-12 bg-neon-sky" />
                <h3 className="text-neon-sky font-poppins font-semibold tracking-widest text-sm uppercase">Selected Works</h3>
            </div>
            <h2 className="text-5xl md:text-6xl font-bold text-white tracking-tight leading-tight">
                디지털 경험을<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-sky to-neon-purple">
                    확장하는 프로젝트.
                </span>
            </h2>
        </div>

        {/* Horizontal Flat Scroller */}
        <div className="relative w-full overflow-visible">
            <motion.div 
                className="flex gap-8 px-4 pb-12 cursor-grab active:cursor-grabbing overflow-x-auto no-scrollbar snap-x snap-mandatory"
            >
                {projects.map((project, index) => (
                    <motion.div
                        key={project.title}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ 
                            duration: 0.6, 
                            delay: index * 0.1, 
                            ease: "easeOut"
                        }}
                        className="min-w-[320px] md:min-w-[400px] snap-center group relative bg-white rounded-3xl overflow-hidden shadow-2xl hover:shadow-[0_0_40px_rgba(14,165,233,0.3)] transition-all duration-300 hover:-translate-y-2"
                    >
                        {/* Card Content */}
                        <div className="h-full flex flex-col">
                            {/* Image Header */}
                            <div className="relative h-56 overflow-hidden">
                                <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors z-10" />
                                <img 
                                    src={project.image} 
                                    alt={project.title} 
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                                />
                                <div className={`absolute top-4 right-4 w-10 h-10 rounded-full ${project.color} flex items-center justify-center shadow-lg z-20`}>
                                    <project.icon className="w-5 h-5" />
                                </div>
                            </div>

                            {/* Body */}
                            <div className="p-8 flex flex-col flex-grow bg-white relative z-20">
                                <span className="text-xs font-mono font-bold text-gray-400 uppercase tracking-widest mb-2">{project.subtitle}</span>
                                <h3 className="text-2xl font-bold text-[#050B1B] mb-4 group-hover:text-neon-sky transition-colors">{project.title}</h3>
                                <p className="text-gray-500 text-sm leading-relaxed mb-8 flex-grow">
                                    {project.description}
                                </p>
                                
                                <button className="self-start px-6 py-2 rounded-full border border-gray-200 text-sm font-semibold text-[#050B1B] hover:bg-[#050B1B] hover:text-white transition-all flex items-center gap-2">
                                    자세히 보기 <ChevronRight className="w-3 h-3" />
                                </button>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </motion.div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="flex justify-center mt-8 gap-2">
            <div className="w-20 h-1 bg-white/10 rounded-full overflow-hidden">
                <motion.div 
                    className="h-full bg-neon-sky"
                    style={{ width: "30%" }}
                    animate={{ x: ["0%", "200%", "0%"] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                />
            </div>
        </div>

      </div>
    </section>
  );
}
