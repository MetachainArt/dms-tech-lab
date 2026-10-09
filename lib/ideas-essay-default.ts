/**
 * Ideas essay: "기본값은 누가 정했을까" / "Who Chose the Default?"
 * 한영 독립 편집본. figure 블록의 src는 /public 아래 내부 경로.
 */
import type { IdeasEssay } from "./ideas-essay-watching";

const IMG_ONE = "/gallery/default-setting/light-switches.webp";
const IMG_TWO = "/gallery/default-setting/worn-path.webp";

const sources = [
  {
    label: "Johnson & Goldstein (2003), Do Defaults Save Lives?, Science 302(5649)",
    href: "https://doi.org/10.1126/science.1091721",
  },
  {
    label: "Madrian & Shea (2001), The Power of Suggestion: Inertia in 401(k) Participation and Savings Behavior, Quarterly Journal of Economics 116(4)",
    href: "https://doi.org/10.1162/003355301753265543",
  },
  {
    label: "Jachimowicz, Duncan, Weber & Johnson (2019), When and why defaults influence decisions: a meta-analysis of default effects, Behavioural Public Policy 3(2)",
    href: "https://www.cambridge.org/core/journals/behavioural-public-policy/article/when-and-why-defaults-influence-decisions-a-metaanalysis-of-default-effects/67AF6972CFB52698A60B6BD94B70C2C0",
  },
];

