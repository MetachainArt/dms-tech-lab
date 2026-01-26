"use client";

import { VIBE_CATEGORIES, VibeCategory } from "@/lib/vibe-data";
import { cn } from "@/lib/utils";

interface SidebarProps {
  selectedCategory: VibeCategory;
  onSelectCategory: (category: VibeCategory) => void;
}

export default function Sidebar({ selectedCategory, onSelectCategory }: SidebarProps) {
  return (
    <aside className="w-full md:w-64 flex-shrink-0 mb-8 md:mb-0">
      <div className="sticky top-24">
        <h2 className="text-3xl font-bold text-white mb-8 font-caveat relative inline-block z-10">
            <span className="relative z-10">카테고리</span>
            <span className="absolute bottom-2 left-0 w-full h-3 bg-neon-sky/50 -z-10 -rotate-2 rounded-sm" />
        </h2>
        
        <nav className="space-y-2">
          {VIBE_CATEGORIES.map((category) => (
            <button
              key={category}
              onClick={() => onSelectCategory(category)}
              className={cn(
                "w-full text-left px-4 py-3 rounded-xl transition-all duration-300 flex items-center justify-between group",
                selectedCategory === category
                  ? "bg-gradient-to-r from-neon-sky/20 to-transparent text-white font-bold border-l-4 border-neon-sky"
                  : "text-gray-400 hover:text-white hover:bg-white/5 border-l-4 border-transparent"
              )}
            >
              <span className="text-lg tracking-wide">{category}</span>
              {selectedCategory === category && (
                 <span className="w-2 h-2 rounded-full bg-neon-sky animate-pulse" />
              )}
            </button>
          ))}
        </nav>

        {/* Decorative Element */}
        <div className="mt-12 p-6 rounded-2xl bg-white/5 border border-white/5 text-center">
            <p className="text-sm text-gray-500 italic">
                "Code with Vibe,<br/>Create with Soul."
            </p>
        </div>
      </div>
    </aside>
  );
}
