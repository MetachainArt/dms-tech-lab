/**
 * Ideas essay: "AI가 ‘잘 모르겠다’고 할 때" / "When the AI Says “I’m Not Sure”"
 * 한영 독립 편집본. figure 블록의 src는 /public 아래 내부 경로.
 */
import type { IdeasEssay } from "./ideas-essay-watching";

export const notSureEssayKo: IdeasEssay = {
  "id": "when-ai-says-not-sure",
  "date": "2026. 11. 13",
  "category": "Essay",
  "title": "AI가 ‘잘 모르겠다’고 할 때",
  "subtitle": "불확실하다는 말이 읽는 사람에게 하는 일",
  "summary": "AI의 답 앞에 ‘잘 모르겠지만’을 붙이자 사람들은 AI와 같은 답을 덜 냈고 정답률은 올랐습니다. 2024년 FAccT 실험을 따라 어디까지 말할 수 있는지 살피고, 일터에서 AI가 자신 없게 말할 때 해 볼 일을 DMS.Labs의 제안으로 적습니다.",
  "blocks": [
    {
      "type": "p",
      "text": "AI의 답 앞에 ‘잘 모르겠지만’이라는 말머리를 붙이면 읽는 사람의 판단이 달라질까요? 한 실험에서는 달라졌습니다. 말머리가 붙은 답을 본 사람들은 AI와 같은 답을 내는 비율이 줄었고 정답률은 올랐습니다. 다만 AI가 틀린 문제에서 사람이 입는 손해가 사라지지는 않았습니다. 2024년 FAccT에 실린 연구이고, 과제는 일반인이 답을 알기 어려운 의학 분야의 예/아니오 문제 여덟 개였습니다. 문서 작성이나 업무 판단에도 같은 결과가 나온다고 이 연구만으로 말할 수는 없습니다. 이 글에서는 실험이 실제로 무엇을 바꿨는지 따라가 보고, 일터에서 AI가 자신 없게 말할 때 해 볼 만한 일을 DMS.Labs의 제안으로 적습니다."
    },
    {
      "type": "p",
      "text": "2026년 11월 13일 확인한 자료 기준입니다. Kim, Liao, Vorvoreanu, Ballard, Vaughan의 논문(FAccT ’24, 2024년 6월)은 arXiv 공개본(v2)의 방법, 결과, 논의, 한계 부분을 읽었고 부록은 읽지 못했습니다. 두 번째로 다루는 Steyvers 등의 연구는 학술지 초록만 읽었습니다. 사무실 장면은 설명을 위한 가정이며 DMS 고객 사례가 아닙니다. 마지막 제안은 DMS.Labs의 생각이고 어떤 논문도 시험하지 않은 방법입니다."
    },
    {
      "type": "figure",
      "src": "/images/ideas/when-ai-says-not-sure/glasses-highlighted-page.webp",
      "alt": "창가의 낡은 나무 탁자 위에 안경이 인쇄된 종이 한 장 위에 놓여 있고, 종이의 한 줄에는 옅은 노란색 형광펜이 칠해져 있다. 옆에 연필과 머그컵, 뒤쪽에 화분이 보이며 부드러운 아침 햇빛이 비친다. 읽을 수 있는 글자는 없다.",
      "caption": "생성 이미지. 설명을 위한 책상 장면이며 실제 기록이 아닙니다.",
      "width": 1440,
      "height": 960
    },
    {
      "type": "h",
      "text": "실험에서 ‘잘 모르겠다’는 말은 어떻게 붙었을까요?"
    },
    {
      "type": "p",
      "text": "참가자는 미국의 온라인 작업 플랫폼(Amazon Mechanical Turk) 이용자였습니다. 2023년 9월 두 주 동안 받은 완료 응답 656건에서 사전에 정한 다섯 가지 기준으로 252건(38.4%)을 빼고 404명을 분석했습니다. 참가자는 네 집단으로 나뉘었습니다. AI 답을 말머리 없이 본 집단이 104명, ‘잘 모르겠지만 …인 것 같습니다’ 같은 1인칭 표현을 본 집단이 92명, ‘불확실하지만 …인 것 같습니다’ 같은 주어 없는 표현을 본 집단이 94명, AI 없이 혼자 푼 집단이 114명입니다. 두 표현은 원문 영어를 옮긴 것입니다."
    },
    {
      "type": "p",
      "text": "문제는 의학 분야의 예/아니오 질문 여덟 개였습니다. 일반인이 답을 알기 어렵고 질문을 검색창에 그대로 넣어도 답이 바로 나오지 않는 것으로 골랐습니다. AI는 가상의 검색 엔진 ‘AI system A’로 소개됐지만 답은 2023년 7월 Copilot in Bing이 실제로 낸 답을 조금만 고쳐 썼습니다. 여덟 개 중 네 개는 맞고 네 개는 틀린 답이어서 AI의 정답률은 50%였습니다. 무작정 따라가도 동전 던지기와 같은 확률이 되도록 짠 설계입니다."
    },
    {
      "type": "p",
      "text": "불확실 표현은 여덟 개 답 가운데 절반에만 붙었고, 어느 문제에 붙일지는 무작위로 정했습니다. 말머리를 빼면 세 집단이 본 정보는 같았습니다. 그러니 이 실험이 보여 주는 것은 AI가 틀릴 법한 답에 제대로 경고했을 때의 효과가 아닙니다. 답 속 한 구절이 달라졌을 때 사람이 어떻게 움직이는지입니다. 저자들도 한계에서 실험의 AI가 정확도가 낮았고 불확실하다는 말을 자주, 보정이 잘 되지 않은 방식으로 썼다고 밝혔습니다."
    },
    {
      "type": "h",
      "text": "같은 답에 한마디가 붙으면 읽는 사람은 어떻게 달라졌을까요?"
    },
    {
      "type": "p",
      "text": "말머리가 없는 집단에서는 80.9%가 AI와 같은 답을 냈습니다. 혼자 푼 집단이 우연히 AI와 같은 답에 이른 비율은 58.4%였으니 AI의 영향은 분명합니다. 1인칭 표현을 본 집단은 74.8%로, 통계적으로 의미 있게 낮았습니다. 주어 없는 표현을 본 집단은 77.6%였고 이 차이는 의미 있는 수준이 아니었습니다."
    },
    {
      "type": "p",
      "text": "정답률은 말머리 없는 집단 63.9%, 1인칭 집단 72.8%, 주어 없는 집단 67.9%, AI 없이 푼 집단 74.2%였습니다. 말머리 없는 집단과 견줘 의미 있는 차이가 난 쪽은 1인칭 집단뿐입니다. 두 말머리 사이의 정답률 차이는 의미 있다고 보고되지 않았으므로, 이 결과만으로 어느 쪽 표현이 낫다고 가리기는 어렵습니다."
    },
    {
      "type": "p",
      "text": "AI 답에 대한 확신은 5점 만점에 말머리 없는 집단 3.95, 1인칭 집단 3.66, 주어 없는 집단 3.80이었습니다. 이 시스템을 앞으로 쓰고 싶은 마음을 묻는 점수는 1인칭 집단이 2.91로, 말머리 없는 집단의 3.25와 주어 없는 집단의 3.36보다 낮았습니다. 답이 줄곧 확답을 피해서 믿기 어려웠다고 적은 참가자도 있었습니다. 그런데 시스템이 믿을 만하다고 보는지를 묻는 점수에는 집단 차이가 없었습니다. 말머리는 AI를 덜 쓰고 싶게 만들었지만, 전체적인 신뢰 평가를 뒤집지는 않았습니다."
    },
    {
      "type": "h",
      "text": "AI가 맞았을 때와 틀렸을 때는 각각 어땠을까요?"
    },
    {
      "type": "p",
      "text": "연구진은 AI가 맞힌 네 문제와 틀린 네 문제를 나눠 정답률을 따로 봤습니다. 사전에 등록한 검정이 아니라 탐색 분석입니다. 말머리 없는 집단은 AI가 맞힌 문제에서 88.5%로, 혼자 푼 집단의 77.9%보다 높았습니다. AI가 틀린 문제에서는 33.0%로, 혼자 푼 집단 64.7%의 절반쯤이었습니다. AI의 답은 맞을 때는 도움이 되고 틀릴 때는 읽는 사람까지 같이 틀리게 했습니다."
    },
    {
      "type": "p",
      "text": "불확실 표현이 붙은 문제와 붙지 않은 문제를 같은 집단 안에서 견주면 결과가 두 방향으로 갈렸습니다. AI가 틀린 문제의 정답률은 1인칭 집단에서 43.6%에서 52.0%로, 주어 없는 집단에서 32.8%에서 48.0%로 올랐습니다. AI가 맞은 문제에서는 1인칭 집단이 92.2%에서 89.2%로, 주어 없는 집단이 94.8%에서 83.1%로 내려갔습니다. 말머리는 틀린 답 앞에서 사람을 더 멈추게 했고, 맞는 답 앞에서도 조금 멈추게 했습니다."
    },
    {
      "type": "p",
      "text": "그래도 AI가 틀린 문제의 정답률은 말머리가 붙은 집단에서도 AI 없이 푼 집단의 64.7%에 한참 못 미쳤습니다. 말머리는 충격을 덜어 줬을 뿐 틀린 답의 영향을 지우지는 못했습니다."
    },
    {
      "type": "h",
      "text": "사람들은 그 말을 어떻게 읽었을까요?"
    },
    {
      "type": "p",
      "text": "불확실 표현을 본 두 집단 186명에게 AI가 언제 왜 그렇게 말한다고 생각하는지 물었습니다. 102명은 AI가 답을 찾지 못했거나, 서로 어긋나는 자료를 만났거나, 찾은 내용을 이해하지 못해서라고 읽었습니다. 다섯 명은 직접 더 알아보라는 신호로 받아들였습니다. 소수는 AI가 사람처럼 보이려고, 신뢰를 지키려고, 책임을 피하려고, 의학 조언에 제한이 있어서 덧붙인 말이라고 봤습니다. 저자들은 이런 해석이 확인을 늘리는 쪽으로 이어지지 않을 수 있다고 적었습니다. 같은 응답자 중 11명은 불확실 표현을 보고 링크를 열어 확인했다고, 13명은 직접 검색했다고 썼습니다."
    },
    {
      "type": "p",
      "text": "한 참가자는 AI가 자신 없어 보이면 링크를 열어 봤고 자신 있어 보이면 대체로 맞다고 여겼다고 답했습니다. 이 답이 말머리의 반대쪽 모습을 보여 준다고 읽는 것은 제 해석입니다. 말머리가 없는 답은 맞든 틀리든 확인을 멈춰도 된다는 신호처럼 읽힐 수 있습니다."
    },
    {
      "type": "h",
      "text": "말투가 아니라 실제 확신을 알려 주면 어떨까요?"
    },
    {
      "type": "p",
      "text": "다른 연구는 표현을 모델의 실제 확신에 맞추는 쪽을 봤습니다. Steyvers 등은 Nature Machine Intelligence 2025년 7권 2호에 실린 논문에서, 기본 설명을 받은 사용자가 AI 답의 정확도를 실제보다 높게 본다고 보고했습니다. 설명이 길수록 사용자의 확신은 커졌는데, 늘어난 분량이 정확도를 높인 것은 아니었습니다. 설명을 모델의 내부 확신에 맞게 조정하자 사람의 확신과 모델의 확신 사이 차이, 맞는 답과 틀린 답을 가려내는 능력의 차이가 모두 줄었습니다. 저는 이 논문의 초록만 읽어서 실험 설계와 수치는 다루지 않습니다."
    },
    {
      "type": "p",
      "text": "두 연구를 이어서 보면 이렇습니다. 앞의 실험에서는 불확실 표현을 맞고 틀림과 상관없이 붙였습니다. 그래서 말머리 한 구절이 사람을 멈추게 하는 힘은 보였지만, 정말 틀리기 쉬운 답에만 붙었을 때 얼마나 도움이 되는지는 이 실험으로 알 수 없습니다. 뒤의 연구는 표현을 모델이 실제로 가진 확신에 맞추는 방향을 가리킵니다. 다만 두 연구는 과제, 모델, 측정이 달라서 서로를 확인해 주는 관계는 아닙니다."
    },
    {
      "type": "h",
      "text": "일터에서 AI의 ‘잘 모르겠지만’을 만나면 무엇을 해 볼 수 있을까요?"
    },
    {
      "type": "p",
      "text": "여기서부터는 연구 결과가 아니라 DMS.Labs의 제안입니다. 시험해 본 방법이 아니고 효과를 보증하지 않습니다."
    },
    {
      "type": "p",
      "text": "직원 여섯 명이 있는 인테리어 업체를 가정해 보겠습니다. 담당자가 AI에게 자재 단가를 정리해 달라고 했고, 답 가운데 한 줄이 ‘잘 모르겠지만 이 규격은 지난 분기보다 오른 것 같습니다’로 시작합니다. 이 줄을 면책 문구로 넘기면 AI가 가장 약한 곳이 그대로 견적서에 들어갑니다. 이 줄부터 거래처 단가표와 맞춰 보는 것이 실험에서 말머리가 불러온 행동과 같은 방향입니다."
    },
    {
      "type": "p",
      "text": "반대쪽도 점검이 필요합니다. 말머리가 없는 줄이 맞다는 보증은 아닙니다. 실험에서 말머리 없는 집단이 본 AI 답은 절반이 틀렸습니다. 말머리 없는 줄 가운데 숫자나 날짜가 든 한 줄을 골라 원문과 맞춰 보는 쪽이 안전합니다."
    },
    {
      "type": "p",
      "text": "AI 결과 검수 카드에 두 칸을 더하는 방법을 생각해 볼 수 있습니다. ‘AI가 자신 없게 말한 문장’ 칸과 ‘AI가 단정했지만 내가 직접 확인한 문장’ 칸입니다. 앞의 칸은 전부, 뒤의 칸은 숫자, 날짜, 고유명사가 든 문장 한두 개를 원문으로 확인합니다. 팀에 맞는 비율은 작은 업무에서 먼저 써 보고 정하시면 됩니다."
    },
    {
      "type": "figure",
      "src": "/images/ideas/when-ai-says-not-sure/tape-measure-workbench.webp",
      "alt": "나무 작업대 위에 줄자가 절반쯤 풀려 있고 옆에 연필과 작은 나무 수준기, 대팻밥 몇 조각이 놓여 있다. 뒤쪽 벽에는 공구가 걸려 있고, 오른쪽 창에서 들어온 따뜻한 햇빛이 나무 결 위에 비친다.",
      "caption": "생성 이미지. 설명을 위한 작업대 장면이며 실제 기록이 아닙니다.",
      "width": 1440,
      "height": 960
    },
    {
      "type": "p",
      "text": "AI 결과를 누가 어떤 기준으로 검수할지는 「AI 결과 검수자 정하기」에, 업무용 AI 스킬이 쓰기 전에 통과해야 할 기준은 「AI 스킬 합격 기준」에 정리해 두었습니다.",
      "links": [
        {
          "label": "AI 결과 검수자 정하기",
          "href": "/works/ai-output-reviewer-card"
        },
        {
          "label": "AI 스킬 합격 기준",
          "href": "/works/ai-skill-acceptance-tests"
        }
      ]
    },
    {
      "type": "p",
      "text": "이번 주에 AI 답을 하나 골라 자신 없게 쓴 문장과 단정하게 쓴 문장을 서로 다른 색으로 표시해 보세요. 그리고 각각에서 한 줄씩 원문과 맞춰 보면 됩니다."
    },
    {
      "type": "p",
      "text": "팀의 AI 교육과 사용 방식을 점검하고 싶으시면 문의 페이지로 연락해 주세요.",
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
      "label": "Kim, Liao, Vorvoreanu, Ballard & Wortman Vaughan · “I’m Not Sure, But...”: Examining the Impact of Large Language Models’ Uncertainty Expression on User Reliance and Trust · FAccT ’24, 2024-06-03, pp. 822-835",
      "href": "https://doi.org/10.1145/3630106.3658941"
    },
    {
      "label": "arXiv:2405.00623 (v2, 2024-05-15)",
      "href": "https://arxiv.org/abs/2405.00623"
    },
    {
      "label": "Steyvers et al. · What large language models know and what people think they know · Nature Machine Intelligence 7(2), 221-231, 2025-01-21",
      "href": "https://doi.org/10.1038/s42256-024-00976-7"
    }
  ],
  "next": {
    "label": "다음: 생성형 AI 교육",
    "href": "/education/gen-ai"
  }
};

