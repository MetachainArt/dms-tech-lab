"use client";

import { motion } from "framer-motion";
import { ArrowRight, Terminal, Box, BrainCircuit, Activity, ChevronRight } from "lucide-react";
import Link from "next/link";

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
  return (
    <section id="projects" className="w-full py-32 px-6 flex flex-col items-center bg-white border-t border-gray-100">
      <div className="max-w-7xl w-full">
        {/* Header */}
        <div className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <div className="flex items-center gap-3 mb-4">
                <span className="h-[1px] w-8 bg-neon-sky" />
                <h3 className="text-neon-sky font-poppins font-semibold tracking-widest text-sm uppercase">Selected Works</h3>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-[#050B1B] tracking-tight">
                주요 프로젝트
            </h2>
          </div>
          <Link href="#" className="hidden md:flex items-center gap-2 text-[#050B1B] font-medium hover:text-neon-sky transition-colors group">
            전체 보기 <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Carousel / Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="group bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col h-full"
            >
              {/* Image Area */}
              <div className="relative h-48 overflow-hidden">
                <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors z-10" />
                <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                />
              </div>

              {/* Content Area */}
              <div className="p-6 flex flex-col flex-grow">
                <div className={`w-10 h-10 rounded-lg ${project.color} flex items-center justify-center mb-4`}>
                    <project.icon className="w-5 h-5" />
                </div>
                
                <div className="mb-auto">
                    <span className="text-xs font-mono text-gray-400 uppercase tracking-wider">{project.subtitle}</span>
                    <h3 className="text-xl font-bold text-[#050B1B] mt-1 mb-3 group-hover:text-neon-sky transition-colors">{project.title}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed line-clamp-3">
                        {project.description}
                    </p>
                </div>

                <div className="mt-6 pt-6 border-t border-gray-50">
                    <button className="text-sm font-semibold text-[#050B1B] flex items-center gap-1 group/btn">
                        자세히 보기 <ChevronRight className="w-3 h-3 group-hover/btn:translate-x-1 transition-transform" />
                    </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mobile View All Button */}
        <div className="mt-12 md:hidden flex justify-center">
             <Link href="#" className="flex items-center gap-2 text-[#050B1B] font-medium border-b border-[#050B1B] pb-1">
                전체 프로젝트 보기 <ArrowRight className="w-4 h-4" />
            </Link>
        </div>
      </div>
    </section>
  );
}
