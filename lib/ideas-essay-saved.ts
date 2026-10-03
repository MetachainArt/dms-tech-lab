/**
 * Ideas essay: "적어 두었으니 잊어도 된다는 말" / "Saved, So Safe to Forget?"
 * 한영 독립 편집본. figure 블록의 src는 /public 아래 내부 경로.
 */
import type { IdeasEssay } from "./ideas-essay-watching";

const IMG_ONE = "/gallery/saved-memory/notes-window.webp";
const IMG_TWO = "/gallery/saved-memory/index-cards.webp";

const sources = (ko: boolean) => [
  {
    label: ko
      ? "Sparrow, Liu & Wegner (2011), Google Effects on Memory, Science 333(6043)"
      : "Sparrow, Liu & Wegner (2011), Google Effects on Memory, Science 333(6043)",
    href: "https://www.science.org/doi/10.1126/science.1207745",
  },
  {
    label: "Storm & Stone (2015), Saving-Enhanced Memory, Psychological Science 26(2)",
    href: "https://journals.sagepub.com/doi/10.1177/0956797614559285",
  },
  {
    label: "Risko & Gilbert (2016), Cognitive Offloading, Trends in Cognitive Sciences 20(9)",
    href: "https://doi.org/10.1016/j.tics.2016.07.002",
  },
  {
    label: "Camerer et al. (2018), Evaluating the replicability of social science experiments in Nature and Science, Nature Human Behaviour",
    href: "https://www.nature.com/articles/s41562-018-0399-z",
  },
];

