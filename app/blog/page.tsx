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
      coverImage: "/images/series/future_arts.png",
      color: "purple",
      postCount: 4,
      tags: ["AI Art", "Cinema", "Architecture"]
    },
    {
      id: "homo-technicus",
      title: "Homo Technicus",
      subtitle: "HUMAN & TECH",
      description: "기술적 포스트휴머니즘. 디지털 페르소나와 이식된 기억. 기술과 결합하여 진화하는 인류의 철학적 질문들.",
      coverImage: "/images/series/homo_technicus.png",
      color: "rose",
      postCount: 3,
      tags: ["Philosophy", "Identity", "Memory"]
    },
    {
      id: "agentic-era",
      title: "Agentic Era",
      subtitle: "AUTONOMY & CODE",
      description: "도구를 넘어 동료가 된 AI. 자율 에이전트와 자동화가 바꾸는 일의 미래, 그리고 창작의 민주화.",
      coverImage: "/images/series/agentic_era.png",
      color: "teal",
      postCount: 3,
      tags: ["Agents", "Automation", "N8N"]
    },
    {
      id: "ai-tech-trends",
      title: "AI Tech Trends",
      subtitle: "LATEST NEWS",
      description: "매일 쏟아지는 AI 기술 뉴스. 핵심만 요약하여 전해드립니다. RAG부터 멀티모달 모델까지.",
      coverImage: "/images/series/ai_tech_trends.png",
      color: "blue",
      postCount: 1,
      tags: ["News", "LLM", "Trends"]
    },
    {
      id: "today-me",
      title: "오늘의 나",
      subtitle: "DAILY ESSAY",
      description: "가장 개인적인 것이 가장 창의적인 것이다. AI 시대를 살아가는 한 엔지니어의 일상과 단상.",
      coverImage: "/images/series/today_me.png",
      color: "amber",
      postCount: 1,
      tags: ["Essay", "Life", "Reflection"]
    },
    {
      id: "ai-fantasy-life",
      title: "AI Fantasy Life",
      subtitle: "VIRTUAL FICTION",
      description: "현실과 가상의 경계가 무너진 세상. AI와 함께 써 내려가는 몽환적이고 기묘한 이야기.",
      coverImage: "/images/series/ai_fantasy.png",
      color: "pink",
      postCount: 1,
      tags: ["Fiction", "Story", "Dream"]
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
                Reedo <span className="text-neon-sky">Insights</span>
            </motion.h1>
            <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-xl text-gray-400 max-w-2xl mx-auto"
            >
                기술과 예술, 그리고 인간의 경계에서.
                <br />
                깊이 있는 시선을 담은 연재 시리즈.
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
