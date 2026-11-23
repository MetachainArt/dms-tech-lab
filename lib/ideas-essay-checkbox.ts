/**
 * Ideas essay: "칸을 채웠다고 확인한 걸까" / "Ticking the Box, Checking the Work"
 * 한영 독립 편집본. figure 블록의 src는 /public 아래 내부 경로.
 */
import type { IdeasEssay } from "./ideas-essay-watching";

export const tickingBoxEssayKo: IdeasEssay = {
  "id": "ticking-the-box-checking-the-work",
  "date": "2026. 11. 23",
  "category": "Essay",
  "title": "칸을 채웠다고 확인한 걸까",
  "subtitle": "체크리스트 연구가 보여 주는 것과 보여 주지 못하는 것",
  "summary": "수술실과 중환자실에서는 체크리스트가 합병증과 감염을 줄였다고 보고됐지만, 온타리오 병원 101곳의 비교에서는 도입 전후 차이가 뚜렷하지 않았습니다. 세 연구와 이를 해석한 논문 둘이 확인한 것과 확인하지 못한 것을 따라가고, AI가 만든 결과를 확인하는 칸을 만들 때 미리 정해 둘 것을 DMS.Labs의 제안으로 적습니다.",
  "blocks": [
    {
      "type": "p",
      "text": "체크리스트를 도입하면 사고가 줄어들까요? 연구마다 답이 달랐습니다. 2009년에 여덟 개 병원이 참여한 수술 연구에서는 사망률이 1.5%에서 0.8%로, 입원 중 합병증이 11.0%에서 7.0%로 내려갔습니다. 2014년에 캐나다 온타리오의 병원 101곳을 비교한 연구에서는 도입 전후의 차이가 통계적으로 뚜렷하지 않았습니다. 이 글에서는 앞의 두 연구와 중환자실 연구 하나, 그리고 결과를 해석한 논문 둘이 실제로 확인한 것을 따라가 봅니다. 그다음 AI가 만든 결과를 사람이 확인하는 칸을 만들 때 무엇을 함께 정해 둘지 DMS.Labs의 제안으로 적습니다."
    },
    {
      "type": "p",
      "text": "2026년 11월 23일 확인한 자료 기준입니다. 2006년 중환자실, 2009년 수술, 2014년 온타리오 연구는 유럽 PMC에 올라 있는 논문 초록으로 읽었고 학술지 본문은 읽지 못했습니다. 2011년 Milbank Quarterly 논문도 초록만 읽었습니다. 실행 과정에 관한 내용은 2014년 BMJ Quality & Safety에 실린 Treadwell 등의 체계적 검토 본문 전체를 읽고 옮겼습니다. 이 검토는 2012년 10월까지 나온 연구를 대상으로 하므로 온타리오 연구는 들어 있지 않습니다. 그 뒤에 나온 연구는 읽지 못했습니다. 사무실 장면은 설명을 위한 가정이며 DMS 고객 사례가 아닙니다. 마지막 제안은 DMS.Labs의 생각이고 어떤 논문도 시험하지 않은 방법입니다."
    },
    {
      "type": "figure",
      "src": "/images/ideas/ticking-the-box-checking-the-work/clipboard-with-pencil-ticks.webp",
      "alt": "나무 탁자 위 클립보드에 끼운 종이에 작은 빈 네모 칸이 네 줄로 늘어서 있고, 그중 세 칸에만 연필로 가볍게 체크 표시가 되어 있다. 종이 위에는 깎은 연필 한 자루가 비스듬히 놓여 있다. 읽을 수 있는 글자는 없다.",
      "caption": "생성 이미지. 설명을 위한 책상 장면이며 실제 기록이 아닙니다.",
      "width": 1440,
      "height": 960
    },
    {
      "type": "h",
      "text": "수술 체크리스트가 사망률을 줄였다는 연구는 무엇입니까?"
    },
    {
      "type": "p",
      "text": "Haynes 등이 2009년 New England Journal of Medicine에 발표한 연구입니다. 세계보건기구(WHO)의 ‘안전한 수술이 생명을 살린다(Safe Surgery Saves Lives)’ 프로그램의 일부로, 토론토, 뉴델리, 암만, 오클랜드, 마닐라, 이파카라, 런던, 시애틀의 병원 여덟 곳이 2007년 10월부터 2008년 9월까지 참여했습니다. 병원의 규모와 나라의 소득 수준은 서로 크게 달랐습니다. 연구진은 먼저 16세 이상 비심장 수술 환자 3,733명의 자료를 모았고, 19개 항목의 수술 안전 체크리스트를 도입한 뒤 3,955명의 자료를 다시 모았습니다."
    },
    {
      "type": "p",
      "text": "결과는 이렇게 보고됐습니다. 사망률은 1.5%에서 0.8%로, 입원 중 합병증은 11.0%에서 7.0%로 내려갔습니다. 다만 이 숫자를 체크리스트 한 장의 효과로만 읽기는 어렵습니다. Treadwell 등의 검토에 따르면 저자들은 설명이 여러 요인이 겹친 것일 가능성이 크다고 인정했습니다. 거론된 요인은 체크리스트 자체, 측정을 받는다는 사실이 행동을 바꾸는 효과(호손 효과), 수술 전에 팀이 잠시 멈춰 점검하는 절차 자체, 항생제를 수술실에서 바로 쓰게 한 것 같은 절차 변화, 팀워크와 안전 문화의 변화입니다. 저자들은 호손 효과에는 반론을 폈습니다. 연구 요원이 수술실에 있던 수술과 없던 수술에서 합병증이 줄어든 폭이 같았다는 것입니다. 병원을 하나씩 빼고 다시 분석해도 결과가 유지돼, 특정 병원이 결과를 끌고 가지는 않았다고 정리됩니다."
    },
    {
      "type": "h",
      "text": "미시간 중환자실에서는 무슨 일이 있었습니까?"
    },
    {
      "type": "p",
      "text": "Pronovost 등이 2006년 같은 학술지에 발표한 연구입니다. 주로 미시간주의 중환자실 108곳이 참여에 동의했고 103곳이 자료를 보고했습니다. 목표는 혈관에 꽂은 중심정맥관과 관련된 혈류 감염을 줄이는 것이었습니다. 연구진은 근거에 바탕을 둔 개입을 적용하고 3개월마다 감염률을 쟀습니다. 카테터 사용 1,000일당 감염 건수의 중앙값은 시작할 때 2.7이었는데 개입 3개월 뒤에는 0이 됐고, 18개월 동안 최대 66%의 감소가 유지됐다고 보고했습니다. 개입의 세부 항목은 이 글에서 확인하지 못했습니다."
    },
    {
      "type": "p",
      "text": "이 성과의 이유는 뒤이은 논문이 따로 분석했습니다. 2011년 Milbank Quarterly에 실린 Dixon-Woods 등의 논문은 미시간 프로젝트가 효과를 낸 방식을 여섯 가지로 정리했습니다. 중환자실이 프로그램에 참여하고 요건을 따르게 만드는 압력, 병원 사이를 가로로 촘촘히 잇는 공동체, 감염을 사회적 문제로 다시 규정한 전문직 운동, 실천하려는 문화를 만드는 여러 개입, 감염률 자료를 규율의 힘으로 쓴 것, 그리고 ‘단단한 모서리(hard edges)’입니다. 각 항목의 설명은 본문을 읽지 못해 옮기지 않습니다. 초록에서 확인되는 것은 저자들이 효과를 도구 하나가 아니라 프로그램의 여러 장치로 설명했다는 점입니다."
    },
    {
      "type": "h",
      "text": "온타리오에서는 왜 달랐을까요?"
    },
    {
      "type": "p",
      "text": "이유는 확인되지 않았습니다. Urbach 등이 2014년 New England Journal of Medicine에 발표한 연구는 온타리오의 급성기 병원 전체에 체크리스트를 언제 도입했는지 물은 뒤, 도입 전 3개월과 도입 후 3개월의 수술 결과를 행정 건강 자료로 비교했습니다. 병원 101곳에서 도입 전 109,341건, 도입 후 106,370건의 수술이 분석됐습니다. 보정한 사망 위험(입원 중이거나 수술 뒤 30일 안)은 0.71%에서 0.65%로 내려갔지만 차이는 뚜렷하지 않았고(오즈비 0.91, 95% 신뢰구간 0.80에서 1.03, P=0.13), 수술 합병증 위험은 3.86%에서 3.82%였습니다(오즈비 0.97, 신뢰구간 0.90에서 1.03, P=0.29). 저자들은 온타리오의 체크리스트 도입이 수술 사망이나 합병증의 뚜렷한 감소와 관련되지 않았다고 결론지었습니다."
    },
    {
      "type": "p",
      "text": "이 결과가 체크리스트가 쓸모없다는 뜻은 아닙니다. 연구가 출발한 자리부터 달랐습니다. 저자들은 관찰 연구에서 나온 눈에 띄는 개선 때문에 체크리스트가 전 세계로 빠르게 퍼졌지만 도입을 의무화한 효과는 분명하지 않았다고 적었고, 병원에 도입을 권장한 온타리오 정책을 자연 실험으로 삼았습니다. 초록에는 병원들이 체크리스트를 얼마나, 어떻게 썼는지에 대한 정보가 없습니다. 그래서 효과가 없었던 것인지 쓰는 방식이 달랐던 것인지는 이 글에서 가를 수 없습니다."
    },
    {
      "type": "figure",
      "src": "/images/ideas/ticking-the-box-checking-the-work/glasses-and-magnifier-on-pages.webp",
      "alt": "창가 나무 탁자 위에 겹쳐 쌓인 인쇄 종이 위로 얇은 금속테 안경과 돋보기가 놓여 있고, 종이의 한 줄 아래에는 가는 연필선이 그어져 있다. 오른쪽에 연필이 있고 뒤쪽 창가에 화분이 보인다. 읽을 수 있는 글자는 없다.",
      "caption": "생성 이미지. 설명을 위한 책상 장면이며 실제 기록이 아닙니다.",
      "width": 1440,
      "height": 960
    },
    {
      "type": "h",
      "text": "칸을 채우는 일과 확인하는 일은 어디서 갈릴까요?"
    },
    {
      "type": "p",
      "text": "이 질문에 가장 가까운 자료는 Treadwell 등의 검토입니다. 연구 33편을 모아, 수술 체크리스트가 안전 위험의 발견, 합병증 감소, 수술팀의 소통 개선과 관련된다고 정리했습니다. 동시에 단서를 셋 달았습니다. 체크리스트는 대개 여러 개선책과 함께 도입되어 효과를 체크리스트 몫으로만 돌리기 어렵다는 것, 보고 편향이 있을 수 있다는 것(실행 연구 21편 가운데 11편이 건강 결과를 보고하지 않았습니다), 그리고 모든 체크리스트가 이롭다는 뜻은 아니라는 것입니다."
    },
    {
      "type": "p",
      "text": "실행 단계에서 나온 걸림돌도 적혀 있습니다. 사용법에 대한 혼란, 업무 흐름을 해치는 문제, 자원 확보, 그리고 직원들의 믿음과 태도, 특히 외과의의 태도입니다. 잘 풀린 곳에서 되풀이된 요소는 기관 리더를 현장 추진자로 세우는 것, 직원 훈련, 현장 의견을 받아 체크리스트를 고치는 것, 이미 모으는 정보와 겹치지 않게 하는 것이었습니다. 한 연구에서는 병원 세 곳의 도입이 불완전했습니다. 한 곳은 넘기 어려운 저항과 부서 간 소통 부족이 우려된다며 도입 시도를 접었고, 한 곳은 시범 단계를 넘기지 못했습니다. 세 번째 병원은 방임적인 리더십에 훈련도 없어서 직원들이 체크리스트를 왜, 어떻게 써야 하는지 이해하지 못했다고 합니다."
    },
    {
      "type": "p",
      "text": "칸만 채우는 방식을 일부러 막으려 한 병원도 있었습니다. Sewell 등의 연구에서는 필수 교육 영상으로 올바른 사용과 잘못된 사용을 보여 주었고, 단순히 칸에 표시하는 방식을 적극적으로 말렸습니다. 도입 뒤 체크리스트를 올바르게 쓴 비율은 97%였고 직원의 77%가 팀 소통이 나아졌다고 답했습니다. 그런데 검토 표에는 이 훈련이 합병증이나 사망의 감소와 연결되지 않았다고 적혀 있습니다. 도입 뒤 485건의 수술을 본 병원 한 곳의 자료라 일반화할 수는 없습니다. 그래도 ‘잘 쓰고 있다’는 응답과 ‘결과가 달라졌다’는 자료가 서로 다른 질문에 대한 답이라는 점은 보입니다."
    },
    {
      "type": "p",
      "text": "반대쪽 수치도 있습니다. 검토는 SURPASS 체크리스트를 다루면서, 수행된 체크리스트 6,313건을 살펴보니 41%에서 하나 이상의 누락이 발견됐다고 전합니다. 칸 하나가 실제로 무언가를 잡아내는 경우도 있다는 뜻입니다."
    },
    {
      "type": "h",
      "text": "AI 결과를 확인하는 칸을 만든다면 무엇이 달라질까요?"
    },
    {
      "type": "p",
      "text": "여기서부터는 DMS.Labs의 제안이고 어떤 논문도 시험하지 않았습니다. 위 자료에서 가져온 생각은 하나입니다. 칸에 표시했다는 기록과 확인했다는 사실은 서로 다른 자료라는 점입니다. AI가 쓴 보고서나 요약, 분류 결과를 사람이 확인하는 체크리스트를 만든다면 칸마다 네 가지를 미리 정해 두기를 제안합니다. 누가 확인하는지, 무엇을 열어 보고 확인하는지(원문과 대조하는지, 훑어보는지), 그 칸에 걸리면(문제가 발견되면) 일을 멈출 수 있는지, 그리고 한 달 동안 그 칸이 실제로 무언가를 잡아냈는지입니다."
    },
    {
      "type": "p",
      "text": "가정해 보겠습니다. 작은 회계 사무실에서 AI가 월간 거래 요약을 만들고, 직원 한 명이 다섯 칸짜리 목록을 확인한 뒤 보고서를 내보냅니다. 한 달이 지나 세어 보니 네 번째 칸이 한 번도 걸리지 않았습니다. 이 칸이 필요 없다는 뜻일 수 있고, 확인이 눈으로 훑는 데 그쳤다는 뜻일 수도 있습니다. 표시만 남아 있으면 둘을 가를 수 없습니다. 칸마다 ‘무엇을 열어 봤는지’ 한 줄이 함께 있었다면 해석이 달라집니다. 이 장면은 설명을 위한 가정이며 실제 사례가 아닙니다."
    },
    {
      "type": "p",
      "text": "Treadwell 등의 검토는 WHO가 병원에 건넨 안내를 인용합니다. 체크리스트를 현장에 맞게 고쳐도 좋지만, 할 수 없다는 이유로 안전 단계를 빼지는 말라는 내용입니다. 이 원칙은 AI 결과를 확인하는 칸에도 옮겨 볼 만합니다. 칸을 고치는 일은 일하는 사람에게 맡기고, 칸을 지울 때는 누가 왜 지웠는지를 남겨 두는 것입니다. 이것도 제안이며 효과는 시험하지 않았습니다."
    },
    {
      "type": "p",
      "text": "한계도 분명합니다. 수술실과 중환자실은 사람의 몸을 다루는 현장이고, 이 연구들이 AI 결과를 검수하는 사무 업무에 그대로 들어맞는다는 근거는 없습니다. 이 글이 옮겨 온 것은 체크리스트의 도입 여부보다 쓰이는 방식이 결과를 갈랐을 수 있다는 가설이며, 아직 확인된 사실이 아닙니다."
    },
    {
      "type": "h",
      "text": "이번 주에 해 볼 수 있는 일은 무엇입니까?"
    },
    {
      "type": "p",
      "text": "팀에서 이미 쓰는 체크리스트 하나를 고르십시오. AI 결과를 확인하는 목록이 아니어도 됩니다. 칸마다 ‘누가, 무엇을 열어 보고’ 확인했는지 한 줄씩 적게 하고, 일주일 뒤에 가장 자주 걸린 칸과 한 번도 걸리지 않은 칸을 세어 보십시오. 한 번도 걸리지 않은 칸은 바로 지우지 말고, 그 칸이 무엇을 어떻게 확인하는지부터 물어보십시오."
    },
    {
      "type": "p",
      "text": "AI 결과를 누가 어떤 기준으로 확인할지는 「AI 결과 검수자 정하기」에, 쓰기 전에 시험하는 기준은 「AI 스킬 합격 기준」에, 자동화가 한 일을 기록으로 남기는 방법은 「자동화가 한 일, 한 줄로 남기기」에 정리해 두었습니다.",
      "links": [
        {
          "label": "AI 결과 검수자 정하기",
          "href": "/works/ai-output-reviewer-card"
        },
        {
          "label": "AI 스킬 합격 기준",
          "href": "/works/ai-skill-acceptance-tests"
        },
        {
          "label": "자동화가 한 일, 한 줄로 남기기",
          "href": "/works/automation-run-record"
        }
      ]
    },
    {
      "type": "p",
      "text": "팀의 AI 활용 방식을 점검해 보고 싶으시면 문의 페이지로 연락하실 수 있습니다.",
      "links": [
        {
          "label": "문의",
          "href": "/contact"
        }
      ]
    }
  ],
  "sources": [
    {
      "label": "Haynes 외 · A Surgical Safety Checklist to Reduce Morbidity and Mortality in a Global Population · New England Journal of Medicine 360, 491-499, 2009",
      "href": "https://doi.org/10.1056/NEJMsa0810119"
    },
    {
      "label": "Pronovost 외 · An Intervention to Decrease Catheter-Related Bloodstream Infections in the ICU · New England Journal of Medicine 355, 2725-2732, 2006",
      "href": "https://doi.org/10.1056/NEJMoa061115"
    },
    {
      "label": "Urbach 외 · Introduction of Surgical Safety Checklists in Ontario, Canada · New England Journal of Medicine 370, 1029-1038, 2014",
      "href": "https://doi.org/10.1056/NEJMsa1308261"
    },
    {
      "label": "Dixon-Woods 외 · Explaining Michigan: Developing an Ex Post Theory of a Quality Improvement Program · The Milbank Quarterly 89, 167-205, 2011",
      "href": "https://doi.org/10.1111/j.1468-0009.2011.00625.x"
    },
    {
      "label": "Treadwell, Lucas & Tsou · Surgical checklists: a systematic review of impacts and implementation · BMJ Quality & Safety 23, 299-318, 2014",
      "href": "https://doi.org/10.1136/bmjqs-2012-001797"
    }
  ],
  "next": {
    "label": "다음: DMS 업무 자동화",
    "href": "/automation"
  }
};