export const defaultSettingEssayKo: IdeasEssay = {
  id: "who-chose-the-default",
  date: "2026. 10",
  category: "Essay",
  title: "기본값은 누가 정했을까",
  subtitle: "Who Chose the Default?",
  summary:
    "새 도구를 열면 설정은 이미 어딘가에 놓여 있다. 장기 기증 양식과 은퇴저축 가입 연구를 따라, 처음 놓인 값이 선택을 어떻게 기울이는지 살펴보고 AI 도구의 기본 설정에는 무엇을 물어야 할지 생각해 본다.",
  blocks: [
    {
      type: "p",
      text: "새 프로그램을 설치하면 설정 화면이 한 번 열린다. 대개는 그 화면을 읽지 않고 닫는다. 알림은 켜진 채로, 자동 저장도 켜진 채로, 사용 기록을 보내는 항목도 처음 놓여 있던 자리에 그대로 남는다. 게으르다고 할 일은 아니다. 항목마다 따져 볼 시간이 없고, 따져 본다 해도 어느 쪽이 나은지 알기 어렵다. 그러는 사이 처음에 놓인 값이 내가 고른 값처럼 굳는다.",
    },
    {
      type: "p",
      text: "이 글은 그 처음 값, 곧 기본값(default)을 다룬 연구 몇 편을 따라가 본다. 끝에서는 업무에 AI 도구를 들일 때 권한과 기록에 관한 기본 설정을 어떻게 보면 좋을지도 생각한다. 내 경험을 근거로 삼지는 않고, 공개된 논문에서 확인되는 만큼만 말한다.",
    },
    {
      type: "figure",
      src: IMG_ONE,
      alt: "베이지색 벽의 나무 판에 흰 토글 스위치 다섯 개가 나란히 달려 있다. 네 개는 같은 방향이고 하나만 반대로 올라가 있다.",
      caption: "생성 이미지. 특정 장소나 실제 기록이 아닙니다.",
      width: 1440,
      height: 960,
    },
    { type: "h", text: "양식의 한 줄이 만든 간격" },
    {
      type: "p",
      text: "가장 자주 인용되는 사례는 장기 기증이다. 에릭 존슨(Eric Johnson)과 대니얼 골드스타인(Daniel Goldstein)은 2003년 《Science》에 두 쪽짜리 글 「기본값이 생명을 구하는가」를 실었다. 기증 의사를 묻는 양식이 “기증하려면 여기에 표시하세요”로 되어 있는지, “기증하지 않으려면 여기에 표시하세요”로 되어 있는지에 따라 결과가 얼마나 달라지는지를 본 글이다. 앞의 방식을 옵트인(opt-in), 뒤의 방식을 옵트아웃(opt-out)이라 부른다.",
    },
    {
      type: "p",
      text: "첫 번째 자료는 온라인 실험이다. 응답자 161명이 양식 중 하나를 받았다. 기증하겠다고 답한 비율은 옵트인 양식에서 42퍼센트, 옵트아웃 양식에서 82퍼센트였고, 미리 정해 둔 값이 없는 중립 양식에서는 79퍼센트였다. 눈여겨볼 곳은 중립 양식의 숫자다. 선택지를 비워 두자 답이 옵트아웃 쪽에 가까웠다. 기증에 마음이 열린 사람이 적지 않았는데, 옵트인 양식에서는 그 마음이 표시로 이어지지 않았다고 읽을 여지가 있다.",
    },
    {
      type: "p",
      text: "두 번째 자료는 나라별 비교다. 논문은 국가별 ‘유효 동의율’을 그래프로 나란히 놓는다. 명시적으로 동의해야 하는 네 나라는 4.25퍼센트에서 27.5퍼센트 사이였고, 반대하지 않으면 동의한 것으로 보는 일곱 나라는 이보다 훨씬 높았다. 나중에 나온 메타분석은 이 대목을 옵트아웃 나라는 90퍼센트대 후반, 옵트인 나라는 10퍼센트대라고 요약한다. 양식 한 줄을 뒤집은 차이로는 큰 간격이다.",
    },
    {
      type: "p",
      text: "다만 이 숫자는 동의율이다. 실제 이식 건수가 아니다. 존슨과 골드스타인도 기본값이 두 방향의 오분류를 낳을 수 있다고 적는다. 기증할 뜻이 있는데 확인되지 않은 사람이 생기고, 원하지 않았는데 기증자로 분류되는 사람도 생긴다. 기본값이 내 뜻을 대신 말해 줄 때, 그 말이 늘 맞는 것은 아니다.",
    },
    { type: "h", text: "월급에서 빠져나가는 저축" },
    {
      type: "p",
      text: "비슷한 이야기가 은퇴저축에도 있다. 브리지트 매드리언(Brigitte Madrian)과 데니스 시(Dennis Shea)는 2001년 《Quarterly Journal of Economics》에 한 미국 기업의 401(k) 가입 기록을 분석한 논문을 냈다. 제목이 「암시의 힘: 401(k) 가입과 저축 행동의 관성」이다. 회사가 새로 입사한 직원을 자동으로 가입시키는 제도를 도입하기 전과 후를 비교한 연구다. 직원은 원하면 언제든 빠질 수 있었다.",
    },
    {
      type: "p",
      text: "이 연구를 요약한 뒤의 메타분석에는 이렇게 적혀 있다. 자동 가입이 기본일 때 직원이 은퇴저축에 참여할 가능성이 대략 50퍼센트 높았다. 이 논문이 보여 주는 것은 사람들이 저축의 장점을 몰랐다는 사실이 아니다. 가입 서류를 직접 내야 하는 순간, 미루는 일이 쉬웠다는 점이다. 서류가 필요 없어지자 미루던 사람들도 같은 제도 안에 들어왔다.",
    },
    {
      type: "p",
      text: "존슨과 골드스타인은 왜 기본값이 이렇게 오래 남는지도 짧게 설명한다. 모든 정책에는 아무것도 하지 않았을 때 적용되는 값이 하나는 있어야 하고, 그 값을 바꾸려는 사람은 몸과 머리를 쓰는 비용을 치러야 한다. 기증처럼 감정이 얽힌 결정이라면 마음의 비용도 든다. 양식을 찾고, 항목을 읽고, 서명하고, 맡기는 일이 하나하나는 작아도 겹치면 사람들은 대개 미룬다. 기본값은 그 미루는 마음에 가장 가까이 놓여 있다.",
    },
    { type: "h", text: "효과는 얼마나 크고, 언제 약해지나" },
    {
      type: "p",
      text: "기본값 효과는 이런 사례 몇 개로만 알려진 것이 아니다. 욘 야히모비츠(Jon Jachimowicz)와 동료들은 2019년 《Behavioural Public Policy》에 기본값 연구 58건, 참여자 합계 73,675명을 모은 메타분석을 실었다. 전체 효과 크기는 d=0.68(95퍼센트 신뢰구간 0.53~0.83)이었다. 미리 선택된 값이 있으면 그 값을 고르는 쪽이 표준편차 기준으로 0.68만큼 늘었다는 뜻이다.",
    },
    {
      type: "p",
      text: "같은 논문은 편차도 크다고 지적한다. 대부분의 연구에서 효과가 양(+)으로 나왔지만 유의하지 않은 연구도 여럿이었고, 두 건은 오히려 음(−)의 효과를 냈다. 소비 영역에서는 기본값이 더 잘 먹혔고 환경 영역에서는 덜 먹혔다. 연구진이 부분적으로 설명하는 요인은 두 가지다. 기본값이 설계자의 권고처럼 읽힐 때(endorsement), 그리고 지금 상태를 그대로 두는 값처럼 읽힐 때(endowment) 효과가 컸다.",
    },
    {
      type: "p",
      text: "앞의 요인은 곱씹을 만하다. 기본값은 중립적인 빈칸으로 받아들여지지 않는다. 설계한 쪽이 이 값이 맞다고 본다는 신호로 읽힌다. 처음 놓인 값 속에는 선택지를 정리하는 사람의 판단이 들어 있다.",
    },
    {
      type: "p",
      text: "여기서 기본값이 나쁘다는 결론이 나오지는 않는다. 자동 가입처럼 많은 사람에게 도움이 될 수 있는 값도 있고, 선택지가 수십 개인 설정 화면에서 출발점이 아예 없는 것보다 나을 때도 많다. 문제는 값 자체보다 그 값이 누구의 사정에 맞춰 정해졌는지 사용자 눈에 보이지 않는 데 있다. 보이지 않는 값은 다시 생각해 볼 기회를 얻지 못한다. 바꿀 수 있다는 사실부터 알아야 바꿀 생각도 할 수 있다.",
    },
    {
      type: "figure",
      src: IMG_TWO,
      alt: "이슬 맺힌 잔디밭을 굽이져 도는 돌길과, 같은 두 지점을 곧게 잇는 좁은 흙길. 아침 햇빛이 낮게 들어온다.",
      caption: "생성 이미지. 특정 장소나 실제 기록이 아닙니다.",
      width: 1440,
      height: 960,
    },
    { type: "h", text: "AI 도구를 들일 때의 기본값" },
    {
      type: "p",
      text: "위 연구는 장기 기증 양식과 저축 가입, 소비자 선택을 다룬다. AI 도구의 설정에서 같은 크기의 효과가 난다고 검증한 연구는 아직 찾지 못했다. 그래서 이 대목은 조심스러운 확장이다. 그래도 구조는 닮았다. 도구를 처음 열면 어떤 파일에 접근할 수 있는지, 대화 기록을 얼마나 남기는지, 외부 서비스에 어디까지 연결되는지, 작업을 사람 확인 없이 실행하는지에 처음 값이 놓여 있다. 위 연구에 비추어 보면 이 값들 가운데 상당수는 그대로 쓰일 가능성이 크다.",
    },
    {
      type: "p",
      text: "그 값을 정한 쪽은 대개 도구를 만든 회사다. 회사가 정한 값이 우리 팀의 업무와 맞는지는 별개의 문제다. 시작을 쉽게 하려고 넓은 권한을 처음 값으로 둘 수도 있고, 안전을 먼저 보고 좁은 권한으로 시작할 수도 있다. 어느 쪽이든 설정 화면 어딘가에 누군가의 판단이 이미 들어가 있다.",
    },
    {
      type: "p",
      text: "권한 설정에서 이 문제는 더 구체적이다. 사람은 대체로 새 기능을 쓰기 시작한 뒤에야 그 기능이 무엇을 건드리는지 알게 된다. 그때는 이미 일이 그 설정 위에서 돌아가고 있어서, 바꾸려면 쓰던 흐름을 멈춰야 한다. 처음 열 때 한 번 정해 두는 쪽이 나중에 고치는 쪽보다 싸다는 것은 위 연구의 논리를 그대로 옮긴 추정이다.",
    },
    { type: "h", text: "설정 화면에서 물어볼 세 가지" },
    {
      type: "p",
      text: "기본값을 전부 바꾸자는 이야기는 아니다. 기본값은 선택의 수고를 덜어 주려고 있는 것이고, 대부분은 그대로 두어도 문제가 없다. 다만 업무에 영향이 큰 몇 가지는 한 번 손으로 정해 두는 편이 낫다. 그때 이런 질문이 도움이 된다.",
    },
    {
      type: "p",
      text: "첫째, 이 값은 누가 정했는가. 제품이 처음 가져온 값인지, 우리 팀이 논의해서 정한 값인지 구분해 둔다. 둘째, 바꾸는 데 무엇이 드는가. 화면에서 한 번 누르면 되는지, 관리자에게 요청해야 하는지에 따라 사람들이 실제로 바꾸는 정도가 달라진다. 셋째, 값이 틀렸을 때 누가 비용을 치르는가. 장기 기증 논문이 두 방향의 오분류를 함께 적었듯이, 권한이 너무 넓어서 생기는 문제와 너무 좁아서 생기는 문제는 치르는 사람이 다르다.",
    },
    {
      type: "p",
      text: "이 질문은 팀 단위로 해 볼 만하다. 도구 하나당 설정 항목을 열 개 안팎으로 추려 ‘기본값 그대로’, ‘우리가 바꿈’으로 표시하고 이유를 한 줄씩 적어 두면, 몇 달 뒤 누가 와서 봐도 어디까지가 제품의 판단이고 어디부터가 우리의 판단인지 읽힌다. 이것은 연구에서 나온 결론이 아니라 내가 덧붙이는 제안이다.",
    },
    {
      type: "p",
      text: "이 세 가지에 답이 있으면 기본값은 계속 기본값으로 남아도 괜찮다. 달라지는 것은 그 값이 이제 누군가의 결정이라는 점이다. 결정한 사람이 있으면 나중에 고칠 사람도 있다.",
    },
    {
      type: "p",
      text: "처음 놓인 값은 눈에 띄지 않고, 그래서 오래 남는다. 설정 화면을 닫기 전에 한 번 더 읽는 정도로 충분한 경우가 많다. 길이 이미 나 있어도, 어느 길을 쓸지는 그 위에 서서 정할 수 있다.",
    },
  ],
  sources,
};

