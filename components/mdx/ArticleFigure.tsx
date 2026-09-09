import type { ComponentPropsWithoutRef, ReactNode } from "react";
import Image, { type ImageProps } from "next/image";
import styles from "./ArticleFigure.module.css";
import { editorialImage } from "@/lib/editorial-art";

function sourceUrl(src: unknown): string | undefined {
  if (typeof src === "string") {
    return /^(?:https?:\/\/|\/|\.\/|\.\.\/)/i.test(src) ? src : undefined;
  }
  if (src && typeof src === "object") {
    if ("src" in src && typeof src.src === "string") return src.src;
    if ("default" in src) return sourceUrl(src.default);
  }
  return undefined;
}

function FigureFrame({ children, alt, src, locale = "ko" }: { children: ReactNode; alt: string; src?: string; locale?: "ko" | "en" }) {
  // Markdown images can live inside a paragraph; span keeps that HTML valid.
  return (
    <span className={styles.figure} role="figure" aria-label={alt || (locale === "en" ? "Article image" : "본문 이미지")}>
      <span className={styles.imageFrame}>{children}</span>
      <span className={styles.caption}>
        <span>{alt || (locale === "en" ? "Article image" : "본문 이미지")}</span>
        {src ? <a href={src} target="_blank" rel="noopener noreferrer" className={styles.sourceLink} aria-label={`${alt || (locale === "en" ? "Article image" : "본문 이미지")} ${locale === "en" ? "View original (new tab)" : "원본 전체 보기 (새 탭)"}`}>{locale === "en" ? "View original" : "원본 전체 보기"} <span aria-hidden="true">↗</span></a> : null}
      </span>
    </span>
  );
}

export function ArticleFigure({ alt = "", className = "", loading = "lazy", locale = "ko", ...props }: ComponentPropsWithoutRef<"img"> & { locale?: "ko" | "en" }) {
  const src = typeof props.src === "string" ? editorialImage(props.src) : props.src;
  return (
    <FigureFrame locale={locale} alt={alt} src={sourceUrl(src)}>
      {/* MDX sources include original SVGs and external screenshots; retain their source URLs. */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img {...props} src={src} alt={alt} loading={loading} decoding="async" className={`${className} ${styles.image}`} />
    </FigureFrame>
  );
}

export function ArticleNextImage({ alt, className = "", locale = "ko", ...props }: ImageProps & { locale?: "ko" | "en" }) {
  const src = typeof props.src === "string" ? editorialImage(props.src) : props.src;
  return (
    <FigureFrame locale={locale} alt={alt} src={sourceUrl(src)}>
      <Image {...props} src={src} alt={alt} className={`${className} ${styles.image}`} />
    </FigureFrame>
  );
}

export function ArticleTable({ className = "", locale = "ko", ...props }: ComponentPropsWithoutRef<"table"> & { locale?: "ko" | "en" }) {
  return (
    <div className={styles.tableFrame}>
      <p className={styles.scrollHint}>{locale === "en" ? "Scroll horizontally to view a wide table." : "표가 넓으면 좌우로 스크롤하여 확인하세요."}</p>
      <div className={styles.tableScroll} tabIndex={0} role="region" aria-label={locale === "en" ? "Article table — scroll horizontally" : "본문 표 — 좌우 스크롤 가능"}>
        <table {...props} className={`${styles.table} ${className}`} />
      </div>
    </div>
  );
}

export function ArticleCodeBlock({ className = "", ...props }: ComponentPropsWithoutRef<"pre">) {
  return <pre tabIndex={0} {...props} className={`${className} ${styles.code}`} />;
}
