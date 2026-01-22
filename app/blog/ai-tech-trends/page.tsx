"use client";

import { motion } from "framer-motion";
import { ArrowLeft, Clock, Calendar, Share2, Bookmark, BarChart3, Globe, Zap, Cpu, Network, Bot, Layers, TrendingUp } from "lucide-react";
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
                        <Clock className="w-4 h-4 mr-2" /> 45 min read
                    </span>
                </div>

                <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-8">
                    2026 AI 트렌드 리포트:<br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-400">
                        멀티 에이전트 시스템의 도래
                    </span>
                </h1>

                <p className="text-xl text-gray-300 max-w-2xl leading-relaxed italic border-l-4 border-blue-500 pl-6">
                    "단일 모델의 시대는 끝났다. <br/>
                    이제 AI 팀(Team)이 일하는 방식이 비즈니스의 표준이 된다."
                </p>
            </motion.div>
        </div>
      </section>

      {/* Content Body */}
      <section className="relative px-6 py-20">
        <div className="max-w-3xl mx-auto">
            <article className="prose prose-lg prose-invert prose-p:text-gray-300 prose-headings:text-white max-w-none font-serif">
                
                <p className="lead text-2xl text-white font-sans font-medium mb-12 leading-relaxed">
                    2025년이 GPT-5와 Claude 4.5 같은 초거대언어모델(LLM)들의 성능 경쟁, 즉 '누가 더 똑똑한가'를 겨루는 해였다면, 2026년은 이 똑똑한 모델들을 어떻게 '조직화'하느냐의 싸움입니다. 마이크로소프트의 AutoGen, OpenAI의 Swarm, 그리고 오픈소스 진영의 CrewAI 등 멀티 에이전트 프레임워크가 실험실을 벗어나 엔터프라이즈 실무의 표준으로 자리 잡고 있습니다.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-16">
                    <div className="bg-[#1A1F36] p-6 rounded-2xl border border-white/10 flex flex-col items-center text-center group hover:border-blue-500/50 transition-all">
                        <Bot className="w-10 h-10 text-blue-400 mb-4" />
                        <h3 className="font-bold text-white mb-2">Specialization</h3>
                        <p className="text-sm text-gray-400">범용 모델보다 특정 업무에 특화된 소형 에이전트의 효율성 입증</p>
                    </div>
                    <div className="bg-[#1A1F36] p-6 rounded-2xl border border-white/10 flex flex-col items-center text-center group hover:border-cyan-500/50 transition-all">
                        <Network className="w-10 h-10 text-cyan-400 mb-4" />
                        <h3 className="font-bold text-white mb-2">Orchestration</h3>
                        <p className="text-sm text-gray-400">복잡한 워크플로우를 자율적으로 조율하는 매니저 AI의 등장</p>
                    </div>
                    <div className="bg-[#1A1F36] p-6 rounded-2xl border border-white/10 flex flex-col items-center text-center group hover:border-teal-500/50 transition-all">
                        <Zap className="w-10 h-10 text-teal-400 mb-4" />
                        <h3 className="font-bold text-white mb-2">Autonomy</h3>
                        <p className="text-sm text-gray-400">인간의 개입을 최소화한 완전 자율 실행 루프(Loop) 실현</p>
                    </div>
                </div>

                <h2 className="text-3xl font-sans font-bold text-blue-400 mb-8 flex items-center gap-3">
                    <Globe className="w-8 h-8" /> 1. 협업하는 지능 (Collaborative Intelligence)
                </h2>
                <p className="mb-6">
                    하나의 슈퍼 AI에게 모든 것을 맡기는 것보다, 전문화된 작은 AI들이 협업하는 것이 훨씬 효율적임이 증명되었습니다. 코딩 담당 에이전트, 기획 담당 에이전트, 그리고 이를 감수하는 리뷰어 에이전트가 가상 공간에서 회의를 하며 결과물을 만들어냅니다.
                </p>
                <p className="mb-6">
                    실제 프로덕션 사례를 봅시다. 핀테크 기업 A사는 대출 심사 과정을 멀티 에이전트로 전환했습니다. '신용 분석 에이전트'가 고객의 재무 상태를 1차로 파악하면, '리스크 관리 에이전트'가 잠재적 위험 요소를 태깅하고, 최종적으로 '승인 에이전트'가 내부 규정에 맞춰 결정을 내립니다. 이 모든 과정이 0.5초 안에 이루어집니다. 과거에는 한 명의 직원이 하거나, 하나의 거대 모델이 처리하기엔 복잡했던 일입니다.
                </p>
                <p className="mb-6">
                    이는 인간 조직론과 놀랍도록 닮아 있습니다. "백지장도 맞들면 낫다"는 속담이 AI 세계에서도 통하는 것입니다. 우리는 이제 AI를 '개발'하는 것이 아니라, AI 팀을 '매니지먼트'하는 능력을 길러야 합니다. 어떤 에이전트에게 어떤 페르소나와 권한을 부여할지, 에이전트 간의 소통 방식은 민주적으로 할지 수직적으로 할지 설계하는 'AI 조직 설계자'가 유망 직종으로 떠오르고 있습니다.
                </p>

                <h2 className="text-3xl font-sans font-bold text-cyan-400 mb-8 mt-16 flex items-center gap-3">
                    <Cpu className="w-8 h-8" /> 2. 온디바이스 AI의 폭발적 성장
                </h2>
                <p className="mb-6">
                    클라우드 비용의 증가와 데이터 프라이버시 이슈로 인해, 내 노트북과 폰에서 돌아가는 sLLM(소형언어모델)이 주류로 부상했습니다. Phi-5, Llama-4-7B와 같은 최신 모델들은 5년 전의 슈퍼컴퓨터에서나 가능했던 성능을 일반 소비자용 GPU에서 구현합니다.
                </p>
                <p className="mb-6">
                    애플의 'Private Cloud Compute'와 삼성의 'Gauss 2'는 기기 자체에서 민감한 데이터를 처리하고, 정말 필요한 경우에만 클라우드를 호출하는 하이브리드 방식을 채택했습니다. 이제 내 일기장, 내 금융 기록, 내 건강 데이터가 외부 서버로 나가지 않아도 AI의 도움을 받을 수 있습니다.
                </p>
                <p className="mb-6">
                    이는 단순히 비용 절감의 문제가 아닙니다. 'AI 민주화'의 핵심입니다. 인터넷이 끊긴 비행기 안에서도, 오지의 현장에서도 고성능 AI를 사용할 수 있다는 것은 인류의 생산성을 물리적 제약으로부터 해방시키는 혁명입니다. 이제 개발자들의 관심사는 "얼마나 큰 모델을 쓰느냐"에서 "얼마나 최적화된 모델을 엣지(Edge)에 올리느냐"로 이동하고 있습니다.
                </p>

                <h2 className="text-3xl font-sans font-bold text-teal-400 mb-8 mt-16 flex items-center gap-3">
                    <BarChart3 className="w-8 h-8" /> 3. 행동하는 AI (Actionable AI)
                </h2>
                <p className="mb-6">
                    '말만 하는' 챗봇은 이제 지루합니다. 2026년의 AI는 직접 API를 호출하고, 이메일을 보내고, 문서를 작성하여 결재를 올립니다. RAG(검색 증강 생성)를 넘어 LAM(Large Action Model)으로의 진화가 가속화되고 있습니다.
                </p>
                <p className="mb-6">
                    Rabbit R1과 같은 전용 디바이스의 실패는 오히려 소프트웨어 중심의 에이전트 시장을 열었습니다. 사용자가 컴퓨터 화면에서 하는 마우스 클릭, 스크롤, 타이핑을 AI가 학습하여 그대로 따라 합니다. "지난달 영수증 다 모아서 엑셀로 정리하고 회계팀에 메일 보내줘"라는 명령을 내리면, AI 에이전트는 크롬 브라우저를 열고, 국세청 사이트에 로그인하고, PDF를 다운받아 OCR로 읽고, 엑셀을 켜서 입력한 뒤 아웃룩으로 메일을 보냅니다.
                </p>
                <p className="mb-12">
                     우리는 곧 "이거 알아봐 줘"가 아니라, "이거 해결해 둬"라고 말하게 될 것입니다. 이는 UI/UX의 패러다임이 GUI(Graphic User Interface)에서 LUI(Language User Interface), 더 나아가 Intent-UI(의도 기반 인터페이스)로 바뀌는 것을 의미합니다. 버튼을 찾아서 누르는 것이 아니라, 원하는 결과를 말하면 과정은 AI가 알아서 수행하는 세상입니다.
                </p>

                <div className="bg-gradient-to-r from-blue-900/30 to-teal-900/30 p-8 rounded-2xl border-l-4 border-blue-500 mt-12 mb-20">
                    <div className="flex items-start gap-4">
                        <TrendingUp className="w-8 h-8 text-blue-400 flex-shrink-0 mt-1" />
                        <div>
                             <h4 className="text-xl font-bold text-white mb-2">Reedo's Prediction for 2026 Q3</h4>
                             <ul className="text-gray-300 space-y-2 list-disc list-inside">
                                <li>에이전트 간의 경제 활동(M2M Economy) 시작: AI가 다른 AI에게 API 사용료를 코인으로 지불.</li>
                                <li>'프롬프트 엔지니어' 직군의 소멸, '에이전트 아키텍트'로의 전환.</li>
                                <li>법적 인격체로서의 AI 권리에 대한 논의 본격화 (저작권, 책임 소재).</li>
                             </ul>
                        </div>
                    </div>
                </div>

                <div className="border-t border-white/10 pt-12 mt-20">
                     <p className="text-xl font-bold text-white mb-4">Reedo's Insight</p>
                     <p className="text-gray-400 italic leading-relaxed">
                        기술의 속도가 현기증이 날 정도지만, 본질은 변하지 않습니다. 도구는 강력해지고, 인간은 더 자유로워져야 합니다. 쏟아지는 트렌드 용어에 매몰되지 말고, "그래서 이것이 내 삶과 비즈니스를 어떻게 더 낫게 만드는가?"라는 질문을 놓지 말아야 합니다. AI 트렌드를 쫓는 것을 넘어, 그것을 우리 삶의 도구로 길들이는 지혜가 필요한 시점입니다.
                     </p>
                </div>

            </article>

            {/* Reedo Author Component */}
             <div className="mt-24 p-8 rounded-2xl bg-[#0A1124] border border-white/10 flex items-center gap-6 shadow-2xl group hover:border-blue-500/30 transition-all duration-300">
                <div className="relative shrink-0">
                    <img 
                        src="/reedo-profile-high.png" 
                        alt="Reedo"
                        className="w-24 h-24 rounded-full object-cover border-2 border-white/10 grayscale group-hover:grayscale-0 transition-all duration-500"
                    />
                </div>
                <div className="flex-grow">
                    <h3 className="text-xl font-bold text-white mb-1 group-hover:text-blue-400 transition-colors">Written by Reedo</h3>
                    <p className="text-gray-400 text-sm mb-2">Global Field Engineer & Automation Architect</p>
                    <p className="text-sm text-gray-400 leading-relaxed">
                        최신 기술의 파도 위에서 균형을 잡는 법을 연구합니다. 복잡한 기술을 명쾌한 인사이트로 변환합니다.
                    </p>
                </div>
                <div className="flex gap-4 text-gray-400">
                     <button className="hover:text-white transition-colors p-2 hover:bg-white/10 rounded-full">
                        <Share2 className="w-5 h-5" />
                     </button>
                     <button className="hover:text-white transition-colors p-2 hover:bg-white/10 rounded-full">
                        <Bookmark className="w-5 h-5" />
                     </button>
                </div>
            </div>

        </div>
      </section>
    </main>
  );
}
