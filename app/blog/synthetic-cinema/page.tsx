"use client";

import { motion } from "framer-motion";
import { ArrowLeft, Clock, Calendar, Share2, Bookmark, Film, Video, Play, Aperture } from "lucide-react";
import Link from "next/link";

export default function SyntheticCinemaPage() {
  return (
    <main className="w-full min-h-screen bg-[#050B1B] text-white font-poppins selection:bg-red-500 selection:text-white">
      
      <motion.div 
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-red-600 via-orange-500 to-yellow-500 origin-left z-50"
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
                src="https://images.unsplash.com/photo-1536440136628-849c177e76a1?q=80&w=2525&auto=format&fit=crop" 
                alt="Cinema"
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
                        Future Media
                    </span>
                    <span className="flex items-center text-gray-400 text-sm">
                        <Calendar className="w-4 h-4 mr-2" /> 2026. 01. 06
                    </span>
                    <span className="flex items-center text-gray-400 text-sm">
                        <Clock className="w-4 h-4 mr-2" /> 42 min read
                    </span>
                </div>

                <h1 className="text-4xl md:text-7xl font-bold leading-tight mb-8">
                    프롬프트로 찍는 영화:<br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-orange-500 to-yellow-500">
                        합성 시네마의 시대
                    </span>
                </h1>

                <p className="text-xl text-gray-300 max-w-2xl leading-relaxed italic border-l-4 border-red-500 pl-6">
                    "카메라 없는 영화, 배우 없는 연기. <br/>
                    AI는 헐리우드의 스튜디오를 클라우드 서버로 옮기고 있다."
                </p>
            </motion.div>
        </div>
      </section>

      {/* Content Body */}
      <section className="relative px-6 py-20">
        <div className="max-w-3xl mx-auto">
            <article className="prose prose-lg prose-invert prose-p:text-gray-300 prose-headings:text-white max-w-none font-serif">
                
                <p className="lead text-2xl text-white font-sans font-medium mb-12 leading-relaxed">
                    1895년, 뤼미에르 형제가 '열차의 도착'을 상영했을 때 관객들은 스크린 속 기차가 자신들을 덮칠까 두려워 도망쳤다. 130년이 지난 지금, 우리는 또 다른 충격적인 도착을 목격하고 있다. 바로 Sora와 Runway Gen-3 같은 'Text-to-Video' AI 모델의 등장이다. 이제 텍스트 몇 줄이면 헐리우드 블록버스터급의 씬(Scene)을 만들어낼 수 있다. 영화 제작의 민주화를 넘어, 영상 문법 그 자체의 혁명이 시작되었다.
                </p>

                <div className="my-16 relative rounded-2xl overflow-hidden border border-white/10 group">
                    <img src="https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?q=80&w=2670&auto=format&fit=crop" className="w-full object-cover transform group-hover:scale-105 transition-transform duration-700" alt="Film Set" />
                    <div className="absolute inset-0 bg-black/60 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity p-8 text-center">
                         <Film className="w-12 h-12 text-red-500 mb-4" />
                        <span className="text-white text-xl font-bold mb-2">The Traditional Workflow</span>
                        <p className="text-gray-300 text-sm">Script → Casting → Location → Shooting → Editing → VFX</p>
                    </div>
                </div>

                <h2 className="text-3xl font-sans font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-pink-600 mb-8">
                    1. 언캐니 밸리를 넘어: 가상 배우의 부상
                </h2>
                <p className="mb-6">
                    한때 CG로 만든 인간은 어색하고 불쾌했다. '언캐니 밸리(Uncanny Valley)'는 넘을 수 없는 벽처럼 보였다. 하지만 딥페이크와 생성형 AI 기술은 이 계곡을 단숨에 뛰어넘었다. 이제 AI 배우는 땀구멍, 미세한 근육의 떨림, 동공의 반사까지 완벽하게 재현한다.
                </p>
                <p className="mb-6">
                    이것은 무엇을 의미하는가? 더 이상 배우의 스캔들로 영화 개봉이 취소될 일이 없다. 늙지 않는 배우, 24시간 촬영해도 지치지 않는 배우, 모든 언어를 구사하는 배우가 탄생했다. 제임스 딘이 2026년의 영화에 주연으로 캐스팅되고, 젊은 시절의 톰 행크스가 다시 로맨스 영화를 찍는다. '초상권'과 '연기'의 개념은 완전히 재정의되고 있다. 배우는 자신의 외모와 목소리 데이터를 라이선싱하는 'IP 소유자'가 되고, 연기는 데이터를 튜닝하는 과정이 될지도 모른다.
                </p>

                <h2 className="text-3xl font-sans font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-500 mb-8">
                    2. 1인 스튜디오의 시대 (The One-Person Studio)
                </h2>
                <p className="mb-6">
                    기존의 영화 제작은 거대한 자본과 인력이 필요한 작업이었다. 하지만 AI는 이 진입 장벽을 무너뜨렸다. 시나리오는 LLM(거대언어모델)과 함께 쓰고, 콘티는 Midjourney로 그리며, 촬영은 Sora로 생성하고, 배경음악은 Suno가 만든다.
                </p>
                <p className="mb-6">
                    이제 중요한 것은 자본의 크기가 아니라 '상상력의 크기'다. 머릿속에 세계관만 있다면 누구나 넷플릭스급 시리즈를 만들 수 있는 시대. 이것은 유튜브가 방송의 권력을 개인에게 이양했듯이, AI가 영화의 권력을 개인에게 이양하는 '제2의 미디어 혁명'이다. 우리는 곧 숏폼(Short-form)을 넘어선 'AI 생성 장편 영화'가 영화제에서 대상을 받는 날을 보게 될 것이다.
                </p>

                <div className="bg-[#1A1F36] p-8 rounded-2xl border border-red-500/20 my-10 relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-4 opacity-10">
                        <Video size={120} />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-4 z-10 relative">🎬 Synthetic Cinema Evolution</h3>
                    <ul className="space-y-3 text-gray-300 z-10 relative">
                        <li className="flex gap-3">
                            <span className="text-red-400 font-bold">Phase 1:</span> 
                            <span>보조 도구 (VFX, 노이즈 제거, 자동 편집)</span>
                        </li>
                        <li className="flex gap-3">
                            <span className="text-orange-400 font-bold">Phase 2:</span> 
                            <span>공동 창작 (Generative Fill, AI Voice, Text-to-Scene)</span>
                        </li>
                        <li className="flex gap-3">
                            <span className="text-yellow-400 font-bold">Phase 3:</span> 
                            <span>완전 자동화 (Prompt-to-Movie, Real-time Generation)</span>
                        </li>
                    </ul>
                </div>

                <h2 className="text-3xl font-sans font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-green-500 mb-8">
                    3. 인터랙티브 무비와 개인화된 엔딩
                </h2>
                <p className="mb-6">
                    넷플릭스의 '밴더스내치'는 선택에 따라 결말이 바뀌는 인터랙티브 무비의 가능성을 보여주었다. 하지만 AI 시대의 인터랙티브 무비는 차원이 다르다. 영화는 더 이상 고정된 파일이 아니다. 그것은 시청자의 반응에 따라 실시간으로 렌더링되는 '경험'이다.
                </p>
                <p className="mb-6">
                    "주인공이 죽는 엔딩이 싫은가요?" AI에게 말하면, 그 즉시 주인공이 살아남는 버전의 스토리가 생성되어 재생된다. 관객은 수동적인 관찰자에서 능동적인 개입자가 된다. 나의 공포 영화는 내가 가장 무서워하는 요소들로 구성되고, 나의 로맨스 영화는 내가 선호하는 이상형이 등장한다. 이것은 '대중문화(Mass Culture)'의 종말이자, '마이크로 컬쳐(Micro Culture)'의 시작이다.
                </p>
                <p className="mb-12">
                    물론 우려도 있다. 공통된 서사가 사라진 사회에서 우리는 어떻게 공감대를 형성할 것인가? 모두가 자신만의 환상(Filter Bubble) 속에 갇혀 고립되는 것은 아닐까?
                </p>

                <h2 className="text-3xl font-sans font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-cyan-500 mb-8">
                    결론: 크리에이티브의 본질
                </h2>
                <p className="mb-6">
                    기술이 발전할수록 역설적으로 '인간적인 것'의 가치는 올라간다. AI가 기술적 완벽함을 제공할 때, 관객은 픽셀 너머의 '진심'을 갈구하게 된다. 우리가 여전히 수제화에 열광하고, LP판을 듣는 이유와 같다.
                </p>
                <p className="mb-6">
                    미래의 영화감독은 영상을 만드는 사람이 아니라, '비전(Vision)'을 제시하는 사람이 될 것이다. AI는 수천 개의 훌륭한 장면을 만들어 줄 수 있지만, 그중 어떤 장면이 관객의 영혼을 울릴지 결정하는 것은 여전히 인간의 몫이다.
                </p>
                <p className="mb-12">
                    영화는 죽지 않는다. 다만 카메라라는 육체를 벗고, 데이터라는 영혼으로 다시 태어나고 있을 뿐이다. 스크린은 이제 거울이 되어, 우리의 상상을 무한히 반사하기 시작했다.
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
