"use client";

import { motion } from "framer-motion";
import { ArrowLeft, Clock, Calendar, Share2, Bookmark, BarChart3, Globe, Zap } from "lucide-react";
import Link from "next/link";

export default function AITechTrendsPage() {
  return (
    <main className="w-full min-h-screen bg-[#050B1B] text-white font-poppins selection:bg-blue-500 selection:text-white">
      
      <motion.div 
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-cyan-500 to-teal-500 origin-left z-50"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: false }} 
      />

      {/* Hero Section */}
      <section className="relative w-full h-[60vh] flex flex-col justify-end pb-20 px-6 overflow-hidden">
        <div className="absolute inset-0 z-0">
             <div className="absolute inset-0 bg-gradient-to-t from-[#050B1B] via-[#050B1B]/40 to-transparent z-10" />
             <img 
                src="/images/series/post_ai_news.png" 
                alt="AI News"
                className="w-full h-full object-cover opacity-60 scale-105 animate-slow-zoom"
             />
        </div>

        <div className="max-w-4xl mx-auto w-full relative z-20">
            <Link href="/blog" className="inline-flex items-center text-white/60 hover:text-white mb-8 transition-colors group">
                <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" /> Back to Blog
            </Link>

            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
            >
                <div className="flex items-center gap-4 mb-6">
                    <span className="px-3 py-1 rounded-full bg-blue-500/20 text-blue-400 text-xs font-bold border border-blue-500/30">
                        Global Trends
                    </span>
                    <span className="flex items-center text-gray-400 text-sm">
                        <Calendar className="w-4 h-4 mr-2" /> 2026. 01. 22
                    </span>
                    <span className="flex items-center text-gray-400 text-sm">
                        <Clock className="w-4 h-4 mr-2" /> 10 min read
                    </span>
                </div>

                <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-8">
                    2026 AI 트렌드 리포트:<br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-400">
                        멀티 에이전트 시스템의 도래
                    </span>
                </h1>

                <p className="text-xl text-gray-300 max-w-2xl leading-relaxed italic border-l-4 border-blue-500 pl-6">
                    "단일 모델의 시대는 끝났다. 이제 AI 팀(Team)이 일하는 방식이 온다."
                </p>
            </motion.div>
        </div>
      </section>

      {/* Content Body */}
      <section className="relative px-6 py-20">
        <div className="max-w-3xl mx-auto">
            <article className="prose prose-lg prose-invert prose-p:text-gray-300 prose-headings:text-white max-w-none">
                
                <p className="lead text-2xl text-white font-medium mb-12 leading-relaxed">
                    2025년이 LLM(거대언어모델)들의 성능 경쟁이었다면, 2026년은 이들을 어떻게 '조직화'하느냐의 싸움입니다. 마이크로소프트의 AutoGen, OpenAI의 Swarm 등 멀티 에이전트 프레임워크가 실무의 표준이 되고 있습니다.
                </p>

                <h2 className="text-3xl font-bold text-blue-400 mb-8 flex items-center gap-3">
                    <Globe className="w-8 h-8" /> 1. 협업하는 지능 (Collaborative Intelligence)
                </h2>
                <p className="mb-6">
                    하나의 슈퍼 AI에게 모든 것을 맡기는 것보다, 전문화된 작은 AI들이 협업하는 것이 훨씬 효율적임이 증명되었습니다. 코딩 담당 에이전트, 기획 담당 에이전트, 그리고 이를 감수하는 리뷰어 에이전트가 가상 공간에서 회의를 하며 결과물을 만들어냅니다.
                </p>
                <p className="mb-6">
                    이는 인간 조직론과 놀랍도록 닮아 있습니다. 우리는 이제 AI를 '개발'하는 것이 아니라, AI 팀을 '매니지먼트'하는 능력을 길러야 합니다.
                </p>

                <h2 className="text-3xl font-bold text-cyan-400 mb-8 mt-16 flex items-center gap-3">
                    <Zap className="w-8 h-8" /> 2. 온디바이스 AI의 폭발적 성장
                </h2>
                <p className="mb-6">
                    클라우드 비용의 증가와 프라이버시 이슈로 인해, 내 노트북과 폰에서 돌아가는 sLLM(소형언어모델)이 주류로 부상했습니다. Phi-4, Llama-4-7B와 같은 모델들은 인터넷 연결 없이도 놀라운 성능을 보여줍니다.
                </p>
                <p className="mb-6">
                    이제 개인의 데이터가 외부로 유출될 걱정 없이, 나만의 '자비스'를 로컬 환경에서 구축하는 것이 보편화될 것입니다.
                </p>

                <h2 className="text-3xl font-bold text-teal-400 mb-8 mt-16 flex items-center gap-3">
                    <BarChart3 className="w-8 h-8" /> 3. 행동하는 AI (Actionable AI)
                </h2>
                <p className="mb-6">
                    '말만 하는' 챗봇은 지루합니다. 2026년의 AI는 직접 API를 호출하고, 이메일을 보내고, 문서를 작성하여 결재를 올립니다. RAG(검색 증강 생성)를 넘어 LAM(대형 행동 모델)으로의 진화가 가속화되고 있습니다.
                </p>
                <p className="mb-12">
                     우리는 곧 "이거 알아봐 줘"가 아니라, "이거 해결해 둬"라고 말하게 될 것입니다.
                </p>

                <div className="border-t border-white/10 pt-12 mt-20">
                     <p className="text-xl font-bold text-white mb-4">Reedo's Insight</p>
                     <p className="text-gray-400 italic">
                        기술의 속도가 현기증이 날 정도지만, 본질은 변하지 않습니다. 도구는 강력해지고, 인간은 더 자유로워져야 합니다. AI 트렌드를 쫓는 것을 넘어, 그것을 우리 삶의 도구로 길들이는 지혜가 필요한 시점입니다.
                     </p>
                </div>

            </article>

            {/* Reedo Author Component */}
             <div className="mt-24 p-8 rounded-2xl bg-[#0A1124] border border-white/10 flex items-center gap-6 shadow-2xl">
                <div className="relative shrink-0">
                    <img 
                        src="/reedo-profile-high.png" 
                        alt="Reedo"
                        className="w-20 h-20 rounded-full object-cover border-2 border-white/10 grayscale"
                    />
                </div>
                <div className="flex-grow">
                    <h3 className="text-xl font-bold text-white mb-1">Written by Reedo</h3>
                    <p className="text-gray-400 text-sm">Global Field Engineer & Automation Architect</p>
                </div>
                <div className="flex gap-4 text-gray-400">
                     <button className="hover:text-white transition-colors">
                        <Share2 className="w-5 h-5" />
                     </button>
                     <button className="hover:text-white transition-colors">
                        <Bookmark className="w-5 h-5" />
                     </button>
                </div>
            </div>

        </div>
      </section>
    </main>
  );
}
