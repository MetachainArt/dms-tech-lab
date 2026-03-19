export interface WorkStep {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  readTime: string;
}

export interface WorkProject {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  coverImage: string;
  color: string;
  tags: string[];
  status: string;
  steps: WorkStep[];
}

export interface WorkLanding {
  id: string;
  title: string;
  description: string;
  projects: WorkProject[];
}

export const WORKS_DATA: Record<string, WorkLanding> = {
  "ai-education": {
    id: "ai-education",
    title: "실무형 AI 교육 프로그램 설계",
    description: "처음 배우는 사람도 바로 써볼 수 있도록 실습 중심 커리큘럼과 예제를 설계했습니다.",
    projects: [
      {
        id: "sj-atelier",
        title: "SJ Atelier 기술 자문",
        subtitle: "AI AUTOMATION CONSULTING",
        description: "콘텐츠 운영과 GPT 활용 흐름을 실제 업무에 맞게 다시 정리하고, 9시간 자문 커리큘럼으로 연결한 교육 설계 프로젝트입니다.",
        coverImage: "/images/sj.png",
        color: "blue",
        tags: ["자동화", "교육", "컨설팅"],
        status: "진행 중",
        steps: [
          {
            id: "step-1",
            title: "SJ Atelier 기술자문 사전 진단",
            excerpt: "지금 가장 시간이 많이 드는 작업과 이번 자문에서 먼저 풀어야 할 문제를 정리한 단계입니다.",
            date: "2026. 03. 19",
            readTime: "2 min",
            content: `
이번 자문은 도구 설명보다 먼저 현재 어떤 일에 시간이 가장 많이 쓰이고 있는지 확인하는 데서 시작했습니다. 뉴스레터, 블로그, SNS, 이미지, 홈페이지 운영 중 어디가 가장 큰 병목인지부터 정리했습니다.

핵심은 자동화 자체보다 우선순위를 정확히 잡는 일이었습니다. 이번 단계에서 이후 커리큘럼이 막연한 AI 활용 교육이 아니라 실제 운영 문제를 다루는 구조로 바뀌었습니다.
            `.trim(),
          }
        ]
      }
    ]
  }
};
