export type ContactLocale = "ko" | "en";

export const contactCopy = {
  ko: {
    infoTitle: "이렇게 이야기할 수 있습니다", email: "이메일", response: "응답",
    responseTime: "영업일 기준 1~2일 내 답장", topics: "주로 받는 문의", directEmail: "이메일로 바로 문의하기",
    formTitle: "현재 필요한 문제를 적어 주세요", formDescription: "목적, 현재 상황, 참고하고 싶은 사례가 있다면 함께 적어주시면 더 정확하게 답할 수 있습니다.",
    done: "완료", success: "문의가 정상적으로 접수되었습니다.", successDescription: "남겨주신 내용을 확인한 뒤 영업일 기준 1~2일 안에 답장드리겠습니다.",
    confirmationFailed: "문의는 접수되었지만 자동 확인 메일을 보내지 못했습니다. 다시 제출하지 않으셔도 됩니다.",
    name: "이름", namePlaceholder: "홍길동", company: "회사 / 팀", optional: "선택 입력", timeline: "희망 일정", timelinePlaceholder: "예: 4월 안, 최대한 빨리",
    inquiryType: "문의 유형", select: "선택해 주세요", budget: "예산 범위", message: "문의 내용", messagePlaceholder: "지금 겪고 있는 문제, 원하는 결과, 참고 사례 등을 적어 주세요.",
    privacy: "입력하신 정보는 문의 답변을 위해서만 사용하며, 답변 완료 후 안전하게 관리합니다.", sending: "보내는 중...", send: "문의 보내기", emailSend: "이메일로 보내기",
    failure: "문의 처리 중 오류가 발생했습니다. 잠시 후 다시 시도해주세요.", rateLimited: "요청이 너무 많습니다. 잠시 후 다시 시도해주세요.", invalidEmail: "유효한 이메일을 입력해주세요.", requiredMessage: "문의 내용을 입력해주세요.", invalidBody: "입력 내용을 확인해주세요.", unavailable: "현재 문의 양식을 사용할 수 없습니다. dms@dmssolution.co.kr로 이메일을 보내주세요.",
    requiredFields: "이름, 이메일, 문의 유형과 문의 내용을 확인해주세요.",
    assessmentTitle: "[자동화 우선순위 진단 결과]", score: "점수", tier: "단계", industry: "업종", summary: "요약", recommendation: "권장 시나리오", assessmentRequest: "위 진단 결과를 바탕으로 초기 도입 범위와 예상 ROI를 상담받고 싶습니다.",
    inquiryTypes: ["서비스 문의", "SaaS·앱 제휴", "3D·디자인 프로젝트", "자동화·개발 의뢰", "교육 및 워크숍", "기타"],
    budgetRanges: ["500만원 미만", "500만원 ~ 1,000만원", "1,000만원 ~ 3,000만원", "3,000만원 ~ 5,000만원", "5,000만원 이상", "미정 / 협의 필요"],
  },
  en: {
    infoTitle: "Let’s start a conversation", email: "Email", response: "Response time",
    responseTime: "A reply within 1–2 business days", topics: "What we can discuss", directEmail: "Get in touch by email",
    formTitle: "Tell me what you need", formDescription: "Share your goals, current situation, and any examples you have in mind so I can give you a more useful response.",
    done: "Sent", success: "Your inquiry has been received.", successDescription: "I’ll review your message and reply within 1–2 business days.",
    confirmationFailed: "Your inquiry was received, but the automatic confirmation email could not be sent. You do not need to submit it again.",
    name: "Name", namePlaceholder: "Your name", company: "Company / team", optional: "Optional", timeline: "Preferred timeline", timelinePlaceholder: "e.g. By April, as soon as possible",
    inquiryType: "Inquiry type", select: "Please select", budget: "Budget (KRW)", message: "Your message", messagePlaceholder: "Describe the problem, the outcome you want, and any useful references.",
    privacy: "The information you provide is used only to respond to your inquiry and is handled securely after our conversation.", sending: "Sending...", send: "Send inquiry", emailSend: "Send an email",
    failure: "We couldn’t process your inquiry. Please try again later.", rateLimited: "Too many requests. Please try again in a moment.", invalidEmail: "Please enter a valid email address.", requiredMessage: "Please enter your message.", invalidBody: "Please check the information you entered.", unavailable: "The contact form is currently unavailable. Please email dms@dmssolution.co.kr.",
    requiredFields: "Please check your name, email, inquiry type, and message.",
    assessmentTitle: "[Automation priority assessment]", score: "Score", tier: "Stage", industry: "Industry", summary: "Summary", recommendation: "Recommended scenario", assessmentRequest: "I’d like to discuss an initial implementation scope and expected ROI based on this assessment.",
    inquiryTypes: ["Service inquiry", "SaaS / app partnership", "3D / design project", "Automation / development", "Training and workshops", "Other"],
    budgetRanges: ["Under KRW 5 million", "KRW 5–10 million", "KRW 10–30 million", "KRW 30–50 million", "KRW 50 million or more", "To be discussed"],
  },
};
