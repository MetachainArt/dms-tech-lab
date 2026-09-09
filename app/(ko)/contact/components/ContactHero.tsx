import FiberPageHeader from "@/components/brand/FiberPageHeader";

import type { ContactLocale } from "@/lib/contact-copy";

export default function ContactHero({ locale = "ko" }: { locale?: ContactLocale }) {
  const en = locale === "en";
  return (
    <FiberPageHeader
      eyebrow={en ? "Contact" : "Contact / 문의"} lead="Make the" accent="connection." variant="contact"
      title={en ? "Have something complex you’d like to make simpler? Let’s talk." : "복잡한 일을 조금 더 쉽게 만들고 싶다면, 편하게 이야기해 주세요."}
      description={en ? "Whether it’s automation, design, training, or content, we can start by understanding the problem and finding a practical way forward." : "자동화, 설계, 교육, 콘텐츠 중 어느 쪽이든 괜찮습니다. 필요한 문제부터 같이 정리해보면 생각보다 빨리 방향이 잡히기도 합니다."}
      note={<><span>{en ? "Response / 1–2 business days" : "응답 / 영업일 기준 1~2일"}</span><span>{en ? "Ways to connect / Email · KakaoTalk · Video call" : "방식 / 이메일 · 카카오톡 · 원격 미팅"}</span></>}
    >
      <p>{en ? "I like to start with the right questions, then work toward an answer together." : "정답을 바로 주기보다, 지금 필요한 질문부터 같이 찾는 쪽을 선호합니다."}</p>
    </FiberPageHeader>
  );
}
