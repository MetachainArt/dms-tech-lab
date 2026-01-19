"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative z-10 flex min-h-screen w-full flex-col justify-center px-6 overflow-hidden pointer-events-none">
      
      {/* Centered Content */}
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center pointer-events-auto mt-20">
        
        {/* Left Text */}
        <div className="flex flex-col items-start gap-8 z-20">
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
                Innovation<br />
                <span className="text-neon-sky">Through AI.</span>
            </motion.h1>

            <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-lg text-white/60 max-w-lg leading-relaxed"
            >
                We architect the unseen. From abstract ideas to concrete reality.<br />
                Experience the next generation of automotive retail solutions.
            </motion.p>
            
            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="flex flex-wrap gap-4"
            >
                <button className="px-8 py-4 bg-neon-sky text-[#050B1B] font-semibold rounded-full hover:bg-white transition-colors duration-300 flex items-center gap-2 group">
                    Start Your Project
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
                <button className="px-8 py-4 border border-white/20 text-white font-semibold rounded-full hover:bg-white/10 transition-colors duration-300">
                    View Solutions
                </button>
            </motion.div>
        </div>

        {/* Right Visual (Abstract placeholder for now that interacts with Crystal) */}
        <div className="relative h-full min-h-[50vh] flex items-center justify-center pointer-events-none">
             {/* The HeroCrystal component in the background serves as the main visual. 
                 We add a subtle gradient here to blend it. */}
             <div className="absolute inset-0 bg-gradient-to-l from-[#050B1B]/20 to-transparent z-10" />
        </div>

      </div>

      {/* Decorative Elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[100vw] h-[100vw] bg-neon-sky/5 blur-[120px] rounded-full pointer-events-none -z-10 mix-blend-screen" />
    </section>
  );
}
