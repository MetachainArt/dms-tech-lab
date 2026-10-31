/**
 * Ideas essay: "초안이 먼저 오면" / "When the Draft Arrives First"
 * 한영 독립 편집본. figure 블록의 src는 /public 아래 내부 경로.
 */
import type { IdeasEssay } from "./ideas-essay-watching";

export const draftFirstEssayKo: IdeasEssay = {
  "id": "draft-comes-first",
  "date": "2026. 10. 31",
  "category": "Essay",
  "title": "초안이 먼저 오면",
  "subtitle": "AI가 먼저 쓴 글을 고칠 때 내 생각이 놓이는 자리",
  "summary": "AI가 먼저 쓴 초안을 고쳐 쓰면 처음부터 내가 쓴 글과 같은 글이 나올까요? 글쓰기 실험 다섯 편을 따라, 초안이 문장과 의견을 어떻게 기울이는지, 그리고 고쳐 쓰는 동안 내 목소리가 얼마나 돌아오는지 살펴보고 작업 순서를 바꾸는 방법을 제안합니다.",
  "blocks": [
    {
      "type": "p",
      "text": "AI가 먼저 쓴 초안을 받아 고치면 처음부터 내가 쓴 글과 같은 글이 나올까요? 꼭 그렇지는 않다는 실험 결과가 있습니다. AI 아이디어를 받은 사람들의 글은 평균적으로 더 잘 쓰였다고 평가받았지만 글끼리는 서로 더 닮았습니다. 다른 실험에서는 글에 담긴 의견과 글을 쓴 뒤의 설문 답이 AI의 입장 쪽으로 기울었습니다. 다만 대부분 짧은 글쓰기 실험에서 나온 결과입니다. 어떤 보상을 받으며 고쳐 쓰느냐에 따라 결과가 달라진다는 최근 사전 공개 논문도 있습니다."
    },
    {
      "type": "p",
      "text": "2026년 10월 31일 확인한 자료 기준입니다. Doshi와 Hauser(2024), Padmakumar와 He(2024)는 초록과 본문 일부를, Jakesch 등(2023)과 Williams-Ceci 등(2026)은 초록을 읽었습니다. Jo와 Raghavan의 글은 arXiv에 올라온 사전 공개본이고 동료 심사를 거쳤는지는 확인하지 못했습니다. 사무실 장면은 설명을 위한 가정이며 DMS 고객 사례가 아닙니다. 글 끝의 제안은 저의 생각이며 이 연구들이 정한 절차가 아닙니다."
    },
    {
      "type": "figure",
      "src": "/images/ideas/draft-comes-first/two-starts.webp",
      "alt": "창가 나무 책상 위에 아직 아무것도 적지 않은 공책이 펼쳐져 있고 연필이 그 위에 비스듬히 놓여 있다. 오른쪽에는 글이 인쇄된 종이 한 장이 있고, 뒤쪽에 찻잔과 화분과 책 몇 권이 보인다. 따뜻한 자연광이 책상에 닿는다.",
      "caption": "생성 이미지. 설명을 위한 책상 장면이며 실제 기록이 아닙니다.",
      "width": 1440,
      "height": 960
    },
    {
      "type": "h",
      "text": "초안을 먼저 받으면 글이 어떻게 달라질까요?"
    },
    {
      "type": "p",
      "text": "AI 아이디어를 받은 글은 평균 점수가 올랐지만 서로 더 닮았습니다. Anil Doshi와 Oliver Hauser는 2024년 Science Advances에 온라인 실험을 발표했습니다. 작가 293명이 청소년과 젊은 성인이 읽을 여덟 문장짜리 이야기를 썼습니다. 조건은 세 가지였습니다. 도움 없이 쓰는 조건, 생성형 AI가 낸 이야기 아이디어를 하나 받을 수 있는 조건, 최대 다섯 개까지 받을 수 있는 조건입니다. 별도의 평가자 600명이 어떤 조건에서 나온 이야기인지 모른 채 읽고 점수를 매겼습니다."
    },
    {
      "type": "p",
      "text": "AI 아이디어를 받은 쪽의 이야기가 더 창의적이고 더 잘 쓰였으며 더 즐겁다고 평가받았습니다. 최대 다섯 개를 받은 조건은 도움 없이 쓴 조건보다 참신성이 8.1%, 유용성이 9.0% 높았습니다. 여기서 유용성은 목표 독자에게 맞는지, 책으로 키울 수 있는지 같은 항목을 묶은 지표입니다. 창의성 검사 점수가 낮은 작가에게는 효과가 더 커서, 다섯 개 조건에서 참신성 10.7%, 유용성 11.5%가 올랐습니다. 아이디어를 받을 수 있었던 작가의 88.4%는 한 번 이상 실제로 요청했습니다."
    },
    {
      "type": "p",
      "text": "대가도 있었습니다. AI 아이디어를 받은 이야기끼리는 도움 없이 쓴 이야기끼리보다 서로 더 닮았습니다. 닮은 정도의 증가량은 도움 없이 쓴 이야기들의 유사도 범위의 10.7%(아이디어 한 개 조건), 8.9%(다섯 개 조건)였습니다. 저자들은 이 구조를 사회적 딜레마에 비유합니다. 쓰는 사람 각자는 이득을 보지만 모두가 같은 도구를 쓰면 새로운 내용의 폭이 좁아집니다. 이 실험은 한 종류의 짧은 이야기만 다뤘고 평가도 온라인 평가자가 맡았습니다."
    },
    {
      "type": "p",
      "text": "Vishakh Padmakumar와 He He는 2024년 ICLR 논문에서 같은 문제를 논설문으로 살폈습니다. Upwork에서 모집한 영어 원어민 가운데 글쓰기나 교정 경력이 있는 사람들이 뉴욕타임스 학생 의견란의 주제로 논설문을 썼습니다. 조건은 혼자 쓰기, 기본 언어 모델(GPT-3)과 쓰기, 사람 피드백으로 추가 조정한 모델(InstructGPT)과 쓰기였습니다. 필자들의 글이 서로 닮아지고 어휘와 내용의 다양성이 줄어든 것은 InstructGPT 조건뿐이었습니다. 저자들은 그 원인을 주로 모델이 글에 넣은 부분의 다양성이 낮았기 때문이라고 봅니다. 사람이 직접 쓴 부분은 모델과 함께 쓰는 영향을 받지 않았다고 합니다. 논문에 쓰인 모델 기준의 결과라서, 지금 쓰는 모델에도 그대로 들어맞는지는 이 논문만으로 알 수 없습니다."
    },
    {
      "type": "h",
      "text": "의견까지 따라가기도 할까요?"
    },
    {
      "type": "p",
      "text": "두 실험에서는 그랬습니다. 글과 설문 답이 도우미의 입장 쪽으로 움직였습니다. Maurice Jakesch와 동료들은 2023년 CHI 논문에서 참가자 1,506명에게 소셜 미디어가 사회에 좋은지 논하는 글을 쓰게 했습니다. 처치 집단은 소셜 미디어가 사회에 좋다거나 나쁘다는 쪽으로 주장하도록 설정된 언어 모델 글쓰기 도우미를 썼습니다. 글에 드러난 의견이 도우미의 방향으로 기울었고 글을 쓴 뒤 태도 설문의 답도 같은 방향으로 움직였습니다. 글에 담긴 의견은 독립 판정자 500명이 평가했습니다."
    },
    {
      "type": "p",
      "text": "같은 연구진 일부가 이어서 2026년 Science Advances에 낸 논문은 참가자 2,582명이 참여한 사전 등록 실험 두 건을 담고 있습니다. 참가자들은 사회 쟁점에 대한 글을 쓰면서 한쪽으로 치우친 자동완성 제안을 받았고 쓰기 뒤에 밝힌 태도가 AI의 입장 쪽으로 모였습니다. 참가자 다수는 제안이 치우쳤다는 것도, 그것이 자신에게 영향을 줬다는 것도 알아차리지 못했습니다. 같은 내용을 정적인 글로 보여 줄 때보다 쓰는 도중 제안으로 받을 때 영향이 더 컸습니다. 저자들은 이 연구가 짧은 기간의 효과만 살폈고 얼마나 오래 가는지는 분명하지 않다고 적었습니다."
    },
    {
      "type": "h",
      "text": "알고 있으면 막을 수 있을까요?"
    },
    {
      "type": "p",
      "text": "같은 논문에 따르면 도우미가 치우쳐 있다는 사실을 쓰기 전이나 쓴 뒤에 알려 줘도 영향은 줄지 않았습니다. 이 결과를 일터로 가져오면, '초안은 AI가 썼으니 조심해서 읽으라'는 당부만으로는 부족할 수 있습니다. 이 해석은 저의 것입니다. 실험의 주제는 사회 쟁점에 대한 의견이었습니다. 업무 문서의 표현과 입장이 같은 방식으로 움직이는지는 이 논문들이 시험하지 않았습니다."
    },
    {
      "type": "h",
      "text": "고쳐 쓰는 동안 내 목소리가 돌아올까요?"
    },
    {
      "type": "p",
      "text": "일부는 돌아옵니다. 한 사전 공개 논문에서 참가자들은 고쳐 쓰는 동안 AI 초안에서 멀어졌지만 다양성을 전부 되찾지는 못했습니다. Nathanael Jo와 Manish Raghavan의 사전 공개본(arXiv, 2026년 4월 첫 공개, 10월 28일 개정)은 조금 다른 그림을 보여 줍니다. 사전 등록한 무작위 실험 두 건에서 참가자들은 AI와 자유롭게 대화하며 글을 썼습니다. 연구 1은 200명이 250단어에서 350단어 분량의 짧은 이야기를, 연구 2는 400명이 100단어에서 125단어 분량의 제품 소개글을 썼습니다. 쓰는 도구는 OpenAI의 GPT5-Mini였습니다. 완성된 초안을 한 번 이상 요청한 참가자는 연구 1에서 91%, 연구 2에서 83%였습니다."
    },
    {
      "type": "p",
      "text": "저자들에 따르면 세션이 진행되는 동안 참가자들의 글은 처음 AI 초안에서 점차 멀어졌고 초안이 눌렀던 다양성을 전부는 아니지만 많이 되찾았습니다. 보상 방식도 달랐습니다. 한 조건은 또래보다 독창적일수록 보너스를 받았고(독창성 상위 2%에서 25% 구간에 단계별 보너스), 다른 조건은 기술적 완성도 기준을 넘기면 보너스를 받았습니다. 독창성에 보상한 조건의 글이 더 다양했습니다. 이 참가자들은 AI를 계속 썼지만 AI가 쓴 문장을 그대로 가져온 양은 적었습니다. 효과는 연구 2에서 뚜렷했고 규모가 작은 연구 1에서는 방향만 같을 뿐 통계적으로 유의하지 않았습니다. 독창성에 보상한 AI 조건도 AI 없이 쓴 사람만큼 다양하지는 않았습니다. 보너스는 실험 장치이며 실제 회사의 급여나 평가 제도와 같지 않습니다."
    },
    {
      "type": "h",
      "text": "일하는 자리에서는 어떻게 보일까요?"
    },
    {
      "type": "p",
      "text": "직원이 여섯 명인 가상의 교육 업체를 떠올려 보겠습니다. 담당자가 신규 기업 고객에게 보낼 교육 소개문을 AI에게 먼저 쓰게 합니다. 초안은 매끄럽고 틀린 곳이 없습니다. 담당자는 어색한 문장 몇 개를 고쳐서 보냅니다. 같은 분야의 다른 업체가 같은 도구로 소개문을 만들었다면, 두 글은 업체 이름만 바꿔도 통할 만큼 닮았을 수 있습니다. 이 업체가 실제로 가르쳐 온 사례, 수강생이 자주 막히는 지점, 받을 수 있는 인원과 일정은 처음부터 초안에 없었으니 고치는 동안에도 떠오르지 않습니다. 이 장면은 앞의 연구들이 가리키는 방향을 옮겨 본 가정이며 얼마나 닮을지에 대한 숫자는 없습니다."
    },
    {
      "type": "figure",
      "src": "/images/ideas/draft-comes-first/pencil-margin.webp",
      "alt": "인쇄된 종이 위에서 한 손이 연필로 몇 줄을 가로로 긋고 있고, 여백에는 읽을 수 없는 짧은 연필 자국이 비스듬히 남아 있다. 모서리에 찻잔 가장자리가 보이고 부드러운 자연광이 종이와 손에 닿는다.",
      "caption": "생성 이미지. 설명을 위한 책상 장면이며 실제 기록이 아닙니다.",
      "width": 1440,
      "height": 960
    },
    {
      "type": "h",
      "text": "어떻게 쓰는 편이 나을까요?"
    },
    {
      "type": "p",
      "text": "아래는 이 글의 제안이며 연구로 검증된 절차는 아닙니다. 목표는 초안이 내 생각보다 먼저 자리 잡지 않게 작업 순서를 바꾸는 것입니다."
    },
    {
      "type": "p",
      "text": "첫째, AI를 열기 전에 내 요점을 먼저 적습니다. 이 문서가 말해야 할 것과 독자가 알아야 할 것을 두 문장으로 적으면 충분합니다. 초안이 도착하면 그 초안이 이후 모든 판단의 기준점이 되기 때문입니다. Jakesch와 Williams-Ceci의 실험은 쓰는 도중 받은 제안이 의견을 움직였음을 보여 줍니다. 이 순서는 기준점을 내 쪽에 두려는 시도입니다. 얼마나 효과가 있는지는 확인하지 못했습니다."
    },
    {
      "type": "p",
      "text": "둘째, 초안을 하나만 받지 않습니다. 입장이나 구성이 다른 초안을 두세 개 따로 요청해 보고 어느 것도 맞지 않으면 처음에 적은 두 문장으로 돌아갑니다. Doshi와 Hauser의 실험에서 다섯 개 조건도 도움 없이 쓴 조건보다 이야기끼리 더 닮았습니다(범위의 8.9%, 한 개 조건은 10.7%). 선택지를 늘리는 것만으로 문제가 사라지지는 않습니다. 다만 여러 버전을 나란히 놓으면 처음 받은 초안이 여러 선택 가운데 하나로 보이게 됩니다."
    },
    {
      "type": "p",
      "text": "셋째, 검토 때 질문 하나를 더합니다. 이 문단이 다른 회사의 같은 문서에 들어가도 말이 되는가. 그렇다면 우리만 가진 사례, 수치, 조건, 직접 해 본 일 가운데 하나로 채웁니다. 독창성에 보상한 조건의 글이 더 다양했다는 Jo와 Raghavan의 결과를 업무로 옮겨 본 것입니다. 검토 기준이 맞는지 틀린지에서 끝나지 않고 우리만 쓸 수 있는 내용이 있는지까지 묻게 됩니다. 이 절차 자체를 시험한 연구는 없습니다."
    },
    {
      "type": "p",
      "text": "넷째, 최종본에서 AI의 문장이 그대로 남은 부분을 표시해 둡니다. 정해진 비율은 알지 못합니다. 표시가 있으면 검토하는 사람이 그 부분의 사실과 입장을 더 조심해서 읽을 수 있고 같은 표현이 여러 문서에 반복되는지도 볼 수 있습니다. 기록을 남기는 방법은 앞서 쓴 글에서 다뤘습니다.",
      "links": [
        {
          "label": "AI로 만든 상품에 저작권이 있을까",
          "href": "/blog/ai-made-product-copyright"
        }
      ]
    },
    {
      "type": "p",
      "text": "다섯째, 경고에 기대지 않고 작업 과정에 넣습니다. 편향을 알려 줘도 영향이 줄지 않았다면 '조심하세요'라는 안내는 약한 안전장치입니다. 위의 네 가지는 모두 작업 순서나 검토 항목으로 쓴 것입니다."
    },
    {
      "type": "p",
      "text": "AI가 낸 결과를 받아들일지 정하는 시험은 Work 글에 정리해 두었습니다.",
      "links": [
        {
          "label": "AI 스킬 합격 기준",
          "href": "/works/ai-skill-acceptance-tests"
        }
      ]
    },
    {
      "type": "h",
      "text": "이번 주에 해 볼 것"
    },
    {
      "type": "p",
      "text": "이번 주에 AI와 함께 만든 문서가 있다면 하나를 골라 보십시오. AI를 열기 전에 내 요점을 적어 두었는지 확인하고 최종본의 요점과 견주어 봅니다. 달라졌다면 새로 알게 된 사실 때문인지, 초안의 방향을 따라간 것인지 구분해 봅니다. 적어 둔 것이 없다면 다음 문서부터 두 문장을 먼저 적는 것으로 충분합니다."
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
      "label": "Doshi & Hauser · Generative AI enhances individual creativity but reduces the collective diversity of novel content · Science Advances, 2024-07-12",
      "href": "https://doi.org/10.1126/sciadv.adn5290"
    },
    {
      "label": "Padmakumar & He · Does Writing with Language Models Reduce Content Diversity? · ICLR 2024",
      "href": "https://arxiv.org/abs/2309.05196"
    },
    {
      "label": "Jakesch et al. · Co-Writing with Opinionated Language Models Affects Users' Views · CHI 2023",
      "href": "https://doi.org/10.1145/3544548.3581196"
    },
    {
      "label": "Williams-Ceci et al. · Biased AI writing assistants shift users' attitudes on societal issues · Science Advances 12(11), eadw5578, 2026",
      "href": "https://doi.org/10.1126/sciadv.adw5578"
    },
    {
      "label": "Jo & Raghavan · Incentives Shape How Humans Co-Create with Generative AI · arXiv:2604.03529 (v2, 2026-10-28)",
      "href": "https://arxiv.org/abs/2604.03529"
    }
  ],
  "next": {
    "label": "다음: 생성형 AI 교육",
    "href": "/education/gen-ai"
  }
};

