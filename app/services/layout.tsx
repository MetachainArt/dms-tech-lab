import type { ReactNode } from "react";
import { generateMetadata as generateSeoMetadata } from "@/lib/metadata";

export const metadata = generateSeoMetadata({
  title: "하는 일",
  description:
    "광통신 트레이닝, AX(AI 전환) 컨설팅, 중동·동남아·유럽 광통신 장비 수출입 에이전시, 워크플로우 자동화, 3D 모델링까지 DMS.Labs가 제공하는 일을 소개합니다.",
  path: "/services",
});

export default function ServicesLayout({ children }: { children: ReactNode }) {
  return children;
}
