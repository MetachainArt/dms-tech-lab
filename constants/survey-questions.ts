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

export type TrackId = "ops" | "content" | "optical" | "trade" | "design3d";

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
  { label: "AX(AI 전환) 문의", track: "ops" },
  { label: "자동화 및 기술교육 문의", track: "ops" },
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

  // ───────────────────────── 업무 자동화 · AX 트랙 ─────────────────────────
  {
    id: "ops-current",
    shortTitle: "업무 현황",
    title: "현재 업무 부하",
    intro: "어디에 시간이 쌓이는지부터 확인합니다. 정확하지 않아도 괜찮습니다.",
    tracks: ["ops"],
    questions: [
      {
        id: "ops_load",
        label: "지금 팀에서 시간이 가장 많이 들어가는 업무는 무엇인가요?",
        help: "1~3개 선택",
        type: "checkbox",
        maxSelect: 3,
        allowOther: true,
        options: [
          "반복적인 문서·보고서 작성",
          "여러 곳에 흩어진 데이터 취합",
          "고객·거래처 문의 응대",
          "견적·계약 등 정형 문서 처리",
          "일정·자원·재고 관리",
          "자료 조사와 시장 정보 수집",
          "사내 자료 검색과 확인",
          "승인·결재 대기와 이관",
          "기타",
        ],
      },
      {
        id: "ops_volume",
        label: "그 업무는 얼마나 자주 발생하나요?",
        type: "radio",
        options: [
          "하루에도 여러 번",
          "매일 1회 정도",
          "주 2~3회",
          "주 1회 이하",
          "정기성이 없고 불규칙하다",
        ],
      },
      {
        id: "ops_hours",
        label: "그 업무에 팀 전체가 쓰는 시간은 주당 어느 정도인가요?",
        help: "정확한 값이 아니어도 됩니다. 범위로 잡아주세요.",
        type: "radio",
        options: ["5시간 미만", "5~15시간", "15~40시간", "40시간 이상", "가늠하기 어렵다"],
      },
      {
        id: "ops_pain",
        label: "그 업무에서 가장 문제가 되는 지점은 무엇인가요?",
        help: "1~2개 선택",
        type: "checkbox",
        maxSelect: 2,
        allowOther: true,
        options: [
          "시간이 오래 걸린다",
          "사람이 바뀌면 품질이 달라진다",
          "실수와 누락이 반복된다",
          "담당자 한 명에게 몰려 있다",
          "결과를 다시 확인하는 비용이 크다",
          "기록이 남지 않아 나중에 추적이 안 된다",
          "기타",
        ],
      },
    ],
  },

  {
    id: "ops-goal",
    shortTitle: "목표와 범위",
    title: "이번에 얻고자 하는 결과",
    tracks: ["ops"],
    questions: [
      {
        id: "ops_outcome",
        label: "이번 과제가 끝났을 때 무엇이 달라져 있으면 좋을까요?",
        type: "radio",
        allowOther: true,
        options: [
          "특정 업무의 처리 시간이 눈에 띄게 줄어든다",
          "담당자가 바뀌어도 같은 품질이 나온다",
          "실수와 재작업이 줄어든다",
          "업무 현황을 실시간으로 확인할 수 있다",
          "내부에서 직접 개선할 수 있는 역량이 생긴다",
          "기타",
        ],
      },
      {
        id: "ops_mode",
        label: "진행 방식은 어느 쪽에 가까우면 좋을까요?",
        type: "radio",
        options: [
          "구축을 맡기고 결과물을 받고 싶다",
          "함께 설계하고 운영은 내부에서 하고 싶다",
          "방법을 배워서 내부에서 직접 만들고 싶다",
          "아직 정하지 못했다",
        ],
      },
      {
        id: "ops_scope",
        label: "적용 범위는 어느 정도를 생각하고 계신가요?",
        type: "radio",
        options: [
          "특정 업무 한 건으로 먼저 검증",
          "한 팀의 업무 흐름 전체",
          "여러 팀에 걸친 프로세스",
          "아직 판단이 필요하다",
        ],
      },
      {
        id: "ops_risk",
        label: "결과가 틀렸을 때의 영향은 어느 정도인가요?",
        help: "자동화 범위와 사람 확인 지점을 정하는 기준이 됩니다.",
        type: "radio",
        options: [
          "내부에서 바로 정정할 수 있다",
          "고객이나 거래처에 나가기 전에 걸러진다",
          "외부로 나가면 정정 비용이 크다",
          "법적·계약상 문제가 될 수 있다",
        ],
      },
    ],
  },

  {
    id: "ops-env",
    shortTitle: "데이터와 환경",
    title: "데이터와 시스템 환경",
    intro: "무엇이 이미 갖춰져 있는지에 따라 시작점이 달라집니다.",
    tracks: ["ops"],
    questions: [
      {
        id: "ops_data",
        label: "해당 업무의 데이터는 지금 어디에 있나요?",
        help: "복수 선택 가능",
        type: "checkbox",
        allowOther: true,
        options: [
          "사내 시스템 (ERP · CRM · 그룹웨어)",
          "스프레드시트",
          "이메일과 메신저",
          "PDF·문서 파일",
          "종이 서류",
          "담당자 개인 기록",
          "기타",
        ],
      },
      {
        id: "ops_tools",
        label: "현재 사용 중인 도구가 있나요?",
        help: "복수 선택 가능",
        type: "checkbox",
        allowOther: true,
        options: [
          "ChatGPT · Claude 등 생성형 AI",
          "n8n · Make · Zapier 등 자동화 도구",
          "Notion · Confluence 등 문서 도구",
          "Slack · Teams 등 협업 도구",
          "사내 개발 인력이 만든 스크립트",
          "특별히 없다",
          "기타",
        ],
      },
      {
        id: "ops_security",
        label: "데이터 반출에 제약이 있나요?",
        help: "자체 호스팅과 외부 서비스 중 무엇을 쓸지 결정하는 기준입니다.",
        type: "radio",
        options: [
          "외부 서비스 사용에 제약이 없다",
          "일부 데이터는 외부로 나갈 수 없다",
          "원칙적으로 모두 내부에서 처리해야 한다",
          "확인이 필요하다",
        ],
      },
      {
        id: "ops_owner",
        label: "도입 후 이 업무를 관리할 담당자가 정해져 있나요?",
        type: "radio",
        options: [
          "정해져 있다",
          "정할 예정이다",
          "아직 논의 중이다",
          "외부에서 계속 관리해 주기를 원한다",
        ],
      },
    ],
  },

  {
    id: "ops-team",
    shortTitle: "조직과 학습",
    title: "조직 상황",
    tracks: ["ops"],
    questions: [
      {
        id: "ops_size",
        label: "이 업무와 관련된 인원은 몇 분인가요?",
        type: "radio",
        options: ["1~3명", "4~10명", "11~30명", "30명 이상"],
      },
      {
        id: "ops_level",
        label: "팀의 AI·자동화 도구 경험은 어느 정도인가요?",
        type: "radio",
        options: [
          "거의 처음이다",
          "개인 단위로는 써봤지만 업무에 붙인 적은 없다",
          "일부 업무에 적용해 본 경험이 있다",
          "이미 운영 중이고 고도화 단계다",
        ],
      },
      {
        id: "ops_prev",
        label: "이전에 자동화나 AI 도입을 시도한 적이 있나요?",
        help: "중단됐다면 그 이유가 이번 설계에 중요한 정보가 됩니다.",
        type: "textarea",
        placeholder: "예: 작년에 챗봇을 도입했는데 답변 품질 문제로 3개월 만에 중단했습니다.",
      },
      {
        id: "ops_training",
        label: "교육이 함께 필요하신가요?",
        type: "radio",
        options: [
          "담당자 실무 교육이 필요하다",
          "관리자 대상 개념 교육이 필요하다",
          "둘 다 필요하다",
          "교육 없이 구축만 필요하다",
        ],
      },
    ],
  },

  // ───────────────────────── 콘텐츠 제작 트랙 ─────────────────────────
  {
    id: "content",
    shortTitle: "콘텐츠 상세",
    title: "콘텐츠 제작",
    tracks: ["content"],
    questions: [
      {
        id: "ct_purpose",
        label: "콘텐츠의 용도는 무엇인가요?",
        help: "복수 선택 가능",
        type: "checkbox",
        allowOther: true,
        options: [
          "제품·서비스 소개",
          "기술 자료와 사례 정리",
          "채용과 조직 소개",
          "교육·강의 자료",
          "전시·제안용 자료",
          "기타",
        ],
      },
      {
        id: "ct_format",
        label: "필요한 형태는 무엇인가요?",
        help: "복수 선택 가능",
        type: "checkbox",
        allowOther: true,
        options: ["글", "도해·다이어그램", "사진", "영상", "발표 자료", "기타"],
      },
      {
        id: "ct_volume",
        label: "분량과 주기는 어느 정도인가요?",
        type: "radio",
        options: [
          "단발성 프로젝트",
          "월 1~2건 정기",
          "주 1건 이상 정기",
          "아직 정하지 못했다",
        ],
      },
      {
        id: "ct_asset",
        label: "지금 가지고 계신 자료는 무엇인가요?",
        help: "복수 선택 가능",
        type: "checkbox",
        options: [
          "기존 소개 자료",
          "기술 문서와 사양서",
          "현장 사진",
          "브랜드 가이드",
          "아직 없다",
        ],
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
