"use client";

import { motion } from "framer-motion";
import { Cpu, BookOpen, Cuboid, Globe } from "lucide-react";
import OrbIcon from "@/components/ui/OrbIcon";

const features = [
  {
    icon: Cpu,
    title: "AI Automation",
    description: "반복 업무를 0으로. AI 에이전트와 자동화 시스템 구축.",
    color: "text-neon-cyan",
  },
  {
    icon: BookOpen,
    title: "Tech Education",
    description: "생성형 AI부터 개발까지. 실무 중심의 기술 교육 및 컨설팅.",
    color: "text-neon-purple",
  },
  {
    icon: Cuboid,
    title: "3D Engineering",
    description: "제품 디자인 및 3D 설계. 가상과 현실을 잇는 엔지니어링.",
    color: "text-neon-indigo",
  },
  {
    icon: Globe,
    title: "SaaS Solution",
    description: "웹 기반 소프트웨어 개발. 비즈니스 맞춤형 통합 플랫폼.",
    color: "text-pink-500",
  },
];

const history = [
  {
    year: "2023",
    title: "DMS Solution 설립",
    desc: "기술 중심 스타트업 시작",
  },
  {
    year: "2024",
    title: "3D & Design 확장",
    desc: "3D 제품 개발 및 디자인 사업 진출",
  },
  {
    year: "2026",
    title: "AI & Education 도약",
    desc: "AI 자동화 및 교육 사업 진출",
    current: true,
  },
];

export default function Company() {
  return (
    <section id="company" className="relative w-full py-40 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Top Section: Manifesto & Features */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start mb-40">
            
            {/* Left: Manifesto */}
            <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="sticky top-32" 
            >
                <div className="flex items-center gap-3 mb-6">
                    <span className="h-[1px] w-12 bg-neon-indigo" />
                    <h3 className="text-neon-indigo font-mono tracking-widest text-sm">WHAT WE DO</h3>
                </div>
                
                <h2 className="text-5xl md:text-7xl font-bold leading-[1.1] mb-8 tracking-tight">
                    <span className="block text-white">Innovation</span>
                    <span className="block text-white/30">Through AI.</span>
                </h2>
                
                <div className="space-y-6 text-xl text-white/60 font-light leading-relaxed max-w-md">
                    <p>
                        DMS Solution은 <span className="text-white font-normal">AI와 자동화</span>기술을 통해
                        기업의 업무 방식을 혁신합니다.
                    </p>
                    <p className="text-base text-white/40">
                        단순 개발을 넘어, 3D 엔지니어링과 기술 교육까지.
                        디지털 전환(DX)에 필요한 모든 솔루션을 제공합니다.
                    </p>
                </div>
            </motion.div>

            {/* Right: Feature Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {features.map((feature, index) => (
                    <motion.div
                        key={feature.title}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className="group flex flex-col items-start gap-4 p-8 rounded-3xl border border-white/5 bg-white/[0.02] backdrop-blur-sm hover:bg-white/[0.05] hover:border-neon-indigo/30 transition-all duration-300"
                    >
                        <OrbIcon icon={feature.icon} color={feature.color} size={28} />
                        <div className="mt-2">
                            <h4 className="text-xl font-bold text-white mb-2 group-hover:text-neon-cyan transition-colors">{feature.title}</h4>
                            <p className="text-white/50 text-sm leading-relaxed">{feature.description}</p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>

        {/* Bottom Section: History Timeline */}
        <div className="relative">
            <div className="absolute left-[19px] md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-transparent via-white/20 to-transparent transform md:-translate-x-1/2" />
            
            <div className="space-y-20">
                {history.map((item, index) => (
                    <motion.div 
                        key={item.year}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        className={`relative flex md:items-center gap-10 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                    >
                        {/* Timeline Node */}
                        <div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 w-10 h-10 flex items-center justify-center z-10">
                            <div className={`w-4 h-4 rounded-full border-2 ${item.current ? 'bg-neon-sky border-white shadow-[0_0_15px_rgba(14,165,233,0.8)]' : 'bg-[#0a0a1f] border-white/30'}`} />
                        </div>

                        {/* Content Card */}
                        <div className={`w-full md:w-[calc(50%-40px)] pl-12 md:pl-0 ${index % 2 === 0 ? 'md:text-right md:pr-10' : 'md:text-left md:pl-10'}`}>
                            <div className="inline-block px-4 py-1 rounded-full border border-white/10 bg-white/5 backdrop-blur-md text-neon-sky font-mono font-bold mb-3">
                                {item.year}
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-2">{item.title}</h3>
                            <p className="text-white/50">{item.desc}</p>
                        </div>
                        
                        {/* Spacer for alternating layout */}
                        <div className="hidden md:block w-[calc(50%-40px)]" />
                    </motion.div>
                ))}
            </div>
        </div>
      </div>
    </section>
  );
}
