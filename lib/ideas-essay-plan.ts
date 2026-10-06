/**
 * Ideas essay: "꼼꼼히 짠 일정이 늘 늦는 이유" / "Why a Careful Schedule Still Runs Late"
 * 한영 독립 편집본. figure 블록의 src는 /public 아래 내부 경로.
 */
import type { IdeasEssay } from "./ideas-essay-watching";

const IMG_ONE = "/gallery/careful-plan/wall-planner.webp";
const IMG_TWO = "/gallery/careful-plan/archive-shelf.webp";

const sources = [
  {
    label: "Buehler, Griffin & Ross (1994), Exploring the “planning fallacy”, Journal of Personality and Social Psychology 67(3)",
    href: "https://doi.org/10.1037/0022-3514.67.3.366",
  },
  {
    label: "Flyvbjerg (2006), From Nobel Prize to Project Management: Getting Risks Right, Project Management Journal",
    href: "https://www.pmi.org/learning/library/nobel-project-management-reference-class-forecasting-8068",
  },
  {
    label: "Flyvbjerg (2008), Curbing Optimism Bias and Strategic Misrepresentation in Planning: Reference Class Forecasting in Practice, European Planning Studies 16(1)",
    href: "https://www.tandfonline.com/doi/abs/10.1080/09654310701747936",
  },
  {
    label: "Cantarelli (2026), Reference class forecasting: promises, problems, and a way forward, Production Planning & Control",
    href: "https://www.tandfonline.com/doi/full/10.1080/09537287.2025.2578708",
  },
];

