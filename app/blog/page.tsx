"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Clock, Calendar } from "lucide-react";
import NeuralBackground from "@/components/ui/NeuralBackground";

export default function BlogPage() {
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
                Insight <span className="text-neon-sky">&</span> Tech
            </motion.h1>
            <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-xl text-gray-400 max-w-2xl mx-auto"
            >
                엔지니어링의 정수, 그리고 기술이 그리는 미래.
            </motion.p>
        </div>
      </section>

      {/* 2. Featured Post */}
      <section className="px-6 pb-20">
        <div className="max-w-7xl mx-auto">
            <Link href="/blog/ai-photography-essay" className="group relative block w-full aspect-[16/9] md:aspect-[21/9] rounded-[2.5rem] overflow-hidden border border-white/10 hover:border-neon-sky/50 transition-all duration-500">
                 {/* Placeholder Image for Art Essay */}
                 <div className="absolute inset-0 bg-gradient-to-r from-purple-900 via-blue-900 to-black z-0">
                    <img 
                        src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop" 
                        alt="AI Art"
                        className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-700" 
                    />
                 </div>
                 <div className="absolute inset-0 bg-gradient-to-t from-[#050B1B] via-[#050B1B]/40 to-transparent z-10" />

                 <div className="absolute bottom-0 left-0 p-8 md:p-16 w-full z-20">
                    <span className="inline-block px-4 py-1.5 rounded-full bg-neon-sky/20 text-neon-sky text-sm font-bold mb-4 backdrop-blur-md border border-neon-sky/30">
                        Featured Essay
                    </span>
                    <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight group-hover:text-neon-sky transition-colors">
                        AI 시대의 사진 예술이란?
                    </h2>
                    <p className="text-gray-300 text-lg md:text-xl max-w-3xl mb-8 line-clamp-2">
                        생성형 AI가 만드는 이미지와 인간이 포착하는 순간의 차이. 기술이 발전할수록 우리는 무엇을 기록해야 하는가에 대한 고찰.
                    </p>
                    <div className="flex items-center gap-6 text-sm text-gray-400">
                        <span className="flex items-center gap-2"><Calendar className="w-4 h-4" /> 2026. 01. 04</span>
                        <span className="flex items-center gap-2"><Clock className="w-4 h-4" /> 5 min read</span>
                    </div>
                 </div>
            </Link>
        </div>
      </section>

      {/* 3. Post Grid */}
      <section className="px-6 pb-32">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {/* Post 1: Post-Humanism (Newest 2026.01.08) */}
            <Link href="/blog/post-humanism" className="group rounded-[2rem] bg-[#0A1124] border border-white/5 hover:bg-[#0F1830] transition-colors flex flex-col h-full">
                <div className="aspect-[16/10] overflow-hidden relative rounded-t-[2rem]">
                    <img 
                        src="https://images.unsplash.com/photo-1522252234503-e356532cafd5?q=80&w=2525&auto=format&fit=crop" 
                        alt="Post Humanism" 
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-rose-500/20 backdrop-blur-sm text-xs font-bold text-rose-400 border border-rose-500/30">
                        Philosophy
                    </div>
                </div>
                <div className="p-6 flex flex-col flex-grow relative z-10">
                    <h3 className="text-2xl font-bold mb-3 leading-tight text-white group-hover:text-rose-400 transition-colors">
                        호모 엑스 마키나: 기술적 포스트휴머니즘
                    </h3>
                    <div className="flex gap-4 text-xs text-gray-400 mb-3">
                        <span>2026. 01. 08</span>
                        <span>60 min read</span>
                    </div>
                    <p className="text-gray-400 text-sm leading-relaxed line-clamp-3 mb-6 flex-grow">
                        인간은 과정이다. 우리는 생물학적 진화의 바통을 기술적 진화에게 넘겨주고 있다.
                    </p>
                    <span className="inline-flex items-center text-rose-400 font-semibold text-sm">
                        Read Article <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </span>
                </div>
            </Link>

            {/* Post 2: Autonomous Agents (2026.01.07) */}
            <Link href="/blog/autonomous-agents" className="group rounded-[2rem] bg-[#0A1124] border border-white/5 hover:bg-[#0F1830] transition-colors flex flex-col h-full">
                <div className="aspect-[16/10] overflow-hidden relative rounded-t-[2rem]">
                    <img 
                        src="https://images.unsplash.com/photo-1531746790731-6c087fecd65a?q=80&w=2612&auto=format&fit=crop" 
                        alt="Autonomous Agents" 
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-teal-500/20 backdrop-blur-sm text-xs font-bold text-teal-400 border border-teal-500/30">
                        Tech/Dev
                    </div>
                </div>
                <div className="p-6 flex flex-col flex-grow relative z-10">
                    <h3 className="text-2xl font-bold mb-3 leading-tight text-white group-hover:text-teal-400 transition-colors">
                        도구를 넘어 동료로: AI 에이전트의 부상
                    </h3>
                    <div className="flex gap-4 text-xs text-gray-400 mb-3">
                        <span>2026. 01. 07</span>
                        <span>50 min read</span>
                    </div>
                    <p className="text-gray-400 text-sm leading-relaxed line-clamp-3 mb-6 flex-grow">
                        AI는 더 이상 질문에 답하는 것에 만족하지 않는다. 스스로 목표를 설정하고 창조한다.
                    </p>
                    <span className="inline-flex items-center text-teal-400 font-semibold text-sm">
                        Read Article <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </span>
                </div>
            </Link>

            {/* Post 3: Synthetic Cinema (2026.01.06) */}
            <Link href="/blog/synthetic-cinema" className="group rounded-[2rem] bg-[#0A1124] border border-white/5 hover:bg-[#0F1830] transition-colors flex flex-col h-full">
                <div className="aspect-[16/10] overflow-hidden relative rounded-t-[2rem]">
                    <img 
                        src="https://images.unsplash.com/photo-1536440136628-849c177e76a1?q=80&w=2525&auto=format&fit=crop" 
                        alt="Synthetic Cinema" 
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-red-500/20 backdrop-blur-sm text-xs font-bold text-red-400 border border-red-500/30">
                        Future Media
                    </div>
                </div>
                <div className="p-6 flex flex-col flex-grow relative z-10">
                    <h3 className="text-2xl font-bold mb-3 leading-tight text-white group-hover:text-red-400 transition-colors">
                        프롬프트로 찍는 영화: 합성 시네마의 시대
                    </h3>
                    <div className="flex gap-4 text-xs text-gray-400 mb-3">
                        <span>2026. 01. 06</span>
                        <span>42 min read</span>
                    </div>
                    <p className="text-gray-400 text-sm leading-relaxed line-clamp-3 mb-6 flex-grow">
                        카메라 없는 영화, 배우 없는 연기. AI는 헐리우드의 스튜디오를 클라우드로 옮기고 있다.
                    </p>
                    <span className="inline-flex items-center text-red-400 font-semibold text-sm">
                        Read Article <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </span>
                </div>
            </Link>

            {/* Post 4: Generative Architecture (2026.01.05) */}
             <Link href="/blog/generative-architecture" className="group rounded-[2rem] bg-[#0A1124] border border-white/5 hover:bg-[#0F1830] transition-colors flex flex-col h-full">
                <div className="aspect-[16/10] overflow-hidden relative rounded-t-[2rem]">
                    <img 
                        src="https://images.unsplash.com/photo-1486325212027-8081e485255e?q=80&w=2670&auto=format&fit=crop" 
                        alt="Generative Architecture" 
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-indigo-500/20 backdrop-blur-sm text-xs font-bold text-indigo-400 border border-indigo-500/30">
                        Future Cities
                    </div>
                </div>
                <div className="p-6 flex flex-col flex-grow relative z-10">
                    <h3 className="text-2xl font-bold mb-3 leading-tight text-white group-hover:text-indigo-400 transition-colors">
                        공간을 연산하다: 생성형 건축의 미학
                    </h3>
                    <div className="flex gap-4 text-xs text-gray-400 mb-3">
                        <span>2026. 01. 05</span>
                        <span>35 min read</span>
                    </div>
                    <p className="text-gray-400 text-sm leading-relaxed line-clamp-3 mb-6 flex-grow">
                        건축가는 더 이상 벽돌을 쌓지 않는다. 알고리즘을 통해 수만 개의 가능성을 지휘할 뿐이다.
                    </p>
                    <span className="inline-flex items-center text-indigo-400 font-semibold text-sm">
                        Read Article <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </span>
                </div>
            </Link>

            {/* Post 5: Creativity Democratization (Previous Newest) */}
            <Link href="/blog/creativity-democratization" className="group rounded-[2rem] bg-[#0A1124] border border-white/5 hover:bg-[#0F1830] transition-colors flex flex-col h-full">
                <div className="aspect-[16/10] overflow-hidden relative rounded-t-[2rem]">
                    <img 
                        src="https://images.unsplash.com/photo-1547891654-e66ed7ebb968?q=80&w=2670&auto=format&fit=crop" 
                        alt="Creativity" 
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-green-500/20 backdrop-blur-sm text-xs font-bold text-green-400 border border-green-500/30">
                        Future Art
                    </div>
                </div>
                <div className="p-6 flex flex-col flex-grow relative z-10">
                    <h3 className="text-2xl font-bold mb-3 leading-tight text-white group-hover:text-green-400 transition-colors">
                        창작의 민주화인가, 예술의 종말인가?
                    </h3>
                    <div className="flex gap-4 text-xs text-gray-400 mb-3">
                        <span>2026. 01. 04</span>
                        <span>25 min read</span>
                    </div>
                    <p className="text-gray-400 text-sm leading-relaxed line-clamp-3 mb-6 flex-grow">
                         모두가 예술가가 될 수 있는 시대는, 역설적으로 아무도 예술가가 될 수 없는 시대일지도 모른다.
                    </p>
                    <span className="inline-flex items-center text-green-400 font-semibold text-sm">
                        Read Article <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </span>
                </div>
            </Link>


            {/* Post 2: Artificial Memory */}
            <Link href="/blog/artificial-memory" className="group rounded-[2rem] bg-[#0A1124] border border-white/5 hover:bg-[#0F1830] transition-colors flex flex-col h-full">
                <div className="aspect-[16/10] overflow-hidden relative rounded-t-[2rem]">
                    <img 
                        src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2672&auto=format&fit=crop" 
                        alt="Artificial Memory" 
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-amber-500/20 backdrop-blur-sm text-xs font-bold text-amber-400 border border-amber-500/30">
                        Neuro-Tech
                    </div>
                </div>
                <div className="p-6 flex flex-col flex-grow relative z-10">
                    <h3 className="text-2xl font-bold mb-3 leading-tight text-white group-hover:text-amber-400 transition-colors">
                        실재하지 않는 기억: 노스탤지어
                    </h3>
                    <div className="flex gap-4 text-xs text-gray-400 mb-3">
                        <span>2026. 01. 03</span>
                        <span>28 min read</span>
                    </div>
                    <p className="text-gray-400 text-sm leading-relaxed line-clamp-3 mb-6 flex-grow">
                        우리는 경험한 적 없는 과거를 그리워할 수 있는가? 합성된 기억과 감정 해킹.
                    </p>
                    <span className="inline-flex items-center text-amber-400 font-semibold text-sm">
                        Read Article <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </span>
                </div>
            </Link>

            {/* Post 3: Digital Persona */}
            <Link href="/blog/digital-persona" className="group rounded-[2rem] bg-[#0A1124] border border-white/5 hover:bg-[#0F1830] transition-colors flex flex-col h-full">
                <div className="aspect-[16/10] overflow-hidden relative rounded-t-[2rem]">
                    <img 
                        src="https://images.unsplash.com/photo-1617791160536-598cf32026fb?q=80&w=2564&auto=format&fit=crop" 
                        alt="Digital Persona" 
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-pink-500/20 backdrop-blur-sm text-xs font-bold text-pink-400 border border-pink-500/30">
                        Virtual Being
                    </div>
                </div>
                <div className="p-6 flex flex-col flex-grow relative z-10">
                    <h3 className="text-2xl font-bold mb-3 leading-tight text-white group-hover:text-pink-400 transition-colors">
                        디지털 페르소나: 가상 인플루언서
                    </h3>
                    <div className="flex gap-4 text-xs text-gray-400 mb-3">
                        <span>2026. 01. 02</span>
                        <span>30 min read</span>
                    </div>
                    <p className="text-gray-400 text-sm leading-relaxed line-clamp-3 mb-6 flex-grow">
                        가짜가 진짜보다 더 진짜 같을 때, 우리는 '자아'를 어떻게 정의해야 하는가?
                    </p>
                    <span className="inline-flex items-center text-pink-400 font-semibold text-sm">
                        Read Article <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </span>
                </div>
            </Link>

            {/* Post 4: AI Vision */}
            <Link href="/blog/ai-vision-aesthetics" className="group rounded-[2rem] bg-[#0A1124] border border-white/5 hover:bg-[#0F1830] transition-colors flex flex-col h-full">
                <div className="aspect-[16/10] overflow-hidden relative rounded-t-[2rem]">
                    <img 
                        src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2670&auto=format&fit=crop" 
                        alt="AI Vision" 
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-cyan-500/20 backdrop-blur-sm text-xs font-bold text-cyan-400 border border-cyan-500/30">
                        Visual Tech
                    </div>
                </div>
                <div className="p-6 flex flex-col flex-grow relative z-10">
                    <h3 className="text-2xl font-bold mb-3 leading-tight text-white group-hover:text-cyan-400 transition-colors">
                        AI가 보는 세상: 컴퓨터 비전의 미학
                    </h3>
                    <div className="flex gap-4 text-xs text-gray-400 mb-3">
                        <span>2026. 01. 01</span>
                        <span>25 min read</span>
                    </div>
                    <p className="text-gray-400 text-sm leading-relaxed line-clamp-3 mb-6 flex-grow">
                        기계의 눈은 인간이 놓치는 스펙트럼을 본다. 그 차가운 시선 속에 숨겨진 새로운 아름다움.
                    </p>
                    <span className="inline-flex items-center text-cyan-400 font-semibold text-sm">
                        Read Article <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </span>
                </div>
            </Link>

            {/* Post 5: N8N (Oldest) */}
            <Link href="/blog/n8n-masterclass" className="group rounded-[2rem] bg-[#0A1124] border border-white/5 hover:bg-[#0F1830] transition-colors flex flex-col h-full">
                <div className="aspect-[16/10] overflow-hidden relative rounded-t-[2rem]">
                    <img 
                        src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=2574&auto=format&fit=crop" 
                        alt="N8N" 
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-black/50 backdrop-blur-sm text-xs font-bold text-white border border-white/10">
                        Tech/Dev
                    </div>
                </div>
                <div className="p-6 flex flex-col flex-grow relative z-10">
                    <h3 className="text-2xl font-bold mb-3 leading-tight text-white group-hover:text-neon-sky transition-colors">
                        N8N 워크플로우 100% 활용하기
                    </h3>
                    <div className="flex gap-4 text-xs text-gray-400 mb-3">
                        <span>2024. 05. 18</span>
                        <span>8 min read</span>
                    </div>
                    <p className="text-gray-400 text-sm leading-relaxed line-clamp-3 mb-6 flex-grow">
                        반복되는 마케팅 업무를 자동화하는 실전 가이드. 웹훅 연동부터 데이터 처리까지.
                    </p>
                    <span className="inline-flex items-center text-neon-sky font-semibold text-sm">
                        Read Article <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </span>
                </div>
            </Link>

        </div>
      </section>

    </main>
  );
}
