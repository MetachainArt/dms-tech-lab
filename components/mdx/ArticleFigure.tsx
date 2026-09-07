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

function FigureFrame({ children, alt, src }: { children: ReactNode; alt: string; src?: string }) {
  // Markdown images can live inside a paragraph; span keeps that HTML valid.
  return (
    <span className={styles.figure} role="figure" aria-label={alt || "본문 이미지"}>
      <span className={styles.imageFrame}>{children}</span>
      <span className={styles.caption}>
        <span>{alt || "본문 이미지"}</span>
        {src ? <a href={src} target="_blank" rel="noopener noreferrer" className={styles.sourceLink} aria-label={`${alt || "본문 이미지"} 원본 전체 보기 (새 탭)`}>원본 전체 보기 <span aria-hidden="true">↗</span></a> : null}
      </span>
    </span>
  );
}

export function ArticleFigure({ alt = "", className = "", loading = "lazy", ...props }: ComponentPropsWithoutRef<"img">) {
  const src = typeof props.src === "string" ? editorialImage(props.src) : props.src;
  return (
    <FigureFrame alt={alt} src={sourceUrl(src)}>
      {/* MDX sources include original SVGs and external screenshots; retain their source URLs. */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img {...props} src={src} alt={alt} loading={loading} decoding="async" className={`${className} ${styles.image}`} />
    </FigureFrame>
  );
}

export function ArticleNextImage({ alt, className = "", ...props }: ImageProps) {
  const src = typeof props.src === "string" ? editorialImage(props.src) : props.src;
  return (
    <FigureFrame alt={alt} src={sourceUrl(src)}>
      <Image {...props} src={src} alt={alt} className={`${className} ${styles.image}`} />
    </FigureFrame>
  );
}

export function ArticleTable({ className = "", ...props }: ComponentPropsWithoutRef<"table">) {
  return (
    <div className={styles.tableFrame}>
      <p className={styles.scrollHint}>표가 넓으면 좌우로 스크롤하여 확인하세요.</p>
      <div className={styles.tableScroll} tabIndex={0} role="region" aria-label="본문 표 — 좌우 스크롤 가능">
        <table {...props} className={`${styles.table} ${className}`} />
      </div>
    </div>
  );
}

export function ArticleCodeBlock({ className = "", ...props }: ComponentPropsWithoutRef<"pre">) {
  return <pre tabIndex={0} {...props} className={`${className} ${styles.code}`} />;
}
