"use client";

import { usePathname } from "next/navigation";
import type { MouseEvent } from "react";
import { getLocale, hasEnglishVersion, localizePath } from "@/lib/i18n";

export default function LanguageSwitch({ onNavigate }: { onNavigate?: () => void }) {
  const pathname = usePathname();
  const locale = getLocale(pathname);
  const translated = hasEnglishVersion(pathname);
  const englishHref = translated ? localizePath(pathname, "en") : "/en";

  function preserveContext(event: MouseEvent<HTMLAnchorElement>) {
    if (translated) {
      const destination = new URL(event.currentTarget.href);
      destination.search = window.location.search;
      destination.hash = window.location.hash;
      event.currentTarget.href = destination.href;
    }
    onNavigate?.();
  }

  return (
    <nav aria-label={locale === "en" ? "Language" : "언어 선택"} className="flex shrink-0 items-center gap-1 rounded-full border border-current/20 px-1 py-0.5 text-[11px]">
      <a href={localizePath(pathname, "ko")} lang="ko" hrefLang="ko" onClick={preserveContext}
        aria-current={locale === "ko" ? "page" : undefined}
        className={`rounded-full px-2 py-1.5 focus-visible:outline-2 focus-visible:outline-offset-2 ${locale === "ko" ? "bg-paperfolio-text text-white" : "hover:underline"}`}>한국어</a>
      <span aria-hidden="true" className="opacity-30">/</span>
      <a href={englishHref} lang="en" hrefLang="en" onClick={preserveContext}
        aria-current={locale === "en" ? "page" : undefined}
        title={translated ? "English" : "이 페이지는 한국어로 제공됩니다. 영문 홈으로 이동합니다."}
        aria-label={translated ? "English" : "English homepage (this page is available in Korean)"}
        className={`rounded-full px-2 py-1.5 focus-visible:outline-2 focus-visible:outline-offset-2 ${locale === "en" ? "bg-paperfolio-text text-white" : "hover:underline"}`}>EN</a>
    </nav>
  );
}
