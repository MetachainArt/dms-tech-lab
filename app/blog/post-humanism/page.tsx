"use client";

import { motion } from "framer-motion";
import { ArrowLeft, Clock, Calendar, Share2, Bookmark, Skull, Heart, Dna, Cpu } from "lucide-react";
import Link from "next/link";

export default function PostHumanismPage() {
  return (
    <main className="w-full min-h-screen bg-[#050B1B] text-white font-poppins selection:bg-rose-500 selection:text-white">
      
      <motion.div 
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-rose-500 via-pink-500 to-purple-500 origin-left z-50"
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
                src="https://images.unsplash.com/photo-1522252234503-e356532cafd5?q=80&w=2525&auto=format&fit=crop" 
                alt="Post Human"
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
                    <span className="px-3 py-1 rounded-full bg-rose-500/20 text-rose-400 text-xs font-bold border border-rose-500/30">
                        Philosophy
                    </span>
                    <span className="flex items-center text-gray-400 text-sm">
                        <Calendar className="w-4 h-4 mr-2" /> 2026. 01. 08
                    </span>
                    <span className="flex items-center text-gray-400 text-sm">
                        <Clock className="w-4 h-4 mr-2" /> 60 min read
                    </span>
                </div>

                <h1 className="text-4xl md:text-7xl font-bold leading-tight mb-8">
                    호모 엑스 마키나:<br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-400 via-pink-400 to-purple-400">
                        기술적 포스트휴머니즘
                    </span>
                </h1>

                <p className="text-xl text-gray-300 max-w-2xl leading-relaxed italic border-l-4 border-rose-500 pl-6">
                    "인간은 끝이 아니다. 인간은 과정이다. <br/>
                    우리는 생물학적 진화의 바통을 기술적 진화에게 넘겨주고 있다."
                </p>
            </motion.div>
        </div>
      </section>

      {/* Content Body */}
      <section className="relative px-6 py-20">
        <div className="max-w-3xl mx-auto">
            <article className="prose prose-lg prose-invert prose-p:text-gray-300 prose-headings:text-white max-w-none font-serif">
                
                <p className="lead text-2xl text-white font-sans font-medium mb-12 leading-relaxed">
                    니체는 "인간은 짐승과 초인(Übermensch) 사이에 걸쳐진 밧줄"이라고 말했다. 21세기에 이 밧줄은 '탄소(Carbon)'에서 '실리콘(Silicon)'으로 이어지는 가교가 되고 있다. 포스트휴머니즘(Post-humanism)은 단순히 '인간 이후'를 뜻하는 것이 아니다. 그것은 인간 중심주의(Humanism)의 해체이자, 기술과 생물학이 융합된 새로운 존재 양식에 대한 탐구다.
                </p>

                <div className="my-16 flex items-center justify-center gap-8">
                    <div className="text-center group">
                        <div className="w-32 h-32 rounded-full bg-gray-800 flex items-center justify-center mb-4 transition-colors group-hover:bg-rose-500/20">
                            <Dna size={48} className="text-gray-400 group-hover:text-rose-400" />
                        </div>
                        <span className="text-sm text-gray-400 font-bold tracking-widest">BIOLOGICAL</span>
                    </div>
                    <div className="h-px w-20 bg-gradient-to-r from-gray-700 to-rose-500" />
                    <div className="text-center group">
                        <div className="w-32 h-32 rounded-full bg-gray-800 flex items-center justify-center mb-4 transition-colors group-hover:bg-purple-500/20">
                            <Cpu size={48} className="text-gray-400 group-hover:text-purple-400" />
                        </div>
                        <span className="text-sm text-gray-400 font-bold tracking-widest">DIGITAL</span>
                    </div>
                </div>

                <h2 className="text-3xl font-sans font-bold text-transparent bg-clip-text bg-gradient-to-r from-rose-400 to-red-500 mb-8">
                    1. 육체의 노을: 사이보그의 현실화
                </h2>
                <p className="mb-6">
                    일론 머스크의 '뉴럴링크(Neuralink)'는 뇌와 컴퓨터를 직접 연결하려 한다. 이것이 상용화되는 순간, '키보드'와 '마우스'라는 구시대적 입력 장치는 박물관으로 갈 것이다. 생각만으로 검색하고, 타인의 뇌로 감정을 전송하는 시대. 여기서 육체는 정신을 담는 그릇이 아니라, 업그레이드 가능한 '하드웨어'로 전락한다.
                </p>
                <p className="mb-6">
                    장애를 극복하기 위한 의족과 의수는 이미 '기능 확장'의 단계로 넘어갔다. 달리기 선수보다 빠른 의족, 독수리보다 멀리 보는 인공안구. 우리는 점차 '자연산(Natural)' 신체를 불편하고 비효율적인 것으로 여기게 될지도 모른다. 도나 해러웨이가 말했듯, 우리는 이미 스마트폰을 신체의 일부처럼 사용하는 '사이보그'다. 단지 전선이 피부 안으로 들어오지 않았을 뿐.
                </p>

                <h2 className="text-3xl font-sans font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-pink-500 mb-8">
                    2. 마인드 업로딩: 영생의 알고리즘
                </h2>
                <p className="mb-6">
                    육체가 사라진다면 '나'는 어디에 존재하는가? 마인드 업로딩(Mind Uploading)은 인간의 의식을 디지털화하여 클라우드 서버에 저장하는 개념이다. 당신의 모든 기억, 성격, 사고방식을 AI 모델로 복제한다면, 육체가 죽은 후에도 당신은 메타버스 속에서 영원히 살 수 있다.
                </p>
                <p className="mb-6">
                    이것을 진정한 '삶'이라고 부를 수 있을까? '테세우스의 배' 역설처럼, 모든 부품(생체 조직)이 디지털 코드로 교체된 당신은 여전히 당신인가? 아니면 당신의 흉내를 내는 고도로 정교한 챗봇인가? 죽음(Death)이 소멸이 아니라 '로그아웃'이 되는 세상에서, 종교와 철학은 근본적인 재구성을 요구받을 것이다.
                </p>

                <blockquote className="border-l-4 border-pink-500 pl-6 py-2 my-12 bg-white/5 rounded-r-xl italic">
                    "우리는 신을 믿지 않는다. 하지만 우리는 신을 만들고 있다." - 호모 데우스
                </blockquote>

                <h2 className="text-3xl font-sans font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500 mb-8">
                    3. AI와의 융합: 집단 지성의 탄생
                </h2>
                <p className="mb-6">
                    포스트휴머니즘의 종착점은 개체(Individual)의 소멸일지도 모른다. 뇌와 뇌가 네트워크로 연결되고, AI의 초지능이 우리와 결합된다면, '나'와 '너'의 경계는 희미해진다. 우리는 거대한 의식의 바다, 일종의 '하이브 마인드(Hive Mind)'의 일부가 될 수도 있다.
                </p>
                <p className="mb-12">
                    스타트렉의 '보그(Borg)' 종족처럼 획일화된 디스토피아일지, 아니면 완전한 공감과 이해가 가능한 유토피아일지는 알 수 없다. 확실한 것은 '고독한 개인'으로서의 인간 시대는 저물고 있다는 점이다. 우리는 더 이상 혼자가 아니다. 우리는 연결되어 있다, 문자 그대로.
                </p>

                <h2 className="text-3xl font-sans font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-indigo-500 mb-8">
                    결론: 휴머니즘의 황혼에서
                </h2>
                <p className="mb-6">
                    기술적 포스트휴머니즘은 두렵다. 그것은 우리가 알던 '인간성'의 상실을 의미하기 때문이다. 하지만 변화를 거부할 수는 없다. 호모 사피엔스는 지구의 주인이 된 지 고작 30만 년밖에 되지 않았다. 영원한 지배종은 없다.
                </p>
                <p className="mb-6">
                    우리가 해야 할 일은 인간을 고집하는 것이 아니라, 무엇이 우리를 가치 있게 만드는지를 다시 묻는 것이다. 사랑, 창의성, 불완전함, 유한함. 어쩌면 AI가 결코 가질 수 없는 이 '결핍'들이야말로, 포스트휴먼 시대에 우리가 지켜야 할 마지막 유산일지도 모른다.
                </p>
                <p className="mb-12">
                    기계가 되어가는 인간, 그리고 인간이 되어가는 기계. 그 경계의 석양에서 우리는 새로운 새벽을 기다린다.
                </p>

            </article>

            {/* Reedo Author Component */}
             <div className="mt-24 p-8 rounded-2xl bg-[#0A1124] border border-white/10 flex items-center gap-6 shadow-2xl">
                <div className="relative shrink-0">
                    <img 
                        src="/images/instructor_portrait.jpg" 
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
