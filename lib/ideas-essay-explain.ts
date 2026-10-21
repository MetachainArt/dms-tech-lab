/**
 * Ideas essay: "설명해 보면 드러나는 것" / "What Explaining Reveals"
 * 한영 독립 편집본. figure 블록의 src는 /public 아래 내부 경로.
 */
import type { IdeasEssay } from "./ideas-essay-watching";

export const explainFirstEssayKo: IdeasEssay = {
  "id": "what-explaining-reveals",
  "date": "2026. 10. 21",
  "category": "Essay",
  "title": "설명해 보면 드러나는 것",
  "subtitle": "자동화를 맡기기 전에 먼저 해 볼 일",
  "summary": "자동화나 AI에 일을 맡기기 전에, 그 일을 해 온 사람이 각 단계가 왜 있는지 직접 설명해 보면 좋습니다. 설명이 막히는 자리는 아직 모르는 자리이고, 도구를 붙이기 전에 먼저 물어야 할 자리입니다.",
  "blocks": [
    {
      "type": "p",
      "text": "일을 자동화하거나 AI에게 맡기기 전에, 그 일을 해 온 사람에게 각 단계가 왜 있는지 소리 내어 설명해 보게 하면 좋습니다. 설명이 막히는 자리가 아직 모르는 자리입니다. 그 자리는 도구를 붙이기 전에 먼저 물어야 하는 곳이기도 합니다. 안다는 느낌만으로는 이런 자리가 잘 보이지 않습니다."
    },
    {
      "type": "p",
      "text": "오래 해 온 일일수록 손이 먼저 움직입니다. 보고서를 열고, 숫자를 옮기고, 누구에게 보낼지 고민하지 않고 보냅니다. 그때 사람은 그 일을 안다고 느낍니다. 그런데 손이 아는 것과 이유를 말할 수 있는 것은 같지 않을 수 있습니다. 둘의 차이는 평소에는 드러날 일이 없고, 다른 사람에게 일을 넘기거나 기계에 맡기려 할 때 비로소 드러납니다."
    },
    {
      "type": "p",
      "text": "이 글의 장면은 설명을 위한 가정이며 DMS 고객 사례나 측정 결과가 아닙니다. 2026년 10월 21일에 확인한 Rozenblit와 Keil(2002)의 논문 초록과 공개된 원문 일부를 출발점으로 삼았습니다. 원문의 표와 보충 자료까지는 읽지 못했습니다. 업무에 옮기는 순서는 그 연구가 정한 표준이 아니라 이 글의 제안입니다."
    },
    {
      "type": "figure",
      "src": "/images/ideas/explain-before-automate/zipper-notes.webp",
      "alt": "나무 책상 위에 펼친 노트와 연필. 노트에는 지퍼를 그린 스케치와 중간에 멈춘 화살표가 있고, 옆에는 열린 지퍼가 달린 캔버스 가방이 놓여 있다.",
      "caption": "생성 이미지. 설명을 위한 책상 장면이며 실제 기록이 아닙니다.",
      "width": 1440,
      "height": 960
    },
    {
      "type": "h",
      "text": "지퍼를 안다고 생각하는 사람들"
    },
    {
      "type": "p",
      "text": "예일대학교의 연구진은 일상에서 쓰는 물건이 어떻게 작동하는지 사람들이 얼마나 안다고 느끼는지 살폈습니다. 참가자는 먼저 자신의 이해 정도를 점수로 매겼고, 이어서 그 물건이 작동하는 과정을 단계별로 직접 설명하는 글을 썼으며, 마지막으로 다시 점수를 매겼습니다. 논문이 다룬 물건에는 속도계, 지퍼, 피아노 건반, 수세식 변기, 실린더 자물쇠, 헬리콥터, 석영 시계, 재봉틀이 들어 있습니다."
    },
    {
      "type": "p",
      "text": "논문의 초록은 사람들이 복잡한 현상을 실제보다 훨씬 정밀하고 일관되며 깊게 이해한다고 느낀다고 정리합니다. 연구진은 이것을 설명 깊이의 착각이라고 불렀습니다. 기계 장치를 다룬 첫 연구들에서는 설명을 시도한 뒤 스스로 매긴 이해 점수가 내려갔습니다. 연구진은 이 하락을 참가자가 단순히 겸손해진 결과로 보지 않았습니다. 자신의 지식을 더 정확하게 재게 되었다는 뜻으로 해석했습니다."
    },
    {
      "type": "p",
      "text": "같은 논문은 이 착각이 사실, 절차, 이야기에 관한 지식보다 설명에 관한 지식에서 훨씬 강하다고 말합니다. 제가 읽은 원문 발췌에는 절차 지식에서 설명을 시도해도 자기 평가가 내려가지 않은 결과도 있었습니다. 이 구분은 업무에서 눈여겨볼 만합니다. 순서를 아는 것과 왜 그 순서인지를 아는 것은 서로 다른 종류의 지식일 수 있기 때문입니다."
    },
    {
      "type": "h",
      "text": "순서는 쓸 수 있고 이유에서 막힙니다"
    },
    {
      "type": "p",
      "text": "인수인계 문서는 대개 순서 목록으로 되어 있습니다. 첫째 파일을 연다, 둘째 숫자를 붙여 넣는다, 셋째 확인을 받는다, 같은 식입니다. 순서는 막힘없이 적히는데, 각 줄 옆에 왜 그 단계가 있는지를 적으려 하면 속도가 느려집니다. 이 글은 그 느려지는 지점을 신호로 읽어 보자는 제안입니다."
    },
    {
      "type": "p",
      "text": "월말 보고서를 만드는 다섯 단계를 가정해 보겠습니다. 세 번째 단계가 팀장 확인 뒤에 숫자를 고치는 일이라고 합시다. 이 확인이 오류를 잡으려는 장치인지, 예전에 한 번 있었던 문제 때문에 남은 관행인지, 팀장이 이제 아무도 보지 않는 줄 알고 있는지는 단계 목록만으로는 알 수 없습니다. 자동화는 이 단계를 지워 버릴 수도 있고, 이유를 모른 채 그대로 복제할 수도 있습니다. 어느 쪽이든 이유를 모르는 채로 내린 결정입니다."
    },
    {
      "type": "p",
      "text": "이 연구가 업무 절차를 다룬 것은 아닙니다. 논문이 시험한 것은 기계 장치였고, 같은 현상이 보고서 작성이나 승인 절차에서도 같은 크기로 나타난다는 근거는 이 글에 없습니다. 제가 빌려 오는 것은 결과가 아니라 질문의 모양입니다. 안다고 느끼는 사람에게 직접 설명해 보라고 하면, 느낌과 실제 사이의 거리가 드러난다는 점입니다."
    },
    {
      "type": "h",
      "text": "막히는 자리에 표시하기"
    },
    {
      "type": "p",
      "text": "이 제안은 단계마다 세 가지를 묻는 데서 시작합니다. 이 단계가 없으면 어떤 일이 생깁니까. 이 결과를 받아 쓰는 사람은 누구입니까. 이 단계가 틀렸을 때 어디에서 알게 됩니까. 두세 문장 안에 답이 이어지면 그대로 두고, 답이 막히거나 서로 어긋나면 그 단계에 표시를 합니다. 표시된 단계는 설명이 채워질 때까지 자동화 대상에서 빼거나 사람에게 남겨 두는 편이 안전하다고 생각합니다.",
      "links": [
        {
          "label": "AI에게 일을 시키기 전에, 업무 설명서 한 장부터",
          "href": "/works/ai-skill-job-sheet"
        }
      ]
    },
    {
      "type": "figure",
      "src": "/images/ideas/explain-before-automate/lock-parts.webp",
      "alt": "린넨 천 위에 분해해 놓은 놋쇠 실린더 자물쇠. 몸체와 플러그, 핀과 스프링이 줄지어 놓여 있고 열쇠와 연필, 빈 종이가 옆에 있다.",
      "caption": "생성 이미지. 설명을 위한 장면이며 실제 기록이 아닙니다.",
      "width": 1440,
      "height": 960
    },
    {
      "type": "p",
      "text": "표시를 한 뒤에 할 일은 세 가지쯤 됩니다. 그 단계를 실제로 설명할 수 있는 다른 사람을 찾습니다. 로그나 문서처럼 남아 있는 기록을 확인합니다. 그래도 답이 없으면 모른다고 적어 두고 사람이 그 단계를 계속 맡습니다. 모르는 단계를 모른다고 적는 일은 작아 보이지만, 이후에 도구가 그 자리를 어떻게 다뤘는지 되짚을 때 기준이 됩니다."
    },
    {
      "type": "p",
      "text": "한 가지는 조심하고 싶습니다. 막힌 자리를 AI에게 물어 채우는 일입니다. AI는 그럴듯한 이유를 매끄럽게 만들어 낼 수 있고, 그러면 사람은 설명이 있다는 느낌만 얻을 수 있습니다. 이 부분은 연구에서 가져온 것이 아니라 제 판단이며, 직접 시험해 본 결과도 아닙니다. 그래서 AI가 낸 설명은 사람이 확인하기 전까지 가설로 적어 두는 편이 낫다고 봅니다."
    },
    {
      "type": "h",
      "text": "보이는 단계와 보이지 않는 단계"
    },
    {
      "type": "p",
      "text": "논문의 논의에는 눈에 보이는 부품과 숨은 부품의 비율이 착각의 강도를 좌우하는 중요한 요인일 수 있다는 대목이 있습니다. 지퍼처럼 움직이는 부분이 겉에 드러난 물건은 이해했다고 느끼기 쉽다는 이야기입니다. 이 논의를 업무에 그대로 옮길 수는 없습니다. 다만 질문 하나는 남길 수 있습니다. 우리 업무에서 화면에 보이는 단계와 다른 팀이나 시스템 뒤에 숨은 단계는 설명하기 쉬운 정도가 같은가, 하는 질문입니다."
    },
    {
      "type": "p",
      "text": "저는 이 질문을 자동화 검토 목록의 마지막 열로 두자고 제안합니다. 단계마다 화면에서 보이는 부분인지, 다른 사람이나 시스템이 맡는 부분인지 적고, 후자의 설명이 얼마나 채워졌는지 따로 봅니다. 이 열이 실제로 도움이 되는지는 아직 확인하지 않았습니다."
    },
    {
      "type": "p",
      "text": "DMS가 다루는 업무 자동화와 AX 전환 설계에서도 이 질문은 설계 앞쪽에 놓을 수 있다고 생각합니다. 어떤 일을 자동화할 만한지 고르는 단계에서 보통은 반복 횟수나 걸리는 시간을 먼저 봅니다. 거기에 이 단계를 설명할 수 있는 사람이 있는가를 한 줄 더하면, 같은 반복 업무라도 도구에 맡기기 쉬운 일과 먼저 정리해야 할 일이 나뉩니다. 이것은 제안일 뿐이며, 이렇게 나눈 결과가 실제로 더 좋았다는 기록은 아직 없습니다."
    },
    {
      "type": "p",
      "text": "마지막으로, 설명이 막히지 않았다는 사실이 곧 그 단계가 옳다는 뜻은 아닙니다. 막힘없이 말하는 설명이 틀린 설명일 수도 있습니다. 이 방법이 보여 주는 것은 설명이 이어지는지 끊기는지까지이고, 이어진 설명이 맞는지는 기록이나 다른 사람의 확인으로 따로 봐야 합니다."
    },
    {
      "type": "h",
      "text": "설명을 부탁하는 방식"
    },
    {
      "type": "p",
      "text": "이 방법에는 어려운 점이 하나 있습니다. 설명해 보라는 요청이 평가처럼 들릴 수 있습니다. 일을 오래 맡아 온 사람에게 왜 그 단계가 있느냐고 물으면, 시험을 받는다고 느끼거나 일을 잘못 해 왔다는 뜻으로 듣기 쉽습니다. 막히는 곳이 나왔을 때 그것이 그 사람의 잘못이 아니라 일의 구조에서 비어 있는 부분이라는 점을 먼저 말해 두는 편이 좋겠습니다."
    },
    {
      "type": "p",
      "text": "저는 요청을 이렇게 바꿔 보려 합니다. 이 일을 처음 맡는 사람에게 넘겨 준다고 생각하고 말씀해 주십시오. 중간에 막히면 그곳을 표시해 두었다가 함께 찾아보겠습니다. 설명하는 사람이 그 일을 가장 잘 안다고 단정할 수도 없습니다. 같은 단계를 두 사람에게 따로 설명하게 해서 서로 다르게 말하는 곳을 찾는 방법도 있을 텐데, 이것도 제가 직접 시험해 본 방법은 아닙니다."
    },
    {
      "type": "p",
      "text": "연구에서 설명을 써 본 뒤에 점수가 내려간 것은, 설명하려면 머릿속의 빈칸을 하나씩 메워야 했기 때문이라고 생각합니다. 이 풀이는 논문의 해석을 제가 쉽게 옮겨 본 것이어서 정확한 표현은 아닙니다. 업무에서도 빈칸을 메우는 일을 사람에게 한 번 시켜 보면, 도구에 맡길 일과 사람이 계속 맡을 일의 경계가 조금 더 분명해질 수 있습니다. 경계가 분명해졌는지는 이후의 기록으로 확인할 일입니다."
    },
    {
      "type": "h",
      "text": "회의가 끝나기 전에 남길 한 줄"
    },
    {
      "type": "p",
      "text": "다음 번 자동화 검토 회의에서 목록 옆에 칸 하나를 더 두겠습니다. 이름은 설명이 막힌 단계입니다. 칸이 비어 있으면 모든 단계가 설명된 것인지, 아무도 설명해 보지 않은 것인지 구분되지 않습니다. 그래서 한 사람이 5분 동안 소리 내어 일을 설명하고, 듣는 사람이 막힌 곳만 받아 적는 방식을 먼저 써 보려 합니다."
    },
    {
      "type": "p",
      "text": "이 방법이 시간을 줄이는지, 실수를 줄이는지는 이 글에서 계산하지 않았습니다. 설명해 본 단계가 늘어난 것만으로 일이 나아졌다고 말하기도 어렵습니다. 다음에 볼 것은 막힌 단계가 실제로 몇 개였는지, 그중 몇 개가 나중에 답을 찾았는지입니다. 그 기록이 쌓여야 이 제안이 쓸모 있었는지 말할 수 있습니다.",
      "links": [
        {
          "label": "DMS AX 전환 설계",
          "href": "/works/ax"
        }
      ]
    }
  ],
  "sources": [
    {
      "label": "Rozenblit & Keil · The misunderstood limits of folk science: an illusion of explanatory depth · Cognitive Science 26(5), 2002",
      "href": "https://doi.org/10.1207/s15516709cog2605_1"
    },
    {
      "label": "Rozenblit & Keil (2002) 공개 원고 · PubMed Central / Open manuscript on PubMed Central",
      "href": "https://pmc.ncbi.nlm.nih.gov/articles/PMC3062901"
    }
  ],
  "next": {
    "label": "다음: DMS AX 전환 설계",
    "href": "/works/ax"
  }
};

