/**
 * Ideas essay: "AI 없이 해 보는 날" / "A Day Without the Assistant"
 * 한영 독립 편집본. figure 블록의 src는 /public 아래 내부 경로.
 */
import type { IdeasEssay } from "./ideas-essay-watching";

export const withoutAiDayEssayKo: IdeasEssay = {
  "id": "a-day-without-ai",
  "date": "2026. 11. 4",
  "category": "Essay",
  "title": "AI 없이 해 보는 날",
  "subtitle": "도구가 거든 점수와 내 손에 남은 실력 사이",
  "summary": "AI와 함께 풀어서 오른 점수는 AI 없이 치르는 시험에서도 오를까요? 고등학생 약 1,000명의 실험과 내시경 의사 19명의 관찰 연구를 따라, 도움이 있을 때의 성적과 도움을 걷은 뒤의 실력이 어떻게 갈라질 수 있는지 살펴보고 일터에서 둘을 따로 재는 방법을 제안합니다.",
  "blocks": [
    {
      "type": "p",
      "text": "AI와 함께 풀어서 점수가 올랐다고 해서 AI 없이 하는 실력도 올랐다고 말할 수는 없습니다. 고등학생 약 1,000명이 참여한 실험에서 GPT-4로 연습한 학생들은 연습 문제 성적이 48% 높았지만, AI를 치우고 본 시험에서는 AI 없이 연습한 학생들보다 17% 낮았습니다. 폴란드 내시경 의사 19명을 본 관찰 연구에서는 병원이 AI 용종 탐지 도구를 쓰기 시작한 뒤 AI 없이 한 검사의 선종 발견율이 28.4%에서 22.4%로 내려갔습니다. 둘 다 한정된 조건에서 나온 결과여서 업무 문서나 자동화에 그대로 옮길 수는 없습니다."
    },
    {
      "type": "p",
      "text": "2026년 11월 4일 확인한 자료 기준입니다. Bastani 등(2025)의 PNAS 논문은 방법, 결과, 한계 부분의 본문을 읽었습니다. Budzyń 등(2025)의 Lancet Gastroenterology & Hepatology 논문은 초록과 학회지 요약, 언론 보도를 읽었고 본문 전체는 확인하지 못했습니다. 이 논문에는 정오표가 있다는 표시가 붙어 있는데 무엇이 고쳐졌는지는 확인하지 못했습니다. 신입 직원 장면은 설명을 위한 가정이며 DMS 고객 사례가 아닙니다. 글 끝의 제안은 저의 생각이며 이 연구들이 정한 절차가 아닙니다."
    },
    {
      "type": "figure",
      "src": "/images/ideas/a-day-without-ai/closed-laptop-notebook.webp",
      "alt": "창가 나무 책상 위에 노트북이 덮인 채 한쪽으로 밀려 있고, 펼친 공책 위에 연필이 놓여 있다. 공책에는 손으로 쓴 계산 줄이 흐릿하게 보인다. 뒤쪽에 머그컵과 초록 화분이 있고 따뜻한 아침 햇빛이 책상에 닿는다.",
      "caption": "생성 이미지. 설명을 위한 책상 장면이며 실제 기록이 아닙니다.",
      "width": 1440,
      "height": 960
    },
    {
      "type": "h",
      "text": "연습에서 오른 점수는 시험에서도 오를까요?"
    },
    {
      "type": "p",
      "text": "Hamsa Bastani와 Osbert Bastani, Alp Sungu 등은 2025년 PNAS에 튀르키예의 한 고등학교에서 한 현장 실험을 발표했습니다. 9학년부터 11학년까지 약 50개 학급, 거의 1,000명이 90분짜리 수업 네 번에 참여했습니다. 수업마다 세 부분이 이어집니다. 교사가 지난 주제를 복습하고, 학생들이 연습 문제를 풀고, 마지막에 책과 노트북을 덮고 시험을 봅니다. 무작위로 나눈 것은 가운데 연습 시간뿐입니다."
    },
    {
      "type": "p",
      "text": "학생은 세 조로 나뉘었습니다. 대조조는 AI 없이 연습했고, GPT Base 조는 ChatGPT와 비슷한 화면의 GPT-4로 연습했고, GPT Tutor 조는 교사의 의견을 반영해 정답을 바로 알려 주지 않고 힌트를 주도록 설계한 GPT-4로 연습했습니다. 연습 문제 성적은 GPT Base 조가 대조조보다 48%, GPT Tutor 조가 127% 높았습니다. 그런데 AI 없이 치른 시험에서는 GPT Base 조가 대조조보다 17% 낮았습니다(1점 만점 기준 0.054점). GPT Tutor 조는 이 하락이 거의 사라졌지만 대조조보다 높지도 않았습니다."
    },
    {
      "type": "h",
      "text": "AI를 쓴 학생들은 무엇을 했을까요?"
    },
    {
      "type": "p",
      "text": "대화 기록이 단서를 줍니다. GPT Base 조 학생들은 풀이를 달라고 해서 그대로 옮겨 적는 방식으로 쓰는 경우가 많았습니다. 논문은 이를 '목발(crutch)'처럼 쓴다고 표현합니다. GPT Tutor 조는 도움을 청하거나 직접 답을 먼저 써 보는 쪽으로 더 많이 썼습니다. 같은 GPT-4인데 화면과 지시문이 달랐더니 쓰는 방식이 달랐고, 시험 결과도 달랐습니다."
    },
    {
      "type": "p",
      "text": "학생들의 체감은 결과와 어긋났습니다. GPT Base 조는 자신이 더 못했다거나 덜 배웠다고 느끼지 않았습니다. GPT Tutor 조는 시험 성적이 대조조보다 높지 않았는데도 자신이 훨씬 잘했다고 느꼈습니다. 저자들은 이 실험이 한 학교에서 단기 결과만 살폈다고 적었고, 다른 튜터 설계와 다른 환경에서도 같은지는 더 연구해야 한다고 밝혔습니다. 몇 달 뒤에도 같은 차이가 남는지는 이 논문으로 알 수 없습니다."
    },
    {
      "type": "h",
      "text": "일하는 어른에게서도 비슷한 일이 보였을까요?"
    },
    {
      "type": "p",
      "text": "의료 현장에 한 번 더 살필 만한 연구가 있습니다. Krzysztof Budzyń과 동료들은 2025년 8월 Lancet Gastroenterology & Hepatology에 폴란드 내시경 센터 네 곳의 자료를 발표했습니다. 이 센터들은 2021년 말 AI 용종 탐지 도구를 들여왔고, 이후 대장내시경은 검사 날짜에 따라 AI를 쓰는 쪽과 쓰지 않는 쪽으로 무작위 배정됐습니다. 연구진은 도입 전 석 달과 도입 후 석 달 동안 AI 없이 한 표준 검사를 비교했습니다. 대상은 1,443명(도입 전 795명, 도입 후 648명)입니다."
    },
    {
      "type": "p",
      "text": "주요 지표는 선종 발견율입니다. 선종은 대장암으로 이어질 수 있는 용종의 한 종류이고, 이 비율은 검사 가운데 선종을 하나 이상 찾아낸 검사의 몫입니다. AI 없이 한 검사의 발견율은 도입 전 28.4%(795건 중 226건)에서 도입 후 22.4%(648건 중 145건)로 내려갔습니다. 차이는 6.0%포인트이고 95% 신뢰구간은 -10.5에서 -1.6, p값은 0.0089입니다. 환자 성별과 나이 등을 함께 넣은 분석에서도 AI에 노출된 뒤라는 요인의 오즈비가 0.69(0.53에서 0.89)로 나왔습니다."
    },
    {
      "type": "p",
      "text": "몇 가지를 더 붙이면 이렇습니다. 검사한 의사는 19명이고 모두 대장내시경 경험이 2,000건을 넘는 숙련자였다고 보도됐습니다. 이 가운데 15명은 수치상 발견율이 내려갔습니다. AI를 켜고 한 734건의 발견율은 25.3%였는데, 도입 전 28.4%보다 높지 않은 값입니다. 도움이 있는 날의 수치만으로는 의사 본인의 눈이 어떻게 달라졌는지 읽기 어렵다는 것이 이 논문을 읽고 얻은 제 해석입니다."
    },
    {
      "type": "p",
      "text": "이 연구는 회고적 관찰 연구입니다. 같은 센터에서 도입 전후를 비교했을 뿐 의사를 나누어 AI 노출을 달리한 실험이 아니어서, 발견율 하락의 원인이 AI 노출이라고 단정하기는 어렵습니다. 연구진도 결론에서 지속적인 노출이 발견율을 낮출 '수 있다'고 조심스럽게 적었습니다. ASGE 학회지에서 이 논문을 검토한 Douglas Rex는 AI가 의사의 기량을 떨어뜨리는지 처음으로 대규모로 공식 평가한 연구라고 소개하며 결과가 매우 우려스럽다고 평했고, 추가 연구가 필요하다고 덧붙였습니다. 다만 이 연구가 다룬 일은 눈으로 용종을 찾는 일이고, 문서를 쓰거나 고객에게 답하는 일은 아닙니다."
    },
    {
      "type": "figure",
      "src": "/images/ideas/a-day-without-ai/training-wheels-bench.webp",
      "alt": "나무 작업대 위에 아이 자전거에서 떼어 낸 보조 바퀴 한 쌍과 렌치가 놓여 있다. 뒤쪽 창으로 부드러운 자연광이 들어오고 헝겊과 나사가 든 유리병이 흐릿하게 보인다.",
      "caption": "생성 이미지. 설명을 위한 작업대 장면이며 실제 기록이 아닙니다.",
      "width": 1440,
      "height": 960
    },
    {
      "type": "h",
      "text": "두 연구를 나란히 놓으면 무엇이 보일까요?"
    },
    {
      "type": "p",
      "text": "연습 점수와 시험 점수, AI를 켠 날의 발견율과 끈 날의 발견율은 서로 다른 것을 잽니다. 앞의 숫자는 사람과 도구가 함께 해낸 일이고 뒤의 숫자는 도구를 걷은 뒤 사람에게 남은 일입니다. 두 연구에서 이 둘은 같은 방향으로 움직이지 않았고, 고등학생들은 그 차이를 느끼지 못했습니다. 느낌으로 확인되지 않으니 따로 재 봐야 한다고 저는 읽었습니다."
    },
    {
      "type": "p",
      "text": "도구의 설계도 눈여겨볼 대목입니다. 같은 GPT-4라도 정답 대신 힌트를 주도록 만든 쪽은 시험 점수 하락이 거의 없었습니다. AI를 쓰는지 여부 못지않게 AI가 어떤 방식으로 돕는지도 결과에 영향을 줬을 수 있습니다."
    },
    {
      "type": "h",
      "text": "일터에서는 둘을 어떻게 따로 재 볼 수 있을까요?"
    },
    {
      "type": "p",
      "text": "아래는 이 글의 제안이며 연구로 검증된 절차는 아닙니다. 장면 하나를 가정해 보겠습니다. 제품 문의에 답하는 일을 맡은 신입 직원이 석 달 동안 AI가 쓴 답변 초안을 고쳐 보냈습니다. 어느 날 시스템이 멈춰 AI 없이 답을 써야 합니다. 막히는 곳은 용어일 수도, 어조일 수도, 어디부터 확인해야 하는지일 수도 있습니다. 어디가 막히는지는 그날이 되어야 보입니다. 이 장면은 가정이며 어떤 결과가 나올지 예측하지 않습니다."
    },
    {
      "type": "p",
      "text": "첫째, 한 달에 한 번 AI 없이 해 보는 날을 정합니다. 평소 AI와 하는 일 가운데 작은 것 하나를 골라 AI 없이 해 보고, 걸린 시간과 막힌 단계를 두세 줄로 적습니다. 점수를 매기려는 것이 아니라 막힌 자리를 찾으려는 것입니다. 고등학생 실험에서는 시험이 이 역할을 했지만 일터에는 그런 시험이 따로 없습니다."
    },
    {
      "type": "p",
      "text": "기록은 세 가지면 됩니다. 걸린 시간, 막힌 단계, 그리고 평소 AI와 했을 때와 견주어 빠진 것이 있는지입니다. 막히는 단계가 같은 곳에서 반복되면 그 단계는 AI에게 맡기기 전에 사람이 한 번 익혀 두어야 할 부분으로 표시합니다. 막히지 않았다면 이 일은 맡겨도 된다는 근거가 한 건 쌓인 것입니다. 한 번의 기록으로 실력을 판정하지는 않습니다. 반복해 쌓이는 패턴을 봅니다."
    },
    {
      "type": "p",
      "text": "둘째, 익혀야 하는 일과 끝내기만 하면 되는 일을 나눕니다. 끝내는 것이 목적이면 AI에게 맡겨도 됩니다. 사람이 그 일을 익혀야 하는 단계라면 정답보다 힌트를 먼저 받도록 도구를 설정합니다. GPT Tutor 조가 이 방식이었고 시험 점수 하락이 거의 사라졌습니다. 다만 대조조보다 좋아지지는 않았다는 점도 함께 기억해야 합니다. 어떤 일을 맡기고 어떤 일을 사람이 익혀야 하는지 가르는 기준은 앞서 쓴 글에서 다뤘습니다.",
      "links": [
        {
          "label": "AI 교육은 도구 설명보다 '이 일을 맡겨도 되나'에서 시작합니다",
          "href": "/works/ai-training-task-boundary-map"
        }
      ]
    },
    {
      "type": "p",
      "text": "셋째, 판단이 사람의 몫인 일에서는 AI를 끈 상태의 정확도를 가끔 확인합니다. 내시경 연구가 보여 준 것은 AI를 켠 날의 수치만으로는 그 사람의 눈이 어떻게 달라지는지 알기 어렵다는 점입니다. 확인 주기를 얼마로 잡을지는 알지 못합니다. 위험이 큰 일일수록 짧게 잡는 편이 안전해 보인다는 것이 제 생각입니다."
    },
    {
      "type": "p",
      "text": "이번 주에는 AI와 자주 하는 일 하나를 골라 15분만 AI 없이 해 봅니다. 처음 막힌 단계를 한 줄로 적어 두면 첫 기록으로 충분합니다."
    },
    {
      "type": "p",
      "text": "AI 활용 교육이나 업무 적용을 고민하고 있다면 문의 페이지로 연락할 수 있습니다.",
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
      "label": "Bastani et al. · Generative AI without guardrails can harm learning: Evidence from high school mathematics · PNAS 122(26), e2422633122, 2025-06-25",
      "href": "https://doi.org/10.1073/pnas.2422633122"
    },
    {
      "label": "Budzyń et al. · Endoscopist deskilling risk after exposure to artificial intelligence in colonoscopy: a multicentre, observational study · The Lancet Gastroenterology & Hepatology 10(10), 896-903, 2025-08-12",
      "href": "https://doi.org/10.1016/s2468-1253(25)00133-5"
    },
    {
      "label": "ASGE Journal Scan · Rex, Does Exposure to CADe Decrease Detection Skills Without CADe? · 2025-08-22",
      "href": "https://www.asge.org/home/resources/publications/journal-scan/issue/does-exposure-to-cade-decrease-detection-skills-without-cade"
    },
    {
      "label": "The ASCO Post · Routine AI Assistance May Lead to Loss of Skills in Endoscopists, Study Shows · 2025-08-13",
      "href": "https://ascopost.com/news/august-2025/routine-ai-assistance-may-lead-to-loss-of-skills-in-endoscopists-study-shows"
    }
  ],
  "next": {
    "label": "다음: 생성형 AI 교육",
    "href": "/education/gen-ai"
  }
};

