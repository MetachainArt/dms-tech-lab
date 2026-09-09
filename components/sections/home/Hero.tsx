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
            <p>{english ? <>Turning complex technology<br />into systems that work.</> : <>복잡한 기술과 업무를<br />작동하는 시스템으로 바꿉니다.</>}</p>
            <div className={styles.actions}>
              <Link href={english ? "/en/contact" : "/survey"} className={styles.primaryButton}>{english ? "Let's talk" : "사전 질의응답 작성"} <ArrowUpRight size={17} /></Link>
              <Link href={english ? "/en/works" : "/works"} className={styles.textLink}>{english ? "View work" : "작업 보기"} <ArrowUpRight size={17} /></Link>
            </div>
          </div>
          <div className={styles.objectAnnotation} aria-hidden="true"><span>01 — FIBER CORE</span><span>PRECISION IN EVERY CONNECTION.</span></div>
          <a href="#intro" className={styles.scrollCue}><ArrowDown size={15} /><span>SCROLL TO EXPLORE</span></a>
        </div>
        <div className={styles.heroFoot}>
          <div className={styles.heroDescription}>
            <p className={styles.eyebrow}>REDUCE THE NOISE. BUILD WHAT TRULY MATTERS.</p>
            <p>AX transformation, optical network training, and 20 years in international trade. Optical equipment import and export across the Middle East, Southeast Asia and Europe. Field engineer training, workflow redesign and technical support designed for real conditions, then handed over for your team to run.</p>
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
