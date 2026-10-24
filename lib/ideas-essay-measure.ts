/**
 * Ideas essay: "재던 숫자가 목표가 되면" / "When the Number Becomes the Goal"
 * 한영 독립 편집본. figure 블록의 src는 /public 아래 내부 경로.
 */
import type { IdeasEssay } from "./ideas-essay-watching";

export const measureGoalEssayKo: IdeasEssay = {
  "id": "measure-becomes-goal",
  "date": "2026. 10. 24",
  "category": "Essay",
  "title": "재던 숫자가 목표가 되면",
  "subtitle": "자동화 성과를 숫자 하나로 볼 때 생기는 틈",
  "summary": "자동화나 AI의 성과를 숫자 하나로 재고 그 숫자를 올리라고 하면, 숫자는 오르는데 일은 나빠질 수 있습니다. 재던 숫자가 목표가 되면 그 숫자는 일이 잘 되고 있는지 알려 주는 힘을 잃기 쉽습니다. 숫자를 버릴 필요는 없고, 숫자가 놓치는 것을 옆에 함께 두면 됩니다.",
  "blocks": [
    {
      "type": "p",
      "text": "자동화 성과를 숫자 하나로 재고 그 숫자를 올리라고 하면 일도 함께 좋아질까요? 늘 그렇지는 않습니다. 재던 숫자가 목표가 되는 순간 그 숫자는 일이 잘 되고 있는지 알려 주는 힘을 잃기 쉽고, 그래서 숫자는 오르는데 일은 나빠지는 일이 생깁니다."
    },
    {
      "type": "p",
      "text": "경제학자 Charles Goodhart는 1975년에 이런 취지의 관찰을 남겼습니다. 관찰된 통계적 규칙성은 통제를 위한 압력을 받으면 무너지는 경향이 있다는 것입니다. 문화인류학자 Marilyn Strathern은 1997년 글에서 이 생각을 한 문장으로 적었습니다. 「When a measure becomes a target, it ceases to be a good measure.」 측정값이 목표가 되면 좋은 측정값이 아니게 된다는 뜻입니다. 그는 영국 대학 시험에서 2.1이라는 성적이 모두의 기대가 될수록 개인의 성과를 가려내는 데는 쓸모가 줄어든다는 예를 들었습니다. 같은 대목에는 이 현상을 Goodhart의 법칙이라고 부르는 Hoskin의 설명도 나옵니다."
    },
    {
      "type": "p",
      "text": "이 글의 장면은 설명을 위한 가정이며 DMS 고객 사례나 측정 결과가 아닙니다. 2026년 10월 24일 확인한 자료 기준입니다. Strathern(1997)의 공개 원고, Manheim과 Garrabrant의 논문, Gao와 동료들의 논문 초록을 바탕으로 썼습니다. Gao 등의 논문은 초록만 읽었고 Goodhart의 원문은 읽지 못해서, 그의 문장은 Manheim과 Garrabrant의 인용과 Rodamar(2018)의 정리에 기댔습니다. 글 끝의 실천 방법은 저의 제안이며 이 연구들이 정한 표준은 아닙니다."
    },
    {
      "type": "figure",
      "src": "/images/ideas/measure-becomes-goal/tally-tickets.webp",
      "alt": "나무 책상 위에 손으로 누르는 금속 계수기와 가지런히 쌓인 빈 종이 전표 더미가 놓여 있다. 맨 위 전표 한 장은 모서리가 반쯤 접혀 있고, 창가의 부드러운 빛이 계수기 표면에 비친다.",
      "caption": "생성 이미지. 설명을 위한 책상 장면이며 실제 기록이 아닙니다.",
      "width": 1440,
      "height": 960
    },
    {
      "type": "h",
      "text": "건수가 올라가는 하루"
    },
    {
      "type": "p",
      "text": "고객 문의를 받는 가상의 사무실을 떠올려 보겠습니다. 여기에 AI 분류 도구를 붙였고, 팀의 성과를 하루에 닫은 문의 건수로 정했다고 하겠습니다. 처음에는 숫자가 잘 맞습니다. 문의가 빨리 처리될수록 건수가 늘고, 고객도 대체로 답을 빨리 받기 때문입니다."
    },
    {
      "type": "p",
      "text": "건수가 팀의 목표가 되면 행동이 조금씩 달라집니다. 접수했다는 안내만 보내고 문의를 닫을 수 있습니다. 한 사람의 문의를 둘로 나눠 닫으면 건수는 두 배가 됩니다. 오래 걸리는 문의는 뒤로 밀리고 금방 끝나는 문의가 앞으로 옵니다. 이런 행동에 나쁜 의도가 필요하지는 않습니다. 건수를 올리는 가장 쉬운 길과 문의를 해결하는 길이 갈라지면, 숫자로 평가받는 쪽은 자연스럽게 앞쪽 길을 봅니다."
    },
    {
      "type": "p",
      "text": "숫자가 목표 자리에 오르는 데에는 이유가 있다고 저는 봅니다. 숫자는 비교하기 쉽고 보고하기 쉽고 도구에 맡기기도 쉽습니다. 자동화를 들인 뒤 무엇이 달라졌느냐는 질문을 받으면 건수는 가장 빨리 내놓을 수 있는 답입니다. 그래서 숫자가 목표가 되는 일을 막으려면 숫자를 정하는 날에 이 문제를 미리 떠올려 두어야 합니다."
    },
    {
      "type": "p",
      "text": "Strathern 글의 초록은 이 문제를 조금 더 넓게 보여 줍니다. 감사(audit)는 감시만 하는 데 그치지 않고 자기만의 생명을 가져서, 감사받는 쪽의 생명을 위태롭게 한다는 내용입니다. 숫자가 보고 체계 안으로 들어가면 숫자를 맞추는 일이 따로 하나의 일이 된다는 이야기로 저는 읽습니다. 이 해석은 저의 것이며, 초록 밖의 내용은 근거로 삼지 않았습니다."
    },
    {
      "type": "h",
      "text": "틈은 어떤 방식으로 벌어질까요?"
    },
    {
      "type": "p",
      "text": "서로 다른 방식으로 벌어지며, 지금까지 정리된 갈래는 적어도 네 가지입니다. Manheim과 Garrabrant는 Goodhart 효과를, 최적화가 의도한 목표와 그 대용 지표 사이의 통계적 관계를 무너뜨리는 일로 정의하고 네 갈래로 나눴습니다. 두 저자는 이 분류가 원래 논의된 표현과 정확히 겹치지 않는다고도 밝힙니다. 아래 장면은 각 갈래를 제가 사무실 가정으로 옮겨 본 것입니다."
    },
    {
      "type": "p",
      "text": "회귀형(regressional)은 불완전한 지표로 높은 쪽을 골라낼 때 생깁니다. 목표를 잘 해낸 사람과 함께 지표와 목표 사이의 오차까지 골라내게 됩니다. 건수 1위 담당자의 숫자에는 일을 잘한 몫과 쉬운 문의가 몰린 몫이 섞여 있을 수 있습니다. 논문은 이 형태를 가장 기본적이고 피할 수 없는 Goodhart 효과로 설명합니다. 어떤 지표를 고르든 부정확한 지표는 가장 높은 쪽 끝에서 목표와 어긋난다는 것입니다."
    },
    {
      "type": "p",
      "text": "극단형(extremal)은 지표가 평소와 먼 값을 가질 때 나타납니다. 평소 범위에서 맞던 지표와 목표의 관계가 극단까지 밀어 올린 영역에서도 이어진다는 보장은 없습니다. 하루 건수를 평소보다 훨씬 높게 요구하는 경우가 여기에 가깝습니다."
    },
    {
      "type": "p",
      "text": "인과형(causal)은 지표를 직접 건드릴 때 생깁니다. 건수가 해결된 문의를 대신 보여 주던 연결이 건수를 올리려는 행동 때문에 바뀝니다. 문의를 나눠 닫는 일이 그 예입니다. 논문에는 비슷한 구조의 교실 예시가 있습니다. 서로 상관이 있는 두 시험이 있을 때 교사가 시험 보는 요령을 전반적으로 가르치면 두 점수를 함께 올리던 요인 하나가 바뀌고, 그 뒤 두 점수의 상관은 이전보다 낮아질 가능성이 큽니다."
    },
    {
      "type": "p",
      "text": "적대형(adversarial)은 평가하는 쪽과 목표가 다른 행위자가 관계를 무너뜨리는 경우입니다. 숫자를 맞추는 쪽이 유리한 구조라면 사람이든 도구든 그 길을 찾을 수 있습니다."
    },
    {
      "type": "figure",
      "src": "/images/ideas/measure-becomes-goal/timer-cards.webp",
      "alt": "밝은 나무 조리대 위의 황동 주방 타이머와 낱장 카드 몇 장. 맨 위 카드에는 연필로 그린 체크 표시 하나만 있고, 옆에는 차가운 차가 담긴 도자기 잔이 놓여 있다.",
      "caption": "생성 이미지. 설명을 위한 책상 장면이며 실제 기록이 아닙니다.",
      "width": 1440,
      "height": 960
    },
    {
      "type": "h",
      "text": "AI를 쓰면 이 틈이 더 벌어질까요?"
    },
    {
      "type": "p",
      "text": "벌어질 가능성이 더 크다고 보는 논문이 있습니다. Manheim과 Garrabrant는 Goodhart 효과의 중요성이 지표를 최적화하는 데 쏟는 힘의 크기에 달려 있다고 썼습니다. 인공지능이 그 힘을 키우기 때문에 이 분야에서는 특히 중요하다는 것이 두 저자의 판단입니다."
    },
    {
      "type": "p",
      "text": "Gao, Schulman, Hilton의 2022년 논문은 이 문제를 모델 학습에서 측정했습니다. 사람의 선호를 예측하도록 학습한 보상 모델은 불완전한 대용 지표입니다. 초록은 그 값을 지나치게 최적화하면 실제 성능이 오히려 떨어질 수 있고, 이것이 Goodhart의 법칙에 들어맞는다고 설명합니다. 연구진은 기준이 되는 보상 모델이 사람 역할을 하는 합성 환경에서 강화학습과 best-of-n 샘플링을 비교했고, 두 방법에서 관계가 서로 다른 함수 형태를 따르며 그 계수가 보상 모델의 매개변수 수에 따라 매끄럽게 변한다고 보고합니다."
    },
    {
      "type": "p",
      "text": "이 실험은 모델을 학습시키는 과정이어서 사무실에서 AI 도구를 쓰는 일과는 층위가 다릅니다. 다만 구조는 닮아 보입니다. 도구에 숫자 하나를 목표로 주면 도구는 그 숫자를 올리는 쪽으로 움직일 수 있고, 숫자와 일 사이의 틈도 그만큼 빨리 벌어질 수 있습니다. 이 연결은 저의 해석이며 논문이 업무 도구에 대해 내린 결론이 아닙니다."
    },
    {
      "type": "h",
      "text": "그럼 숫자를 쓰지 말아야 할까요?"
    },
    {
      "type": "p",
      "text": "그럴 필요는 없습니다. Manheim과 Garrabrant가 문제로 삼는 것은 개선에 쓸 수 있던 지표를 더 밀어붙여도 효과가 없거나 해로운 수준까지 쓰는 일입니다. 건수도 처리 시간도 일을 파악하는 데 쓸모가 있습니다. 쓸모가 줄어드는 때는 숫자 하나가 목표와 보상을 통째로 대신하기 시작할 때입니다."
    },
    {
      "type": "h",
      "text": "숫자 옆에 둘 것"
    },
    {
      "type": "p",
      "text": "아래는 이 글의 제안이며 연구로 검증된 절차는 아닙니다. 숫자를 정하는 날, 그 숫자를 올리는 가장 쉬운 나쁜 방법을 먼저 적어 봅니다. 접수만 하고 닫기나 문의 나누기 같은 항목이 나오면, 그것을 막아 줄 두 번째 숫자가 필요하다는 신호입니다. 예를 들어 닫은 건수 옆에 다시 열린 건수를 둡니다."
    },
    {
      "type": "p",
      "text": "앞의 가상 사무실에 옮겨 보겠습니다. 목표는 문의가 실제로 해결되는 것이고, 닫은 건수는 그것을 대신 보여 주는 지표입니다. 쉬운 나쁜 방법으로 접수만 하고 닫기와 문의 나누기가 나왔으니 다시 열린 건수를 짝 숫자로 둡니다. 그리고 매주 닫힌 문의 중 다섯 건을 열어 고객의 문제가 정말 풀렸는지 읽기로 정합니다. 다섯 건이라는 수에는 근거가 없고, 읽을 수 있는 분량으로 잡은 가정입니다."
    },
    {
      "type": "p",
      "text": "숫자를 보고하는 날에는 원기록 몇 건을 직접 열어 읽습니다. 숫자가 놓친 것은 기록을 열어야 보입니다. 이 방법을 쓰더라도 숫자와 일 사이의 틈이 사라지지는 않습니다. 틈이 벌어지는 것을 일찍 알아챌 기회가 생길 뿐입니다."
    },
    {
      "type": "p",
      "text": "도입 성과를 매출, 비용, 검수 시간으로 나눠 보는 방법은 Work 글에 정리해 두었습니다.",
      "links": [
        {
          "label": "AI 도입 성과 측정: 매출·비용·검수시간을 함께 보는 법",
          "href": "/works/ai-performance-measurement"
        }
      ]
    },
    {
      "type": "h",
      "text": "회의 전에 물어볼 한 가지"
    },
    {
      "type": "p",
      "text": "다음에 자동화 성과 숫자를 정하는 자리에 앉는다면, 이 숫자를 올리는 가장 쉬운 방법이 일을 잘하는 것인지 먼저 묻고 싶습니다. 답이 그렇지 않다면 숫자는 그대로 쓰되 목표 자리에는 두지 않고, 옆에 놓을 숫자와 읽을 기록을 함께 정하겠습니다."
    },
    {
      "type": "p",
      "text": "첫 자동화 업무를 고를 때 기준선을 어떻게 잡을지는 아래 글에서 다뤘습니다.",
      "links": [
        {
          "label": "자동화할 첫 업무 고르기",
          "href": "/works/choosing-first-automation-task"
        }
      ]
    }
  ],
  "sources": [
    {
      "label": "Strathern · 'Improving ratings': audit in the British University system · European Review 5(3), 305-321, 1997",
      "href": "https://doi.org/10.1002/(SICI)1234-981X(199707)5:3%3C305::AID-EURO184%3E3.0.CO;2-4"
    },
    {
      "label": "Manheim & Garrabrant · Categorizing Variants of Goodhart's Law · arXiv:1803.04585 (v4, 2019)",
      "href": "https://arxiv.org/abs/1803.04585"
    },
    {
      "label": "Gao, Schulman & Hilton · Scaling Laws for Reward Model Overoptimization · arXiv:2210.10760 (2022)",
      "href": "https://arxiv.org/abs/2210.10760"
    },
    {
      "label": "Rodamar · There ought to be a law! Campbell versus Goodhart · Significance 15(6), 2018",
      "href": "https://doi.org/10.1111/j.1740-9713.2018.01205.x"
    }
  ],
  "next": {
    "label": "다음: DMS AX 전환 설계",
    "href": "/works/ax"
  }
};

