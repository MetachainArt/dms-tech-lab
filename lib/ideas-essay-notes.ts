/**
 * Ideas essay: "회의록이 저절로 써질 때" / "When Notes Write Themselves"
 * 한영 독립 편집본. figure 블록의 src는 /public 아래 내부 경로.
 */
import type { IdeasEssay } from "./ideas-essay-watching";

export const notesWriteEssayKo: IdeasEssay = {
  "id": "when-notes-write-themselves",
  "date": "2026. 11. 16",
  "category": "Essay",
  "title": "회의록이 저절로 써질 때",
  "subtitle": "받아 적는 일과 이해하는 일에 관한 연구 세 편",
  "summary": "손으로 쓴 노트가 이해에 더 좋다는 2014년 실험은 이후 재현 실험에서 같은 결과를 일관되게 내지 못했습니다. 세 연구가 확인한 것과 확인하지 못한 것을 따라가고, AI가 회의록을 써 줄 때 해 볼 일을 DMS.Labs의 제안으로 적습니다.",
  "blocks": [
    {
      "type": "p",
      "text": "AI가 회의 내용을 받아 적어 주면 사람이 이해하는 정도는 달라질까요? 지금 있는 연구로는 답할 수 없습니다. 손으로 쓴 노트가 노트북으로 친 노트보다 이해에 좋다는 2014년 실험은 널리 알려졌지만, 2019년과 2021년에 되풀이한 실험에서는 같은 결과가 일관되게 나오지 않았습니다. 그렇다고 받아 적어도 괜찮다는 증거가 생긴 것은 아닙니다. 이 실험들은 학생이 강연 영상을 보며 직접 노트를 쓰고 퀴즈를 푸는 상황을 쟀고, AI가 대신 써 준 기록은 다루지 않았습니다. 이 글에서는 세 연구가 실제로 확인한 것을 따라가 보고, 회의가 끝난 뒤 AI 기록을 읽는 방법을 DMS.Labs의 제안으로 적습니다."
    },
    {
      "type": "p",
      "text": "2026년 11월 16일 확인한 자료 기준입니다. Mueller와 Oppenheimer의 2014년 논문은 전문과 2018년 정오표를 읽었습니다. Morehead 등의 2019년 연구는 학술지 초록만, Urry 등의 2021년 연구는 초록과 영국심리학회(BPS) 연구 요약을 읽었고 본문과 부록은 읽지 못했습니다. 학원 회의 장면은 설명을 위한 가정이며 DMS 고객 사례가 아닙니다. 마지막 제안은 DMS.Labs의 생각이고 어떤 논문도 시험하지 않은 방법입니다."
    },
    {
      "type": "figure",
      "src": "/images/ideas/when-notes-write-themselves/notebook-pencil-window.webp",
      "alt": "창가의 낡은 나무 탁자 위에 줄 쳐진 공책이 펼쳐져 있고, 오른쪽 면에 연필로 쓴 흐릿한 손글씨가 몇 줄 보인다. 옆에 연필 한 자루와 잎 무늬가 있는 작은 찻잔, 뒤쪽에 덮어 둔 노트북이 있다. 왼쪽 창가에는 화분 잎이 보이고 부드러운 아침 햇빛이 비친다. 읽을 수 있는 글자는 없다.",
      "caption": "생성 이미지. 설명을 위한 책상 장면이며 실제 기록이 아닙니다.",
      "width": 1440,
      "height": 960
    },
    {
      "type": "h",
      "text": "‘손으로 써야 이해한다’는 말은 어디서 나왔을까요?"
    },
    {
      "type": "p",
      "text": "2014년 Psychological Science에 실린 Pam Mueller와 Daniel Oppenheimer의 논문이 출처입니다. 제목은 「The Pen Is Mightier Than the Keyboard」, 펜이 키보드보다 강하다는 뜻입니다. 세 번의 실험에서 노트북으로 필기한 학생은 개념을 묻는 문제에서 손으로 쓴 학생보다 점수가 낮았습니다."
    },
    {
      "type": "p",
      "text": "첫 실험에는 프린스턴대 학생 67명이 참여했고 분석에서 두 명이 빠졌습니다. 15분 남짓한 TED 강연 다섯 편 가운데 한 편을 보며 평소 하던 대로 필기했습니다. 노트북은 인터넷에 연결하지 않았습니다. 강연이 끝나고 30분쯤 지나 다른 과제를 거친 뒤에 사실을 묻는 문제와 개념을 적용하는 문제를 풀었습니다. 사실 문제에서는 두 집단이 비슷했고, 개념 문제에서 노트북 집단의 점수가 낮았습니다."
    },
    {
      "type": "p",
      "text": "노트의 모양도 달랐습니다. 손으로 쓴 노트는 평균 173.4단어, 노트북 노트는 평균 309.6단어였습니다. 강연 대본과 세 단어 묶음이 그대로 겹치는 비율은 손글씨 8.8%, 노트북 14.6%였습니다. 연구진은 타자가 빨라 들리는 대로 옮기기 쉽고, 그만큼 내용을 곱씹는 일이 줄어든다고 풀이했습니다. 분석에서는 노트가 길수록 점수가 높았고, 강연 문장과 많이 겹칠수록 점수가 낮았습니다."
    },
    {
      "type": "p",
      "text": "둘째 실험은 UCLA 학생 151명이 최종 분석 대상이었습니다. 노트북 집단의 일부에게는 들리는 대로 적지 말고 자기 말로 쓰라고 미리 안내했습니다. 연구진은 이 안내가 받아 쓰는 버릇을 막지 못했다고 보고했고, 안내를 받은 노트북 집단의 개념 문제 점수는 손글씨 집단과도, 안내를 받지 않은 노트북 집단과도 의미 있게 다르지 않았습니다."
    },
    {
      "type": "p",
      "text": "셋째 실험은 UCLA 학생 109명이 최종 분석 대상이었고 시험은 일주일 뒤에 봤습니다. 7분쯤 되는 강의 네 편을 보게 한 뒤, 시험 전에 자기 노트를 10분 훑어볼 수 있는 집단과 바로 시험을 보는 집단으로 나눴습니다. 노트를 훑어본 손글씨 집단이 나머지 세 집단보다 높은 점수를 냈습니다. 훑어볼 기회가 없었던 쪽에서는 노트북과 손글씨 사이에 의미 있는 차이가 없었습니다."
    },
    {
      "type": "p",
      "text": "저자들은 2018년에 정오표를 냈습니다. 분석 점수를 다시 계산하고 통계 보고의 오류를 바로잡았지만 결과의 전체 방향은 같다고 밝혔습니다. 이 글의 점수 관련 서술은 정정된 내용을 따랐습니다."
    },
    {
      "type": "h",
      "text": "같은 실험을 다시 했더니 어떻게 됐을까요?"
    },
    {
      "type": "p",
      "text": "일관되게 이어지지는 않았습니다. 첫 실험을 거의 그대로 되풀이한 연구가 2021년 Psychological Science에 실렸습니다. Heather Urry 등이 터프츠대 학생 142명(노트북 74명, 손글씨 68명)으로 진행했습니다. 노트북 집단이 더 많이, 더 그대로 받아 적은 점은 원래 실험과 같았습니다. 그러나 퀴즈 점수는 두 집단이 비슷했습니다. 같은 연구진이 비슷한 설계의 연구 여덟 건을 모아 본 간이 메타분석에서도 개념 문제에서 손글씨의 우위는 나타나지 않았습니다."
    },
    {
      "type": "p",
      "text": "원래 실험과 달랐던 점도 있습니다. BPS의 요약에 따르면 평소 강의 노트를 손으로 쓴다고 답한 참가자가 더 많았고, 약 80명은 수업이 아닌 곳에서 연구진이 준 노트북으로 영상을 봐서 산만했다고 합니다. 강연이 짧아 실제 대학 강의와 거리가 있다는 점도 한계로 꼽혔습니다. 저자들은 이런 차이가 결과에 영향을 줬을 수 있다고 인정했습니다."
    },
    {
      "type": "p",
      "text": "2019년에는 Morehead, Dunlosky, Rawson이 원래 연구를 되풀이하면서 전자 필기 장치를 쓰는 집단과 필기를 하지 않는 집단을 더했습니다. 초록에 따르면 필기를 하지 않은 집단까지 포함해 집단 사이의 점수가 일관되게 갈리지 않았습니다. 노트를 공부한 뒤에는 집단 차이가 더 줄었습니다. 직접 재현 연구를 모은 메타분석에서는 손글씨 쪽으로 작은 효과가 나타났지만 통계적으로 의미 있는 수준은 아니었습니다. 저자들은 어느 방식이 더 낫다고 결론짓기는 이르다고 적었습니다."
    },
    {
      "type": "h",
      "text": "세 연구를 놓고 보면 무엇이 남을까요?"
    },
    {
      "type": "p",
      "text": "확실히 남은 것은 많지 않고, 단서가 몇 가지 있습니다. 먼저 노트를 많이 쓴 사람의 점수가 높은 경향이 있습니다. 원래 연구와 2021년 재현 연구 모두에서 단어 수가 많을수록 퀴즈 점수가 좋았습니다. 다만 같이 움직였다는 관찰이며, 많이 쓰게 하면 점수가 오른다는 실험 결과는 아닙니다."
    },
    {
      "type": "p",
      "text": "들리는 말과 겹치는 정도와 점수의 관계는 불안정합니다. 원래 연구에서는 겹침이 많을수록 점수가 낮았지만 재현 연구에서는 이 결과가 견고하지 않았습니다. 재현 연구의 저자들은 손으로 쓰면 정보를 더 깊이 처리해 바로 배우는 효과가 커진다는 설명을 이 결과가 뒷받침하지 않는다고 결론지었습니다."
    },
    {
      "type": "p",
      "text": "노트를 다시 보는 단계의 역할은 엇갈립니다. 원래 연구의 셋째 실험에서는 노트를 다시 본 손글씨 집단만 두드러졌습니다. Morehead 등의 실험에서는 노트를 공부한 뒤 오히려 집단 차이가 줄었습니다. 같은 단계가 어느 쪽에 유리한지는 연구마다 달랐습니다."
    },
    {
      "type": "h",
      "text": "AI가 회의록을 써 주면 이 연구들은 무엇을 말해 줄까요?"
    },
    {
      "type": "p",
      "text": "직접 말해 주는 것은 없습니다. 참가자는 자기 손으로 노트를 쓴 학생이었고, AI가 만든 기록을 읽은 사람은 없었습니다. 시험도 짧은 강연 내용을 묻는 퀴즈였습니다. 회의에서 필요한 것은 무엇이 정해졌는지, 누가 무엇을 언제까지 하는지를 기억하는 일인데 이런 과제는 재지 않았습니다."
    },
    {
      "type": "p",
      "text": "닮은 점은 있습니다. AI 회의록은 받아 쓰기의 극단에 가깝습니다. 사람이 거의 애쓰지 않아도 거의 모든 말이 글로 남습니다. 원래 연구가 걱정한 상황, 곧 기록은 길어지는데 곱씹는 일은 줄어드는 모양과 겹칩니다. 하지만 재현 연구에서 그 걱정의 근거가 흔들렸으니, 닮았다는 이유만으로 같은 결과를 예상할 수도 없습니다. 제가 확인할 수 있는 범위는 여기까지입니다."
    },
    {
      "type": "h",
      "text": "회의가 끝나고 AI 요약을 열기 전에 무엇을 해 볼 수 있을까요?"
    },
    {
      "type": "p",
      "text": "회의가 끝나면 AI 요약을 열기 전에 자기 말로 세 줄을 먼저 써 보는 것을 제안합니다. 여기서부터는 연구 결과가 아니라 DMS.Labs의 제안이고, 시험해 본 방법이 아니어서 효과를 보증하지 않습니다."
    },
    {
      "type": "p",
      "text": "직원 다섯 명인 영어 학원의 주간 회의를 가정해 보겠습니다. 회의는 녹음 앱이 받아 적고, 끝나면 요약이 공유됩니다. 담당 선생님은 요약을 읽고 잘 정리됐다고 생각하며 창을 닫습니다. 사흘 뒤 다음 주 수업표를 바꾸기로 한 사람이 누구인지 물으면 직원들의 대답이 엇갈립니다. 요약에는 적혀 있었을 겁니다. 읽었다는 것과 기억한다는 것은 따로 떨어진 일이어서 생길 수 있는 장면입니다."
    },
    {
      "type": "p",
      "text": "방법은 이렇습니다. 회의가 끝나면 AI 요약을 열기 전에 3분 동안 자기 말로 세 줄을 씁니다. 첫 줄에는 정해진 것, 둘째 줄에는 내가 맡은 일과 날짜, 셋째 줄에는 아직 이해하지 못한 것을 적습니다. 그다음 AI 요약을 열어 두 기록을 견줍니다. 내 세 줄에는 있는데 요약에 없는 내용, 요약에는 있는데 내가 쓰지 않은 내용이 확인할 목록이 됩니다."
    },
    {
      "type": "figure",
      "src": "/images/ideas/when-notes-write-themselves/paper-strip-and-card.webp",
      "alt": "창가의 나무 탁자 위에 가는 글줄이 빼곡히 인쇄된 흰 종이 두루마리가 풀려 탁자 가장자리 아래로 흘러내려 있다. 오른쪽에는 아무것도 적히지 않은 손바닥만 한 카드와 초록빛 연필이 놓여 있고, 따뜻한 자연광이 종이와 나무 결 위에 비친다. 읽을 수 있는 글자는 없다.",
      "caption": "생성 이미지. 설명을 위한 탁자 장면이며 실제 기록이 아닙니다.",
      "width": 1440,
      "height": 960
    },
    {
      "type": "h",
      "text": "이 방법이 효과가 있다고 말할 수 있을까요?"
    },
    {
      "type": "p",
      "text": "아직 말할 수 없습니다. 위 연구 어느 것도 이 순서를 시험하지 않았습니다. 3분이 맞는지, 세 줄이 맞는지도 정해진 근거가 없습니다. 기대하는 것은 빠진 부분이 눈에 띄는 데까지이고, 이해가 깊어지는지는 따로 확인해야 합니다."
    },
    {
      "type": "p",
      "text": "확인하는 방법은 있습니다. 회의 한 종류에서만 한 달 동안 써 보고, 회의 사흘 뒤에 각자 맡은 일을 따로 적게 해서 답이 서로 맞는 횟수를 세어 봅니다. 시작하기 전 몇 주 동안 같은 방식으로 센 횟수가 있어야 비교할 수 있으니 그 기록부터 적어 두시기 바랍니다."
    },
    {
      "type": "p",
      "text": "AI 회의록을 켜기 전에 확인할 참석자 고지와 파일 보관은 「AI 회의록, 녹음 전 확인할 것」에, 결과를 누가 어떤 기준으로 검수할지는 「AI 결과 검수자 정하기」에 정리해 두었습니다.",
      "links": [
        {
          "label": "AI 회의록, 녹음 전 확인할 것",
          "href": "/works/ai-meeting-notes-recording-check"
        },
        {
          "label": "AI 결과 검수자 정하기",
          "href": "/works/ai-output-reviewer-card"
        }
      ]
    },
    {
      "type": "p",
      "text": "이번 주 회의 하나를 골라 AI 요약을 열기 전에 세 줄을 써 보십시오. 요약과 겹치지 않는 줄이 있으면 그 줄이 확인할 첫 질문입니다."
    },
    {
      "type": "p",
      "text": "팀의 AI 활용과 업무 자동화 방식을 점검해 보고 싶으시면 문의 페이지로 연락하실 수 있습니다.",
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
      "label": "Mueller & Oppenheimer · The Pen Is Mightier Than the Keyboard: Advantages of Longhand Over Laptop Note Taking · Psychological Science 25(6), 1159-1168, 2014",
      "href": "https://doi.org/10.1177/0956797614524581"
    },
    {
      "label": "Corrigendum · The Pen Is Mightier Than the Keyboard · Psychological Science, 2018",
      "href": "https://doi.org/10.1177/0956797618781773"
    },
    {
      "label": "Morehead, Dunlosky & Rawson · How Much Mightier Is the Pen than the Keyboard for Note-Taking? · Educational Psychology Review 31(3), 753-780, 2019",
      "href": "https://doi.org/10.1007/s10648-019-09468-2"
    },
    {
      "label": "Urry et al. · Don’t Ditch the Laptop Just Yet: A Direct Replication of Mueller and Oppenheimer’s (2014) Study 1 Plus Mini Meta-Analyses Across Similar Studies · Psychological Science 32(3), 326-339, 2021",
      "href": "https://doi.org/10.1177/0956797620965541"
    },
    {
      "label": "BPS Research Digest · Taking lecture notes on a laptop might not be that bad after all · 2021-03-23",
      "href": "https://www.bps.org.uk/research-digest/taking-lecture-notes-laptop-might-not-be-bad-after-all"
    }
  ],
  "next": {
    "label": "다음: DMS 업무 자동화",
    "href": "/automation"
  }
};

