"use client";

import { motion } from "framer-motion";
import { Mail, MessageSquare } from "lucide-react";

export default function Contact() {
  return (
    <div className="bg-paperfolio-text px-6 py-16 text-white">
      <div className="mx-auto max-w-2xl rounded-[28px] border border-white/10 bg-white/[0.04] px-8 py-10 text-center shadow-[0_16px_60px_rgba(0,0,0,0.24)]">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.55 }}
          className="space-y-5"
        >
          <div className="space-y-3">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-paperfolio-accent-yellow">문의</p>
            <h2 className="font-playfair text-4xl font-bold text-white">복잡함을 단순하게.</h2>
            <p className="mx-auto max-w-sm text-sm leading-7 text-white/70">
              부담 없이 이야기해 주세요. 지금 필요한 문제부터 같이 정리할 수 있습니다.
            </p>
          </div>

          <div className="flex flex-col justify-center gap-3 sm:flex-row">
            <a
              href="mailto:reedo.dev@dmssolution.co.kr"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-paperfolio-text hover:bg-paperfolio-accent-yellow"
            >
              <Mail className="h-4 w-4" />
              이메일 보내기
            </a>
            <a
              href="https://open.kakao.com/o/sSPHn33g"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/18 bg-white/6 px-6 py-3 text-sm font-semibold text-white hover:border-paperfolio-accent-yellow/50 hover:text-paperfolio-accent-yellow"
            >
              <MessageSquare className="h-4 w-4" />
              카카오톡으로 이야기하기
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
