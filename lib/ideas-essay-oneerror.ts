/**
 * Ideas essay: "AI가 한 번 틀리고 나면" / "After the AI Gets One Wrong"
 * 한영 독립 편집본. figure 블록의 src는 /public 아래 내부 경로.
 */
import type { IdeasEssay } from "./ideas-essay-watching";

export const afterAiWrongEssayKo: IdeasEssay = {
  "id": "after-ai-gets-one-wrong",
  "date": "2026. 11. 19",
  "category": "Essay",
  "title": "AI가 한 번 틀리고 나면",
  "subtitle": "틀리는 모습을 본 뒤에 사람이 알고리즘을 쓰는 방식에 관한 연구 두 편",
  "summary": "알고리즘이 사람보다 정확했는데도, 알고리즘이 틀리는 것을 본 참가자는 그 예측을 덜 골랐습니다. 2015년과 2018년 두 연구가 확인한 것과 확인하지 못한 것을 따라가고, AI를 도입할 때 틀림을 미리 정해 두는 방법을 DMS.Labs의 제안으로 적습니다.",
  "blocks": [
    {
      "type": "p",
      "text": "AI가 한 번 틀리는 모습을 보고 나면 사람은 그 도구를 덜 쓰게 될까요? 2015년의 다섯 가지 실험은 그렇다고 답했습니다. 알고리즘이 사람보다 평균적으로 더 정확했는데도, 알고리즘이 틀리는 것을 본 참가자는 보너스를 알고리즘의 예측에 맡기기를 꺼렸습니다. 2018년의 후속 실험은 예측을 조금이라도 고칠 수 있게 하면 이 거리감이 크게 줄어든다고 보고했습니다. 다만 두 연구가 다룬 것은 숫자를 맞히는 예측 과제이고, 글을 쓰거나 요약하는 생성형 AI는 다루지 않았습니다. 이 글에서는 두 연구가 실제로 확인한 것을 따라가 보고, 업무에 AI를 들일 때 틀림을 어떻게 미리 정해 둘지를 DMS.Labs의 제안으로 적습니다."
    },
    {
      "type": "p",
      "text": "2026년 11월 19일 확인한 자료 기준입니다. 2015년 논문과 2018년 논문은 와튼스쿨 교수 페이지에 올라 있는 PDF로 본문 전체를 읽었습니다. 다만 2015년 논문 그림 3에 있는 선택 비율은 이미지라 읽지 못했고, 보충 자료와 이후에 나온 다른 연구도 읽지 못했습니다. 학원 장면은 설명을 위한 가정이며 DMS 고객 사례가 아닙니다. 마지막 제안은 DMS.Labs의 생각이고 어떤 논문도 시험하지 않은 방법입니다."
    },
    {
      "type": "figure",
      "src": "/images/ideas/after-ai-gets-one-wrong/marked-up-pages-and-pencil.webp",
      "alt": "창가의 낡은 나무 탁자 위에 가는 연필선이 곡선으로 얽힌 종이 몇 장이 겹쳐 놓여 있고, 종이 모서리와 여백에 작은 동그라미와 짧은 사선이 몇 군데 그려져 있다. 오른쪽에 깎은 연필 한 자루와 작은 지우개가 있고, 왼쪽에는 유칼립투스 가지를 꽂은 도자기 주전자가 있다. 부드러운 아침 햇빛이 비치며 읽을 수 있는 글자는 없다.",
      "caption": "생성 이미지. 설명을 위한 책상 장면이며 실제 기록이 아닙니다.",
      "width": 1440,
      "height": 960
    },
    {
      "type": "h",
      "text": "‘알고리즘 혐오’라는 말은 어디서 나왔을까요?"
    },
    {
      "type": "p",
      "text": "2015년 Journal of Experimental Psychology: General에 실린 Berkeley Dietvorst, Joseph Simmons, Cade Massey의 논문이 출처입니다. 제목은 「Algorithm Aversion: People Erroneously Avoid Algorithms After Seeing Them Err」, 알고리즘이 틀리는 것을 본 뒤 사람들이 알고리즘을 잘못 피한다는 뜻입니다. 논문에서 알고리즘은 근거에 바탕을 둔 예측 공식이나 규칙을 넓게 가리키며, 통계 모형도 여기에 들어갑니다."
    },
    {
      "type": "p",
      "text": "저자들은 먼저 알고리즘이 사람보다 예측을 더 잘한다는 오래된 연구를 짚습니다. Meehl이 1954년에 정리한 20개 연구가 있고, Grove 등이 2000년에 136개 연구를 묶어 본 메타분석에서는 알고리즘이 평균 10% 앞섰습니다. 그런데도 사람들은 사람의 예측을 고르는 경우가 많았습니다. 저자들이 던진 질문은 사람들이 언제, 왜 그렇게 하는가였습니다."
    },
    {
      "type": "p",
      "text": "다섯 실험에서 참가자는 실제 자료로 실제 결과를 예측했습니다. 세 실험에서는 MBA 지원자가 입학 뒤 낸 성과의 백분위를, 두 실험에서는 미국 주별 항공 출발 승객 수의 순위를 맞혔습니다. 연구진은 같은 자료로 통계 모형을 만들어 두었고, 참가자는 보너스를 자기 예측(한 실험에서는 다른 참가자의 예측)에 맡길지 모형의 예측에 맡길지 골랐습니다. 실험 조건은 이 선택 전에 무엇을 봤는지였습니다. 모형이 예측하는 모습만 본 사람, 자기 예측과 정답만 본 사람, 둘 다 본 사람, 아무것도 안 본 사람으로 나뉘었고 최종 표본은 실험마다 206명에서 1,036명이었습니다."
    },
    {
      "type": "p",
      "text": "모형은 실제로 사람보다 나았습니다. MBA 과제에서 사람의 오차는 모형보다 15%에서 29% 컸고, 항공 승객 과제에서는 90%에서 97% 컸습니다. 어느 조건의 참가자든 모형에 맡기는 편이 보너스를 더 받는 길이었습니다."
    },
    {
      "type": "h",
      "text": "한 번 틀리는 것을 보면 무엇이 달라졌을까요?"
    },
    {
      "type": "p",
      "text": "모형이 예측하는 모습을 본 참가자는 모형을 덜 골랐습니다. 모형을 본 경험을 조작한 네 실험 모두에서 이 차이는 뚜렷했습니다. 눈여겨볼 곳은 모형과 사람을 둘 다 본 조건입니다. 다섯 실험을 합친 이 조건 참가자 741명 가운데 610명(83%)이 모형이 사람보다 나은 것을 직접 봤습니다. 그런데도 이 조건은 모형을 가장 적게 고른 쪽에 속했습니다. 모형이 앞서는 것을 본 사람만 따로 봐도, 모형이 예측하는 모습을 보지 못한 사람보다 모형을 덜 골랐습니다. 다만 항공 승객 과제의 첫 실험(3a)에서는 이 비교가 통계적으로 뚜렷하지 않았습니다."
    },
    {
      "type": "p",
      "text": "반대쪽은 달랐습니다. 사람이 예측하는 모습을 보고 나서도 사람을 고르는 비율은 뚜렷하게 떨어지지 않았습니다. 사람의 오차가 더 컸는데도 그랬습니다."
    },
    {
      "type": "p",
      "text": "신뢰도 답변도 같은 방향이었습니다. 첫 실험에서 모형에 대한 신뢰도(1점에서 5점)는 아무것도 보지 않은 집단이 3.04, 모형이 예측하는 모습을 본 두 집단이 2.49와 2.63이었습니다. 자기 예측에 대한 신뢰도는 조건에 따라 2.47에서 2.70 사이였고 의미 있는 차이가 없었습니다. 모형과 사람의 신뢰도가 같다고 답한 사람은 대부분 사람 쪽을 골랐고, 모형을 본 사람에게서 특히 그랬습니다. 모형을 더 믿는 사람만 모형을 골랐던 셈입니다."
    },
    {
      "type": "p",
      "text": "저자들의 설명은 같은 실수를 용서하는 정도가 다르다는 것입니다. 출근길에 다른 길을 택했다가 늦은 운전자는 대개 그냥 넘기지만, 내비게이션이 같은 판단을 틀리면 다시 믿기를 꺼린다는 예를 듭니다. 분석에서도 모형에 대한 신뢰도 하락이 선택을 설명했고, 사람에 대한 신뢰도는 그렇지 않았습니다."
    },
    {
      "type": "p",
      "text": "기대치도 높았습니다. 항공 승객 과제의 두 번째 실험에서 아무것도 보지 않은 참가자들은 50개 주의 순위 가운데 사람이 평균 16.7개(33%), 모형이 30.4개(61%)를 정확히 맞힐 것이라고 답했습니다. 실제로는 사람이 2.2개(4%), 모형이 6.0개(12%)를 정확히 맞혔습니다. 모형이 예측하는 모습을 본 뒤에도 정확히 맞힐 개수를 15개 안팎으로 예상해 현실보다 크게 높았습니다."
    },
    {
      "type": "p",
      "text": "저자들이 직접 적은 한계도 있습니다. 모형이 사람보다 몇 배 더 정확하다면 틀리는 것을 보고도 쓸지는 알지 못합니다. 틀리는 것을 보지 않은 참가자 가운데에도 모형을 고르지 않은 사람이 적지 않아서, 틀림을 보는 것이 이유의 전부는 아니라고 했습니다. 과제도 두 종류뿐이었습니다."
    },
    {
      "type": "h",
      "text": "조금이라도 고칠 수 있게 하면 무엇이 달라질까요?"
    },
    {
      "type": "p",
      "text": "같은 연구진이 2018년 Management Science에 낸 후속 논문의 질문은 이 거리감을 줄일 수 있는가였습니다. 완벽하지 않다는 것을 아는 알고리즘이라도 사람이 예측을 조금 고칠 수 있으면 더 쓰게 되는지 본 것입니다. 첫 실험에는 와튼스쿨 실험실 참가자 288명이 참여해 고등학생 20명의 수학 표준시험 백분위를 예측했습니다. 모형이 평균 17.5백분위만큼 틀린다는 것은 미리 알려 주었습니다."
    },
    {
      "type": "p",
      "text": "한 조건은 모형을 통째로 쓰거나 아예 안 쓰거나 둘 중 하나만 고르게 했습니다. 다른 조건은 모형을 쓰기로 하면 모든 예측을 최대 10백분위까지 고칠 수 있게 했고, 또 다른 조건은 20개 중 10개를 얼마든지 바꿀 수 있게 했습니다. 고칠 수 없는 조건에서 모형을 고른 사람은 32%였습니다. 10백분위까지 고칠 수 있는 조건에서는 76%, 10개를 바꿀 수 있는 조건에서는 73%였습니다."
    },
    {
      "type": "p",
      "text": "성과도 달랐습니다. 평균 절대 오차는 고칠 수 없는 조건이 22.97이었고, 고칠 수 있던 세 조건은 19.97에서 20.44 사이였습니다. 보너스는 1.14달러 대 1.46달러에서 1.53달러였습니다. 저자들은 모형을 쓰지 않은 쪽에서 아주 큰 오차가 더 자주 나왔다고 설명합니다."
    },
    {
      "type": "p",
      "text": "둘째 실험은 온라인 참가자 816명을 대상으로 한도를 2, 5, 10백분위로 바꿔 보았습니다. 고칠 수 없는 조건에서는 47%가 모형을 골랐고, 10·5·2백분위 조건에서는 각각 71%, 71%, 68%가 골랐습니다. 한도가 줄어도 선택이 거의 달라지지 않았습니다. 저자들은 사람들이 더 많이 고치고 싶어서가 아니라 조금이라도 통제하고 싶어서 그랬다고 해석합니다."
    },
    {
      "type": "p",
      "text": "셋째 실험은 써 본 뒤의 반응을 봤습니다. 첫 열 번의 예측을 모형 그대로, 10백분위까지 고쳐서, 마음대로 고쳐서 하게 한 다음 두 번째 예측에서 어떻게 할지 물었습니다. 모형을 그대로 써야 했던 집단은 고칠 수 있었던 집단보다 과정에 덜 만족했습니다. 어느 조건에서든 80%가 넘는 참가자가 두 번째에 모형을 어떤 식으로든 썼고, 모형과 자기 판단을 섞는 선택이 가장 많았습니다(51%에서 74%)."
    },
    {
      "type": "p",
      "text": "이 결과에도 조건이 붙습니다. 저자들은 사람이 알고리즘이 모르는 중요한 정보를 가진 경우에는 크게 고치는 편이 나을 수 있고, 한도를 2백분위에서 10백분위까지만 시험했으며, 알고리즘이 훨씬 부정확하면 결과가 달라질 수 있다고 적었습니다. 참가자도 학생과 온라인 참가자였고, 전문 예측가를 대상으로 한 연구가 더 필요하다고 했습니다. 또 사람이 알고리즘의 예측을 고치면 자주 더 나빠졌다는 선행 연구도 소개합니다. 이 논문의 첫째 실험에서는 고칠 수 있게 한 쪽의 성과가 고칠 수 없게 한 쪽보다 나았고, 저자들은 셋째 실험에서 한도를 둔 쪽이 더 나았다고 보고합니다."
    },
    {
      "type": "h",
      "text": "이 실험들은 업무에서 AI를 쓰는 일에 무엇을 말해 줄까요?"
    },
    {
      "type": "p",
      "text": "직접 말해 주는 것은 많지 않습니다. 두 논문의 과제는 정답이 곧 숫자로 확인되는 예측이었고, 틀림의 크기도 참가자가 숫자로 봤습니다. 생성형 AI가 쓴 초안이나 요약은 틀린 곳을 찾기도 어렵고 틀림의 크기가 숫자로 나오지도 않습니다. 참가자는 보너스가 걸린 실험에 참여한 학생과 온라인 참가자였고, 일터에서 AI를 쓰는 사람들이 아니었습니다."
    },
    {
      "type": "p",
      "text": "그래도 논문이 스스로 말하는 대목이 하나 있습니다. 알고리즘을 쓸지 말지를 전부 아니면 전무의 결정으로 묻는 방식은 역효과를 낼 가능성이 크다는 것입니다. 불완전한 알고리즘을 그대로만 쓰도록 강제하면 불만이 생기거나 바꾸자는 요구로 이어질 수 있다는 지적도 함께 있습니다. 두 논문은 이 질문에 숫자 예측 과제로 답했을 뿐이고, 글을 쓰는 AI에서도 같은지는 이 논문들로 알 수 없습니다."
    },
    {
      "type": "h",
      "text": "도입하기 전에 틀림을 어떻게 정해 둘 수 있을까요?"
    },
    {
      "type": "p",
      "text": "AI를 쓰기 전에 틀렸을 때의 규칙을 먼저 적어 두기를 제안합니다. 여기서부터는 연구 결과가 아니라 DMS.Labs의 제안이며, 시험해 본 적이 없어 효과를 보증하지 않습니다."
    },
    {
      "type": "p",
      "text": "직원 네 명인 학원이 학부모 문의에 보낼 답장 초안을 AI에게 맡긴다고 가정해 보겠습니다. 첫 주는 무난하게 지나갑니다. 둘째 주에 수업 시작 시간을 한 시간 늦게 적은 초안이 발송 직전에 발견됩니다. 원장은 이래서 안 되겠다며 다시 직접 쓰자고 합니다. 그 한 건은 눈에 띄고 나머지 초안이 별 탈 없이 나간 기록은 눈에 띄지 않습니다. 이 학원은 설명을 위한 가정입니다."
    },
    {
      "type": "p",
      "text": "그 대신 쓰기 전에 세 가지를 적어 둡니다. 첫째는 어디서 틀리기 쉬운지입니다. 날짜, 금액, 이름처럼 틀리면 곤란한 항목을 꼽습니다. 둘째는 사람이 고칠 수 있는 범위입니다. 문장 표현은 자유롭게 고치되 날짜와 금액은 원본과 대조한 뒤에만 바꾸는 식으로 정합니다. 2018년 연구의 ‘조금 고칠 수 있게 하기’를 업무로 옮긴 DMS.Labs의 해석입니다. 셋째는 틀렸을 때의 처리입니다. 한 번 틀렸다고 곧바로 접지 않고, 틀린 내용과 고친 곳을 한 줄씩 남기고, 한 달이 지난 뒤 몇 건 가운데 몇 건이 틀렸는지 세어 보고 다시 정합니다."
    },
    {
      "type": "p",
      "text": "고치는 일에도 위험이 있습니다. 2018년 논문이 소개한 선행 연구에서는 사람이 알고리즘의 예측을 고치면 더 나빠지는 경우가 많았습니다. 그래서 고친 내용과 이유도 함께 남기고, 사람이 고친 결과가 AI 원본보다 나았는지도 세어 봅니다."
    },
    {
      "type": "figure",
      "src": "/images/ideas/after-ai-gets-one-wrong/compass-and-penciled-route.webp",
      "alt": "나무 탁자 위에 넓은 종이가 지도처럼 펼쳐져 있고, 연필로 그은 구불구불한 선이 가운데에서 짧게 비켜 가도록 고쳐져 있다. 오른쪽에는 뚜껑이 열린 작은 놋쇠 나침반과 짧은 연필이 있고, 창가에는 화분의 덩굴 잎이 보이며 부드러운 자연광이 비친다. 읽을 수 있는 글자는 없다.",
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
      "text": "아직 말할 수 없습니다. 위 연구 어느 것도 글을 쓰는 AI를 업무에서 쓰는 상황에서 이 방식을 시험하지 않았습니다. 한도를 어디에 둘지, 한 달이 알맞은 기간인지도 정해진 근거가 없습니다. 기대하는 것은 한 번의 오류가 쓸지 말지의 결정 전부가 되지 않도록 판단 기준이 미리 있는 정도입니다."
    },
    {
      "type": "p",
      "text": "확인하는 방법은 있습니다. 업무 하나에서만 한 달 동안 써 보고, 시작 전 몇 주 동안 같은 방식으로 센 틀림 횟수를 먼저 기록해 둡니다. 그 기록이 있어야 AI를 쓴 뒤와 견줄 수 있습니다."
    },
    {
      "type": "p",
      "text": "AI 결과를 누가 어떤 기준으로 확인할지는 「AI 결과 검수자 정하기」에, 쓰기 전에 시험하는 기준은 「AI 스킬 합격 기준」에 정리해 두었습니다.",
      "links": [
        {
          "label": "AI 결과 검수자 정하기",
          "href": "/works/ai-output-reviewer-card"
        },
        {
          "label": "AI 스킬 합격 기준",
          "href": "/works/ai-skill-acceptance-tests"
        }
      ]
    },
    {
      "type": "p",
      "text": "이번 주에 AI가 만든 결과물 하나를 골라 틀리기 쉬운 곳 세 가지와 사람이 고칠 수 있는 범위를 적어 보십시오. 다음에 틀린 결과가 나오면 그 메모를 열어 보면 됩니다."
    },
    {
      "type": "p",
      "text": "팀의 AI 활용 방식을 점검해 보고 싶으시면 문의 페이지로 연락하실 수 있습니다.",
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
      "label": "Dietvorst, Simmons & Massey · Algorithm Aversion: People Erroneously Avoid Algorithms After Seeing Them Err · Journal of Experimental Psychology: General 144(1), 114-126, 2015",
      "href": "https://doi.org/10.1037/xge0000033"
    },
    {
      "label": "Dietvorst, Simmons & Massey · Overcoming Algorithm Aversion: People Will Use Imperfect Algorithms If They Can (Even Slightly) Modify Them · Management Science 64(3), 1155-1170, 2018",
      "href": "https://doi.org/10.1287/mnsc.2016.2643"
    },
    {
      "label": "2015년 논문 PDF · 와튼스쿨 교수 페이지",
      "href": "https://faculty.wharton.upenn.edu/wp-content/uploads/2016/11/20-Dietvorst-Simmons-Massey-2015.pdf"
    },
    {
      "label": "2018년 논문 PDF · 와튼스쿨 교수 페이지",
      "href": "https://faculty.wharton.upenn.edu/wp-content/uploads/2016/08/Dietvorst-Simmons-Massey-2018.pdf"
    }
  ],
  "next": {
    "label": "다음: DMS 생성형 AI 교육",
    "href": "/education/gen-ai"
  }
};