export const savedMemoryEssayKo: IdeasEssay = {
  id: "saved-so-safe-to-forget",
  date: "2026. 10",
  category: "Essay",
  title: "적어 두었으니 잊어도 된다는 말",
  subtitle: "Saved, So Safe to Forget?",
  summary:
    "메모하고 나면 마음이 놓인다. 기억을 바깥에 맡기는 일에는 대가도 있고 이득도 있다. 구글 효과 논문과 그 뒤의 연구를 따라, 무엇을 맡기고 무엇을 쥐고 있을지 생각해 본다.",
  blocks: [
    {
      type: "p",
      text: "메모를 하고 나면 마음이 놓인다. 약속 시간을 달력에 넣고, 비밀번호를 관리 앱에 맡기고, 회의에서 나온 이야기를 녹음해 두면 머릿속 한구석이 비워진 느낌이 든다. 이 홀가분함을 게으름이라고 부르기는 어렵다. 사람은 오래전부터 기억을 바깥에 맡겨 왔다. 점토판과 매듭 끈, 장부와 수첩이 그랬고, 지금은 휴대전화와 클라우드 문서가 그렇다.",
    },
    {
      type: "p",
      text: "요즘 이 오래된 습관에 새 질문이 붙었다. 물으면 몇 초 만에 정리된 답을 내놓는 도구가 생겼기 때문이다. 맡기는 대상이 기억에서 생각의 일부로 넓어지는 것처럼 보이기 시작했다. 이 글은 그 걱정을 반쯤만 받아들인다. 맡기는 일에는 실제로 대가가 있고, 실제로 이득도 있다. 둘을 가른 연구 몇 편을 따라가며 무엇을 맡기고 무엇을 쥐고 있을지 생각해 보려 한다. 내 경험담으로 풀지는 않고, 공개된 논문에 기대어 간다.",
    },
    {
      type: "figure",
      src: IMG_ONE,
      alt: "창가 나무 책상 위에 펼쳐진 수첩과 연필, 반쯤 마신 찻잔. 창밖에는 흐린 아침 빛이 들어온다.",
      caption: "생성 이미지. 특정 장소나 실제 기록이 아닙니다.",
      width: 1440,
      height: 960,
    },
    { type: "h", text: "찾을 수 있다는 기대가 남긴 것" },
    {
      type: "p",
      text: "2011년 베치 스패로(Betsy Sparrow), 제니 리우(Jenny Liu), 대니얼 웨그너(Daniel Wegner)는 《Science》에 「구글이 기억에 미치는 효과(Google Effects on Memory)」라는 논문을 실었다. 네 건의 연구를 묶은 이 논문의 요지는 이렇다. 어려운 질문을 받으면 사람은 컴퓨터를 먼저 떠올린다. 그리고 나중에 정보를 다시 찾을 수 있다고 기대하면 정보 자체는 덜 기억하고, 대신 어디에서 찾을 수 있는지를 더 잘 기억한다.",
    },
    {
      type: "p",
      text: "웨그너는 이미 1980년대에 가까운 사이에서 서로가 서로의 기억 창고 노릇을 나눠 갖는 현상을 ‘교류 기억(transactive memory)’이라는 이름으로 설명한 심리학자다. 부부 중 한 사람은 가족 일정을 기억하고 다른 사람은 세금과 수리 기록을 기억하는 식이다. 논문은 인터넷이 그런 창고의 하나가 되었다고 본다. 사람에게 맡기던 기억을 이제는 검색창에도 맡긴다는 것이다.",
    },
    {
      type: "p",
      text: "이 결과는 ‘구글 효과’라는 이름으로 널리 퍼졌고, 인터넷이 기억을 망친다는 말의 근거로 자주 불려 나왔다. 다만 뒷이야기도 함께 알아 두는 편이 좋다. 이후 몇몇 연구가 이 결과에 의문을 제기했고, 2018년 카머러(Camerer) 등이 《Nature》와 《Science》에 실린 사회과학 실험 21건을 다시 돌린 재현 프로젝트도 그 논의에서 자주 인용된다. 그 프로젝트 전체에서는 21건 중 13건이 원래와 같은 방향의 유의한 효과를 보였고, 평균 효과 크기는 원래의 절반쯤이었다. 개별 연구 하나의 판정은 따로 확인해야 하지만, 한 편의 인상적인 실험에 큰 결론을 얹지 않는 편이 안전하다는 점은 분명하다.",
    },
    {
      type: "p",
      text: "그러니 이 논문에서 가져갈 것은 인터넷이 기억을 망가뜨린다는 단정이 아니다. 다시 찾을 수 있다는 기대가 무엇을 붙들고 무엇을 흘려보낼지에 영향을 줄 수 있다는 가능성, 그리고 그때 사람이 ‘내용’ 대신 ‘위치’를 기억하게 될 수 있다는 가능성 정도다. 이 정도로 줄여 읽어도 생각할 거리는 충분히 남는다.",
    },
    {
      type: "p",
      text: "논문이 보고한 실험 하나를 떠올려 보면 이 말의 크기가 가늠된다. 참가자들이 짧은 사실 문장을 컴퓨터에 입력했는데, 입력한 내용이 저장된다고 들은 쪽보다 지워진다고 들은 쪽이 그 내용을 더 잘 기억했다. 어차피 남는다고 믿을 때 머리가 힘을 덜 쓴다는 해석이다. 그래서 이 효과는 기억력이 나빠졌다는 이야기라기보다, 사람이 남아 있을 것을 알고 있을 때 기억 자원을 어디에 쓸지 조절한다는 이야기에 가깝다.",
    },
    { type: "h", text: "저장했더니 더 잘 기억한 경우" },
    {
      type: "p",
      text: "같은 주제에서 방향이 반대인 결과도 있다. 2015년 벤저민 스톰(Benjamin Storm)과 션 스톤(Sean Stone)은 《Psychological Science》에 세 건의 실험을 보고했다. 참가자가 파일 하나를 저장한 뒤 새 파일을 공부하면, 저장하지 않았을 때보다 새 파일의 내용을 더 잘 기억했다. 저장이 머릿속에서 지금 필요 없는 내용을 치워 주었고, 그만큼 새로 배우는 내용이 덜 방해받았다는 해석이다.",
    },
    {
      type: "p",
      text: "이 논문에서 눈여겨볼 대목은 조건이다. 저장 과정을 믿을 수 없다고 여길 때는 효과가 나타나지 않았다. 저장하는 내용이 새 파일을 방해할 만큼 실질적이지 않을 때도 마찬가지였다. 그러니 이 결과를 아무 메모나 아무 때나 도움이 된다는 말로 읽으면 곤란하다. 믿을 만한 저장소가 있고, 맡기는 내용이 실제로 머리를 차지할 만큼 무거울 때 이득이 생긴다. 조건이 붙은 이득이다.",
    },
    { type: "h", text: "맡기는 일에는 이름이 있다" },
    {
      type: "p",
      text: "2016년 에반 리스코(Evan Risko)와 새뮤얼 길버트(Sam Gilbert)는 《Trends in Cognitive Sciences》에 이런 현상을 ‘인지적 오프로딩(cognitive offloading)’이라는 이름으로 정리한 개관 논문을 냈다. 손가락으로 수를 세는 일, 장보기 목록을 쓰는 일, 길을 지도 앱에 묻는 일이 모두 여기에 들어간다. 머릿속에서 처리하던 부담을 몸이나 도구로 옮기는 행동 전반을 가리키는 말이다.",
    },
    {
      type: "p",
      text: "이 틀의 쓸모는 맡기는 행동을 좋거나 나쁜 습관으로 나누지 않고 거래로 보게 해 준다는 데 있다. 맡기면 당장의 부담이 줄고, 대신 맡긴 내용은 덜 기억하거나 저장소가 사라졌을 때 곤란해질 수 있다. 앞의 두 연구는 이 거래의 양쪽 면을 각각 보여 준다. 스패로 팀은 대가를, 스톰과 스톤은 이득을 보았다. 둘은 서로를 반박한다기보다 같은 거래의 다른 면에 가깝다.",
    },
    {
      type: "figure",
      src: IMG_TWO,
      alt: "나무 탁자 위에 가지런히 세워진 색인 카드 상자와 흩어진 손글씨 카드 몇 장. 카드의 글씨는 읽을 수 없다.",
      caption: "생성 이미지. 특정 장소나 실제 기록이 아닙니다.",
      width: 1440,
      height: 960,
    },
    { type: "h", text: "도구가 사실에서 과정으로 넓어질 때" },
    {
      type: "p",
      text: "검색은 대체로 사실이 어디에 있는지를 알려 준다. 요약하고 비교하고 초안을 쓰는 도구는 한 걸음 더 간다. 사실을 찾는 일이 아니라 읽고 정리하는 과정을 맡는다. 맡기는 대상이 ‘무엇’에서 ‘어떻게’로 넓어지는 셈이다. 위의 연구들은 주로 사실과 파일의 저장을 다뤘다. 생성형 도구에 일을 맡길 때 같은 결과가 나온다고 말할 근거는 여기에 없다. 이 점은 모른다고 적어 두는 것이 맞다.",
    },
    {
      type: "p",
      text: "대신 앞의 연구들이 건넨 조건을 질문으로 바꿔 볼 수는 있다. 맡기기 전에 던져 볼 만한 질문은 이런 것들이다. 이 저장소는 필요할 때 믿고 다시 열 수 있는가. 맡긴 뒤에도 그것이 어디에 있는지 내가 알고 있는가. 맡긴 내용이 나중에 내가 판단할 때 쓸 재료인가, 아니면 판단과 무관한 짐인가.",
    },
    {
      type: "p",
      text: "마지막 질문이 특히 중요하다고 본다. 비밀번호나 약속 시간은 맡겨도 판단을 잃을 일이 거의 없다. 반대로 어떤 계약서의 어느 조항이 위험한지, 이 숫자가 왜 지난달과 다른지는 맡긴 뒤에 내가 검토할 수 있어야 하는 내용이다. 요약본만 남기고 원문을 보지 않는 습관이 이어지면, 요약이 틀렸을 때 그 사실을 알아챌 사람이 없어진다. 이것은 연구 결과가 아니라 연구의 조건을 일에 옮겨 본 추론이다.",
    },
    { type: "h", text: "맡긴 것의 목록을 쥐고 있기" },
    {
      type: "p",
      text: "실천으로 옮기면 의외로 소박하다. 무엇을 맡겼는지 목록을 갖고 있으면 된다. 스패로 팀이 발견한 것이 ‘내용 대신 위치’였다면, 위치만큼은 확실히 알고 있자는 이야기다. 어느 문서에 어떤 내용이 있는지, 그 문서는 누가 고치는지, 사라지면 어떻게 복구하는지를 적어 두면 맡긴 기억은 길을 잃지 않는다.",
    },
    {
      type: "p",
      text: "무엇을 맡기고 무엇을 쥘지는 일에 따라 다르겠지만, 나눠 보는 출발점은 있다. 일정, 계정 정보, 참고 링크, 지난 회의의 결정 사항처럼 필요할 때 정확히 다시 보면 되는 것은 맡기기 좋다. 반대로 그 결정을 왜 그렇게 했는지, 어떤 기준으로 두 안 중 하나를 골랐는지, 어디까지가 확인된 사실이고 어디부터가 추측인지는 내가 쥐고 있어야 한다. 기록은 결과를 남기고, 판단의 이유는 대개 사람의 머릿속에 남기 때문이다. 이 구분도 연구가 증명한 것이 아니라 앞의 조건을 일에 옮긴 제안이다.",
    },
    {
      type: "p",
      text: "여럿이 일할 때는 이 목록이 더 중요해진다. 웨그너가 말한 교류 기억은 누가 무엇을 아는지 서로 알고 있을 때 잘 돌아간다. 문서와 도구에 일을 맡긴 팀에서도 같은 원리가 적용된다고 생각해 볼 수 있다. 어떤 문서가 최신인지, 어떤 자동화가 무엇을 하는지, 그것을 아는 사람이 누구인지가 팀 안에 퍼져 있어야 한다. 그 지도가 없으면 맡긴 기억은 있어도 아무도 찾지 못하는 기억이 된다.",
    },
    {
      type: "p",
      text: "여기에 한 가지를 더하면 좋다. 가끔 맡긴 내용을 일부러 다시 꺼내 보는 일이다. 저장소가 실제로 열리는지, 내용이 아직 맞는지, 내가 그 내용을 설명할 수 있는지 확인한다. 전부 외울 필요는 없다. 다만 핵심 몇 개는 설명할 수 있는 상태를 유지한다. 설명할 수 없는 것은 넘길 수도 없다는 앞선 글의 이야기와도 이어지는 대목이다.",
    },
    {
      type: "p",
      text: "기억을 바깥에 두는 일은 사람이 늘 해 온 일이고, 앞으로도 계속할 일이다. 문제는 맡긴다는 사실이 아니라 맡긴 것을 잊어버리는 데 있을지 모른다. 맡긴 목록을 갖고, 가끔 열어 보고, 판단에 쓸 재료는 내가 읽는다. 이 정도면 적어 두었으니 잊어도 된다는 말은 꽤 믿을 만한 말이 된다.",
    },
  ],
  sources: sources(true),
};

