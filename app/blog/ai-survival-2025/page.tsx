"use client";

import { motion } from "framer-motion";
import { ArrowLeft, Clock, Calendar, Share2, Bookmark, Flame, Zap, DollarSign, Brain, Lock, Server, TrendingUp, AlertTriangle } from "lucide-react";
import Link from "next/link";

export default function AITechTrendsPage() {
  return (
    <main className="w-full min-h-screen bg-[#050B1B] text-white font-poppins selection:bg-red-500 selection:text-white">
      
      {/* Background Ambience */}
      <div className="fixed inset-0 z-0 pointer-events-none">
           <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-red-500/5 rounded-full blur-[120px]" />
           <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[120px]" />
      </div>

      <motion.div 
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-red-600 via-orange-500 to-yellow-500 origin-left z-50"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: false }} 
      />

      {/* Hero Section */}
      <section className="relative w-full h-[60vh] flex flex-col justify-end pb-20 px-6 overflow-hidden">
        <div className="absolute inset-0 z-0">
             <div className="absolute inset-0 bg-gradient-to-t from-[#050B1B] via-[#050B1B]/40 to-transparent z-10" />
             {/* Unsplash: Stormy / Dramatic Tech */}
             <img 
                src="https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=2565&auto=format&fit=crop" 
                alt="AI Storm"
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
                    <span className="px-3 py-1 rounded-full bg-red-500/20 text-red-400 text-xs font-bold border border-red-500/30">
                        2025 Retrospective
                    </span>
                    <span className="flex items-center text-gray-400 text-sm">
                        <Calendar className="w-4 h-4 mr-2" /> 2026. 01. 22
                    </span>
                    <span className="flex items-center text-gray-400 text-sm">
                        <Clock className="w-4 h-4 mr-2" /> 50 min read
                    </span>
                </div>

                <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-8">
                    청구서가 도착했다:<br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-orange-400 to-yellow-400">
                        2025 AI 생존기
                    </span>
                </h1>

                <p className="text-xl text-gray-300 max-w-2xl leading-relaxed italic border-l-4 border-red-500 pl-6">
                    "광기(Hype)에서 현실(Reality)로. <br/>
                    모델은 똑똑해졌지만, 기업은 더 어려운 숙제를 받았다."
                </p>
            </motion.div>
        </div>
      </section>

      {/* Content Body */}
      <section className="relative px-6 py-20">
        <div className="max-w-3xl mx-auto">
            <article className="prose prose-lg prose-invert prose-p:text-gray-300 prose-headings:text-white max-w-none font-serif">
                
                <p className="lead text-2xl text-white font-sans font-medium mb-12 leading-relaxed">
                    2025년의 AI는 “가능성”을 증명하는 해가 아니었습니다. 가능성은 이미 2023~2024년에 충분히 보여줬고, 2025년에는 그 대가가 청구서로 날아왔습니다. 한 해는 ‘DeepSeek’라는 다윗의 돌팔매질로 시작해, ‘수익성(ROI)’과 ‘전력(인프라)’이라는 현실 앞에서 숨을 고르며 끝났습니다. 기술은 빛의 속도로 진화했지만, 기업은 더 느리고 무거운 질문을 꺼냈습니다.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-12">
                    <div className="bg-[#1A1F36] p-6 rounded-xl border-l-4 border-red-500">
                        <h3 className="font-bold text-white mb-2">Cost Pressure</h3>
                        <p className="text-sm text-gray-400">"모델은 싼데 왜 운영비는 늘지?"<br/>숨겨진 비용의 역습.</p>
                    </div>
                    <div className="bg-[#1A1F36] p-6 rounded-xl border-l-4 border-yellow-500">
                        <h3 className="font-bold text-white mb-2">Power Shortage</h3>
                        <p className="text-sm text-gray-400">"돈이 있어도 전기가 없다."<br/>물리적 한계에 봉착한 AI.</p>
                    </div>
                </div>

                <h2 className="text-3xl font-sans font-bold text-red-400 mb-8 mt-16 flex items-center gap-3">
                    <Brain className="w-8 h-8" /> 제1막: 신들의 전쟁 (The War of Gods)
                </h2>
                
                <h3 className="text-2xl font-bold text-white mb-4">1) 딥시크(DeepSeek) 쇼크: 가성비 혁명</h3>
                <p className="mb-6">
                    2025년 1월 27일. 시장은 한 번 더 “AI는 돈 많은 자의 게임”이라고 믿고 있었습니다. 그 믿음이 깨진 날이 바로 그날이었습니다. 중국의 퀀트 헤지펀드 출신 스타트업 DeepSeek는 오픈소스 모델(DeepSeek-V3)과 추론 모델(R1)을 공개하며, 실리콘밸리의 공식을 정면으로 뒤집었습니다. 핵심은 간단했습니다.
                </p>
                <p className="mb-6 font-bold text-red-300">
                    “더 비싼 GPU가 아니라, 더 영리한 설계로도 동급 성능이 가능하다.”
                </p>
                <p className="mb-6">
                    DeepSeek는 GPT-4 훈련에 1억 달러가 들어갔다는 시장 추정과 대비되는 560만 달러 비용으로 대등한 성능을 구현했습니다. 이는 단순한 기술적 승리가 아니었습니다. AI가 사치재에서 유틸리티(수도, 전기 같은 공공재)로 넘어간 분기점이었습니다. 기업들은 깨달았습니다. 모델 자체는 점점 ‘원가’에 수렴한다는 것을. 승부는 모델이 아니라 “어떤 업무 흐름에 태우느냐”로 이동했습니다.
                </p>

                <h3 className="text-2xl font-bold text-white mb-4 mt-8">2) OpenAI vs Google: 플랫폼 전쟁</h3>
                <p className="mb-6">
                     ‘누가 가장 똑똑한가’의 경쟁은 끝났습니다. 이제는 ‘누가 가장 빨리 표준을 장악하는가’의 전쟁입니다. 2월, OpenAI의 ‘지브리 스타일’ 열풍은 AI를 대중문화 한복판으로 끌어들였고, 구글은 Gemini 생태계를 확장하며 맞불을 놓았습니다.
                </p>
                <p className="mb-6">
                    이 싸움의 승패는 벤치마크 점수가 아니라 ‘플랫폼 경험’에서 갈립니다. 텍스트만 잘하는 모델이 아니라, 이미지・비디오・음성・툴 사용으로 확장된 ‘에이전트’가 워크플로우를 장악하는 자가 이깁니다. 기업에게는 “내가 어느 진영(생태계)에 묶일 것인가”라는 전략적 선택이 강요된 한 해였습니다.
                </p>

                <h2 className="text-3xl font-sans font-bold text-orange-400 mb-8 mt-16 flex items-center gap-3">
                    <TrendingUp className="w-8 h-8" /> 제2막: 현실의 점령 (The Great Permeation)
                </h2>

                <h3 className="text-2xl font-bold text-white mb-4">3) 비디오 혁명: 하드 서피스의 승리</h3>
                <p className="mb-6">
                    Sora 쇼크가 "와..."로 끝났다면, 2025년은 "그래서 써봤다"로 시작했습니다. 다만, 성패는 갈렸습니다. 자동차, 금속, 제품 같은 '하드 서피스(Hard Surface)' 광고는 AI가 완벽하게 침투했습니다. 반면 사람의 표정, 감정 교류 같은 '소프트 티슈(Soft Tissue)' 영역은 여전히 불쾌한 골짜기를 넘지 못했습니다. 이는 마케팅 시장을 재편했습니다. "촬영"이 아니라 "기획(Prompting) + 검수(Curation)"가 핵심 역량이 된 것입니다.
                </p>

                <h3 className="text-2xl font-bold text-white mb-4 mt-8">4) 온디바이스 AI: 클라우드에서 엣지로</h3>
                <p className="mb-6">
                    비용과 프라이버시가 AI를 서버실에서 내 노트북과 폰으로 끌어내렸습니다. 갤럭시 S25와 AI PC의 보급은 단순한 스펙 향상이 아닙니다. 데이터가 어디서 처리되고, 책임이 어디에 남는지를 재정의하는 사건입니다. 
                </p>
                <div className="my-8 relative rounded-xl overflow-hidden h-64 border border-white/10 group">
                     {/* Unsplash: Chip / Circuit */}
                    <img src="https://images.unsplash.com/photo-1555664424-778a1e5e1b48?q=80&w=2670&auto=format&fit=crop" className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" alt="Chips" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />
                    <div className="absolute bottom-4 left-6">
                         <p className="text-white font-bold">Hybrid AI Architecture</p>
                         <p className="text-xs text-gray-400">Cloud for Intelligence, Edge for Privacy</p>
                    </div>
                </div>

                <h3 className="text-2xl font-bold text-white mb-4 mt-8">5) 바이브 코딩: 작성에서 감독으로</h3>
                <p className="mb-6">
                    '바이브 코딩(Vibe Coding)'의 원년. 개발자는 더 이상 코드를 한 줄 한 줄 치는 타자수가 아닙니다. 전체적인 의도(Vibe)와 구조를 지휘하는 지휘자가 되었습니다. Cursor와 Windsurf 같은 AI IDE는 개발 생산성을 폭발시켰지만, 동시에 "누구나 실수를 대량 생산할 수 있다"는 리스크도 안겨주었습니다. 이제 중요한 건 코딩 실력이 아니라, 시스템을 이해하고 통제하는 '아키텍트'의 역량입니다.
                </p>

                <h2 className="text-3xl font-sans font-bold text-yellow-400 mb-8 mt-16 flex items-center gap-3">
                    <AlertTriangle className="w-8 h-8" /> 제3막: 빛과 그림자 (Shadows of Progress)
                </h2>

                <h3 className="text-2xl font-bold text-white mb-4">6) "신입은 필요 없다"</h3>
                <p className="mb-6">
                    가장 아픈 현실입니다. AI 에이전트가 3년 차 이하 주니어의 업무를 대체하면서, 채용 시장은 얼어붙었습니다. 반면 시니어 개발자의 몸값은 천정부지로 솟았습니다. 기업은 당장의 비용 절감에 환호했지만, 곧 "미래의 시니어는 어디서 키우나?"라는 구조적 딜레마에 빠졌습니다. 기술 귀족화와 사다리의 붕괴, 이것이 2025년 노동 시장의 현주소입니다.
                </p>

                <h3 className="text-2xl font-bold text-white mb-4 mt-8">7) 보안 붕괴: 신뢰의 비용 폭발</h3>
                <p className="mb-6">
                    딥페이크는 '기술 문제'를 넘어 '사회적 재난'이 되었습니다. 기업 콘텐츠가 진짜임을 증명하는 비용, 해킹이 아니라 '권한 관리 실패'로 인한 대규모 데이터 유출(쿠팡, 넷마블 사례 등)은 보안 패러다임을 바꿨습니다. AI가 유틸리티가 되는 순간, 보안과 신뢰는 '옵션'이 아니라 생존을 위한 '필수 인프라'가 되었습니다.
                </p>

                <h2 className="text-3xl font-sans font-bold text-gray-400 mb-8 mt-16 flex items-center gap-3">
                    <DollarSign className="w-8 h-8" /> 제4막: 청구서 (The Bill Arrives)
                </h2>

                <div className="bg-[#0A1124] p-8 rounded-2xl border border-white/10 mb-8">
                     <p className="text-lg font-medium text-white mb-4 text-center">"좋아요, 혁신적인 건 알겠어요. 그런데 돈은 벌었습니까?"</p>
                     <p className="text-gray-400 leading-relaxed text-center">
                        2025년 말, 모든 이사회 회의실의 공통된 질문이었습니다.<br/>
                        인프라와 칩을 판 곡괭이 장수들은 돈을 벌었지만, AI 모델을 단순히 갖다 쓴 Wrapper 기업들은 몰락했습니다. 시장은 이제 "와, 신기하다"가 아니라 "얼마가 남나(Margin)"를 묻습니다.
                     </p>
                </div>

                <p className="mb-6">
                    또한, AI는 물리학의 문제로 귀결되었습니다. 데이터센터가 먹어치우는 막대한 전력량은 국가 전력망을 압박했고, 원자력 발전소 재가동 논의까지 불러왔습니다. 정치 권력과 결합한 AI는 국가 전략 자산이 되었습니다. AI는 이제 단순 소프트웨어가 아닙니다. 그것은 에너지 산업이자, 국가 안보입니다.
                </p>

                <h2 className="text-3xl font-sans font-bold text-white mb-8 mt-16">
                    맺음말: 2026년은 '증명(Proof)'의 해
                </h2>
                <p className="mb-6">
                    2025년을 한 문장으로 정리하면 이렇습니다.<br/>
                    <strong className="text-red-400">"AI는 더 싸지고 강해졌지만, 기업은 더 무거운 현실(전력·보안·인력·ROI)과 마주했다."</strong>
                </p>
                <p className="mb-12">
                    다가오는 2026년은 더 이상 PoC(개념 증명)로 시간을 끌 수 없는 해입니다. 전력 문제를 해결하고, 실제로 영업이익 숫자를 바꾸는 '리얼 애플리케이션'을 내놓는 기업만이 살아남을 것입니다. 1막은 끝났습니다. 이제 진짜 승부인 2막이 시작됩니다.
                </p>

            </article>

            {/* Reedo Author Component */}
             <div className="mt-24 p-8 rounded-2xl bg-[#0A1124] border border-white/10 flex items-center gap-6 shadow-2xl relative overflow-hidden group hover:border-red-500/30 transition-colors">
                <div className="absolute inset-0 bg-gradient-to-r from-red-500/5 to-orange-500/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative shrink-0">
                    <img 
                        src="/reedo-profile-high.png" 
                        alt="Reedo"
                        className="w-24 h-24 rounded-full object-cover border-2 border-white/10 grayscale group-hover:grayscale-0 transition-all duration-500"
                    />
                </div>
                <div className="flex-grow relative z-10">
                    <h3 className="text-xl font-bold text-white mb-1 group-hover:text-red-400 transition-colors">Written by Reedo</h3>
                    <p className="text-gray-400 text-sm mb-2">Global Field Engineer & Automation Architect</p>
                    <p className="text-gray-500 text-xs leading-relaxed max-w-md">
                        기술의 명암을 기록합니다. 거품이 꺼진 자리에서 비로소 보이는 것들을 이야기합니다.
                    </p>
                </div>
                <div className="flex flex-col gap-4 text-gray-400 relative z-10">
                     <button className="hover:text-white transition-colors p-2 hover:bg-white/5 rounded-full">
                        <Share2 className="w-5 h-5" />
                     </button>
                     <button className="hover:text-white transition-colors p-2 hover:bg-white/5 rounded-full">
                        <Bookmark className="w-5 h-5" />
                     </button>
                </div>
            </div>

        </div>
      </section>
    </main>
  );
}
