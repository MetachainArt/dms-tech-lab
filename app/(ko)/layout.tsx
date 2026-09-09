import SiteDocument from "@/app/_components/SiteDocument";

export { metadata } from "@/app/_components/SiteDocument";

export default function KoreanLayout({ children }: { children: React.ReactNode }) {
  return <SiteDocument locale="ko">{children}</SiteDocument>;
}
