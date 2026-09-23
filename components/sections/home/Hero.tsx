"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import styles from "./Home.module.css";
import type { HomeLocaleProps } from "@/lib/home-copy";

export default function Hero({ locale = "ko" }: HomeLocaleProps) {
  const english = locale === "en";
  const reduced = useReducedMotion();
  const { scrollY } = useScroll();
  // The home hero begins at the document origin; clamp the motion to its opening scroll.
  const scrollYProgress = useTransform(scrollY, [0, 1100], [0, 1]);
  const objectY = useTransform(scrollYProgress, [0, 1], [0, 180]);
  const objectRotate = useTransform(scrollYProgress, [0, 1], [-8, 5]);
  const wordY = useTransform(scrollYProgress, [0, 1], [0, -70]);
  const italicY = useTransform(scrollYProgress, [0, 1], [0, -110]);

  return (
    <div className={styles.hero}>
      <div className={styles.container}>
        <div className={styles.heroMasthead}>
          <p>ENGINEERING & TRANSFORMATION</p>
          <span>AX · FIBER OPTICS · ENGINEERING</span>
        </div>
        <div className={styles.fiberStage}>
          <div className={styles.sceneIndex}><span className={styles.dot} /> DMS.LABS / FIBER CORE — 001</div>
          <h1 className={styles.fiberTitle} aria-label="Beyond complexity.">
            <motion.span className={styles.beyond} style={{ y: reduced ? 0 : wordY }}>Beyond</motion.span>
            <motion.em className={styles.complexity} style={{ y: reduced ? 0 : italicY }}>complexity.</motion.em>
          </h1>
          <motion.figure
            className={styles.fiberObject}
            style={{ y: reduced ? 0 : objectY, rotate: reduced ? -8 : objectRotate }}
            aria-label={english ? "Fiber Core — a brand object representing DMS optical communications and precision engineering" : "Fiber Core — DMS의 광통신과 정밀 엔지니어링을 상징하는 브랜드 오브젝트"}
          >
            <Image src="/images/brand/fiber-core-v2.png" alt={english ? "Cobalt optical fibers and transparent connectors passing through a machined silver frame" : "가공된 은색 프레임을 코발트 광섬유와 투명 광학 커넥터가 관통하는 Fiber Core"} fill sizes="(max-width: 767px) 110vw, 65vw" priority className={styles.fiberCoreImage} />
          </motion.figure>
          <div className={styles.heroIntent}>
            <p>{english ? <>Redesigning work with AI.<br />Making optical networks work in the field.</> : <>AI로 업무를 다시 설계하고,<br />광통신 기술을 현장에서 쓰이게 합니다.</>}</p>
            <div className={styles.actions}>
              <Link href={english ? "/en/contact" : "#contact"} className={styles.primaryButton}>{english ? "Let's talk" : "문의하기"} <ArrowUpRight size={17} /></Link>
              <Link href={english ? "/en/works" : "/works"} className={styles.textLink}>{english ? "View work" : "작업 보기"} <ArrowUpRight size={17} /></Link>
            </div>
          </div>
          <div className={styles.objectAnnotation} aria-hidden="true"><span>01 — FIBER CORE</span><span>PRECISION IN EVERY CONNECTION.</span></div>
          <a href="#intro" className={styles.scrollCue}><ArrowDown size={15} /><span>SCROLL TO EXPLORE</span></a>
        </div>
        <div className={styles.heroFoot}>
          <div className={styles.heroDescription}>
            <p className={styles.eyebrow}>REDUCE THE NOISE. BUILD WHAT TRULY MATTERS.</p>
            <p>{english ? "AI workflow redesign, optical network training and technical support grounded in 20 years of engineering and international trade. We leave your team with practical processes, materials and the confidence to run them." : "조직의 업무 흐름을 AI 기준으로 다시 설계하고, FTTx 현장 엔지니어를 교육합니다. 광통신 장비 개발과 20년의 수출입 경험을 바탕으로, 팀이 직접 운영할 수 있는 문서와 방법까지 남깁니다."}</p>
          </div>
          <dl className={styles.heroFacts}>
            <div><dt>FOCUS</dt><dd>AI Transformation · Training · Global Agency</dd></div>
            <div><dt>APPROACH</dt><dd>Simple, field-proven,<br />built to last</dd></div>
          </dl>
        </div>
      </div>
    </div>
  );
}
