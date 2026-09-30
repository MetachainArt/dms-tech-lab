/**
 * Ideas essay: "지켜보는 일이 남는다" / "What Is Left Is Watching"
 * 한영 독립 편집본. figure 블록의 src는 /public 아래 내부 경로.
 */
export type EssayBlock =
  | { type: "p"; text: string }
  | { type: "h"; text: string }
  | { type: "motto"; text: string }
  | { type: "figure"; src: string; alt: string; caption: string; width: number; height: number };

export interface IdeasEssay {
  id: string;
  date: string;
  category: string;
  title: string;
  subtitle: string;
  summary: string;
  blocks: EssayBlock[];
  sources: { label: string; href: string }[];
}

const IMG_ONE = "/gallery/watching/night-console.webp";
const IMG_TWO = "/gallery/watching/morning-review.webp";

export const watchingEssayKo: IdeasEssay = {
  id: "what-is-left-is-watching",
  date: "2026. 09",
  category: "Essay",
  title: "지켜보는 일이 남는다",
  subtitle: "What Is Left Is Watching",
  summary:
    "자동화가 손을 덜어 주면 사람에게는 지켜보는 일이 남는다. 1983년의 논문과 1948년의 실험을 따라, 확인이라는 노동을 어떻게 설계할지 생각해 본다.",
  blocks: [
    {
      type: "p",
      text: "도구가 일을 대신해 주면 사람은 한가해진다고 생각하기 쉽다. 손이 하던 일이 기계로 넘어가니 남는 것은 판단과 창의성이라는 그럴듯한 말도 따라온다. 그런데 자동화 연구는 오래전부터 다른 그림을 그려 왔다. 손이 하던 일은 줄어도 사람의 일이 사라지지는 않고, 모양이 바뀐다. 직접 하는 일에서 지켜보는 일로 바뀐다.",
    },
    {
      type: "p",
      text: "이 글은 그 변화를 다룬다. 생성형 도구가 초안을 몇 초 만에 내놓는 지금, 병목은 쓰는 속도가 아니라 읽는 속도로 옮겨 갔다. 누가 더 빨리 만드느냐보다, 만들어진 것을 누가 제대로 보느냐가 결과를 가른다. 다만 이 주제를 내 경험담으로 풀지는 않겠다. 대신 수십 년 전에 쓰인 논문 몇 편에 기대어, 지켜보는 일이 왜 어려운지 차근차근 따라가 보려 한다.",
    },
    {
      type: "figure",
      src: IMG_ONE,
      alt: "늦은 밤 어두운 방에서 여러 개의 조용한 계기판 화면을 바라보는 사람의 뒷모습. 책상 위에는 식은 찻잔과 메모지가 있다.",
      caption: "생성 이미지. 특정 현장이나 실제 프로젝트의 기록이 아닙니다.",
      width: 1440,
      height: 960,
    },
    { type: "h", text: "일이 줄어든 자리에 남는 것" },
    {
      type: "p",
      text: "1983년 리사 베인브리지(Lisanne Bainbridge)는 학술지 《Automatica》에 「자동화의 아이러니(Ironies of Automation)」라는 짧은 논문을 실었다. 논문이 던진 질문은 단순하다. 산업 공정을 자동화하면 사람의 문제가 줄어드는가, 아니면 다른 모양으로 커지는가. 그녀의 답은 후자에 가까웠다. 자동화는 사람과 관련된 문제를 없애기보다 넓힐 수 있다.",
    },
    {
      type: "p",
      text: "핵심 논리는 이렇다. 설계자는 사람을 오류의 원천으로 보고 되도록 일에서 빼려 한다. 그러고 나서도 자동화하지 못한 부분은 결국 사람에게 남긴다. 예외 상황, 기계가 멈춘 순간, 처음 보는 고장 같은 것들이다. 평소에는 기계가 다 하니 사람은 손을 쓸 일이 없다. 그러다 가장 어려운 순간에만 호출된다. 연습할 기회는 사라졌는데 요구되는 수준은 오히려 높아진다. 논문이 아이러니라고 부른 것이 바로 이 구조다.",
    },
    {
      type: "p",
      text: "여기에 지켜보는 일 자체의 무게가 더해진다. 아무 일도 일어나지 않는 화면을 계속 들여다보며 이상 신호를 놓치지 않는 일은 생각보다 소모적이다. 베인브리지는 그래서 자동화가 진행될수록 운영자에게 필요한 훈련이 줄지 않고 늘어난다고 짚었다. 드물지만 결정적인 개입의 순간을 위해서다.",
    },
    {
      type: "p",
      text: "이 논문은 공정 제어실을 배경으로 쓰였지만, 문장을 조금만 바꾸면 지금의 사무 환경에도 그대로 겹친다. 보고서 초안을 도구가 쓰고, 요약을 도구가 만들고, 코드의 첫 판을 도구가 내놓는다. 사람은 그 결과를 훑어보고 승인한다. 쓰는 손은 쉬는데 읽는 눈은 더 바빠진다. 그리고 읽는 눈은 쓰는 손보다 훨씬 쉽게 지친다.",
    },
    { type: "h", text: "삼십 분이라는 숫자" },
    {
      type: "p",
      text: "지켜보는 일이 왜 그렇게 어려운지는 1948년으로 거슬러 올라가면 조금 보인다. 영국의 심리학자 노먼 매크워스(Norman Mackworth)는 레이더 관제 요원의 경계 임무를 연구하려고 시계 과제를 만들었다. 시곗바늘이 일정하게 한 칸씩 움직이다가 아주 가끔 두 칸을 건너뛴다. 참가자는 그 건너뜀을 알아채면 된다. 단순한 과제이고, 참가자들도 열심히 임했다.",
    },
    {
      type: "p",
      text: "결과는 뚜렷했다. 시작 후 삼십 분쯤 지나자 놓치는 건너뜀이 눈에 띄게 늘었다. 이 현상은 이후 ‘경계 감소(vigilance decrement)’라고 불리며 수십 년에 걸쳐 확인되고 논쟁되었다. 2025년에 나온 회고 논문은 이 감소를 다룬 연구의 75년을 정리하면서, 매크워스의 연구가 그 실험적 분석의 출발점으로 꼽힌다고 적는다. 세부 메커니즘을 두고는 아직 견해가 갈리지만, 오래 지켜볼수록 드문 신호를 놓치는 비율이 올라간다는 큰 흐름은 흔들리지 않았다.",
    },
    {
      type: "p",
      text: "같은 회고 논문이 전하는 대목 하나가 특히 흥미롭다. 매크워스는 전화벨 같은 뚜렷한 방해나 삼십 분의 휴식이 감소를 줄이거나 없애 준다는 것을 발견했다. 수행 결과를 알려 주는 피드백도 마찬가지였다. 반면 ‘더 집중하라’고 참가자를 다그치는 것은 효과가 없었다. 의지로 되는 문제가 아니라는 뜻이다. 집중하라는 당부는 설계의 대안이 될 수 없고, 쉬는 시간과 피드백이 오히려 설계의 재료가 된다.",
    },
    {
      type: "p",
      text: "베인브리지도 이 실험을 논문 안에서 짚었다. 아무 일도 일어나지 않는 정보원에 동기가 높은 사람이 시각적 주의를 유지하는 것은 삼십 분을 넘기기 어렵다는 취지다. 여기서 조심할 점이 있다. 삼십 분이라는 숫자는 특정 과제와 조건에서 나온 값이다. 모든 확인 작업에 그대로 적용되는 법칙이 아니다. 다만 ‘변화가 드물고 대부분 정상인 화면을 오래 보는 일은 저절로 무뎌진다’는 방향은 여러 연구가 공유한다.",
    },
    {
      type: "figure",
      src: IMG_TWO,
      alt: "이른 아침 창가 작업대 위에 인쇄된 원고, 붉은 연필, 반쯤 마신 커피가 놓여 있고 종이 한 장에 밑줄이 그어진 모습.",
      caption: "생성 이미지. 특정 현장이나 실제 프로젝트의 기록이 아닙니다.",
      width: 1440,
      height: 960,
    },
    { type: "h", text: "믿음이 주의를 대신할 때" },
    {
      type: "p",
      text: "자동화가 잘 작동할수록 문제가 하나 더 생긴다. 신뢰가 확인을 대체하기 시작한다. 라자 파라슈라만(Raja Parasuraman)과 디트리히 만차이(Dietrich Manzey)는 2010년 《Human Factors》 52권 3호에 실린 리뷰에서 이 현상을 ‘안일함(complacency)’과 ‘자동화 편향(automation bias)’이라는 두 이름으로 정리했다. 하나는 자동화를 충분히 살피지 않게 되는 것, 다른 하나는 자동화가 내놓은 권고를 비판 없이 따르는 것이다. 이전에는 각각 따로 다뤄지던 이 둘을 주의(attention)라는 축으로 묶어 설명하려 한 글이다.",
    },
    {
      type: "p",
      text: "이 리뷰의 결론에서 옮겨 올 만한 것은 두 가지다. 첫째, 이런 오류는 성격이 나쁘거나 게으른 사람만의 문제가 아니다. 개인의 특성, 상황, 자동화 시스템의 특성이 서로 영향을 주고받으며 생기는 결과라고 저자들은 본다. 둘째, 주의가 그 한가운데에 있다. 그러니 대책도 ‘조심하세요’라는 구호보다는 주의가 흘러가는 길을 설계하는 쪽에서 나와야 한다. 저자들은 실제로 이 모형이 자동화와 의사결정 지원 시스템의 설계 방향을 찾는 틀이 될 수 있다고 적었다.",
    },
    {
      type: "p",
      text: "일상적인 장면으로 옮겨 보자. 도구가 열 번 연속으로 맞는 답을 내놓았다고 하자. 열한 번째 답은 사람이 훨씬 덜 의심하게 된다. 그것이 어리석어서가 아니다. 열 번의 정확함이 다음 답에 대한 합리적인 기대를 만들기 때문이다. 문제는 그 기대가 검토 노력을 조용히 깎아낸다는 데 있다. 정확도가 높을수록 오류는 드물고, 드문 오류일수록 눈에 걸리지 않는다. 앞에서 본 경계 감소와 똑같은 모양이다.",
    },
    { type: "h", text: "확인이라는 일을 설계하기" },
    {
      type: "p",
      text: "그렇다면 무엇을 할 수 있을까. 논문들이 준 재료를 일하는 방식으로 옮겨 보면 몇 가지 생각이 나온다. 아래는 연구가 직접 처방한 목록이 아니라, 앞의 내용에서 끌어낸 나의 해석이라는 점을 밝혀 둔다.",
    },
    {
      type: "p",
      text: "하나, 확인의 분량을 정한다. 경계 감소 연구가 보여 주듯 오래 볼수록 눈은 무뎌진다. 그렇다면 한 번에 오래 보는 방식보다 짧게 끊어 보는 방식이 낫다. 긴 문서라면 구간을 나누고, 구간마다 무엇을 볼지 미리 적어 둔다. ‘전체를 꼼꼼히 읽는다’는 목표는 성실해 보이지만 시간이 지날수록 지켜지지 않는 약속이 되기 쉽다.",
    },
    {
      type: "p",
      text: "둘, 일부러 틈을 만든다. 매크워스가 발견한 방해와 휴식의 효과를 떠올리면, 확인 중간의 쉼은 낭비가 아니라 정확도의 일부다. 같은 맥락에서 피드백도 중요하다. 내가 놓친 것이 무엇이었는지 나중에라도 알 수 있는 구조가 있어야 확인하는 눈이 조정된다. 놓친 오류가 아무 기록도 남기지 않고 사라지는 환경에서는 검토가 점점 형식이 된다.",
    },
    {
      type: "p",
      text: "셋, 직접 해 보는 기회를 남겨 둔다. 베인브리지의 아이러니는 연습 없는 숙련은 없다는 이야기이기도 하다. 자동화가 모든 반복을 가져가면 사람은 개입해야 할 순간에 감을 잃는다. 그래서 일부 작업은 일부러 손으로 해 보는 편이 좋다. 효율을 조금 포기하는 대신, 결과물이 이상할 때 이상하다고 말할 수 있는 감각을 유지하는 셈이다.",
    },
    {
      type: "p",
      text: "넷, 확인할 항목을 눈에 보이게 만든다. 숫자, 날짜, 고유명사, 인용, 링크처럼 틀리면 곤란한 것들을 따로 뽑아 두고 하나씩 대조한다. 매끄러운 문장은 눈을 미끄러지게 한다. 항목 단위로 쪼개 놓으면 문장의 유창함에 기대지 않고 사실만 볼 수 있다. 기계가 쓴 글이든 사람이 쓴 글이든 마찬가지다.",
    },
    {
      type: "p",
      text: "다섯, 틀릴 수 있다는 전제를 도구 밖에 적어 둔다. 도구가 얼마나 정확한지는 도구의 문제이고, 어디까지를 사람이 책임지는지는 조직과 개인의 문제다. 승인 버튼을 누르는 사람이 무엇을 확인했다는 뜻으로 누르는지 분명하지 않으면, 모두가 서로를 믿는 사이에 아무도 확인하지 않는 상황이 벌어진다.",
    },
    { type: "motto", text: "— 도구가 빨라질수록, 읽는 속도가 일의 속도가 된다. —" },
    { type: "h", text: "지켜보는 일의 품위" },
    {
      type: "p",
      text: "지켜보는 일은 화려하지 않다. 잘하면 아무 일도 일어나지 않고, 못하면 나중에 큰일이 된다. 성과가 눈에 보이지 않는 일이라 쉽게 낮게 평가된다. 그래서 일을 나눌 때도 만드는 쪽에 사람과 시간을 몰아 주고, 확인하는 쪽에는 남는 자투리를 배정하기 쉽다.",
    },
    {
      type: "p",
      text: "하지만 자동화가 깊어질수록 저울은 반대쪽으로 기운다. 만드는 일은 점점 싸지고, 확인하는 일은 상대적으로 비싸진다. 만드는 비용이 내려가면 만들어지는 양이 늘고, 그만큼 확인해야 할 양도 는다. 베인브리지가 40년 넘게 전에 쓴 문장이 오늘 더 잘 들어맞는 이유가 여기에 있다고 나는 생각한다.",
    },
    {
      type: "p",
      text: "그러니 지켜보는 일을 존중하는 방식은 생각보다 구체적이다. 확인에 시간을 배정한다. 확인하는 사람이 지치지 않도록 분량과 쉬는 틈을 계획한다. 놓친 것을 되짚을 통로를 남긴다. 그리고 승인이라는 행위가 단순한 클릭이 아니라 책임의 표시라는 것을 일하는 방식 안에 새겨 둔다.",
    },
    {
      type: "p",
      text: "자동화는 손의 일을 가져간다. 그 대신 눈과 판단의 일이 남는다. 남은 일을 하찮게 여기지 않는 것, 그것이 어쩌면 기계와 함께 일하는 사람이 가질 수 있는 가장 오래된 기술일지 모른다. 1948년의 시계와 1983년의 논문이 우리에게 말해 주는 것도 그 정도다. 지켜보는 일은 결코 쉬운 일이 아니고, 그래서 설계할 가치가 있다.",
    },
  ],
  sources: [
    {
      label: "Bainbridge, L. (1983). Ironies of automation. Automatica, 19(6), 775–779.",
      href: "https://doi.org/10.1016/0005-1098(83)90046-8",
    },
    {
      label: "Parasuraman, R., & Manzey, D. H. (2010). Complacency and bias in human use of automation: An attentional integration. Human Factors, 52(3), 381–410.",
      href: "https://doi.org/10.1177/0018720810376055",
    },
    {
      label: "Mackworth, N. H. (1948). The breakdown of vigilance during prolonged visual search. Quarterly Journal of Experimental Psychology, 1, 6–21.",
      href: "https://www.psytoolkit.org/experiment-library/mackworth.html",
    },
    {
      label: "The vigilance decrement: its first 75 years. Frontiers in Cognition (2025).",
      href: "https://www.frontiersin.org/journals/cognition/articles/10.3389/fcogn.2025.1632885/full",
    },
  ],
};

