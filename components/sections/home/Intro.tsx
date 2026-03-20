"use client";

import { motion } from "framer-motion";

export default function Intro() {
  return (
    <div className="bg-paperfolio-surface px-6 py-24">
      <div className="mx-auto grid max-w-6xl gap-12 rounded-[36px] border border-paperfolio-line bg-white px-8 py-10 shadow-[0_20px_70px_rgba(31,41,55,0.06)] md:grid-cols-[0.8fr_1.2fr] md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-120px" }}
          transition={{ duration: 0.6 }}
          className="space-y-4"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-paperfolio-accent-blue">About</p>
          <h2 className="paperfolio-h2 text-paperfolio-text">Hello,<br />I'm Reedo.</h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-120px" }}
          transition={{ duration: 0.6, delay: 0.08 }}
          className="space-y-5"
        >
          <p className="paperfolio-body">
            20년 가까이 3D 설계, 하드웨어 디자인, FTTx 장비 개발, 기술 교육을 해왔습니다. 광통신 인프라와 제품 개발 현장에서 20개 이상의 하드웨어를 개발해온 경험을 바탕으로, 기술이 실제로 쓰이는 조건을 오래 다뤄왔습니다.
          </p>
          <p className="paperfolio-body">
            요즘은 AI 자동화와 실무형 도구, 교육, 콘텐츠를 연결하는 작업에 집중하고 있습니다. 꿈꾸는 카메라 프로젝트와 AI 실무 채널 운영처럼, 기술을 설명 가능한 형태로 바꾸고 바로 써볼 수 있게 만드는 흐름을 중요하게 생각합니다.
          </p>
        </motion.div>
      </div>
    </div>
  );
}
