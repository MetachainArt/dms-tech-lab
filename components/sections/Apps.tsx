"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

// Mock Data for Apps
const apps = [
  {
    id: "vibe-coder",
    name: "Vibe Coder",
    desc: "AI Pair Programming Assistant",
    stack: ["Next.js", "OpenAI"],
    status: "LIVE",
  },
  {
    id: "closure",
    name: "Project Closure",
    desc: "Automated Project Wrapper",
    stack: ["Python", "Rust"],
    status: "BETA",
  },
  {
    id: "mind-map",
    name: "Idea Flow",
    desc: "3D Brainstorming Canvas",
    stack: ["Three.js", "Socket.io"],
    status: "DEV",
  },
];

export default function Apps() {
  return (
    <section id="apps" className="relative w-full py-32 px-6 flex flex-col items-center bg-black/20 backdrop-blur-sm">
      <div className="max-w-7xl w-full">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div>
            <h3 className="text-neon-sky font-mono tracking-widest mb-2">WHAT WE BUILD</h3>
            <h2 className="text-4xl md:text-5xl font-bold text-white">Featured Apps</h2>
          </div>
          <button className="px-6 py-3 rounded-full border border-white/20 hover:bg-white/10 transition-all font-mono text-sm flex items-center gap-2 group">
            VIEW ALL APPS
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {apps.map((app, index) => (
            <motion.div
              key={app.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative aspect-[4/3] rounded-2xl border border-white/10 bg-white/5 overflow-hidden hover:border-neon-sky/50 transition-colors cursor-pointer"
            >
              {/* Holographic Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none z-10" />

              {/* Content Overlay */}
              <div className="absolute inset-0 p-8 flex flex-col justify-between z-20">
                <div className="flex justify-between items-start">
                  <span className={`px-2 py-1 rounded text-[10px] font-mono border ${app.status === 'LIVE' ? 'border-neon-sky text-neon-sky' : 'border-white/30 text-white/50'}`}>
                    {app.status}
                  </span>
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all transform translate-y-4 group-hover:translate-y-0">
                    <ArrowUpRight className="w-5 h-5" />
                  </div>
                </div>

                <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-2xl font-bold mb-1">{app.name}</h3>
                  <p className="text-white/60 text-sm mb-4">{app.desc}</p>
                  
                  {/* Stack Badges */}
                  <div className="flex gap-2">
                    {app.stack.map((tech) => (
                      <span key={tech} className="textxs text-white/40 font-mono bg-white/5 px-2 py-1 rounded">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Background Image/Preview Placeholder */}
              <div className="absolute inset-0 bg-[#0a0a0a] group-hover:scale-105 transition-transform duration-700 z-0">
                {/* Will be replaced by <video> or <Image> */}
                <div className="w-full h-full bg-gradient-to-b from-transparent to-black/80" />
              </div>
            </motion.div>
          ))}
          
          {/* Coming Soon Slot */}
          <div className="relative aspect-[4/3] rounded-2xl border border-white/5 bg-white/[0.02] flex items-center justify-center border-dashed">
            <span className="text-white/20 font-mono animate-pulse">COMING SOON</span>
          </div>
        </div>
      </div>
    </section>
  );
}