export const defaultSettingEssayEn: IdeasEssay = {
  id: "who-chose-the-default",
  date: "2026. 10",
  category: "Essay",
  title: "Who Chose the Default?",
  subtitle: "기본값은 누가 정했을까",
  summary:
    "Open a new tool and the settings are already in place. Following studies of organ donor forms and retirement-plan enrollment, this essay looks at how the first value tilts a choice, and what to ask about the default settings of an AI tool.",
  blocks: [
    {
      type: "p",
      text: "Install a new program and a settings screen opens once. Most of us close it without reading. Notifications stay on, autosave stays on, and the switch that sends usage data stays where it was first put. This is not laziness. There is no time to weigh every item, and even with time it is hard to know which side is better. Meanwhile the value that happened to be there first hardens into something that feels like our own choice.",
    },
    {
      type: "p",
      text: "This essay follows a few studies of that first value, the default. At the end it turns to the default settings of AI tools at work, and how to look at permissions and records. I do not draw on my own experience as evidence. I say only what published papers support.",
    },
    {
      type: "figure",
      src: IMG_ONE,
      alt: "Five white toggle switches in a row on a wooden plate set into a beige wall. Four point the same way and one is flipped the other way.",
      caption: "Generated image. Not a record of a real place.",
      width: 1440,
      height: 960,
    },
    { type: "h", text: "One line on a form" },
    {
      type: "p",
      text: "The most quoted case is organ donation. In 2003 Eric Johnson and Daniel Goldstein published a two-page piece in Science, “Do Defaults Save Lives?” They compared a form that says “check here if you want to be a donor” with one that says “check here if you do not want to be a donor.” The first is called opt-in, the second opt-out.",
    },
    {
      type: "p",
      text: "Their first source was an online experiment. 161 respondents each received one version. The share who said they would donate was 42 percent on the opt-in form and 82 percent on the opt-out form. A neutral form with no preset answer produced 79 percent. The neutral number is the interesting one. When the choice was left blank, answers landed near the opt-out result. One reading is that many people were open to donating, and the opt-in form did not turn that openness into a mark on the page.",
    },
    {
      type: "p",
      text: "Their second source compared countries. The paper plots “effective consent rates” side by side. The four countries that require explicit consent ranged from 4.25 to 27.5 percent. The seven that presume consent unless a person objects were far higher. A later meta-analysis summarizes the gap as the high nineties for opt-out countries and the tens for opt-in countries. For the flip of a single line on a form, that is a wide gap.",
    },
    {
      type: "p",
      text: "These are consent rates, not transplant counts. Johnson and Goldstein themselves note that a default can misclassify people in two directions. Some people willing to donate go unrecorded, and some who never wanted to donate end up recorded as donors. When a default speaks for you, what it says is not always right.",
    },
    { type: "h", text: "Savings that leave before you see them" },
    {
      type: "p",
      text: "Retirement saving shows a similar pattern. In 2001 Brigitte Madrian and Dennis Shea published a paper in the Quarterly Journal of Economics, “The Power of Suggestion: Inertia in 401(k) Participation and Savings Behavior.” It analyzed 401(k) records at one large American company, before and after the firm began enrolling new hires automatically. Employees could opt out whenever they liked.",
    },
    {
      type: "p",
      text: "A later meta-analysis sums up the finding this way: employees were roughly 50 percent more likely to take part in the retirement plan when enrollment was the default. The result does not show that people were unaware of the benefits of saving. It shows that filling in a form was easy to put off. Once the form disappeared, people who had been putting it off ended up in the same plan.",
    },
    {
      type: "p",
      text: "Johnson and Goldstein also explain, briefly, why a default lasts. Every policy needs some value that applies when nobody does anything, and a person who wants to change it has to pay costs in effort and thought. For something as emotional as donation, there is an emotional cost too. Finding the form, reading the items, signing and handing it in are each small, but together they make most people put it off. A default sits closest to that urge to wait.",
    },
    { type: "h", text: "How strong, and when it weakens" },
    {
      type: "p",
      text: "Default effects are not known from a handful of cases alone. In 2019 Jon Jachimowicz and colleagues published a meta-analysis in Behavioural Public Policy covering 58 default studies and 73,675 participants in total. The overall effect size was d = 0.68, with a 95 percent confidence interval of 0.53 to 0.83. A pre-selected option raised the chance of it being chosen by about 0.68 standard deviations.",
    },
    {
      type: "p",
      text: "The same paper stresses the spread. Most studies found a positive effect, several found no significant effect, and two found a negative one. Defaults worked better in consumer settings and less well in environmental ones. The authors account for part of the variation with two factors. Defaults were more effective when people read them as the designer's recommendation (endorsement), and when they read them as the current state of affairs (endowment).",
    },
    {
      type: "p",
      text: "The first factor deserves a second look. A default is not received as a neutral blank. It reads as a sign that whoever built the form thinks this value is right. The judgment of the person who arranged the options is already inside the first value.",
    },
    {
      type: "p",
      text: "None of this leads to the conclusion that defaults are bad. Some, like automatic enrollment, can help many people, and on a screen with dozens of options a starting point is often better than none. The trouble is less the value itself than the fact that users cannot see for whose circumstances it was chosen. What cannot be seen cannot be reconsidered. People need to know that a value can be changed before they can think of changing it.",
    },
    {
      type: "figure",
      src: IMG_TWO,
      alt: "A winding stone path around a dewy lawn, and a narrow dirt path cutting straight across the grass between the same two points, in low morning light.",
      caption: "Generated image. Not a record of a real place.",
      width: 1440,
      height: 960,
    },
    { type: "h", text: "Defaults when you bring in an AI tool" },
    {
      type: "p",
      text: "The studies above cover donor forms, retirement enrollment and consumer choices. I did not find research that tests an effect of this size on AI tool settings, so this section is a cautious extension. The structure still looks familiar. Open a tool for the first time and a starting value already sits behind each question: which files it can reach, how long it keeps conversation history, how far it connects to outside services, whether it acts without a person's confirmation. Given the research above, it is likely that many of these values will be used as they came.",
    },
    {
      type: "p",
      text: "Whoever set those values is usually the company that made the tool. Whether they suit your team's work is a separate question. A vendor might start with wide permissions to make the first step easy, or with narrow ones to put safety first. Either way, someone's judgment is already sitting inside the settings screen.",
    },
    {
      type: "p",
      text: "With permissions the problem is more concrete. People usually learn what a feature touches only after they have started using it. By then the work is already running on that setting, and changing it means stopping the flow. That deciding once at first opening is cheaper than fixing later is my estimate, carried over from the logic of the studies above.",
    },
    { type: "h", text: "Three questions at the settings screen" },
    {
      type: "p",
      text: "This is not an argument for changing every default. Defaults exist to spare us the effort of choosing, and most of them can stay as they are. But a few that matter for the work are worth setting by hand once. These questions help.",
    },
    {
      type: "p",
      text: "First, who set this value? Separate what the product shipped with from what your team discussed and decided. Second, what does it take to change? Whether it is one click or a request to an administrator shapes how often people actually change it. Third, who pays if the value is wrong? As the donation paper listed errors in both directions, the cost of permissions that are too wide falls on different people than the cost of permissions that are too narrow.",
    },
    {
      type: "p",
      text: "The questions work at team scale too. For each tool, pick around ten settings, mark each “left as default” or “changed by us,” and write one line of reasoning. Months later, anyone who looks can see where the product's judgment ends and ours begins. This is not a conclusion from the research. It is a suggestion of my own.",
    },
    {
      type: "p",
      text: "If those three have answers, a default can stay a default. What changes is that the value is now somebody's decision. Where there is a person who decided, there is also a person who can fix it later.",
    },
    {
      type: "p",
      text: "A first value is easy to overlook, and so it tends to last. Reading the screen once more before closing it is often enough. Even when a path is already laid, you can still choose which one to walk once you are standing on it.",
    },
  ],
  sources,
};
