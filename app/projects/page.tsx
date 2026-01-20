"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Settings2, FileText, AppWindow } from "lucide-react";

// Project Data with Real Images
const projects = [
  {
    category: "BUSINESS AUTOMATION",
    title: "워크플로우 자동화",
    desc: "24시간 멈추지 않는 비즈니스. N8N, Opal 등 최적의 도구를 조합해 반복 업무를 완벽하게 자동화합니다.",
    icon: Settings2,
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2670&auto=format&fit=crop", // Tech/Server visual
    color: "text-blue-500",
  },
  {
    category: "AI ENGINEERING",
    title: "프롬프트 라이브러리",
    desc: "시행착오를 줄여주는 솔루션. 개발과 비즈니스 효율을 극대화하는 검증된 프롬프트 모음입니다.",
    icon: FileText,
    image: "https://images.unsplash.com/photo-1678286742832-26543bb49959?q=80&w=2088&auto=format&fit=crop", // AI/Code visual
    color: "text-purple-500",
  },
  {
    category: "VIBE CODING APPS",
    title: "바이브 코딩 웹앱",
    desc: "상상을 현실로. 뮤즈캔버스를 비롯해 바이브 코딩으로 제작된 다양한 웹 애플리케이션을 소개합니다.",
    icon: AppWindow,
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2670&auto=format&fit=crop", // Interface/Dashboard visual
    color: "text-green-500",
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
