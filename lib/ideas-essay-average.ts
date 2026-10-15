import type { IdeasEssay } from "./ideas-essay-watching";

export const waitingAverageEssayKo: IdeasEssay = {
  "id": "waiting-outside-the-average",
  "date": "2026. 10. 15",
  "category": "Essay",
  "title": "평균 밖에서 기다리는 사람",
  "subtitle": "대표 수치 옆에 남겨 둘 한 건의 기록",
  "summary": "평균 6분인 작업에 6분 걸린 사례가 하나도 없을 수 있습니다. 평균과 중앙값의 차이에서 출발해, 긴 기다림을 지우지 않는 설명을 생각합니다.",
  "blocks": [
    {
      "type": "p",
      "text": "평균이 낮아졌다는 설명만으로 모든 사람의 기다림이 줄었다고 말할 수는 없습니다. 같은 평균 안에도 금방 끝난 일과 오래 멈춰 있던 일이 함께 들어갑니다. 일을 맡길 도구를 고를 때 저는 대표 수치 옆에, 가장 오래 남아 있던 작업이 무엇이었는지 적어 두는 편이 낫다고 생각합니다."
    },
    {
      "type": "p",
      "text": "평균 6분이라는 안내를 보면 어느 정도 기다릴지 감이 오는 듯합니다. 일정을 잡을 때도 쓸모가 있습니다. 그런데 막상 자기 차례가 되면 그 숫자와 다른 시간을 보내기도 합니다. 평균을 틀리게 계산하지 않았어도 그렇습니다. 숫자를 낸 사람과 기다리는 사람이 서로 다른 질문을 하고 있기 때문입니다. 한쪽은 여러 건을 합쳐 보고 있고, 다른 쪽은 지금 끝나지 않은 한 건을 보고 있습니다."
    },
    {
      "type": "p",
      "text": "이 글의 시간과 작업 상황은 계산을 설명하기 위해 만든 가정이며, DMS 고객사나 실제 운영의 측정값이 아닙니다. 평균과 중앙값의 설명은 2026년 10월 15일 확인한 미국 국립표준기술연구소(NIST)의 통계 안내를 참고했습니다. 그 정의에서 출발해 기다림을 어떻게 설명할지 생각하는 부분은 저의 제안입니다."
    },
    {
      "type": "h",
      "text": "아무도 6분을 기다리지 않았습니다"
    },
    {
      "type": "p",
      "text": "서로 독립된 다섯 작업이 있다고 가정해 보겠습니다. 네 건은 각각 2분, 나머지 한 건은 22분 걸렸습니다. 걸린 시간을 모두 더하면 30분이고 이를 다섯으로 나누면 평균은 6분입니다. 다섯 작업 중 정확히 6분 걸린 것은 하나도 없습니다. 계산은 맞지만 그 숫자와 같은 일을 겪은 작업은 없습니다."
    },
    {
      "type": "p",
      "text": "비교를 위해 다섯 작업이 모두 6분씩 걸리는 경우도 생각해 봅니다. 합계와 평균은 앞의 경우와 같고 중앙값도 6분입니다. 첫 묶음에는 짧은 네 건과 긴 한 건이 있었지만 둘째 묶음에서는 차이가 없습니다. 평균 한 줄만 받은 사람은 두 묶음을 구분하지 못합니다. 대표값에 더해 어떤 기록을 남길지 고민해야 할 지점입니다."
    },
    {
      "type": "p",
      "text": "시간순으로 줄을 세웠을 때 가운데 값인 중앙값은 2분입니다. 이 값은 다섯 건 중 세 번째 작업이 걸린 시간을 그대로 보여 줍니다. 평균보다 평소의 짧은 작업을 설명하기에 가까워 보입니다. 그렇다고 중앙값 2분만 적어 놓으면, 22분 동안 끝나지 않은 한 건을 읽을 방법이 사라집니다. 값을 바꿨을 뿐 설명에서 빠지는 작업은 여전히 남습니다."
    },
    {
      "type": "p",
      "text": "NIST는 분포가 한쪽으로 치우치면 평균과 중앙값이 같지 않을 수 있다고 설명합니다. 극단적인 값은 평균에 영향을 주지만 순서에 기초한 중앙값에는 같은 방식으로 작용하지 않습니다. 어느 대표값이 더 의미 있는지는 자료의 모양과 질문에 달려 있습니다. 이 설명을 읽으며 저는 평균이 부정확하다는 비난보다, 무엇을 대표하도록 골랐는지 먼저 묻는 편이 정확하다고 봅니다."
    },
    {
      "type": "p",
      "text": "총 작업량을 어림하려는 사람에게는 30분이라는 합계가 필요할 수 있습니다. 다만 여기서 합계는 각 작업 시간의 합이며, 병렬 처리까지 고려한 실제 종료 시각은 아닙니다. 다음 한 건이 언제 끝날지 알고 싶은 사람에게는 다섯 기록의 차이가 더 궁금합니다. 같은 자료에서 출발해도 서로 다른 설명이 필요합니다."
    },
    {
      "type": "figure",
      "src": "/images/ideas/waiting-average/five-paper-strips.webp",
      "alt": "나무 책상 위 길이가 짧은 종이 네 장과 긴 종이 한 장",
      "caption": "생성 이미지. 실제 고객 업무나 측정 기록을 촬영한 사진이 아닙니다.",
      "width": 1440,
      "height": 960
    },
    {
      "type": "h",
      "text": "늦어진 한 건을 빼고 싶어질 때"
    },
    {
      "type": "p",
      "text": "22분짜리 작업에 특별한 사정이 있었다고 가정해 보겠습니다. 입력 자료가 모자랐거나 사람이 확인할 때까지 멈춰 있었을 수도 있습니다. 실제 이유는 기록을 봐야 알 수 있습니다. 오래 걸렸다는 사실만으로 오류라고 부르거나, 다시 일어나지 않을 예외로 분류할 근거는 없습니다."
    },
    {
      "type": "p",
      "text": "기계가 실제로 계산한 시간만 비교한다면 사람을 기다린 구간을 따로 떼어 측정하는 것이 맞을 수 있습니다. 반대로 일을 요청한 사람이 결과를 받기까지의 시간을 설명하려면 그 기다림도 포함해야 합니다. 측정의 시작과 끝을 바꾸면 같은 작업도 다른 숫자가 됩니다. 어느 쪽을 썼는지 이름 옆에 적지 않으면 서로 다른 시간을 같은 속도로 비교하게 됩니다."
    },
    {
      "type": "p",
      "text": "보고 수치를 낮추려고 긴 작업을 제외하면, 그 작업이 반복될 때 손을 써야 할 사람의 사정은 보고서 밖에 남습니다. 그렇다고 모든 지연을 도구의 성능 문제로 묶어도 해결할 곳이 흐려집니다. 제가 남기고 싶은 기록은 긴 시간이 발생했다는 사실과 그 이유를 어디까지 확인했는지입니다. 원인을 모르면 모른다고 적는 것으로도 충분합니다."
    },
    {
      "type": "p",
      "text": "가정한 다섯 건의 평균을 6분이라고 쓰면서 최장 시간 22분을 함께 적으면 설명이 달라집니다. 평균이 거짓이어서 고친 것이 아닙니다. 대표 수치를 읽는 사람이 그 뒤의 차이도 볼 수 있게 자료를 조금 더 남긴 것입니다. 최장 시간이 보이면 계획을 정하기 전에 그 작업의 사정을 물어볼 수 있습니다."
    },
    {
      "type": "h",
      "text": "기다림을 읽는 순서"
    },
    {
      "type": "p",
      "text": "1. 시간의 시작과 끝을 맞춥니다. 요청을 받은 순간부터인지, 도구가 실행을 시작한 순간부터인지 구분합니다. 종료도 초안 생성인지 검토가 끝난 결과 전달인지 정합니다. 다른 구간을 재었다면 같은 평균 옆에 놓기 전에 차이를 밝힙니다."
    },
    {
      "type": "p",
      "text": "2. 대표값과 건수를 함께 읽습니다. 이 예에서는 다섯 건, 평균 6분, 중앙값 2분입니다. 다섯 기록만으로 다음 작업의 소요 시간을 보장할 수는 없습니다. 작은 표본에서 얻은 숫자를 모든 작업에 적용할 약속으로 넓히지 않습니다."
    },
    {
      "type": "p",
      "text": "3. 오래 남은 기록을 다시 봅니다. 이 예의 22분이 입력 준비 때문인지, 검토 대기 때문인지 아직 확인하지 않았다면 그대로 미확인으로 둡니다. 실제 업무에서는 그 원인에 따라 고칠 곳과 필요한 담당자가 달라집니다. 최장 시간 하나만으로 다음 실행의 최악 상황까지 안다고 할 수도 없습니다."
    },
    {
      "type": "p",
      "text": "4. 같은 조건끼리 비교합니다. 짧고 익숙한 작업과 자료가 복잡한 작업을 섞었다면 묶음을 나눠 볼 필요가 있습니다. 개인을 평가하기 전에 배정된 작업의 성격부터 살핍니다. 이 순서는 통계 기관이 정한 자동화 평가 표준이 아니라 제가 제안하는 읽기 방식입니다."
    },
    {
      "type": "figure",
      "src": "/images/ideas/waiting-average/pending-tray.webp",
      "alt": "종이 트레이 옆 카드 한 장과 오후 빛이 닿는 빈 의자",
      "caption": "생성 이미지. 실제 고객 업무나 측정 기록을 촬영한 사진이 아닙니다.",
      "width": 1440,
      "height": 960
    },
    {
      "type": "h",
      "text": "중앙값만 보면 기다림을 알 수 있을까요?"
    },
    {
      "type": "p",
      "text": "중앙값만으로는 오래 걸린 작업의 시간이나 이유를 알 수 없습니다. 이 예에서 중앙값은 2분이지만 한 건은 22분 걸렸습니다. 중앙값은 가운데를 설명하는 데 쓰고, 오래 걸린 건은 원기록이나 별도의 요약으로 함께 확인하는 편이 낫습니다."
    },
    {
      "type": "p",
      "text": "가끔은 기다린 시간보다 그 시간을 예측할 수 없었다는 사정이 더 신경 쓰입니다. 설명을 위한 상황으로, 결과를 받을 때까지 다른 일을 시작하지 못하는 요청자를 떠올려 봅니다. 평균만 안내받은 채 진행 상태를 모른다면 그 사람은 끝날 때를 계속 확인해야 합니다. 얼마나 늦어질지 아직 모를 때에도 현재 어느 단계에 있는지 알려 주는 것과 아무 정보 없이 기다리게 하는 것은 다릅니다."
    },
    {
      "type": "p",
      "text": "여기서 모든 요청에 완료 시각을 약속하자는 뜻은 아닙니다. 확인되지 않은 예상 시간을 덧붙이면 설명이 오히려 부정확해집니다. 자료를 받았는지, 검토를 기다리는지처럼 실제로 아는 상태를 구분해 말할 수 있습니다. 평균을 더 자주 계산해 보여 주는 일만으로 해결되지 않는 기다림도 있습니다."
    },
    {
      "type": "h",
      "text": "DMS의 성과 측정 글과 어떻게 다릅니까?"
    },
    {
      "type": "p",
      "text": "DMS.Labs의 기존 성과 측정 글은 AI 도입의 속도 개선을 실제 비용과 업무 결과까지 연결해 확인하자는 실무 가이드입니다. 이 글은 여러 작업을 하나의 숫자로 묶는 순간 어떤 기다림이 빠지는지에 초점을 맞춥니다. 중앙값으로 평균을 대체하자는 공식이나 특정 도구의 성능 비교를 제시하는 글은 아닙니다.",
      "links": [
        {
          "label": "AI 도입 성과 측정 가이드",
          "href": "/works/ai-performance-measurement"
        }
      ]
    },
    {
      "type": "p",
      "text": "기존 가이드는 초안 생성뿐 아니라 검수까지 포함한 총시간, 작업의 난이도와 담당 조건을 함께 살피도록 제안합니다. 그 방향에 개별 기록도 함께 남기면, 전체 평균이 좋아진 뒤에도 계속 늦어지는 종류의 일을 찾아볼 수 있습니다. 그런 일이 실제로 있는지는 자료로 확인해야 하며, 이 에세이의 가상 숫자로 증명할 수는 없습니다."
    },
    {
      "type": "p",
      "text": "업무 경계 지도 가이드는 도구에 맡길 일과 사람이 확인할 일을 작업별로 나누는 방법을 다룹니다. 기다림을 그 단계와 연결해 적으면 생성 단계가 느린지, 결과를 확인할 사람이 없는지 구분할 자료가 생깁니다. 누군가의 검토 시간을 낭비로 단정하기 전에 그 검토가 어떤 오류를 막는지도 함께 보아야 합니다.",
      "links": [
        {
          "label": "업무 경계 지도 가이드",
          "href": "/works/ai-training-task-boundary-map"
        }
      ]
    },
    {
      "type": "p",
      "text": "저는 도구를 배우는 자리에서도 가장 빠른 결과만 남기는 것보다, 늦어진 작업 하나를 읽을 시간을 두는 편을 택하겠습니다. 다만 학습자가 올바른 결과를 확인할 수 있고 민감한 자료를 드러내지 않는 조건이 먼저입니다. 왜 늦었는지 설명해 보며 필요한 도움과 불필요한 대기를 나눌 수 있어야 다음 실습의 조건도 고칠 수 있습니다."
    },
    {
      "type": "h",
      "text": "개인의 하루에 돌려놓을 때"
    },
    {
      "type": "p",
      "text": "평균을 통해 서로 다른 일을 나란히 볼 수 있습니다. 보고받는 사람은 그 덕분에 많은 기록을 짧은 시간에 읽습니다. 저는 그 편의를 포기할 필요는 없다고 생각합니다. 다만 편하게 읽었다는 사실이 모든 일을 충분히 이해했다는 뜻이 되지는 않도록, 원기록으로 돌아갈 길을 남겨 두고 싶습니다."
    },
    {
      "type": "p",
      "text": "다섯 건의 표를 다시 적는다면 다섯 줄을 지우지 않은 채 그 아래에 평균을 쓰겠습니다. 22분이 걸린 줄 옆에는 이유를 확인한 만큼만 적어 두면 됩니다. 그 한 건을 맡은 사람과 이야기할 때에는 6분이라는 대표값 대신, 그 줄에서 어느 단계가 오래 비어 있었는지부터 함께 읽을 수 있습니다."
    }
  ],
  "sources": [
    {
      "label": "NIST · Measures of Location",
      "href": "https://www.itl.nist.gov/div898/handbook/eda/section3/eda351.htm"
    }
  ],
  "next": {
    "label": "다음에 볼 것: DMS AI 교육과 실습 설계",
    "href": "/works/ai-education"
  }
};

