"use client";

import { motion } from "framer-motion";
import { Cpu, Palette, GraduationCap, Globe } from "lucide-react";

const services = [
  {
    icon: Cpu,
    title: "DEV",
    subtitle: "자동화 & 개발",
    description: "N8N, AI Agent 기반 워크플로우 자동화. 반복 업무를 시스템으로.",
    color: "from-blue-500 to-cyan-400",
  },
  {
    icon: Palette,
    title: "DESIGN",
    subtitle: "3D & 시각화",
    description: "제품 시각화, WebGL, 인터랙티브 3D 경험 설계.",
    color: "from-purple-500 to-pink-400",
  },
  {
    icon: GraduationCap,
    title: "EDU",
    subtitle: "기술 교육",
    description: "GenAI 워크샵, 프롬프트 엔지니어링, 맞춤형 커리큘럼.",
    color: "from-green-500 to-emerald-400",
  },
  {
    icon: Globe,
    title: "TRADE",
    subtitle: "해외 무역",
    description: "글로벌 네트워크 기반 기술 제품 수출입 지원.",
    color: "from-orange-500 to-amber-400",
  },
];

export default function Services() {
  return (
    <section className="w-full py-24 px-6 bg-[#050B1B]">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="h-[1px] w-12 bg-neon-sky" />
            <h3 className="text-neon-sky font-semibold tracking-widest text-sm uppercase">
              What We Do
            </h3>
            <span className="h-[1px] w-12 bg-neon-sky" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
            Services
          </h2>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
                ease: "easeOut",
              }}
              className="group relative p-8 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300"
            >
              {/* Icon */}
              <div
                className={`w-14 h-14 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
              >
                <service.icon className="w-7 h-7 text-white" />
              </div>

              {/* Title */}
              <h4 className="text-2xl font-bold text-white mb-1">
                {service.title}
              </h4>
              <p className="text-neon-sky text-sm font-medium mb-4">
                {service.subtitle}
              </p>

              {/* Description */}
              <p className="text-white/60 text-sm leading-relaxed">
                {service.description}
              </p>

              {/* Hover Glow */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-neon-sky/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
