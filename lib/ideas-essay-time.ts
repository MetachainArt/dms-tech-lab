/**
 * Ideas essay: "아낀 시간은 어디로 갔을까" / "Where the Saved Time Goes"
 * 한영 독립 편집본. figure 블록의 src는 /public 아래 내부 경로.
 */
import type { IdeasEssay } from "./ideas-essay-watching";

export const timeSavedEssayKo: IdeasEssay = {
  "id": "where-saved-time-goes",
  "date": "2026. 11. 7",
  "category": "Essay",
  "title": "아낀 시간은 어디로 갔을까",
  "subtitle": "도구가 줄여 준 시간과 일터에 남은 하루 사이",
  "summary": "AI가 일을 빠르게 해 주면 그 시간은 쉬는 시간이 될까요? 한 기술 회사를 8개월 관찰한 연구와 66개 대기업의 노동자 7,137명을 무작위로 나눈 실험을 따라, 아낀 시간이 어디로 갈 수 있는지 살펴보고 일터에서 따로 적어 둘 세 가지를 제안합니다.",
  "blocks": [
    {
      "type": "p",
      "text": "아낀 시간이 저절로 쉬는 시간이 되는지는 연구마다 다르게 나옵니다. 미국 기술 회사 한 곳을 8개월 동안 관찰한 연구에서는 직원들이 더 빠르게, 더 넓은 범위의 일을, 하루 중 더 많은 시간 동안 했습니다. 대기업 66곳의 노동자 7,137명을 무작위로 나눈 실험에서는 도구를 쓴 사람의 이메일 시간이 주당 약 2시간 줄었고 일과 시간 밖의 앱 사용도 조금 줄었지만, 일의 종류와 양에는 뚜렷한 변화가 없었습니다. 두 연구는 방법과 도구가 달라서 서로를 반박한다고 보기 어렵습니다. 그래서 일터에서는 아낀 시간이 어디로 갔는지 따로 적어 두는 편이 좋다고 저는 읽었습니다."
    },
    {
      "type": "p",
      "text": "2026년 11월 7일 확인한 자료 기준입니다. Ranganathan과 Ye의 글은 Harvard Business Review 2026년 2월 9일 자 전문을 읽었습니다. 저자들이 진행 중인 연구라고 밝힌 글이며 학술지 논문이 아닙니다. Dillon 등(2025)의 NBER 워킹페이퍼는 2025년 11월 개정본 전문을 읽었고, 표지에 동료 심사를 거치지 않았다고 적혀 있습니다. 가상의 교육 업체 장면은 설명을 위한 가정이며 DMS 고객 사례가 아닙니다. 글 끝의 제안은 저의 생각이며 두 연구가 정한 절차가 아닙니다."
    },
    {
      "type": "figure",
      "src": "/images/ideas/where-saved-time-goes/blank-afternoon-planner.webp",
      "alt": "창가 나무 책상 위에 펼친 주간 수첩이 놓여 있고 칸이 모두 비어 있다. 연필 한 자루가 수첩 위에 걸쳐 있고, 한쪽에 덮은 노트북, 머그컵, 초록 화분이 보인다. 부드러운 아침 햇빛이 책상에 닿는다.",
      "caption": "생성 이미지. 설명을 위한 책상 장면이며 실제 기록이 아닙니다.",
      "width": 1440,
      "height": 960
    },
    {
      "type": "h",
      "text": "일이 빨라지면 일하는 시간은 줄어들까요?"
    },
    {
      "type": "p",
      "text": "한 기술 회사를 8개월 관찰한 연구에서는 줄지 않았습니다. Aruna Ranganathan과 Xingqi Maggie Ye는 직원이 약 200명인 미국 기술 회사에서 2025년 4월부터 12월까지 주 이틀씩 업무를 직접 관찰하고, 사내 소통 채널을 따라가고, 엔지니어링·제품·디자인·연구·운영 직원을 상대로 40건이 넘는 심층 면담을 했습니다. 회사는 AI 사용을 강제하지 않았고 시중에서 파는 AI 도구의 기업용 구독만 제공했습니다. 연구진은 직원들이 더 빠르게 일하고, 더 넓은 범위의 일을 맡고, 요청받지 않았는데도 일을 하루 중 더 많은 시간으로 넓혔다고 정리합니다."
    },
    {
      "type": "p",
      "text": "변화는 세 가지 모양으로 나타났습니다. 첫째는 맡는 일의 확장입니다. AI가 모자란 지식을 메워 주자 제품 매니저와 디자이너가 코드를 쓰기 시작했고, 연구자가 엔지니어링 일을 맡았고, 예전에는 남에게 맡기거나 미뤘을 일을 직접 해 보는 사람이 늘었습니다. 그 여파로 엔지니어는 동료가 AI로 만든 코드를 검토하고, 덜 끝난 풀 리퀘스트(코드 반영 요청)를 마무리하는 데 더 많은 시간을 썼습니다."
    },
    {
      "type": "p",
      "text": "둘째는 일과 쉬는 시간의 경계가 흐려진 것입니다. AI 덕분에 일을 시작하기가 쉬워지자 직원들은 점심시간, 회의 중, 파일이 열리기를 기다리는 사이에 프롬프트를 보냈습니다. 자리를 뜨기 전에 AI가 일하도록 '마지막 프롬프트'를 하나 보내는 사람도 있었습니다. 이런 행동은 일을 더 한다는 느낌 없이 쌓였고, 하루에서 자연스러운 멈춤이 줄었다고 연구진은 적었습니다. 일부 직원은 쉬는 시간에 프롬프트를 보내는 일이 습관이 된 뒤에야 쉬어도 예전 같은 회복감이 없다는 것을 알았다고 말했습니다."
    },
    {
      "type": "p",
      "text": "셋째는 여러 일을 동시에 돌리는 방식입니다. 직접 코드를 쓰는 동안 AI가 다른 버전을 만들게 하고, 에이전트 여러 개를 병렬로 돌리고, 오래 미뤄 둔 일을 AI가 '처리해 줄 수 있으니' 다시 꺼냈습니다. 곁에 동료 같은 도구가 있다는 느낌이 추진력을 주었지만, 실제로는 주의를 계속 옮기고 AI 결과를 자주 확인하고 열려 있는 일이 늘어나는 상태였다고 연구진은 설명합니다."
    },
    {
      "type": "p",
      "text": "한 엔지니어의 말이 글에 그대로 실려 있습니다. “You had thought that maybe, oh, because you could be more productive with AI, then you save some time, you can work less. But then really, you don’t work less. You just work the same amount or even more.” 옮기면, AI로 더 생산적일 수 있으니 시간이 남아 덜 일하게 될 줄 알았지만 실제로는 덜 일하지 않고 같은 양이나 더 많이 일한다는 뜻입니다. 연구진은 이 변화가 스스로 강화되는 고리를 만든다고 봅니다. AI가 일부 작업을 빠르게 하면 속도에 대한 기대가 오르고, 빨라진 속도 때문에 AI에 더 기대게 되고, AI에 기대는 정도가 커지면 시도하는 범위가 넓어집니다. 여러 참가자가 더 생산적이라고 느끼면서도 덜 바쁘다고는 느끼지 않았고, 일부는 전보다 더 바빠졌다고 말했습니다."
    },
    {
      "type": "h",
      "text": "이 관찰은 어디까지 옮겨 말할 수 있을까요?"
    },
    {
      "type": "p",
      "text": "한 회사를 한 시기에 살핀 질적 연구여서 다른 직장에 그대로 옮기기는 어렵습니다. 근무 시간이 몇 시간 늘었는지는 글에 숫자로 나와 있지 않습니다. 저자들도 이 글을 진행 중인 연구라고 밝혔고, 경영 매체에 실린 글이어서 학술지 논문과는 다릅니다. 대상 회사는 직원들이 생성형 AI를 폭넓게 쓸 수 있는 곳이었으므로, AI를 거의 쓰지 않는 직장이나 다른 업종에서도 같은 모양이 나온다고 이 글만으로 말할 수는 없습니다."
    },
    {
      "type": "p",
      "text": "저자들은 대응책으로 의도적 멈춤, 일의 순서 정하기, 사람과 대화할 시간 지키기를 묶어 'AI 실천(AI practice)'이라고 부릅니다. 이것은 저자들의 권고이고 이 연구에서 시험한 결과가 아닙니다."
    },
    {
      "type": "figure",
      "src": "/images/ideas/where-saved-time-goes/lunch-table-phone.webp",
      "alt": "점심 무렵 사무실 휴게 공간의 작은 둥근 나무 탁자 위에 한입 베어 문 샌드위치가 종이 위에 놓여 있고, 책에 기대 세운 스마트폰과 물 한 잔이 보인다. 뒤쪽 창가에 얇은 커튼과 초록 화분이 흐릿하게 보인다.",
      "caption": "생성 이미지. 설명을 위한 휴게 공간 장면이며 실제 기록이 아닙니다.",
      "width": 1440,
      "height": 960
    },
    {
      "type": "h",
      "text": "시간을 숫자로 재면 어떻게 나올까요?"
    },
    {
      "type": "p",
      "text": "이메일에 쓰는 시간은 줄었지만 일의 양과 종류는 거의 그대로였습니다. Microsoft Research의 Eleanor Dillon, Sonia Jaffe, Nicole Immorlica와 Harvard Business School의 Christopher Stanton은 2023년 9월부터 2024년 10월까지 66개 대기업에서 현장 실험을 했습니다. 참여한 노동자 7,137명 가운데 3,684명이 Microsoft 365 Copilot을 쓸 수 있도록 무작위로 뽑혔고, 나머지는 기존 방식으로 일했습니다. 도구는 이메일, 회의, 문서 작성에 쓰는 프로그램 안에 들어 있었고, 쓸지 말지는 각자 정했습니다. 연구진이 본 것은 Microsoft 제품이 남기는 사용 기록입니다. 일의 내용이나 성과는 볼 수 없었습니다."
    },
    {
      "type": "p",
      "text": "분석은 사용이 안정된 12주 뒤부터를 중심으로 합니다. 처음 몇 주에는 도구를 쓰는 사람이 도구를 받은 집단의 55%까지 올랐다가 줄어, 12주 뒤 주간 사용률은 40%에 조금 못 미치는 수준에서 안정됐습니다. 도구를 받은 사람 전체를 평균하면 Outlook으로 이메일을 보는 시간이 주당 1.4시간(12%) 줄었습니다. 실제로 도구를 쓴 사람 기준으로 추정하면 주당 약 2시간(17%)입니다. 이메일을 보는 시간대도 한곳으로 모여서, Outlook을 열지 않고 이어서 일할 수 있는 시간이 주당 1.5시간가량 늘었습니다. 화상 회의 시간과 문서 작성 시간은 평균이 뚜렷하게 바뀌지 않았습니다."
    },
    {
      "type": "p",
      "text": "일의 양과 종류도 달라지지 않았습니다. 답장한 이메일 스레드 수, 참석한 Teams 회의 수, 완성한 Word 문서 수가 두 집단에서 같았습니다. 정규 근무 시간 밖에 디지털 앱을 쓴 시간은 주당 약 0.25시간(9%) 줄었고, 연구진은 이를 이메일에서 아낀 시간의 일부가 노동자에게 돌아간 신호로 해석합니다."
    },
    {
      "type": "p",
      "text": "이 논문에도 한계가 있습니다. 확인한 것은 Office 프로그램 안의 활동뿐이고 생산성이나 성과 지표는 없습니다. 참여 회사는 새 기술을 일찍 써 보려는 대기업이었고, 연구진도 참여 노동자가 지식 노동자 전체를 대표하지 않을 수 있다고 적었습니다. 저자 네 명 가운데 세 명이 Microsoft Research 소속이고 실험 대상 도구도 Microsoft 제품입니다. 도구를 개인에게 나눠 준 설계여서 팀이나 회사 차원의 변화는 추가 연구가 필요하다고 결론에 적었습니다."
    },
    {
      "type": "h",
      "text": "두 연구를 나란히 놓으면 무엇이 보일까요?"
    },
    {
      "type": "p",
      "text": "두 연구는 서로 다른 곳을 보았기 때문에 결과가 달라 보입니다. 앞의 연구는 한 회사에서 사람들이 무엇을 했고 어떻게 느꼈는지를 오래 지켜본 기록입니다. 뒤의 연구는 도구를 받은 사람과 받지 못한 사람의 사용 기록을 비교한 숫자입니다. 도구도 달랐습니다. 앞의 회사에서는 직원들이 시중의 AI 도구를 폭넓게 써서 코드 작성과 에이전트 실행까지 나왔고, 뒤의 실험은 이메일, 회의, 문서 프로그램에 들어 있는 도구 하나였습니다. 측정도 그 프로그램 안의 활동에 한정됐습니다. 그래서 '아낀 시간이 더 많은 일에 쓰였다'와 '이메일 시간이 줄었다'는 같은 일터의 서로 다른 면일 수 있습니다. 이 두 자료로 어느 쪽이 더 흔한지 가를 수는 없습니다."
    },
    {
      "type": "p",
      "text": "두 연구 모두에서 줄어든 시간은 어딘가로 갔고, 그 행선지를 도구가 정해 주지는 않았다고 저는 읽었습니다. 한쪽에서는 새로 맡은 일과 쉬는 시간에 끼어든 프롬프트로 나타났습니다. 다른 쪽에서는 일부가 정규 근무 시간 밖의 사용 감소로 보였고, 나머지가 어디로 갔는지는 기록에 없습니다."
    },
    {
      "type": "h",
      "text": "아낀 시간을 어떻게 다룰 수 있을까요?"
    },
    {
      "type": "p",
      "text": "쓸 곳을 먼저 정해 두고, 간 곳을 나중에 적어 보는 방법이 있습니다. 여기서부터는 두 연구가 정한 절차가 아니라 DMS.Labs의 제안과 가정이며 효과는 시험하지 않았습니다. 직원 여섯 명의 작은 교육 업체가 월요일부터 고객 문의 답장 초안을 AI로 쓰기 시작했다고 가정해 보겠습니다. 한 달 뒤 '답장이 빨라졌다'는 말은 나오지만, 줄어든 시간이 교안을 고치는 데 갔는지, 점심시간의 추가 초안 작성으로 갔는지, AI 초안을 고치는 데 다시 들어갔는지는 기록이 없으면 알 수 없습니다."
    },
    {
      "type": "p",
      "text": "그래서 세 줄만 적어 두기를 제안합니다. 첫째, 도입 전 두 주 동안 대상 업무에 걸린 시간과, 일과 시간 밖에 그 업무를 한 횟수를 적어 둡니다. 둘째, AI를 쓰기 시작하는 날 '줄어든 시간은 ○○에 쓰고, 나머지는 비워 둔다'를 한 줄로 정합니다. 셋째, 한 달 뒤 새로 맡은 일, AI 결과를 검수하고 고치는 시간, 점심과 퇴근 뒤 사용을 같은 표에 적어 처음과 견줍니다. 이 방법이 일을 줄여 준다는 근거는 아직 없습니다. 시간이 어디로 갔는지 확인할 수 있게 하는 것이 목적입니다."
    },
    {
      "type": "p",
      "text": "측정 방법은 DMS의 AI 도입 성과 측정 가이드와 함께 읽을 수 있습니다. 이 가이드는 업무별 기준선과 검수 비용을 먼저 정리합니다. 이 글은 아낀 시간의 행선지를 따로 적자고 제안할 뿐이고, DMS 교육이나 이 방법으로 시간이 줄었다는 결과를 보고하지 않습니다.",
      "links": [
        {
          "label": "AI 도입 성과 측정: 매출·비용·검수시간을 함께 보는 법",
          "href": "/works/ai-performance-measurement"
        }
      ]
    },
    {
      "type": "p",
      "text": "이번 주에는 AI로 자주 하는 일 하나를 골라, 그 일에서 줄어든 시간이 지난 한 주 동안 어디로 갔는지 한 줄로 적어 봅니다. 쓸 말이 없다면 지금까지 기록이 없었다는 사실이 확인된 것입니다."
    },
    {
      "type": "p",
      "text": "AI 도입 뒤 업무 흐름을 점검하고 싶다면 문의 페이지로 연락할 수 있습니다.",
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
      "label": "Ranganathan & Ye · AI Doesn’t Reduce Work—It Intensifies It · Harvard Business Review, 2026-02-09",
      "href": "https://hbr.org/2026/02/ai-doesnt-reduce-work-it-intensifies-it"
    },
    {
      "label": "Haas News · AI promised to free up workers’ time. UC Berkeley Haas researchers found the opposite. · 2026-02-18",
      "href": "https://newsroom.haas.berkeley.edu/ai-promised-to-free-up-workers-time-uc-berkeley-haas-researchers-found-the-opposite/"
    },
    {
      "label": "Dillon, Jaffe, Immorlica & Stanton · Shifting Work Patterns with Generative AI · NBER Working Paper 33795, 2025-05 (revised 2025-11)",
      "href": "https://doi.org/10.3386/w33795"
    }
  ],
  "next": {
    "label": "다음: 업무 자동화",
    "href": "/automation"
  }
};

