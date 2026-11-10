/**
 * Ideas essay: "받은 답과 찾은 답" / "Answers Found, Answers Handed"
 * 한영 독립 편집본. figure 블록의 src는 /public 아래 내부 경로.
 */
import type { IdeasEssay } from "./ideas-essay-watching";

export const foundHandedEssayKo: IdeasEssay = {
  "id": "found-vs-handed-answers",
  "date": "2026. 11. 10",
  "category": "Essay",
  "title": "받은 답과 찾은 답",
  "subtitle": "요약을 읽은 사람과 링크를 따라간 사람 사이",
  "summary": "같은 사실을 접해도 AI 요약으로 배운 사람과 검색 링크를 따라간 사람은 배운 정도를 다르게 답했습니다. PNAS Nexus에 실린 일곱 개 실험을 따라 어디까지 말할 수 있는지 살피고, 일터에서 요약을 읽은 뒤 해 볼 세 단계를 제안합니다.",
  "blocks": [
    {
      "type": "p",
      "text": "같은 사실을 받아도 요약으로 받은 사람은 링크를 따라가며 모은 사람보다 덜 배웠다고 답했고, 그 뒤에 쓴 조언도 더 짧고 서로 닮았습니다. 2025년 10월 PNAS Nexus에 실린 일곱 개 실험의 결과입니다. 다만 실험 과제는 친구에게 줄 조언을 쓰는 일이었고 주제는 텃밭 가꾸기나 건강한 생활 같은 일상 질문이었습니다. 사실 하나를 찾는 일이나 전문 분야 공부에도 같은 결과가 나온다고 이 연구만으로 말할 수는 없습니다. 이 글에서는 실험이 실제로 무엇을 비교했는지 따라가 보고, 일터에서 AI 요약을 읽은 뒤 해 볼 만한 일을 DMS.Labs의 제안으로 적습니다."
    },
    {
      "type": "p",
      "text": "2026년 11월 10일 확인한 자료 기준입니다. Shiri Melumad와 Jin Ho Yun의 논문은 PNAS Nexus 4권 10호(2025년 10월 28일 발행) 본문 전문을 읽었으며, 동료 심사를 거친 학술지 논문입니다. 보충 자료는 읽지 못해서 보충 실험은 본문에 요약된 내용만 옮겼습니다. 끝부분의 사무실 장면은 설명을 위한 가정이며 DMS 고객 사례가 아닙니다. 마지막 제안은 저의 생각이고 논문이 시험한 방법이 아닙니다."
    },
    {
      "type": "figure",
      "src": "/images/ideas/found-vs-handed-answers/open-books-pencil-notes.webp",
      "alt": "창가의 나무 탁자 위에 책 두 권이 펼쳐져 있고, 손글씨 메모가 적힌 종이들과 연필 한 자루, 머그컵이 놓여 있다. 창가에 초록 덩굴 식물이 보이고 부드러운 아침 햇빛이 닿는다.",
      "caption": "생성 이미지. 설명을 위한 책상 장면이며 실제 기록이 아닙니다.",
      "width": 1440,
      "height": 960
    },
    {
      "type": "h",
      "text": "같은 질문을 던진 두 사람은 무엇이 달랐을까요?"
    },
    {
      "type": "p",
      "text": "첫 실험은 온라인 패널 1,136명을 무작위로 둘로 나눠 시작했습니다. 주의력 확인을 통과하지 못한 32명을 빼면 분석 대상은 1,104명입니다. 모두 친구가 텃밭 가꾸는 법을 묻는다고 상상하고, 한쪽은 실제 구글에서, 다른 쪽은 연구진이 설문에 붙여 둔 ChatGPT(GPT-3.5 터보 모델)에서 원하는 만큼 검색한 뒤 친구에게 줄 조언을 썼습니다. 구글 쪽은 링크를 마음대로 열 수 있었고 검색어를 몇 번 바꿔도 됐습니다."
    },
    {
      "type": "p",
      "text": "검색어를 넣은 횟수는 거의 같았습니다. 구글 쪽이 평균 2.15번, ChatGPT 쪽이 2.06번입니다. 그런데 검색 과제에 쓴 시간은 구글 쪽이 평균 742.81초(약 12분 23초), ChatGPT 쪽이 585.41초(약 9분 45초)였습니다. 논문은 이 차이가 질문을 덜 해서가 아니라 돌아온 결과를 덜 들여다봐서 생긴 것으로 읽습니다."
    },
    {
      "type": "p",
      "text": "배운 정도는 설문으로 물었습니다. 1점은 전혀 그렇지 않다, 5점은 매우 그렇다입니다. 결과에서 새로운 것을 배웠다는 문항은 구글 쪽 3.86, ChatGPT 쪽 3.43이었고, 배운 내용에 주인 의식이 든다는 문항은 3.55와 3.36이었습니다. 조언의 모양도 달랐습니다. 구글 쪽은 평균 94.64단어, ChatGPT 쪽은 84.58단어를 썼습니다. 조언끼리 주제가 얼마나 겹치는지를 코사인 유사도로 계산했더니 구글 쪽은 0.057, ChatGPT 쪽은 0.159였습니다. 숫자가 클수록 서로 닮았다는 뜻이므로 ChatGPT로 배운 사람들의 조언이 더 비슷했습니다."
    },
    {
      "type": "p",
      "text": "이것은 집단 평균의 차이입니다. 단어 수로는 10개 안팎의 차이이고, ChatGPT를 쓴 모든 사람이 얕게 배웠다는 뜻도 아닙니다."
    },
    {
      "type": "h",
      "text": "두 사람이 받은 사실이 같았다면 어떨까요?"
    },
    {
      "type": "p",
      "text": "실제 구글과 실제 ChatGPT는 돌려주는 내용부터 다를 수 있습니다. 그래서 두 번째 실험에서는 정보를 고정했습니다. 연구진이 GPT-4o에 텃밭 조언을 물어 291단어, 일곱 가지 제안으로 된 답을 얻고, ChatGPT 쪽 참가자에게는 이 답을 요약으로 그대로 보여 줬습니다. 구글 쪽에는 같은 일곱 제안을 유지한 채 Better Homes and Gardens, Martha Stewart, The New York Times 같은 매체의 문체로 쓴 기사 여섯 편을 만들어 링크 여섯 개로 보여 줬습니다. 링크를 하나만 열든 여섯 개를 다 열든 접하는 사실은 같습니다. 다만 이 기사들도 GPT-4o가 쓴 것이어서 실제 웹의 다양함을 그대로 옮긴 설정은 아닙니다. 대상은 1,979명이었습니다."
    },
    {
      "type": "p",
      "text": "ChatGPT 쪽은 검색어를 쓰는 데 오히려 더 오래 걸렸습니다(59.45초, 구글 쪽 49.42초). 하지만 결과를 읽는 데 쓴 시간은 83.65초로 구글 쪽 124.32초보다 짧았습니다. 새로운 것을 배웠다는 문항은 3.96과 3.71, 조언의 단어 수는 74.22와 64.49, 조언끼리의 유사도는 0.072와 0.224였습니다. 얻은 정보가 포괄적이라는 느낌은 4.25와 4.30으로 비슷했습니다."
    },
    {
      "type": "p",
      "text": "저는 이 부분이 연구에서 가장 눈에 띈다고 읽었습니다. 사실은 같고 담긴 형식만 달랐는데, 스스로 배웠다고 느끼는 정도와 조언의 모양이 달라졌기 때문입니다. 연구진은 요약이 고르고, 읽고, 합치는 과정을 대신해 주어 배움이 수동적으로 바뀐다고 설명합니다. 이 설명은 설문 응답과 시간 기록으로 세운 통계 모형과 맞았지만, 그 과정을 따로 관찰한 것은 아닙니다."
    },
    {
      "type": "h",
      "text": "구글이 만든 요약이나 링크가 붙은 요약도 마찬가지였을까요?"
    },
    {
      "type": "p",
      "text": "세 번째 실험은 대학 행동연구 패널 253명이 실험실 컴퓨터로 했습니다. 주의력 확인을 통과하지 못한 3명을 빼면 250명이고 평균 나이는 22.75세입니다. 모두 구글을 쓰되 한쪽 컴퓨터에는 AI Overview 확장 프로그램이 설치돼 있어 검색 결과 맨 위의 AI 요약만 보도록 안내받았고, 다른 쪽은 AI 요약 없이 링크를 훑었습니다. 주제는 건강하게 사는 법이었습니다."
    },
    {
      "type": "p",
      "text": "검색에 쓴 시간은 링크 쪽 67.37초, AI 요약 쪽 55.50초였습니다. 얻은 정보가 포괄적이었다는 문항은 4.18과 3.32로 이 실험에서 가장 크게 벌어졌고, 조언의 단어 수는 90.17과 65.17이었습니다. 검색 도구를 구글로 고정해도 같은 방향이 나왔다는 뜻입니다. 다만 참가자가 평균 나이 22.75세인 대학 패널의 작은 표본이어서 일반 직장인에게 그대로 옮기기는 어렵습니다."
    },
    {
      "type": "p",
      "text": "본문에는 보충 실험 두 개도 요약돼 있습니다. 하나는 AI 요약에 실시간 웹 링크를 붙인 조건을 더한 2,402명 규모의 반복 실험입니다. 건강한 생활이 자신에게 중요하다고 답한 사람들을 대상으로 했고, 링크를 붙여도 같은 방향의 결과가 나왔습니다. 그 조건에서 링크를 실제로 누른 사람은 26%뿐이었다고 본문에 적혀 있습니다. 다른 하나는 금융 사기를 당했을 때 어떻게 할지를 주제로 한 1,976명 규모의 반복 실험이며, 여기서도 같은 방향이었다고 합니다. 링크가 붙어 있어도 모두가 열어 보지는 않았습니다."
    },
    {
      "type": "h",
      "text": "요약으로 배운 사람의 조언은 읽는 쪽에서 어떻게 보였을까요?"
    },
    {
      "type": "p",
      "text": "네 번째 실험은 조언을 받는 쪽을 봤습니다. 1,493명이 세 번째 실험에서 나온 조언 가운데 하나씩 두 편을 읽었습니다. 한 편은 링크로 배운 사람 125편 중에서, 다른 한 편은 AI 요약으로 배운 사람 125편 중에서 무작위로 뽑았고, 읽는 사람은 어느 쪽인지 알지 못했습니다. 각 조언을 1점에서 5점 사이로 평가했습니다."
    },
    {
      "type": "p",
      "text": "여섯 항목 모두 링크로 배운 사람의 조언이 높았습니다. 도움이 된다는 3.816과 3.553, 정보가 풍부하다는 3.575와 3.224, 쓴 사람이 노력했다고 느낀다는 3.421과 3.024, 추천하겠다는 3.821과 3.481, 믿을 만하다는 4.171과 3.906, 따르겠다는 3.897과 3.711이었습니다. 차이는 5점 척도에서 0.2점에서 0.4점 사이입니다. 크다고 하기는 어렵지만 일관된 방향입니다. 이 실험이 잰 것은 따르겠다는 의향이며 실제로 따랐는지는 아닙니다."
    },
    {
      "type": "figure",
      "src": "/images/ideas/found-vs-handed-answers/single-sheet-blank-notebook.webp",
      "alt": "나무 책상 위에 인쇄한 종이 한 장이 놓여 있고, 그 옆에 아무것도 적지 않은 줄 공책이 펼쳐져 있다. 공책 위에 연필이 걸쳐 있고, 덮은 노트북과 작은 화분이 보인다. 창으로 들어온 부드러운 햇빛이 책상을 비춘다.",
      "caption": "생성 이미지. 설명을 위한 책상 장면이며 실제 기록이 아닙니다.",
      "width": 1440,
      "height": 960
    },
    {
      "type": "h",
      "text": "이 결과를 어디까지 옮겨 말할 수 있을까요?"
    },
    {
      "type": "p",
      "text": "논문 스스로 한계를 적어 두었습니다. 과제는 무언가를 배운 뒤 남에게 줄 조언을 쓰는 일이었습니다. 날짜 같은 사실 하나를 찾는 일이라면 검색 링크가 AI보다 나을 이유가 없다고 연구진은 봅니다. 주제도 배경 지식이 많이 필요하지 않은 일상 질문이었고, 고급 과학이나 수학처럼 전문성이 높은 분야에서는 AI 요약이 오히려 이해를 돕는 쪽일 수 있다고 적었습니다. 배움은 참가자의 자기 평가, 조언 글의 분량과 사실 수, 읽는 사람의 인상으로 쟀습니다. 표준화된 시험 점수는 아닙니다. 시험 대비 같은 목적에서는 AI가 핵심을 짚어 줘서 더 낫다는 결과도 나올 수 있다고 연구진이 말합니다."
    },
    {
      "type": "p",
      "text": "제가 덧붙일 점이 셋 있습니다. 첫째, 앞서 적은 대로 두 번째 실험의 링크 기사도 AI가 쓴 것입니다. 둘째, 실험에 쓰인 도구는 GPT-3.5 터보, GPT-4o, 그리고 2025년의 AI Overview이므로 지금의 도구가 같은 결과를 낸다고 단정할 수 없습니다. 셋째, 연구진은 여러 자료를 대신 조사해 주는 심층 조사 도구에서는 차이가 오히려 더 커질 수 있다고 추정하지만 이번 실험에서 시험한 것은 아닙니다."
    },
    {
      "type": "p",
      "text": "이 논문은 생각하는 힘이 줄어든다는 증거도 아닙니다. 연구진은 AI에 기대면 능력이 약해질 가능성을 논의하면서도 그것이 실제로 일어나는지는 아직 열린 질문이라고 씁니다. 결론도 조심스럽습니다. 학습이 능동적인 일에서 수동적인 일로 바뀔 위험이 있으니 의존하는 정도를 알고 쓰라는 것이고, AI가 구글 검색을 대신하게 두지 않는 편이 나을 수 있다는 정도로 맺습니다."
    },
    {
      "type": "h",
      "text": "요약을 읽은 뒤에는 무엇을 해 볼 수 있을까요?"
    },
    {
      "type": "p",
      "text": "여기서부터는 논문이 시험한 내용이 아니라 DMS.Labs의 제안과 가정이며, 효과는 확인하지 않았습니다. 앞에서 보았듯 요약에 링크를 붙이는 것만으로는 같은 결과가 사라지지 않았으므로 링크를 붙이자는 제안이 아닙니다."
    },
    {
      "type": "p",
      "text": "직원 네 명의 시설 관리 업체를 가정해 보겠습니다. 신입 직원이 개정된 안전 점검 기준을 AI 요약으로 읽고 고객 안내문을 썼습니다. 문장은 매끄럽지만 선배가 쓴 안내문과 구분되지 않고, 고객이 한 항목을 되묻자 답이 막힙니다. 이 장면에서 논문에 근거한 부분은 요약으로 배운 쪽의 조언이 서로 더 닮는 경향뿐입니다. 나머지는 상상입니다."
    },
    {
      "type": "p",
      "text": "요약을 읽은 뒤 세 가지를 해 볼 수 있습니다. 첫째, 화면을 덮고 내 말로 세 줄을 적습니다. 요점 하나, 근거 하나, 아직 모르는 것 하나입니다. 둘째, 요약이 가리키는 원문 가운데 하나를 골라 실제로 열고 해당 대목만 찾아 읽습니다. 셋째, 적은 세 줄을 요약과 견주어 틀렸거나 빠진 곳을 고칩니다. 연구진이 말한 고르고 합치는 과정을 사람이 조금 되찾는 방향이지만, 이 방법이 배움의 깊이를 높인다는 근거는 아직 없습니다. 날짜나 규격처럼 사실 하나를 찾는 일에는 이런 절차가 필요 없다고 저는 생각합니다."
    },
    {
      "type": "p",
      "text": "팀에서 AI 교육을 맡고 있다면 교육 뒤 일터가 준비할 일과 교육생이 처음 2주 동안 점검할 일을 다룬 글도 함께 볼 수 있습니다.",
      "links": [
        {
          "label": "AI 교육은 도구 설명보다 '이 일을 맡겨도 되나'에서 시작합니다",
          "href": "/works/ai-training-task-boundary-map"
        },
        {
          "label": "AI 교육 뒤, 일터가 할 일",
          "href": "/works/ai-training-workplace-checklist"
        }
      ]
    },
    {
      "type": "p",
      "text": "이번 주에는 요약으로 읽은 자료 하나를 골라 화면을 덮고 세 줄을 적어 봅니다. 잘 나오지 않는 줄이 있으면 그 부분만 원문으로 돌아가 읽으면 됩니다."
    },
    {
      "type": "p",
      "text": "AI 교육 방식을 점검하고 싶다면 문의 페이지로 연락할 수 있습니다.",
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
      "label": "Melumad & Yun · Experimental evidence of the effects of large language models versus web search on depth of learning · PNAS Nexus 4(10), pgaf316, 2025-10-28",
      "href": "https://doi.org/10.1093/pnasnexus/pgaf316"
    },
    {
      "label": "PubMed Central 공개 전문 · PMC12560091",
      "href": "https://pmc.ncbi.nlm.nih.gov/articles/PMC12560091/"
    }
  ],
  "next": {
    "label": "다음: DMS 생성형 AI 교육",
    "href": "/education/gen-ai"
  }
};

