import FiberPageHeader from "@/components/brand/FiberPageHeader";

export default function ContactHero() {
  return (
    <FiberPageHeader
      eyebrow="Contact / 문의" lead="Make the" accent="connection." variant="contact"
      title="복잡한 일을 조금 더 쉽게 만들고 싶다면, 편하게 이야기해 주세요."
      description="자동화, 설계, 교육, 콘텐츠 중 어느 쪽이든 괜찮습니다. 필요한 문제부터 같이 정리해보면 생각보다 빨리 방향이 잡히기도 합니다."
      note={<><span>응답 / 영업일 기준 1~2일</span><span>방식 / 이메일 · 카카오톡 · 원격 미팅</span></>}
    >
      <p>정답을 바로 주기보다, 지금 필요한 질문부터 같이 찾는 쪽을 선호합니다.</p>
    </FiberPageHeader>
  );
}