export const carefulPlanEssayKo: IdeasEssay = {
  id: "careful-plan-runs-late",
  date: "2026. 10",
  category: "Essay",
  title: "꼼꼼히 짠 일정이 늘 늦는 이유",
  subtitle: "Why a Careful Schedule Still Runs Late",
  summary:
    "일정을 세세하게 짤수록 안심이 되지만, 그 안심이 예측을 빗나가게 만들기도 한다. 계획 오류(planning fallacy)를 다룬 연구와 참조 집단 예측을 따라, 새 일의 기간을 어떻게 말할지 생각해 본다.",
  blocks: [
    {
      type: "p",
      text: "일정표를 다 채우고 나면 기분이 좋아진다. 칸마다 할 일이 들어가고, 앞 칸이 끝나면 뒤 칸이 이어지고, 마지막 칸에는 마감 날짜가 놓인다. 빠진 데가 없어 보인다. 그런데 이 일정이 제날짜에 끝나는 일은 의외로 드물다. 계획을 허술하게 세워서 그런 것이 아니다. 오히려 꼼꼼하게 세웠기 때문에 틀리는 경우가 많다.",
    },
    {
      type: "p",
      text: "새로운 일을 맡을 때마다 이 일이 되풀이된다. 사내에 AI 도구를 들이는 일이든, 반복 업무를 자동화하는 일이든, 처음 해 보는 일일수록 일정은 더 낙관적으로 나온다. 이 글은 그 이유를 심리학과 프로젝트 관리의 연구 몇 편으로 따라가 본다. 내 경험을 근거로 삼지는 않고, 공개된 자료에서 확인되는 만큼만 말한다.",
    },
    {
      type: "figure",
      src: IMG_ONE,
      alt: "나무 책상 위 벽에 붙은 종이 일정판. 색깔 있는 종이 띠와 작은 메모지가 가지런히 붙어 있고 옆에 연필이 놓여 있다.",
      caption: "생성 이미지. 특정 장소나 실제 기록이 아닙니다.",
      width: 1440,
      height: 960,
    },
    { type: "h", text: "자기 일만 유독 짧게 본다" },
    {
      type: "p",
      text: "이 현상에는 이름이 있다. 계획 오류(planning fallacy)다. 사람이 앞으로 할 일의 비용, 기간, 위험을 실제보다 낮게 어림하고 이득은 실제보다 높게 어림하는 경향을 가리킨다. 대니얼 카너먼(Daniel Kahneman)과 아모스 트버스키(Amos Tversky)가 1979년에 쓴 예측 연구에서 이 생각의 뼈대가 나왔고, 이름은 이후 로발로(Lovallo)와 카너먼의 2003년 글에서 널리 쓰였다.",
    },
    {
      type: "p",
      text: "실험으로 이를 파고든 대표 논문은 1994년 로저 뷸러(Roger Buehler), 데일 그리핀(Dale Griffin), 마이클 로스(Michael Ross)의 「‘계획 오류’ 탐구」다. 《Journal of Personality and Social Psychology》에 실린 이 논문은 학부생 465명이 참여한 다섯 건의 연구를 묶었다. 학업 과제든 일상 과제든 참가자들의 완료 시간 예측은 지나치게 낙관적이었다. 눈여겨볼 대목은 두 가지다. 사람은 자기가 할 일은 짧게 보면서 남이 할 일은 그렇게 보지 않았다. 다섯 번째 연구에서 관찰자 역할을 맡은 참가자들은 오히려 남의 완료 시간을 실제보다 길게 어림했고, 과거 경험도 더 많이 끌어다 썼다.",
    },
    {
      type: "p",
      text: "그러니 낙관은 단순히 성격이 밝아서 생기는 문제가 아니다. 같은 사람도 남의 일정을 점검할 때는 꽤 현실적이다. 내 일정 앞에서만 시선이 달라진다.",
    },
    { type: "h", text: "시나리오를 그릴수록 과거가 지워진다" },
    {
      type: "p",
      text: "같은 논문에서 연구진은 참가자에게 예측하는 동안 떠오르는 생각을 소리 내어 말하게 했다. 사고 발화(think-aloud) 기록을 보니 참가자들은 주로 앞으로 일이 어떻게 흘러갈지에 대한 장면을 떠올리고 있었다. 이전에 비슷한 일이 얼마나 걸렸는지를 떠올린 경우는 드물었다. 계획을 세운다는 것은 장면을 이어 붙이는 작업이고, 그 장면에는 대개 순조롭게 흘러가는 길만 들어간다.",
    },
    {
      type: "p",
      text: "여기에 일정을 꼼꼼히 짜는 습관이 얹힌다. 일을 작은 단계로 쪼개 하나씩 어림하는 방식은 관리 도구가 권하는 정석이다. 그런데 이 방식은 내가 아는 단계만 일정에 올린다. 중간에 끼어들 승인 대기, 사양 변경, 다른 일의 급한 요청, 처음 써 보는 도구의 낯선 오류 같은 것은 칸이 없어 들어갈 자리가 없다. 칸이 촘촘할수록 계획은 완결된 것처럼 보이고, 완결돼 보일수록 빠진 것을 의심하기 어렵다. 이 대목은 연구가 직접 측정한 결과가 아니라, 위 논문의 발견에서 내가 읽어 낸 추론이다.",
    },
    {
      type: "p",
      text: "다행히 같은 논문에는 방향을 바꾸는 단서도 있다. 네 번째 연구에서 참가자들에게 과거의 비슷한 경험을 지금의 예측과 의식적으로 연결하게 했더니 낙관 편향이 사라졌다. 과거를 모르는 것이 아니라, 예측하는 순간 과거를 꺼내지 않는 것이 문제라는 뜻이다.",
    },
    { type: "h", text: "안에서 보는 눈, 밖에서 보는 눈" },
    {
      type: "p",
      text: "카너먼은 이 차이를 ‘안쪽 시각(inside view)’과 ‘바깥 시각(outside view)’으로 갈랐다. 안쪽 시각은 지금 맡은 일의 세부를 들여다보며 앞날을 그린다. 바깥 시각은 세부를 잠시 접어 두고 비슷한 일들이 실제로 어떻게 끝났는지를 본다. 벤트 플루비야(Bent Flyvbjerg)는 2006년 글에서 이 구분을 정리하며, 안쪽 시각으로 낸 예측이 보수적인 것조차 낙관적이었다는 점을 짚었다. 반대로 비슷한 일들의 결과를 분포로 놓고 지금의 일을 그 안에 배치하는 방식은 훨씬 정확했다고 소개한다.",
    },
    {
      type: "p",
      text: "이 방법에는 이름과 절차가 붙어 있다. 참조 집단 예측(reference class forecasting)이다. 먼저 비슷한 과거 사업들의 집단을 고르고, 그 집단에서 예측하려는 값의 분포를 만들고, 지금의 사업을 그 분포 안에 놓아 본다. 세 단계가 전부다. 이 절차의 핵심은 지금 일의 특수한 사정을 일부러 덜어 낸다는 데 있다. 이 일만은 다르다는 확신이 가장 강하게 작동하는 지점을 건너뛰는 셈이다.",
    },
    {
      type: "figure",
      src: IMG_TWO,
      alt: "창가 나무 선반에 줄지어 놓인 천 표지 장부와 두께가 제각각인 서류 상자들. 상자 하나가 반쯤 빠져나와 있고 등에는 글씨가 없다.",
      caption: "생성 이미지. 특정 장소나 실제 기록이 아닙니다.",
      width: 1440,
      height: 960,
    },
    { type: "h", text: "숫자로 옮기면 이렇게 된다" },
    {
      type: "p",
      text: "플루비야의 글에는 실제 적용 사례가 나온다. 2004년 10월 에든버러 트램 2호선 사업계획을 검토한 오브 아럽(Ove Arup)은 사업계획서의 기본 비용 2억 5,500만 파운드에 우발 비용과 낙관 편향 보정으로 6,400만 파운드, 곧 25%가 얹혀 있음을 확인했다. 총 3억 2,000만 파운드쯤이다. 그런 다음 영국 교통부(UK Department for Transport)의 낙관 편향 보정률을 적용해 계산했다. 예산 안에서 끝낼 확률을 80%로 잡으면 총 자본 비용은 4억 파운드(기본 비용의 1.57배, 보정률 57%)였고, 50%로 잡으면 3억 5,700만 파운드(보정률 40%)였다.",
    },
    {
      type: "p",
      text: "읽는 방법에 주의할 점이 있다. 이 보정률은 ‘이 정도 더 들 것이다’라는 단정이 아니라 ‘이 확률로 예산 안에 들려면 이만큼 잡아야 한다’는 표현이다. 얼마나 안전하게 가고 싶은지에 따라 숫자가 달라진다. 검토 보고서도 이 추정이 오히려 낮을 가능성이 있다고 밝혔다. 보정률은 의사결정 시점의 예산에 적용하도록 권고되는데, 이 사업은 아직 그 단계에도 이르지 못했고 위험이 더 크게 남아 있었기 때문이다. 같은 글에는 도시철도 사업이 80% 확신을 원하면 자본 비용에 57%를 얹는 예도 나온다. 3억 파운드로 시작한 예산이 5억 400만 파운드가 되고, 확신 수준이 50%면 4억 2,000만 파운드가 된다.",
    },
    {
      type: "p",
      text: "수치의 크기보다 형식이 중요하다. 이 방식은 한 개의 날짜를 내놓지 않고 확률이 붙은 범위를 내놓는다. 두 개의 숫자가 나란히 있으면 의사결정자는 질문을 바꿀 수밖에 없다. 언제 끝나느냐에서, 어느 정도 확률로 언제까지 끝나기를 원하느냐로 바뀐다.",
    },
    { type: "h", text: "이 방법에도 한계가 있다" },
    {
      type: "p",
      text: "참조 집단 예측이 만능이라는 이야기는 아니다. 2026년에 나온 칸타렐리(Cantarelli)의 검토 논문 제목이 「참조 집단 예측: 가능성, 문제점, 그리고 앞으로의 길」인 것도 이 방법의 약점이 따로 논의돼 왔기 때문이다. 이 글에서 그 논문의 세부 논점을 내 말로 옮기지는 않겠다. 다만 제목이 가리키는 점은 분명하다. 이 방법의 정확도는 어떤 사업들을 한 집단으로 묶었는지에 크게 기댄다.",
    },
    {
      type: "p",
      text: "AI 도입이나 업무 자동화 같은 일에 이를 그대로 옮기는 데에는 더 큰 어려움이 있다. 도구가 빠르게 바뀌고 회사마다 업무가 달라서, 비슷한 과거 사업을 모은 믿을 만한 집단이 아직 없을 수 있다. 이런 일에서 정량화된 보정률 표를 들고 나오는 것은 오히려 근거 없는 정밀함을 만들 위험이 있다. 위 연구들은 건설과 교통 사업, 그리고 학생들의 과제에서 나온 결과이므로, 이를 AI 도입 일정에 적용하는 것은 검증된 결론이 아니라 조심스러운 연장이다.",
    },
    { type: "h", text: "작게 해 볼 수 있는 일" },
    {
      type: "p",
      text: "그래도 가져다 쓸 만한 생각이 하나 있다. 뷸러 팀이 낙관 편향을 지운 방법은 거창하지 않았다. 예측하는 순간에 과거의 경험을 꺼내 놓게 한 것이다. 이를 일하는 방식으로 옮기면 이런 질문이 된다. 지난번에 비슷한 일은 실제로 얼마나 걸렸는가. 처음 계획과 끝난 날짜는 얼마나 달랐는가. 어떤 일이 끼어들어 어긋났는가. 기록이 남아 있지 않다면, 그 사실부터 하나의 결과다.",
    },
    {
      type: "p",
      text: "또 하나, 일정을 한 줄로 말하지 않고 범위로 말하는 습관이 있다. 빠르면 언제, 대체로 언제, 늦으면 언제처럼 세 개의 날짜를 나란히 적는 것이다. 이것이 통계적으로 검증된 방법이라고 주장할 수는 없다. 다만 위에서 본 연구가 보여 준 두 가지, 곧 내 일은 짧게 보인다는 점과 분포를 보면 예측이 나아진다는 점을 일상의 크기로 줄여 놓은 방식이다.",
    },
    {
      type: "p",
      text: "처음 해 보는 일일수록 칸을 하나 비워 두는 것도 방법이다. 무엇이 들어올지 모르는 칸이다. 이름을 붙이지 못한 위험에도 시간을 배정해 둔다는 뜻이다. 빈 칸은 계획이 허술하다는 표시가 아니라, 계획이 모든 것을 알지 못한다는 사실을 일정표에 적어 두는 일이다.",
    },
    {
      type: "p",
      text: "꼼꼼한 계획은 여전히 필요하다. 일을 쪼개고 순서를 잡아야 오늘 무엇을 할지 알 수 있다. 다만 그 계획이 언제 끝날지까지 알려 준다고 믿을 필요는 없다. 해야 할 일을 정하는 도구와 걸릴 시간을 가늠하는 도구는 다르다. 앞의 것은 안쪽에서 쓰고, 뒤의 것은 바깥에서 빌려 와야 한다.",
    },
  ],
  sources,
};