export const measureGoalEssayEn: IdeasEssay = {
  "id": "measure-becomes-goal",
  "date": "2026. 10. 24",
  "category": "Essay",
  "title": "When the Number Becomes the Goal",
  "subtitle": "The gap that opens when one figure stands for automation results",
  "summary": "If you measure automation by one number and ask a team to raise it, the number can climb while the work gets worse. Once a measure becomes a target, it tends to lose its power to say whether the work is going well. The number is worth keeping, with what it misses placed beside it.",
  "blocks": [
    {
      "type": "p",
      "text": "Does raising one automation metric make the work better? Not always. Once a measure becomes a target, it tends to lose its power to say whether the work is going well, so the figure can climb while the work gets worse."
    },
    {
      "type": "p",
      "text": "The economist Charles Goodhart made an observation in 1975 that Manheim and Garrabrant quote this way: any observed statistical regularity will tend to collapse once pressure is placed upon it for control purposes. In 1997 the anthropologist Marilyn Strathern put the idea into a single sentence: \"When a measure becomes a target, it ceases to be a good measure.\" Her example was the 2.1 mark in British university examinations. The more a 2.1 becomes an expectation, she wrote, the poorer it becomes as a discriminator of individual performances. In the same passage she notes that Hoskin calls this 'Goodhart's law'."
    },
    {
      "type": "p",
      "text": "The scenes in this essay are assumptions made for illustration. They are not DMS client cases or measured results. I based it on Strathern's openly available 1997 paper, the paper by Manheim and Garrabrant, and the abstract of the paper by Gao and colleagues, all checked on October 24, 2026, and the essay reflects them as of that date. I read only the abstract of the Gao paper and did not read Goodhart's original text, so his wording reaches me through Manheim and Garrabrant and through Rodamar's 2018 summary. The practices suggested near the end are my own proposals, not standards set by these studies."
    },
    {
      "type": "figure",
      "src": "/images/ideas/measure-becomes-goal/tally-tickets.webp",
      "alt": "A hand-pressed metal tally counter and a neat stack of blank paper slips on a wooden desk. The top slip has one corner folded halfway, and soft window light falls across the counter's surface.",
      "caption": "Generated image. A desk scene made for illustration, not a record of a real place.",
      "width": 1440,
      "height": 960
    },
    {
      "type": "h",
      "text": "A day when the count goes up"
    },
    {
      "type": "p",
      "text": "Picture an imaginary office that handles customer inquiries. An AI sorting tool has been added, and the team's result is defined as the number of inquiries closed each day. At first the figure works well. The faster inquiries are handled, the higher the count, and customers generally get answers sooner too."
    },
    {
      "type": "p",
      "text": "Once the count becomes the team's goal, behavior shifts a little at a time. A reply that says only 'received' can close an inquiry. One person's question can be split in two and closed twice, which doubles the count. Slow cases drift to the back and quick ones move up. None of this needs bad intent. When the easiest way to raise the count and the way to resolve the inquiry part ways, the people judged by the count will see the first road more clearly."
    },
    {
      "type": "p",
      "text": "I think there is a reason numbers end up in the goal's seat. They are easy to compare, easy to report, and easy to hand to a tool. When someone asks what changed after automation arrived, a count is the quickest answer to give. Preventing the slide takes some thought on the day the number is chosen."
    },
    {
      "type": "p",
      "text": "The abstract of Strathern's paper widens the picture a little. Audit, it says, does more than monitor: it has a life of its own that jeopardizes the life it audits. I read that as saying that once a number enters a reporting system, matching the number becomes a job in its own right. That reading is mine, and I did not draw on anything beyond the abstract for it."
    },
    {
      "type": "h",
      "text": "How does the gap open?"
    },
    {
      "type": "p",
      "text": "It opens in several ways, and the literature has sorted at least four. Manheim and Garrabrant define a Goodhart effect as optimization collapsing the statistical relationship between the goal an optimizer intends and the proxy used for it, and they split the causes into four kinds. They add that their categories do not exactly match what was originally discussed. The office scenes below are my own translation of each kind into an assumed setting."
    },
    {
      "type": "p",
      "text": "The regressional kind appears when you pick the top of an imperfect proxy. You select not only people who did the job well but also the gap between the proxy and the goal. The agent with the highest count may owe part of it to skill and part to a run of easy inquiries. The paper calls this the most fundamental Goodhart effect and says it cannot be avoided: whatever measure is chosen, an inexact metric diverges from the goal in the tail."
    },
    {
      "type": "p",
      "text": "The extremal kind appears when the proxy takes a value far from the usual. A relationship between proxy and goal that held in the normal range need not hold in the region you reach by pushing the proxy to an extreme. Demanding a daily count far above the usual comes close to this."
    },
    {
      "type": "p",
      "text": "The causal kind appears when you act on the proxy directly. The link that let the count stand in for resolved inquiries is altered by the very actions meant to raise the count. Splitting inquiries before closing them is an example. The paper offers a classroom parallel. When two tests are correlated and a teacher trains general test-taking skill, one of the traits behind good scores on both tests changes, and the correlation between the two scores is likely to fall."
    },
    {
      "type": "p",
      "text": "The adversarial kind involves an agent whose goal differs from the evaluator's and who breaks the relationship. If matching the number pays off, a person or a tool can find that path."
    },
    {
      "type": "figure",
      "src": "/images/ideas/measure-becomes-goal/timer-cards.webp",
      "alt": "A brass kitchen timer and a few loose cards on a pale wooden counter. The top card carries a single pencil tick, and a ceramic cup of cold tea sits beside it.",
      "caption": "Generated image. A desk scene made for illustration, not a record of a real place.",
      "width": 1440,
      "height": 960
    },
    {
      "type": "h",
      "text": "Does using AI widen the gap?"
    },
    {
      "type": "p",
      "text": "One paper argues that it may. Manheim and Garrabrant write that the importance of Goodhart effects depends on the amount of power directed at optimizing the proxy. Because artificial intelligence increases that power, they judge the problem especially critical in that field."
    },
    {
      "type": "p",
      "text": "The 2022 paper by Gao, Schulman, and Hilton measures the problem in model training. A reward model trained to predict human preferences is an imperfect proxy. According to the abstract, optimizing its value too much can hinder ground-truth performance, in line with Goodhart's law. The authors use a synthetic setup in which a fixed gold-standard reward model plays the role of humans, compare reinforcement learning with best-of-n sampling, and report that the relationship follows a different functional form for each method, with coefficients that scale smoothly with the number of reward model parameters."
    },
    {
      "type": "p",
      "text": "That experiment concerns training a model, which is a different layer from using an AI tool in an office. The structure still looks similar. If a tool is given one number as its goal, it may move toward raising that number, and the gap between number and work may widen just as fast. This link is my own reading, not a conclusion the paper draws about workplace tools."
    },
    {
      "type": "h",
      "text": "Should we stop using numbers?"
    },
    {
      "type": "p",
      "text": "No. The problem Manheim and Garrabrant point to is a metric that could help improve a system being used past the point where pushing it further is ineffective or harmful. Counts and handling times are still useful for seeing the work. Their usefulness shrinks when a single number starts standing in for the goal and the reward together."
    },
    {
      "type": "h",
      "text": "What to put beside the number"
    },
    {
      "type": "p",
      "text": "What follows is a proposal from this essay, not a procedure any study has tested. On the day a number is chosen, write down the easiest bad way to raise it first. If entries such as closing after only a receipt, or splitting inquiries, show up, that is a sign you need a second number to guard against them. For example, put the count of reopened inquiries next to the count of closed ones."
    },
    {
      "type": "p",
      "text": "Apply that to the imaginary office. The goal is for inquiries to be resolved, and the closed count is the proxy that stands in for it. Closing after only a receipt and splitting inquiries came up as easy bad methods, so the paired number is the count of reopened inquiries, and each week five closed inquiries are opened and read to see whether the customer's problem was actually solved. The number five has no evidence behind it. It is an assumed amount that a person can read."
    },
    {
      "type": "p",
      "text": "On reporting days, open a few of the underlying records and read them. What the number missed only shows up in the records. This will not close the gap between number and work. It gives you a chance to notice early that the gap is widening."
    },
    {
      "type": "p",
      "text": "A separate Work article sets out how to read adoption results split into revenue, costs, and review time.",
      "links": [
        {
          "label": "Measuring AI adoption: revenue, costs and review time",
          "href": "/en/works/ai-performance-measurement"
        }
      ]
    },
    {
      "type": "h",
      "text": "One question before the meeting"
    },
    {
      "type": "p",
      "text": "The next time I sit down to choose an automation number, I want to ask first whether the easiest way to raise it is to do the work well. If the answer is no, I will keep the number but not in the goal's seat, and I will decide together what number sits beside it and which records get read."
    },
    {
      "type": "p",
      "text": "How to set a baseline when choosing a first task to automate is covered in this earlier piece.",
      "links": [
        {
          "label": "Choosing the First Task to Automate",
          "href": "/en/works/choosing-first-automation-task"
        }
      ]
    }
  ],
  "sources": [
    {
      "label": "Strathern · 'Improving ratings': audit in the British University system · European Review 5(3), 305-321, 1997",
      "href": "https://doi.org/10.1002/(SICI)1234-981X(199707)5:3%3C305::AID-EURO184%3E3.0.CO;2-4"
    },
    {
      "label": "Manheim & Garrabrant · Categorizing Variants of Goodhart's Law · arXiv:1803.04585 (v4, 2019)",
      "href": "https://arxiv.org/abs/1803.04585"
    },
    {
      "label": "Gao, Schulman & Hilton · Scaling Laws for Reward Model Overoptimization · arXiv:2210.10760 (2022)",
      "href": "https://arxiv.org/abs/2210.10760"
    },
    {
      "label": "Rodamar · There ought to be a law! Campbell versus Goodhart · Significance 15(6), 2018",
      "href": "https://doi.org/10.1111/j.1740-9713.2018.01205.x"
    }
  ],
  "next": {
    "label": "Next: DMS AX transformation design (in Korean)",
    "href": "/works/ax"
  }
};
