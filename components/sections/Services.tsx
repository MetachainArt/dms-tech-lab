"use client";

import { motion, Variants } from "framer-motion";
import { Layers, Cpu, BookOpen, Globe } from "lucide-react";

const services = [
  {
    id: "design",
    title: "DESIGN",
    subtitle: "Architecture & Blueprint",
    description: "제품, 구조, 시스템까지 처음부터 끝까지 설계합니다. 당신의 상상을 실행 가능한 청사진으로 만듭니다.",
    icon: Layers,
    color: "text-neon-sky",
    bg: "bg-neon-sky/10",
  },
  {
    id: "dev",
    title: "DEVELOPMENT",
    subtitle: "AI & Execution",
    description: "AI·자동화·웹·툴을 실제로 동작하는 시스템으로 만듭니다. 기술을 만드는 것이 아니라 결과를 만듭니다.",
    icon: Cpu,
    color: "text-neon-indigo",
    bg: "bg-neon-indigo/10",
  },
  {
    id: "education",
    title: "EDUCATION",
    subtitle: "Practical Tech",
    description: "실무자가 바로 쓸 수 있는 기술을 가르칩니다. 이론보다 'Vibe'를 전달합니다.",
    icon: BookOpen,
    color: "text-neon-purple",
    bg: "bg-neon-purple/10",
  },
  {
    id: "trade",
    title: "TRADE",
    subtitle: "Global Connection",
    description: "기술 제품을 글로벌로 연결합니다. OEM부터 B2B 무역까지 확장합니다.",
    icon: Globe,
    color: "text-white",
    bg: "bg-white/10",
  },
];

const container: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 50, rotateX: -10 },
  show: { opacity: 1, y: 0, rotateX: 0, transition: { type: "spring", stiffness: 50 } },
};

export default function Services() {
  return (
    <section id="services" className="relative w-full py-32 px-6 flex flex-col items-center">
      <div className="absolute inset-0 bg-transparent z-0 pointer-events-none" />
      
      {/* Section Header */}
      <div className="relative z-10 mb-20 text-center">
        <h3 className="text-neon-indigo font-mono tracking-widest mb-4">WHAT WE DO</h3>
        <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-white to-white/50 bg-clip-text text-transparent">
          Comprehensive Solution
        </h2>
      </div>

      {/* Cards Grid */}
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        className="relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl w-full"
      >
        {services.map((service) => (
          <motion.div
            key={service.id}
            variants={item}
            whileHover={{ y: -10, transition: { duration: 0.3 } }}
            className="group relative h-[400px] p-8 glass-panel rounded-2xl flex flex-col justify-between overflow-hidden cursor-pointer"
          >
            {/* Background Hover Glow */}
            <div className={`absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500 bg-gradient-to-b ${service.color.replace('text', 'from')} to-transparent`} />
            
            {/* Watermark Text */}
            <div className="absolute -bottom-4 -right-4 text-6xl font-black text-white/5 md:text-7xl select-none z-0">
              {service.title.substring(0, 3)}
            </div>

            {/* Icon Mockup (Will be 3D later) */}
            <div className={`relative z-10 w-16 h-16 rounded-xl ${service.bg} flex items-center justify-center mb-6 group-hover:rotate-12 transition-transform duration-300`}>
              <service.icon className={`w-8 h-8 ${service.color}`} />
            </div>

            {/* Content */}
            <div className="relative z-10 space-y-4">
              <h4 className={`text-xl font-bold ${service.color}`}>{service.title}</h4>
              <p className="text-sm font-light text-white/60 leading-relaxed">
                {service.description}
              </p>
              
              <div className="pt-4 flex items-center gap-2 text-xs font-mono text-white/40 group-hover:text-white transition-colors">
                <span>EXPLORE</span>
                <span className="block h-[1px] w-8 bg-current" />
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
