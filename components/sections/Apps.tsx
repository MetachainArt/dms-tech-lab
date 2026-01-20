"use client";

import { motion } from "framer-motion";
import { ArrowRight, Settings2, FileText, AppWindow } from "lucide-react";
import Link from "next/link";
import NeuralBackground from "@/components/ui/NeuralBackground";

// Project Data (Synced with Projects Page)
const projects = [
  {
    category: "BUSINESS AUTOMATION",
    title: "워크플로우 자동화",
    desc: "24시간 멈추지 않는 비즈니스. N8N, Opal 등 최적의 도구를 조합해 반복 업무를 완벽하게 자동화합니다.",
    icon: Settings2,
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2670&auto=format&fit=crop", 
    color: "text-blue-500",
  },
  {
    category: "AI ENGINEERING",
    title: "프롬프트 라이브러리",
    desc: "시행착오를 줄여주는 솔루션. 개발과 비즈니스 효율을 극대화하는 검증된 프롬프트 모음입니다.",
    icon: FileText,
    image: "https://images.unsplash.com/photo-1678286742832-26543bb49959?q=80&w=2088&auto=format&fit=crop", 
    color: "text-purple-500",
  },
  {
    category: "VIBE CODING APPS",
    title: "바이브 코딩 웹앱",
    desc: "상상을 현실로. 뮤즈캔버스를 비롯해 바이브 코딩으로 제작된 다양한 웹 애플리케이션을 소개합니다.",
    icon: AppWindow,
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2670&auto=format&fit=crop", 
    color: "text-green-500",
  }
];

export default function Apps() {
  return (
    <section id="projects" className="w-full py-32 px-6 flex flex-col items-center bg-[#050B1B] overflow-hidden relative">
      {/* Neural Network Background */}
      <div className="absolute inset-0 z-0">
        <NeuralBackground />
        <div className="absolute inset-0 bg-gradient-to-b from-[#050B1B] via-transparent to-[#050B1B] pointer-events-none" />
      </div>

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

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
                    className="group relative bg-white rounded-[2rem] overflow-hidden shadow-2xl hover:shadow-[0_0_40px_rgba(14,165,233,0.3)] transition-all duration-300 hover:-translate-y-2"
                >
                    {/* Image Area */}
                    <div className="h-48 w-full relative overflow-hidden flex-shrink-0">
                         <img
                            src={project.image}
                            alt={project.title}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                         />
                         <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-300" />

                         {/* Icon - Top Right */}
                         <div className="absolute top-4 right-4 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg z-10">
                            <project.icon className={`w-5 h-5 ${project.color}`} />
                         </div>
                    </div>

                    {/* Content - Always visible */}
                    <div className="p-6 bg-white">
                        <span className="text-xs font-mono font-bold text-gray-400 uppercase tracking-widest mb-2 block">{project.category}</span>
                        <h3 className="text-xl font-bold text-[#050B1B] mb-3 group-hover:text-neon-sky transition-colors">{project.title}</h3>
                        <p className="text-gray-500 text-sm leading-relaxed mb-6">
                            {project.desc}
                        </p>

                        <Link href="/projects" className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-gray-200 text-sm font-semibold text-[#050B1B] hover:bg-[#050B1B] hover:text-white transition-all">
                            자세히 보기 <ArrowRight className="w-4 h-4" />
                        </Link>
                    </div>
                </motion.div>
            ))}
        </div>
        
      </div>
    </section>
  );
}
