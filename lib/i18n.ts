/** Public pages with reviewed English editions. Untranslated URLs stay in Korean. */
import blogTranslations from "./blog-translation-index.json";
import { getVisibleEmptySeriesIds } from "./blog-data";
export type Locale = "ko" | "en";

export const TRANSLATED_PATHS = ["/", "/about", "/works", "/contact", "/blog"] as const;

export function getLocale(pathname: string): Locale {
  return pathname === "/en" || pathname.startsWith("/en/") ? "en" : "ko";
}

export function withoutLocale(pathname: string): string {
  const path = getLocale(pathname) === "en" ? pathname.slice(3) || "/" : pathname;
  return path.length > 1 ? path.replace(/\/$/, "") : path;
}

export function hasEnglishVersion(pathname: string): boolean {
  const path = withoutLocale(pathname);
  return TRANSLATED_PATHS.some((item) => item === path)
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
