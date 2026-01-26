"use client";

import { AutomationTemplate } from "@/lib/automation-data";
import { Copy, Box, Zap, User } from "lucide-react"; // Icons placeholder
import Link from "next/link";
import Image from "next/image";

interface TemplateCardProps {
  template: AutomationTemplate;
}

export default function TemplateCard({ template }: TemplateCardProps) {
  return (
    <Link href={`/automation/${template.id}`} className="group block h-full">
      <div className="h-full bg-[#1A1D24] rounded-xl p-6 border border-white/5 hover:border-white/20 transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between">
        
        <div>
            {/* Icons Row */}
            <div className="flex gap-2 mb-4">
                {template.icons.map((icon, i) => (
                    <div key={i} className="w-8 h-8 rounded bg-white/10 flex items-center justify-center text-gray-400">
                        {/* Render placeholder icons based on string, or generic box */}
                        <Box className="w-4 h-4" />
                    </div>
                ))}
            </div>

            {/* Title & Desc */}
            <h3 className="text-lg font-bold text-white mb-2 leading-tight group-hover:text-blue-400 transition-colors">
                {template.title}
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed mb-6 line-clamp-3">
                {template.description}
            </p>
        </div>

        {/* Footer: Author */}
        <div className="flex items-center gap-2 mt-4 pt-4 border-t border-white/5">
            <div className="w-6 h-6 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center text-[10px] font-bold text-white">
                {template.author.name[0]}
            </div>
            <span className="text-xs text-gray-400 font-medium">
                {template.author.name}
            </span>
            {template.author.verified && (
                <div className="w-3 h-3 rounded-full bg-blue-500 flex items-center justify-center text-[8px] text-white">✓</div>
            )}
        </div>

      </div>
    </Link>
  );
}
