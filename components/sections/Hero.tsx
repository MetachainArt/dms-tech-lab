"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import NeuralBackground from "@/components/ui/NeuralBackground";

export default function Hero() {
  return (
    <section className="relative z-10 flex min-h-screen w-full flex-col justify-center px-6 overflow-hidden">

      {/* Neural Network Background - Full Screen */}
      <div className="absolute inset-0 z-0">
        <NeuralBackground />
        {/* Gradient overlays for depth and text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#050B1B]/90 via-[#050B1B]/50 to-transparent pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#050B1B] via-transparent to-[#050B1B]/30 pointer-events-none" />
      </div>

      {/* Centered Content */}
      <div className="relative z-10 max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mt-20">

        {/* Left Text */}
        <div className="flex flex-col items-start gap-8">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            >
                <span className="px-4 py-2 rounded-full bg-neon-sky/10 text-neon-sky text-sm font-semibold tracking-wide border border-neon-sky/20">
                    AUTOMOTIVE RETAIL AI
                </span>
            </motion.div>

            <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="font-bold text-5xl md:text-7xl lg:text-8xl leading-[1.1] tracking-tight text-white"
            >
                혁신,<br />
                <span className="text-neon-sky">AI를 만나다.</span>
            </motion.h1>

            <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-lg text-white/60 max-w-lg leading-relaxed"
            >
                우리는 보이지 않는 것을 설계합니다. 추상적인 아이디어를 구체적인 현실로.<br />
                차세대 오토모티브 리테일 솔루션을 경험해보세요.
            </motion.p>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="flex flex-wrap gap-4"
            >
                <button className="px-8 py-4 bg-neon-sky text-[#050B1B] font-semibold rounded-full hover:bg-white transition-colors duration-300 flex items-center gap-2 group">
                    프로젝트 시작하기
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
                <button className="px-8 py-4 border border-white/20 text-white font-semibold rounded-full hover:bg-white/10 transition-colors duration-300">
                    솔루션 보기
                </button>
            </motion.div>
        </div>

        {/* Right side - Neural network visible through transparent area */}
        <div className="hidden lg:block relative h-full min-h-[50vh]" />

      </div>

      {/* Subtle ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] bg-neon-sky/3 blur-[150px] rounded-full pointer-events-none -z-10" />
    </section>
  );
}
