import SiteDocument from "@/app/_components/SiteDocument";
import { generateMetadata as generateSeoMetadata } from "@/lib/metadata";

export const metadata = generateSeoMetadata({
  title: "Automation, design & education",
  description: "Reedo connects optical network expertise, AI automation, 3D design and hands-on education to make complex work simpler.",
  path: "/en",
  locale: "en_US",
  keywords: ["DMS.Labs", "Reedo", "AI automation", "FTTx", "3D design", "AI education"],
});

export default function EnglishLayout({ children }: { children: React.ReactNode }) {
  return <SiteDocument locale="en">{children}</SiteDocument>;
}