export const notSureEssayEn: IdeasEssay = {
  "id": "when-ai-says-not-sure",
  "date": "2026. 11. 13",
  "category": "Essay",
  "title": "When the AI Says “I’m Not Sure”",
  "subtitle": "What a hedge does to the person reading it",
  "summary": "When an AI answer opened with “I’m not sure, but...”, people agreed with it less often and scored higher. This essay follows a 2024 FAccT experiment to see how far that goes, then suggests what a team could try when its AI sounds unsure.",
  "blocks": [
    {
      "type": "p",
      "text": "Does opening an AI answer with “I’m not sure, but...” change what the reader does? In one experiment it did. People who saw hedged answers agreed with the AI less often and scored higher on the questions. The harm from wrong answers did not go away, though. The study appeared at FAccT in 2024, and its task was eight yes/no questions from a medical domain where lay people rarely know the answer. This one study cannot tell us the same holds for drafting a memo or making a business call. Below I follow what the experiment actually changed, then set out a few things DMS.Labs suggests trying at work when an AI sounds unsure."
    },
    {
      "type": "p",
      "text": "This reflects sources checked on November 13, 2026. For the paper by Kim, Liao, Vorvoreanu, Ballard, and Vaughan (FAccT ’24, June 2024), I read the methods, results, discussion, and limitations in the arXiv version (v2), but not the appendices. For the second study, by Steyvers and colleagues, I read only the abstract. The office scene near the end is a hypothetical for illustration, not a DMS client case. The closing suggestions are DMS.Labs’s own ideas and have not been tested in any study."
    },
    {
      "type": "figure",
      "src": "/images/ideas/when-ai-says-not-sure/glasses-highlighted-page.webp",
      "alt": "A pair of reading glasses rests on a printed sheet of paper on a worn wooden table by a window. One line on the sheet is marked with pale yellow highlighter. A pencil, a mug, and a leafy plant sit nearby in soft morning light, and no text is legible.",
      "caption": "Generated image. A desk scene for illustration, not a real record.",
      "width": 1440,
      "height": 960
    },
    {
      "type": "h",
      "text": "How was the hedge attached to the answers?"
    },
    {
      "type": "p",
      "text": "The participants were U.S. workers on Amazon Mechanical Turk. Of 656 complete responses collected over two weeks in September 2023, the authors removed 252 (38.4%) under five pre-registered criteria and analyzed 404. People were split into four groups. A total of 104 saw AI answers with no hedge, 92 saw first-person hedges (“I’m not sure, but it seems...”), 94 saw impersonal hedges (“There is uncertainty, but it seems...”), and 114 answered without any AI."
    },
    {
      "type": "p",
      "text": "The task was eight yes/no questions from the medical domain, chosen so that lay people would struggle to know the answer and could not find it by pasting the question into a search engine. The AI was presented as a fictional search engine, “AI system A,” but its answers were taken, with minor edits, from what Copilot in Bing actually returned in July 2023. Four of the eight answers were right and four were wrong, so the AI was correct 50% of the time. Always following it was no better than a coin flip, by design."
    },
    {
      "type": "p",
      "text": "A hedge was added to half of the eight answers, and which questions got one was randomized. Apart from the opening phrase, the three versions carried the same information. So the experiment does not show what happens when an AI correctly warns about the answers most likely to be wrong. It shows what happens to people when one phrase in the answer changes. The authors say as much in their limitations: the AI in the study had low accuracy and expressed uncertainty often, in a poorly calibrated way."
    },
    {
      "type": "h",
      "text": "What changed in the reader when the same answer came with a hedge?"
    },
    {
      "type": "p",
      "text": "Without a hedge, 80.9% of participants gave the same answer as the AI. People who answered on their own happened to land on the AI’s answer 58.4% of the time, so the AI’s pull was clear. With first-person hedges, agreement fell to 74.8%, a statistically significant drop. With impersonal hedges it was 77.6%, which was not a significant difference."
    },
    {
      "type": "p",
      "text": "Accuracy moved the other way. It was 63.9% for the no-hedge group, 72.8% for first-person hedges, 67.9% for impersonal hedges, and 74.2% for people with no AI. Only the first-person gap from the no-hedge group was significant. The paper does not report a significant difference between the two hedge styles, so I would not rank them on this evidence alone."
    },
    {
      "type": "p",
      "text": "Confidence in the AI’s answer, on a five-point scale, was 3.95 with no hedge, 3.66 with first-person hedges, and 3.80 with impersonal hedges. A separate score for willingness to use the system was lowest for first-person hedges at 2.91, against 3.25 with no hedge and 3.36 with impersonal ones. One participant called the system “very non-committal” and said that made it hard to trust. Yet the score for whether the system was trustworthy at all did not differ between groups. The hedge made people less keen to use the AI without overturning their overall rating of it."
    },
    {
      "type": "h",
      "text": "What happened when the AI was right, and when it was wrong?"
    },
    {
      "type": "p",
      "text": "The authors split the questions into the four the AI got right and the four it got wrong. This was an exploratory analysis, not one of the pre-registered tests. In the no-hedge group, accuracy on questions the AI got right was 88.5%, above the 77.9% of people working alone. On questions it got wrong, accuracy was 33.0%, about half the 64.7% of people working alone. The AI helped when it was right and pulled people down with it when it was wrong."
    },
    {
      "type": "p",
      "text": "Within the hedge groups, comparing questions with a hedge to questions without one pointed in two directions. On questions the AI got wrong, accuracy rose from 43.6% to 52.0% in the first-person group and from 32.8% to 48.0% in the impersonal group. On questions the AI got right, accuracy slipped from 92.2% to 89.2% in the first-person group and from 94.8% to 83.1% in the impersonal group. The hedge slowed people down in front of wrong answers, and it slowed them a little in front of right ones too."
    },
    {
      "type": "p",
      "text": "Even so, accuracy on wrong-answer questions in the hedge groups stayed well below the 64.7% of people with no AI. The hedge cushioned the effect. It did not erase it."
    },
    {
      "type": "h",
      "text": "How did people read the hedge?"
    },
    {
      "type": "p",
      "text": "The 186 participants in the two hedge groups were asked when and why they thought the AI expressed uncertainty. A majority, 102, took it to mean the system could not answer the question: it found no answer, found conflicting sources, or could not make sense of what it found. Five read it as an invitation to do their own research. A small number read it as the AI trying to seem human, protect its credibility, avoid liability, or follow limits on medical advice. The authors note that those readings do not necessarily reduce overreliance. Eleven people wrote that the hedge made them open the linked sources, and thirteen wrote that it made them search on their own."
    },
    {
      "type": "p",
      "text": "One participant described the other side of this: “If the AI seemed confident I assumed he was correct most of the time.” Reading that as the flip side of a hedge is my interpretation, not the paper’s: an answer with no hedge can work as a signal to stop checking, whether or not the answer is right."
    },
    {
      "type": "h",
      "text": "What if the wording matched what the model actually knows?"
    },
    {
      "type": "p",
      "text": "Another line of work looks at exactly that. Steyvers and colleagues, writing in Nature Machine Intelligence (volume 7, issue 2, published January 2025), report that users who received default explanations overestimated how accurate the AI’s answers were. Longer explanations raised user confidence even when the extra length did not improve accuracy. When the explanations were adjusted to reflect the model’s internal confidence, both the gap between human and model confidence and the gap in telling right answers from wrong ones narrowed. I read only the abstract, so I leave out the design and the numbers."
    },
    {
      "type": "p",
      "text": "Read together, the two studies fit like this. In the first, hedges were placed regardless of whether the answer was right. We see how a phrase can make people pause, but not how much it helps when it lands only on the answers likely to be wrong. The second points toward matching the wording to what the model actually has. The tasks, models, and measures differ, so neither confirms the other."
    },
    {
      "type": "h",
      "text": "What can a team try when its AI says “I’m not sure”?"
    },
    {
      "type": "p",
      "text": "From here on this is a DMS.Labs suggestion, not a research result. We have not tested it and cannot promise an effect."
    },
    {
      "type": "p",
      "text": "Picture a six-person interior-design firm. A staff member asks an AI to tidy up material prices, and one line in the answer opens with “I’m not sure, but this size seems to have gone up since last quarter.” If the team treats that line as a disclaimer, the AI’s weakest spot goes straight into the quote. Checking that line against the supplier’s price list first points the same way the hedge pushed participants in the experiment. This is a made-up case for illustration."
    },
    {
      "type": "p",
      "text": "The other side needs checking too. A line with no hedge is not a guarantee. The AI answers the no-hedge group saw were wrong half the time. Picking one line with a number or a date from the unhedged part and checking it against the source is the safer habit."
    },
    {
      "type": "p",
      "text": "In practice, you could add two columns to an AI output review card: sentences the AI said with doubt, and sentences it said firmly that you checked anyway. Check all of the first kind, and one or two of the second kind that hold numbers, dates, or proper names. Try it on a small task before settling on a ratio for your team."
    },
    {
      "type": "figure",
      "src": "/images/ideas/when-ai-says-not-sure/tape-measure-workbench.webp",
      "alt": "A tape measure is unrolled partway across a wooden workbench next to a pencil, a small wooden spirit level, and a few wood shavings. Hand tools hang on the wall behind, and warm window light from the right falls across the wood grain.",
      "caption": "Generated image. A workbench scene for illustration, not a real record.",
      "width": 1440,
      "height": 960
    },
    {
      "type": "p",
      "text": "Who reviews AI output, and by what standard, is covered in “Naming a Reviewer for AI Output.” What an AI skill should pass before a team relies on it is in “Acceptance Tests for an AI Skill.”",
      "links": [
        {
          "label": "Naming a Reviewer for AI Output",
          "href": "/en/works/ai-output-reviewer-card"
        },
        {
          "label": "Acceptance Tests for an AI Skill",
          "href": "/en/works/ai-skill-acceptance-tests"
        }
      ]
    },
    {
      "type": "p",
      "text": "This week, take one AI answer and mark the hedged sentences in one color and the firm ones in another. Then check one line of each against the source."
    },
    {
      "type": "p",
      "text": "If you want to review how your team approaches AI training and use, you can reach us through the contact page.",
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
      "label": "Kim, Liao, Vorvoreanu, Ballard & Wortman Vaughan · “I’m Not Sure, But...”: Examining the Impact of Large Language Models’ Uncertainty Expression on User Reliance and Trust · FAccT ’24, 2024-06-03, pp. 822-835",
      "href": "https://doi.org/10.1145/3630106.3658941"
    },
    {
      "label": "arXiv:2405.00623 (v2, 2024-05-15)",
      "href": "https://arxiv.org/abs/2405.00623"
    },
    {
      "label": "Steyvers et al. · What large language models know and what people think they know · Nature Machine Intelligence 7(2), 221-231, 2025-01-21",
      "href": "https://doi.org/10.1038/s42256-024-00976-7"
    }
  ],
  "next": {
    "label": "Next: DMS Generative AI Training (in Korean)",
    "href": "/education/gen-ai"
  }
};
