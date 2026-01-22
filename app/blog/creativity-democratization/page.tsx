"use client";

import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, Clock, Calendar, Share2, Bookmark, Palette, Zap } from "lucide-react";
import Link from "next/link";
import NeuralBackground from "@/components/ui/NeuralBackground";

export default function CreativityPage() {
  return (
    <main className="w-full min-h-screen bg-[#050B1B] text-white font-poppins selection:bg-green-500 selection:text-black">
      
      <motion.div 
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-green-500 via-emerald-500 to-teal-500 origin-left z-50"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: false }} 
      />

      <section className="relative w-full h-[70vh] flex flex-col justify-end pb-20 px-6 overflow-hidden">
        <div className="absolute inset-0 z-0">
             <div className="absolute inset-0 bg-gradient-to-t from-[#050B1B] via-[#050B1B]/40 to-transparent z-10" />
             <img 
                src="https://images.unsplash.com/photo-1547891654-e66ed7ebb968?q=80&w=2670&auto=format&fit=crop" 
                alt="Abstract Paint"
                className="w-full h-full object-cover opacity-70 scale-105 animate-slow-zoom"
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
                    <span className="px-3 py-1 rounded-full bg-green-500/20 text-green-400 text-xs font-bold border border-green-500/30">
                        Future Art
                    </span>
                    <span className="flex items-center text-gray-400 text-sm">
                        <Calendar className="w-4 h-4 mr-2" /> 2026. 01. 04
                    </span>
                    <span className="flex items-center text-gray-400 text-sm">
                        <Clock className="w-4 h-4 mr-2" /> 24 min read
                    </span>
                </div>

                <h1 className="text-4xl md:text-7xl font-bold leading-tight mb-8">
                    창작의 민주화인가,<br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-emerald-400 to-teal-400">
                        예술의 종말인가?
                    </span>
                </h1>

                <p className="text-xl text-gray-300 max-w-2xl leading-relaxed italic border-l-4 border-green-500 pl-6">
                    "모두가 예술가가 될 수 있는 시대는, <br/>
                    역설적으로 아무도 예술가가 될 수 없는 시대일지도 모른다."
                </p>
            </motion.div>
        </div>
      </section>

      <section className="relative px-6 py-20">
        <div className="max-w-3xl mx-auto">
            <article className="prose prose-lg prose-invert prose-p:text-gray-300 prose-headings:text-white max-w-none font-serif">
                <p className="lead text-2xl text-white font-sans font-medium mb-12 leading-relaxed">
                    2022년 여름, 미드저니(Midjourney)와 스테이블 디퓨전(Stable Diffusion)의 공개는 예술계의 구텐베르크 혁명과도 같았다. 수십 년의 도제식 교육과 고통스러운 훈련을 거쳐야만 얻을 수 있었던 '시각적 표현 능력'이, 이제 프롬프트 창에 입력하는 몇 줄의 텍스트로 대체되었다. 이것은 분명한 '해방'이었다. 그림을 못 그리는 소설가가 자신의 세계관을 시각화할 수 있게 되었고, 자본이 없는 인디 게임 개발자가 AAA급 일러스트를 게임에 넣을 수 있게 되었다. 바야흐로 '창작의 민주화(Democratization of Creativity)'가 도래한 것이다. 하지만 이 축제의 이면에는 '예술의 종말'을 경고하는 섬뜩한 그림자가 드리워져 있다.
                </p>

                <h2 className="text-3xl font-sans font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-500 mb-8">
                    1. 아우라의 완전한 소멸: 희소성의 종말
                </h2>
                <p className="mb-6">
                    1936년, 발터 벤야민은 사진과 영화 기술의 등장을 보며 예술 작품의 일회적 현존성, 즉 '아우라(Aura)'가 붕괴한다고 예언했다. AI의 등장은 이 붕괴를 완성시킨다. 인간 일러스트레이터가 일주일 걸려 그릴 그림을 AI는 3초 만에 4장씩 뱉어낸다. 공급이 무한대가 되는 순간, 이미지의 가치는 0으로 수렴한다.
                </p>
                <p className="mb-6">
                    이제 '손기술(Craftsmanship)'은 더 이상 예술가의 필수 덕목이 아니다. 과거에는 정교한 붓터치와 사실적인 묘사력이 경이로움의 대상이었지만, 이제는 누구나 할 수 있는 기술이 되었다. 그렇다면 예술의 가치는 어디로 이동하는가? 마르셀 뒤샹이 변기를 가져다 놓고 '샘'이라 이름 붙였을 때처럼, 이제 중요한 것은 '하우(How)'가 아니라 '와이(Why)'다. 어떤 이미지를 만들 것인가? 왜 그것을 만들었는가? 작가의 철학, 서사(Narrative), 그리고 큐레이션 능력이 붓질보다 중요해지는 개념 미술의 시대로 강제 이주하고 있는 것이다.
                </p>

                <h2 className="text-3xl font-sans font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-500 mb-8">
                    2. 데이터 뱀파이어와 저작권의 딜레마
                </h2>
                <p className="mb-6">
                    AI 모델의 놀라운 성능은 공짜 점심이 아니다. 그것은 인터넷에 공개된 수십억 장의 이미지, 즉 수많은 창작자의 피와 땀을 무단으로 흡혈하여 만들어졌다. 현존하는 작가의 화풍을 모방하여 "OOO 스타일로 그려줘"라고 명령하면, AI는 원작자조차 구분하기 힘든 위작을 쏟아낸다. 이것은 '학습(Learning)'인가 '도둑질(Theft)'인가?
                </p>
                <p className="mb-6">
                    법은 기술의 속도를 따라가지 못한다. "No AI Art" 운동은 예술가들의 생존 본능적 저항이다. 하지만 역사적으로 러다이트 운동이 산업혁명을 막지 못했듯, 이 흐름을 되돌릴 수는 없을 것이다. 미래에는 '인간 인증(Human Made Certification)'이 유기농 식품 마크처럼 붙을지도 모른다. AI의 매끄러운 완벽함 대신, 인간의 떨리는 붓질과 실수가 오히려 '진정성(Authenticity)'의 증거로 비싼 값을 받게 되는 아이러니한 시대가 올 수도 있다.
                </p>

                <h2 className="text-3xl font-sans font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-cyan-500 mb-8">
                    3. 하이브리드 크리에이터: 호모 프롬프트쿠스
                </h2>
                <p className="mb-6">
                    비관만 할 것은 아니다. 사진기가 등장했을 때 초상화가들은 일자리를 잃었지만, 회화는 대상의 재현이라는 짐을 벗어던지고 인상주의와 추상화로 진화했다. 그리고 '사진작가'라는 새로운 예술가가 탄생했다. AI 역시 새로운 예술 장르를 낳을 것이다.
                </p>
                <p className="mb-6">
                    미래의 예술가는 붓을 든 장인이 아니라, 오케스트라의 지휘자(Conductor)에 가까워질 것이다. 그는 AI라는 거대한 오케스트라에게 프롬프트라는 지휘봉으로 지시를 내린다. 생성된 결과물 중 최상의 것을 선별하고, 리터칭하고, 다시 생성하며 작품을 완성해 나간다. 이를 '신디그래피(Synthography)' 또는 '프롬프트 엔지니어링 아트'라 부를 수 있다. 붓 대신 알고리즘을, 물감 대신 데이터를 재료로 삼는 이 '하이브리드 크리에이터'들이 르네상스를 이끌 것이다. 예술은 죽지 않는다. 다만 도구가 바뀌고, 정의가 확장될 뿐이다.
                </p>

                <div className="border-t border-white/10 pt-12 mt-20">
                     <p className="text-xl text-gray-200 font-medium">
                        "가장 중요한 도구는 그래픽 카드가 아니라, 여전히 인간의 '마음'이다. 기계가 답을 그리는 시대에, 질문을 던지는 것은 오직 인간만이 할 수 있는 예술이기 때문이다."
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
