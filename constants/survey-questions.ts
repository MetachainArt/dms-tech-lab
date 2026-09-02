/**
 * 사전 질의응답 설문 정의.
 *
 * 질문을 여기 데이터로 모아두고 ConsultingSurveyForm 은 렌더링만 담당한다.
 * 문항을 고치고 싶으면 이 파일만 수정하면 되고, 컴포넌트는 건드릴 필요가 없다.
 *
 * 핵심 구조 — 문의 유형(Q0)에 따라 이어지는 질문이 갈린다.
 *   기존 폼은 어떤 문의를 선택하든 콘텐츠·GPT 관련 25문항이 그대로 나와서,
 *   광통신·무역·3D 문의자에게는 대부분 무의미한 질문이었다.
 */

export type TrackId = "content" | "optical" | "trade" | "design3d";

export type QuestionType = "checkbox" | "radio" | "text" | "textarea" | "rank";

export interface RankItem {
  key: string;
  label: string;
}

export interface SurveyQuestion {
  id: string;
  label: string;
  /** 질문 아래 회색으로 붙는 보조 설명 */
  help?: string;
  type: QuestionType;
  options?: string[];
  /** "기타" 선택 시 자유 입력칸을 띄운다 */
  allowOther?: boolean;
  /** checkbox 에서 권장 선택 개수 (넘으면 안내만 표시, 강제로 막지는 않는다) */
  maxSelect?: number;
  required?: boolean;
  placeholder?: string;
  rankItems?: RankItem[];
}

export interface SurveySection {
  id: string;
  /** 좌측 진행 표시에 쓰이는 짧은 이름 */
  shortTitle: string;
  title: string;
  intro?: string;
  /** 비우면 모든 문의 유형에 공통으로 노출된다 */
  tracks?: TrackId[];
  questions: SurveyQuestion[];
}

/** Q0 선택지 → 이후 어떤 질문 묶음을 보여줄지 */
export const INQUIRY_TYPES: { label: string; track: TrackId }[] = [
  { label: "AX(AI 전환) 문의", track: "content" },
  { label: "자동화 및 기술교육 문의", track: "content" },
  { label: "콘텐츠 제작 문의", track: "content" },
  { label: "광통신 트레이닝 문의", track: "optical" },
  { label: "수출입 실무 교육 문의", track: "trade" },
  { label: "무역 에이전시 문의", track: "trade" },
  { label: "기술지원 문의", track: "optical" },
  { label: "3D 설계 문의", track: "design3d" },
];

export const OTHER_INQUIRY_LABEL = "기타";

/** 선택된 문의 유형들로부터 활성 트랙을 계산한다. */
export function resolveTracks(selected: string[]): TrackId[] {
  const tracks = new Set<TrackId>();

  for (const label of selected) {
    const match = INQUIRY_TYPES.find((item) => item.label === label);
    if (match) tracks.add(match.track);
  }

  return Array.from(tracks);
}