export const tickingBoxEssayEn: IdeasEssay = {
  "id": "ticking-the-box-checking-the-work",
  "date": "2026. 11. 23",
  "category": "Essay",
  "title": "Ticking the Box, Checking the Work",
  "subtitle": "What the checklist studies show, and what they cannot",
  "summary": "In operating rooms and intensive care units, checklists were reported to cut complications and infections, yet a comparison of 101 Ontario hospitals found no clear difference before and after adoption. This essay follows what three studies and two papers interpreting them did and did not show, then offers a DMS.Labs suggestion for what to settle in advance when you build boxes for checking what an AI produced.",
  "blocks": [
    {
      "type": "p",
      "text": "Does adopting a checklist reduce accidents? The studies disagree. In a 2009 surgical study across eight hospitals, the death rate fell from 1.5% to 0.8% and in-hospital complications fell from 11.0% to 7.0%. In a 2014 comparison of 101 hospitals in Ontario, Canada, the differences before and after adoption were not statistically clear. This essay follows what those two studies, an intensive care unit study, and two papers that interpret the results actually established. It then sets out, as a DMS.Labs suggestion, what to decide up front when you build the boxes a person ticks after checking something an AI produced."
    },
    {
      "type": "p",
      "text": "This is based on sources checked on November 23, 2026. The 2006 ICU study, the 2009 surgical study and the 2014 Ontario study were read through their abstracts on Europe PMC; the journal full texts were not read. The 2011 Milbank Quarterly paper was also read in abstract only. The material on implementation comes from the full text of the systematic review by Treadwell and colleagues in BMJ Quality & Safety (2014). That review covers studies up to October 2012, so it does not include the Ontario study, and nothing published after the Ontario study was read. The office scene is a hypothetical for illustration, not a DMS client case. The closing suggestion is DMS.Labs' own idea and has not been tested in any paper."
    },
    {
      "type": "figure",
      "src": "/images/ideas/ticking-the-box-checking-the-work/clipboard-with-pencil-ticks.webp",
      "alt": "A sheet of paper on a clipboard on a wooden table, printed with four rows of small empty square boxes, only three of which carry a light pencil tick. A sharpened pencil lies diagonally across the paper. There is no readable text.",
      "caption": "Generated image. An illustrative desk scene, not a real record.",
      "width": 1440,
      "height": 960
    },
    {
      "type": "h",
      "text": "Which study found that a surgical checklist cut deaths?"
    },
    {
      "type": "p",
      "text": "It is the 2009 study by Haynes and colleagues in the New England Journal of Medicine. It was part of the World Health Organization's Safe Surgery Saves Lives program. Eight hospitals, in Toronto, New Delhi, Amman, Auckland, Manila, Ifakara, London and Seattle, took part between October 2007 and September 2008, and they differed widely in size and in the income level of their countries. The team first collected data on 3,733 patients aged 16 or older who were having noncardiac surgery. After a 19-item surgical safety checklist was introduced, they collected data on another 3,955."
    },
    {
      "type": "p",
      "text": "The reported results: the death rate fell from 1.5% to 0.8%, and in-hospital complications fell from 11.0% to 7.0%. Still, it is hard to credit one sheet of paper with all of that. According to the Treadwell review, the authors acknowledged that the explanation was most likely multifactorial. The factors discussed were the checklist itself; a Hawthorne effect, in which people change their behavior because they know they are being measured; the formal pause before surgery that the checklist requires; changes in practice, such as giving antibiotics in the operating room rather than on the ward; and shifts in teamwork and safety culture. The authors argued against the Hawthorne explanation: complications fell by the same amount in operations where study staff were in the room and in those where they were not. Dropping any single hospital from the analysis left the findings in place, so no one site was driving them."
    },
    {
      "type": "h",
      "text": "What happened in the Michigan intensive care units?"
    },
    {
      "type": "p",
      "text": "Pronovost and colleagues reported this in the same journal in 2006. A total of 108 intensive care units, mostly in Michigan, agreed to take part, and 103 reported data. The goal was to reduce bloodstream infections linked to central venous catheters, the catheters threaded into a large vein. The team applied an evidence-based intervention and measured infection rates every three months. The median rate per 1,000 catheter-days fell from 2.7 at the start to 0 three months after the intervention, and a reduction of up to 66% held through the 18-month study period. The details of the intervention were not checked for this essay."
    },
    {
      "type": "p",
      "text": "A later paper analyzed why the program worked. Writing in the Milbank Quarterly in 2011, Dixon-Woods and colleagues described six ways the Michigan project achieved its effects: pressure on units to join and follow the program's requirements; a densely connected community with strong links between hospitals; a professional movement that reframed these infections as a social problem; several interventions that worked in different ways to build a culture of commitment; infection-rate data used as a disciplining force; and what they call \"hard edges.\" Only the abstract was read, so the detail behind each point is not reproduced here. What the abstract does show is that the authors explained the effect through several parts of a program rather than through a single tool."
    },
    {
      "type": "h",
      "text": "Why was Ontario different?"
    },
    {
      "type": "p",
      "text": "That is not known. Urbach and colleagues, in the New England Journal of Medicine in 2014, surveyed every acute care hospital in Ontario to learn when it adopted a surgical safety checklist. They then compared outcomes in the three months before and the three months after adoption, using administrative health data. Across 101 hospitals, 109,341 procedures were analyzed before adoption and 106,370 after. The adjusted risk of death in the hospital or within 30 days fell from 0.71% to 0.65%, a difference that was not statistically clear (odds ratio 0.91; 95% confidence interval 0.80 to 1.03; P=0.13). The adjusted risk of complications went from 3.86% to 3.82% (odds ratio 0.97; 0.90 to 1.03; P=0.29). The authors concluded that adopting checklists in Ontario was not associated with significant reductions in operative mortality or complications."
    },
    {
      "type": "p",
      "text": "That does not make the checklist useless. The study started from a different place. The authors noted that observational studies had shown striking improvements and led to rapid adoption worldwide, but that the effect of mandatory adoption was unclear. Ontario's policy encouraging hospitals to adopt checklists served as their natural experiment. The abstract says nothing about how fully, or in what way, hospitals used the checklist. So this essay cannot tell whether the checklist had no effect or was simply used differently."
    },
    {
      "type": "figure",
      "src": "/images/ideas/ticking-the-box-checking-the-work/glasses-and-magnifier-on-pages.webp",
      "alt": "Thin metal-framed reading glasses and a magnifying glass rest on a loose stack of printed pages on a wooden table by a window. A faint pencil line is drawn under one row of the top page, a pencil lies on the right, and a houseplant stands by the window behind. There is no readable text.",
      "caption": "Generated image. An illustrative desk scene, not a real record.",
      "width": 1440,
      "height": 960
    },
    {
      "type": "h",
      "text": "Where does ticking a box part ways with checking?"
    },
    {
      "type": "p",
      "text": "The closest evidence is the Treadwell review. It pooled 33 studies and found surgical checklists associated with more hazards detected, fewer complications and better communication among operating staff. It also attached three caveats. Checklists are usually introduced alongside other improvements, so credit cannot go to the checklist alone. Reporting bias may play a role: 11 of the 21 implementation studies did not report health outcomes. And the findings do not mean that every surgical checklist helps."
    },
    {
      "type": "p",
      "text": "The review also lists obstacles in practice: confusion about how to use the list, threats to workflow, getting regular access to resources, and the beliefs and attitudes of staff, surgeons in particular. Where things went better, the recurring elements were enlisting institutional leaders as local champions, training staff, adapting the checklist to staff feedback, and avoiding duplication of information already collected. In one study, implementation was incomplete at three hospitals. One gave up for fear of insurmountable resistance and poor communication between departments, and another could not move beyond a pilot. At the third, with hands-off leadership and no training, staff understood neither why nor how the checklist should be used."
    },
    {
      "type": "p",
      "text": "One hospital actively tried to prevent box-ticking. In the study by Sewell and colleagues, a compulsory training video showed correct and incorrect uses of the checklist, and staff were actively discouraged from a simple tick-box approach. After training, the checklist was used correctly 97% of the time, and 77% of staff said it improved team communication. Yet the review's table records no association between the training and reductions in complications or mortality. This is one hospital, with 485 operations observed after training, so it cannot be generalized. It does show that \"we are using it well\" and \"outcomes changed\" answer different questions."
    },
    {
      "type": "p",
      "text": "The review also reports a different kind of figure. In its section on the SURPASS checklist, it notes a review of 6,313 completed checklists in which 41% caught at least one oversight. A box can, in some settings, catch something real."
    },
    {
      "type": "h",
      "text": "What changes if the boxes check AI output?"
    },
    {
      "type": "p",
      "text": "From here on, this is a DMS.Labs suggestion that no paper has tested. One idea carries over from the sources above: a record that a box was ticked and the fact that something was checked are different things. If you build a checklist for a person reviewing a report, summary or classification produced by an AI, we suggest settling four things for each box in advance: who checks it; what they open in order to check it (a comparison against the source, or a skim); whether a failed box can stop the work; and, after a month, whether that box actually caught anything."
    },
    {
      "type": "p",
      "text": "Imagine a small accounting office. An AI drafts a monthly summary of transactions, and one employee works through a five-box list before the report goes out. After a month, the fourth box has never been flagged. That could mean the box is unnecessary, or it could mean the check was only ever a glance. A tick alone cannot tell the two apart. If each box also carried one line saying what was opened, the reading would change. This scene is a hypothetical for illustration, not a real case."
    },
    {
      "type": "p",
      "text": "The Treadwell review quotes the advice the WHO gave hospitals: customize the checklist for your setting, but do not remove safety steps just because you are unable to accomplish them. That principle may carry over to boxes that check AI output. Leave the editing to the people doing the work, and when a box is removed, record who removed it and why. This too is a suggestion, and its effect has not been tested."
    },
    {
      "type": "p",
      "text": "The limits are plain. Operating rooms and intensive care units deal with human bodies, and nothing here shows that these results apply to office work that reviews AI output. What this essay carries over is a hypothesis: that how a checklist is used, more than whether it was adopted, may have shaped the results. It is not an established fact."
    },
    {
      "type": "h",
      "text": "What can you try this week?"
    },
    {
      "type": "p",
      "text": "Pick one checklist your team already uses; it does not have to be about AI. For each box, ask the person to write one line saying who checked it and what they opened. After a week, count which boxes were flagged most often and which were never flagged. Do not delete a box that was never flagged right away; first ask what it checks and how."
    },
    {
      "type": "p",
      "text": "Who reviews AI output, and by what standard, is in “Naming a Reviewer for AI Output.” How to test a tool before you rely on it is in “Acceptance Tests for an AI Skill.” How to record what an automation did is in “One Line for Every Automation Run.”",
      "links": [
        {
          "label": "Naming a Reviewer for AI Output",
          "href": "/en/works/ai-output-reviewer-card"
        },
        {
          "label": "Acceptance Tests for an AI Skill",
          "href": "/en/works/ai-skill-acceptance-tests"
        },
        {
          "label": "One Line for Every Automation Run",
          "href": "/en/works/automation-run-record"
        }
      ]
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
      "label": "Haynes et al. · A Surgical Safety Checklist to Reduce Morbidity and Mortality in a Global Population · New England Journal of Medicine 360, 491-499, 2009",
      "href": "https://doi.org/10.1056/NEJMsa0810119"
    },
    {
      "label": "Pronovost et al. · An Intervention to Decrease Catheter-Related Bloodstream Infections in the ICU · New England Journal of Medicine 355, 2725-2732, 2006",
      "href": "https://doi.org/10.1056/NEJMoa061115"
    },
    {
      "label": "Urbach et al. · Introduction of Surgical Safety Checklists in Ontario, Canada · New England Journal of Medicine 370, 1029-1038, 2014",
      "href": "https://doi.org/10.1056/NEJMsa1308261"
    },
    {
      "label": "Dixon-Woods et al. · Explaining Michigan: Developing an Ex Post Theory of a Quality Improvement Program · The Milbank Quarterly 89, 167-205, 2011",
      "href": "https://doi.org/10.1111/j.1468-0009.2011.00625.x"
    },
    {
      "label": "Treadwell, Lucas & Tsou · Surgical checklists: a systematic review of impacts and implementation · BMJ Quality & Safety 23, 299-318, 2014",
      "href": "https://doi.org/10.1136/bmjqs-2012-001797"
    }
  ],
  "next": {
    "label": "Next: DMS Workflow Automation (in Korean)",
    "href": "/automation"
  }
};