export const afterAiWrongEssayEn: IdeasEssay = {
  "id": "after-ai-gets-one-wrong",
  "date": "2026. 11. 19",
  "category": "Essay",
  "title": "After the AI Gets One Wrong",
  "subtitle": "Two studies on how people use an algorithm once they have seen it make a mistake",
  "summary": "Even when an algorithm was more accurate than a person, participants who watched it err chose its forecasts less often. This essay follows what two studies, from 2015 and 2018, did and did not show, then offers a DMS.Labs suggestion for settling in advance what to do when an AI gets something wrong.",
  "blocks": [
    {
      "type": "p",
      "text": "Once people have watched an AI get something wrong, do they use it less? Five experiments published in 2015 said yes. Even though the algorithm was more accurate than the human on average, participants who saw it make mistakes were reluctant to tie their bonus to its forecasts. A 2018 follow-up reported that letting people adjust the forecasts, even slightly, closed much of that gap. But both studies used tasks that ask for a number. Neither looked at generative AI that writes or summarizes. This essay follows what the two studies showed and, as a DMS.Labs suggestion, offers a way to decide in advance how to handle an AI’s mistakes when it enters your work."
    },
    {
      "type": "p",
      "text": "Based on sources checked on November 19, 2026. I read the full text of both papers from the PDFs on a Wharton faculty page. I could not read the selection rates in Figure 3 of the 2015 paper because they are in an image, and I did not read the supplementary materials or later work by other researchers. The language-school scene below is an invented illustration, not a DMS customer case. The last section is a DMS.Labs suggestion that no paper has tested."
    },
    {
      "type": "figure",
      "src": "/images/ideas/after-ai-gets-one-wrong/marked-up-pages-and-pencil.webp",
      "alt": "Several sheets of paper with fine, looping pencil lines overlap on a worn wooden table by a window, with small circles and short diagonal strokes in the corners and margins. A sharpened pencil and a small eraser lie on the right, and a ceramic jug holding eucalyptus sprigs stands on the left in soft morning light. No text is legible.",
      "caption": "Generated image. A desk scene for illustration, not a real record.",
      "width": 1440,
      "height": 960
    },
    {
      "type": "h",
      "text": "Where did the term “algorithm aversion” come from?"
    },
    {
      "type": "p",
      "text": "It comes from a 2015 paper in the Journal of Experimental Psychology: General by Berkeley Dietvorst, Joseph Simmons, and Cade Massey, titled “Algorithm Aversion: People Erroneously Avoid Algorithms After Seeing Them Err.” In the paper, an algorithm means any evidence-based forecasting formula or rule, which includes a statistical model."
    },
    {
      "type": "p",
      "text": "The authors begin with decades of evidence that algorithms forecast better than people. Meehl reviewed 20 studies in 1954, and a 2000 meta-analysis by Grove and colleagues covering 136 studies found algorithms ahead by 10% on average. Yet people often picked the human forecast anyway. The authors asked when and why that happens."
    },
    {
      "type": "p",
      "text": "In five experiments, participants forecast real outcomes from real data. In three of them they predicted how well MBA applicants performed after admission, as a percentile. In two they predicted the rank of U.S. states by the number of airline passengers departing. The researchers built a statistical model from the same data, and at the end each participant chose whether to tie a bonus to their own forecasts (in one experiment, another participant’s) or to the model’s. What varied was what they had seen first: the model’s forecasts only, their own forecasts and the right answers only, both, or neither. The final samples ranged from 206 to 1,036 people per experiment."
    },
    {
      "type": "p",
      "text": "The model really was better. In the MBA task the human forecasters made 15% to 29% more error than the model, and in the airline task 90% to 97% more. In every condition, participants would have earned more by tying their bonus to the model."
    },
    {
      "type": "h",
      "text": "What changed once people saw the algorithm make a mistake?"
    },
    {
      "type": "p",
      "text": "Participants who watched the model forecast chose it less. The difference was clear in all four experiments that manipulated experience with the model. The most telling group saw both the model and the human. Of the 741 participants in that condition across the five experiments, 610 (83%) saw the model beat the human with their own eyes. Even so, this group was among the least likely to choose the model. Looking only at those who saw the model ahead, they still chose it less than people who had not seen the model perform. In the first airline experiment (3a), though, that comparison was not statistically clear."
    },
    {
      "type": "p",
      "text": "The other side looked different. Seeing the human forecast did not clearly reduce how often people chose the human, even though the human’s errors were larger."
    },
    {
      "type": "p",
      "text": "The confidence ratings pointed the same way. In the first experiment, confidence in the model (on a 1 to 5 scale) was 3.04 for people who had seen nothing, and 2.49 and 2.63 for the two groups that saw the model forecast. Confidence in one’s own forecasts ranged from 2.47 to 2.70 across conditions, with no meaningful difference. Most people who rated the model and the human equally confident chose the human, and this was especially true after they had seen the model perform. People chose the model mostly when they trusted it more."
    },
    {
      "type": "p",
      "text": "The authors’ explanation is that we forgive the same mistake differently. A driver who takes a different route to work and arrives late usually shrugs it off, they say, but if a GPS makes the same call and errs, many of us hesitate to trust it again. Their analysis also found that a drop in confidence in the model explained the choice, and confidence in the human did not."
    },
    {
      "type": "p",
      "text": "Expectations were high, too. In the second airline experiment, participants who had seen nothing expected humans to get 16.7 of the 50 state ranks exactly right (33%) and the model to get 30.4 (61%). In reality, humans got 2.2 right (4%) and the model 6.0 (12%). Even after seeing the model forecast, people still expected about 15 exact hits, far above what happened."
    },
    {
      "type": "p",
      "text": "The authors state some limits themselves. They could not say whether people would still use a model after seeing it err if it were many times more accurate than humans. A fair share of participants who had not seen the model err also chose not to use it, so seeing a mistake is not the whole story. And there were only two kinds of task."
    },
    {
      "type": "h",
      "text": "What happens if people can adjust it a little?"
    },
    {
      "type": "p",
      "text": "The follow-up paper, by the same team in Management Science in 2018, asked whether that distance can be reduced. Participants knew the algorithm was imperfect; would they use it more if they could modify its forecasts a little? The first experiment had 288 participants in the Wharton lab, who forecast the standardized math-test percentiles of 20 high school students. They were told in advance that the model was off by 17.5 percentiles on average."
    },
    {
      "type": "p",
      "text": "In one condition, people could only use the model as is or not at all. In another, if they chose the model, they could adjust every forecast by up to 10 percentiles. In a third, they could change 10 of the 20 forecasts by any amount. When nothing could be changed, 32% chose the model. When they could adjust by up to 10 percentiles, 76% did, and when they could change 10 forecasts, 73% did."
    },
    {
      "type": "p",
      "text": "Performance differed too. Average absolute error was 22.97 when nothing could be changed, against 19.97 to 20.44 in the three conditions where changes were allowed. The bonuses were $1.14 against $1.46 to $1.53. The authors explain that very large errors were more common among those who did not use the model."
    },
    {
      "type": "p",
      "text": "The second experiment, with 816 online participants, varied the limit to 2, 5, or 10 percentiles. With no changes allowed, 47% chose the model. With limits of 10, 5, and 2, the figures were 71%, 71%, and 68%. A tighter limit barely changed the choice. The authors read this as a wish for some control, not for more control."
    },
    {
      "type": "p",
      "text": "The third experiment looked at reactions after trying it. People made their first ten forecasts using the model as is, adjusting by up to 10 percentiles, or adjusting freely, and were then asked how to make the second round. Those who had to use the model as is were less satisfied with the process than those who could modify it. In every condition more than 80% used the model in some way the second time, and mixing it with their own judgment was the most common choice (51% to 74%)."
    },
    {
      "type": "p",
      "text": "These results come with conditions. The authors note that when people hold important information the algorithm lacks, large adjustments may help. They tested limits only from 2 to 10 percentiles, and they say results might change if the algorithm were much less accurate. Participants were students and online workers, and they call for research with professional forecasters. They also cite earlier studies in which people’s adjustments to an algorithm often made forecasts worse. In the first experiment, the groups that could adjust did better than the group that could not, and the authors report that in the third experiment the group held to a limit did better still."
    },
    {
      "type": "h",
      "text": "What do these experiments say about using AI at work?"
    },
    {
      "type": "p",
      "text": "Not much directly. The tasks asked for a forecast whose accuracy shows up as a number, and participants saw the size of each error as a number. A draft or summary from a generative AI is harder to check, and the size of its error does not come as a number. The participants were students and online workers in bonus-paid experiments, not people using AI on the job."
    },
    {
      "type": "p",
      "text": "One passage in the papers speaks for itself, though. The authors say that posing the choice as all or nothing is likely to be counterproductive. They also warn that forcing people to use an imperfect algorithm exactly as it is may breed dissatisfaction and a push for change. The papers answer this with number-forecasting tasks, and they cannot tell us whether the same holds for an AI that writes."
    },
    {
      "type": "h",
      "text": "How could you settle in advance what a mistake means?"
    },
    {
      "type": "p",
      "text": "Write down your rules for mistakes before you start using an AI. From here on this is a DMS.Labs suggestion, not a research result. We have not tested it and cannot promise an effect."
    },
    {
      "type": "p",
      "text": "Picture a language school with four staff members that hands draft replies to parents’ questions to an AI. The first week goes smoothly. In the second week, someone catches a draft that gives the class start time an hour late, just before it goes out. The director says this will not work and returns to writing every reply by hand. That one draft stands out, while the record of all the other drafts that went out without trouble does not. This school is an invented illustration."
    },
    {
      "type": "p",
      "text": "Instead, write down three things before you start. First, where mistakes are likely: pick the items that cause trouble when wrong, such as dates, amounts, and names. Second, how far a person may change the draft: reword sentences freely, but change dates and amounts only after checking the source. This is DMS.Labs’ translation of the 2018 study’s “let people adjust a little” into daily work. Third, what happens after a mistake: do not drop the tool the moment it errs. Note the mistake and what you fixed in one line each, count after a month how many drafts out of how many were wrong, and decide again."
    },
    {
      "type": "p",
      "text": "Editing has risks of its own. Earlier studies cited in the 2018 paper found that adjustments people make to an algorithm’s forecasts often make them worse. So record what you changed and why, and count whether the person’s version was better than the AI’s original."
    },
    {
      "type": "figure",
      "src": "/images/ideas/after-ai-gets-one-wrong/compass-and-penciled-route.webp",
      "alt": "A large sheet of paper lies spread out like a map on a wooden table, with a winding pencil line that has been corrected to take a short detour in the middle. A small brass compass with its lid open and a short pencil rest on the right, and the leaves of a potted vine show at the window in soft natural light. No text is legible.",
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
      "text": "Not yet. None of the studies above tested this approach with an AI that writes, used at work. There is no evidence for where the limit should sit or whether a month is the right period. What I hope for is modest: that one error does not become the entire decision about whether to keep using the tool, because the criteria were settled beforehand."
    },
    {
      "type": "p",
      "text": "There is a way to check. Use it on a single task for one month, and first record how many mistakes you counted the same way during a few weeks before you started. You need that record to compare with the period after you start using the AI."
    },
    {
      "type": "p",
      "text": "Who checks AI output, and by what standard, is in “Naming a Reviewer for AI Output.” How to test a tool before you rely on it is in “Acceptance Tests for an AI Skill.”",
      "links": [
        {
          "label": "Naming a Reviewer for AI Output",
          "href": "/en/works/ai-output-reviewer-card"
        },
        {
          "label": "Acceptance Tests for an AI Skill",
          "href": "/en/works/ai-skill-acceptance-tests"
        }
      ]
    },
    {
      "type": "p",
      "text": "This week, pick one thing an AI made, and write down three places where it is likely to go wrong and how far a person may change it. The next time a wrong result appears, open that note."
    },
    {
      "type": "p",
      "text": "If you want to review how your team uses AI, you can reach us through the contact page.",
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
      "label": "Dietvorst, Simmons & Massey · Algorithm Aversion: People Erroneously Avoid Algorithms After Seeing Them Err · Journal of Experimental Psychology: General 144(1), 114-126, 2015",
      "href": "https://doi.org/10.1037/xge0000033"
    },
    {
      "label": "Dietvorst, Simmons & Massey · Overcoming Algorithm Aversion: People Will Use Imperfect Algorithms If They Can (Even Slightly) Modify Them · Management Science 64(3), 1155-1170, 2018",
      "href": "https://doi.org/10.1287/mnsc.2016.2643"
    },
    {
      "label": "2015 paper PDF · Wharton faculty page",
      "href": "https://faculty.wharton.upenn.edu/wp-content/uploads/2016/11/20-Dietvorst-Simmons-Massey-2015.pdf"
    },
    {
      "label": "2018 paper PDF · Wharton faculty page",
      "href": "https://faculty.wharton.upenn.edu/wp-content/uploads/2016/08/Dietvorst-Simmons-Massey-2018.pdf"
    }
  ],
  "next": {
    "label": "Next: DMS Generative AI Education (in Korean)",
    "href": "/education/gen-ai"
  }
};
