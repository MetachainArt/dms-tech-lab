"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface SeriesCardProps {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  coverImage: string;
  color: string;
  postCount: number;
  tags: string[];
}

export default function SeriesCard({
  id,
  title,
  subtitle,
  description,
  coverImage,
  color,
  postCount,
  tags,
}: SeriesCardProps) {
  return (
    <Link href={`/blog/series/${id}`} className="group relative block w-full">
      <div className="relative aspect-[3/4] w-full rounded-[20px] transition-all duration-500 group-hover:-translate-y-2 group-hover:shadow-2xl hover:shadow-neon-sky/20 perspective-1000">
        
        {/* Book Spine Effect (Left Side) */}
        <div className={`absolute left-0 top-0 bottom-0 w-3 rounded-l-[20px] bg-gradient-to-r from-white/20 to-transparent z-20 pointer-events-none`} />
        
        {/* Cover Image */}
        <div className="absolute inset-0 rounded-[20px] overflow-hidden bg-[#0A1124] border border-white/10 group-hover:border-white/30 transition-colors">
          <img
            src={coverImage}
            alt={title}
            className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-700"
          />
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#050B1B]/60 to-[#050B1B] z-10" />
        </div>

        {/* Content */}
        <div className="absolute inset-0 p-8 flex flex-col justify-end z-20">
            {/* Top Badge */}
            <div className="absolute top-6 left-6 flex flex-wrap gap-2">
                {tags.map((tag, i) => (
                    <span key={i} className="px-3 py-1 text-[10px] font-bold uppercase tracking-wider rounded-full bg-white/10 backdrop-blur-md border border-white/10 text-white/80">
                        {tag}
                    </span>
                ))}
            </div>

            {/* Post Count Badge */}
            <div className={`absolute top-6 right-6 w-12 h-16 bg-${color}-500 rounded-b-lg shadow-lg flex flex-col items-center justify-center text-white font-bold opacity-0 -translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 delay-100`}>
                <span className="text-xs opacity-80">Vol.</span>
                <span className="text-lg">{postCount}</span>
            </div>

            {/* Title Section */}
            <div className="transform transition-transform duration-300 group-hover:translate-y-[-10px]">
                <span className={`block text-${color}-400 text-sm font-bold tracking-widest uppercase mb-2 opacity-80`}>
                    {subtitle}
                </span>
                <h3 className="text-3xl font-bold text-white mb-4 leading-tight group-hover:text-neon-sky transition-colors">
                    {title}
                </h3>
                <div className="h-0 group-hover:h-auto overflow-hidden transition-all duration-500 opacity-0 group-hover:opacity-100">
                    <p className="text-gray-400 text-sm leading-relaxed mb-4 line-clamp-3">
                        {description}
                    </p>
                    <div className="flex items-center text-white font-semibold text-sm">
                        Read Series <ArrowRight className="w-4 h-4 ml-2" />
                    </div>
                </div>
            </div>
        </div>

        {/* Hover Glow Effect */}
        <div className={`absolute -inset-1 rounded-[24px] bg-gradient-to-br from-${color}-500/20 to-transparent blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10`} />
      </div>
      
      {/* Reflection for realism */}
      <div className="absolute -bottom-4 left-4 right-4 h-4 bg-black/50 blur-lg rounded-[100%] opacity-0 group-hover:opacity-40 transition-opacity duration-500 transform scale-x-90" />
    </Link>
  );
}
