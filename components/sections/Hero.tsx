"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative z-10 flex min-h-screen w-full flex-col justify-between px-6 py-32 overflow-hidden pointer-events-none">
      
      {/* Top Left: Massive Typography */}
      <div className="flex flex-col items-start mt-20 pointer-events-auto">
        <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-neon-sky font-mono text-sm tracking-[0.3em] ml-2 mb-4"
        >
            EST. 2024
        </motion.h2>
        <motion.h1 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            className="font-black text-[15vw] leading-[0.8] tracking-tighter text-white mix-blend-difference"
        >
            DMS<br />
            <span className="text-[15vw] text-transparent bg-clip-text bg-gradient-to-r from-white/50 to-transparent">
                LAB
            </span>
        </motion.h1>
      </div>

      {/* Bottom Right: Description */}
      <div className="flex flex-col md:flex-row items-end justify-between w-full pointer-events-auto">
         <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 1 }}
            className="hidden md:flex flex-col gap-2"
         >
             <span className="h-[1px] w-24 bg-white/20" />
             <span className="text-xs font-mono text-white/40">SCROLL TO EXPLORE</span>
         </motion.div>

         <motion.p
           initial={{ opacity: 0, x: 20 }}
           animate={{ opacity: 1, x: 0 }}
           transition={{ delay: 0.8, duration: 1 }}
           className="max-w-xl text-right text-lg md:text-2xl text-white/80 font-light leading-relaxed"
         >
           We architect the <span className="text-neon-indigo font-normal">unseen</span>.<br /> 
           From abstract ideas to concrete reality.
         </motion.p>
      </div>

      {/* Background Abstract Blur (Extra accent) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] bg-neon-indigo/5 blur-[150px] rounded-full pointer-events-none -z-10" />
    </section>
  );
}
