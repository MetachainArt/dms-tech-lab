import Image from "next/image";
import type { ReactNode } from "react";
import styles from "./FiberPages.module.css";

type FiberPageHeaderProps = {
  eyebrow: string;
  lead: string;
  accent: string;
  title: string;
  description: string;
  variant: "services" | "projects" | "insights" | "about" | "company" | "contact";
  note?: ReactNode;
  children?: ReactNode;
};

export default function FiberPageHeader({ eyebrow, lead, accent, title, description, variant, note, children }: FiberPageHeaderProps) {
  const optical = variant === "insights" || variant === "contact";
  const image = variant === "services" || variant === "company" ? "fiber-exploded.png" : variant === "insights" ? "fiber-refraction.png" : variant === "contact" ? "fiber-optics.png" : "fiber-detail.png";

  return (
    <header className={`${styles.header} ${styles[variant]}`}>
      <div className={styles.headerInner}>
        <div className={styles.eyebrow}><span>DMS.LABS / {eyebrow}</span><span>Engineering & transformation</span></div>
        <div className={styles.composition}>
          <p className={styles.display} aria-hidden="true"><span>{lead}</span><em>{accent}</em></p>
          <figure className={styles.fragment}>
            <Image src={`/images/brand/${image}`} alt="" fill sizes="(max-width: 700px) 85vw, 50vw" priority className={styles.fragmentImage} />
            <figcaption>{optical ? "Optical study" : "Precision study"}<span>{variant === "services" ? "01 / Section" : variant === "projects" ? "02 / Assembly" : variant === "insights" ? "03 / Refraction" : variant === "about" ? "04 / Surface" : variant === "company" ? "05 / Structure" : "06 / Connection"}</span></figcaption>
          </figure>
        </div>
        <div className={styles.headerCopy}>
          <h1>{title}</h1>
          <div><p>{description}</p>{children ? <div className={styles.headerExtras}>{children}</div> : null}</div>
        </div>
        {note ? <div className={styles.headerNote}>{note}</div> : null}
      </div>
    </header>
  );
}