export const withoutAiDayEssayEn: IdeasEssay = {
  "id": "a-day-without-ai",
  "date": "2026. 11. 4",
  "category": "Essay",
  "title": "A Day Without the Assistant",
  "subtitle": "Between the score a tool helped produce and the skill you keep",
  "summary": "If your score went up with AI's help, did your own ability go up too? Following an experiment with about 1,000 high school students and an observational study of 19 endoscopists, this essay looks at how performance with help and skill without it can part ways, and suggests ways to measure them separately at work.",
  "blocks": [
    {
      "type": "p",
      "text": "A higher score with AI's help does not show that your own ability has risen. In an experiment with about 1,000 high school students, those who practiced with GPT-4 did 48% better on practice problems, but on an exam taken without AI they scored 17% lower than students who had practiced without it. In an observational study of 19 endoscopists in Poland, the adenoma detection rate in colonoscopies done without AI fell from 28.4% to 22.4% after the clinics began using an AI polyp-detection tool. Both findings come from narrow settings, so they cannot be carried over directly to office documents or automation."
    },
    {
      "type": "p",
      "text": "Based on sources checked on November 4, 2026. For Bastani et al. (2025, PNAS) I read the methods, results and limitations in the full text. For Budzyń et al. (2025, The Lancet Gastroenterology & Hepatology) I read the abstract, a journal-society summary and news coverage, not the full text. The record shows a correction to that paper, and I did not check what was corrected. The new hire scene is a hypothetical for illustration, not a DMS client case. The suggestions near the end are my own and are not procedures defined by these studies."
    },
    {
      "type": "figure",
      "src": "/images/ideas/a-day-without-ai/closed-laptop-notebook.webp",
      "alt": "A closed laptop pushed to one side of a wooden desk by a window, with an open notebook and a pencil in front of it. Handwritten lines of calculation are faintly visible on the page. A mug and a green plant sit behind, and warm morning light falls across the desk.",
      "caption": "Generated image. A desk scene made for illustration, not a record of a real event.",
      "width": 1440,
      "height": 960
    },
    {
      "type": "h",
      "text": "Does a higher practice score mean a higher exam score?"
    },
    {
      "type": "p",
      "text": "Hamsa Bastani, Osbert Bastani, Alp Sungu and colleagues published a field experiment in PNAS in 2025, run at a high school in Turkey. About fifty classes in grades 9 to 11, nearly 1,000 students in all, took part in four 90-minute sessions. Each session had three parts: the teacher reviewed an earlier topic, students worked through practice problems, and then everyone sat a closed-book, closed-laptop exam. Only the middle part, the practice period, was randomized."
    },
    {
      "type": "p",
      "text": "Students were split into three groups. The control group practiced without AI. The GPT Base group practiced with a GPT-4 interface that looked like ChatGPT. The GPT Tutor group used a GPT-4 interface designed with teachers' input to give hints instead of handing over answers. On the practice problems, the GPT Base group scored 48% higher than the control group and the GPT Tutor group 127% higher. On the exam without AI, the GPT Base group scored 17% lower than the control group, a drop of 0.054 on a one-point scale. In the GPT Tutor group that drop had largely disappeared, though the group did not beat the control group either."
    },
    {
      "type": "h",
      "text": "What did the students do with the AI?"
    },
    {
      "type": "p",
      "text": "The chat logs offer a clue. Many GPT Base students asked for a full solution and copied it. The authors describe this as using the tool as a 'crutch.' GPT Tutor students were more likely to ask for help or to try an answer themselves first. The underlying model was the same GPT-4. The interface and instructions differed, and so did the way students used it and the exam results."
    },
    {
      "type": "p",
      "text": "What students felt did not match what happened. The GPT Base group did not think they had performed worse or learned less. The GPT Tutor group felt they had done significantly better, even though their exam scores were no higher than the control group's. The authors note that the study covers one school and short-term outcomes only, and that other tutor designs and settings need further study. Whether the same gap remains months later cannot be read from the paper."
    },
    {
      "type": "h",
      "text": "Did something similar show up in working adults?"
    },
    {
      "type": "p",
      "text": "A study from medicine is worth a second look. Krzysztof Budzyń and colleagues published data from four endoscopy centres in Poland in The Lancet Gastroenterology & Hepatology in August 2025. The centres introduced an AI polyp-detection tool at the end of 2021, and afterwards colonoscopies were randomly assigned, by examination date, to be done with or without AI. The researchers compared standard colonoscopies done without AI in the three months before the tool arrived and the three months after. The sample was 1,443 patients: 795 before, 648 after."
    },
    {
      "type": "p",
      "text": "The main measure was the adenoma detection rate. An adenoma is a type of polyp that can develop into colorectal cancer, and the rate is the share of colonoscopies that found at least one. For examinations done without AI, it fell from 28.4% (226 of 795) before to 22.4% (145 of 648) after. The difference was 6.0 percentage points (95% CI -10.5 to -1.6; p = 0.0089). In a regression that also accounted for factors such as patient sex and age, exposure to AI had an odds ratio of 0.69 (0.53 to 0.89)."
    },
    {
      "type": "p",
      "text": "A few more details. There were 19 endoscopists, reported to have performed more than 2,000 colonoscopies each, and 15 of them showed a numerical decrease. The 734 examinations done with AI had a detection rate of 25.3%, which is not higher than the 28.4% before the tool arrived. My reading is that figures from the days with help cannot, on their own, show how the clinician's own eye has changed."
    },
    {
      "type": "p",
      "text": "This was a retrospective observational study. It compared the same centres before and after, rather than assigning doctors to different levels of AI exposure, so it is hard to say that AI exposure caused the drop. The authors themselves wrote that continuous exposure 'might' reduce the rate. Douglas Rex, who reviewed the paper for the ASGE journal scan, called it the first large-scale formal evaluation of whether AI causes physician deskilling, described the results as very concerning, and added that more studies are warranted. The task here was finding polyps by eye, not writing documents or answering customers."
    },
    {
      "type": "figure",
      "src": "/images/ideas/a-day-without-ai/training-wheels-bench.webp",
      "alt": "A pair of training wheels removed from a child's bicycle lies on a wooden workbench next to a wrench. Soft natural light comes from a window behind, and a rag and a jar of screws are blurred in the background.",
      "caption": "Generated image. A workbench scene made for illustration, not a record of a real event.",
      "width": 1440,
      "height": 960
    },
    {
      "type": "h",
      "text": "What shows up when the two studies sit side by side?"
    },
    {
      "type": "p",
      "text": "A practice score and an exam score measure different things, and so do a detection rate on days with AI and on days without. The first of each pair is what a person and a tool achieve together. The second is what remains with the person once the tool is taken away. In these two studies the pairs did not move together, and the high school students did not feel the difference. If feeling cannot confirm it, the two have to be measured separately. That reading is mine."
    },
    {
      "type": "p",
      "text": "The design of the tool deserves a look too. With the same GPT-4, the version built to give hints instead of answers largely avoided the exam drop. How the AI helps may matter as much as whether it is used at all."
    },
    {
      "type": "h",
      "text": "How could you measure the two separately at work?"
    },
    {
      "type": "p",
      "text": "What follows are my suggestions, not procedures validated by research. Picture a scene. A new hire who answers product inquiries has spent three months editing AI-written draft replies before sending them. One day the system goes down, and the replies have to be written without AI. The sticking point could be the terminology, the tone, or knowing where to start checking. You only see where on the day it happens. The scene is hypothetical and predicts no result."
    },
    {
      "type": "p",
      "text": "First, set aside one day a month to work without AI. Pick one small task you normally do with AI, do it without, and write two or three lines on how long it took and where you got stuck. The aim is to find the sticking point, not to grade anyone. The exam played that role in the high school study, and most workplaces have no equivalent."
    },
    {
      "type": "p",
      "text": "Three notes are enough for the record: how long it took, where you got stuck, and whether anything is missing compared with how it usually goes with AI. If you get stuck at the same step repeatedly, mark that step as something a person should learn once before handing it to AI. If you did not get stuck, that is one piece of evidence that the task can be handed over. A single record does not judge anyone's ability. What you watch for is the pattern that builds up over repeated records."
    },
    {
      "type": "p",
      "text": "Second, separate the tasks a person needs to learn from the tasks that only need to be finished. If the goal is just to get the work done, handing it to AI is fine. If a person needs to learn the task, set the tool to give hints before answers. That was the GPT Tutor design, and it largely removed the exam drop, though it did not beat the control group, which is worth remembering too. I wrote earlier about how to decide which tasks to hand over and which a person should learn.",
      "links": [
        {
          "label": "AI training should start with 'Should I hand this task over?'",
          "href": "/en/works/ai-training-task-boundary-map"
        }
      ]
    },
    {
      "type": "p",
      "text": "Third, for work where judgment stays with a person, check accuracy without AI now and then. What the endoscopy study suggests is that numbers recorded with AI on hand do not show how a person's own eye is changing. I do not know how often such checks should happen. My own view is that higher-stakes work calls for shorter intervals."
    },
    {
      "type": "p",
      "text": "This week, pick one task you often do with AI and do 15 minutes of it without. Writing down the first step where you got stuck is enough for a first record."
    },
    {
      "type": "p",
      "text": "If you are thinking about AI training or applying AI to your work, you can reach us through the contact page.",
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
      "label": "Bastani et al. · Generative AI without guardrails can harm learning: Evidence from high school mathematics · PNAS 122(26), e2422633122, 2025-06-25",
      "href": "https://doi.org/10.1073/pnas.2422633122"
    },
    {
      "label": "Budzyń et al. · Endoscopist deskilling risk after exposure to artificial intelligence in colonoscopy: a multicentre, observational study · The Lancet Gastroenterology & Hepatology 10(10), 896-903, 2025-08-12",
      "href": "https://doi.org/10.1016/s2468-1253(25)00133-5"
    },
    {
      "label": "ASGE Journal Scan · Rex, Does Exposure to CADe Decrease Detection Skills Without CADe? · 2025-08-22",
      "href": "https://www.asge.org/home/resources/publications/journal-scan/issue/does-exposure-to-cade-decrease-detection-skills-without-cade"
    },
    {
      "label": "The ASCO Post · Routine AI Assistance May Lead to Loss of Skills in Endoscopists, Study Shows · 2025-08-13",
      "href": "https://ascopost.com/news/august-2025/routine-ai-assistance-may-lead-to-loss-of-skills-in-endoscopists-study-shows"
    }
  ],
  "next": {
    "label": "Next: DMS Generative AI Education (in Korean)",
    "href": "/education/gen-ai"
  }
};