export const waitingAverageEssayEn: IdeasEssay = {
  "id": "waiting-outside-the-average",
  "date": "2026. 10. 15",
  "category": "Essay",
  "title": "Waiting Outside the Average",
  "subtitle": "The individual record beside the headline number",
  "summary": "A set of tasks can average six minutes without any one task taking six. Mean and median offer a starting point for an essay on the waits a summary leaves out.",
  "blocks": [
    {
      "type": "p",
      "text": "A lower average does not establish that everyone waited less. Quick tasks and a long unresolved task can share the same summary. When choosing a tool for work, I would keep a record of the task that took longest beside the headline number."
    },
    {
      "type": "p",
      "text": "An estimate of six minutes sounds useful. You can put it into a schedule. Yet the task you are waiting for may take a very different amount of time without anyone having calculated the average incorrectly. The person reporting the figure is describing a group. You are waiting for one particular result, so that group summary may not answer your question."
    },
    {
      "type": "p",
      "text": "The durations and work situations below are constructed examples, not measurements from DMS clients or operations. The definitions come from the US National Institute of Standards and Technology (NIST) statistical handbook, checked on October 15, 2026. The suggestions about explaining waiting are my own, rather than a standard prescribed by that source."
    },
    {
      "type": "h",
      "text": "Nobody waited six minutes"
    },
    {
      "type": "p",
      "text": "Suppose there are five independent tasks. Four take two minutes each, and one takes twenty-two. Their durations add up to thirty minutes. Divide by five and the mean is six minutes. No task in the group took six minutes. The arithmetic is correct, although it describes none of the individual experiences exactly."
    },
    {
      "type": "p",
      "text": "For comparison, imagine five tasks that each take six minutes. Their total and mean match the first group, and their median is six minutes too. The first group contains four quick tasks and one long one; the second has no variation. A reader given only the mean cannot distinguish the groups. That is a specific reason to retain information beyond the headline."
    },
    {
      "type": "p",
      "text": "Put the durations in order and the median is two minutes, the middle observation. That seems closer to the four quick tasks. Replace the mean with the median, however, and the twenty-two-minute task becomes even harder to notice. Choosing a different central value has not supplied an account of the long wait."
    },
    {
      "type": "p",
      "text": "NIST explains that the mean and median can differ for a skewed distribution. Extreme values affect the mean, while the median, which depends on rank, does not respond in the same way. The shape of the data and the question determine which description is useful. I read this as a reason to ask what a number is supposed to represent before accusing it of being inaccurate."
    },
    {
      "type": "p",
      "text": "Someone estimating the combined amount of work may need the thirty-minute total. Here that is the sum of the individual durations, not elapsed time for a system running tasks in parallel. Someone waiting for the next result has a different concern: how much the individual durations vary. The same five records support different answers because the questions differ."
    },
    {
      "type": "figure",
      "src": "/images/ideas/waiting-average/five-paper-strips.webp",
      "alt": "Four short paper strips and one long strip on a wooden desk",
      "caption": "Generated image, not a photograph of client work or measurement records.",
      "width": 1440,
      "height": 960
    },
    {
      "type": "h",
      "text": "The inconvenient long task"
    },
    {
      "type": "p",
      "text": "Suppose there was a particular reason for the twenty-two-minute task. Perhaps input was missing, or the task paused for a person to review it. Those are possibilities in this example; a real explanation would require a record. A long duration alone is not evidence of an error, or evidence that the event will never recur."
    },
    {
      "type": "p",
      "text": "If the question concerns computation alone, measuring the active processing interval separately may be appropriate. If the question concerns how long a requester waits for a usable result, the review delay belongs in the duration. Change the start or end of the measurement and the same task receives a different number. Put an unlabeled number beside another and readers may compare intervals that have little in common."
    },
    {
      "type": "p",
      "text": "Removing a long task to improve a report also removes information needed by whoever must handle it next time. Blaming every delay on the tool is unhelpful too. I would retain the duration and state how much of its cause has actually been established. Unknown is a sufficient entry when the cause remains unknown."
    },
    {
      "type": "p",
      "text": "For the five invented tasks, reporting a mean of six minutes alongside a longest duration of twenty-two changes what the reader can see. The average remains unchanged; the reader now has an additional observation. A person planning the work can ask about the long task before relying on the summary."
    },
    {
      "type": "h",
      "text": "A way to read the waiting"
    },
    {
      "type": "p",
      "text": "1. Match the start and end. Did timing begin when the request arrived or when processing began? Did it stop at the first draft or when someone delivered a reviewed result? If different intervals were measured, explain the difference before comparing their averages."
    },
    {
      "type": "p",
      "text": "2. Read the count with the central values. This example has five tasks, a mean of six minutes and a median of two. Five observations do not guarantee the duration of the next task. Keep the small sample attached to the numbers rather than turning them into a promise about all future work."
    },
    {
      "type": "p",
      "text": "3. Reopen the long record. If nobody has established whether the twenty-two minutes came from preparation or review, leave that cause unresolved. Different causes call for different people and changes. Nor does the longest observed duration establish the worst duration that could occur on a future run."
    },
    {
      "type": "p",
      "text": "4. Compare similar work. If familiar short tasks were mixed with tasks containing complicated material, consider inspecting them separately. Examine the assignments before judging the people who received them. These steps are my proposed reading method, not an automation assessment standard issued by NIST."
    },
    {
      "type": "figure",
      "src": "/images/ideas/waiting-average/pending-tray.webp",
      "alt": "A card beside a paper tray and an empty chair in afternoon light",
      "caption": "Generated image, not a photograph of client work or measurement records.",
      "width": 1440,
      "height": 960
    },
    {
      "type": "h",
      "text": "Does the median explain the wait?"
    },
    {
      "type": "p",
      "text": "The median does not tell you how long the slow tasks took or why. In this example it is two minutes, although one task took twenty-two. Use the median to describe the middle, and inspect the long tasks through their original records or a separate summary."
    },
    {
      "type": "p",
      "text": "Sometimes the uncertainty around a wait matters as much as the duration. Consider a hypothetical requester who cannot begin another piece of work until a result arrives. An average without a current status leaves that person checking repeatedly. Even when a finish time is unknown, knowing which stage is pending gives them different information from silence."
    },
    {
      "type": "p",
      "text": "That is not a reason to invent a completion estimate for every request. An unverified prediction makes the explanation less reliable. A status can report what is known, such as whether material has arrived or a review is pending. Recalculating the average more often will not answer those questions."
    },
    {
      "type": "h",
      "text": "How is this different from the DMS measurement guide?"
    },
    {
      "type": "p",
      "text": "The existing DMS.Labs guide on measuring AI adoption connects faster processing with costs and actual work outcomes. This essay asks what disappears when several tasks become one number. It offers neither a rule to replace every mean with a median nor a comparison of particular tools.",
      "links": [
        {
          "label": "Measuring AI adoption",
          "href": "/en/works/ai-performance-measurement"
        }
      ]
    },
    {
      "type": "p",
      "text": "The guide proposes including review in total completion time and noting task difficulty and working conditions. Keeping individual records alongside that approach lets a reader investigate whether a certain kind of task remains slow after the overall average improves. Whether such a pattern exists must be established from observations. The invented numbers here cannot establish it."
    },
    {
      "type": "p",
      "text": "The task boundary map guide separates work that can go to AI from work a person should check. Recording a delay against those stages could help distinguish slow generation from a review waiting for an available person. Before calling the review wasted time, the reader should also examine which errors it is there to catch.",
      "links": [
        {
          "label": "The task boundary map",
          "href": "/en/works/ai-training-task-boundary-map"
        }
      ]
    },
    {
      "type": "p",
      "text": "In a training session I would leave time to examine one slow task rather than retain only the fastest output. The learner would first need a way to check the answer and material that does not expose sensitive information. Explaining the delay could then help separate necessary assistance from avoidable waiting and inform the next exercise. This is a teaching preference, not a reported training outcome."
    },
    {
      "type": "h",
      "text": "Returning the number to a day"
    },
    {
      "type": "p",
      "text": "An average makes unlike records easier to read together. Someone receiving a report benefits from that compression. I would keep the convenience, with a route back to the observations. Finishing a summary is not the same as having understood every task inside it."
    },
    {
      "type": "p",
      "text": "If I rewrote the five-task example, I would keep all five rows and place the average underneath. Beside the twenty-two-minute row I would record only what had been established about the cause. In a conversation with the person responsible for that task, we could begin with the stage that remained pending in that row, rather than ask them to account for a six-minute experience they never had."
    }
  ],
  "sources": [
    {
      "label": "NIST · Measures of Location",
      "href": "https://www.itl.nist.gov/div898/handbook/eda/section3/eda351.htm"
    }
  ],
  "next": {
    "label": "Next: the DMS guide to designing AI training",
    "href": "/en/works/ai-training-task-boundary-map"
  }
};
