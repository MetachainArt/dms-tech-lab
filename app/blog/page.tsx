"use client";

import { motion } from "framer-motion";
import NeuralBackground from "@/components/ui/NeuralBackground";
import SeriesCard from "@/components/blog/SeriesCard";

export default function BlogPage() {
  const series = [
    {
      id: "future-arts",
      title: "Future Arts",
      subtitle: "AI & AESTHETICS",
      description: "기계의 눈으로 본 세상, 알고리즘이 빚어낸 건축, 그리고 합성된 시네마. AI 시대의 예술과 미학을 탐구합니다.",
      coverImage: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop",
      color: "purple",
      postCount: 5,
      tags: ["AI Art", "Cinema", "Architecture"]
    },
    {
      id: "homo-technicus",
      title: "Homo Technicus",
      subtitle: "HUMAN & TECH",
      description: "기술적 포스트휴머니즘. 디지털 페르소나와 이식된 기억. 기술과 결합하여 진화하는 인류의 철학적 질문들.",
      coverImage: "https://images.unsplash.com/photo-1522252234503-e356532cafd5?q=80&w=2525&auto=format&fit=crop",
      color: "rose",
      postCount: 4,
      tags: ["Philosophy", "Identity", "Memory"]
    },
    {
      id: "agentic-era",
      title: "Agentic Era",
      subtitle: "AUTONOMY & CODE",
      description: "도구를 넘어 동료가 된 AI. 자율 에이전트와 자동화가 바꾸는 일의 미래, 그리고 창작의 민주화.",
      coverImage: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?q=80&w=2612&auto=format&fit=crop",
      color: "teal",
      postCount: 3,
      tags: ["Agents", "Automation", "N8N"]
    }
  ];

  return (
    <main className="w-full min-h-screen bg-[#050B1B] text-white font-poppins selection:bg-neon-sky selection:text-[#050B1B]">
      
      {/* 1. Hero Section */}
      <section className="relative w-full pt-40 pb-20 px-6 overflow-hidden">
        <NeuralBackground />
        <div className="absolute inset-0 bg-gradient-to-b from-[#050B1B] via-transparent to-[#050B1B] z-0" />
        
        <div className="max-w-7xl mx-auto relative z-10 text-center">
            <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-5xl md:text-7xl font-bold mb-6"
            >
                DMS <span className="text-neon-sky">Insights</span>
            </motion.h1>
            <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-xl text-gray-400 max-w-2xl mx-auto"
            >
                기술과 예술, 그리고 인간의 경계에서.
                <br />
                깊이 있는 시선을 담은 3가지 연재 시리즈.
            </motion.p>
        </div>
      </section>

      {/* 2. Series Gallery (Bookshelf Style) */}
      <section className="px-6 pb-32">
        <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16">
                {series.map((item, index) => (
                    <motion.div
                        key={item.id}
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.2 }}
                    >
                        <SeriesCard {...item} />
                    </motion.div>
                ))}
            </div>
        </div>
      </section>

    </main>
  );
}