export const explainFirstEssayEn: IdeasEssay = {
  "id": "what-explaining-reveals",
  "date": "2026. 10. 21",
  "category": "Essay",
  "title": "What Explaining Reveals",
  "subtitle": "A small test to run before you hand work to automation",
  "summary": "Before handing a task to automation or AI, ask the person who has been doing it to explain why each step exists. The places where the explanation stalls are the places nobody understands yet, and they are worth asking about before any tool is attached.",
  "blocks": [
    {
      "type": "p",
      "text": "Before you automate a task or hand it to an AI, ask the person who has been doing it to explain, out loud, why each step is there. The points where the explanation stalls are the points nobody understands yet. Those are the questions to ask before a tool is attached. The feeling of knowing does not reveal them very well."
    },
    {
      "type": "p",
      "text": "The longer someone has done a task, the earlier their hands move. They open the report, copy the figures across, and send it to the right person without deciding who that is. At that moment they feel they know the work. But what the hands know and what the person can explain may not be the same thing. The difference rarely matters day to day. It shows up when the work is handed to someone else, or to a machine."
    },
    {
      "type": "p",
      "text": "The scenes in this essay are assumptions made for illustration. They are not DMS client cases or measured results. My starting point was the abstract of Rozenblit and Keil (2002) and parts of the openly available manuscript, which I read on October 21, 2026. I did not read the tables or the supplementary material. The sequence I suggest for applying this to work is my own proposal, not a standard set by that study."
    },
    {
      "type": "figure",
      "src": "/images/ideas/explain-before-automate/zipper-notes.webp",
      "alt": "An open notebook and a pencil on a wooden desk. The notebook holds a sketch of a zipper with arrows that stop partway, and a canvas bag with an open zipper sits beside it.",
      "caption": "Generated image. A desk scene made for illustration, not a record of a real place.",
      "width": 1440,
      "height": 960
    },
    {
      "type": "h",
      "text": "People who think they understand a zipper"
    },
    {
      "type": "p",
      "text": "Researchers at Yale looked at how well people feel they understand everyday objects. Participants first rated their own understanding. They then wrote out, step by step, how the object works, and finally rated themselves again. The items in the paper include a speedometer, a zipper, a piano key, a flush toilet, a cylinder lock, a helicopter, a quartz watch, and a sewing machine."
    },
    {
      "type": "p",
      "text": "The abstract says that people feel they understand complex phenomena with far more precision, coherence, and depth than they really do. The authors named this the illusion of explanatory depth. In the first studies, which used mechanical devices, self-rated understanding dropped after the attempt to explain. The authors did not read that drop as participants simply becoming modest. They read it as participants judging their own knowledge more accurately."
    },
    {
      "type": "p",
      "text": "The same paper says the illusion is much stronger for explanatory knowledge than for knowledge of facts, procedures, or narratives. In the excerpts I read, there was also a result in which attempting to explain a procedure did not lower people's self-ratings. That distinction deserves attention in a work setting, because knowing the order of steps and knowing why the steps are in that order may be different kinds of knowledge."
    },
    {
      "type": "h",
      "text": "The order can be written down, the reason is where it stalls"
    },
    {
      "type": "p",
      "text": "Handover documents are usually lists of steps. First open the file, second paste the figures, third get a sign-off. The steps go down quickly. Slowing down begins when you try to write, beside each line, why that step exists. I suggest reading that slowdown as a signal."
    },
    {
      "type": "p",
      "text": "Take a five-step process for a month-end report. Say the third step is that a manager reviews the figures and then corrects them. From the step list alone you cannot tell whether that review exists to catch errors, whether it is a habit left over from one past problem, or whether the manager assumes nobody looks at the result anymore. Automation could delete the step. It could also copy the step exactly without knowing its reason. Either way, the decision is made without the reason."
    },
    {
      "type": "p",
      "text": "That study was not about work procedures. It tested mechanical devices, and nothing in this essay shows that the same effect appears at the same size in report writing or approval flows. What I am borrowing is not the result but the shape of the question: ask someone who feels they know to explain it, and the gap between feeling and fact starts to show."
    },
    {
      "type": "h",
      "text": "Marking the places where it stalls"
    },
    {
      "type": "p",
      "text": "The proposal starts by asking three things about each step. What happens if this step is missing? Who uses its output? Where would we find out if it went wrong? If the answers connect within two or three sentences, leave the step as it is. If they stall or contradict each other, mark it. Until the explanation is filled in, I would keep a marked step out of the automation or leave it with a person.",
      "links": [
        {
          "label": "Before you ask AI to do the job, write the one-page job sheet",
          "href": "/en/works/ai-skill-job-sheet"
        }
      ]
    },
    {
      "type": "figure",
      "src": "/images/ideas/explain-before-automate/lock-parts.webp",
      "alt": "A brass cylinder lock taken apart on a linen cloth. The body, plug, pins, and springs are laid out in rows, with a key, a pencil, and a blank sheet of paper nearby.",
      "caption": "Generated image. A scene made for illustration, not a record of a real place.",
      "width": 1440,
      "height": 960
    },
    {
      "type": "p",
      "text": "After marking, there are roughly three things to do. Find someone else who can actually explain the step. Check whatever records remain, such as logs or documents. If there is still no answer, write down that it is unknown and let a person keep handling that step. Writing down an unknown looks like a small act, but it becomes the reference point later, when you look back at how a tool treated that spot."
    },
    {
      "type": "p",
      "text": "One thing I would be careful about is asking an AI to fill the gap. An AI can produce a smooth, plausible reason, and a person may then come away with only the feeling that an explanation exists. This part is my own judgment, not something taken from the study, and I have not tested it. So I would record an AI-written explanation as a hypothesis until a person has checked it."
    },
    {
      "type": "h",
      "text": "Visible steps and hidden steps"
    },
    {
      "type": "p",
      "text": "The paper's discussion raises the possibility that the ratio of visible parts to hidden parts may be an important factor in how strong the illusion is. An object like a zipper, whose moving parts are exposed on the outside, is easy to feel you understand. That discussion cannot be carried over to work as it stands. One question does carry over: in our own work, is a step that shows up on a screen as easy to explain as a step that sits behind another team or another system?"
    },
    {
      "type": "p",
      "text": "I suggest adding that question as the last column of an automation review list. For each step, note whether it happens on a screen or is handled by another person or system, and look separately at how well the second kind has been explained. Whether this column actually helps has not been checked."
    },
    {
      "type": "h",
      "text": "One line to leave before the meeting ends"
    },
    {
      "type": "p",
      "text": "In the next automation review, I would add one more column beside the list, called steps where the explanation stalled. If that column is empty, you cannot tell whether every step was explained or nobody tried. So I would start with something small: one person explains the work aloud for five minutes, and a listener writes down only the places where it stalled."
    },
    {
      "type": "p",
      "text": "This essay does not calculate whether the method saves time or reduces mistakes. An increase in the number of steps that have been explained would not be enough to say the work improved. What to look at next is how many steps actually stalled, and how many of those later got an answer. Only after that record builds up can anyone say whether the proposal was useful.",
      "links": [
        {
          "label": "DMS AX transformation design (in Korean)",
          "href": "/works/ax"
        }
      ]
    }
  ],
  "sources": [
    {
      "label": "Rozenblit & Keil · The misunderstood limits of folk science: an illusion of explanatory depth · Cognitive Science 26(5), 2002",
      "href": "https://doi.org/10.1207/s15516709cog2605_1"
    },
    {
      "label": "Rozenblit & Keil (2002) 공개 원고 · PubMed Central / Open manuscript on PubMed Central",
      "href": "https://pmc.ncbi.nlm.nih.gov/articles/PMC3062901"
    }
  ],
  "next": {
    "label": "Next: DMS AX transformation design (in Korean)",
    "href": "/works/ax"
  }
};
