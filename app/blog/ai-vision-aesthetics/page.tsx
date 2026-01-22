"use client";

import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, Clock, Calendar, Share2, Bookmark, Eye, Layers, User, Scan, Grid, Aperture } from "lucide-react";
import Link from "next/link";
import NeuralBackground from "@/components/ui/NeuralBackground";

export default function AIVisionPage() {
  return (
    <main className="w-full min-h-screen bg-[#050B1B] text-white font-poppins selection:bg-cyan-500 selection:text-black">
      
      <motion.div 
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 origin-left z-50"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: false }} 
      />

      <section className="relative w-full h-[70vh] flex flex-col justify-end pb-20 px-6 overflow-hidden">
        <div className="absolute inset-0 z-0">
             <div className="absolute inset-0 bg-gradient-to-t from-[#050B1B] via-[#050B1B]/40 to-transparent z-10" />
             <div className="absolute inset-0 bg-gradient-to-r from-[#050B1B]/80 via-transparent to-transparent z-10" />
             <img 
                src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2670&auto=format&fit=crop" 
                alt="Cyberpunk Eye"
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
                    <span className="px-3 py-1 rounded-full bg-cyan-500/20 text-cyan-400 text-xs font-bold border border-cyan-500/30">
                        Visual Tech
                    </span>
                    <span className="flex items-center text-gray-400 text-sm">
                        <Calendar className="w-4 h-4 mr-2" /> 2026. 01. 01
                    </span>
                    <span className="flex items-center text-gray-400 text-sm">
                        <Clock className="w-4 h-4 mr-2" /> 25 min read
                    </span>
                </div>

                <h1 className="text-4xl md:text-7xl font-bold leading-tight mb-8">
                    AI가 보는 세상:<br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400">
                        컴퓨터 비전의 미학
                    </span>
                </h1>

                <p className="text-xl text-gray-300 max-w-2xl leading-relaxed italic border-l-4 border-cyan-500 pl-6">
                    "기계의 눈은 인간이 놓치는 스펙트럼을 본다. <br/>
                    그 차가운 시선 속에 숨겨진 새로운 아름다움에 대하여."
                </p>
            </motion.div>
        </div>
      </section>

      <section className="relative px-6 py-20">
        <div className="max-w-3xl mx-auto">
            <article className="prose prose-lg prose-invert prose-p:text-gray-300 prose-headings:text-white max-w-none font-serif">
                <p className="lead text-2xl text-white font-sans font-medium mb-12 leading-relaxed">
                    인간의 시각은 진화생물학적 산물이다. 우리는 아프리카 사바나 초원에서 포식자를 식별하고, 덤불 속에 숨은 익은 과일을 찾아내기 위해 수백만 년 동안 시각 시스템을 최적화해왔다. 우리의 눈은 생존에 필요한 정보만을 선별적으로 받아들이며, 뇌는 그 정보를 '감정'과 '기억'이라는 필터를 통해 주관적으로 해석한다.
                    <br/><br/>
                    그러나 AI, 즉 기계의 시각(Machine Vision)은 전혀 다른 기원을 가진다. 그것은 실리콘 칩 위에서 수학적 행렬 연산(Matrix Multiplication)과 확률분포를 통해 탄생했다. 생존본능이 거세된 이 차가운 눈은, 인간이 결코 볼 수 없는 세상의 이면을 응시한다. 그것은 '의미'를 찾지 않는다. 오직 '패턴'과 '구조'만을 집요하게 파헤칠 뿐이다.
                </p>

                <div className="my-16 relative rounded-2xl overflow-hidden border border-white/10 group">
                    <img src="https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=2670&auto=format&fit=crop" className="w-full object-cover transform group-hover:scale-105 transition-transform duration-700" alt="Matrix Code" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent opacity-80" />
                    <div className="absolute bottom-0 left-0 right-0 p-8">
                        <div className="font-mono text-sm space-y-2">
                             <p className="text-cyan-400">&gt; Scanning Target... <span className="text-white">Success</span></p>
                             <p className="text-blue-400">&gt; Object Detection: <span className="text-white">Humanoid [99.8%]</span></p>
                             <p className="text-purple-400">&gt; Semantic Segmentation: <span className="text-white">Layer 4 Complete</span></p>
                        </div>
                    </div>
                </div>

                <h2 className="text-3xl font-sans font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 mb-8">
                    1. 픽셀 너머의 진실: 해체와 재구성
                </h2>
                <p className="mb-6">
                    우리가 '사과'를 볼 때, 뇌는 즉각적으로 '둥글고 빨간 과일'이라는 전체적인 관념(Gestalt)을 떠올린다. 이 과정은 너무나 순식간에 일어나서 우리는 그 메커니즘을 인지하지 못한다. 하지만 컴퓨터 비전에게 사과는 [255, 0, 0]의 RGB 값을 가진 수십만 개의 픽셀 데이터 집합일 뿐이다.
                </p>
                <p className="mb-6">
                    초기 합성곱 신경망(CNN)은 이미지를 이해하기 위해 마치 입체파 화가 피카소처럼 대상을 수천 개의 조각으로 해체했다. 첫 번째 레이어는 선과 경계선을 찾고, 두 번째 레이어는 질감과 패턴을 인식하며, 깊은 레이어로 갈수록 눈, 코, 바퀴 같은 복잡한 형상을 조합해낸다. 이 과정에서 탄생한 구글의 'Deep Dream' 이미지를 기억하는가? 개(Dog)의 눈과 코가 무수히 반복되는 그 기괴하고 사이키델릭한 이미지는, 역설적으로 기계가 세상을 어떻게 '이해'하려고 노력하는지를 보여주는 처절한 기록이다. 그것은 인간의 시각을 어설프게 모방하려다 실패한 결과물이 아니라, 기계만이 가질 수 있는 독자적인 미학적 관점, 즉 '알고리즘적 환각(Algorithmic Hallucination)'의 발현이었다.
                </p>
                <p className="mb-6">
                    기계는 대상을 전체로 느끼지 않고 성분으로 분석한다. 이 환원주의적 시각은 인간이 감정이나 편견 때문에 놓치는 디테일을 포착한다. 렘브란트의 그림을 픽셀 단위로 분석하여 붓터치의 미세한 리듬을 수학적으로 재현하거나(The Next Rembrandt 프로젝트), 위성 사진에서 육안으로는 식별 불가능한 고대 유적의 흔적을 찾아내는 것이 그 증거다. 기계의 눈은 '의미'를 모르는 대신 '본질적인 구조'를 완벽하게 파악한다.
                </p>

                <h2 className="text-3xl font-sans font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 mb-8 mt-16">
                    2. 데이터의 편향과 시각적 권력의 재편
                </h2>
                <p className="mb-6">
                    "본다는 것은 권력이다." 프랑스 철학자 미셸 푸코는 '판옵티콘(Panopticon)'을 통해 시선과 권력의 관계를 설명했다. AI 시대에 이 시각적 권력은 더욱 은밀하고 강력해졌다. 전 세계 도시에 깔린 10억 대의 CCTV에 탑재된 안면 인식 AI는 군중 속에서 수배자를 0.1초 만에 찾아낸다. 중국의 톈왕(天網) 시스템은 14억 인구의 동선을 실시간으로 추적한다. 신(God)만이 가졌던 '전지적 시점'을 이제 알고리즘이 갖게 된 것이다.
                </p>
                <p className="mb-6">
                    하지만 이 기계의 눈은 공정하지 않다. AI가 학습하는 데이터셋(Dataset)은 인간이 만든 사회의 축소판이기 때문이다. 만약 백인 남성 데이터가 주를 이루는 'ImageNet'으로 학습된 AI라면, 흑인 여성의 얼굴을 제대로 인식하지 못하거나 심지어 고릴라로 오분류하는 끔찍한 윤리적 오류를 범한다. 이것은 단순한 기술적 버그가 아니다. 이것은 '알고리즘적 편향(Algorithmic Bias)'이라는 이름의 새로운 인종차별이다. 기계의 눈은 데이터를 큐레이션한 인간의 편견을 그대로, 아니 더욱 증폭시켜 반영한다.
                </p>
                <p className="mb-6">
                     이에 저항하는 예술가들은 컴퓨터 비전의 취약점을 파고든다. 아담 하비(Adam Harvey)의 'CV Dazzle' 프로젝트는 기하학적이고 난해한 메이크업과 헤어스타일로 안면 인식 알고리즘을 무력화한다. 이는 기계가 인간을 인식하는 방식(눈의 위치, 콧대의 음영 등 대조비)을 역이용하여, 기계의 눈에는 '인간이 아닌 데이터 노이즈'로 보이게 만드는 디지털 위장술(Camouflage)이다. 이것은 감시 사회에 대한 저항이자, 기계가 보는 방식과 인간이 보는 방식의 간극을 예술적으로 드러내는 시위다.
                </p>

                <h2 className="text-3xl font-sans font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500 mb-8 mt-16">
                    3. 초월적 시각: 불가시성(Invisibility)의 가시화
                </h2>
                <p className="mb-6">
                    이제 AI는 인간 시각의 한계를 넘어선다. 자율주행차의 라이다(LiDAR) 센서는 칠흑 같은 어둠 속에서도 사물과의 거리를 3차원 점군(Point Cloud) 데이터로 인지하고, 농업용 드론의 하이퍼스펙트럼 카메라는 과일의 당도나 숲의 건강 상태를 인간이 볼 수 없는 파장의 색으로 보여준다. 이는 더 이상 '본다(Seeing)'는 수동적 개념에 머무르지 않는다. 이것은 능동적인 '센싱(Sensing)'이자, 차원 높은 '해석(Interpreting)'이다.
                </p>
                <p className="mb-6">
                    이 '증강된 시각(Augmented Vision)'은 예술의 지평을 넓힌다. 레픽 아나돌(Refik Anadol) 같은 미디어 아티스트는 도시의 바람, 온도, 소음, Wi-Fi 신호 데이터를 AI에 입력하여 춤추는 유체 역학적 조각으로 변환한다. 그는 보이지 않는 데이터의 흐름을 시각화함으로써, 우리가 매일 살고 있지만 인지하지 못했던 도시의 숨겨진 리듬과 호흡을 보여준다. 이것은 기계가 인간에게 선사하는 새로운 공감각적 체험이다.
                </p>
                <p className="mb-6">
                    또한, 천체물리학에서 AI는 블랙홀의 이미지를 재구성하는 데 결정적인 역할을 했다. 지구 크기만 한 가상의 망원경(EHT)이 수집한 불완전하고 희미한 데이터를 AI가 보간(Interpolation)하고 연결하여 인류 최초의 블랙홀 사진을 완성했다. 우리는 기계의 도움 없이는 우주의 심연조차 제대로 볼 수 없는 존재가 되었다. 기계의 눈은 이제 인간의 눈을 대체하는 것이 아니라, 인간의 눈을 우주의 끝까지 확장시키는 망원경이자, 원자의 세계까지 파고드는 현미경이 되었다.
                </p>

                <div className="border-t border-white/10 pt-12 mt-20">
                     <p className="text-xl text-gray-200 font-medium italic text-center px-8">
                        "기계와 함께 본다는 것은, 인간 중심주의적 시각의 감옥에서 탈출하는 것이다. 그것은 객관적이고 차가운, 그러나 동시에 무한히 확장된 비인간적(Non-human) 아름다움의 세계로 나가는 문이다."
                     </p>
                </div>
            </article>

            {/* Reedo Author Component */}
             <div className="mt-24 p-8 rounded-2xl bg-[#0A1124] border border-white/10 flex items-center gap-6 shadow-2xl relative overflow-hidden group hover:border-cyan-500/30 transition-colors">
                 <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative shrink-0">
                    <img 
                        src="/reedo-profile-high.png" 
                        alt="Reedo"
                        className="w-24 h-24 rounded-full object-cover border-2 border-white/10 grayscale group-hover:grayscale-0 transition-all duration-500"
                    />
                </div>
                <div className="flex-grow relative z-10">
                    <h3 className="text-xl font-bold text-white mb-1 group-hover:text-cyan-400 transition-colors">Written by Reedo</h3>
                    <p className="text-gray-400 text-sm mb-2">Global Field Engineer & Automation Architect</p>
                    <p className="text-gray-500 text-xs leading-relaxed max-w-md">
                        보이는 것이 전부는 아닙니다. 데이터의 심해에서 건져 올린 인사이트로 세상을 다시 봅니다.
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
