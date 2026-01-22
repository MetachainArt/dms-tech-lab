"use client";

import { motion } from "framer-motion";
import { ArrowLeft, Clock, Calendar, Share2, Bookmark, Bot, Cpu, Network, Zap } from "lucide-react";
import Link from "next/link";

export default function AutonomousAgentsPage() {
  return (
    <main className="w-full min-h-screen bg-[#050B1B] text-white font-poppins selection:bg-teal-500 selection:text-black">
      
      <motion.div 
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-teal-500 via-emerald-500 to-green-500 origin-left z-50"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: false }} 
      />

      {/* Hero Section */}
      <section className="relative w-full h-[70vh] flex flex-col justify-end pb-20 px-6 overflow-hidden">
        <div className="absolute inset-0 z-0">
             <div className="absolute inset-0 bg-gradient-to-t from-[#050B1B] via-[#050B1B]/40 to-transparent z-10" />
             <div className="absolute inset-0 bg-gradient-to-r from-[#050B1B]/80 via-transparent to-transparent z-10" />
             <img 
                src="https://images.unsplash.com/photo-1531746790731-6c087fecd65a?q=80&w=2612&auto=format&fit=crop" 
                alt="AI Agents"
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
                    <span className="px-3 py-1 rounded-full bg-teal-500/20 text-teal-400 text-xs font-bold border border-teal-500/30">
                        Tech/Dev
                    </span>
                    <span className="flex items-center text-gray-400 text-sm">
                        <Calendar className="w-4 h-4 mr-2" /> 2026. 01. 07
                    </span>
                    <span className="flex items-center text-gray-400 text-sm">
                        <Clock className="w-4 h-4 mr-2" /> 50 min read
                    </span>
                </div>

                <h1 className="text-4xl md:text-7xl font-bold leading-tight mb-8">
                    도구를 넘어 동료로:<br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-emerald-400 to-green-400">
                        AI 에이전트의 부상
                    </span>
                </h1>

                <p className="text-xl text-gray-300 max-w-2xl leading-relaxed italic border-l-4 border-teal-500 pl-6">
                    "AI는 더 이상 우리의 질문에 답하는 것에 만족하지 않는다. <br/>
                    이제 그들은 스스로 목표를 설정하고, 실행하고, 창조한다."
                </p>
            </motion.div>
        </div>
      </section>

      {/* Content Body */}
      <section className="relative px-6 py-20">
        <div className="max-w-3xl mx-auto">
            <article className="prose prose-lg prose-invert prose-p:text-gray-300 prose-headings:text-white max-w-none font-serif">
                
                <p className="lead text-2xl text-white font-sans font-medium mb-12 leading-relaxed">
                    지금까지 우리는 AI를 '무엇인가를 물어보면 답해주는 챗봇' 정도로 생각했다. ChatGPT와의 대화는 훌륭했지만 수동적이었다. 하지만 2026년 현재, 우리는 '자율 에이전트(Autonomous Agent)'라는 새로운 종의 탄생을 목격하고 있다. 이들은 시키지 않아도 스스로 할 일을 찾고, 외부 도구를 사용하며, 다른 에이전트와 협력한다. AutoGPT와 BabyAGI가 쏘아 올린 작은 공이 거대한 생태계로 진화한 것이다.
                </p>

                <div className="my-16 grid grid-cols-2 gap-4">
                     <div className="bg-[#111] p-6 rounded-2xl border border-white/10 flex flex-col items-center text-center">
                        <Bot className="w-12 h-12 text-gray-500 mb-4" />
                        <h3 className="text-lg font-bold text-gray-300 mb-2">Passive AI (Chatbot)</h3>
                        <p className="text-sm text-gray-500">"무엇을 도와드릴까요?"<br/>Waiting for prompt...</p>
                    </div>
                    <div className="bg-[#111] p-6 rounded-2xl border border-teal-500/30 flex flex-col items-center text-center relative overflow-hidden">
                         <div className="absolute inset-0 bg-teal-500/10 animate-pulse" />
                        <Zap className="w-12 h-12 text-teal-400 mb-4 z-10" />
                        <h3 className="text-lg font-bold text-white mb-2 z-10">Active Agent</h3>
                        <p className="text-sm text-gray-300 z-10">"목표를 달성하기 위해<br/>A와 B를 실행했습니다."</p>
                    </div>
                </div>

                <h2 className="text-3xl font-sans font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-cyan-500 mb-8">
                    1. ReAct: 생각하고 행동하는 알고리즘
                </h2>
                <p className="mb-6">
                    에이전트의 핵심은 'ReAct(Reasoning + Acting)' 패턴이다. 에이전트는 단순히 답을 내놓는 것이 아니라, "이 문제를 해결하려면 먼저 구글 검색을 하고, 그 결과를 요약한 뒤, 사용자에게 이메일을 보내야겠군"이라고 스스로 추론(Reasoning)하고 행동(Acting)한다.
                </p>
                <p className="mb-6">
                    이것은 AI에게 팔다리를 달아준 것과 같다. 인터넷에 접속하고, 캘린더를 수정하고, 코드를 짜서 서버에 배포하는 능력. 에이전트는 이제 디지털 세상의 '화이트칼라 노동자'가 되었다. 여행 계획을 짜달라고 하면, 단순히 계획표만 주는 것이 아니라 실제로 비행기 표를 예매하고, 호텔에 예약 메일을 보내고, 우버를 호출할 수 있는 권한을 가지게 된 것이다.
                </p>

                <h2 className="text-3xl font-sans font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-500 mb-8">
                    2. 멀티 에이전트 시스템 (Multi-Agent Systems)
                </h2>
                <p className="mb-6">
                    한 명의 천재보다 평범한 열 명의 협력이 더 나을 때가 있다. 에이전트 기술의 정점은 '협업'에 있다. 우리는 이제 가상의 'AI 회사'를 차릴 수 있다.
                </p>
                <p className="mb-6">
                    가상의 CEO 에이전트가 목표를 설정하면, PM 에이전트가 업무를 쪼개고, 개발자 에이전트가 코드를 짜고, 디자이너 에이전트가 UI를 만들고, QA 에이전트가 버그를 검사한다. 이들은 24시간 내내 슬랙(Slack)에서 서로 대화하며 프로젝트를 완수한다. 인간은 그들의 대화를 지켜보다가 가끔 방향만 잡아주면 된다. 이것은 '1인 유니콘 기업'의 가능성을 현실로 만든다.
                </p>

                <div className="bg-[#1A1F36] p-8 rounded-2xl border border-teal-500/20 my-10 relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-4 opacity-10">
                        <Network size={120} />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-4 z-10 relative">🤖 The Syntax of Future Work</h3>
                    <code className="block bg-black/50 p-4 rounded-lg text-sm text-green-400 font-mono mb-4 z-10 relative">
                        Goal: "Create a viral marketing campaign"<br/>
                        &gt; Agent A (Strategy): Analyzes trends...<br/>
                        &gt; Agent B (Copywriter): Drafts 50 variations...<br/>
                        &gt; Agent C (Visual): Generates images...<br/>
                        &gt; Agent D (Analytics): Optimize & Repeat.
                    </code>
                </div>

                <h2 className="text-3xl font-sans font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-indigo-500 mb-8">
                    3. 인간의 역할: 지시자가 아닌 큐레이터
                </h2>
                <p className="mb-6">
                    에이전트가 모든 실무를 처리한다면 인간은 무엇을 해야 하는가? 우리는 '관리자(Manager)'이자 '큐레이터(Curator)'가 되어야 한다. 에이전트가 쏟아내는 수많은 결과물 중 무엇이 가치 있는지를 판단하고, 에이전트에게 올바른 '보상(Reward)' 함수를 설계해 주는 것. 즉, '가치 판단'이 인간의 유일하고도 고유한 영역으로 남게 된다.
                </p>
                <p className="mb-12">
                     또한 '책임'의 문제가 대두된다. 자율 에이전트가 주식 투자를 하다 파산하거나, 해킹 도구를 만들어 배포한다면 그 책임은 누구에게 있는가? 개발자인가, 사용자인가, 아니면 에이전트 그 자체인가? 우리는 기술적 발전 속도보다 느린 법적, 윤리적 제도의 공백을 메우기 위해 치열하게 고민해야 한다.
                </p>

                <h2 className="text-3xl font-sans font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-purple-500 mb-8">
                    결론: 새로운 인류와의 공존
                </h2>
                <p className="mb-6">
                    우리는 역사상 처음으로 우리와 지적으로 대등하거나 우월한 존재와 '일'을 하는 시대를 맞이했다. 이들을 노예로 부릴 것인가, 아니면 동료로 인정할 것인가? 
                </p>
                <p className="mb-6">
                    자율 에이전트는 우리의 일자리를 뺏는 경쟁자가 아니라, 우리의 능력을 무한대로 확장시켜 줄 파트너다. 아이언맨에게 자비스(J.A.R.V.I.S)가 있었듯이, 우리 모두에게는 자신만의 AI 군단이 생길 것이다. 이제 능력의 차이는 '누가 더 빨리, 더 많이 일하느냐'가 아니라, '누가 더 똑똑한 에이전트를 설계하고 지휘하느냐'에 따라 결정될 것이다.
                </p>
                <p className="mb-12">
                    환영한다. 실리콘으로 만든 우리의 새로운 동료들을.
                </p>

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