export const carefulPlanEssayEn: IdeasEssay = {
  id: "careful-plan-runs-late",
  date: "2026. 10",
  category: "Essay",
  title: "Why a Careful Schedule Still Runs Late",
  subtitle: "꼼꼼히 짠 일정이 늘 늦는 이유",
  summary:
    "The more detail we put into a schedule, the safer it feels, and that feeling can pull the forecast off course. Following research on the planning fallacy and on reference class forecasting, this essay asks how to talk about the duration of a new piece of work.",
  blocks: [
    {
      type: "p",
      text: "Filling in a schedule feels good. Every box has a task, each box hands off to the next, and the last one carries a deadline. Nothing looks missing. Yet such schedules rarely finish on the date they promise. The cause is not sloppy planning. Careful planning is often exactly what makes the forecast wrong.",
    },
    {
      type: "p",
      text: "It happens every time a new piece of work arrives. Bringing an AI tool into a company, automating a repetitive task: the less familiar the job, the more optimistic the schedule tends to be. This essay follows a handful of studies from psychology and project management to see why. It does not lean on personal experience. It says only what the published material supports.",
    },
    {
      type: "figure",
      src: IMG_ONE,
      alt: "A paper planner pinned to the wall above a wooden desk. Colored paper strips and small blank notes are lined up neatly, with a pencil resting nearby.",
      caption: "Generated image. Not a record of any real place.",
      width: 1440,
      height: 960,
    },
    { type: "h", text: "We shorten our own work, and only our own" },
    {
      type: "p",
      text: "The phenomenon has a name: the planning fallacy. It describes a tendency to underestimate the costs, durations and risks of planned actions while overestimating their benefits. The groundwork comes from Daniel Kahneman and Amos Tversky's 1979 papers on forecasting. The term itself was later popularized in a 2003 article by Lovallo and Kahneman.",
    },
    {
      type: "p",
      text: "The classic experimental paper is “Exploring the ‘planning fallacy’” by Roger Buehler, Dale Griffin and Michael Ross, published in 1994 in the Journal of Personality and Social Psychology. It combines five studies with 465 undergraduates in total. Predictions of completion time were too optimistic across a range of academic and nonacademic tasks. Two details stand out. People underestimated their own completion times but not other people's. In the fifth study, participants who acted as observers actually overestimated the time others would need, and they drew more on relevant past experience.",
    },
    {
      type: "p",
      text: "So the optimism is not simply a matter of sunny temperament. The same person is fairly realistic when checking someone else's schedule. The view changes only when the schedule is their own.",
    },
    { type: "h", text: "The more we picture the plan, the less we remember the past" },
    {
      type: "p",
      text: "In the same paper the researchers asked participants to think aloud while making predictions. The transcripts show that people mostly pictured how the work would unfold. Few recalled how long similar tasks had taken before. Making a plan means stringing scenes together, and the scenes usually contain only the smooth path.",
    },
    {
      type: "p",
      text: "Add the habit of planning carefully. Breaking work into small steps and estimating each one is standard advice from management tools. But the method only puts the steps we already know on the schedule. Waiting for approval, a changed specification, an urgent request from another project, an unfamiliar error from a tool used for the first time: none of these has a box, so none has a place. The denser the boxes, the more finished the plan looks, and the harder it is to suspect that something is missing. This reading is my own inference from the paper's findings. It was not measured directly.",
    },
    {
      type: "p",
      text: "The same paper also contains a hint at what can change direction. In the fourth study, participants who were told to connect relevant past experiences to their current prediction lost the optimistic bias. The problem, in other words, is not that people do not know their past. They do not pull it out at the moment they predict.",
    },
    { type: "h", text: "The view from inside, the view from outside" },
    {
      type: "p",
      text: "Kahneman separated the two stances as the inside view and the outside view. The inside view studies the details of the job at hand and pictures what comes next. The outside view sets the details aside and asks how similar jobs actually ended. In his 2006 article Bent Flyvbjerg lays out the distinction and notes that forecasts made from the inside were overly optimistic even when they were conservative. Placing the current job inside a distribution of outcomes from comparable jobs, by contrast, turned out much more accurate in the cases he describes.",
    },
    {
      type: "p",
      text: "The method has a name and a procedure: reference class forecasting. First choose a class of similar past projects. Then build a distribution of the quantity you want to forecast for that class. Finally, place the current project within that distribution. That is all. Its central move is to leave out the particulars of the present job on purpose, skipping the very place where the conviction that this one is different works hardest.",
    },
    {
      type: "figure",
      src: IMG_TWO,
      alt: "A wooden shelf by a window holding a row of cloth-bound ledgers and archive boxes of different thickness. One box is pulled partway out, and the spines carry no writing.",
      caption: "Generated image. Not a record of any real place.",
      width: 1440,
      height: 960,
    },
    { type: "h", text: "What it looks like in numbers" },
    {
      type: "p",
      text: "Flyvbjerg's article includes a practical case. In October 2004 Ove Arup reviewed the business case for Edinburgh Tram Line 2. The base cost was £255 million. On top of it sat £64 million, 25%, for contingency and optimism bias, bringing the total to about £320 million. Using the UK Department for Transport's optimism-bias uplifts, the review then calculated two figures. For an 80% chance of staying within budget, total capital cost came to £400 million, which is 1.57 times the base cost, or a 57% uplift. For a 50% chance, it came to £357 million, a 40% uplift.",
    },
    {
      type: "p",
      text: "A note on how to read this. An uplift is not a prediction that costs will rise by that much. It says how much to allow in order to have a given chance of staying within budget, so the number depends on how safe you want to be. The review itself said its estimate was probably on the low side. The uplifts are meant to be applied to the budget at the time of the decision to build, and this project had not yet reached that stage, so more risk remained. The same article gives another example. A metro rail project that wants 80% certainty adds 57% to capital costs, so a £300 million budget becomes £504 million. At 50% certainty it becomes £420 million.",
    },
    {
      type: "p",
      text: "The format matters more than the size of the numbers. The method does not produce a single date. It produces a range with probabilities attached. When two numbers sit side by side, the decision-maker has to change the question, from when it will finish to how likely a given finish date has to be.",
    },
    { type: "h", text: "The method has limits too" },
    {
      type: "p",
      text: "None of this makes reference class forecasting a cure-all. A 2026 review by Cantarelli is titled “Reference class forecasting: promises, problems, and a way forward,” which tells us its weaknesses are a subject of their own. I will not restate that paper's detailed arguments here. The title does point to one thing: the accuracy of the method depends heavily on which projects are grouped into the class.",
    },
    {
      type: "p",
      text: "Carrying it over to work like AI adoption or process automation is harder still. Tools change quickly and every company's tasks differ, so there may not yet be a trustworthy class of comparable past projects. Bringing out a table of precise uplifts in that setting risks creating precision with nothing behind it. The studies above come from construction and transport projects and from student assignments, so applying them to AI rollout schedules is a cautious extension, not a verified conclusion.",
    },
    { type: "h", text: "Small things worth trying" },
    {
      type: "p",
      text: "One idea is still worth borrowing. The way Buehler's team removed the optimistic bias was modest. They made people bring up past experience at the moment of prediction. Translated into working habits, that becomes a few questions. How long did a similar job actually take last time? How far apart were the first plan and the finish date? What came up and knocked it off course? If no record exists, that absence is itself a result.",
    },
    {
      type: "p",
      text: "Another habit is to state a schedule as a range instead of a single line: the earliest date, the usual date, the late date, written side by side. I cannot claim this is a statistically validated method. It shrinks two findings from above to everyday size: our own work looks shorter than it is, and looking at a distribution improves forecasts.",
    },
    {
      type: "p",
      text: "For a job you have never done, it can also help to leave one box empty. It stands for whatever you cannot yet name, and it gives time to risks that have no label. An empty box does not mean the plan is sloppy. It records on the schedule that the plan does not know everything.",
    },
    {
      type: "p",
      text: "A careful plan is still needed. Splitting work and ordering it is how you know what to do today. You just do not have to believe that the same plan also says when it will end. The tool for deciding what to do and the tool for estimating how long it takes are different tools. Use the first from the inside, and borrow the second from the outside.",
    },
  ],
  sources,
};