export const watchingEssayEn: IdeasEssay = {
  id: "what-is-left-is-watching",
  date: "September 2026",
  category: "Essay",
  title: "What Is Left Is Watching",
  subtitle: "지켜보는 일이 남는다",
  summary:
    "When automation takes over the work of the hands, the work of watching stays with people. A look at a 1983 paper and a 1948 experiment, and at how checking might be designed as real work.",
  blocks: [
    {
      type: "p",
      text: "It is easy to assume that once a tool does the work, the person gets some rest. The hands are free, the story goes, so what remains is judgment and creativity. Automation research has been telling a different story for decades. The work does not disappear. It changes shape, from doing the task to watching it get done.",
    },
    {
      type: "p",
      text: "This essay is about that change. Generative tools can now produce a first draft in seconds, and the bottleneck has moved from writing speed to reading speed. Who makes something fastest matters less than who examines it properly. I will not pretend to tell this through personal anecdotes. Instead I want to lean on a few older papers and follow, step by step, why watching is hard.",
    },
    {
      type: "figure",
      src: IMG_ONE,
      alt: "A person seen from behind in a dark room late at night, looking at several quiet monitoring screens, with a cold cup of tea and a notepad on the desk.",
      caption: "Generated image. Not a record of any real site or project.",
      width: 1440,
      height: 960,
    },
    { type: "h", text: "What remains where the work used to be" },
    {
      type: "p",
      text: "In 1983 Lisanne Bainbridge published a short paper in the journal Automatica called “Ironies of Automation.” Its question is plain. When an industrial process is automated, do the problems of the human operator shrink, or do they take another form? Her answer leaned toward the second. Automation can expand the human problems it was meant to remove.",
    },
    {
      type: "p",
      text: "The logic goes like this. Designers see the person as a source of error and try to take them out of the loop. Whatever they cannot automate is left to the person: the exception, the moment the machine stops, the fault nobody has seen before. Most of the time the machine does everything, so the operator has nothing to practice on. Then they are called in for the hardest moments only. Practice has vanished while the required skill has gone up. That structure is what the paper calls ironic.",
    },
    {
      type: "p",
      text: "Then there is the weight of watching itself. Staring at a screen where nothing happens, while staying ready to catch the one odd signal, is more draining than it sounds. Bainbridge concluded that as automation advances, operators need more training, not less, because the interventions are rare and decisive.",
    },
    {
      type: "p",
      text: "The paper was written about process-control rooms, but it maps onto today's offices with only small edits. A tool drafts the report, a tool writes the summary, a tool proposes the first version of the code. A person skims the result and signs off. The writing hand rests while the reading eye gets busier. And the reading eye tires far more easily than the writing hand.",
    },
    { type: "h", text: "The number thirty minutes" },
    {
      type: "p",
      text: "Why watching is so hard becomes clearer if we go back to 1948. The British psychologist Norman Mackworth built a clock task to study the vigilance of radar operators. A clock hand ticks forward one step at a time and, very occasionally, jumps two. The participant only has to notice the double jump. It is a simple task, and the participants worked hard at it.",
    },
    {
      type: "p",
      text: "The result was clear. After roughly half an hour, missed jumps rose noticeably. The effect became known as the vigilance decrement, and it has been confirmed and argued over for decades since. A 2025 review of its first 75 years credits Mackworth's 1948 paper as the usual starting point for the experimental analysis of the decrement. Researchers still disagree about the mechanism. The broad pattern has held: the longer people watch, the more of the rare signals they miss.",
    },
    {
      type: "p",
      text: "One detail in that same review is especially interesting. Mackworth found that a salient interruption, such as a telephone call, or a half-hour break could reduce or even remove the decrement. So could feedback on performance. Urging participants to be more attentive had no effect. In other words, this is not something willpower fixes. A plea to concentrate is not a design. Breaks and feedback are materials a design can use.",
    },
    {
      type: "p",
      text: "Bainbridge noted the same experiments in her paper, in the sense that it is very hard for even a motivated person to keep effective visual attention on a source where little happens for much longer than half an hour. One caution is needed. Thirty minutes is a figure from particular tasks and conditions. It is not a law that applies to every kind of checking. What many studies share is the direction: watching something that is mostly normal for a long time dulls the watcher without any decision to be dull.",
    },
    {
      type: "figure",
      src: IMG_TWO,
      alt: "An early-morning desk by a window with a printed manuscript, a red pencil and a half-finished coffee, with one line on a page underlined.",
      caption: "Generated image. Not a record of any real site or project.",
      width: 1440,
      height: 960,
    },
    { type: "h", text: "When trust stands in for attention" },
    {
      type: "p",
      text: "The better automation works, the more another problem appears: trust begins to replace checking. In a 2010 review in Human Factors (volume 52, issue 3), Raja Parasuraman and Dietrich Manzey gave this two names, complacency and automation bias. The first is failing to monitor automation closely enough. The second is following an automated recommendation without critical review. Earlier work had treated the two separately, and the review tried to explain both through attention.",
    },
    {
      type: "p",
      text: "Two points from the review are worth carrying over. First, such errors are not a flaw of careless or lazy people. The authors see them as the outcome of an interaction among personal characteristics, the situation and the properties of the automated system. Second, attention sits in the middle of it. So the response has to come from designing where attention goes, not from a slogan that says be careful. The authors present their integrated model as a framework for design options in automated and decision-support systems.",
    },
    {
      type: "p",
      text: "Take an everyday case. Suppose a tool gives ten correct answers in a row. The eleventh answer will be doubted far less, and not because the person is foolish. Ten correct answers create a reasonable expectation about the next one. The trouble is that the expectation quietly wears down the effort of checking. The more accurate the tool, the rarer its errors, and the rarer the error, the less likely the eye is to catch it. It is the same shape as the vigilance decrement.",
    },
    { type: "h", text: "Designing the work of checking" },
    {
      type: "p",
      text: "So what can be done? Translating the papers into ways of working produces a few ideas. To be clear, this list is my own reading of the material above, not a prescription from the studies.",
    },
    {
      type: "p",
      text: "First, limit the amount. Vigilance research suggests that the longer we look, the duller the eye gets. Short, separate passes are then better than one long one. For a long document, split it into sections and write down in advance what to look for in each. The goal of reading everything carefully sounds diligent, but it tends to become a promise that erodes as the hours pass.",
    },
    {
      type: "p",
      text: "Second, build in gaps on purpose. Given what Mackworth found about interruptions and breaks, a pause in the middle of a review is part of accuracy, not a loss of time. Feedback belongs here too. If you can find out afterwards what you missed, the checking eye can adjust. Where a missed error disappears without a trace, review slowly turns into a formality.",
    },
    {
      type: "p",
      text: "Third, keep some chances to do the task by hand. Bainbridge's irony is also a statement that skill needs practice. If automation takes every repetition, people lose their feel exactly when they must step in. It can be worth doing some tasks manually. You give up a little efficiency and keep the sense that lets you say something looks wrong when it does.",
    },
    {
      type: "p",
      text: "Fourth, make the items to check visible. Pull out numbers, dates, proper names, quotations and links, the things that hurt if wrong, and compare them one by one. Smooth sentences make the eye slide. Broken into items, the text lets you look at the facts without leaning on its fluency. This holds whether a machine or a person wrote it.",
    },
    {
      type: "p",
      text: "Fifth, write down outside the tool that it can be wrong. How accurate a tool is belongs to the tool. How much a person is answerable for belongs to the organization and the individual. If it is unclear what the person pressing approve is actually confirming, everyone can end up trusting each other while nobody checks.",
    },
    { type: "motto", text: "— The faster the tools get, the more reading speed becomes the speed of the work. —" },
    { type: "h", text: "The dignity of watching" },
    {
      type: "p",
      text: "Watching is not glamorous. Done well, nothing happens. Done badly, something large happens later. Because the result is invisible, it is easy to rate it low. When work is divided, people and time flow toward the making side, and the checking side gets the leftover minutes.",
    },
    {
      type: "p",
      text: "But the deeper automation goes, the more the scale tips the other way. Making gets cheaper and checking gets relatively more expensive. When the cost of making falls, more gets made, and more must be checked. I think this is why a sentence Bainbridge wrote more than forty years ago fits better today than it did then.",
    },
    {
      type: "p",
      text: "So respecting the work of watching is more concrete than it sounds. Give checking its own time. Plan the amount and the pauses so the person checking does not wear out. Leave a way to trace what was missed. And build into the way of working the idea that approval is not just a click but a mark of responsibility.",
    },
    {
      type: "p",
      text: "Automation takes the work of the hands. What stays is the work of the eyes and of judgment. Not treating that remainder as minor may be the oldest skill a person working alongside machines can have. A clock from 1948 and a paper from 1983 say roughly that much. Watching is never easy, and that is why it is worth designing.",
    },
  ],
  sources: watchingEssayKo.sources,
};