export const savedMemoryEssayEn: IdeasEssay = {
  id: "saved-so-safe-to-forget",
  date: "2026. 10",
  category: "Essay",
  title: "Saved, So Safe to Forget?",
  subtitle: "적어 두었으니 잊어도 된다는 말",
  summary:
    "Writing something down brings relief. Handing memory to the outside world has a cost and a benefit. Following the 'Google effect' paper and the research after it, this essay asks what to hand over and what to keep.",
  blocks: [
    {
      type: "p",
      text: "Writing something down brings relief. You put the appointment in the calendar, hand the password to a manager app, record what was said in the meeting, and a corner of your head seems to clear. It is hard to call that lightness laziness. People have stored memory outside themselves for a very long time: clay tablets, knotted cords, ledgers, pocket notebooks, and now phones and cloud documents.",
    },
    {
      type: "p",
      text: "Lately the old habit has picked up a new question. There are tools that answer in seconds with something already organized. What we hand over seems to be widening from memory to a piece of thinking itself. This essay accepts that worry only halfway. Handing things over has a real cost and a real benefit. I want to follow a few studies that separate the two and ask what to hand over and what to keep. I will not tell it as a personal story. I will lean on published papers.",
    },
    {
      type: "figure",
      src: IMG_ONE,
      alt: "An open notebook and pencil on a wooden desk by a window, with a half-finished cup of tea and soft overcast morning light.",
      caption: "Generated image. Not a record of any real place.",
      width: 1440,
      height: 960,
    },
    { type: "h", text: "What the expectation of finding it again leaves behind" },
    {
      type: "p",
      text: "In 2011 Betsy Sparrow, Jenny Liu and Daniel Wegner published “Google Effects on Memory” in Science. Across four studies, the paper reports two things. When people face difficult questions, they are primed to think about computers. And when people expect to have future access to information, they recall the information itself less well and recall where to find it better.",
    },
    {
      type: "p",
      text: "Wegner was already known for describing, in the 1980s, how close partners share the work of remembering, a pattern he called transactive memory. One partner keeps the family calendar and the other keeps track of taxes and repairs. The paper argues that the internet has become one more store of this kind. We used to lean on other people for memory. Now we lean on a search box too.",
    },
    {
      type: "p",
      text: "The finding spread as the “Google effect,” and it is often cited as proof that the internet is ruining memory. The later story deserves equal attention. Several subsequent studies questioned the result, and the 2018 replication project by Camerer and colleagues, which re-ran 21 social-science experiments from Nature and Science, is often cited in that discussion. Across that whole project, 13 of the 21 studies showed a significant effect in the same direction as the original, and the average effect size was about half the original. How any single study fared needs checking on its own, but the broader lesson is clear: one striking experiment should not carry a large conclusion.",
    },
    {
      type: "p",
      text: "So what should we take from the paper? Not a flat claim that the internet damages memory. A smaller possibility is enough: expecting to find something again may shape what we hold and what we let go, and we may end up remembering the location instead of the content. Even read that modestly, it leaves plenty to think about.",
    },
    {
      type: "p",
      text: "One experiment in the paper shows the scale of the claim. Participants typed short factual statements into a computer, and those told the statements would be erased remembered them better than those told they would be saved. The reading is that the head spends less effort when it believes the material will stay available. So the effect is less a story about memory getting worse than about people adjusting where to spend their memory when they know something will remain.",
    },
    { type: "h", text: "When saving made remembering better" },
    {
      type: "p",
      text: "On the same topic there is a result that points the other way. In 2015 Benjamin Storm and Sean Stone reported three experiments in Psychological Science. When participants saved one file before studying a new one, they remembered the new file better than when they had not saved. Their reading is that saving cleared out content that was not needed at that moment, so the new material suffered less interference.",
    },
    {
      type: "p",
      text: "The conditions in that paper matter. The effect did not appear when people judged the saving process unreliable. It also did not appear when the saved content was not substantial enough to interfere with the new file. So the result does not say that any note helps at any time. The benefit shows up when there is a store you trust and the thing you hand over is heavy enough to occupy your head. It is a benefit with conditions attached.",
    },
    { type: "h", text: "Handing things over has a name" },
    {
      type: "p",
      text: "In 2016 Evan Risko and Sam Gilbert published a review in Trends in Cognitive Sciences that gathers these behaviors under the name cognitive offloading. Counting on your fingers, writing a shopping list and asking a map app for the route all fit. The term covers any action that moves some of the processing load from the head to the body or a tool.",
    },
    {
      type: "p",
      text: "The usefulness of the frame is that it treats handing over as a trade, not as a good or bad habit. Offloading lowers the load right now. In exchange you may remember the offloaded material less well, or be stuck if the store disappears. The two studies above each show one side of that trade. Sparrow's team saw a cost, and Storm and Stone saw a benefit. They read less as rivals than as two views of the same exchange.",
    },
    {
      type: "figure",
      src: IMG_TWO,
      alt: "A box of index cards standing neatly on a wooden table with a few handwritten cards scattered beside it. The writing is not legible.",
      caption: "Generated image. Not a record of any real place.",
      width: 1440,
      height: 960,
    },
    { type: "h", text: "When the tool moves from facts to process" },
    {
      type: "p",
      text: "Search mostly tells you where a fact lives. Tools that summarize, compare and draft go a step further. They take over the reading and organizing, not just the finding. What we hand over moves from what to how. The studies above mostly dealt with storing facts and files. Nothing in them supports saying the same results hold when we hand work to generative tools. It is more honest to say we do not know.",
    },
    {
      type: "p",
      text: "What we can do is turn the conditions those studies offer into questions. Before handing something over, ask a few. Can I open this store and trust it when I need it? After handing it over, do I still know where it is? Is the thing I am handing over material I will need for a later judgment, or is it a weight that has nothing to do with judgment?",
    },
    {
      type: "p",
      text: "The last question seems the most important. A password or an appointment time can be handed over with little risk to judgment. Which clause of a contract is risky, or why this figure differs from last month, is different. That is material you should still be able to check after handing it over. If the habit becomes keeping only the summary and never looking at the source, then when the summary is wrong, nobody is left to notice. This is not a research finding. It is an inference from carrying the studies' conditions over to work.",
    },
    { type: "h", text: "Keeping the list of what you handed over" },
    {
      type: "p",
      text: "In practice it is modest. Keep a list of what you have handed over. If Sparrow's team found location in place of content, then at least be sure of the location. Write down which document holds which content, who edits it, and how it is recovered if it disappears. Then the memory you handed over does not get lost.",
    },
    {
      type: "p",
      text: "What to hand over and what to keep will depend on the work, but there is a place to start. Things you only need to see again accurately, such as schedules, account details, reference links and the decisions made in a past meeting, are good to hand over. Why a decision went the way it did, which standard picked one of two options, and where confirmed fact ends and guesswork begins should stay with you. A record keeps the outcome, and the reasons for a judgment usually stay in a person's head. This split is also not something the studies proved. It is a proposal that carries their conditions over to work.",
    },
    {
      type: "p",
      text: "The list matters more when several people work together. Transactive memory, as Wegner described it, runs well when people know who knows what. It seems reasonable to think the same applies to a team that has handed work to documents and tools. Which document is current, what each automation does, and who understands it should be spread through the team. Without that map, you have memory that exists and that nobody can find.",
    },
    {
      type: "p",
      text: "One more habit helps: now and then, deliberately take something back out. Check that the store still opens, that the content is still right, and that you can explain it. You do not need to memorize everything. Keep a handful of core items in a state where you could explain them. That connects to the earlier piece in this series, where what you cannot describe cannot be handed over either.",
    },
    {
      type: "p",
      text: "Putting memory outside the head is something people have always done and will keep doing. The trouble may lie less in handing things over than in forgetting that we did. Keep a list of what is out there, open it now and then, and read for yourself the material your judgment depends on. On those terms, “saved, so safe to forget” becomes a fairly trustworthy sentence.",
    },
  ],
  sources: sources(false),
};
