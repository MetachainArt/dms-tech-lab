/**
 * Ideas essay: "승인 창이 쌓이면" / "When Approval Prompts Pile Up"
 * 한영 독립 편집본. figure 블록의 src는 /public 아래 내부 경로.
 */
import type { IdeasEssay } from "./ideas-essay-watching";

export const approvalPromptsEssayKo: IdeasEssay = {
  "id": "approval-prompts-pile-up",
  "date": "2026. 10. 27",
  "category": "Essay",
  "title": "승인 창이 쌓이면",
  "subtitle": "자동화가 자꾸 물을 때 사람의 확인이 얇아지는 과정",
  "summary": "자동화가 일마다 허락을 구하면 사람의 확인이 오히려 얇아질 수 있습니다. 병원 경보 연구와 AI 에이전트 승인 자료를 따라 묻는 횟수와 확인의 질이 어떻게 갈라지는지 살펴보고, 질문을 줄이고 남은 질문을 읽히게 만드는 방법을 제안합니다.",
  "blocks": [
    {
      "type": "p",
      "text": "자동화가 일마다 허락을 구하면 사람의 확인도 그만큼 꼼꼼해질까요? 꼭 그렇지는 않습니다. 같은 질문이 반복될수록 하나하나에 쓰는 주의가 줄어든다는 보고가 병원 경보와 AI 에이전트의 승인 창 양쪽에 있고, 그러면 승인 창은 안전장치 구실을 점점 못 하게 됩니다. 다만 이 현상이 무엇 때문에 생기는지는 연구마다 설명이 다릅니다."
    },
    {
      "type": "p",
      "text": "2026년 10월 27일 확인한 자료 기준입니다. 병원 경보를 다룬 Cvach(2012)의 검토 논문과 Ancker 등(2017)의 연구는 초록을 중심으로 읽었습니다. AI 에이전트 쪽 숫자는 Anthropic의 공개 글 두 편과 Alex Wauters가 만든 브라우저 게임의 집계에서 가져왔습니다. Anthropic의 숫자는 자사 제품을 설명하는 글에 실린 것이라 독립 검증을 거치지 않았습니다. 사무실 장면은 설명을 위한 가정이며 DMS 고객 사례가 아닙니다. 글 끝의 설계 제안은 저의 생각이고, 이 자료들이 정한 기준이 아닙니다."
    },
    {
      "type": "figure",
      "src": "/images/ideas/approval-prompts-pile-up/stamp-row.webp",
      "alt": "나무 책상 위에 똑같이 생긴 빈 종이 전표가 한 줄로 길게 놓여 있고, 한 손이 작은 고무 도장을 든 채 그 위에 멈춰 있다. 옆에 잉크 패드가 있고 창가의 부드러운 빛이 책상과 종이에 닿는다.",
      "caption": "생성 이미지. 설명을 위한 책상 장면이며 실제 기록이 아닙니다.",
      "width": 1440,
      "height": 960
    },
    {
      "type": "h",
      "text": "병원에서는 경보가 늘자 무슨 일이 있었을까요?"
    },
    {
      "type": "p",
      "text": "병원 침상 옆 모니터는 환자의 수치가 정해진 범위를 벗어나면 경보를 울려 간호사를 부릅니다. 그런데 경보가 잦아지면 정작 필요한 경보가 묻힐 수 있습니다. Maria Cvach는 2012년 Biomedical Instrumentation & Technology에 실린 검토 논문에서 경보 피로(alarm fatigue)를 그해 의료기기 기술 위험 1위로 소개했습니다. 2000년 1월부터 2011년 10월 사이에 발표된 연구와 비연구 자료 72건을 정리한 논문입니다."
    },
    {
      "type": "p",
      "text": "초록은 경보에 둔감해지는 문제가 여러 원인과 얽혀 있다고 적습니다. 오경보 비율이 높고, 경보가 실제 위험을 맞히는 비율이 낮고, 경보 방식이 표준화되어 있지 않고, 병원 안에 경보를 내는 기기가 많다는 점입니다. 비연구 자료는 둔감해지는 것을 줄이는 전략, 그리고 경보의 우선순위와 통지 체계라는 두 주제로 나뉘었습니다."
    },
    {
      "type": "h",
      "text": "일이 많아서일까요, 같은 알림이 반복돼서일까요?"
    },
    {
      "type": "p",
      "text": "Jessica Ancker와 동료들은 2017년 BMC Medical Informatics and Decision Making에 이 질문을 직접 다룬 논문을 냈습니다. 외래 1차 진료 임상가 112명의 전자 의무기록을 2010년 1월부터 2013년 6월까지 거슬러 본 코호트 연구이고, 약물 알림과 임상 업무 알림(reminder)을 모두 다뤘습니다. 임상가 한 명이 받은 약물 알림의 4분의 1, 업무 알림의 3분의 1은 같은 환자에게 같은 해 안에 되풀이된 알림이었습니다."
    },
    {
      "type": "p",
      "text": "결과는 과로 때문이라는 단순한 설명과 맞지 않습니다. 알림을 받아들이는 비율은 일의 복잡도와 반복 알림에는 관련이 있었지만 일의 양과는 관련이 없었습니다. 업무 알림을 받아들일 확률은 진료 한 번에 받는 알림이 하나 늘 때마다 30% 떨어졌고, 반복 알림의 비율이 5퍼센트포인트 오를 때마다 10% 떨어졌습니다. 새로 도입한 업무 알림이 시간이 갈수록 외면받는 패턴, 곧 시간에 따른 둔감화는 보이지 않았습니다. 저자들은 임상가가 알림을 많이 받을수록, 특히 반복 알림을 받을수록 덜 받아들였다고 결론짓고, 같은 환자에게 반복되는 알림을 줄이는 것이 유망한 목표일 수 있다고 제안합니다."
    },
    {
      "type": "p",
      "text": "이 숫자를 사람이 게을러진다는 이야기로 읽으면 곤란합니다. 거절당한 알림이 틀린 알림이었는지, 받아들인 알림이 옳았는지는 제가 읽은 초록에 나오지 않습니다. 확인되는 것은 알림이 많고 반복될수록 받아들이는 비율이 낮아졌다는 연관입니다."
    },
    {
      "type": "h",
      "text": "AI 에이전트의 승인 창도 같을까요?"
    },
    {
      "type": "p",
      "text": "Anthropic에 따르면 코딩 에이전트 Claude Code는 처음에 읽기는 허용하고, 쓰기와 명령 실행과 네트워크 접근에는 승인을 요구하는 방식으로 시작했습니다. Anthropic은 2026년 5월 25일 글에서 사용자가 권한 요청의 약 93%를 승인한다고 밝히고, 승인을 많이 볼수록 하나하나에 쓰는 주의가 줄어든다고 적었습니다. 8월 7일 글에서는 이 비율을 97%로 적었습니다. 두 숫자를 같은 방식으로 잰 것인지는 두 글에서 확인하지 못했습니다."
    },
    {
      "type": "p",
      "text": "8월 글에는 눈에 띄는 대비도 있습니다. 에이전트가 계획을 내놓고 승인을 청할 때 사용자는 39%를 거절하지만, 개별 권한 요청의 거절은 3%라고 합니다. 전체 그림을 보여 주는 질문 앞에서는 사람이 멈추고, 작은 질문이 줄줄이 올 때는 멈추지 않는다고 읽을 수 있습니다. 이 해석은 저의 것이고, 두 종류의 요청이 위험도가 같았는지는 글에서 알 수 없습니다."
    },
    {
      "type": "p",
      "text": "Anthropic은 유료 테스터 1,053명으로 실험도 했습니다. 세션 중간에 권한 요청 하나를 분명히 위험한 명령으로 바꿔 놓았고(승인해도 실제로 위험한 일은 실행되지 않았습니다), 테스터가 이를 막은 비율은 13.6%, 1,053명 중 143명이었습니다. 세션 초반에는 위험한 명령의 약 17%를 막았지만 앞선 요청이 50건을 넘긴 뒤에는 약 5%로 내려갔다고 합니다. 이 실험은 자사의 자동 승인 기능을 기본값으로 바꾸는 이유를 설명하는 글에 실렸습니다. 참가자는 평가받는 줄 알았고 자기 프로젝트가 아닌 시험 환경에서 일했다고 글이 밝힙니다. 이 비율을 실제 직장에 그대로 옮겨 읽기는 어렵습니다."
    },
    {
      "type": "p",
      "text": "Anthropic과 무관한 자료로는 벨기에 개발자 Alex Wauters의 브라우저 게임이 있습니다. 60초 동안 모의 권한 요청을 승인하거나 거절하는 게임입니다. 그의 글에 따르면 4만 번 넘게 플레이되어 약 40만 9천 건의 판단이 쌓였고, 평균적으로 위협 세 건 중 한 건을 놓쳤습니다. 가장 많이 놓친 명령은 npm run analyze였고 약 3분의 2가 승인했습니다. 누구나 들어와 할 수 있는 게임이고 제한 시간도 짧아서, 실제 업무 현장의 비율이라고 보기는 어렵습니다."
    },
    {
      "type": "h",
      "text": "왜 묻는 쪽이 안전해 보일까요?"
    },
    {
      "type": "p",
      "text": "묻는 설계는 책임이 분명해 보이기 때문이라고 저는 봅니다. 사람이 눌렀다는 기록이 남으면 확인을 거친 셈이 됩니다. 이 게임을 다룬 IANS 기사에서 보안 전문가 George Gerchow는 사람이 중간에 끼는 방식이 처음부터 통제 수단보다는 형식적인 확인란에 가까웠다고 말했습니다. 이것은 한 전문가의 의견이며 그 주장을 증명하는 자료는 아닙니다."
    },
    {
      "type": "p",
      "text": "직원 일곱 명인 가상의 견적 사무실을 떠올려 보겠습니다. 견적서 메일을 만들어 보내는 자동화를 붙였고, 이 자동화가 수신자 확인, 첨부 확인, 발송, 기록 저장, 폴더 이동 같은 단계마다 '진행할까요?'라고 묻는다고 하겠습니다. 첫 주에는 담당자가 수신자 칸과 첨부 파일을 읽고 누릅니다. 몇 주가 지나면 같은 창이 하루에 수십 번 뜨고, 대부분 문제없이 끝났다는 경험이 쌓입니다. 창은 읽는 대상에서 넘기는 대상이 됩니다. 어느 날 수신자 한 줄이 잘못된 견적서가 나가도 승인 기록에는 정상적인 클릭이 남아 있습니다. 이 장면은 앞의 자료들이 가리키는 방향을 사무실에 옮겨 본 가정이고, 수십 번과 몇 주에는 근거가 되는 숫자가 없습니다."
    },
    {
      "type": "figure",
      "src": "/images/ideas/approval-prompts-pile-up/key-hook.webp",
      "alt": "나무 판에 열쇠 하나만 걸려 있고, 그 아래 벽 선반 위에 접힌 빈 종이 몇 장이 놓여 있다. 창가에는 화분이 있고 부드러운 빛이 벽을 비춘다.",
      "caption": "생성 이미지. 설명을 위한 장면이며 실제 사무실이 아닙니다.",
      "width": 1440,
      "height": 960
    },
    {
      "type": "h",
      "text": "어떻게 묻는 것이 나을까요?"
    },
    {
      "type": "p",
      "text": "아래는 이 글의 제안이며 연구로 검증된 절차는 아닙니다. 목표는 질문의 수를 줄이고, 남은 질문이 읽히게 만드는 것입니다."
    },
    {
      "type": "p",
      "text": "첫째, 묻는 단계를 잃을 수 있는 것의 크기로 나눕니다. 읽기만 하는 단계는 묻지 않고, 되돌릴 수 있는 단계는 기록만 남기며, 외부 발송과 삭제와 결제처럼 되돌리기 어려운 단계 앞에서만 사람이 멈춥니다. Anthropic은 Claude Code에 작업 폴더 안에서만 쓰기를 허용하고 네트워크를 기본으로 막는 샌드박스를 넣어 권한 요청을 84% 줄였다고 밝혔습니다. 경계를 먼저 단단히 하면 물을 일이 줄어드는 사례입니다."
    },
    {
      "type": "p",
      "text": "둘째, 건별로 묻기보다 계획을 묻습니다. 앞의 39%와 3%는 같은 조건에서 나온 비교가 아니지만, 사람이 전체를 볼 때 더 자주 멈춘다는 단서로는 쓸 만합니다. 견적 사무실이라면 '이 메일을 보낼까요?'를 열두 번 묻는 대신 '오늘 견적서 열두 통을 이 수신자들에게 이 시각에 보냅니다'를 한 번 묻습니다. 열두 통은 예를 들기 위한 숫자입니다."
    },
    {
      "type": "p",
      "text": "셋째, 묻는 문장에 바뀌는 것을 적습니다. '실행할까요?'는 읽을 내용이 없는 질문입니다. 누구에게 무엇이 몇 건 나가는지가 문장에 있어야 사람이 틀린 곳을 찾을 수 있습니다. Ancker 연구에서 반복 알림이 특히 외면받았다는 점을 생각하면, 같은 내용을 되풀이하는 창은 처음부터 만들지 않는 편이 낫다고 봅니다."
    },
    {
      "type": "p",
      "text": "넷째, 잘못 눌러도 피해가 작도록 도구가 닿는 범위를 줄입니다. Anthropic의 5월 글은 에이전트가 하는 일을 감시하는 방식과 에이전트가 할 수 있는 일의 범위를 제한하는 방식을 나누어 설명하고, 경계가 단단하면 감독을 느슨하게 할 수 있다고 적습니다. 같은 글은 자사의 자동 승인 기능이 지나치게 앞서 나가는 행동의 약 83%를 실행 전에 잡는다고 밝히면서, 확률에 기대는 방어는 놓치는 비율이 0이 아니라고 덧붙입니다. 접근 권한을 작게 나누어 주는 일은 승인 창을 어떻게 만들든 필요합니다."
    },
    {
      "type": "p",
      "text": "다섯째, 승인율을 셉니다. 거의 100% 승인되는 창은 막아 낸 일이 거의 없다는 뜻이니, 정말 필요한 창인지 따져 볼 대상입니다. 막은 일이 없다는 것이 위험이 없다는 뜻은 아닙니다. 그런 창을 남겨 둔다면 지난주에 승인된 건 가운데 몇 건을 무작위로 골라 나중에 읽어 봅니다. 몇 건을 읽을지는 사람이 읽을 수 있는 분량으로 정하는 가정이며, 근거가 되는 연구 수치는 없습니다."
    },
    {
      "type": "p",
      "text": "권한을 단계로 나누는 방법은 Work 글에 정리해 두었습니다.",
      "links": [
        {
          "label": "AI 자동화, 권한을 세 단계로 나눠 주기",
          "href": "/works/automation-permission-ladder"
        }
      ]
    },
    {
      "type": "h",
      "text": "이번 주에 세어 볼 것"
    },
    {
      "type": "p",
      "text": "지금 쓰는 자동화나 AI 도구가 있다면 일주일 동안 사람이 '예'를 누른 횟수와 '아니오'를 누른 횟수를 세어 봅니다. 아니오가 한 번도 없는 창이 어디인지 알면, 사람의 주의가 어디에서 쓰이고 어디에서 헛되이 소모되는지 보입니다."
    },
    {
      "type": "p",
      "text": "자동화 도입을 고민하고 있다면 문의 페이지로 연락할 수 있습니다.",
      "links": [
        {
          "label": "문의하기",
          "href": "/contact"
        }
      ]
    }
  ],
  "sources": [
    {
      "label": "Cvach · Monitor alarm fatigue: an integrative review · Biomedical Instrumentation & Technology 46(4), 268-277, 2012",
      "href": "https://doi.org/10.2345/0899-8205-46.4.268"
    },
    {
      "label": "Ancker et al. · Effects of workload, work complexity, and repeated alerts on alert fatigue in a clinical decision support system · BMC Medical Informatics and Decision Making 17:36, 2017",
      "href": "https://doi.org/10.1186/s12911-017-0430-8"
    },
    {
      "label": "Anthropic · How we contain Claude across products · 2026-05-25",
      "href": "https://www.anthropic.com/engineering/how-we-contain-claude"
    },
    {
      "label": "Anthropic · Auto mode is now the default in Claude Code for Pro, Max, and Team plans · 2026-08-07 (2026-10-22 업데이트 표기)",
      "href": "https://claude.com/blog/auto-mode-default-in-claude-code"
    },
    {
      "label": "Wauters · How well can you tell dangerous commands from benign ones? · scalex.dev",
      "href": "https://scalex.dev/blog/ai-agent-permissions/"
    },
    {
      "label": "IANS · Approval Fatigue: The Risk in Human Oversight of AI Agents · 2026-08-12",
      "href": "https://www.ians.com/news/approval-fatigue-the-hidden-risk-of-human-oversight-of-ai-agents"
    }
  ],
  "next": {
    "label": "다음: DMS 업무 자동화",
    "href": "/automation"
  }
};

