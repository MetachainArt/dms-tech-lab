"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Clock, Tag } from "lucide-react";
import NeuralBackground from "@/components/ui/NeuralBackground";

// Dummy Data
const categories = ["All", "Tech/Dev", "Business", "Essay/Life"];

const featuredPost = {
  id: 1,
  title: "AI 시대의 사진 예술이란?",
  excerpt: "생성형 AI가 만드는 이미지와 인간이 포착하는 순간의 차이. 기술이 발전할수록 우리는 무엇을 기록해야 하는가에 대한 고찰.",
  category: "Essay/Life",
  date: "2024. 05. 20",
  readTime: "5 min read",
  image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop", // Abstract Art
};

const posts = [
  {
    id: 2,
    title: "N8N 워크플로우 100% 활용하기",
    excerpt: "반복되는 마케팅 업무를 자동화하는 실전 가이드. 웹훅 연동부터 데이터 처리까지.",
    category: "Tech/Dev",
    date: "2024. 05. 18",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2670&auto=format&fit=crop", // Tech
  },
  {
    id: 3,
    title: "중국 청두/상해 출장 리포트",
    excerpt: "급변하는 중국의 테크 생태계와 현지 비즈니스 미팅에서 느낀 점들.",
    category: "Business",
    date: "2024. 05. 15",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1548919973-5cef129267d1?q=80&w=2670&auto=format&fit=crop", // Shanghai/City
  },
  {
    id: 4,
    title: "나의 첫 번째 사진 전시회를 준비하며",
    excerpt: "준비 과정에서의 어려움과 깨달음. 그리고 공간을 채우는 이야기에 대하여.",
    category: "Essay/Life",
    date: "2024. 05. 10",
    readTime: "4 min read",
    image: "https://images.unsplash.com/photo-1552168324-d612d77725e3?q=80&w=2664&auto=format&fit=crop", // Camera/Gallery
  },
];

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredPosts = activeCategory === "All" 
    ? posts 
    : posts.filter(post => post.category === activeCategory);

  return (
    <main className="w-full min-h-screen bg-[#050B1B] text-white font-poppins selection:bg-neon-sky selection:text-[#050B1B] pt-32 pb-20">
      
      {/* Background */}
      <div className="fixed inset-0 z-0 pointer-events-none opacity-20">
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header & Filter */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
            <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
            >
                <span className="text-neon-sky font-semibold tracking-widest text-sm uppercase block mb-4">DMS INSIGHTS</span>
                <h1 className="text-5xl font-bold leading-tight">
                    기술과 일상의<br />
                    <span className="text-white/50">기록들.</span>
                </h1>
            </motion.div>

            {/* Filter Bar */}
            <motion.div 
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                className="flex flex-wrap gap-2"
            >
                {categories.map((cat) => (
                    <button
                        key={cat}
                        onClick={() => setActiveCategory(cat)}
                        className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 border ${
                            activeCategory === cat 
                            ? "bg-white text-[#050B1B] border-white" 
                            : "bg-white/5 text-white/60 border-white/10 hover:bg-white/10 hover:text-white"
                        }`}
                    >
                        {cat}
                    </button>
                ))}
            </motion.div>
        </div>

        {/* Featured Post */}
        {(activeCategory === "All" || activeCategory === featuredPost.category) && (
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="mb-16 group relative rounded-[2.5rem] overflow-hidden bg-[#0A1124] border border-white/10 aspect-[16/9] md:aspect-[21/9]"
            >
                <div className="absolute inset-0">
                    <img 
                        src={featuredPost.image} 
                        alt={featuredPost.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-60 group-hover:opacity-40"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#050B1B] via-[#050B1B]/40 to-transparent" />
                </div>
                
                <div className="absolute bottom-0 left-0 p-8 md:p-12 w-full md:w-2/3">
                    <div className="flex items-center gap-4 mb-4 text-sm font-medium">
                        <span className="px-3 py-1 rounded-full bg-neon-sky/20 text-neon-sky border border-neon-sky/20 backdrop-blur-md">
                            Featured
                        </span>
                        <span className="text-white/60 flex items-center gap-2">
                             <Tag className="w-3 h-3" /> {featuredPost.category}
                        </span>
                    </div>
                    <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight group-hover:text-neon-sky transition-colors duration-300">
                        {featuredPost.title}
                    </h2>
                    <p className="text-lg text-white/70 mb-8 line-clamp-2 md:line-clamp-none">
                        {featuredPost.excerpt}
                    </p>
                    <div className="flex items-center gap-6 text-sm text-white/50">
                        <span>{featuredPost.date}</span>
                        <span className="flex items-center gap-2"><Clock className="w-4 h-4" /> {featuredPost.readTime}</span>
                    </div>
                </div>
            </motion.div>
        )}

        {/* Post Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post, idx) => (
                <motion.div
                    key={post.id}
                    layout
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.3 }}
                    className="group flex flex-col gap-6"
                >
                    {/* Card Image */}
                    <div className="aspect-[4/3] rounded-[2rem] overflow-hidden relative bg-[#0A1124] border border-white/5">
                        <img 
                            src={post.image} 
                            alt={post.title}
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100"
                        />
                        <div className="absolute top-4 left-4">
                             <span className="px-3 py-1 rounded-full text-xs font-bold bg-black/50 backdrop-blur-md border border-white/10 text-white">
                                {post.category}
                             </span>
                        </div>
                    </div>

                    {/* Content */}
                    <div>
                        <div className="flex items-center gap-4 text-xs text-white/40 mb-3">
                            <span>{post.date}</span>
                            <span>•</span>
                            <span>{post.readTime}</span>
                        </div>
                        <h3 className="text-xl font-bold mb-3 leading-snug group-hover:text-neon-sky transition-colors">
                            {post.title}
                        </h3>
                        <p className="text-white/60 text-sm line-clamp-2 leading-relaxed">
                            {post.excerpt}
                        </p>
                    </div>
                </motion.div>
            ))}
        </div>

      </div>
    </main>
  );
}
