import type { ReactNode } from "react";
import { generateMetadata as generateSeoMetadata } from "@/lib/metadata";

export const metadata = generateSeoMetadata({
  title: "하는 일",
  description:
    "광통신 트레이닝 전문가이자 AX 전문가인 리도가 제공하는 일. FTTx 광통신 교육, AX(AI 전환) 컨설팅, 워크플로우 자동화, 프롬프트 라이브러리, 바이브 코딩 웹앱을 소개합니다.",
  path: "/services",
});

export default function ServicesLayout({ children }: { children: ReactNode }) {
  return children;
}
