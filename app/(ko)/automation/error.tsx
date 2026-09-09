"use client";

import Link from "next/link";
import styles from "@/components/brand/FiberContent.module.css";

export default function AutomationError({ reset }: { reset: () => void }) {
  return <main className={styles.page}>
    <div className={styles.container}>
      <header className={styles.hero}>
        <p className={styles.eyebrow}>DMS.LABS / Automation</p>
        <p className={styles.display} aria-hidden="true">A moment<br /><em>to reconnect.</em></p>
        <h1 className={styles.title}>자동화 자료를 불러오지 못했습니다.</h1>
        <p className={styles.description}>자료 연결에 문제가 생겼습니다. 잠시 후 다시 시도해 주세요. 공개된 작업 사례는 계속 살펴보실 수 있습니다.</p>
        <div className={styles.actions}>
          <button type="button" onClick={reset} className={styles.button}>다시 시도하기 <span aria-hidden="true">↗</span></button>
          <Link href="/works/automation" className={styles.button}>자동화 작업 사례 보기 <span aria-hidden="true">↗</span></Link>
        </div>
      </header>
    </div>
  </main>;
}
