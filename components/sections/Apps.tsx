"use client";

import BentoCard from "@/components/ui/BentoCard";
import { Terminal, Box, BrainCircuit, Activity } from "lucide-react";

export default function Apps() {
  return (
    <section id="apps" className="w-full py-32 px-6 flex flex-col items-center">
      <div className="max-w-7xl w-full">
        {/* Header */}
        <div className="mb-20">
          <h3 className="text-neon-sky font-mono tracking-widest mb-4">APPS & TOOLS</h3>
          <h2 className="text-5xl md:text-7xl font-bold text-white tracking-tight">
            Digital<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-sky to-neon-purple opacity-80">
              Artifacts
            </span>
          </h2>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[400px]">
          
          {/* Card 1: Vibe Coder (Wide) */}
          <BentoCard
            title="Vibe Coder"
            subtitle="AI Pair Programmer"
            className="md:col-span-2"
            cta="Try Beta"
            href="#"
            background={
              <div className="absolute inset-0 bg-gradient-to-br from-neon-indigo/20 via-transparent to-transparent">
                 <div className="absolute right-0 bottom-0 w-3/4 h-3/4 bg-[url('https://cdn.dribbble.com/userupload/3635799/file/original-46ba012b13ed87563d7756f7000b0d3e.png?resize=1024x768')] opacity-20 bg-no-repeat bg-cover mix-blend-overlay" />
              </div>
            }
          >
            <Terminal className="w-6 h-6 text-white" />
          </BentoCard>

          {/* Card 2: Idea Flow */}
          <BentoCard
            title="Idea Flow"
            subtitle="3D Canvas"
            className="md:col-span-1"
            cta="Explore"
            href="#"
            background={
               <div className="absolute inset-0 bg-gradient-to-bl from-neon-purple/20 via-transparent to-transparent">
                   {/* Abstract Shape or 3D element placeholder */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-30">
                        <div className="w-32 h-32 rounded-full border border-white/20 animate-spin-slow" />
                        <div className="absolute w-48 h-48 rounded-full border border-white/10 animate-reverse-spin" />
                    </div>
               </div>
            }
          >
            <BrainCircuit className="w-6 h-6 text-white" />
          </BentoCard>

          {/* Card 3: Project Closure */}
          <BentoCard
            title="Closure"
            subtitle="Auto-Wrapper"
            className="md:col-span-1"
            cta="View Docs"
            href="#"
            background={
                <div className="absolute inset-0 bg-gradient-to-tr from-emerald-500/10 via-transparent to-transparent" />
            }
          >
            <Box className="w-6 h-6 text-white" />
          </BentoCard>

          {/* Card 4: System Monitor (Wide) */}
          <BentoCard
            title="DMS Monitor"
            subtitle="System Status"
            className="md:col-span-2"
            cta="Check Status"
            href="#"
            background={
                <div className="absolute inset-0 bg-gradient-to-tl from-rose-500/10 via-transparent to-transparent">
                     {/* Mock Graph */}
                     <div className="absolute bottom-0 left-0 right-0 h-32 flex items-end justify-around px-8 opacity-20">
                        {[40, 70, 45, 90, 60, 80, 50].map((h, i) => (
                            <div key={i} className="w-4 bg-white" style={{ height: `${h}%`}} />
                        ))}
                     </div>
                </div>
            }
          >
            <Activity className="w-6 h-6 text-white" />
          </BentoCard>

        </div>
      </div>
    </section>
  );
}
