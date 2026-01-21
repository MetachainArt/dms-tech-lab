"use client";

import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, Clock, Calendar, Share2, Bookmark, Brain, History } from "lucide-react";
import Link from "next/link";
import NeuralBackground from "@/components/ui/NeuralBackground";

export default function ArtificialMemoryPage() {
  return (
    <main className="w-full min-h-screen bg-[#050B1B] text-white font-poppins selection:bg-amber-500 selection:text-black">
      
      <motion.div 
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-amber-500 via-orange-500 to-yellow-500 origin-left z-50"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: false }} 
      />

      <section className="relative w-full h-[70vh] flex flex-col justify-end pb-20 px-6 overflow-hidden">
        <div className="absolute inset-0 z-0">
             <div className="absolute inset-0 bg-gradient-to-t from-[#050B1B] via-[#050B1B]/40 to-transparent z-10" />
             <img 
                src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2672&auto=format&fit=crop" 
                alt="Memory Network"
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
                    <span className="px-3 py-1 rounded-full bg-amber-500/20 text-amber-400 text-xs font-bold border border-amber-500/30">
                        Neuro-Tech
                    </span>
                    <span className="flex items-center text-gray-400 text-sm">
                        <Calendar className="w-4 h-4 mr-2" /> 2026. 01. 03
                    </span>
                    <span className="flex items-center text-gray-400 text-sm">
                        <Clock className="w-4 h-4 mr-2" /> 28 min read
                    </span>
                </div>

                <h1 className="text-4xl md:text-7xl font-bold leading-tight mb-8">
                    실재하지 않는 기억:<br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-orange-400 to-yellow-400">
                        AI와 노스탤지어
                    </span>
                </h1>

                <p className="text-xl text-gray-300 max-w-2xl leading-relaxed italic border-l-4 border-amber-500 pl-6">
                    "우리는 경험한 적 없는 과거를 그리워할 수 있는가? <br/>
                    합성된 기억(Synthetic Memory)이 인간의 감정을 해킹한다."
                </p>
            </motion.div>
        </div>
      </section>

      <section className="relative px-6 py-20">
        <div className="max-w-3xl mx-auto">
            <article className="prose prose-lg prose-invert prose-p:text-gray-300 prose-headings:text-white max-w-none font-serif">
                <p className="lead text-2xl text-white font-sans font-medium mb-12 leading-relaxed">
                    '아네모이아(Anemoia)'. 존 쾨닝(John Koenig)이 만든 '슬픔의 사전'에 등장하는 단어로, "경험하지 못한 시대에 대한 향수"를 뜻한다. 1990년대생이 1970년대의 시티팝을 들으며 네온 사인 가득한 도쿄의 밤거리를 그리워하는 감정이 그 예다. AI 기술은 이 미묘한 감정을 대량 생산 가능한 공산품으로 만들었다. 클릭 한 번으로 우리는 빅토리아 시대 런던의 안개 낀 골목이나, 사이버펑크 서울의 뒷골목을 '사진'으로 생성해낸다. 이 이미지들은 너무나 구체적이고 생생해서, 마치 내 전생의 기억인 양 뇌각을 자극한다. 이것은 단순한 이미지가 아니다. 이것은 '합성된 기억(Synthetic Memory)'이다.
                </p>

                <div className="my-16 p-8 bg-amber-900/10 border border-amber-500/20 rounded-2xl">
                    <History className="w-12 h-12 text-amber-500 mb-4" />
                    <h3 className="text-2xl font-bold font-sans text-amber-200 mb-4">Mandela Effect & AI Fabrication</h3>
                    <p className="text-gray-300">
                        '만델라 효과'는 대중의 집단 기억이 실제 역사와 다르게 왜곡되는 현상을 말한다. AI 시대, 이 현상은 가속화된다. 2023년, 프란치스코 교황이 명품 패딩을 입은 AI 이미지가 바이럴 되었을 때, 수많은 사람이 그것을 진짜 뉴스로 믿었다. 이미지가 기억을 지배한 것이다. 미래의 아이들은 교과서의 흐릿한 흑백 사진 대신, AI가 복원하고 채색하고 4K로 업스케일링한 '가공된 역사'를 진짜라고 믿게 될지도 모른다. 진실(Fact)보다 더 진짜 같은 허구(Fiction)가 우리의 과거를 덮어쓰기 하고 있다.
                    </p>
                </div>

                <h2 className="text-3xl font-sans font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-yellow-500 mb-8">
                    1. 개인적 상실의 기술적 치유: 디지털 강령술
                </h2>
                <p className="mb-6">
                    기술은 죽음과 이별을 다루는 방식에 혁명을 일으키고 있다. 넷플릭스 시리즈 &lt;블랙 미러&gt;의 에피소드 'Be Right Back'이 현실이 되었다. 'Project December'나 'HereAfter AI' 같은 서비스는 고인의 생전 문자 메시지, 이메일, 음성 데이터를 학습하여 사후에도 대화할 수 있는 AI 챗봇(Griefbot)을 제공한다. 유족들은 이 챗봇을 통해 못다 한 작별 인사를 하거나, 그리움을 달랜다.
                </p>
                <p className="mb-6">
                     더 나아가 'Deep Nostalgia' 같은 기술은 돌아가신 부모님의 젊은 시절 사진 속 얼굴을 움직이게 만든다. 멈춰 있던 흑백 사진 속 아버지가 눈을 깜빡이고 미소를 짓는 순간, 자식들의 가슴은 무너져 내린다. 이것은 분명 강력한 위로다. 하지만 심리학자들은 경고한다. 이것이 건강한 애도(Mourning)의 과정을 방해하고, 떠난 이를 보내주지 못하는 병적인 집착(Pathological Grief)을 유발할 수 있다고. 죽음은 삶의 끝맺음이다. 하지만 디지털 세계에서 죽음은 그저 '오프라인 상태'로의 전환일 뿐이다. 영생(Immortality)을 약속하는 기술은 축복인가, 아니면 끝없는 고통의 연장인가?
                </p>

                <h2 className="text-3xl font-sans font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-500 mb-8">
                    2. 데이터로 절인 기억: 알고리즘적 회상
                </h2>
                <p className="mb-6">
                    우리의 뇌는 기억을 능동적으로 재구성한다. 나쁜 기억은 흐릿해지고, 좋은 기억은 미화된다. 이것은 인간이 정신 건강을 유지하는 방어 기제다. 하지만 스마트폰 시대의 기억은 다르다. 우리의 추억은 뇌 속 해마(Hippocampus)가 아니라 클라우드 데이터센터의 SSD에 저장된다. 그리고 그 기억의 소환 권한은 내가 아닌 알고리즘이 쥐고 있다.
                </p>
                <p className="mb-6">
                    구글 포토와 아이폰의 "3년 전 오늘" 기능은 불쑥불쑥 과거의 사진을 들이민다. 그것은 전 애인과의 행복했던 한때일 수도 있고, 잊고 싶었던 실패의 기록일 수도 있다. 알고리즘은 맥락(Context)을 모른다. 그저 얼굴 인식률이 높고 노출이 잘 된 사진을 '중요한 추억'으로 분류할 뿐이다. AI가 선택하지 않은 사진, B타입 컷들은 디지털 심연 속으로 사라진다.
                </p>
                <p className="mb-6">
                    이 '알고리즘적 큐레이션'은 우리의 정체성을 성형한다. SNS에 올리기 좋은 화려한 순간들만이 '나의 삶'으로 기록되고, 평범하고 지루한 일상은 삭제된다. 데이터로 남지 않은 삶은 기억되지 않는 시대. 우리는 스스로 기억하는가, 아니면 거대 기업의 알고리즘에 의해 기억을 '당하고' 있는가? 망각할 권리(Right to be Forgotten) 반대편에는, '기록되지 않을 권리'와 '내 방식대로 기억할 권리'에 대한 투쟁이 기다리고 있다.
                </p>

                <div className="border-t border-white/10 pt-12 mt-20">
                     <p className="text-xl text-gray-200 font-medium">
                        "기억은 이제 개인의 내밀한 서사가 아니다. 그것은 데이터베이스의 쿼리 결과값이자, 구독형 서비스(SaaS) 상품이 되었다. 우리는 자신의 과거마저 월 결제로 구독해야 하는 시대를 살게 될지도 모른다."
                     </p>
                </div>
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
