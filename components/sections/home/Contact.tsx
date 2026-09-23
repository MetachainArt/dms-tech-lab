import { ArrowUpRight, Mail, MessageSquare } from "lucide-react";
import styles from "./Home.module.css";
import Image from "next/image";
import Link from "next/link";
import type { HomeLocaleProps } from "@/lib/home-copy";

export default function Contact({ locale = "ko" }: HomeLocaleProps) {
  const english = locale === "en";
  return (
    <div className={styles.contactSection}>
      <div className={styles.contactMaterial} aria-hidden="true"><Image src="/images/brand/fiber-optics.png" alt="" fill sizes="50vw" /></div>
      <div className={styles.container}>
        <p className={styles.eyebrow}><span>06 /</span> {english ? "CONTACT" : "CONTACT · 문의"}</p>
        <div className={styles.contactGrid}>
          <div><p className={styles.contactDisplay}>Let&apos;s make<br /><em>it matter.</em></p><h2>{english ? "Make the complex simple." : "복잡함을 단순하게."}</h2></div>
          <div className={styles.contactAside}>
            <ArrowUpRight className={styles.contactArrow} aria-hidden="true" />
            <p>{english ? <>Tell me what you are working on.<br />We can start by making the next step clearer.</> : <>간단한 질문은 카카오톡이나 이메일로 보내주세요.<br />구체적인 제안이 필요하면 사전 질의응답을 작성해 주세요.</>}</p>
            {english && <Link href="/en/contact" className={styles.contactLink}><MessageSquare size={18} /><span>Send an inquiry</span><ArrowUpRight size={20} /></Link>}
            <a href="mailto:dms@dmssolution.co.kr" className={styles.contactLink}><Mail size={18} /><span>{english ? "Send an email" : "이메일 보내기"}<small>dms@dmssolution.co.kr</small></span><ArrowUpRight size={20} /></a>
            <a href="https://open.kakao.com/o/sSPHn33g" target="_blank" rel="noopener noreferrer" className={styles.contactLink}><MessageSquare size={18} /><span>{english ? "KakaoTalk (Korean)" : "카카오톡으로 이야기하기"}</span><ArrowUpRight size={20} /></a>
            {!english && <Link href="/survey" className={styles.contactLink}><MessageSquare size={18} /><span>사전 질의응답 작성<small>구체적인 제안이 필요할 때</small></span><ArrowUpRight size={20} /></Link>}
          </div>
        </div>
      </div>
    </div>
  );
}