export const notesWriteEssayEn: IdeasEssay = {
  "id": "when-notes-write-themselves",
  "date": "2026. 11. 16",
  "category": "Essay",
  "title": "When Notes Write Themselves",
  "subtitle": "What three studies say about taking notes and understanding",
  "summary": "A 2014 experiment found that handwritten notes beat typed ones for understanding, but later replications did not find the same result consistently. This essay follows what three studies confirmed and what they did not, then offers a DMS.Labs suggestion for reading AI-written meeting notes.",
  "blocks": [
    {
      "type": "p",
      "text": "If an AI writes down your meeting, does the way you understand it change? The research we have cannot say. A 2014 experiment found that handwritten notes beat typed notes for understanding, and it became widely cited. Replications in 2019 and 2021 did not find the same result consistently. That does not show that transcribing is harmless. These studies measured students who wrote their own notes while watching a talk and then took a quiz. None of them looked at notes an AI wrote for the reader. This essay follows what the three studies confirmed and, as a DMS.Labs suggestion, offers a way to read AI meeting notes afterward."
    },
    {
      "type": "p",
      "text": "Based on sources checked on November 16, 2026. I read the full text of Mueller and Oppenheimer’s 2014 paper and its 2018 corrigendum. For the 2019 study by Morehead and colleagues I read only the journal abstract. For the 2021 study by Urry and colleagues I read the abstract and a summary from the British Psychological Society’s Research Digest, not the full paper or appendices. The language-school meeting below is an invented illustration, not a DMS customer case. The last section is a DMS.Labs suggestion that no paper has tested."
    },
    {
      "type": "figure",
      "src": "/images/ideas/when-notes-write-themselves/notebook-pencil-window.webp",
      "alt": "A lined notebook lies open on a worn wooden table by a window, with a few faint lines of pencil handwriting on the right page. A pencil and a small teacup with a leaf pattern sit beside it, and a closed laptop rests behind. Leaves of a houseplant show at the window on the left in soft morning light. No text is legible.",
      "caption": "Generated image. A desk scene for illustration, not a real record.",
      "width": 1440,
      "height": 960
    },
    {
      "type": "h",
      "text": "Where did “handwriting beats typing” come from?"
    },
    {
      "type": "p",
      "text": "It comes from a 2014 paper in Psychological Science by Pam Mueller and Daniel Oppenheimer, titled “The Pen Is Mightier Than the Keyboard.” Across three experiments, students who typed their notes scored lower than students who wrote by hand on questions about concepts."
    },
    {
      "type": "p",
      "text": "The first experiment had 67 Princeton students, and two were dropped from the analysis. Each watched one of five TED talks of a little over 15 minutes and took notes the way they normally would. The laptops were offline. About 30 minutes after the talk, and after other tasks, they answered factual questions and conceptual-application questions. The two groups did about equally well on facts. On concepts, the laptop group scored lower."
    },
    {
      "type": "p",
      "text": "The notes looked different too. Handwritten notes averaged 173.4 words and typed notes averaged 309.6. The share of three-word chunks in the notes that also appeared in the lecture transcript was 8.8% for handwriting and 14.6% for typing. The authors read this as typists transcribing what they hear, with less chewing it over. Across participants, longer notes went with higher scores, and notes that overlapped more with the lecture went with lower scores."
    },
    {
      "type": "p",
      "text": "In the second experiment, the final sample was 151 UCLA students. Some laptop users were told in advance to write in their own words rather than word for word. The authors reported that this instruction did not stop the verbatim habit. Laptop users who got the instruction did not differ significantly on conceptual questions from handwriters or from laptop users who did not get it."
    },
    {
      "type": "p",
      "text": "The third experiment had 109 UCLA students in the final sample and tested them a week later. They watched four lectures of about seven minutes each. Half could look over their own notes for 10 minutes before the test, and half could not. The handwriting group that reviewed its notes scored higher than the other three groups. Where there was no chance to review, typing and handwriting did not differ significantly."
    },
    {
      "type": "p",
      "text": "The authors published a corrigendum in 2018. It recalculated some scores and fixed errors in how the statistics were reported, and it said the overall direction of the results held. The score details in this essay follow the corrected version."
    },
    {
      "type": "h",
      "text": "What happened when others ran the experiment again?"
    },
    {
      "type": "p",
      "text": "The result did not hold up consistently. A close replication of the first experiment appeared in Psychological Science in 2021. Heather Urry and colleagues ran it with 142 Tufts students, 74 typing and 68 writing by hand. As in the original, the typists wrote more words and copied more of the lecture verbatim. Their quiz scores, however, were about the same as the handwriters’. A small meta-analysis of eight studies with similar designs, run by the same team, also showed no handwriting advantage on conceptual questions."
    },
    {
      "type": "p",
      "text": "The replication differed from the original in some ways. According to the BPS summary, more of its participants said they normally take notes by hand, and about 80 took part outside a class, watching the talk on a laptop the team provided, and many of them described those sessions as prone to distractions and errors. The short talks also sit far from a real university lecture. The authors acknowledged that such differences could have affected the results."
    },
    {
      "type": "p",
      "text": "In 2019, Morehead, Dunlosky, and Rawson repeated the original work and added a group that used electronic writing devices and a group that took no notes. According to the abstract, scores did not differ consistently between groups, including the group that took no notes. After students studied their notes, group differences shrank further. A meta-analysis of the direct replications showed a small effect favoring handwriting that was not statistically significant. The authors wrote that it is premature to say which method is better."
    },
    {
      "type": "h",
      "text": "What do the three studies still agree on?"
    },
    {
      "type": "p",
      "text": "Not much holds firmly, but a few clues remain. People who wrote more notes tended to score higher. In both the original study and the 2021 replication, a higher word count went with a better quiz score. That is an observed pattern, though, not a result of making people write more."
    },
    {
      "type": "p",
      "text": "The link between overlap with the lecture and the score is unstable. In the original, more overlap went with lower scores, but the replication did not find this robustly. The replication’s authors concluded that their results do not support the idea that handwriting improves immediate learning by encoding information better."
    },
    {
      "type": "p",
      "text": "The role of reviewing notes is mixed. In the original third experiment, only the handwriting group that reviewed stood out. In the Morehead experiment, group differences shrank after students studied their notes. Which way the same step helped varied from study to study."
    },
    {
      "type": "h",
      "text": "What does this say about AI-written meeting notes?"
    },
    {
      "type": "p",
      "text": "Nothing directly. The participants were students who wrote their own notes, and nobody read a record an AI had made. The test was a quiz on a short talk. What a meeting needs is memory of what was decided and who does what by when, and these studies did not measure that."
    },
    {
      "type": "p",
      "text": "There is a resemblance. AI meeting notes are close to transcription at its extreme: nearly every word ends up on the page with almost no effort from the reader. That matches the worry in the original study, a record that grows longer while the chewing-over shrinks. But the replications weakened the grounds for that worry, so resemblance alone does not let us predict the same result. That is as far as I can check."
    },
    {
      "type": "h",
      "text": "What could you do before opening the AI summary?"
    },
    {
      "type": "p",
      "text": "Write three lines in your own words before you open the AI summary. From here on this is a DMS.Labs suggestion, not a research result; we have not tested it and cannot promise an effect."
    },
    {
      "type": "p",
      "text": "Picture a language school with five staff members and a weekly meeting. A recording app transcribes the meeting and shares a summary. The teacher in charge reads it, thinks it is well organized, and closes the window. Three days later someone asks who agreed to change next week’s class schedule, and the staff give different answers. The summary probably said it. Reading something and remembering it are separate things, which is how such a scene can happen. This is an invented case for illustration."
    },
    {
      "type": "p",
      "text": "Here is the method. After the meeting, before opening the AI summary, spend three minutes writing three lines in your own words: what was decided, what you are responsible for and by when, and what you did not understand. Then open the summary and compare. Whatever is in your three lines but not in the summary, and whatever is in the summary but not in your lines, becomes your list to check."
    },
    {
      "type": "figure",
      "src": "/images/ideas/when-notes-write-themselves/paper-strip-and-card.webp",
      "alt": "A long strip of white paper printed with dense, fine lines unrolls from a paper roll and spills over the edge of a wooden table by a window. To the right lie a palm-sized blank card and a green pencil in warm natural light. No text is legible.",
      "caption": "Generated image. A tabletop scene for illustration, not a real record.",
      "width": 1440,
      "height": 960
    },
    {
      "type": "h",
      "text": "Can anyone say this works?"
    },
    {
      "type": "p",
      "text": "Not yet. None of the studies above tested this sequence. There is no evidence that three minutes or three lines is the right size. What I would expect is that gaps become easier to notice. Whether understanding deepens needs its own check."
    },
    {
      "type": "p",
      "text": "A check is possible. Use it for one type of meeting for a month. Three days after each meeting, ask everyone to write down separately what they own, and count how often the answers match. You need the same count from a few weeks before you started, so write that record down first."
    },
    {
      "type": "p",
      "text": "Before you switch on an AI note-taker, the guide on notifying attendees and file retention is “Before the AI Note-Taker Joins.” Who reviews the output, and by what standard, is in “Naming a Reviewer for AI Output.”",
      "links": [
        {
          "label": "Before the AI Note-Taker Joins",
          "href": "/en/works/ai-meeting-notes-recording-check"
        },
        {
          "label": "Naming a Reviewer for AI Output",
          "href": "/en/works/ai-output-reviewer-card"
        }
      ]
    },
    {
      "type": "p",
      "text": "This week, pick one meeting and write three lines before opening the AI summary. Any line that does not appear in the summary is your first question to check."
    },
    {
      "type": "p",
      "text": "If you want to review how your team approaches AI use and work automation, you can reach us through the contact page.",
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
      "label": "Mueller & Oppenheimer · The Pen Is Mightier Than the Keyboard: Advantages of Longhand Over Laptop Note Taking · Psychological Science 25(6), 1159-1168, 2014",
      "href": "https://doi.org/10.1177/0956797614524581"
    },
    {
      "label": "Corrigendum · The Pen Is Mightier Than the Keyboard · Psychological Science, 2018",
      "href": "https://doi.org/10.1177/0956797618781773"
    },
    {
      "label": "Morehead, Dunlosky & Rawson · How Much Mightier Is the Pen than the Keyboard for Note-Taking? · Educational Psychology Review 31(3), 753-780, 2019",
      "href": "https://doi.org/10.1007/s10648-019-09468-2"
    },
    {
      "label": "Urry et al. · Don’t Ditch the Laptop Just Yet: A Direct Replication of Mueller and Oppenheimer’s (2014) Study 1 Plus Mini Meta-Analyses Across Similar Studies · Psychological Science 32(3), 326-339, 2021",
      "href": "https://doi.org/10.1177/0956797620965541"
    },
    {
      "label": "BPS Research Digest · Taking lecture notes on a laptop might not be that bad after all · 2021-03-23",
      "href": "https://www.bps.org.uk/research-digest/taking-lecture-notes-laptop-might-not-be-bad-after-all"
    }
  ],
  "next": {
    "label": "Next: DMS Work Automation (in Korean)",
    "href": "/automation"
  }
};
