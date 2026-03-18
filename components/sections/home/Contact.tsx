"use client";

import { motion } from "framer-motion";
import { Mail, MessageSquare } from "lucide-react";

export default function Contact() {
  return (
    <div className="bg-paperfolio-text px-6 py-28 text-white">
      <div className="mx-auto max-w-5xl rounded-[36px] border border-white/10 bg-white/[0.04] px-8 py-12 text-center shadow-[0_24px_90px_rgba(0,0,0,0.24)] md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.55 }}
          className="space-y-8"
        >
          <div className="space-y-4">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-paperfolio-accent-yellow">문의</p>
            <h2 className="paperfolio-display text-white">복잡한 일을 조금 더 쉽게 만들고 싶다면</h2>
            <p className="mx-auto max-w-2xl text-lg leading-8 text-white/72">
              부담 없이 이야기해 주세요. 정답을 바로 드리진 못해도, 지금 필요한 문제부터 같이 정리할 수 있습니다.
            </p>
          </div>

          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <a
              href="mailto:reedo.dev@dmssolution.co.kr"
              className="inline-flex items-center justify-center gap-3 rounded-full bg-white px-7 py-4 text-sm font-semibold text-paperfolio-text hover:bg-paperfolio-accent-yellow"
            >
              <Mail className="h-5 w-5" />
              이메일 보내기
            </a>
            <a
              href="https://open.kakao.com/o/sSPHn33g"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 rounded-full border border-white/18 bg-white/6 px-7 py-4 text-sm font-semibold text-white hover:border-paperfolio-accent-yellow/50 hover:text-paperfolio-accent-yellow"
            >
              <MessageSquare className="h-5 w-5" />
              카카오톡으로 이야기하기
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
