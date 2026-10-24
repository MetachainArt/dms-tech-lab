/** Public pages with reviewed English editions. Untranslated URLs stay in Korean. */
import blogTranslations from "./blog-translation-index.json";
import { getVisibleEmptySeriesIds } from "./blog-data";
export type Locale = "ko" | "en";

export const TRANSLATED_PATHS = ["/", "/about", "/works", "/contact", "/blog", "/gallery"] as const;
export const TRANSLATED_WORK_SLUGS = ["ai-citation-question-layers", "choosing-first-automation-task", "choosing-data-for-ai", "ai-skill-acceptance-tests", "reedo-publication-ledger-gap", "ai-automation-safe-retry", "ai-knowledge-base-world-tree", "ai-skill-job-sheet", "ai-training-task-boundary-map", "muse-dots-automation-migration", "jev-seo-practical-guide", "claude-code-you-should-know", "delegating-work-to-ai-agents", "ai-performance-measurement", "bilingual-page-release-check", "automation-permission-ladder"] as const;

export function getLocale(pathname: string): Locale {
  return pathname === "/en" || pathname.startsWith("/en/") ? "en" : "ko";
}

export function withoutLocale(pathname: string): string {
  const path = getLocale(pathname) === "en" ? pathname.slice(3) || "/" : pathname;
  return path.length > 1 ? path.replace(/\/$/, "") : path;
}

export function hasEnglishVersion(pathname: string): boolean {
  const path = withoutLocale(pathname);
  return path === "/education/optical-training/closure-cable-preparation-tray-reentry"
    || path === "/education/optical-training/dome-closure-seal-flash-test"
    || path === "/education/optical-training/connector-inspection-evidence-handover"
    || path === "/education/optical-training/otdr-far-end-connector-evidence"
    || path === "/education/optical-training/splice-protector-tray-compatibility"
    || path === "/education/optical-training/reflectance-orl-sign-and-scope"
    || path === "/education/optical-training/otdr-dual-wavelength-bend-screening"
    || path === "/education/optical-training/otdr-dead-zone-pulse-width"
    || path === "/education/optical-training/otdr-ghost-event-evidence"
    || path === "/education/optical-training/mpo-polarity-method-type-readout"
    || path === "/education/optical-training/live-fiber-identifier-loss-and-detection-limits"
    || path === "/education/optical-training/splicer-estimated-loss-vs-otdr-readout"
    || path === "/education/optical-training/odf-patch-cord-routing-and-labeling"
    || path === "/education/optical-training/01-fiber-types-link-design"
    || path === "/education/optical-training/02-fiber-market-infrastructure"
    || path === "/education/optical-training/01-rf-over-fiber-lecture"
    || path === "/education/vibe-coding/06-ai-standards-file"
    || TRANSLATED_PATHS.some((item) => item === path)
    || TRANSLATED_WORK_SLUGS.some((slug) => path === `/works/${slug}`)
    || blogTranslations.slugs.some((slug) => path === `/blog/${slug}`)
    || blogTranslations.series.some((id) => path === `/blog/series/${id}`)
    || getVisibleEmptySeriesIds().some((id) => path === `/blog/series/${id}`);
}

export function localizePath(pathname: string, locale: Locale): string {
  const path = withoutLocale(pathname);
  if (locale === "ko" || !hasEnglishVersion(path)) return path;
  return path === "/" ? "/en" : `/en${path}`;
}

export function languageAlternates(pathname: string, baseUrl: string) {
  if (!hasEnglishVersion(pathname)) return undefined;
  const korean = `${baseUrl}${localizePath(pathname, "ko")}`;
  return { ko: korean, en: `${baseUrl}${localizePath(pathname, "en")}`, "x-default": korean };
}
