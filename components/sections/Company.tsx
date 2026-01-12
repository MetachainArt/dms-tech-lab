"use client";

import { motion } from "framer-motion";
import { Target, Users, Zap, Award } from "lucide-react";

const features = [
  {
    icon: Target,
    title: "Insight",
    description: "본질을 꿰뚫는 분석으로 비즈니스의 핵심 가치를 발견합니다.",
    color: "text-neon-cyan",
    bg: "bg-neon-cyan/10",
  },
  {
    icon: Users,
    title: "Partnership",
    description: "단순 용역이 아닌, 성공을 함께 고민하는 러닝메이트가 됩니다.",
    color: "text-neon-indigo",
    bg: "bg-neon-indigo/10",
  },
  {
    icon: Zap,
    title: "Execution",
    description: "빠르고 정확한 실행력으로 상상을 현실로 구현합니다.",
    color: "text-neon-purple",
    bg: "bg-neon-purple/10",
  },
  {
    icon: Award,
    title: "Quality",
    description: "타협하지 않는 품질로 글로벌 스탠다드 결과물을 약속합니다.",
    color: "text-neon-pink",
    bg: "bg-neon-pink/10",
  },
];

export default function Company() {
  return (
    <section id="company" className="relative w-full py-32 px-6 flex flex-col items-center overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
         <div className="absolute top-1/4 -right-20 w-[600px] h-[600px] bg-neon-indigo/5 blur-[100px] rounded-full" />
         <div className="absolute bottom-1/4 -left-20 w-[500px] h-[500px] bg-neon-purple/5 blur-[100px] rounded-full" />
      </div>

      <div className="relative z-10 max-w-7xl w-full">
        {/* Header Group */}
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-8 mb-20">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            <h3 className="text-neon-cyan font-mono tracking-widest mb-4">WHO WE ARE</h3>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              We are not just coders.<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/40">
                We are Architects.
              </span>
            </h2>
          </motion.div>

          <motion.p 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-md text-white/60 text-lg font-light leading-relaxed"
          >
            DMS Solution은 기술을 넘어 비즈니스의 성공을 설계합니다.
            여러분의 비전이 코드로, 그리고 현실로 이루어지는 과정을 함께합니다.
          </motion.p>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="group p-8 rounded-2xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.05] backdrop-blur-sm transition-all duration-300"
            >
              <div className={`w-12 h-12 rounded-lg ${feature.bg} flex items-center justify-center mb-6`}>
                <feature.icon className={`w-6 h-6 ${feature.color}`} />
              </div>
              <h4 className="text-xl font-bold mb-3 text-white group-hover:text-neon-cyan transition-colors">
                {feature.title}
              </h4>
              <p className="text-white/50 leading-relaxed text-sm">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Vision Banner */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-32 relative rounded-3xl overflow-hidden border border-white/10"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-neon-indigo/20 to-neon-purple/20 backdrop-blur-3xl z-0" />
          <div className="relative z-10 p-12 md:p-20 text-center">
            <h3 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">
              "From Abstract to Concrete"
            </h3>
            <p className="max-w-2xl mx-auto text-white/70 text-lg md:text-xl font-light">
              우리는 모호한 상상을 명확한 결과물로 만듭니다.<br className="hidden md:block"/>
              지금, DMS Solution과 함께 미래를 그려보세요.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
