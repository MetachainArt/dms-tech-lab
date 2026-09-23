import Image from "next/image";
import styles from "./Home.module.css";
import { EN_HOME_SERVICES, type HomeLocaleProps } from "@/lib/home-copy";
const services = [
  {
    title: "AX 전환 전문",
    description: "도구를 붙이는 자동화가 아니라, 조직의 업무 흐름 전체를 AI 기준으로 다시 설계합니다. 무엇을 넘기고 무엇을 사람이 쥘지부터 함께 정리합니다.",
    accent: "text-paperfolio-accent-blue",
    bg: "bg-paperfolio-accent-blue/10",
  },
  {
    title: "광통신 트레이닝",
    description: "FTTx 망 구조부터 광 파워 버짓, OTDR 장애 추적까지. 9개국 현장에서 엔지니어를 교육해온 경험으로 실무 기준을 가르칩니다.",
    accent: "text-paperfolio-accent-blue",
    bg: "bg-paperfolio-accent-blue/10",
  },
  {
    title: "글로벌 무역 에이전시",
    description: "중동·동남아·유럽 시장에서 광통신 장비 수출입을 20년간 수행했습니다. 소싱과 사양 검토, 통관·물류를 포함한 수출입 실무, 담당자 실무 교육까지 일괄 수행합니다.",
    accent: "text-paperfolio-accent-coral",
    bg: "bg-paperfolio-accent-coral/10",
  },
  {
    title: "기술지원",
    description: "장비 도입과 운영 과정에서 생기는 문제를 현장 조건에 맞춰 진단하고 해결합니다. 원격과 현장 지원 모두 가능합니다.",
    accent: "text-paperfolio-accent-coral",
    bg: "bg-paperfolio-accent-coral/10",
  },
  {
    title: "자동화 및 기술교육",
    description: "반복되는 정리, 문서, 보고를 자동화하고, 처음 배우는 사람도 바로 써볼 수 있게 쉽고 실용적인 방식으로 가르칩니다.",
    accent: "text-paperfolio-accent-yellow",
    bg: "bg-paperfolio-accent-yellow/15",
  },
  {
    title: "3D 설계 · 모델링",
    description: "아이디어를 실제로 검토할 수 있는 형태로 바꿉니다. 제품 3D 모델링과 구조 검토, FTTx 기반 하드웨어 개발 경험까지 연결합니다.",
    accent: "text-paperfolio-accent-blue",
    bg: "bg-paperfolio-accent-blue/10",
  },
  {
    title: "콘텐츠 제작",
    description: "사진, 글, 영상, AI를 연결해 브랜드와 사람의 이야기를 전달하는 콘텐츠를 만듭니다.",
    accent: "text-paperfolio-accent-yellow",
    bg: "bg-paperfolio-accent-yellow/15",
  },
];

export default function WhatIDo({ locale = "ko" }: HomeLocaleProps) {
  const english = locale === "en";
  return (
    <div className={styles.section}>
      <div className={styles.container}>
        <div className={styles.sectionHeader}>
          <div>
            <p className={styles.eyebrow}><span>02 /</span> SERVICES</p>
            <h2 className={styles.sectionTitle}>The work that turns<br />technology into <em>real outcomes.</em></h2>
          </div>
          <p className={styles.sectionDescription}>{english ? "Our focus is AI workflow redesign and optical network training, backed by international trade, technical support and engineering experience." : "AX 전환과 광통신 현장 교육을 중심으로, 무역·기술지원·설계 경험을 필요한 곳에 연결합니다. 결과는 팀이 직접 쓰고 운영할 수 있는 형태로 남깁니다."}</p>
        </div>
        <div className={styles.serviceMaterial}>
          <div><span>ASSEMBLY STUDY / BRAND CONCEPT</span><p>Every part.<br /><em>One purpose.</em></p></div>
          <Image src="/images/brand/fiber-exploded.png" alt={english ? "DMS brand concept: an exploded assembly of a metal flange, optical glass and cobalt collet" : "DMS 브랜드 콘셉트: 금속 플랜지, 광학 유리, 코발트 콜릿의 분해 조립도"} fill sizes="100vw" />
        </div>
        <div className={styles.servicesGrid}>
          {(english ? EN_HOME_SERVICES : services).map((service, index) => {
            return (
              <article key={service.title} className={styles.serviceCard}>
                <div className={styles.serviceTopline}><span>0{index + 1}</span><span className={styles.precisionRule} aria-hidden="true" /></div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </article>
            );
          })}
        </div>
      </div>
    </div>
  );
}
