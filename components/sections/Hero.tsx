"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative z-10 flex min-h-screen w-full flex-col items-center justify-center px-6 pt-32 text-center overflow-hidden">
      {/* Background Gradient for Text Readability */}
      <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 cursor-default select-none pointer-events-none">
        <div className="h-[400px] w-full bg-neon-indigo/5 blur-[120px] rounded-full mix-blend-screen" />
      </div>

      <div className="relative max-w-5xl space-y-8">
        {/* Main Identity - Fragment Assembly Animation (Placeholder for now) */}
        <motion.div
          initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="flex flex-col items-center justify-center"
        >
          <h2 className="mb-4 text-sm font-mono tracking-[0.2em] text-neon-sky uppercase">
            Future Architecture
          </h2>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white via-white/90 to-white/50 pb-2">
            DMS TECH
            <br />
            <span className="text-4xl md:text-6xl text-white/40 font-light">
              LAB
            </span>
          </h1>
        </motion.div>

        {/* Subcopy */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 1 }}
          className="mx-auto max-w-2xl text-lg md:text-xl text-white/60 font-light leading-relaxed text-balance"
        >
          기술을 만드는 회사가 아니라, 결과를 만드는 회사.
          <br />
          <span className="text-neon-indigo font-medium">DMS Solution</span>이 
          설계에서 실행까지, 완벽한 파트너가 되어드립니다.
        </motion.p>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] uppercase tracking-widest text-white/30">Scroll to Explore</span>
        <div className="h-10 w-[1px] bg-gradient-to-b from-white/0 via-white/50 to-white/0" />
      </motion.div>
    </section>
  );
}
