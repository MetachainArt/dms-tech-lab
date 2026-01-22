"use client";

import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, Clock, Calendar, Share2, Bookmark, Box, Grid, Hexagon } from "lucide-react";
import Link from "next/link";
import NeuralBackground from "@/components/ui/NeuralBackground";

export default function GenerativeArchitecturePage() {
  return (
    <main className="w-full min-h-screen bg-[#050B1B] text-white font-poppins selection:bg-cyan-500 selection:text-black">
      
      <motion.div 
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-500 via-blue-500 to-indigo-500 origin-left z-50"
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
                src="https://images.unsplash.com/photo-1486325212027-8081e485255e?q=80&w=2670&auto=format&fit=crop" 
                alt="Generative Architecture"
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
                    <span className="px-3 py-1 rounded-full bg-cyan-500/20 text-cyan-400 text-xs font-bold border border-cyan-500/30">
                        Future Cities
                    </span>
                    <span className="flex items-center text-gray-400 text-sm">
                        <Calendar className="w-4 h-4 mr-2" /> 2026. 01. 05
                    </span>
                    <span className="flex items-center text-gray-400 text-sm">
                        <Clock className="w-4 h-4 mr-2" /> 35 min read
                    </span>
                </div>

                <h1 className="text-4xl md:text-7xl font-bold leading-tight mb-8">
                    공간을 연산하다:<br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-indigo-400 to-purple-400">
                        생성형 건축의 미학
                    </span>
                </h1>

                <p className="text-xl text-gray-300 max-w-2xl leading-relaxed italic border-l-4 border-cyan-500 pl-6">
                    "건축가는 더 이상 벽돌을 쌓지 않는다. <br/>
                    알고리즘을 통해 수만 개의 가능성을 지휘할 뿐이다."
                </p>
            </motion.div>
        </div>
      </section>

      {/* Content Body */}
      <section className="relative px-6 py-20">
        <div className="max-w-3xl mx-auto">
            <article className="prose prose-lg prose-invert prose-p:text-gray-300 prose-headings:text-white max-w-none font-serif">
                
                <p className="lead text-2xl text-white font-sans font-medium mb-12 leading-relaxed">
                    건축은 인류 역사상 가장 오래된 '하드웨어' 산업이었다. 돌과 나무, 철과 유리를 쌓아 올리는 물리적 제약 속에서 건축가들은 중력과 투쟁해왔다. 하지만 21세기, AI라는 새로운 도구는 건축을 '소프트웨어'의 영역으로 끌어들이고 있다. 자하 하디드의 유려한 곡선이 파라메트릭(Parametric) 디자인의 산물이었다면, 이제 우리는 AI가 스스로 구조를 제안하고 최적화하는 '생성형 건축(Generative Architecture)'의 시대를 맞이하고 있다.
                </p>

                <div className="my-16 grid grid-cols-2 gap-4">
                     <div className="aspect-[4/5] rounded-2xl overflow-hidden relative group">
                        <img src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=2531&auto=format&fit=crop" className="object-cover w-full h-full transform group-hover:scale-110 transition-transform duration-700" alt="Classical Architecture" />
                        <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                            <span className="text-white font-bold">Static Form</span>
                        </div>
                    </div>
                    <div className="aspect-[4/5] rounded-2xl overflow-hidden relative group">
                        <img src="https://images.unsplash.com/photo-1518005052304-a32d181907a7?q=80&w=2670&auto=format&fit=crop" className="object-cover w-full h-full transform group-hover:scale-110 transition-transform duration-700" alt="Generative Design" />
                        <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                            <span className="text-white font-bold">Dynamic Algorithm</span>
                        </div>
                    </div>
                </div>

                <h2 className="text-3xl font-sans font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600 mb-8">
                    1. 형태는 데이터를 따른다 (Form Follows Data)
                </h2>
                <p className="mb-6">
                    루이스 설리반은 "형태는 기능을 따른다"고 말했다. 하지만 AI 시대의 건축에서 형태는 '데이터'를 따른다. 부지의 풍향, 일조량, 소음, 유동 인구, 심지어 거주자의 생체 리듬 데이터까지. 수십억 개의 데이터 포인트가 AI 엔진에 입력되면, 알고리즘은 인간이 상상할 수 없는 수천 가지의 최적화된 설계안을 쏟아낸다.
                </p>
                <p className="mb-6">
                    Autodesk와 NASA가 협력하여 설계한 우주 탐사선 부품이 마치 뼈나 유기체처럼 기괴하게 생긴 것을 본 적이 있는가? 그것은 '비위상적 최적화(Topology Optimization)'의 결과다. AI는 불필요한 재료를 덜어내고 구조적 강도를 최대화하는 과정에서 자연(Nature)의 효율성을 닮아간다. 건축 역시 마찬가지다. 직선과 직각으로 이루어진 모더니즘의 도그마는 깨졌다. AI가 제안하는 건축은 에너지를 덜 쓰고, 공기를 더 잘 순환시키며, 구조적으로 더 튼튼한 '바이오미미크리(Biomimicry)'의 형태를 띤다.
                </p>

                <h2 className="text-3xl font-sans font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-indigo-500 mb-8">
                    2. 도시의 디지털 트윈과 시뮬레이션
                </h2>
                <p className="mb-6">
                    생성형 건축은 개별 건물을 넘어 도시 전체로 확장된다. '디지털 트윈(Digital Twin)' 기술은 현실의 도시를 가상 공간에 완벽하게 복제한다. 싱가포르와 같은 스마트 시티는 이미 도시 전체를 시뮬레이션하여 교통 흐름을 제어하고 에너지를 관리한다.
                </p>
                <p className="mb-6">
                    여기서 AI는 '예지 능력'을 발휘한다. 새로운 고층 빌딩이 들어섰을 때 바람길이 어떻게 바뀔지, 2050년 해수면이 상승했을 때 도시 인프라가 어떻게 타격을 입을지를 미리 시뮬레이션한다. 건축가는 이제 직관에 의존하는 예술가가 아니라, 도시라는 거대한 시스템의 매개변수(Parameter)를 조율하는 '시스템 엔지니어'가 되어야 한다. 우리는 벽돌을 쌓는 것이 아니라, 데이터를 쌓아 도시의 미래를 코딩하고 있는 것이다.
                </p>

                <blockquote className="border-l-4 border-indigo-500 pl-6 py-2 my-12 bg-white/5 rounded-r-xl italic">
                    "가장 완벽한 건축물은 자연이다. AI는 우리에게 자연의 설계 방식을 가르쳐주는 스승이다." - 네리 옥스만(Neri Oxman)
                </blockquote>

                <h2 className="text-3xl font-sans font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-500 mb-8">
                    3. 개인화된 공간의 탄생
                </h2>
                <p className="mb-6">
                    르 코르뷔지에가 꿈꾸었던 '살기 위한 기계'로서의 아파트는 효율적이었지만 획일적이었다. 하지만 생성형 AI는 대량 생산의 효율성을 유지하면서도 극도의 개인화를 가능하게 한다. '매스 커스터마이제이션(Mass Customization)'이 건축에도 적용되는 것이다.
                </p>
                <p className="mb-6">
                    미래의 주거 소비자는 평면도를 보고 고르는 것이 아니라, 자신의 라이프스타일 데이터를 입력한다. "나는 아침 햇살을 받으며 요가하는 것을 좋아하고, 저녁에는 영화를 볼 수 있는 어두운 공간이 필요해." AI는 이 요구사항을 분석하여 구조, 채광, 재질이 완벽하게 개인화된 주거 공간을 생성하고, 로봇 팔과 3D 프린터가 이를 즉석에서 시공한다. 건축은 이제 고정된 부동산(Real Estate)이 아니라 사용자 반응형 플랫폼이 된다.
                </p>
                <p className="mb-12">
                    더 나아가 '가변형 건축'의 시대가 온다. 센서와 액추에이터가 내장된 스마트 소재는 AI의 통제하에 실시간으로 형태를 바꾼다. 파티를 열 때는 거실이 넓어지고, 잠을 잘 때는 침실이 아늑해진다. 공간은 정지된 배경이 아니라, 거주자와 상호작용하며 숨 쉬는 유기체가 되는 것이다.
                </p>

                <h2 className="text-3xl font-sans font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 mb-8">
                    결론: 공존을 위한 설계
                </h2>
                <p className="mb-6">
                    AI가 건축가를 대체할 것인가? 이 질문은 지루하다. 카메라는 화가를 대체하지 않았고, 화가가 '재현'에서 벗어나 '표현'의 영역으로 나아가게 했다. AI 역시 건축가를 단순 반복적인 도면 작업과 계산에서 해방시킬 것이다.
                </p>
                <p className="mb-6">
                    건축가의 역할은 이제 '무엇을 지을 것인가(What)'를 넘어 '왜 지어야 하는가(Why)'에 대한 철학적 질문을 던지는 것으로 이동한다. 기후 위기 시대에 지속 가능한 공존을 위한 공간, 소외된 이들을 위한 포용적 도시, 기술과 인간성이 조화를 이루는 환경. 이것은 연산(Computation)만으로는 해결할 수 없는 인문학적 과제다.
                </p>
                <p className="mb-12">
                    우리는 기술이 주는 무한한 가능성의 도구를 손에 쥐었다. 이제 그 도구로 어떤 미래를 조각할 것인지는, 알고리즘이 아닌 우리의 의지에 달려 있다.
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
