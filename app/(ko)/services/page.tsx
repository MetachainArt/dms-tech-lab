import Link from "next/link";
import { ArrowRight } from "lucide-react";
import FiberPageHeader from "@/components/brand/FiberPageHeader";
import styles from "@/components/brand/FiberPages.module.css";

const services = [
  {
    category: "AX · 업무 자동화",
    title: "워크플로우 자동화",
    desc: "24시간 멈추지 않는 비즈니스. N8N, Opal 등 최적의 도구를 조합해 반복 업무를 자동화하고, 업무 흐름 전체를 AI 기준으로 다시 설계하는 AX 전환을 돕습니다.",
    link: "/automation",
  },
  {
    category: "프롬프트",
    title: "프롬프트 라이브러리",
    desc: "시행착오를 줄여주는 솔루션. 개발과 비즈니스 효율을 극대화하는 검증된 프롬프트 모음입니다.",
    link: "/prompts",
  },
  {
    category: "실험적인 웹앱",
    title: "바이브 코딩 웹앱",
    desc: "상상을 현실로. 뮤즈캔버스를 비롯해 바이브 코딩으로 제작된 다양한 웹 애플리케이션을 소개합니다.",
    link: "/vibe-coding",
  }
];

const expertise = [
  {
    category: "광통신 트레이닝",
    title: "광통신 트레이닝 전문가",
    desc: "FTTx 광통신 인프라와 장비 개발을 20년 가까이 해왔고, 9개국 현장에서 엔지니어를 직접 교육했습니다. 장비 원리부터 현장 시공·유지보수까지 실무 기준으로 가르칩니다.",
    link: "/education",
  },
  {
    category: "AX",
    title: "AX(AI 전환) 전문가",
    desc: "도구 몇 개를 붙이는 자동화가 아니라, 조직의 업무 흐름 전체를 AI 기준으로 다시 설계합니다. 무엇을 자동화하고 무엇을 사람이 판단할지부터 함께 정리합니다.",
    link: "/contact",
  },
  {
    category: "무역 에이전시",
    title: "광통신 장비 수출입 에이전시",
    desc: "중동·동남아·유럽 시장에서 20년간 광통신 장비 수출입을 수행했습니다. 공급처 소싱과 사양 검토부터 통관·물류 실무, 담당자 교육까지 일괄 수행합니다.",
    link: "/contact",
  },
];

export default function ServicesPage() {
  return (
    <main className={styles.page}>
      <FiberPageHeader
        eyebrow="Services / 하는 일" lead="Applied" accent="intelligence." variant="services"
        title="지금 필요한 문제를 이런 방식으로 돕습니다."
        description="광통신 트레이닝 전문가이자 AX 전문가로서, 거창한 서비스 카탈로그보다 실제로 도움이 되는 자동화와 도구, 작업 방식을 중심으로 정리했습니다."
        note={<><span>AX · Fiber optics · Engineering</span><span>01 — Capabilities</span></>}
      />
      <section className={styles.section}>
        <p className={styles.sectionLabel}>Tools & systems / 도구와 시스템</p>
        <div className={styles.serviceList}>
          {services.map((service, index) => (
            <Link key={service.title} href={service.link} className={styles.serviceRow}>
              <span>0{index + 1}</span>
              <div><small>{service.category}</small><h2>{service.title}</h2></div>
              <p>{service.desc}</p>
              <span className={styles.serviceLink}>자세히 보기 <ArrowRight size={14} /></span>
            </Link>
          ))}
        </div>
      </section>
      <section className={styles.section}>
        <p className={styles.sectionLabel}>Expertise / 전문 분야</p>
        <h2 className={styles.sectionTitle}>트레이닝, AX 전환, 해외에이전시.<br />세 축으로 일합니다.</h2>
        <div className={styles.serviceList}>
          {expertise.map((item, index) => (
            <Link key={item.title} href={item.link} className={styles.serviceRow}>
              <span>0{index + 1}</span>
              <div><small>{item.category}</small><h3>{item.title}</h3></div>
              <p>{item.desc}</p>
              <span className={styles.serviceLink}>자세히 보기 <ArrowRight size={14} /></span>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
