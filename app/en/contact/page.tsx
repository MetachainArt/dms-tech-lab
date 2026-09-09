import { generateMetadata as generateSeoMetadata } from "@/lib/metadata";
import ContactCTA from "@/app/(ko)/contact/components/ContactCTA";
import ContactHero from "@/app/(ko)/contact/components/ContactHero";
import ContactMainSection from "@/app/(ko)/contact/components/ContactMainSection";
import LocationSection from "@/app/(ko)/contact/components/LocationSection";
import styles from "@/components/brand/FiberPages.module.css";

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
  title: "Contact",
  description: "Contact Reedo to discuss automation, design, training, and content projects. Share your goals and get a reply within 1–2 business days.",
  path: "/en/contact",
  locale: "en_US",
  keywords: ["Reedo", "contact", "automation", "design", "training", "Korea"],
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
    <main className={`${styles.page} ${styles.editorial} ${styles.contactPage}`}>
      <ContactHero locale="en" />
      <ContactMainSection locale="en" assessmentPrefill={assessmentPrefill} />
      <LocationSection locale="en" />
      <ContactCTA locale="en" />
    </main>
  );
}
