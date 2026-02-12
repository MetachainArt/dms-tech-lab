"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import NeuralBackground from "@/components/ui/NeuralBackground";

export default function Hero() {
  return (
    <section className="relative z-10 flex w-full min-h-screen flex-col justify-center px-6 overflow-hidden" aria-labelledby="hero-heading">

      {/* Neural Network Background - Full Screen */}
      <div className="absolute inset-0 z-0">
        <NeuralBackground className="absolute" simpleMode={true} />
        {/* Gradient overlays for depth and text readability - Reduced opacity for visibility */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#050B1B]/50 via-[#050B1B]/20 to-transparent pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#050B1B] via-transparent to-transparent pointer-events-none" />
      </div>

      {/* Centered Content */}
      <div className="relative z-10 max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

        {/* Left Text */}
        <div className="flex flex-col items-start gap-10">
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
                id="hero-heading"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="font-bold text-4xl md:text-6xl lg:text-7xl leading-[1.2] tracking-tight text-white"
            >
                Design the Unseen,<br />
                <span className="text-neon-sky whitespace-nowrap">보이지 않는 것을 현실로.</span>
            </motion.h1>

            <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-lg text-white/60 max-w-lg leading-relaxed"
            >
                아이디어에서 시스템으로, 개념에서 경험으로.<br />
                기술의 본질을 설계합니다.
            </motion.p>

            <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="text-base text-white/50 max-w-xl leading-relaxed"
            >
                복잡한 비즈니스 로직을 자동화하고, AI와 함께 새로운 가능성을 탐색합니다.<br />
                우리는 기술을 통해 문제를 해결하고, 더 나은 미래를 설계합니다.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="flex flex-col sm:flex-row items-start gap-4 pt-2"
            >
                <a
                    href="#contact"
                    className="group inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-neon-sky to-cyan-400 hover:from-cyan-400 hover:to-neon-sky text-[#050B1B] font-bold rounded-xl transition-all shadow-lg shadow-neon-sky/20 hover:shadow-neon-sky/40 hover:-translate-y-0.5"
                >
                    무료 상담 신청
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
                <Link
                    href="/services"
                    className="inline-flex items-center gap-2 px-8 py-4 border border-white/20 hover:border-neon-sky/50 text-white font-semibold rounded-xl transition-all hover:bg-white/5 hover:-translate-y-0.5"
                >
                    포트폴리오 보기
                </Link>
            </motion.div>
        </div>

        {/* Right side - Neural network visible through transparent area */}
        <div className="hidden lg:block relative h-full min-h-[300px]" />

      </div>

      {/* Subtle ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] bg-neon-sky/3 blur-[150px] rounded-full pointer-events-none -z-10" />
    </section>
  );
}
