import Link from "next/link";
import FiberPageHeader from "@/components/brand/FiberPageHeader";
import brand from "@/components/brand/FiberPages.module.css";
import styles from "@/components/ideas/IdeasPage.module.css";
import EssayPiece from "@/components/ideas/EssayPiece";
import { watchingEssayEn } from "@/lib/ideas-essay-watching";
import { savedMemoryEssayEn } from "@/lib/ideas-essay-saved";
import { carefulPlanEssayEn } from "@/lib/ideas-essay-plan";
import { generateMetadata as generateSeoMetadata } from "@/lib/metadata";

export const metadata = generateSeoMetadata({
  title: "Ideas — Reedo",
  description: "Essays on work, attention and the tools we think with. English editions of Reedo's Ideas.",
  path: "/en/gallery",
  locale: "en_US",
});

export default function EnglishIdeasPage() {
  return (
    <main className={`${brand.page} ${styles.gallery}`}>
      <FiberPageHeader
        eyebrow="Ideas / Reedo" lead="Images &" accent="words." variant="insights"
        title="Ideas"
        description="Notes and essays written alongside the work. Earlier pieces are still available in Korean, and new ones are being added in English."
        note={<><span>3 English editions</span><span>A space where images and words meet</span></>}
      >
        <Link href="/gallery">Earlier pieces in Korean ↗</Link>
      </FiberPageHeader>
      <div className={styles.essay}><EssayPiece essay={carefulPlanEssayEn} locale="en" /></div>
      <div className={styles.essay}><EssayPiece essay={savedMemoryEssayEn} locale="en" /></div>
      <div className={styles.essay}><EssayPiece essay={watchingEssayEn} locale="en" /></div>
    </main>
  );
}