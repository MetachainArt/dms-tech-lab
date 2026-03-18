import { generateMetadata as generateSeoMetadata } from "@/lib/metadata";
import ContactCTA from "./components/ContactCTA";
import ContactHero from "./components/ContactHero";
import ContactMainSection from "./components/ContactMainSection";
import LocationSection from "./components/LocationSection";

interface ContactPageProps {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
}

function toSingleValue(value: string | string[] | undefined): string {
  if (Array.isArray(value)) {
    return value[0] || "";
  }

  return value || "";
}

export const metadata = generateSeoMetadata({
  title: "문의",
  description: "리도와 자동화, 설계, 교육, 콘텐츠 작업에 대해 편하게 이야기할 수 있는 문의 페이지입니다.",
  path: "/contact",
});

export default async function ContactPage({ searchParams }: ContactPageProps) {
  const resolvedSearchParams = await searchParams;
  const assessmentPrefill = {
    source: toSingleValue(resolvedSearchParams.source),
    assessmentScore: toSingleValue(resolvedSearchParams.assessmentScore),
    assessmentTier: toSingleValue(resolvedSearchParams.assessmentTier),
    assessmentIndustry: toSingleValue(resolvedSearchParams.assessmentIndustry),
    assessmentSummary: toSingleValue(resolvedSearchParams.assessmentSummary),
    assessmentRecommendation: toSingleValue(resolvedSearchParams.assessmentRecommendation),
  };

  return (
    <main className="min-h-screen bg-paperfolio-bg text-paperfolio-text selection:bg-paperfolio-accent-yellow/70 selection:text-paperfolio-text">
      <ContactHero />
      <ContactMainSection assessmentPrefill={assessmentPrefill} />
      <LocationSection />
      <ContactCTA />
    </main>
  );
}
