import Image from "next/image";
import type { ShowcaseWorkItem } from "@/lib/works-showcase";
import styles from "./ProjectCover.module.css";
import type { Locale } from "@/lib/i18n";

const englishCaptions: Record<string, string> = {
  "/works/automation": "From connection to execution · Concept artwork",
  "/works/ai-skill": "From ideas to images · Concept artwork",
  "/works/ai-education": "Learning by making · Concept artwork",
  "https://storylens.dmssolution.co.kr/": "From lens to story · Concept artwork",
};

// Presentation-only source map. Original showcase data, destinations and assets stay intact.
const materials: Record<string, { image: string; label: string; caption: string; treatment: string }> = {
  "/works/automation": { image: "/images/brand/automation-flow.png", label: "AUTOMATION / CONNECTED FLOW", caption: "연결에서 실행으로 · 콘셉트 아트워크", treatment: "workflow" },
  "/works/ai-skill": { image: "/images/brand/ai-creation.png", label: "AI / CREATIVE ENGINE", caption: "아이디어가 이미지로 · 콘셉트 아트워크", treatment: "output" },
  "/works/ai-education": { image: "/images/brand/education-lab.png", label: "EDUCATION / LEARNING BY MAKING", caption: "만들며 이해하는 기술 · 콘셉트 아트워크", treatment: "workflow" },
  "https://storylens.dmssolution.co.kr/": { image: "/images/brand/storylens-camera.png", label: "STORYLENS / OPTICAL STORIES", caption: "렌즈에서 이야기로 · 콘셉트 아트워크", treatment: "workflow" },
};

function NetworkDiagram({ locale }: { locale: Locale }) {
  return <svg viewBox="0 0 600 260" className={styles.diagram} role="img" aria-label={locale === "en" ? "Optical network diagram connecting OLT, FDF, splitter and ONU" : "광통신 교재의 OLT, FDF, 광 분배기, ONU 연결 경로를 요약한 도식"}>
    <g fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M90 130H175M225 130H310M360 130H412V50H488M412 130H488M412 130V210H488" />
      <rect x="30" y="95" width="60" height="70" /><rect x="175" y="105" width="50" height="50" />
      <path d="M310 100L360 130L310 160Z" />
      {[25,105,185].map(y=><rect key={y} x="488" y={y} width="78" height="50" />)}
      {[110,125,140].map(y=><path key={y} d={`M42 ${y}h36`} />)}
      <circle cx="412" cy="130" r="4" fill="currentColor" />
    </g>
    <g fill="currentColor" textAnchor="middle" fontFamily="sans-serif" fontSize="13">
      <text x="60" y="192">OLT</text><text x="200" y="182">FDF</text><text x="334" y="188">SPLITTER</text>
      {[55,135,215].map(y=><text key={y} x="527" y={y}>ONU / ONT</text>)}
      <text x="125" y="112" fontSize="9">PATCH</text><text x="269" y="112" fontSize="9">FEEDER</text>
    </g>
  </svg>;
}

function AxDiagram({ locale }: { locale: Locale }) {
  const steps = locale === "en" ? ["Map tasks", "Assign roles", "Handoffs", "90-day review"] : ["업무 지도", "역할 분리", "핸드오프", "90일 측정"];
  return <div className={styles.axDiagram} aria-label={locale === "en" ? "AI transformation: map tasks, assign roles, design handoffs and measure results over 90 days" : "AX 플레이북의 업무 지도, 역할 분리, 핸드오프, 90일 측정 과정 요약"}>
    <p>From tasks<br /><em>to systems.</em></p>
    <div className={styles.axSteps}>{steps.map((step,i)=><div key={step}><span>0{i+1}</span><strong>{step}</strong><i aria-hidden="true" /></div>)}</div>
    <small>WORKFLOW REDESIGN / HUMAN + AI</small>
  </div>;
}

export default function ProjectCover({ work, index, locale = "ko" }: { work: ShowcaseWorkItem; index: number; locale?: Locale }) {
  const network = work.link === "/fttx-training";
  const ax = work.link === "/works/ax";
  const material = materials[work.link || ""];
  const label = network ? "OPTICAL NETWORK / SIGNAL PATH" : ax ? "AX / TRANSFORMATION PLAYBOOK" : material?.label || work.title;
  const caption = locale === "en"
    ? network ? "Concept diagram from the optical network course" : ax ? "A visual guide to the AI transformation playbook" : englishCaptions[work.link || ""] || work.title
    : network ? "광통신 교재 기반 개념도" : ax ? "AX 플레이북 내용 시각화" : material?.caption || work.title;
  return <figure className={`${styles.cover} ${network ? styles.network : ax ? styles.ax : styles[material?.treatment || "artwork"]}`}>
    <div className={styles.coverMeta}><span>{String(index + 1).padStart(2,"0")} / {label}</span><span>DMS.LABS</span></div>
    {network ? <><p className={styles.networkTitle}>One signal.<br /><em>Many connections.</em></p><NetworkDiagram locale={locale} /></> : ax ? <AxDiagram locale={locale} /> : <div className={styles.mount}><Image src={material?.image || work.image} alt={caption} fill sizes="(max-width: 767px) 90vw, 45vw" /></div>}
    <figcaption className={styles.caption}>{caption}<span aria-hidden="true">↗</span></figcaption>
  </figure>;
}
