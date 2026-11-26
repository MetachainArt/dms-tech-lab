/**
 * Ideas essay: "선택지는 몇 개가 적당할까" / "How Many Options Is Too Many?"
 * 한영 독립 편집본. figure 블록의 src는 /public 아래 내부 경로.
 */
import type { IdeasEssay } from "./ideas-essay-watching";

export const howManyOptionsEssayKo: IdeasEssay = {
  "id": "how-many-options-is-too-many",
  "date": "2026. 11. 26",
  "category": "Essay",
  "title": "선택지는 몇 개가 적당할까",
  "subtitle": "선택 과부하 연구가 보여 주는 것과 보여 주지 못하는 것",
  "summary": "잼 24종과 6종을 비교한 2000년 실험은 종류가 많은 쪽에서 구매가 훨씬 적었다고 보고했습니다. 실험 50편을 합친 2010년 분석에서는 평균 효과가 거의 0이었고, 2015년 분석은 네 가지 조건에 따라 달라진다고 정리했습니다. 세 논문이 확인한 것과 확인하지 못한 것을 따라가고, AI에게 시안을 여러 개 받기 전에 정해 둘 것을 DMS.Labs의 제안으로 적습니다.",
  "blocks": [
    {
      "type": "p",
      "text": "선택지가 많으면 고르기가 어려워질까요? 항상 그렇지는 않았습니다. 2000년에 발표된 실험에서는 잼 24종을 놓은 시식대보다 6종을 놓은 시식대에 들른 사람 가운데 훨씬 많은 비율이 실제로 잼을 샀습니다. 그런데 2010년에 실험 50편을 합쳐 계산한 분석에서는 선택지를 늘린 효과의 평균이 거의 0이었습니다. 2015년의 다른 분석은 선택지 수만 볼 것이 아니라 과제의 난이도, 선택지끼리의 관계, 고르는 사람이 원하는 것을 아는 정도, 고르는 목적을 함께 봐야 한다고 정리했습니다. 이 글은 세 논문을 차례로 읽고, 마지막에 AI에게 시안을 여러 개 받아 고를 때 미리 정해 둘 것을 DMS.Labs의 제안으로 적습니다."
    },
    {
      "type": "p",
      "text": "2026년 11월 26일 확인한 자료 기준입니다. 세 논문은 저자나 대학 사이트에 올라온 PDF로 본문 전체를 읽었고, 학술지 최종 편집본과 일일이 대조하지는 못했습니다. 2015년 이후 나온 후속 연구는 읽지 못했습니다. 세 논문 모두 AI가 만든 선택지를 다루지 않습니다. 끝부분의 사무실 장면은 설명을 위한 가정이며 DMS 고객 사례가 아닙니다. 제안한 방법은 시험하지 않았습니다."
    },
    {
      "type": "figure",
      "src": "/images/ideas/how-many-options-is-too-many/six-jars-on-windowsill.webp",
      "alt": "낡은 나무 창틀 위에 뚜껑을 천으로 덮고 끈으로 묶은 잼 병 여섯 개가 한 줄로 놓여 있다. 병마다 살구색, 자두색, 키위색, 체리색, 호박색, 붉은 열매색으로 색이 다르다. 왼쪽 앞에는 줄무늬 천과 나무 숟가락이 있고, 읽을 수 있는 글자는 없다.",
      "caption": "생성 이미지. 설명을 위한 창가 장면이며 실제 실험이나 현장의 기록이 아닙니다.",
      "width": 1440,
      "height": 960
    },
    {
      "type": "h",
      "text": "잼 가게 실험에서는 무슨 일이 있었습니까?"
    },
    {
      "type": "p",
      "text": "시식대에 더 많은 사람이 멈춘 쪽은 24종이었지만, 실제로 잼을 산 사람은 6종 쪽이 훨씬 많았습니다. Sheena Iyengar와 Mark Lepper가 2000년 Journal of Personality and Social Psychology에 발표한 논문의 첫 실험이 그 결과를 보고했습니다. 미국 캘리포니아주 멘로파크의 고급 식료품점 Draeger’s에서 토요일 두 번, 다섯 시간씩 시식대를 차렸습니다. 시식대에는 한 시간씩 번갈아 잼 24종 또는 6종을 올렸습니다. 딸기와 라즈베리 같은 흔한 맛은 빼서 손님이 이미 정해 둔 취향대로 집어 가지 않게 했습니다. 6종은 스탠퍼드 학부생 30명에게 물은 예비 조사로 골랐고, 가장 인기 있는 맛과 보통인 맛, 가장 인기 없는 맛이 두 가지씩 들어가게 했습니다. 손님은 마음껏 맛을 볼 수 있었고, 모두 1달러 할인 쿠폰을 받았습니다."
    },
    {
      "type": "p",
      "text": "결과는 두 갈래였습니다. 먼저 시식대에 멈춰 선 사람입니다. 24종 시식대 앞을 지난 242명 가운데 60%인 145명이 멈췄고, 6종 시식대에서는 260명 가운데 40%인 104명이 멈췄습니다. 종류가 많은 쪽이 더 눈길을 끌었습니다. 맛본 잼의 수는 24종 쪽이 평균 1.50개, 6종 쪽이 1.38개로 차이가 없었습니다. 다음은 쿠폰으로 잼을 실제로 산 사람입니다. 6종 쪽에서는 104명 가운데 31명, 거의 30%가 샀습니다. 24종 쪽에서는 145명 가운데 4명, 3%가 샀습니다."
    },
    {
      "type": "p",
      "text": "저자들은 이 실험에 한계가 있을 수 있다고 직접 적었습니다. 6종 쪽 손님은 선반에 다른 잼이 많다는 것을 알고 있었고, 두 시식대가 서로 다른 성향의 손님을 불렀을 수도 있었으며, 사람들 앞에서 충분히 맛을 보기 어려웠을 수도 있다는 것입니다. 그래서 같은 질문을 다른 상황에서 두 번 더 확인했습니다."
    },
    {
      "type": "h",
      "text": "에세이와 초콜릿 실험도 같은 결과였습니까?"
    },
    {
      "type": "p",
      "text": "방향은 같았습니다. 두 번째는 스탠퍼드 입문 사회심리학 수업입니다. 영화를 본 뒤 쓰는 추가 점수용 과제를 내면서 학생들에게 글감이 6개 또는 30개 적힌 목록을 나눠 주었습니다. 분석한 학생은 193명입니다. 6개 목록을 받은 70명 가운데 74%가 과제를 냈고, 30개 목록을 받은 123명 가운데서는 60%가 냈습니다. 낸 글의 평가도 6개 목록 쪽이 약간 높았습니다. 내용과 형식 점수를 합친 평균이 8.09와 7.69였습니다. 과제를 낸 학생들의 이전 시험 성적은 조건별로 차이가 없었다고 합니다."
    },
    {
      "type": "p",
      "text": "세 번째는 실험실입니다. 참가자를 고디바 초콜릿 6종을 보는 조건, 30종을 보는 조건, 골라 주는 대로 받는 조건으로 나눴습니다. 참여 보수로 초콜릿과 돈 가운데 하나를 고르게 했을 때 초콜릿을 택한 비율은 6종 조건에서 48%, 30종 조건에서 12%, 직접 고르지 않은 조건에서 10%였습니다. 30종을 본 사람들은 고르는 과정이 더 즐겁다고 하면서도 더 어렵고 답답하다고 답했습니다. 맛을 본 뒤에는 불만과 후회도 더 컸습니다."
    },
    {
      "type": "p",
      "text": "이유는 저자들도 단정하지 않았습니다. 선택지가 많으면 적당히 만족할 만한 것을 고르고 만다는 가설은 이 실험에서 뒷받침되지 않았습니다. 고른 결과에 대한 책임을 더 크게 느낀다는 설명은 일부 지지됐다고 합니다. 이 결과가 어디서나 나온다고 주장하지도 않았습니다. 연구진은 참가자에게 이미 강한 취향이 있으면 결과가 달라질 수 있다고 보고 취향이 뚜렷하지 않을 만한 과제를 일부러 골랐습니다. 경험이 많은 사람에게는 선택지가 많아 보이지 않을 수 있다는 말도 논문 끝에 있습니다."
    },
    {
      "type": "h",
      "text": "실험 50편을 합치면 평균은 어떻게 나옵니까?"
    },
    {
      "type": "p",
      "text": "평균은 거의 0이었습니다. Benjamin Scheibehenne, Rainer Greifeneder, Peter Todd가 2010년 Journal of Consumer Research에 발표한 분석입니다. 발표된 논문과 발표되지 않은 원고를 함께 모아 실험 50편, 63개 조건, 참가자 5,036명을 합쳤습니다. 선택지가 많을 때 나타나는 부정적 효과 크기의 평균은 0.02였고 95% 신뢰구간은 -0.09에서 0.12였습니다. 구간이 0을 포함하니 평균으로는 효과가 있다고 하기 어렵다는 뜻입니다. 다만 연구마다 값이 크게 흩어져 있었습니다. 선택지가 많을수록 나빠진 실험도 있었고 오히려 좋아진 실험도 있었습니다."
    },
    {
      "type": "p",
      "text": "저자들은 그 흩어짐이 어디서 오는지도 살폈습니다. 이미 뚜렷한 취향이나 전문성이 있는 사람은 선택지가 많을 때 오히려 이득을 봤습니다. 먹은 양을 결과로 잰 실험에서도 선택지가 많은 쪽이 나았는데, 저자들은 이것이 한 연구(Kahn과 Wansink, 2004)의 자료가 끌고 간 결과라고 적었습니다. 발표된 논문이 발표되지 않은 원고보다 선택 과부하를 더 보고하는 경향이 조금 있었고, 최근 연구일수록 효과가 약했습니다. 선택지 수가 많을수록 효과가 커지는 직선 관계는 확인되지 않았습니다. 결론은 선택 과부하가 안정적인 현상이라고 할 수 없고, 언제나 일어나는 조건도 찾지 못했다는 것이었습니다. 선택지를 범주로 묶어 두었는지, 서로 비교하기 어려운 선택인지처럼 개별 연구에서 제안된 조건들은 앞으로 더 살펴볼 만하다고 정리했습니다."
    },
    {
      "type": "h",
      "text": "조건을 나누어 보면 결과가 달라집니까?"
    },
    {
      "type": "p",
      "text": "2015년 분석에서는 달라졌다고 보고했습니다. Alexander Chernev, Ulf Böckenholt, Joseph Goodman이 Journal of Consumer Psychology에 발표한 이 분석은 접근이 달랐습니다. 학술지에 실린 논문만 모아 논문 21편, 연구 53개, 관찰 99개, 참가자 7,202명을 분석했습니다. 평균을 묻는 대신 무엇이 선택 과부하를 일으키는지 물었고 네 가지를 꼽았습니다. 첫째는 과제의 난이도입니다. 시간 제한, 결정을 해명해야 하는지, 선택지를 설명하는 속성이 몇 가지인지가 여기에 들어갑니다. 둘째는 선택지 묶음의 복잡도입니다. 압도적으로 나은 선택지가 있는지, 선택지가 얼마나 매력적이고 서로 비교하기 쉬운지를 봅니다. 셋째는 고르는 사람이 얼마나 확신 없이 시작하는지, 넷째는 고르는 목적이 노력을 줄이는 쪽에 가까운지입니다. 네 요인이 높을수록 선택 과부하가 더 쉽게 나타났다고 보고했습니다. 이 요인들을 함께 고려하면 선택지 수의 효과도 유의했다고 합니다."
    },
    {
      "type": "p",
      "text": "두 분석의 결론은 서로 어긋납니다. 2015년 논문은 2010년 분석과 달리 조건을 반영하면 효과가 있다고 하면서, 그 차이가 자료만이 아니라 분석 모형에서도 나온다고 설명했습니다. 2010년 분석에 쓰인 자료를 자신들의 모형으로 다시 분석해도 같은 방향이 나왔다고 합니다. 이 글은 어느 쪽이 맞는지 판정하지 못합니다. 둘이 겹치는 부분만 말할 수 있습니다. 선택지가 많으면 일률적으로 해롭다는 주장은 근거가 약하고, 어떤 조건에서는 해로울 수 있다는 가능성은 두 논문 모두 열어 둡니다. 2015년 논문은 고르는 사람의 목적을 다룬 연구가 소수라서 더 살펴봐야 한다고도 적었습니다."
    },
    {
      "type": "figure",
      "src": "/images/ideas/how-many-options-is-too-many/printed-proofs-two-set-apart.webp",
      "alt": "창가 나무 책상 왼쪽에 회색 블록과 선으로만 이루어진 인쇄 시안 종이가 여러 장 겹쳐 펼쳐져 있고, 오른쪽 빈 자리에는 시안 두 장이 따로 놓여 있다. 그 옆에 깎은 연필 한 자루가 있다. 읽을 수 있는 글자는 없다.",
      "caption": "생성 이미지. 설명을 위한 책상 장면이며 실제 작업 기록이 아닙니다.",
      "width": 1440,
      "height": 960
    },
    {
      "type": "h",
      "text": "AI에게 시안을 여러 개 받는 일에도 이 결과를 쓸 수 있습니까?"
    },
    {
      "type": "p",
      "text": "그대로 옮길 수는 없습니다. 세 논문은 잼, 초콜릿, 글감, 상품 묶음을 다뤘고 AI가 만든 선택지는 다루지 않았습니다. 조심해서 말할 수 있는 것은 하나입니다. 상점이나 실험자가 정해 주던 선택지의 수를, AI를 쓰면 쓰는 사람이 정하게 됩니다. 시안 한 장을 만드는 데 드는 시간이 거의 없으니 열 개도 서른 개도 요청할 수 있습니다. Iyengar와 Lepper는 논문 끝에서 선택지를 밖에서 주지 않고 사람이 스스로 늘리는 경우를 따로 연구할 만하다고 적었습니다. 사람은 감당할 수 있는 것보다 많은 선택지를 스스로 마련하려 할 수도 있다는 것입니다. AI 시안이 바로 그런 상황이지만, 이를 직접 시험한 연구는 이번에 읽은 자료에 없었습니다."
    },
    {
      "type": "h",
      "text": "시안을 요청하기 전에 무엇을 정해 두면 좋겠습니까?"
    },
    {
      "type": "p",
      "text": "여기부터는 DMS.Labs의 제안이고 시험하지 않은 방법입니다. 앞의 네 요인을 시안 요청에 맞춰 보면 요청 전에 정할 것이 네 가지 나옵니다. 첫째, 무엇을 기준으로 고를지 한 줄로 먼저 씁니다. 고르는 사람이 원하는 것을 확신하지 못하는 상태에서 선택지를 늘리면 부담이 커지기 쉽다는 것이 셋째 요인의 방향입니다. 둘째, 시안이 서로 어떤 점에서 달라야 하는지 하나만 정합니다. 문장 길이만 다르게, 구도만 다르게 하는 식입니다. 여러 면에서 동시에 다르면 비교하기 어려워집니다. 셋째, 개수를 요청 전에 정하고 한 번에 받습니다. 몇 개가 좋은지는 이 연구들에서 나오지 않습니다. 6과 24는 실험 조건이었을 뿐 기준값이 아닙니다. 넷째, 어디서 그만 볼지 정합니다. 기준에 맞는 시안이 나오면 멈출 사람과 가장 좋은 것을 찾을 때까지 볼 사람은 같은 시안 묶음을 다르게 겪을 수 있습니다. 이 항목은 넷째 요인인 고르는 목적을 시안 요청에 옮긴 것입니다."
    },
    {
      "type": "p",
      "text": "직원 여섯 명인 세무 사무소가 고객 안내문 시안을 AI에게 맡기는 가상의 장면을 생각해 보겠습니다. 요청 전에 적은 카드에는 ‘기준은 어르신이 한 번에 읽을 수 있는가’, ‘달라지는 것은 문장 길이뿐’, ‘4개’, ‘기준에 맞는 첫 시안에서 멈춤’이 적혀 있습니다. 4라는 숫자에는 연구 근거가 없고 설명을 위해 고른 값입니다. 이 카드가 실제로 도움이 되는지는 시험하지 않았습니다. 시험한다면 같은 안내문을 카드 없이 12개, 카드로 4개 받아 고르는 데 걸린 시간과 고른 뒤 고친 횟수를 비교해 볼 수 있습니다. 그 결과는 이 글에 없습니다."
    },
    {
      "type": "p",
      "text": "AI 결과를 누가 어떤 기준으로 확인할지는 ‘AI 결과 검수자 정하기’에, 일을 맡기기 전에 쓰는 한 장짜리 설명서는 ‘AI에게 일을 시키기 전에, 업무 설명서 한 장부터 씁니다’에, 처음 자동화할 업무를 고르는 기준은 ‘자동화할 첫 업무 고르기’에 정리해 두었습니다.",
      "links": [
        {
          "label": "AI 결과 검수자 정하기",
          "href": "/works/ai-output-reviewer-card"
        },
        {
          "label": "AI에게 일을 시키기 전에, 업무 설명서 한 장부터 씁니다",
          "href": "/works/ai-skill-job-sheet"
        },
        {
          "label": "자동화할 첫 업무 고르기",
          "href": "/works/choosing-first-automation-task"
        }
      ]
    },
    {
      "type": "p",
      "text": "팀의 AI 사용 방식을 점검하고 싶으시면 문의 페이지로 연락하실 수 있습니다.",
      "links": [
        {
          "label": "문의 페이지",
          "href": "/contact"
        }
      ]
    }
  ],
  "sources": [
    {
      "label": "Iyengar & Lepper · When Choice Is Demotivating: Can One Desire Too Much of a Good Thing? · Journal of Personality and Social Psychology 79(6), 995-1006, 2000",
      "href": "https://doi.org/10.1037/0022-3514.79.6.995"
    },
    {
      "label": "Scheibehenne, Greifeneder & Todd · Can There Ever Be Too Many Options? A Meta-Analytic Review of Choice Overload · Journal of Consumer Research 37(3), 409-425, 2010",
      "href": "https://doi.org/10.1086/651235"
    },
    {
      "label": "Chernev, Böckenholt & Goodman · Choice overload: A conceptual review and meta-analysis · Journal of Consumer Psychology 25(2), 333-358, 2015",
      "href": "https://doi.org/10.1016/j.jcps.2014.08.002"
    }
  ],
  "next": {
    "label": "다음: DMS 생성형 AI 교육",
    "href": "/education/gen-ai"
  }
};

