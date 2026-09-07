import Image from "next/image";
import styles from "./Home.module.css";
const principles = [
  {
    title: "No jargon, just clarity.",
    description: "기술을 기술답게 말하기보다, 지금 어떤 문제가 줄어드는지부터 분명하게 이야기합니다.",
  },
  {
    title: "Results you can use right away.",
    description: "보기 좋은 데모보다 실제 업무에서 다시 쓸 수 있는 구조와 문서를 함께 남깁니다.",
  },
  {
    title: "Field-first, always.",
    description: "설계든 자동화든 교육이든 결국 사람 손에 익고 현장에서 써야 의미가 있다고 믿습니다.",
  },
  {
    title: "People before technology.",
    description: "좋은 결과는 똑똑한 도구보다 맥락을 이해하는 대화에서 시작된다고 생각합니다.",
  },
];

export default function WorkingStyle() {
  return (
    <div className={styles.section}>
      <div className={`${styles.container} ${styles.methodGrid}`}>
        <div>
          <p className={styles.eyebrow}><span>04 /</span> HOW I WORK</p>
          <h2 className={styles.sectionTitle}>This is how<br /><em>I work.</em></h2>
          <p className={styles.sectionDescription}>멋있어 보이는 기술보다 실제로 도움이 되는 결과를 더 중요하게 생각합니다. 그래서 제 작업은 늘 설명 가능하고, 바로 시도 가능하고, 다음 단계가 보이도록 정리합니다.</p>
          <figure className={styles.methodImage}>
            <Image src="/images/brand/fiber-refraction.png" alt="DMS 브랜드 콘셉트: 광학 유리를 통과하는 코발트 광섬유와 알루미늄의 소재 연구" fill sizes="(max-width: 767px) 100vw, 45vw" />
            <figcaption>MATERIAL STUDY / CLARITY, BY DESIGN.</figcaption>
          </figure>
          <p className={styles.methodQuote}>Technology should help,<br /><em>not merely impress.</em></p>
        </div>
        <div className={styles.principles}>
          {principles.map((principle, index) => (
            <article key={principle.title} className={styles.principle}>
              <span>0{index + 1}</span>
              <div><h3>{principle.title}</h3><p>{principle.description}</p></div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