export const foundHandedEssayEn: IdeasEssay = {
  "id": "found-vs-handed-answers",
  "date": "2026. 11. 10",
  "category": "Essay",
  "title": "Answers Found, Answers Handed",
  "subtitle": "Between reading a summary and following the links",
  "summary": "People who learned from an AI summary and people who followed search links reported learning differently, even when they saw the same facts. This essay follows seven experiments published in PNAS Nexus, marks how far the results reach, and suggests three steps for after reading a summary at work.",
  "blocks": [
    {
      "type": "p",
      "text": "People handed a summary reported learning less than people who gathered the same facts by following links, and the advice they wrote afterward was shorter and more alike. That is the pattern in seven experiments published in PNAS Nexus in October 2025. The task, though, was writing advice for a friend, and the topics were everyday ones such as vegetable gardening and healthy living. This study alone does not show the same result for looking up a single fact or for learning a specialized field. Below I follow what the experiments actually compared, say how far the results reach, and end with suggestions from DMS.Labs for what to do after reading an AI summary at work."
    },
    {
      "type": "p",
      "text": "Based on sources checked on November 10, 2026. I read the full text of Shiri Melumad and Jin Ho Yun's paper in PNAS Nexus, volume 4, issue 10 (published October 28, 2025), a peer-reviewed journal article. I did not read the supplementary material, so for the replications described there I rely on the summaries in the main text. The office scene near the end is a hypothetical for illustration, not a DMS client case. The suggestions at the end are my own and were not tested in the paper."
    },
    {
      "type": "figure",
      "src": "/images/ideas/found-vs-handed-answers/open-books-pencil-notes.webp",
      "alt": "A wooden table by a window with two open books, loose sheets of paper covered in handwritten notes, a pencil and a mug. A green vine grows by the window and soft morning light falls across the table.",
      "caption": "Generated image. A desk scene made for illustration, not a record of a real event.",
      "width": 1440,
      "height": 960
    },
    {
      "type": "h",
      "text": "What differed between two people who asked the same question?"
    },
    {
      "type": "p",
      "text": "The group handed ChatGPT answers spent less time with the results and said they learned less. The first experiment split 1,136 online panelists at random into two groups. After 32 people who failed an attention check were removed, 1,104 remained. Everyone imagined a friend asking how to plant a vegetable garden. One group searched on the real Google; the other used a ChatGPT (GPT-3.5 turbo) that the researchers had built into the survey. Each searched as much as they liked and then wrote advice for the friend. The Google group could open any links and change their query as often as they wished."
    },
    {
      "type": "p",
      "text": "The number of queries was nearly the same: 2.15 on average for Google and 2.06 for ChatGPT. The time spent on the search task was not. The Google group averaged 742.81 seconds (about 12 minutes 23 seconds) and the ChatGPT group 585.41 seconds (about 9 minutes 45 seconds). The paper reads this gap as less time spent with the results that came back, not as fewer questions asked."
    },
    {
      "type": "p",
      "text": "Learning was measured by survey, from 1 (strongly disagree) to 5 (strongly agree). On \"I learned new things from the results,\" the Google group scored 3.86 and the ChatGPT group 3.43. On feeling a sense of ownership over what they learned, the scores were 3.55 and 3.36. The advice differed in shape too: 94.64 words on average for Google and 84.58 for ChatGPT. When the researchers computed how much the pieces of advice overlapped in topic, using cosine similarity, the Google group scored 0.057 and the ChatGPT group 0.159. A higher number means the texts resemble each other more, so the advice from people who learned through ChatGPT was more alike."
    },
    {
      "type": "p",
      "text": "These are group averages. The word count differs by about ten words, and the result does not mean that everyone who used ChatGPT learned shallowly."
    },
    {
      "type": "h",
      "text": "What if both people were given the same facts?"
    },
    {
      "type": "p",
      "text": "The differences mostly remained. The real Google and the real ChatGPT can return different content to begin with, so the second experiment fixed the information. The researchers asked GPT-4o for vegetable-garden advice and got a 291-word answer with seven suggestions. Participants in the ChatGPT condition saw that answer as the summary. For the Google condition, the researchers kept the same seven suggestions and had GPT-4o write six articles in the styles of outlets such as Better Homes and Gardens, Martha Stewart and The New York Times, shown as six links. Whether a participant opened one link or all six, the facts they met were the same. Those articles were also written by GPT-4o, so the setup does not reproduce the variety of the real web. There were 1,979 participants."
    },
    {
      "type": "p",
      "text": "The ChatGPT group took longer to type their query (59.45 seconds against 49.42) but spent less time with the results: 83.65 seconds against 124.32. On \"I learned new things,\" the scores were 3.96 and 3.71. Advice averaged 74.22 words against 64.49, and the similarity among the pieces of advice was 0.072 against 0.224. The sense that the information was comprehensive was about the same, 4.25 against 4.30."
    },
    {
      "type": "p",
      "text": "I read this as the most striking part of the study. The facts were identical and only the format differed, yet the feeling of having learned and the shape of the advice changed. The authors explain that a summary does the choosing, reading and combining for you, which makes learning more passive. A statistical model built from survey answers and time records fit that account, but the process itself was not observed directly."
    },
    {
      "type": "h",
      "text": "Did a Google-made summary, or a summary with links, behave the same way?"
    },
    {
      "type": "p",
      "text": "Largely yes, in the same direction. The third experiment ran in a laboratory with 253 members of a university behavioral-research panel; after 3 failed an attention check, 250 remained, with an average age of 22.75. Everyone used Google. One group's computers had the AI Overview extension installed and the group was told to look only at the AI summary at the top of the results. The other group skimmed the links without an AI summary. The topic was how to lead a healthier life."
    },
    {
      "type": "p",
      "text": "Search time was 67.37 seconds for the links group and 55.50 for the AI summary group. The item \"the results gave comprehensive information\" showed the widest gap in this experiment, 4.18 against 3.32, and advice averaged 90.17 words against 65.17. Holding the search engine fixed at Google produced the same direction. The sample was a small university panel, so it is hard to carry over directly to working adults."
    },
    {
      "type": "p",
      "text": "The main text also summarizes two supplementary experiments. One was a replication with 2,402 people who said healthy living mattered to them, adding a condition in which the AI summary came with real-time web links. The same direction appeared even then. The paper notes that only 26% of those participants actually clicked the links. The other was a replication with 1,976 people on what to do after becoming the victim of a financial scam, and it pointed the same way. Having links attached did not mean people opened them."
    },
    {
      "type": "h",
      "text": "How did the advice from summary readers look to the people who received it?"
    },
    {
      "type": "p",
      "text": "Slightly worse, on every rating. The fourth experiment looked at the receiving side. 1,493 people each read two pieces of advice from the third experiment. One was drawn at random from 125 written by people who learned through links, the other from 125 written by people who learned through the AI summary, and the readers did not know which was which. They rated each piece from 1 to 5."
    },
    {
      "type": "p",
      "text": "On all six items the advice from the links group scored higher: helpful, 3.816 against 3.553; informative, 3.575 against 3.224; the writer seemed to have put in effort, 3.421 against 3.024; likely to recommend, 3.821 against 3.481; trustworthy, 4.171 against 3.906; likely to adopt, 3.897 against 3.711. The gaps run from about 0.2 to 0.4 points on a five-point scale. That is hard to call large, but it is consistent in direction. What was measured is willingness to adopt the advice, not whether anyone did."
    },
    {
      "type": "figure",
      "src": "/images/ideas/found-vs-handed-answers/single-sheet-blank-notebook.webp",
      "alt": "A single printed sheet of paper lies on a wooden desk beside an open lined notebook with nothing written in it. A pencil rests across the notebook, and a closed laptop and a small plant sit nearby. Soft light from the window falls across the desk.",
      "caption": "Generated image. A desk scene made for illustration, not a record of a real event.",
      "width": 1440,
      "height": 960
    },
    {
      "type": "h",
      "text": "How far can these results be carried?"
    },
    {
      "type": "p",
      "text": "The paper lists its own limits. The task was to learn something and then write advice for another person. For looking up one fact, such as a date, the authors see no obvious advantage in web links over an AI. The topics were everyday questions that need little background knowledge, and the authors write that in highly specialized fields such as advanced science or math, an AI summary might help people understand more. Learning was gauged by participants' self-reports, the length and factual content of their advice, and readers' impressions, not by standardized test scores. For goals like test preparation, the authors say the AI may do better by pointing to the key facts."
    },
    {
      "type": "p",
      "text": "I would add three points. First, as noted above, the link articles in the second experiment were also written by an AI. Second, the tools were GPT-3.5 turbo, GPT-4o and the 2025 AI Overview, so it cannot be assumed that today's tools give the same result. Third, the authors speculate that deep research tools, which investigate many sources for the user, might widen the gap, but that was not tested here."
    },
    {
      "type": "p",
      "text": "Nor is the paper evidence that thinking ability is shrinking. The authors discuss the possibility that leaning on AI weakens skills, yet call it still an open empirical question. Their conclusion is careful: learning can shift from an active to a passive activity, so people should know how much they rely on a tool, and one may be better off not letting an AI do the Googling."
    },
    {
      "type": "h",
      "text": "What can you do after reading a summary?"
    },
    {
      "type": "p",
      "text": "From here on, the content is DMS.Labs's suggestion and assumption rather than something the paper tested, and its effect has not been checked. As the results above show, adding links to a summary did not make the pattern disappear, so this is not a suggestion to attach links."
    },
    {
      "type": "p",
      "text": "Take a four-person facilities company as an assumption. A new hire reads a revised safety inspection standard through an AI summary and writes a customer notice. The sentences are smooth, but the notice cannot be told apart from a senior colleague's, and when a customer asks about one item, the new hire has no answer. The only part of this scene grounded in the paper is the tendency for advice written after a summary to be more alike. The rest is imagination."
    },
    {
      "type": "p",
      "text": "After reading a summary you can do three things. First, close the screen and write three lines in your own words: one main point, one piece of evidence, and one thing you still do not know. Second, pick one of the original sources the summary points to, actually open it, and read only the relevant passage. Third, compare your three lines with the summary and fix whatever is wrong or missing. This gives back a little of the choosing and combining the authors describe, but there is no evidence yet that it deepens learning. For looking up a single fact, such as a date or a specification, I do not think the routine is needed."
    },
    {
      "type": "p",
      "text": "If your team handles AI training, two other pieces cover what a workplace prepares after training and what trainees can check in the first two weeks.",
      "links": [
        {
          "label": "AI training should start with 'Should I hand this task over?'",
          "href": "/en/works/ai-training-task-boundary-map"
        },
        {
          "label": "What the Workplace Does After AI Training",
          "href": "/en/works/ai-training-workplace-checklist"
        }
      ]
    },
    {
      "type": "p",
      "text": "This week, pick one document you read through a summary, close the screen and write three lines. If any line will not come, go back to the original for that part only."
    },
    {
      "type": "p",
      "text": "If you want to review how your team approaches AI training, you can reach us through the contact page.",
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
      "label": "Melumad & Yun · Experimental evidence of the effects of large language models versus web search on depth of learning · PNAS Nexus 4(10), pgaf316, 2025-10-28",
      "href": "https://doi.org/10.1093/pnasnexus/pgaf316"
    },
    {
      "label": "PubMed Central open-access full text · PMC12560091",
      "href": "https://pmc.ncbi.nlm.nih.gov/articles/PMC12560091/"
    }
  ],
  "next": {
    "label": "Next: DMS Generative AI Training (in Korean)",
    "href": "/education/gen-ai"
  }
};