export const howManyOptionsEssayEn: IdeasEssay = {
  "id": "how-many-options-is-too-many",
  "date": "2026. 11. 26",
  "category": "Essay",
  "title": "How Many Options Is Too Many?",
  "subtitle": "What the choice overload studies show, and what they cannot",
  "summary": "A 2000 experiment reported that shoppers who saw 24 jams bought far less often than shoppers who saw 6. A 2010 analysis pooling 50 experiments found a mean effect of virtually zero, and a 2015 analysis argued that the effect depends on four conditions. This essay follows what the three papers found and did not find, then sets out, as a DMS.Labs proposal, what to decide before asking AI for several drafts.",
  "blocks": [
    {
      "type": "p",
      "text": "Do more options make a choice harder? Not always. In a 2000 experiment, a far higher share of the people who stopped at a tasting table bought jam when it offered 6 jams than when it offered 24. But a 2010 analysis that pooled 50 experiments found that the average effect of adding options was virtually zero. A 2015 analysis argued that the number of options is the wrong thing to look at by itself. It pointed to the difficulty of the task, how the options relate to one another, how well the chooser knows what they want, and what the chooser is trying to achieve. This essay reads the three papers in turn and ends with a DMS.Labs proposal for what to decide before asking AI for several drafts."
    },
    {
      "type": "p",
      "text": "This is based on materials checked on November 26, 2026. I read the full text of all three papers from PDF copies posted on the authors’ or universities’ sites, and I did not compare them line by line with the final journal editions. I did not read follow-up studies published after 2015. None of the three papers deals with options generated by AI. The office scene near the end is a hypothetical for illustration, not a DMS client case, and the method proposed there has not been tested."
    },
    {
      "type": "figure",
      "src": "/images/ideas/how-many-options-is-too-many/six-jars-on-windowsill.webp",
      "alt": "Six jars of jam stand in a row on a worn wooden windowsill, each lid covered with cloth and tied with string. The jams are different colors: apricot, plum, kiwi green, cherry, amber and red berry. A striped cloth and a wooden spoon lie in the left foreground. There is no readable writing.",
      "caption": "Generated image. An illustrative windowsill scene, not a record of any real experiment or site.",
      "width": 1440,
      "height": 960
    },
    {
      "type": "h",
      "text": "What happened at the jam stall?"
    },
    {
      "type": "p",
      "text": "More shoppers stopped at the 24-jam table, but a far larger share of those who stopped at the 6-jam table bought a jar. This was the first experiment in a paper by Sheena Iyengar and Mark Lepper, published in the Journal of Personality and Social Psychology in 2000. On two Saturdays, five hours each, they set up a tasting booth in Draeger’s, an upscale grocery store in Menlo Park, California. The booth alternated hourly between 24 jams and 6 jams. Common flavors such as strawberry and raspberry were left out so that shoppers would not simply grab what they already preferred. The 6 were picked after a preliminary survey of 30 Stanford undergraduates, with two of the best-liked flavors, two of middling appeal and two of the least liked. Shoppers could taste as many as they wished, and every shopper received a coupon for one dollar off a jar."
    },
    {
      "type": "p",
      "text": "The results split in two. First, who stopped. Of the 242 shoppers who passed the 24-jam display, 145 (60%) stopped; of the 260 who passed the 6-jam display, 104 (40%) stopped. The larger display drew more attention. The number of jams tasted did not differ: 1.50 on average at the 24-jam table and 1.38 at the 6-jam table. Second, who bought. At the 6-jam table, 31 of 104 shoppers, nearly 30%, bought a jar. At the 24-jam table, 4 of 145, or 3%, did."
    },
    {
      "type": "p",
      "text": "The authors wrote down the limits of this first experiment themselves. Shoppers at the 6-jam table knew many other jams stood on the shelf. The two displays might have drawn different kinds of shoppers. And shoppers tasting in public may not have felt free to taste more. So they asked the same question in two other settings."
    },
    {
      "type": "h",
      "text": "Did the essay and chocolate experiments agree?"
    },
    {
      "type": "p",
      "text": "In direction, yes. The second was a Stanford introductory social psychology course. Students who watched a film could earn extra credit by writing a short response, and each received a list of either 6 or 30 possible topics. The analysis covered 193 students. Of the 70 who received the 6-topic list, 74% turned in a paper; of the 123 who received the 30-topic list, 60% did. The papers from the 6-topic group were also rated slightly higher, with combined content and form scores averaging 8.09 versus 7.69. Among students who turned in a paper, earlier exam performance did not differ between the conditions."
    },
    {
      "type": "p",
      "text": "The third was a laboratory study. Participants saw 6 Godiva chocolates, saw 30, or were simply handed a chocolate chosen for them. When offered a chocolate or cash as payment for taking part, 48% of the 6-chocolate group chose chocolate, against 12% of the 30-chocolate group and 10% of the group that had not chosen. People who saw 30 said choosing was more enjoyable, and also more difficult and more frustrating. After tasting, they reported more dissatisfaction and more regret."
    },
    {
      "type": "p",
      "text": "The authors did not claim to know why. A hypothesis that people facing many options settle for something merely satisfactory was not supported in this experiment. An explanation that people feel more responsible for the outcome of a larger choice received some support. Nor did they claim the result holds everywhere. They deliberately chose tasks where people were unlikely to hold strong preferences, because strong preferences could change the result. The paper also notes that for someone with a lot of experience, a large set may not feel large."
    },
    {
      "type": "h",
      "text": "What is the average across 50 experiments?"
    },
    {
      "type": "p",
      "text": "Virtually zero. That is the finding of a 2010 analysis by Benjamin Scheibehenne, Rainer Greifeneder and Peter Todd in the Journal of Consumer Research. They gathered published papers and unpublished manuscripts: 50 experiments, 63 conditions, 5,036 participants. The mean effect size of choice overload was 0.02, with a 95% confidence interval from -0.09 to 0.12. The interval includes zero, so on average an effect cannot be claimed. The values varied a great deal from study to study, though. Some experiments found people did worse with more options, and others found they did better."
    },
    {
      "type": "p",
      "text": "The authors also looked at where that spread came from. People with clear preferences or expertise benefited from having more options. Experiments that measured the amount people consumed also favored larger sets, but the authors noted that this was driven by the data of one study (Kahn and Wansink, 2004). Published papers were slightly more likely than unpublished manuscripts to report choice overload, and more recent studies found weaker effects. There was no straight-line relationship between the number of options and the size of the effect. Their conclusion was that choice overload is not a robust phenomenon and that no condition guaranteeing it could be identified. Conditions proposed in single studies, such as whether options were grouped into categories or whether the choice involved hard trade-offs, still looked worth studying."
    },
    {
      "type": "h",
      "text": "Does the result change when you split by condition?"
    },
    {
      "type": "p",
      "text": "It does, according to a 2015 analysis by Alexander Chernev, Ulf Böckenholt and Joseph Goodman in the Journal of Consumer Psychology, which took a different route. It used only papers published in journals: 21 articles, 53 studies, 99 observations and 7,202 participants. Instead of asking for an average, it asked what produces choice overload, and named four things. The first is task difficulty, which includes time limits, whether the choice must be justified, and how many attributes describe each option. The second is the complexity of the set: whether one option clearly dominates, and how attractive and easy to compare the options are. The third is how uncertain the chooser is about what they want, and the fourth is whether the chooser’s goal is to minimize effort. Higher levels of each made choice overload more likely, the authors reported. Once these factors were taken into account, the effect of the number of options was significant as well."
    },
    {
      "type": "p",
      "text": "The two analyses disagree. The 2015 paper says that, unlike the 2010 analysis, it finds an effect once conditions are included, and it attributes the difference to the analytic model as well as the data. It reports that reanalyzing the 2010 data with its own model gave results in the same direction. This essay cannot judge which one is right. It can only point to where they overlap. The claim that more options are uniformly harmful has weak support, and neither paper rules out that they can be harmful under some conditions. The 2015 authors also noted that few studies had examined the chooser’s goal and that more work was needed."
    },
    {
      "type": "figure",
      "src": "/images/ideas/how-many-options-is-too-many/printed-proofs-two-set-apart.webp",
      "alt": "On the left of a wooden desk by a window, several printed proof sheets made only of grey blocks and thin lines lie overlapping. On a bare patch to the right, two sheets are set apart with a sharpened pencil beside them. There is no readable writing.",
      "caption": "Generated image. An illustrative desk scene, not a record of real work.",
      "width": 1440,
      "height": 960
    },
    {
      "type": "h",
      "text": "Do these results apply to getting several drafts from AI?"
    },
    {
      "type": "p",
      "text": "They cannot be carried over as they are. The three papers dealt with jam, chocolate, essay topics and product assortments, not options generated by AI. One cautious point can be made. The number of options used to be set by a shop or an experimenter. With AI, the person choosing sets it. A draft costs almost no time, so ten or thirty can be requested. At the end of their paper, Iyengar and Lepper wrote that it would be worth studying cases where the extensive choice set is self-generated rather than imposed from outside, since people may sometimes prefer to give themselves more choices than they can handle. AI drafts are exactly that situation, but the materials I read contain no study that tested it directly."
    },
    {
      "type": "h",
      "text": "What should be decided before asking for drafts?"
    },
    {
      "type": "p",
      "text": "From here on this is a DMS.Labs proposal, and it has not been tested. Mapping the four factors onto a request for drafts gives four things to decide beforehand. First, write one line saying what you will choose by. The third factor suggests that adding options while unsure of what you want makes the load heavier. Second, decide on one way in which the drafts should differ, such as sentence length only or layout only. Drafts that differ in several ways at once are harder to compare. Third, fix the number before asking and ask for it once. These studies do not say what the right number is. Six and 24 were experimental conditions, not recommended values. Fourth, decide where you will stop looking. Someone who stops at the first draft meeting the standard and someone who keeps looking for the best may experience the same set differently. This item carries the fourth factor, the chooser’s goal, over to the request."
    },
    {
      "type": "p",
      "text": "Here is a hypothetical scene. A six-person tax office asks AI for drafts of a client notice. The card written before the request says: the standard is that an older client can read it in one pass; only sentence length varies; four drafts; stop at the first draft that meets the standard. The number four has no research behind it and was picked for illustration. Whether such a card helps has not been tested. A test could ask for the same notice as 12 drafts without the card and 4 with it, then compare the time spent choosing and the number of edits after choosing. Those results are not in this essay."
    },
    {
      "type": "p",
      "text": "How to decide who checks AI output, and by what standard, is in “Naming a Reviewer for AI Output.” A one-page job description to write before handing work to AI is in “Before you ask AI to do the job, write the one-page job sheet.” Criteria for picking the first task to automate are in “Choosing the First Task to Automate.”",
      "links": [
        {
          "label": "Naming a Reviewer for AI Output",
          "href": "/en/works/ai-output-reviewer-card"
        },
        {
          "label": "Before you ask AI to do the job, write the one-page job sheet",
          "href": "/en/works/ai-skill-job-sheet"
        },
        {
          "label": "Choosing the First Task to Automate",
          "href": "/en/works/choosing-first-automation-task"
        }
      ]
    },
    {
      "type": "p",
      "text": "If you want to review how your team uses AI, you can reach us through the contact page.",
      "links": [
        {
          "label": "contact page",
          "href": "/en/contact"
        }
      ]
    }
  ],
  "sources": [
    {
      "label": "Iyengar & Lepper · When Choice Is Demotivating: Can One Desire Too Much of a Good Thing? · Journal of Personality and Social Psychology 79(6), 995-1006, 2000",
      "href": "https://doi.org/10.1037/0022-3514.79.6.995"
    },
    {
      "label": "Scheibehenne, Greifeneder & Todd · Can There Ever Be Too Many Options? A Meta-Analytic Review of Choice Overload · Journal of Consumer Research 37(3), 409-425, 2010",
      "href": "https://doi.org/10.1086/651235"
    },
    {
      "label": "Chernev, Böckenholt & Goodman · Choice overload: A conceptual review and meta-analysis · Journal of Consumer Psychology 25(2), 333-358, 2015",
      "href": "https://doi.org/10.1016/j.jcps.2014.08.002"
    }
  ],
  "next": {
    "label": "Next: DMS Generative AI (in Korean)",
    "href": "/education/gen-ai"
  }
};