export const timeSavedEssayEn: IdeasEssay = {
  "id": "where-saved-time-goes",
  "date": "2026. 11. 7",
  "category": "Essay",
  "title": "Where the Saved Time Goes",
  "subtitle": "Between the hours a tool gives back and the day that remains",
  "summary": "If AI makes work faster, does the time it saves become rest? Following an eight-month observation of one technology company and a randomized experiment with 7,137 workers at 66 large firms, this essay looks at where saved time can go and suggests three things a workplace can write down.",
  "blocks": [
    {
      "type": "p",
      "text": "Whether saved time turns into rest on its own depends on which study you read. In an eight-month observation of one U.S. technology company, employees worked faster, took on a wider range of tasks and stretched work into more hours of the day. In a randomized experiment with 7,137 workers at 66 large firms, people who used the AI tool spent about two fewer hours a week on email and a little less time in work apps outside regular hours, yet the number and kind of tasks they completed did not visibly change. The methods and tools differ, so the two do not refute each other. My reading is that a workplace should write down where the saved time went."
    },
    {
      "type": "p",
      "text": "Based on sources checked on November 7, 2026. I read the full text of Ranganathan and Ye's Harvard Business Review article of February 9, 2026, which the authors describe as in-progress research and which is not a journal paper. I read the full November 2025 revision of the NBER working paper by Dillon and colleagues (2025); its cover states that it has not been peer-reviewed. The training company scene near the end is a hypothetical for illustration, not a DMS client case. The suggestions at the end are my own and are not procedures defined by these studies."
    },
    {
      "type": "figure",
      "src": "/images/ideas/where-saved-time-goes/blank-afternoon-planner.webp",
      "alt": "An open weekly planner on a wooden desk by a window, every box empty, with a single pencil resting across the page. A closed laptop sits at one edge, with a mug and a green plant behind. Soft morning light falls across the desk.",
      "caption": "Generated image. A desk scene made for illustration, not a record of a real event.",
      "width": 1440,
      "height": 960
    },
    {
      "type": "h",
      "text": "Does faster work mean fewer working hours?"
    },
    {
      "type": "p",
      "text": "In an eight-month study of one technology company, it did not. Aruna Ranganathan and Xingqi Maggie Ye followed a U.S. company of about 200 employees from April to December 2025. They observed work in person two days a week, tracked internal communication channels and held more than 40 in-depth interviews across engineering, product, design, research and operations. The company did not mandate AI use and only offered enterprise subscriptions to commercially available tools. The researchers report that employees worked at a faster pace, took on a broader scope of tasks and extended work into more hours of the day, often without being asked."
    },
    {
      "type": "p",
      "text": "The change took three forms. The first was task expansion. Once AI could fill gaps in knowledge, product managers and designers began writing code, researchers took on engineering tasks, and people tried work they would once have handed off or put off. Engineers, in turn, spent more time reviewing AI-assisted code from colleagues and finishing partly complete pull requests, which are requests to merge code changes."
    },
    {
      "type": "p",
      "text": "The second was a blurring of work and breaks. Because AI made starting a task easy, employees sent prompts at lunch, during meetings and while waiting for a file to load. Some sent a “quick last prompt” before leaving their desks so the AI could keep working. These moments rarely felt like extra work, but over time the day had fewer natural pauses. Some workers realized, often in hindsight, that once prompting during breaks became a habit, downtime no longer restored them in the same way."
    },
    {
      "type": "p",
      "text": "The third was running several things at once: writing code by hand while AI produced an alternative version, running multiple agents in parallel, and reviving long-deferred tasks because AI could “handle them” in the background. Having a partner gave a feeling of momentum. In practice, the researchers describe constant switching of attention, frequent checking of AI output and a growing number of open tasks."
    },
    {
      "type": "p",
      "text": "One engineer's words appear in the article: “You had thought that maybe, oh, because you could be more productive with AI, then you save some time, you can work less. But then really, you don’t work less. You just work the same amount or even more.” The authors see a self-reinforcing loop. AI speeds up some tasks, which raises expectations for speed; faster work makes people lean on AI more; heavier reliance widens what they attempt. Several participants said they felt more productive but no less busy, and some felt busier than before."
    },
    {
      "type": "h",
      "text": "How far can this observation travel?"
    },
    {
      "type": "p",
      "text": "Not far without care, because it is a qualitative study of one company in one period. The article gives no figure for how many hours of work were added. The authors call it in-progress research, and it appeared in a management magazine rather than a journal. The company let employees use generative AI tools widely, so this piece alone cannot say the same pattern would appear where AI is rarely used or in other industries."
    },
    {
      "type": "p",
      "text": "The authors propose what they call an “AI practice”: intentional pauses, sequencing of work, and protected time for human conversation. That is their recommendation, not something this study tested."
    },
    {
      "type": "figure",
      "src": "/images/ideas/where-saved-time-goes/lunch-table-phone.webp",
      "alt": "A small round wooden table in an office break area around midday. A half-eaten sandwich sits on a paper wrapper beside a glass of water and a smartphone propped against a book. A sheer curtain and a green plant are softly out of focus behind.",
      "caption": "Generated image. A break-area scene made for illustration, not a record of a real event.",
      "width": 1440,
      "height": 960
    },
    {
      "type": "h",
      "text": "What happens when you measure the hours?"
    },
    {
      "type": "p",
      "text": "Email time fell, while the amount and kind of work stayed about the same. Eleanor Dillon, Sonia Jaffe and Nicole Immorlica of Microsoft Research and Christopher Stanton of Harvard Business School ran a field experiment at 66 large firms between September 2023 and October 2024. Of 7,137 participating workers, 3,684 were randomly chosen to get Microsoft 365 Copilot, built into the programs they already used for email, meetings and writing. The rest worked as before, and workers decided for themselves whether to use the tool. The researchers analyzed usage records from Microsoft products. They could not see the content of anyone's work or any measure of performance."
    },
    {
      "type": "p",
      "text": "The main analysis centers on the period at least 12 weeks after assignment, once use had settled. Use peaked at 55% of treated workers in the first weeks, then settled at a weekly rate just under 40%. Averaged over everyone offered the tool, time in Outlook fell by 1.4 hours a week, or 12%. Estimated for workers who actually used it, the drop is about two hours, or 17%. Email work was also consolidated into fewer stretches, opening about 1.5 extra hours a week without Outlook activity. Average time in video meetings and in writing documents did not change significantly."
    },
    {
      "type": "p",
      "text": "The amount and kind of work did not change either. Treated and control workers replied to the same number of email threads, attended the same number of Teams meetings and completed the same number of Word documents. Time spent in digital applications outside regular working hours fell by about 0.25 hours a week, or 9%, which the authors read as a sign that some of the time saved on email returned to the workers."
    },
    {
      "type": "p",
      "text": "The paper has its limits. It observes only activity inside Office programs and has no productivity or performance measure. The participating firms were large companies willing to adopt new tools early, and the authors caution that the workers may not represent knowledge workers more broadly. Three of the four authors are at Microsoft Research, and the tool studied is a Microsoft product. Because the tool was given to individuals, the authors conclude that team-level and firm-level changes need further research."
    },
    {
      "type": "h",
      "text": "What shows up when the two studies sit side by side?"
    },
    {
      "type": "p",
      "text": "The two look at different places, so they do not contradict each other. The first is a long record of what people did and how they felt inside one company. The second is a comparison of usage logs between people who got the tool and people who did not. The tools differed too. In the first company, employees used commercial AI tools widely, including for coding and running agents. The experiment studied one tool embedded in email, meetings and documents, and measured only activity there. So “the saved time went into more work” and “email time fell” can describe two sides of the same workplace. These two sources cannot settle which is more common."
    },
    {
      "type": "p",
      "text": "Both studies show that the hours that disappeared went somewhere, and the tool did not decide where. In one study the hours reappeared as new responsibilities and prompts slipped into breaks. In the other, part of the time showed up as less use outside working hours, and the records do not say where the rest went. That is my reading."
    },
    {
      "type": "h",
      "text": "How could a workplace handle the time it saves?"
    },
    {
      "type": "p",
      "text": "One way is to decide where the time goes first and write down where it went afterwards. From here on, these are DMS.Labs' own suggestions and assumptions, not procedures from either study, and their effect has not been tested. Suppose a small training company with six staff starts drafting replies to customer inquiries with AI on a Monday. A month later someone says replies are faster. Whether the saved time went into revising course material, into extra drafts at lunch or back into fixing the AI's drafts cannot be known without a record."
    },
    {
      "type": "p",
      "text": "I suggest keeping three lines. First, for two weeks before adoption, record how long the task takes and how often it is done outside working hours. Second, on the first day of use, write one line: this saved time goes to such-and-such, and the rest is left empty. Third, after a month, put new tasks, time spent checking and correcting AI output, and lunch-hour or evening use in the same table and compare it with the start. There is no evidence yet that this method reduces work. Its purpose is to make it possible to see where the time went."
    },
    {
      "type": "p",
      "text": "The measurement side can be read alongside the DMS guide to measuring AI adoption, which sets task baselines and review costs first. This essay only suggests recording where saved time goes. It does not report that DMS training or this method has reduced anyone's time.",
      "links": [
        {
          "label": "Measuring AI adoption: revenue, costs and review time",
          "href": "/en/works/ai-performance-measurement"
        }
      ]
    },
    {
      "type": "p",
      "text": "This week, pick one task you often do with AI and write one line on where the time it saved went over the past seven days. If there is nothing to write, you have learned that no record existed."
    },
    {
      "type": "p",
      "text": "If you want to review how work flows after introducing AI, you can reach DMS.Labs through the contact page.",
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
      "label": "Ranganathan & Ye · AI Doesn’t Reduce Work—It Intensifies It · Harvard Business Review, 2026-02-09",
      "href": "https://hbr.org/2026/02/ai-doesnt-reduce-work-it-intensifies-it"
    },
    {
      "label": "Haas News · AI promised to free up workers’ time. UC Berkeley Haas researchers found the opposite. · 2026-02-18",
      "href": "https://newsroom.haas.berkeley.edu/ai-promised-to-free-up-workers-time-uc-berkeley-haas-researchers-found-the-opposite/"
    },
    {
      "label": "Dillon, Jaffe, Immorlica & Stanton · Shifting Work Patterns with Generative AI · NBER Working Paper 33795, 2025-05 (revised 2025-11)",
      "href": "https://doi.org/10.3386/w33795"
    }
  ],
  "next": {
    "label": "Next: DMS Workflow Automation (in Korean)",
    "href": "/automation"
  }
};
