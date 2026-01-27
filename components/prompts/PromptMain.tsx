"use client";

import { useState, useEffect } from "react";
import { PromptCategory, PromptItem, IMAGE_SUBCATEGORIES } from "@/lib/prompt-data";
import PromptSidebar from "./PromptSidebar";
import PromptCard from "./PromptCard";
import TextCategoryGrid from "./text/TextCategoryGrid";
import TextPromptList from "./text/TextPromptList";
import TextPromptDetail from "./text/TextPromptDetail";
import { motion, AnimatePresence } from "framer-motion";
import { Search } from "lucide-react";
import { cn } from "@/lib/utils";

type ViewStage = "categories" | "list" | "detail";

interface PromptContainerProps {
  initialPrompts: PromptItem[];
}

export default function PromptContainer({ initialPrompts }: PromptContainerProps) {
  const [selectedCategory, setSelectedCategory] = useState<PromptCategory>("All");
  const [searchQuery, setSearchQuery] = useState("");
  
  // Text & Image Prompt Navigation State
  const [viewState, setViewState] = useState<{ 
    stage: ViewStage; 
    subCategory?: string; 
    selectedPrompt?: PromptItem 
  }>({ stage: "categories" });

  // Reset drill-down when main category changes
  useEffect(() => {
    setViewState({ stage: "categories", subCategory: undefined });
  }, [selectedCategory]);

  const filteredPrompts = initialPrompts.filter(p => {
      const matchesCategory = selectedCategory === "All" || p.category === selectedCategory;
      const matchesSubCategory = !viewState.subCategory || p.subcategory === viewState.subCategory;
      const matchesSearch = p.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                            p.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                            p.promptContent.toLowerCase().includes(searchQuery.toLowerCase());
      
      // For Text, subcategory filtering happens in TextPromptList, not here in the main filter if stage is categories
      if (selectedCategory === "Text") return matchesCategory && matchesSearch;

      return matchesCategory && matchesSubCategory && matchesSearch;
  });

  // State for non-text prompt details (Image, Video, etc.)
  const [selectedVisualPrompt, setSelectedVisualPrompt] = useState<PromptItem | null>(null);

  // Text Prompt Specific Logic
  const renderTextContent = () => {
    if (viewState.stage === "categories") {
        return (
            <TextCategoryGrid 
                onSelectCategory={(id) => setViewState({ stage: "list", subCategory: id })} 
            />
        );
    }
    if (viewState.stage === "list") {
        // Filter prompts by subcategory
        const subCatPrompts = initialPrompts.filter(p => p.category === "Text" && p.subcategory === viewState.subCategory);
        
        return (
            <TextPromptList 
                category={viewState.subCategory || ""}
                prompts={subCatPrompts}
                onSelectPrompt={(p) => setViewState({ ...viewState, stage: "detail", selectedPrompt: p })}
                onBack={() => setViewState({ stage: "categories" })}
            />
        );
    }
    if (viewState.stage === "detail" && viewState.selectedPrompt) {
        return (
            <TextPromptDetail 
                prompt={viewState.selectedPrompt}
                onBack={() => setViewState({ ...viewState, stage: "list" })}
            />
        );
    }
    return null;
  };

  // Render Visual Detail View
  if (selectedVisualPrompt) {
    return (
        <div className="w-full">
            <TextPromptDetail 
                prompt={selectedVisualPrompt}
                onBack={() => setSelectedVisualPrompt(null)}
            />
        </div>
    );
  }

  return (
    <div className="flex flex-col md:flex-row gap-8">
      <PromptSidebar 
        selectedCategory={selectedCategory} 
        onSelectCategory={(cat) => {
            setSelectedCategory(cat);
            setSelectedVisualPrompt(null);
        }} 
      />

      <div className="flex-1 min-h-[600px]">
        {/* Search Bar - Hide in Detail view */}
        {viewState.stage !== "detail" && (
            <div className="relative mb-8">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                <input 
                    type="text" 
                    placeholder="Search prompts..." 
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full bg-[#1A1D24] border border-white/10 rounded-xl py-3 pl-12 pr-4 text-white placeholder-gray-500 focus:outline-none focus:border-neon-purple transition-colors"
                />
            </div>
        )}

        {/* Section Header */}
        {selectedCategory !== "Text" && (
            <div className="mb-6 flex justify-between items-end">
                <div>
                    <h2 className="text-2xl font-bold text-white">Prompt Collection</h2>
                    <p className="text-gray-400 text-sm">{filteredPrompts.length} prompts available</p>
                </div>
            </div>
        )}

        {/* Image Subcategories Filters */}
        {selectedCategory === "Image" && (
            <div className="mb-8 flex flex-wrap gap-2">
                <button
                    onClick={() => setViewState(prev => ({ ...prev, subCategory: undefined }))}
                    className={cn(
                        "px-4 py-2 rounded-lg text-sm font-medium transition-all border",
                        !viewState.subCategory 
                            ? "bg-neon-purple/20 text-neon-purple border-neon-purple/50 shadow-[0_0_10px_rgba(139,92,246,0.2)]" 
                            : "bg-[#1A1D24] text-gray-400 border-white/10 hover:border-white/30 hover:text-white"
                    )}
                >
                    All
                </button>
                {IMAGE_SUBCATEGORIES.map(sub => (
                    <button
                        key={sub}
                        onClick={() => setViewState(prev => ({ ...prev, subCategory: sub }))}
                        className={cn(
                            "px-4 py-2 rounded-lg text-sm font-medium transition-all border",
                            viewState.subCategory === sub
                                ? "bg-neon-purple/20 text-neon-purple border-neon-purple/50 shadow-[0_0_10px_rgba(139,92,246,0.2)]" 
                                : "bg-[#1A1D24] text-gray-400 border-white/10 hover:border-white/30 hover:text-white"
                        )}
                    >
                        {sub}
                    </button>
                ))}
            </div>
        )}

        {/* Content Area */}
        {selectedCategory === "Text" ? (
            renderTextContent()
        ) : (
            <motion.div 
                layout
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6"
            >
                <AnimatePresence mode='popLayout'>
                    {filteredPrompts.map((prompt) => (
                        <motion.div
                            key={prompt.id}
                            layout
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.95 }}
                            transition={{ duration: 0.2 }}
                            className="h-full"
                        >
                            <PromptCard 
                                prompt={prompt} 
                                onSelect={() => setSelectedVisualPrompt(prompt)}
                            />
                        </motion.div>
                    ))}
                </AnimatePresence>
            </motion.div>
        )}

        {selectedCategory !== "Text" && filteredPrompts.length === 0 && (
            <div className="w-full h-64 flex flex-col items-center justify-center text-gray-500">
                <p>No prompts found matching your criteria.</p>
            </div>
        )}
      </div>
    </div>
  );
}
