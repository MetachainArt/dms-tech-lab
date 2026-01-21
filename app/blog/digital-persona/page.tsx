"use client";

import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, Clock, Calendar, Share2, Bookmark, User, Fingerprint } from "lucide-react";
import Link from "next/link";
import NeuralBackground from "@/components/ui/NeuralBackground";

export default function DigitalPersonaPage() {
  return (
    <main className="w-full min-h-screen bg-[#050B1B] text-white font-poppins selection:bg-pink-500 selection:text-white">
      
      <motion.div 
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-pink-500 via-rose-500 to-red-500 origin-left z-50"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: false }} 
      />

      <section className="relative w-full h-[70vh] flex flex-col justify-end pb-20 px-6 overflow-hidden">
        <div className="absolute inset-0 z-0">
             <div className="absolute inset-0 bg-gradient-to-t from-[#050B1B] via-[#050B1B]/40 to-transparent z-10" />
             <img 
                src="https://images.unsplash.com/photo-1617791160536-598cf32026fb?q=80&w=2564&auto=format&fit=crop" 
                alt="Digital Human"
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
                    <span className="px-3 py-1 rounded-full bg-pink-500/20 text-pink-400 text-xs font-bold border border-pink-500/30">
                        Virtual Being
                    </span>
                    <span className="flex items-center text-gray-400 text-sm">
                        <Calendar className="w-4 h-4 mr-2" /> 2026. 01. 02
                    </span>
                    <span className="flex items-center text-gray-400 text-sm">
                        <Clock className="w-4 h-4 mr-2" /> 30 min read
                    </span>
                </div>

                <h1 className="text-4xl md:text-7xl font-bold leading-tight mb-8">
                    디지털 페르소나:<br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-rose-400 to-red-400">
                        가상 인플루언서의 시대
                    </span>
                </h1>

                <p className="text-xl text-gray-300 max-w-2xl leading-relaxed italic border-l-4 border-pink-500 pl-6">
                    "가짜가 진짜보다 더 진짜 같을 때, <br/>
                    우리는 '자아'를 어떻게 정의해야 하는가?"
                </p>
            </motion.div>
        </div>
      </section>

      <section className="relative px-6 py-20">
        <div className="max-w-3xl mx-auto">
            <article className="prose prose-lg prose-invert prose-p:text-gray-300 prose-headings:text-white max-w-none font-serif">
                <p className="lead text-2xl text-white font-sans font-medium mb-12 leading-relaxed">
                    2016년, 캘리포니아의 한 패션 파티에 19세의 브라질계 미국인 모델 '릴 미켈라(Lil Miquela)'가 등장했다. 주근깨 가득한 얼굴, 뱅 헤어스타일, 그리고 힙한 스트릿 패션. 그녀는 인스타그램 팔로워 300만을 거느리고 샤넬, 프라다의 모델이 되었다. 하지만 그녀는 실존하지 않는다. 그녀는 0과 1로 이루어진 코드 덩어리다. 로지(Rozy), 이마(Imma), 슈두(Shudu)... 지금 전 세계는 '버추얼 휴먼(Virtual Human)' 열풍에 휩싸여 있다. 불과 몇 년 전만 해도 '불쾌한 골짜기(Uncanny Valley)'의 늪에 빠져 대중의 외면을 받았던 그들이, 어떻게 인간보다 더 영향력 있는 셀러브리티가 되었을까? 그리고 이 디지털 존재들은 우리에게 '인간이란 무엇인가'라는 철학적 질문을 던지고 있다.
                </p>

                <div className="my-16 grid grid-cols-2 gap-4">
                    <div className="aspect-[3/4] rounded-2xl overflow-hidden relative">
                        <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1000&auto=format&fit=crop" className="object-cover w-full h-full grayscale hover:grayscale-0 transition-all duration-500" alt="Human Portrait" />
                         <div className="absolute bottom-4 left-4 text-xs font-bold bg-black/50 px-2 py-1 rounded">Organic</div>
                    </div>
                    <div className="aspect-[3/4] rounded-2xl overflow-hidden relative">
                        <img src="https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?q=80&w=1000&auto=format&fit=crop" className="object-cover w-full h-full grayscale hover:grayscale-0 transition-all duration-500" alt="Virtual Portrait" />
                        <div className="absolute bottom-4 left-4 text-xs font-bold bg-pink-500/50 px-2 py-1 rounded">Synthetic</div>
                    </div>
                </div>

                <h2 className="text-3xl font-sans font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-red-500 mb-8">
                    1. 정체성의 유동성: 리퀴드 아이덴티티(Liquid Identity)
                </h2>
                <p className="mb-6">
                    지그문트 바우만은 현대 사회를 '액체 근대(Liquid Modernity)'라고 정의했다. 모든 것이 고정되지 않고 끊임없이 흐른다는 것이다. 디지털 페르소나는 이 개념의 결정체다. 현실의 인간은 육체라는 감옥에 갇혀 있다. 우리는 태어난 성별, 인종, 외모를 바꿀 수 없거나, 바꾸는 데 엄청난 대가를 치러야 한다. 하지만 메타버스 안에서 정체성은 악세사리처럼 교체 가능한 것이 된다.
                </p>
                <p className="mb-6">
                    가상 인플루언서는 늙지 않는다. 그들은 피로를 모르며, 스캔들이나 범죄를 저지르지도 않는다(물론 그들을 조종하는 운영자가 실수하지 않는다면). 릴 미켈라는 뮤지션이자 모델이면서, 동시에 사회 운동가로 활동한다. 그녀의 정체성은 A/B 테스트를 통해 대중이 가장 선호하는 형태로 실시간 업데이트된다. 이것은 '자아'가 더 이상 내면의 본질적인 무엇이 아니라, 외부의 요구에 따라 구성되는 '퍼포먼스'가 되었음을 시사한다. 우리는 이제 '나는 누구인가'를 묻는 대신, '나는 오늘 누구로 보이고 싶은가'를 묻는 시대로 진입했다.
                </p>

                <h2 className="text-3xl font-sans font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-orange-500 mb-8">
                    2. 완벽함의 폭력과 '결함 마케팅'
                </h2>
                <p className="mb-6">
                    소셜 미디어는 본질적으로 '편집된 자아'를 보여주는 공간이다. 우리는 가장 행복한 순간, 가장 잘 나온 사진만을 공유한다. 가상 인플루언서는 이 편집증의 끝판왕이다. 그들의 피부에는 모공이 없고, 비율은 황금비율이며, 삶은 럭셔리하다. 이 '초현실적 완벽함(Hyper-realistic Perfection)'은 인간에게 박탈감을 준다. 아무리 노력해도 닿을 수 없는 알고리즘적 미(美)의 기준은 현실의 몸을 초라하게 만든다.
                </p>
                <p className="mb-6">
                    흥미로운 지점은, 이 완벽함이 오히려 '비인간적'이라는 비판을 받자, 제작사들이 의도적으로 '결함(Flaw)'을 주입하기 시작했다는 것이다. 릴 미켈라의 치열은 살짝 벌어져 있고(Diastema), 주근깨가 가득하다. 가상의 캐릭터에게 '실수하는 모습', '우울해하는 모습'을 연출시켜 인간적 공감을 유도한다. 심지어 남자친구와 헤어지고 슬퍼하는 게시물을 올리기도 한다. 가짜가 사랑받기 위해 진짜의 고통을 흉내 내는 이 아이러니. 이것은 마케팅의 고도화인가, 아니면 감정의 기만인가?
                </p>

                <h2 className="text-3xl font-sans font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-yellow-500 mb-8">
                    3. AI 네이티브 세대의 친구
                </h2>
                <p className="mb-6">
                    알파 세대(Generation Alpha)에게 가상 존재는 낯선 대상이 아니다. 그들은 애초에 아이패드를 쥐고 태어났고, 로블록스에서 친구를 사귀며, AI 챗봇과 대화하는 것이 자연스럽다. 그들에게 친구의 '물리적 실체 여부'는 중요하지 않다. 중요한 것은 '상호작용(Interaction)'과 '정서적 연결'이다.
                </p>
                <p className="mb-6">
                    가상 인플루언서들은 단순한 이미지 모델을 넘어 차세대 AI와 결합하고 있다. 그들은 수백만 명의 팬과 동시에 1:1로 대화할 수 있다. 나의 이름을 불러주고, 나의 고민을 기억해주는 완벽한 친구. 영화 &lt;Her&gt;의 사만다가 시각적 형태를 입고 우리 곁으로 온 것이다. 이것은 고독한 현대인에게 위로가 될 수 있지만, 동시에 현실 관계의 단절을 가속화할 위험도 내포한다. 불편하고 부딪히는 진짜 관계 대신, 언제나 나에게 맞춰주는 알고리즘 관계에 중독되는 것이다.
                </p>

                <div className="border-t border-white/10 pt-12 mt-20">
                     <p className="text-xl text-gray-200 font-medium">
                        "디지털 페르소나는 거울이다. 그 속에는 영원한 젊음과 완벽함을 갈망하는 인간의 나르시시즘이 투영되어 있다. 우리는 그들을 만들었지만, 이제 그들이 우리를 정의하고 있다."
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
