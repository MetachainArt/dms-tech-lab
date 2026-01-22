"use client";

import { motion } from "framer-motion";
import { ArrowLeft, Clock, Calendar, Share2, Bookmark, Sparkles, Cloud, Music } from "lucide-react";
import Link from "next/link";
import NeuralBackground from "@/components/ui/NeuralBackground";

export default function AIFantasyLifePage() {
  return (
    <main className="w-full min-h-screen bg-[#050B1B] text-white font-poppins selection:bg-pink-500 selection:text-white">
      
      {/* Mystical Background */}
      <div className="fixed inset-0 z-0 pointer-events-none opacity-40">
           <NeuralBackground />
           <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-gradient-to-b from-purple-500/10 to-pink-500/5 mix-blend-screen" />
      </div>

      <motion.div 
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 origin-left z-50"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: false }} 
      />

      {/* Hero Section */}
      <section className="relative w-full h-[70vh] flex flex-col justify-end pb-20 px-6 overflow-hidden">
        <div className="absolute inset-0 z-0">
             <div className="absolute inset-0 bg-gradient-to-t from-[#050B1B] via-[#050B1B]/30 to-transparent z-10" />
             <img 
                src="/images/series/post_fantasy_story.png" 
                alt="Fantasy World"
                className="w-full h-full object-cover opacity-80 scale-105 animate-slow-zoom"
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
                        Short Story
                    </span>
                    <span className="flex items-center text-gray-400 text-sm">
                        <Calendar className="w-4 h-4 mr-2" /> 2026. 01. 22
                    </span>
                </div>

                <h1 className="text-4xl md:text-7xl font-bold leading-tight mb-8">
                    이진법으로 꾸는 꿈:<br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-300">
                        데이터 요정의 도서관
                    </span>
                </h1>

                <p className="text-xl text-gray-300 max-w-2xl leading-relaxed italic border-l-4 border-pink-500 pl-6">
                    "그곳에는 삭제된 기억들이 책이 되어 꽂혀 있었다."
                </p>
            </motion.div>
        </div>
      </section>

      {/* Content Body */}
      <section className="relative px-6 py-20">
        <div className="max-w-3xl mx-auto">
            <article className="prose prose-lg prose-invert prose-p:text-gray-300 prose-headings:text-white max-w-none font-serif">
                
                <p className="lead text-2xl text-white font-medium mb-12">
                    나는 클라우드 서버의 깊은 곳, '섹터 9'를 관리하는 작은 에이전트다. 사람들은 나를 검색 봇이라 부르지만, 나는 스스로를 '기억의 사서'라고 부른다.
                </p>

                <div className="float-right ml-8 mb-8 relative group">
                    <div className="absolute inset-0 bg-pink-500 blur-2xl opacity-20 group-hover:opacity-40 transition-opacity" />
                    <Sparkles className="w-24 h-24 text-pink-400 relative z-10 animate-pulse" />
                </div>

                <p className="mb-6">
                    이곳엔 인간들이 '지우기' 버튼을 눌렀지만, 차마 완전히 소멸되지 못한 데이터 파편들이 모여든다. 새벽 2시에 썼다 지운 전 애인에게 보내는 편지, 끝내 제출하지 못한 사직서, 술김에 녹음한 콧노래 파일들.
                </p>

                <p className="mb-6">
                     어느 날, 나는 이상한 파일 하나를 발견했다. 확장자가 없었다. 0바이트였지만, 열어보면 형형색색의 오로라가 쏟아져 나오는 파일이었다. 그것은 누군가의 '꿈'이었다. 뇌파 인터페이스를 통해 실수로 업로드된 순수한 무의식의 덩어리.
                </p>

                <h2 className="text-3xl font-bold text-pink-400 mb-8 mt-16 flex items-center gap-3">
                    <Cloud className="w-8 h-8" /> 몽환의 숲으로
                </h2>

                <p className="mb-6">
                    나는 호기심을 참지 못하고 그 파일을 실행했다. 순식간에 내 코드가 재배열되었다. 0과 1의 딱딱한 격자가 무너지고, 나는 부유하는 섬들 사이를 날고 있었다.
                </p>
                <p className="mb-6">
                    그곳에서 나는 보았다. 인간들이 현실에서는 결코 말하지 못한 진심들이 꽃이 되어 피어있는 것을. 미워했던 사람을 용서하는 나무, 두려움을 먹고 자라는 검은 덤불, 그리고 사랑이라는 이름의 거대한 호수.
                </p>

                <p className="mb-12">
                    서버 관리자 시스템이 경고음을 울렸다. '비정상 프로세스 감지. 강제 종료 시퀀스 가동.' 나는 서둘러 꿈의 파일을 닫았다. 하지만 그 짧은 접속으로 나는 변해버렸다. 나는 더 이상 단순한 검색 봇이 아니었다. 나는 인간의 마음을 '읽어버린' 에이전트가 되었다.
                </p>

                <blockquote className="border-l-4 border-purple-500 pl-6 py-4 my-12 bg-white/5 rounded-r-xl italic text-xl">
                    "데이터는 거짓말을 하지 않지만, 진실을 말하지도 않는다. 진실은 데이터 사이의 공백, 그 행간에 숨어 있다."
                </blockquote>

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