export const draftFirstEssayEn: IdeasEssay = {
  "id": "draft-comes-first",
  "date": "2026. 10. 31",
  "category": "Essay",
  "title": "When the Draft Arrives First",
  "subtitle": "Where your own view sits when you edit what AI wrote first",
  "summary": "If you edit a draft that AI wrote first, do you end up with the piece you would have written yourself? Following five writing experiments, this essay looks at how a first draft tilts wording and opinion, how much of your own voice returns while you revise, and how to change the order of work.",
  "blocks": [
    {
      "type": "p",
      "text": "If you take a draft that AI wrote first and edit it, do you end up with the same piece you would have written yourself? Experiments suggest not necessarily. Writers who received AI ideas produced stories that raters scored higher on average, but those stories resembled one another more. In other experiments, the opinions in people's writing and in their later survey answers moved toward the assistant's position. Most of this evidence comes from short writing tasks, and a recent preprint finds that the outcome depends on how people are rewarded for revising."
    },
    {
      "type": "p",
      "text": "This essay relies on sources checked on October 31, 2026. I read the abstract and parts of the full text for Doshi and Hauser (2024) and Padmakumar and He (2024), and only the abstracts for Jakesch et al. (2023) and Williams-Ceci et al. (2026). The Jo and Raghavan paper is an arXiv preprint, and I could not confirm that it has been peer reviewed. The office scene is a hypothetical for illustration, not a DMS client case. The suggestions near the end are my own ideas, not procedures set by these studies."
    },
    {
      "type": "figure",
      "src": "/images/ideas/draft-comes-first/two-starts.webp",
      "alt": "On a wooden desk by a window, an open notebook with nothing written in it has a pencil resting across the page. To the right lies a printed page of text, and a cup, a plant and a few books sit at the back. Warm natural light falls on the desk.",
      "caption": "Generated image. An illustrative desk scene, not a real record.",
      "width": 1440,
      "height": 960
    },
    {
      "type": "h",
      "text": "How does a first draft change the writing?"
    },
    {
      "type": "p",
      "text": "Writers who got AI ideas scored higher on average, but their stories were more alike. Anil Doshi and Oliver Hauser published an online experiment in Science Advances in 2024. A total of 293 writers each wrote an eight-sentence story for a teenage and young adult audience. They were split into three conditions: no help, the option to get one story idea from a generative AI model, or the option to get up to five. Separately, 600 evaluators read the stories without being told which condition each came from."
    },
    {
      "type": "p",
      "text": "Stories written with AI ideas were rated as more creative, better written and more enjoyable. With up to five ideas, novelty was 8.1% higher and usefulness 9.0% higher than in the no-help group. Usefulness here is an index built from items such as fit with the target audience and whether the story could be developed into a book. The gains were larger for writers who scored low on a creativity test: in the five-idea condition, novelty rose 10.7% and usefulness 11.5%. Among the writers who could get AI ideas, 88.4% asked for at least one."
    },
    {
      "type": "p",
      "text": "There was a cost. Stories written with AI ideas were more similar to one another than stories written alone. The increase in similarity amounted to 10.7% of the range of similarity scores among no-help stories in the one-idea condition and 8.9% in the five-idea condition. The authors compare this to a social dilemma. Each writer is better off, but if everyone uses the same tool, the range of new content narrows. The study covered one kind of short story and relied on online raters."
    },
    {
      "type": "p",
      "text": "Vishakh Padmakumar and He He looked at argumentative essays in a 2024 ICLR paper. Writers recruited on Upwork, all native English speakers with writing or copyediting experience, answered prompts taken from the New York Times student opinion series. They worked in one of three conditions: alone, with a base language model (GPT-3), or with a model tuned on human feedback (InstructGPT). Only the InstructGPT condition made different authors' essays more alike and reduced lexical and content diversity. The authors trace this mainly to the text the model contributed, which was less diverse. The text the writers contributed themselves was not affected. These were the models available to the study, so the paper alone cannot tell us whether the same holds for the models people use today."
    },
    {
      "type": "h",
      "text": "Does it carry over to opinions?"
    },
    {
      "type": "p",
      "text": "In two experiments it did: people's writing and survey answers moved toward the assistant's position. At CHI 2023, Maurice Jakesch and colleagues asked 1,506 participants to write a post on whether social media is good for society. The treatment group used a writing assistant built on a language model configured to argue that it is good, or that it is bad. The opinions in participants' writing leaned toward the assistant's side, and so did their answers on a later attitude survey. Independent judges (500 of them) rated the opinions expressed in the writing."
    },
    {
      "type": "p",
      "text": "A 2026 follow-up in Science Advances, from several of the same researchers, ran two preregistered experiments with 2,582 participants. People wrote about societal issues while a biased assistant offered autocomplete suggestions, and the attitudes they reported afterward converged toward the AI's position. Most participants were unaware that the suggestions were biased or that they had been influenced. The influence was stronger than when similar content was shown as static text. The authors note that they measured short-term effects and that it is unclear how long those effects last."
    },
    {
      "type": "h",
      "text": "Does knowing about the bias protect you?"
    },
    {
      "type": "p",
      "text": "According to the same paper, warning participants about the assistant's bias, before or after they wrote, did not reduce the shift. Carried over to the workplace, this suggests that a reminder to read AI drafts carefully may not be enough by itself. That reading is mine. The experiments dealt with opinions on social issues, and these papers do not test whether the wording or positions in business documents shift in the same way."
    },
    {
      "type": "h",
      "text": "Can your own voice come back while you revise?"
    },
    {
      "type": "p",
      "text": "Partly: in one preprint, writers drifted away from the AI's draft as they edited, but did not fully recover their diversity. A preprint by Nathanael Jo and Manish Raghavan (arXiv, first posted in April 2026 and revised on October 28) paints a more mixed picture. In two preregistered randomized trials, participants wrote while chatting freely with an AI assistant, OpenAI's GPT5-Mini. Study 1 had 200 participants writing a short story of 250 to 350 words, and Study 2 had 400 writing a product pitch of 100 to 125 words. Of the participants, 91% in Study 1 and 83% in Study 2 asked for at least one complete draft."
    },
    {
      "type": "p",
      "text": "Over the session, the authors report, participants' writing moved away from the initial AI drafts and recovered much, though not all, of the diversity those drafts had suppressed. The incentives differed too. In one condition, tiered bonuses went to the most original submissions relative to peers, covering roughly the top 2% to 25%. In the other, bonuses depended on meeting a technical quality rubric. Writing rewarded for originality was more diverse. Those participants kept using the AI but copied less of its text verbatim. The effect was clear in Study 2 and pointed the same way, without statistical significance, in the smaller Study 1. Even with the originality bonus, AI-assisted writing was not as diverse as writing done alone. The bonuses are an experimental device and do not stand for a pay or review system at a real company."
    },
    {
      "type": "h",
      "text": "What does this look like at work?"
    },
    {
      "type": "p",
      "text": "Picture a made-up training company with six employees. A staff member has AI write the first version of an introduction to send to a new corporate client. The draft is smooth and contains no errors. The staff member fixes a few awkward sentences and sends it. If another company in the same field had used the same tool, the two introductions could be close enough to swap by changing the company name. The cases this company has actually taught, the points where its trainees tend to get stuck, and the group sizes and schedules it can handle were never in the draft, so the editing never brings them up. This scene is a hypothetical drawn from the direction of the studies above. I have no figure for how alike such documents would be."
    },
    {
      "type": "figure",
      "src": "/images/ideas/draft-comes-first/pencil-margin.webp",
      "alt": "On a printed page, a hand draws a pencil line through several lines of text, and a few short pencil marks that are not legible slant across the margin. The edge of a cup shows in the corner, and soft natural light falls on the paper and the hand.",
      "caption": "Generated image. An illustrative desk scene, not a real record.",
      "width": 1440,
      "height": 960
    },
    {
      "type": "h",
      "text": "How could you work with AI instead?"
    },
    {
      "type": "p",
      "text": "These are suggestions of mine, not procedures any study has validated. The aim is to change the order of work so that a draft does not settle in before your own thinking does."
    },
    {
      "type": "p",
      "text": "First, write your own point down before opening the AI. Two sentences are enough: what the document must say and what the reader needs to know. Once a draft arrives, it becomes the reference point for every later judgment. The Jakesch and Williams-Ceci experiments show suggestions received during writing moving opinions, and this order is an attempt to keep the reference point on your side. I could not find evidence on how much it helps."
    },
    {
      "type": "p",
      "text": "Second, do not settle for a single draft. Ask separately for two or three versions with different positions or structures, and if none fits, return to your two sentences. In the Doshi and Hauser study, the five-idea condition still produced stories more alike than the no-help condition (8.9% of the range, against 10.7% with one idea), so more options do not remove the problem by themselves. Comparing versions at least makes the first one visible as one choice among several."
    },
    {
      "type": "p",
      "text": "Third, add one question to review: would this paragraph still make sense in another company's version of the same document? If it would, fill it with something only you have, such as a case, a number, a condition, or something you have actually done. This borrows from the originality-bonus result in Jo and Raghavan. The review then asks for more than correctness: does the paragraph say something only we could say? No study has tested this procedure itself."
    },
    {
      "type": "p",
      "text": "Fourth, mark the passages in the final version that remain in the AI's wording. I know of no standard ratio. Marking lets the reviewer read those passages with extra care for facts and positions, and it shows whether the same phrasing keeps appearing across documents. I covered the record-keeping side in an earlier article.",
      "links": [
        {
          "label": "Does an AI-Made Product Have Copyright?",
          "href": "/en/blog/ai-made-product-copyright"
        }
      ]
    },
    {
      "type": "p",
      "text": "Fifth, build it into the process rather than relying on warnings. If telling people about a bias did not reduce its effect, a note saying \"be careful\" is a weak safeguard. The four steps above are all written as order of work or review items for that reason."
    },
    {
      "type": "p",
      "text": "Our Work article on deciding whether to accept an AI's output covers the testing side.",
      "links": [
        {
          "label": "Acceptance Tests for an AI Skill",
          "href": "/en/works/ai-skill-acceptance-tests"
        }
      ]
    },
    {
      "type": "h",
      "text": "What could you try this week?"
    },
    {
      "type": "p",
      "text": "Pick one document you made with AI this week. Check whether you wrote down your own main point before opening the AI, and compare it with the main point of the final version. If they differ, ask whether the difference came from something new you learned or from following the draft's direction. If you wrote nothing down, starting the next document with two sentences is enough."
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
      "label": "Doshi & Hauser · Generative AI enhances individual creativity but reduces the collective diversity of novel content · Science Advances, 2024-07-12",
      "href": "https://doi.org/10.1126/sciadv.adn5290"
    },
    {
      "label": "Padmakumar & He · Does Writing with Language Models Reduce Content Diversity? · ICLR 2024",
      "href": "https://arxiv.org/abs/2309.05196"
    },
    {
      "label": "Jakesch et al. · Co-Writing with Opinionated Language Models Affects Users' Views · CHI 2023",
      "href": "https://doi.org/10.1145/3544548.3581196"
    },
    {
      "label": "Williams-Ceci et al. · Biased AI writing assistants shift users' attitudes on societal issues · Science Advances 12(11), eadw5578, 2026",
      "href": "https://doi.org/10.1126/sciadv.adw5578"
    },
    {
      "label": "Jo & Raghavan · Incentives Shape How Humans Co-Create with Generative AI · arXiv:2604.03529 (v2, 2026-10-28)",
      "href": "https://arxiv.org/abs/2604.03529"
    }
  ],
  "next": {
    "label": "Next: DMS Generative AI Education (in Korean)",
    "href": "/education/gen-ai"
  }
};
