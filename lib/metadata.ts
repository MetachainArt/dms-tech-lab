import { SITE_CONFIG } from "@/lib/seo";
import { getLocale, languageAlternates, type Locale } from "@/lib/i18n";

interface PageMetadata {
  title: string;
  description: string;
  path: string;
  image?: string;
  noIndex?: boolean;
  locale?: string;
  keywords?: string[];
}

export function generateMetadata({
  title,
  description,
  path,
  image,
  noIndex = false,
  locale,
  keywords,
}: PageMetadata) {
  const fullTitle = title === SITE_CONFIG.title
    ? title
    : `${title} | DMS.Labs`;

  const url = `${SITE_CONFIG.url}${path}`;
  const ogImage = image || SITE_CONFIG.og.image;
  const english = getLocale(path) === "en";

  return {
    metadataBase: new URL(SITE_CONFIG.url),
    title: fullTitle,
    description,
    keywords: (keywords ?? SITE_CONFIG.keywords).join(", "),
    authors: [{ name: SITE_CONFIG.author.name, url: SITE_CONFIG.author.url }],
    creator: SITE_CONFIG.author.name,
    openGraph: {
      type: "website",
      locale: locale ?? (english ? "en_US" : SITE_CONFIG.locale),
      ...(languageAlternates(path, SITE_CONFIG.url) ? { alternateLocale: [english ? "ko_KR" : "en_US"] } : {}),
      url,
      title: fullTitle,
      description,
      siteName: SITE_CONFIG.name,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: english ? "DMS.Labs — Automation, design and education" : SITE_CONFIG.og.alt,
        },
      ],
    },
    twitter: {
      card: SITE_CONFIG.twitter.card,
      title: fullTitle,
      description,
      images: [ogImage],
    },
    robots: {
      index: !noIndex,
      follow: !noIndex,
      googleBot: {
        index: !noIndex,
        follow: !noIndex,
        "max-video-preview": -1,
        "max-image-preview": "large" as const,
        "max-snippet": -1,
      },
    },
    // GOOGLE_SITE_VERIFICATION 이 설정된 경우에만 메타 태그를 내보낸다.
    // (예전에는 "google-site-verification-token-here" 플레이스홀더가 그대로 노출됐다)
    ...(process.env.GOOGLE_SITE_VERIFICATION
      ? { verification: { google: process.env.GOOGLE_SITE_VERIFICATION } }
      : {}),
    alternates: {
      canonical: url,
      languages: languageAlternates(path, SITE_CONFIG.url),
    },
  };
}

/**
 * JSON-LD 구조화된 데이터 생성
 */
export function generateStructuredData(type: "Organization" | "Person" | "WebSite", locale: Locale = "ko") {
  const description = locale === "en"
    ? "Reedo connects optical network expertise, AI automation, 3D design and hands-on education to make complex work simpler."
    : SITE_CONFIG.description;
  const base = {
    "@context": "https://schema.org",
  };

  if (type === "Organization") {
    return {
      ...base,
      "@type": "Organization",
      name: SITE_CONFIG.name,
      url: SITE_CONFIG.url,
      logo: `${SITE_CONFIG.url}/logo.png`,
      description,
      contactPoint: {
        "@type": "ContactPoint",
        email: "dms@dmssolution.co.kr",
        contactType: "customer service",
        availableLanguage: ["Korean", "English"],
      },
    };
  }

  if (type === "Person") {
    return {
      ...base,
      "@type": "Person",
      name: SITE_CONFIG.author.name,
      url: SITE_CONFIG.author.url,
      description,
      jobTitle: locale === "en" ? "Optical network, AI automation and hands-on education partner" : "광통신 하드웨어 · AI 자동화 · 실무형 교육 파트너",
      image: SITE_CONFIG.og.image,
      email: "dms@dmssolution.co.kr",
      sameAs: [SITE_CONFIG.social.kakao],
    };
  }

  if (type === "WebSite") {
    return {
      ...base,
      "@type": "WebSite",
      name: SITE_CONFIG.name,
      url: `${SITE_CONFIG.url}${locale === "en" ? "/en" : ""}`,
      description,
      inLanguage: locale,
      potentialAction: {
        "@type": "SearchAction",
        target: `${SITE_CONFIG.url}/search?q={search_term_string}`,
        "query-input": "required name=search_term_string",
      },
    };
  }
}

/**
 * 블로그 포스트 메타데이터 생성
 */
export function generateBlogMetadata({
  title,
  description,
  path,
  publishedTime,
  modifiedTime,
  image,
  authors,
}: PageMetadata & {
  publishedTime?: string;
  modifiedTime?: string;
  authors?: string[];
}) {
  return {
    ...generateMetadata({ title, description, path, image }),
    openGraph: {
      ...generateMetadata({ title, description, path, image }).openGraph,
      type: "article",
      publishedTime,
      modifiedTime,
      authors,
    },
  };
}