export const SURVEY_SECTIONS: SurveySection[] = [
  // ─────────────────────────────────────────────────────────
  {
    id: "basics",
    shortTitle: "기본 정보",
    title: "연락받을 정보",
    intro: "답변을 정리해 회신드릴 곳입니다. 이메일만 필수입니다.",
    questions: [
      { id: "company", label: "회사명 또는 브랜드명", type: "text", placeholder: "예: DMS Solution" },
      { id: "name", label: "성함 (직급)", type: "text", placeholder: "예: 홍길동 대표" },
      { id: "contact", label: "연락처", type: "text", placeholder: "예: 010-1234-5678" },
      {
        id: "email",
        label: "이메일 주소",
        type: "text",
        required: true,
        placeholder: "예: hong@example.com",
      },
    ],
  },

  // ─────────────────────────────────────────────────────────
  {
    id: "inquiry",
    shortTitle: "문의 유형",
    title: "어떤 문의로 오셨나요",
    intro: "선택하신 유형에 맞는 질문만 이어서 보여드립니다.",
    questions: [
      {
        id: "q0",
        label: "문의 유형을 선택해 주세요",
        help: "복수 선택 가능",
        type: "checkbox",
        options: [...INQUIRY_TYPES.map((item) => item.label), OTHER_INQUIRY_LABEL],
        allowOther: true,
        required: true,
      },
      {
        id: "situation",
        label: "지금 상황을 한두 줄로 알려주세요",
        help: "무엇 때문에 문의하셨는지만 적어주셔도 충분합니다.",
        type: "textarea",
        placeholder: "예: 매주 보고서를 손으로 정리하는데 시간이 너무 많이 듭니다.",
      },
    ],
  },

  // ───────────────────────── 콘텐츠 · 자동화 트랙 ─────────────────────────
  {
    id: "content-current",
    shortTitle: "현재 작업",
    title: "지금 가장 손이 많이 가는 일",
    tracks: ["content"],
    questions: [
      {
        id: "q1",
        label: "지금 가장 시간을 많이 쓰고 있는 작업은 무엇인가요?",
        help: "1~2개 선택",
        type: "checkbox",
        maxSelect: 2,
        allowOther: true,
        options: [
          "업무 자동화",
          "뉴스레터 만들기",
          "블로그 글 작성",
          "쓰레드 / SNS 글 작성",
          "이미지 만들기",
          "홈페이지 / 포트폴리오 정리",
          "자료 수집 및 정리",
          "콘텐츠를 꾸준히 올리는 운영 루틴 만들기",
          "기타",
        ],
      },
      {
        id: "q2",
        label: "가장 먼저 해결하고 싶은 1순위는 무엇인가요?",
        type: "radio",
        allowOther: true,
        options: [
          "GPT로 글을 더 빨리 쓰는 방법",
          "글 + 이미지까지 함께 만드는 방법",
          "반복 가능한 반자동화 흐름 익히기",
          "홈페이지 / 포트폴리오 정리 방식 배우기",
          "AI를 활용한 문제해결 방식 자체를 배우기",
          "기타",
        ],
      },
      {
        id: "q3",
        label: "아래 항목의 우선순위를 정해주세요",
        help: "1순위부터 4순위까지",
        type: "rank",
        rankItems: [
          { key: "newsletter", label: "뉴스레터" },
          { key: "blog", label: "블로그 / SNS" },
          { key: "image", label: "이미지 제작" },
          { key: "portfolio", label: "홈페이지 등" },
        ],
      },
    ],
  },

  {
    id: "content-direction",
    shortTitle: "원하는 방향",
    title: "이번 자문에서 원하는 방향",
    tracks: ["content"],
    questions: [
      {
        id: "q4",
        label: "어느 쪽에 더 가깝게 진행되면 좋으실까요?",
        type: "radio",
        options: [
          "하나라도 실제 결과물을 만들어보고 싶다",
          "제가 직접 이해하고 나중에 혼자 할 수 있게 배우고 싶다",
          "결과물도 만들고, 방법도 배우고 싶다",
        ],
      },
      {
        id: "q5",
        label: "끝났을 때 꼭 남기고 싶은 결과물 1개는 무엇인가요?",
        type: "text",
        placeholder: "예: 뉴스레터 초안 1개",
      },
      {
        id: "q6",
        label: "가장 기대하는 변화는 무엇인가요?",
        help: "1~2개 선택",
        type: "checkbox",
        maxSelect: 2,
        allowOther: true,
        options: [
          "콘텐츠 작성 시간이 줄었으면 좋겠다",
          "혼자서도 꾸준히 운영할 수 있었으면 좋겠다",
          "GPT를 실무에 제대로 써보고 싶다",
          "코딩 / 자동화에 대한 두려움을 줄이고 싶다",
          "내 서비스 고도화에 연결하고 싶다",
          "향후 교육 프로그램으로도 확장해보고 싶다",
          "기타",
        ],
      },
    ],
  },

  {
    id: "content-tools",
    shortTitle: "도구와 환경",
    title: "현재 사용 가능한 도구와 환경",
    tracks: ["content"],
    questions: [
      {
        id: "q7",
        label: "현재 사용 중인 도구가 있으신가요?",
        type: "checkbox",
        allowOther: true,
        options: [
          "ChatGPT",
          "Claude",
          "Notion",
          "Canva",
          "Buffer",
          "Stibee",
          "홈페이지 관리자 페이지",
          "기타",
        ],
      },
      {
        id: "q8",
        label: "유료로 사용 중인 도구가 있다면 적어주세요",
        type: "text",
        placeholder: "예: ChatGPT Plus, Canva Pro",
      },
      {
        id: "q9",
        label: "실습 환경은 어떤 것이 편하신가요?",
        type: "radio",
        options: [
          "설치 없이 브라우저에서 하는 방식이 편하다",
          "간단한 설치형 도구는 괜찮다",
          "둘 다 가능하다",
        ],
      },
      {
        id: "q10",
        label: "사용 중인 컴퓨터 환경은 무엇인가요?",
        type: "radio",
        options: ["윈도우", "맥", "둘 다 있음"],
      },
      {
        id: "q11",
        label: "새로운 도구를 배우는 체감 난이도는 어느 정도인가요?",
        type: "radio",
        options: [
          "거의 처음이라 아주 쉽게 설명해주시면 좋겠다",
          "기본 사용은 가능하지만 실무 연결이 어렵다",
          "어느 정도 익숙해서 응용 위주로 배우고 싶다",
        ],
      },
    ],
  },

  {
    id: "content-brand",
    shortTitle: "콘텐츠 · 이미지",
    title: "콘텐츠 방향과 이미지",
    tracks: ["content"],
    questions: [
      {
        id: "q12",
        label: "가장 자주 만들고 싶은 콘텐츠 유형은 무엇인가요?",
        help: "1~2개 선택",
        type: "checkbox",
        maxSelect: 2,
        allowOther: true,
        options: [
          "정보성 글",
          "교육 후기",
          "트렌드 큐레이션",
          "브랜드 홍보형 콘텐츠",
          "수강생 사례 / 포트폴리오 소개",
          "짧은 SNS용 글",
          "기타",
        ],
      },
      {
        id: "q13",
        label: "가장 자주 다루고 싶은 주제 3가지를 적어주세요",
        type: "text",
        placeholder: "예: 업무 자동화, 광통신 현장, AI 도구 리뷰",
      },
      {
        id: "q14",
        label: "콘텐츠 톤은 어떤 느낌이 좋으신가요?",
        help: "1~2개 선택",
        type: "checkbox",
        maxSelect: 2,
        options: [
          "전문적이고 신뢰감 있는 톤",
          "친근하고 쉽게 읽히는 톤",
          "감각적이고 브랜드적인 톤",
          "교육용 차분한 톤",
          "상황에 따라 다르게 쓰고 싶다",
        ],
      },
      {
        id: "q15",
        label: "참고하고 있는 브랜드 / 계정 / 사이트가 있다면 적어주세요",
        type: "text",
        placeholder: "계정이나 사이트 URL",
      },
      {
        id: "q16",
        label: "이미지 제작도 함께 다루고 싶으신가요?",
        type: "radio",
        options: ["예", "아니오", "가능하면 포함하고 싶다"],
      },
      {
        id: "q17",
        label: "이미지가 필요하다면 어떤 용도가 우선일까요?",
        help: "1~2개 선택 · 위에서 '아니오'를 고르셨다면 건너뛰세요",
        type: "checkbox",
        maxSelect: 2,
        options: [
          "뉴스레터 대표 이미지",
          "블로그 삽입 이미지",
          "쓰레드 / 인스타용 홍보 이미지",
          "카드뉴스형 이미지",
          "브랜드 무드 이미지",
          "교육 홍보용 이미지",
        ],
      },
      {
        id: "q18",
        label: "이미지 스타일은 어느 쪽이 더 좋으신가요?",
        type: "radio",
        options: ["실사 느낌", "감성적 / 무드형", "브랜드 홍보형", "패션 비주얼 중심", "아직 잘 모르겠다"],
      },
      {
        id: "q19",
        label: "이미지도 직접 프롬프트를 써보며 배우고 싶으신가요?",
        type: "radio",
        options: [
          "예, 직접 해보고 싶다",
          "예시를 먼저 보고 수정하는 방식이 좋다",
          "일단 결과물이 먼저 보이면 좋겠다",
        ],
      },
    ],
  },

  {
    id: "content-automation",
    shortTitle: "자동화 수준",
    title: "자동화와 바이브코딩",
    tracks: ["content"],
    questions: [
      {
        id: "q20",
        label: "이번 자문에서 가장 궁금한 것은 무엇인가요?",
        help: "1~2개 선택",
        type: "checkbox",
        maxSelect: 2,
        options: [
          "GPT를 활용한 글쓰기",
          "이미지 생성 도구 활용",
          "n8n 같은 자동화 도구",
          "바이브코딩 방식 자체",
          "아직 도구보다 전체 흐름이 궁금하다",
        ],
      },
      {
        id: "q21",
        label: "자동화는 어느 수준을 기대하고 계신가요?",
        type: "radio",
        options: [
          "완전 자동화보다 반자동화면 충분하다",
          "초안까지만 자동으로 나오면 좋겠다",
          "글 + 이미지까지 어느 정도 자동화되면 좋겠다",
          "아직 자동화보다 GPT 활용부터 배우고 싶다",
        ],
      },
      {
        id: "q22",
        label: "코딩 / 자동화 학습 의향은 어느 정도 있으신가요?",
        type: "radio",
        options: [
          "어렵더라도 조금씩 배워보고 싶다",
          "너무 어렵지 않은 범위까지만 배우고 싶다",
          "코딩보다는 실무 활용 위주가 좋다",
        ],
      },
      {
        id: "q23",
        label: "과정이 끝났을 때 가장 만족스러울 결과는 무엇인가요?",
        type: "radio",
        options: [
          "콘텐츠 1건 완성",
          "글 + 이미지 1세트 완성",
          "반복 가능한 작업 루틴 정리",
          "GPT로 혼자 초안을 만들 수 있는 상태",
          "자동화 구조를 이해하고 조금 수정할 수 있는 상태",
        ],
      },
      {
        id: "q24",
        label: "교육 후 한 달 안에 어느 정도 활용해보고 싶으신가요?",
        type: "radio",
        options: ["주 1회 정도", "월 2회 정도", "월 1회 정도", "아직 테스트 수준이면 좋겠다"],
      },
    ],
  },

  // ───────────────────────── 광통신 · 기술지원 트랙 ─────────────────────────
  {
    id: "optical",
    shortTitle: "광통신 상세",
    title: "광통신 트레이닝 · 기술지원",
    intro: "현장 조건을 알면 커리큘럼과 실습 구성을 훨씬 정확하게 잡을 수 있습니다.",
    tracks: ["optical"],
    questions: [
      {
        id: "opt_scope",
        label: "어떤 범위를 다루면 좋을까요?",
        help: "복수 선택 가능",
        type: "checkbox",
        allowOther: true,
        options: [
          "FTTx 망 구조와 설계 기본",
          "광 파워 버짓 계산",
          "OTDR 측정과 장애 추적",
          "융착접속 · 커넥터 처리",
          "장비 운용과 유지보수",
          "현장 시공 표준과 검수",
          "장비 도입 전 사양 검토",
          "기타",
        ],
      },
      {
        id: "opt_audience",
        label: "교육 · 지원 대상은 몇 분인가요?",
        type: "radio",
        options: ["1~5명", "6~15명", "16~30명", "30명 이상", "아직 미정"],
      },
      {
        id: "opt_level",
        label: "대상자의 현재 수준은 어느 정도인가요?",
        type: "radio",
        options: [
          "입문 — 광통신을 처음 접한다",
          "현장 경험은 있으나 이론이 부족하다",
          "숙련자 대상 심화가 필요하다",
          "수준이 섞여 있다",
        ],
      },
      {
        id: "opt_format",
        label: "진행 형태는 어떤 쪽을 생각하고 계신가요?",
        type: "radio",
        options: ["온라인", "현장 방문 교육", "온라인 + 현장 혼합", "아직 미정"],
      },
      {
        id: "opt_equipment",
        label: "보유하신 장비나 실습 환경이 있다면 적어주세요",
        help: "OTDR, 광원·파워미터, 융착기, 실습용 케이블 등",
        type: "textarea",
        placeholder: "예: OTDR 2대 보유, 융착기 없음",
      },
    ],
  },

  // ───────────────────────── 무역 · 수출입 트랙 ─────────────────────────
  {
    id: "trade",
    shortTitle: "무역 상세",
    title: "무역 에이전시 · 수출입 실무",
    tracks: ["trade"],
    questions: [
      {
        id: "trade_support",
        label: "어떤 지원이 필요하신가요?",
        help: "복수 선택 가능",
        type: "checkbox",
        allowOther: true,
        options: [
          "공급처 소싱",
          "사양 검토와 제품 비교",
          "견적 · 계약 조건 검토",
          "통관 · 물류 실무",
          "담당자 수출입 실무 교육",
          "현지 시장 조사",
          "기타",
        ],
      },
      {
        id: "trade_item",
        label: "취급하시려는 품목은 무엇인가요?",
        type: "text",
        placeholder: "예: FTTx 광단자함, 융착접속기",
      },
      {
        id: "trade_market",
        label: "대상 시장 또는 국가가 정해져 있나요?",
        type: "text",
        placeholder: "예: 중동(UAE, 사우디), 동남아",
      },
      {
        id: "trade_stage",
        label: "현재 어느 단계에 계신가요?",
        type: "radio",
        options: [
          "검토 초기 — 가능성부터 보고 있다",
          "공급처를 찾는 중이다",
          "견적을 비교하는 중이다",
          "곧 발주 예정이다",
          "이미 진행 중인데 문제가 생겼다",
        ],
      },
    ],
  },

  // ───────────────────────── 3D 설계 트랙 ─────────────────────────
  {
    id: "design3d",
    shortTitle: "3D 설계 상세",
    title: "3D 설계 · 모델링",
    tracks: ["design3d"],
    questions: [
      {
        id: "d3_target",
        label: "무엇을 만들려고 하시나요?",
        type: "text",
        placeholder: "예: 광단자함 외함, 거치대 브래킷",
      },
      {
        id: "d3_purpose",
        label: "어떤 목적으로 쓰실 건가요?",
        help: "복수 선택 가능",
        type: "checkbox",
        allowOther: true,
        options: [
          "형상과 크기를 눈으로 검토",
          "실제 제작용 도면",
          "홍보 · 제안용 렌더링 이미지",
          "구조 · 조립 검토",
          "기존 제품 개선",
          "기타",
        ],
      },
      {
        id: "d3_material",
        label: "지금 가지고 계신 자료는 무엇인가요?",
        help: "복수 선택 가능",
        type: "checkbox",
        options: [
          "손스케치 또는 아이디어만",
          "치수가 있는 도면",
          "실물 샘플",
          "기존 3D 파일",
          "참고할 경쟁 제품 사진",
          "아직 없다",
        ],
      },
      {
        id: "d3_output",
        label: "필요한 산출물 형식이 있나요?",
        help: "복수 선택 가능",
        type: "checkbox",
        options: ["STEP / IGES", "STL", "렌더링 이미지", "도면 PDF", "아직 모르겠다"],
      },
    ],
  },

  // ─────────────────────────────────────────────────────────
  {
    id: "closing",
    shortTitle: "일정과 마무리",
    title: "일정과 마무리",
    questions: [
      {
        id: "timeline",
        label: "언제쯤 시작하면 좋을까요?",
        type: "radio",
        options: ["2주 이내", "1개월 이내", "1~3개월 사이", "아직 미정"],
      },
      {
        id: "budget",
        label: "예산은 정해져 있나요?",
        help: "정해지지 않았어도 괜찮습니다. 범위를 잡는 데만 참고합니다.",
        type: "radio",
        options: ["대략 정해져 있다", "협의 후 정하려 한다", "아직 전혀 미정이다"],
      },
      {
        id: "concern",
        label: "가장 걱정되거나 궁금한 점이 있다면 적어주세요",
        type: "textarea",
        placeholder: "예: 따라가지 못할까 걱정, 도구가 너무 많을까 걱정 등",
      },
    ],
  },
];

/** 선택된 트랙에 해당하는 섹션만 순서대로 돌려준다. */
export function getVisibleSections(tracks: TrackId[]): SurveySection[] {
  return SURVEY_SECTIONS.filter(
    (section) => !section.tracks || section.tracks.some((track) => tracks.includes(track))
  );
}