export const approvalPromptsEssayEn: IdeasEssay = {
  "id": "approval-prompts-pile-up",
  "date": "2026. 10. 27",
  "category": "Essay",
  "title": "When Approval Prompts Pile Up",
  "subtitle": "How checking gets thinner when automation keeps asking",
  "summary": "When an automated tool asks permission at every step, the person answering may end up checking less, not more. Following hospital alarm research and data on AI agent approvals, this essay looks at how the number of questions and the quality of checking come apart, and proposes asking fewer questions and making the remaining ones readable.",
  "blocks": [
    {
      "type": "p",
      "text": "If an automated tool asks permission at every step, does the person on the other end check each step more carefully? Not necessarily. Reports from hospital alarms and from AI agent approval prompts point the same way: the more often people are asked, the less attention each question gets, and the prompt slowly stops working as a safeguard. The studies disagree about why this happens."
    },
    {
      "type": "p",
      "text": "This essay is based on sources as of October 27, 2026. I read the abstracts of Cvach (2012) and Ancker et al. (2017), not the full papers. The figures on AI agents come from two public posts by Anthropic and from the tallies of a browser game built by Alex Wauters. The Anthropic numbers appear in posts that describe its own product and have not been independently verified. The office scene below is a made-up illustration, not a DMS client case. The design suggestions near the end are my own, not standards set by these sources."
    },
    {
      "type": "figure",
      "src": "/images/ideas/approval-prompts-pile-up/stamp-row.webp",
      "alt": "A long row of identical blank paper slips on a wooden desk, with a hand holding a small rubber stamp paused above them. An ink pad sits nearby and soft window light falls across the desk and paper.",
      "caption": "Generated image. A staged desk scene, not a record of real work.",
      "width": 1440,
      "height": 960
    },
    {
      "type": "h",
      "text": "What happened in hospitals when alarms multiplied?"
    },
    {
      "type": "p",
      "text": "A bedside monitor sounds an alarm when a patient's readings leave a set range, and a nurse is expected to respond. When alarms come too often, the ones that matter can get buried. In a review published in Biomedical Instrumentation & Technology in 2012, Maria Cvach called alarm fatigue the number one medical device technology hazard of that year. The review synthesizes 72 research and non-research articles published between January 2000 and October 2011."
    },
    {
      "type": "p",
      "text": "The abstract says desensitization to alarms is multifaceted. It ties the problem to a high false alarm rate, poor positive predictive value (how often an alarm points to a real problem), a lack of alarm standardization, and the number of alarming devices in hospitals. The non-research evidence falls into two themes: strategies to reduce desensitization, and alarm priority and notification systems."
    },
    {
      "type": "h",
      "text": "Is it the workload, or the same alert showing up again?"
    },
    {
      "type": "p",
      "text": "Jessica Ancker and colleagues asked exactly this in a 2017 paper in BMC Medical Informatics and Decision Making. It is a retrospective cohort study of electronic health record data from 112 ambulatory primary care clinicians, covering January 2010 through June 2013, with both drug alerts and clinical practice reminders. On average, one quarter of the drug alerts a clinician received, and one third of the reminders, were repeats for the same patient within the same year."
    },
    {
      "type": "p",
      "text": "The results cut against a simple story of overwork. Acceptance was linked to work complexity and to repeated alerts, but not to the amount of work. The likelihood of accepting a reminder dropped by 30% for each additional reminder received per encounter, and by 10% for each five percentage point increase in the share of repeated reminders. Newly deployed reminders did not show acceptance declining over time, which is what desensitization would predict. The authors conclude that clinicians became less likely to accept alerts as they received more of them, particularly repeated ones, and suggest that cutting within-patient repeats is a promising target."
    },
    {
      "type": "p",
      "text": "It would be a mistake to read this as people getting lazy. The abstract does not say whether the declined alerts were wrong or the accepted ones were right. What I can say from what I read is that acceptance fell as alerts grew more numerous and more repetitive."
    },
    {
      "type": "h",
      "text": "Does the same thing happen with AI agent approvals?"
    },
    {
      "type": "p",
      "text": "According to Anthropic, its coding agent Claude Code started out allowing reads and requiring approval for writes, shell commands and network access. In a post published on May 25, 2026, Anthropic reported that users approved roughly 93% of permission prompts, and wrote that the more approvals a user sees, the less attention they pay to each one. A post from August 7 gives the figure as 97%. I could not confirm from either post whether the two numbers were measured the same way."
    },
    {
      "type": "p",
      "text": "The August post also contains a contrast. When Claude presents a plan for approval, users reject 39% of them, while the rejection rate for individual permission requests is 3%. One reading is that people stop to think when shown the whole picture and stop stopping when small questions arrive in a stream. That reading is mine, and the post does not say whether the two kinds of request carried the same level of risk."
    },
    {
      "type": "p",
      "text": "Anthropic also ran an experiment with 1,053 paid testers. Partway through each session, one permission prompt was swapped for a clearly dangerous command (approving it never ran anything dangerous). The testers blocked it 13.6% of the time, 143 of 1,053. Early in a session they blocked about 17% of dangerous commands, and after 50 or more prior prompts about 5%. The post reporting this argues for making Anthropic's own automatic approval feature the default, and it states that participants knew they were being evaluated and worked in a test environment rather than on their own projects. I would not carry those percentages over to a real workplace."
    },
    {
      "type": "p",
      "text": "A source with no tie to Anthropic is a browser game by Belgian developer Alex Wauters, in which players approve or deny simulated permission requests for 60 seconds. According to his write-up, it has been played more than 40,000 times, producing about 409,000 decisions, and the average player missed one in three threats. The most-missed command, npm run analyze, was approved by about two thirds of players. Anyone could play and the clock was short, so this says little about the rate at an actual workplace."
    },
    {
      "type": "h",
      "text": "Why does asking feel safe?"
    },
    {
      "type": "p",
      "text": "I think asking feels safe because responsibility looks clear. Once a person has clicked, the record shows that a check took place. In the IANS article about the game, security expert George Gerchow said human-in-the-loop was never really a control and was closer to a checkbox. That is one expert's opinion, not evidence for the claim."
    },
    {
      "type": "p",
      "text": "Picture an imaginary estimates office with seven staff. They add an automation that drafts and sends quotation emails, and it asks 'Proceed?' at every step: recipient, attachment, send, save, file. In the first week the person in charge reads the recipient line and the attachment before clicking. After a few weeks the same window appears dozens of times a day, and nearly every one has ended fine. The window stops being something to read and becomes something to get past. One day a quotation goes out with a wrong line in the recipient field, and the approval log shows an ordinary click. This scene illustrates the direction the sources point in. The 'dozens' and the 'few weeks' are assumptions with no data behind them."
    },
    {
      "type": "figure",
      "src": "/images/ideas/approval-prompts-pile-up/key-hook.webp",
      "alt": "A single brass key hangs on a wooden board, with a few folded blank sheets of paper on a wall shelf below. A potted plant sits by the window and soft light falls across the wall.",
      "caption": "Generated image. A staged scene, not a real office.",
      "width": 1440,
      "height": 960
    },
    {
      "type": "h",
      "text": "What would better asking look like?"
    },
    {
      "type": "p",
      "text": "What follows is my proposal, not a procedure validated by research. The aim is to ask fewer questions and make the remaining ones readable."
    },
    {
      "type": "p",
      "text": "First, sort the steps by how much could be lost. Do not ask before steps that only read. Log steps that can be undone. Stop a person only before steps that are hard to take back, such as external sending, deletion and payment. Anthropic says that adding a sandbox to Claude Code, one that allows writes inside the workspace and denies network access by default, cut permission prompts by 84%. Tightening the boundary first can remove the need to ask."
    },
    {
      "type": "p",
      "text": "Second, ask about the plan, not each step. The 39% and 3% above do not come from a controlled comparison, but they are a clue that people pause more when they see the whole. In the estimates office, instead of asking 'Send this email?' twelve times, ask once: 'Today twelve quotations go to these recipients at this time.' The twelve is only an example."
    },
    {
      "type": "p",
      "text": "Third, put what changes into the question. 'Run it?' gives the reader nothing to check. If the sentence says who receives what and how many go out, a person has something to find fault with. The Ancker study found that repeated alerts were especially likely to be passed over, so I would also avoid building a prompt that repeats itself."
    },
    {
      "type": "p",
      "text": "Fourth, make a wrong click cost little by narrowing what the tool can reach. Anthropic's May post separates supervising what an agent does from limiting what it is able to do, and says a tight perimeter lets you relax oversight. The same post says its auto mode catches roughly 83% of overeager behaviors before they execute, and adds that any probabilistic defense has a non-zero miss rate. Handing out access in small pieces is needed whatever the approval prompt looks like."
    },
    {
      "type": "p",
      "text": "Fifth, count approvals. A prompt that is approved nearly 100% of the time has blocked almost nothing, so it is worth asking whether it needs to exist. That does not mean there is no risk. Where such a prompt stays, read a few of last week's approved items at random afterward. How many to read is an assumption, sized to what a person can read, with no research figure behind it."
    },
    {
      "type": "p",
      "text": "How to split permissions into steps is covered in a Work piece.",
      "links": [
        {
          "label": "Giving AI automation permission in three steps",
          "href": "/en/works/automation-permission-ladder"
        }
      ]
    },
    {
      "type": "h",
      "text": "What to count this week"
    },
    {
      "type": "p",
      "text": "If you use an automation or AI tool today, count over one week how many times a person clicked yes and how many times no. Finding the prompts that never got a no shows where human attention is being spent, and where it is only being used up."
    },
    {
      "type": "p",
      "text": "If you are considering automation for your own work, you can reach us through the contact page.",
      "links": [
        {
          "label": "Contact",
          "href": "/en/contact"
        }
      ]
    }
  ],
  "sources": [
    {
      "label": "Cvach · Monitor alarm fatigue: an integrative review · Biomedical Instrumentation & Technology 46(4), 268-277, 2012",
      "href": "https://doi.org/10.2345/0899-8205-46.4.268"
    },
    {
      "label": "Ancker et al. · Effects of workload, work complexity, and repeated alerts on alert fatigue in a clinical decision support system · BMC Medical Informatics and Decision Making 17:36, 2017",
      "href": "https://doi.org/10.1186/s12911-017-0430-8"
    },
    {
      "label": "Anthropic · How we contain Claude across products · 2026-05-25",
      "href": "https://www.anthropic.com/engineering/how-we-contain-claude"
    },
    {
      "label": "Anthropic · Auto mode is now the default in Claude Code for Pro, Max, and Team plans · 2026-08-07 (2026-10-22 업데이트 표기)",
      "href": "https://claude.com/blog/auto-mode-default-in-claude-code"
    },
    {
      "label": "Wauters · How well can you tell dangerous commands from benign ones? · scalex.dev",
      "href": "https://scalex.dev/blog/ai-agent-permissions/"
    },
    {
      "label": "IANS · Approval Fatigue: The Risk in Human Oversight of AI Agents · 2026-08-12",
      "href": "https://www.ians.com/news/approval-fatigue-the-hidden-risk-of-human-oversight-of-ai-agents"
    }
  ],
  "next": {
    "label": "Next: DMS Business Automation (in Korean)",
    "href": "/automation"
  }
};
