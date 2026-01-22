"use client";

import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, Clock, Calendar, Share2, Bookmark, Camera, Aperture } from "lucide-react";
import Link from "next/link";
import NeuralBackground from "@/components/ui/NeuralBackground";

export default function AIPhotographyPage() {
  return (
    <main className="w-full min-h-screen bg-[#050B1B] text-white font-poppins selection:bg-purple-500 selection:text-white">
      
      {/* ProgressBar - Scroll Indicator */}
      <motion.div 
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 origin-left z-50"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: false }} 
      />

      {/* Hero Section */}
      <section className="relative w-full h-[70vh] flex flex-col justify-end pb-20 px-6 overflow-hidden">
        {/* Background Overlay */}
        <div className="absolute inset-0 z-0">
             <div className="absolute inset-0 bg-gradient-to-t from-[#050B1B] via-[#050B1B]/40 to-transparent z-10" />
             <div className="absolute inset-0 bg-gradient-to-r from-[#050B1B]/80 via-transparent to-transparent z-10" />
             <img 
                src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop" 
                alt="Abstract AI Art"
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
                    <span className="px-3 py-1 rounded-full bg-purple-500/20 text-purple-400 text-xs font-bold border border-purple-500/30">
                        Essay / Philosophy
                    </span>
                    <span className="flex items-center text-gray-400 text-sm">
                        <Calendar className="w-4 h-4 mr-2" /> 2026. 01. 04
                    </span>
                    <span className="flex items-center text-gray-400 text-sm">
                        <Clock className="w-4 h-4 mr-2" /> 8 min read
                    </span>
                </div>

                <h1 className="text-4xl md:text-7xl font-bold leading-tight mb-8">
                    AI 시대의 사진 예술이란?<br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-orange-400">
                        기록에서 생성으로의 전이
                    </span>
                </h1>

                <p className="text-xl text-gray-300 max-w-2xl leading-relaxed italic border-l-4 border-purple-500 pl-6">
                    "셔터를 누르는 순간, 우리는 시간을 박제한다. <br/>
                    하지만 프롬프트를 입력하는 순간, 우리는 존재하지 않던 시간을 창조한다."
                </p>
            </motion.div>
        </div>
      </section>

      {/* Content Body */}
      <section className="relative px-6 py-20">
        <div className="max-w-3xl mx-auto">
            
            {/* Introduction */}
            <article className="prose prose-lg prose-invert prose-p:text-gray-300 prose-headings:text-white max-w-none font-serif">
                
                <p className="lead text-2xl text-white font-sans font-medium mb-12 leading-relaxed">
                    사진(Photography)의 어원은 '빛(Photo)으로 그린 그림(Graphy)'이다. 1826년, 조제프 니세포르 니에프스가 첫 번째 사진을 남긴 이래, 거의 200년 동안 사진의 본질은 변하지 않았다. 그것은 렌즈 앞에 실존하는 피사체를 포착하는 '증명'의 행위였다. 그러나 생성형 AI의 등장은 이 오랜 정의를 송두리째 뒤흔들고 있다.
                </p>

                <div className="my-16 grid grid-cols-2 gap-4">
                    <div className="aspect-square rounded-2xl overflow-hidden relative group">
                        <img src="https://images.unsplash.com/photo-1542204165-65bf26472b9b?q=80&w=1000&auto=format&fit=crop" className="object-cover w-full h-full transform group-hover:scale-110 transition-transform duration-700" alt="Analog Camera" />
                        <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                            <span className="text-white font-bold">The Past: Capture</span>
                        </div>
                    </div>
                    <div className="aspect-square rounded-2xl overflow-hidden relative group">
                        <img src="https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?q=80&w=1000&auto=format&fit=crop" className="object-cover w-full h-full transform group-hover:scale-110 transition-transform duration-700" alt="AI Digital Art" />
                        <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                            <span className="text-white font-bold">The Future: Generate</span>
                        </div>
                    </div>
                </div>

                <h2 className="text-3xl font-sans font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 mb-8">
                    1. '결정적 순간'의 죽음과 부활
                </h2>
                <p className="mb-6">
                    앙리 카르티에 브레송이 말한 '결정적 순간(The Decisive Moment)'은 사진가의 직관과 찰나의 우연이 만나는 지점이었다. 기다림의 미학이자, 되돌릴 수 없는 시간의 불가역성에 대한 찬사였다. 필름 카메라 시절, 사진가는 36장의 필름 컷 수라는 물리적 제약 속에서 신중하게 셔터를 눌렀다.
                </p>
                <p className="mb-6">
                    하지만 Midjourney와 Stable Diffusion의 시대에 '순간'은 더 이상 기다리는 대상이 아니다. 그것은 무한히 생성되고, 변형되고, 반복될 수 있는 데이터적 재료가 되었다. 이제 결정적 순간은 셔터를 누르는 물리적 0.1초가 아니라, 수천 번의 Iteration(반복 생성) 끝에 마침내 의도에 부합하는 이미지를 건져 올리는 '선택의 순간'으로 이동했다.
                </p>
                <p className="mb-12">
                    이것을 과연 동일한 예술 형로 볼 수 있을까? 사진가가 발로 뛰어 찾아낸 풍경과, 프롬프트 엔지니어가 언어로 조탁해낸 풍경 사이에는 건널 수 없는 강이 존재하는가?
                </p>

                <h2 className="text-3xl font-sans font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-orange-500 mb-8">
                    2. 진실성의 위기: 보이지 않는 것을 찍다
                </h2>
                <blockquote className="border-l-4 border-pink-500 pl-6 py-2 my-8 bg-white/5 rounded-r-xl italic">
                    "사진은 거짓말을 하지 않는다. 하지만 거짓말쟁이들은 사진을 찍을 수 있다." - 루이스 하인
                </blockquote>
                <p className="mb-6">
                    전통적으로 사진은 다큐멘터리의 성격을 띠었다. 전쟁의 참상, 역사의 현장, 가족의 추억. 우리는 사진을 보며 "그곳에 그것이 있었음"을 의심하지 않았다. 이것이 롤랑 바르트가 말한 사진의 '노에마(Noeme)', 즉 '그것이-존재-했음'이다.
                </p>
                <p className="mb-6">
                    AI 이미지는 이 노에마를 정면으로 부정한다. 존재하지 않는 인물의 초상화, 일어난 적 없는 사건의 기록. 우리는 이제 눈에 보이는 이미지를 더 이상 '증거'로 채택할 수 없는 시대를 살고 있다. 이는 저널리즘과 법적 증거 능력에 심각한 도전을 제기한다.
                </p>
                <p className="mb-12">
                    역설적이게도, 이러한 '진실성의 상실'은 사진을 억압하던 '기록의 의무'로부터 해방시킨다. 사진은 비로소 완전한 추상과 상상의 영역으로 진입했다. 마치 19세기 사진의 등장으로 회화가 사실 묘사의 짐을 내려놓고 인상주의와 추상으로 나아갔던 것처럼, AI의 등장은 사진을 '재현'의 굴레에서 벗어나게 할지도 모른다.
                </p>

                <h2 className="text-3xl font-sans font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-yellow-400 mb-8">
                    3. 프롬프트그래피(Promptography): 새로운 장르의 탄생
                </h2>
                <p className="mb-6">
                    2023년 소니 월드 포토그래피 어워드에서 보리스 엘다크젠의 AI 생성 이미지가 크리에이티브 부문을 수상하며 큰 논란을 낳았다. 그는 수상을 거부하며 이렇게 말했다. "사진과 AI 이미지는 서로 다른 실체다. AI 이미지는 '프롬프트그래피'로 불려야 한다."
                </p>
                
                <div className="bg-[#1A1F36] p-8 rounded-2xl border border-purple-500/20 my-10 relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-4 opacity-10">
                        <Aperture size={120} />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-4 z-10 relative">💡 The New Workflow</h3>
                    <ul className="space-y-3 text-gray-300 z-10 relative">
                        <li className="flex gap-3">
                            <span className="text-purple-400 font-bold">1. Ideation:</span> 
                            <span>시각적 언어를 텍스트로 치환하는 상상력</span>
                        </li>
                        <li className="flex gap-3">
                            <span className="text-pink-400 font-bold">2. Generation:</span> 
                            <span>무작위성(Seed)과 통제(ControlNet) 사이의 줄타기</span>
                        </li>
                        <li className="flex gap-3">
                            <span className="text-orange-400 font-bold">3. Curation:</span> 
                            <span>수백 장의 결과물 중 단 하나를 선택하는 안목</span>
                        </li>
                    </ul>
                </div>

                <p className="mb-6">
                    '프롬프트그래피'는 기술적 숙련도(카메라 조작)보다 인문학적 소양(언어와 상상력)을 요구한다. 빛의 각도와 조리개 값을 계산하던 엔지니어링적 사고는, 어떤 화가 풍으로, 어떤 감정을 담아, 어떤 메타포를 사용할 것인가를 고민하는 디렉팅(Directing)적 사고로 전환된다. 이제 모든 사람은 잠재적 아티스트다. 하지만 모두가 훌륭한 아티스트가 되는 것은 아니다. 도구가 쉬워질수록, 결국 차이를 만드는 것은 '무엇을 표현할 것인가'하는 철학적 깊이이기 때문이다.
                </p>

                <h2 className="text-3xl font-sans font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 mb-8">
                    결론: 공존의 미학
                </h2>
                <p className="mb-6">
                    필름이 디지털로 전환될 때도 사람들은 '진정한 사진의 죽음'을 이야기했다. 하지만 디지털은 사진을 민주화했고 더 폭넓은 예술로 확장시켰다. AI 역시 마찬가지일 것이다.
                </p>
                <p className="mb-6">
                    인간이 땀 흘려 산 정상에 올라 찍은 풍경 사진의 '아우라'는 AI가 1초 만에 생성한 이미지로 대체될 수 없다. 그곳에는 작가의 고통, 시간, 그리고 숨결이 담겨 있기 때문이다. 반면, 인간의 물리적 한계를 뛰어넘는 초현실적인 상상력의 구현은 AI가 열어줄 새로운 지평이다.
                </p>
                <p className="mb-12">
                    우리는 카메라를 버릴 필요가 없다. 다만, 우리의 도구 상자에 '무한한 상상의 렌즈'를 하나 더 추가했을 뿐이다. 렌즈(Glass)를 통해 세상을 보는 자와, 프롬프트(Language)를 통해 세상을 짓는 자. 이 둘은 서로를 부정하는 것이 아니라, 예술이라는 거대한 바다에서 서로 다른 파도를 일으키며 공명할 것이다.
                </p>

            </article>

            {/* Author Bio */}
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

            {/* Next Read Suggestion */}
            <div className="mt-12 text-center">
                <p className="text-sm text-gray-500 mb-4">You might also like</p>
                <Link href="/blog/n8n-masterclass" className="inline-block group">
                    <span className="text-lg font-bold bg-clip-text text-transparent bg-gradient-to-r from-gray-200 to-gray-400 group-hover:from-purple-400 group-hover:to-pink-400 transition-all">
                        N8N 워크플로우 100% 활용하기 <ArrowRight className="inline-block w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform text-white/50" />
                    </span>
                </Link>
            </div>

        </div>
      </section>
    </main>
  );
}
