"use client";

import { motion } from "framer-motion";
import { Target, Users, Zap, Award } from "lucide-react";
import OrbIcon from "@/components/ui/OrbIcon";

const features = [
  {
    icon: Target,
    title: "Insight",
    description: "본질을 꿰뚫는 분석",
    color: "text-neon-sky",
  },
  {
    icon: Users,
    title: "Partnership",
    description: "성공을 함께하는 러닝메이트",
    color: "text-neon-indigo",
  },
  {
    icon: Zap,
    title: "Execution",
    description: "상상을 현실로 구현",
    color: "text-neon-purple",
  },
  {
    icon: Award,
    title: "Quality",
    description: "타협하지 않는 기준",
    color: "text-pink-500",
  },
];

export default function Company() {
  return (
    <section id="company" className="relative w-full py-40 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            
            {/* Left: Manifesto */}
            <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
            >
                <h3 className="text-neon-indigo font-mono tracking-widest mb-6 text-sm">WHO WE ARE</h3>
                <h2 className="text-5xl md:text-7xl font-bold leading-[1.1] mb-8 tracking-tight">
                    <span className="block text-white">Not just coders.</span>
                    <span className="block text-white/30">We are Architects.</span>
                </h2>
                <p className="text-xl text-white/60 font-light leading-relaxed max-w-md">
                    DMS Solution은 단순한 개발사가 아닙니다.
                    우리는 기술이라는 도구로 비즈니스의 성공적인 
                    미래를 조각하는 디지털 아키텍트 그룹입니다.
                </p>
            </motion.div>

            {/* Right: Feature Grid with Orb Icons */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                {features.map((feature, index) => (
                    <motion.div
                        key={feature.title}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className="flex flex-col items-start gap-4 p-6 rounded-3xl border border-white/5 bg-white/[0.02] backdrop-blur-sm hover:bg-white/[0.05] transition-colors"
                    >
                        <OrbIcon icon={feature.icon} color={feature.color} />
                        <div>
                            <h4 className="text-2xl font-bold text-white mb-2">{feature.title}</h4>
                            <p className="text-white/50 text-sm">{feature.description}</p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
      </div>
    </section>
  );
}
