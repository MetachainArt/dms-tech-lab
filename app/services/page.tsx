"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Settings2, FileText, AppWindow } from "lucide-react";
import NeuralBackground from "@/components/ui/NeuralBackground";

// Service Data (Formerly Projects)
const services = [
  {
    category: "BUSINESS AUTOMATION",
    title: "워크플로우 자동화",
    desc: "24시간 멈추지 않는 비즈니스. N8N, Opal 등 최적의 도구를 조합해 반복 업무를 완벽하게 자동화합니다.",
    icon: Settings2,
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2672&auto=format&fit=crop", 
    color: "text-blue-500",
  },
  {
    category: "AI ENGINEERING",
    title: "프롬프트 라이브러리",
    desc: "시행착오를 줄여주는 솔루션. 개발과 비즈니스 효율을 극대화하는 검증된 프롬프트 모음입니다.",
    icon: FileText,
    image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=2574&auto=format&fit=crop", 
    color: "text-purple-500",
  },
  {
    category: "VIBE CODING APPS",
    title: "바이브 코딩 웹앱",
    desc: "상상을 현실로. 뮤즈캔버스를 비롯해 바이브 코딩으로 제작된 다양한 웹 애플리케이션을 소개합니다.",
    icon: AppWindow,
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2670&auto=format&fit=crop", 
    color: "text-green-500",
  }
];

export default function ServicesPage() {
  return (
    <main className="w-full min-h-screen bg-[#050B1B] text-white font-poppins selection:bg-neon-sky selection:text-[#050B1B] pt-32 pb-20 relative">
      <NeuralBackground />

      {/* Header Section */}
      <section className="max-w-7xl mx-auto px-6 mb-24 relative z-10">
        <motion.div
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.6 }}
        >
            <div className="flex items-center gap-4 mb-6">
                <span className="h-[2px] w-12 bg-neon-sky" />
                <span className="text-neon-sky font-semibold tracking-widest text-sm uppercase">OUR SERVICES</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold leading-tight">
                디지털 혁신을 위한<br />
                <span className="text-neon-sky">맞춤형 솔루션.</span>
            </h1>
        </motion.div>
      </section>

      {/* Services Grid */}
      <section className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, idx) => (
                <motion.div
                    key={service.title}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                    className="group bg-white rounded-[2rem] overflow-hidden hover:-translate-y-2 transition-transform duration-300 flex flex-col shadow-xl border border-gray-200"
                >
                    {/* Image Area */}
                    <div className="h-64 w-full relative overflow-hidden flex-shrink-0">
                         <img 
                            src={service.image} 
                            alt={service.title}
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                         />
                         <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-300" />
                         
                         <div className="absolute top-4 right-4 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg z-10">
                            <service.icon className={`w-5 h-5 ${service.color}`} />
                         </div>
                    </div>

                    {/* Content */}
                    <div className="p-8 flex flex-col bg-white h-full relative z-20">
                        <div className="text-xs font-bold text-gray-400 tracking-widest uppercase mb-3">{service.category}</div>
                        <h3 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-neon-sky transition-colors">{service.title}</h3>
                        <p className="text-gray-600 text-sm leading-relaxed mb-8 line-clamp-3">
                            {service.desc}
                        </p>
                        
                        <button className="self-start px-6 py-3 rounded-full border border-gray-200 text-slate-900 font-bold text-sm flex items-center gap-2 hover:bg-[#050B1B] hover:text-white hover:border-[#050B1B] transition-all">
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
