import { ArrowUpRight, Mail, MessageSquare } from "lucide-react";
import styles from "./Home.module.css";
import Image from "next/image";

export default function Contact() {
  return (
    <div className={styles.contactSection}>
      <div className={styles.contactMaterial} aria-hidden="true"><Image src="/images/brand/fiber-optics.png" alt="" fill sizes="50vw" /></div>
      <div className={styles.container}>
        <p className={styles.eyebrow}><span>06 /</span> CONTACT · 문의</p>
        <div className={styles.contactGrid}>
          <div><p className={styles.contactDisplay}>Let&apos;s make<br /><em>it matter.</em></p><h2>복잡함을 단순하게.</h2></div>
          <div className={styles.contactAside}>
            <ArrowUpRight className={styles.contactArrow} aria-hidden="true" />
            <p>부담 없이 이야기해 주세요.<br />지금 필요한 문제부터 같이 정리할 수 있습니다.</p>
            <a href="mailto:dms@dmssolution.co.kr" className={styles.contactLink}><Mail size={18} /><span>이메일 보내기<small>dms@dmssolution.co.kr</small></span><ArrowUpRight size={20} /></a>
            <a href="https://open.kakao.com/o/sSPHn33g" target="_blank" rel="noopener noreferrer" className={styles.contactLink}><MessageSquare size={18} /><span>카카오톡으로 이야기하기</span><ArrowUpRight size={20} /></a>
          </div>
        </div>
      </div>
    </div>
  );
}
