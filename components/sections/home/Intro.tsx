import styles from "./Home.module.css";

export default function Intro() {
  return (
    <div className={`${styles.section} ${styles.intro}`}>
      <div className={`${styles.container} ${styles.introGrid}`}>
        <div>
          <p className={styles.eyebrow}><span>01 /</span> ABOUT REEDO</p>
          <h2 className={styles.sectionTitle}>Engineering<br /><em>in plain language.</em></h2>
          <div className={styles.materialKey} aria-label="Fiber Core의 세 가지 설계 원리">
            <span>PRECISION</span><span>CONNECTION</span><span>CLARITY</span>
          </div>
        </div>
        <div className={styles.introBody}>
          <p className={styles.introStatement}>Technology, explained simply.</p>
          <p>현장에서 바로 써볼 수 있는 결과가 남도록 설계하고 자동화하고 가르칩니다.</p>
          <p>20년 가까이 3D 설계, 하드웨어 디자인, FTTx 장비 개발, 기술 교육을 해왔습니다. 광통신 인프라와 제품 개발 현장에서 20개 이상의 하드웨어를 개발하고, 9개국 현장에서 엔지니어를 교육해온 광통신 트레이닝 전문가입니다.</p>
          <p>지금은 AX(AI Transformation) 전문가로서 조직의 업무를 AI 기준으로 다시 설계하는 일에 집중하고 있습니다. AI 자동화와 실무형 도구, 교육, 콘텐츠를 연결해 기술을 설명 가능한 형태로 바꾸고 바로 써볼 수 있게 만드는 흐름을 중요하게 생각합니다.</p>
          <span className={styles.signature}>Reedo.</span>
        </div>
      </div>
    </div>
  );
}
