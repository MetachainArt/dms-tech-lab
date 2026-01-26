"use client";

import { VibeApp } from "@/lib/vibe-data";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

interface AppCardProps {
  app: VibeApp;
}

export default function AppCard({ app }: AppCardProps) {
  return (
    <Link href={app.url} className="group block h-full">
      <div className="h-full relative bg-white/5 rounded-3xl p-6 border border-white/10 hover:border-neon-sky/50 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(14,165,233,0.15)] overflow-hidden">
        
        {/* Glow Effect */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-neon-sky/20 blur-[50px] rounded-full -translate-y-1/2 translate-x-1/2 group-hover:bg-neon-sky/30 transition-colors" />

        {/* Header */}
        <div className="flex justify-between items-start mb-6 relative z-10">
            <div className={`w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center text-white group-hover:bg-neon-sky group-hover:text-black transition-colors duration-300`}>
                <app.icon className="w-6 h-6" />
            </div>
            
            <div className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider border ${
                app.status === 'Live' ? 'border-green-500/30 text-green-400 bg-green-500/10' :
                app.status === 'Beta' ? 'border-amber-500/30 text-amber-400 bg-amber-500/10' :
                'border-gray-500/30 text-gray-400 bg-gray-500/10'
            }`}>
                {app.status}
            </div>
        </div>

        {/* Content */}
        <div className="relative z-10">
            <h3 className="text-xl font-bold text-white mb-3 group-hover:text-neon-sky transition-colors">{app.title}</h3>
            <p className="text-gray-400 text-sm leading-relaxed mb-6 line-clamp-2">
                {app.description}
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-6">
                {app.tags.map(tag => (
                    <span key={tag} className="text-xs text-gray-500 hover:text-gray-300 transition-colors">#{tag}</span>
                ))}
            </div>
        </div>

        {/* Footer */}
        <div className="flex items-center text-sm font-semibold text-gray-500 group-hover:text-white transition-colors relative z-10">
            Launch App <ArrowUpRight className="w-4 h-4 ml-1 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
        </div>
      </div>
    </Link>
  );
}
