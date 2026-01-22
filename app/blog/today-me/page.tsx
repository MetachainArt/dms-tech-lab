"use client";

import { motion } from "framer-motion";
import { ArrowLeft, Clock, Calendar, Share2, Bookmark, Coffee, Moon, Terminal } from "lucide-react";
import Link from "next/link";
import NeuralBackground from "@/components/ui/NeuralBackground";

export default function TodayMePage() {
  return (
    <main className="w-full min-h-screen bg-[#050B1B] text-white font-poppins selection:bg-amber-500 selection:text-white">
      
      {/* Soft Ambient Background */}
      <div className="fixed inset-0 z-0 pointer-events-none">
           <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-amber-500/10 rounded-full blur-[120px]" />
           <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-[120px]" />
      </div>

      <motion.div 
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-amber-500 via-orange-500 to-rose-500 origin-left z-50"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: false }} 
      />

      {/* Hero Section */}
      <section className="relative w-full h-[60vh] flex flex-col justify-end pb-20 px-6 overflow-hidden">
        <div className="absolute inset-0 z-0">
             <div className="absolute inset-0 bg-gradient-to-t from-[#050B1B] via-[#050B1B]/60 to-transparent z-10" />
             <img 
                src="/images/series/post_engineer_diary.png" 
                alt="Engineer Desk"
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
                    <span className="px-3 py-1 rounded-full bg-amber-500/20 text-amber-400 text-xs font-bold border border-amber-500/30">
                        Essay
                    </span>
                    <span className="flex items-center text-gray-400 text-sm">
                        <Calendar className="w-4 h-4 mr-2" /> 2026. 01. 22
                    </span>
                </div>

                <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-8">
                    새벽 3시의 디버깅:<br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-orange-200 to-rose-200">
                        침묵 속의 논리
                    </span>
                </h1>

                <p className="text-xl text-gray-300 max-w-2xl leading-relaxed italic border-l-4 border-amber-500 pl-6">
                    "세상이 잠들 때, 엔지니어의 세계는 비로소 깨어난다."
                </p>
            </motion.div>
        </div>
      </section>

      {/* Content Body */}
      <section className="relative px-6 py-20">
        <div className="max-w-3xl mx-auto">
            <article className="prose prose-lg prose-invert prose-p:text-gray-300 prose-headings:text-white max-w-none font-serif">
                
                <p className="lead text-2xl text-white/90 font-sans font-medium mb-12">
                    커서가 깜빡인다. 적막한 방 안, 들리는 것은 기계식 키보드의 타건음과 팬이 돌아가는 미세한 소음뿐이다.
                </p>

                <p className="mb-6">
                    새벽 3시. 모두가 꿈을 꾸는 시간이지만, 개발자에게는 가장 명료한 논리의 시간이다. 낮 동안 쏟아지던 슬랙 알림도, 끝없는 회의도 없다. 오직 나와 코드, 그리고 모니터 속의 푸른 빛만이 존재한다.
                </p>

                <div className="my-12 p-8 bg-black/40 rounded-xl border border-white/5 flex items-center justify-center gap-8">
                    <Coffee className="w-12 h-12 text-amber-500/50" />
                    <div className="h-16 w-px bg-white/10" />
                    <Terminal className="w-12 h-12 text-green-500/50" />
                </div>

                <p className="mb-6">
                    디버깅은 마치 범인을 찾는 형사의 수사와 같다. 로그를 뒤지고, 변수를 추적하고, 가설을 세운다. '왜 여기서 null이 뜨는 거지?' 수십 번의 실패 끝에 마침내 원인을 찾아냈을 때의 그 짜릿함. 꼬여있던 실타래가 스르륵 풀리는 그 순간의 쾌감은 겪어보지 않은 사람은 모른다.
                </p>
                
                <p className="mb-6">
                    가끔은 화면 너머의 세상이 비현실적으로 느껴진다. 0과 1로 이루어진 이 논리의 성이, 창밖의 불 꺼진 도시보다 더 견고하고 따뜻하게 느껴질 때가 있다.
                </p>

                <p className="mb-12">
                    커피가 식었다. 이제 마지막 커밋을 날리고 자야겠다. 내일 아침, 이 코드가 무사히 배포되어 누군가의 불편함을 해결해 주기를 바라며.
                    <br/><br/>
                    오늘도 밤을 새운 모든 동료들에게, silent push를 보낸다.
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
