"use client";

import { useState, useEffect } from "react";
import { PromptCategory, PromptItem, IMAGE_SUBCATEGORIES, TEXT_SUBCATEGORIES, VIDEO_SUBCATEGORIES, VIBE_CODING_SUBCATEGORIES } from "@/lib/prompt-data";
import PromptCard from "./PromptCard";
import PromptDetail from "./PromptDetail";
import TextPromptDetail from "./text/TextPromptDetail";
import { cn } from "@/lib/utils";

type ViewStage = "categories" | "list" | "detail";

interface PromptContainerProps {
  initialPrompts: PromptItem[];
}

export default function PromptContainer({ initialPrompts }: PromptContainerProps) {
  const [selectedCategory, setSelectedCategory] = useState<PromptCategory>("All");
  const [subCategory, setSubCategory] = useState<string | null>(null);
  
  // Detail States
  const [selectedVisualPrompt, setSelectedVisualPrompt] = useState<PromptItem | null>(null);
  const [selectedTextPrompt, setSelectedTextPrompt] = useState<PromptItem | null>(null);

  // Reset subcategory when main category changes
  useEffect(() => {
    setSubCategory(null);
  }, [selectedCategory]);

  // Filter Prompts
  const filteredPrompts = initialPrompts.filter(p => {
      // 1. Category Filter
      const matchesCategory = selectedCategory === "All" || p.category === selectedCategory;
      
      // 2. Subcategory Filter
      // Note: Text subcategories might use ID or Name, we should check both or standardize.
      // In the data, Text subs have English IDs (e.g. "writing"). The prompt data should have "writing".
      const matchesSubCategory = !subCategory || p.subcategory === subCategory;
      
      return matchesCategory && matchesSubCategory;
  });

  const categories: PromptCategory[] = ["All", "Text", "Image", "Video", "Vibe Coding"];

  // Determine available subcategories based on active category
  let activeSubCategories: string[] | { id: string; name: string }[] = [];
  if (selectedCategory === "Image") activeSubCategories = IMAGE_SUBCATEGORIES;
  else if (selectedCategory === "Video") activeSubCategories = VIDEO_SUBCATEGORIES;
  else if (selectedCategory === "Vibe Coding") activeSubCategories = VIBE_CODING_SUBCATEGORIES;
  else if (selectedCategory === "Text") activeSubCategories = TEXT_SUBCATEGORIES;

  return (
    <div className="space-y-8">
        
        {/* Category Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
            {categories.map((category) => {
                const isSelected = selectedCategory === category;
                return (
                    <button
                        key={category}
                        onClick={() => setSelectedCategory(category)}
                        className={`
                            relative px-6 py-2.5 rounded-full text-sm font-bold transition-all duration-300
                            ${isSelected 
                                ? "bg-white text-black shadow-[0_0_20px_rgba(255,255,255,0.3)] scale-105" 
                                : "bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white"
                            }
                        `}
                    >
                        {category}
                    </button>
                );
            })}
        </div>
        
        {/* Subcategory Filter Buttons (Unified for ALL categories) */}
        {activeSubCategories.length > 0 && (
             <div className="relative group">
                <div className="flex flex-wrap gap-2 justify-center max-w-5xl mx-auto px-4 py-6 bg-[#050B1B]/50 backdrop-blur-xl rounded-3xl border border-white/5">
                    <button
                        onClick={() => setSubCategory(null)}
                        className={`
                            px-4 py-2 rounded-xl text-xs font-bold transition-all duration-300 border
                            ${!subCategory 
                                ? "bg-neon-sky text-[#050B1B] border-neon-sky shadow-[0_0_15px_rgba(0,240,255,0.3)]" 
                                : "bg-white/5 text-gray-400 border-transparent hover:bg-white/10 hover:text-white"
                            }
                        `}
                    >
                        전체 (All)
                    </button>
                    {activeSubCategories.map((sub: any) => {
                        // Handle both string arrays and object arrays (for Text)
                        const subName = typeof sub === 'string' ? sub : sub.name;
                        const subId = typeof sub === 'string' ? sub : sub.id;
                        
                        const isActive = subCategory === subId;
                        return (
                            <button
                                key={subId}
                                onClick={() => setSubCategory(subId)}
                                className={`
                                    px-4 py-2 rounded-xl text-xs font-bold transition-all duration-300 border
                                    ${isActive 
                                        ? "bg-white text-black border-white shadow-[0_0_15px_rgba(255,255,255,0.15)] scale-105" 
                                        : "bg-white/5 text-gray-400 border-white/5 hover:bg-white/10 hover:text-white hover:border-white/20"
                                    }
                                `}
                            >
                                {subName}
                            </button>
                        );
                    })}
                </div>
            </div>
        )}

      {/* Prompts Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 animate-in fade-in slide-in-from-bottom-4 duration-700">
        {filteredPrompts.map((prompt, idx) => (
             <PromptCard
                key={prompt.id}
                prompt={prompt}
                index={idx}
                onSelect={(p) => {
                    // Decide which detail view to show based on category or content
                    if (prompt.category === "Text" || prompt.category === "Vibe Coding") {
                        setSelectedTextPrompt(p);
                    } else {
                        setSelectedVisualPrompt(p);
                    }
                }}
            />
        ))}

        {filteredPrompts.length === 0 && (
            <div className="col-span-full py-20 text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white/5 mb-4">
                    <span className="text-2xl text-white/20">?</span>
                </div>
                <p className="text-white/40">해당하는 프롬프트가 없습니다.</p>
            </div>
        )}
      </div>

      {/* Visual Prompt Detail Modal (Image / Video) */}
      {selectedVisualPrompt && (
        <PromptDetail
          prompt={selectedVisualPrompt}
          onClose={() => setSelectedVisualPrompt(null)}
        />
      )}
      
      {/* Text Prompt Detail Modal (Text / Vibe Coding) */}
      {selectedTextPrompt && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8 bg-black/90 backdrop-blur-md overflow-y-auto">
             <div className="relative w-full max-w-5xl my-auto">
                 <TextPromptDetail 
                    prompt={selectedTextPrompt}
                    onBack={() => setSelectedTextPrompt(null)}
                 />
                 <button 
                    onClick={() => setSelectedTextPrompt(null)}
                    className="absolute -top-12 right-0 text-white/50 hover:text-white transition-colors"
                 >
                    닫기 [ESC]
                 </button>
             </div>
        </div>
      )}
    </div>
  );
}
