/**
 * 사업자 정보 (푸터 표기용)
 *
 * ⚠️ 아래 값들은 실제 사업자등록증 내용으로 직접 채워야 합니다.
 *    빈 문자열("")로 두면 푸터에 해당 항목이 렌더링되지 않습니다.
 *    (없는 정보를 임의로 지어내면 전자상거래법상 표기 위반이 됩니다.)
 *
 * 참고 — 한국에서 사업자가 웹사이트를 운영할 때 통상 표기하는 항목:
 *   · 상호(법인명 또는 상호명)          → name
 *   · 대표자명                          → ceo
 *   · 사업자등록번호                    → businessNumber
 *   · 통신판매업 신고번호               → mailOrderNumber   (온라인 판매/결제를 할 때만 의무)
 *   · 사업장 주소                       → address
 *   · 대표 이메일                       → email
 *   · 대표 전화번호                     → tel               (선택)
 *   · 개인정보보호책임자                → privacyOfficer    (선택, 개인정보처리방침에도 표기)
 */
export const COMPANY_INFO = {
  /** 상호 */
  name: "DMS Solution",
  /** 대표자명 */
  ceo: "",
  /** 사업자등록번호 — 예: "123-45-67890" */
  businessNumber: "",
  /** 통신판매업 신고번호 — 예: "제 2026-서울강남-01234 호" (해당 없으면 빈 값) */
  mailOrderNumber: "",
  /** 사업장 주소 */
  address: "",
  /** 대표 이메일 */
  email: "dms@dmssolution.co.kr",
  /** 대표 전화번호 (선택) */
  tel: "",
  /** 개인정보보호책임자 (선택) */
  privacyOfficer: "",
} as const;

/** 푸터에 실제로 찍을 항목만 라벨과 함께 추려낸다. 값이 빈 항목은 제외. */
export function getCompanyInfoRows(): { label: string; value: string }[] {
  const rows: { label: string; value: string }[] = [
    { label: "상호", value: COMPANY_INFO.name },
    { label: "대표", value: COMPANY_INFO.ceo },
    { label: "사업자등록번호", value: COMPANY_INFO.businessNumber },
    { label: "통신판매업신고", value: COMPANY_INFO.mailOrderNumber },
    { label: "주소", value: COMPANY_INFO.address },
    { label: "이메일", value: COMPANY_INFO.email },
    { label: "전화", value: COMPANY_INFO.tel },
    { label: "개인정보보호책임자", value: COMPANY_INFO.privacyOfficer },
  ];

  return rows.filter((row) => row.value.trim().length > 0);
}
