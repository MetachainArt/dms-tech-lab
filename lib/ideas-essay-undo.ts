import type { IdeasEssay } from "./ideas-essay-watching";

export const undoBoundaryEssayKo: IdeasEssay = {
  "id": "does-undo-erase-what-happened",
  "date": "2026. 10. 12",
  "category": "Essay",
  "title": "취소하면 없던 일이 될까",
  "subtitle": "화면을 되돌리는 일과 결과를 되돌리는 일",
  "summary": "실행 취소는 어디까지 되돌려 줄까요? 바뀐 문서는 복구해도 누군가 이미 읽은 내용까지 지울 수는 없습니다. 취소 버튼이 약속하는 범위와 자동화에 남겨야 할 확인 시간을 생각합니다.",
  "blocks": [
    {
      "type": "p",
      "text": "실행 취소를 누르면 화면의 일부는 이전 상태로 돌아갑니다. 그 사이 다른 사람이 내용을 읽었거나 그 내용을 보고 일을 시작했다면, 그 결과까지 사라지는 것은 아닙니다. 저는 도구에 일을 맡길 때 취소 버튼의 유무보다 어디까지 되돌릴 수 있는지 먼저 따져 보는 편이 낫다고 생각합니다."
    },
    {
      "type": "p",
      "text": "문서에서 잘못 지운 문장을 되살리는 일은 익숙합니다. 방금 전 상태가 남아 있고 그 상태를 다시 불러오면 됩니다. 이런 경험을 자주 하다 보면 다른 일에도 비슷한 여유가 있을 것 같습니다. 일단 해 보고 마음에 들지 않으면 취소하면 된다는 생각입니다. 초안의 문장을 고치는 동안에는 그 생각이 꽤 잘 맞지만, 문서가 다른 사람에게 전달되는 순간부터는 확인할 것이 늘어납니다."
    },
    {
      "type": "p",
      "text": "아래의 문서와 메시지 상황은 차이를 설명하기 위한 가정입니다. 특정 고객사의 사고나 제가 겪은 일을 옮긴 것이 아닙니다. 자료는 2026년 10월 12일 확인한 Nielsen Norman Group의 사용성 설명과 W3C의 WCAG 2.2 오류 방지 기준을 참고했습니다. 두 자료가 직접 말하는 범위와, 그 범위에서 제가 업무 자동화를 생각하며 덧붙인 판단을 나누어 적습니다."
    },
    {
      "type": "h",
      "text": "되돌아갈 자리가 있을 때"
    },
    {
      "type": "p",
      "text": "Nielsen Norman Group은 사용자 통제와 자유를 설명하면서 이전 단계로 돌아가기, 진행하던 작업을 취소하기, 상태 변경을 되돌리기를 구분합니다. 뒤로 가기와 닫기, 취소, 실행 취소는 모두 사용자가 원하지 않는 상태에서 빠져나오도록 돕지만 같은 일을 하는 버튼은 아닙니다. 무엇이 유지되고 무엇이 사라지는지 사용자가 예상할 수 있어야 합니다."
    },
    {
      "type": "p",
      "text": "가령 입력 창을 닫았을 때 작성하던 내용이 남는 경우와 지워지는 경우를 생각해 보면 차이가 드러납니다. 모양은 같은 닫기 버튼이어도 이후에 할 일은 다릅니다. 다시 열어서 이어 쓰면 되는지, 처음부터 써야 하는지 알 수 없다면 누르기 전에 망설이게 됩니다. 버튼의 이름만으로 그 뒤의 상태를 설명하기 어려운 순간입니다."
    },
    {
      "type": "p",
      "text": "되돌릴 수 있다는 확신은 마음대로 실수해도 된다는 허락과 다릅니다. 잘못 누른 뒤 다시 고칠 방법이 눈에 보이면, 사용자는 선택지 하나를 살펴보는 데 필요한 부담을 덜 수 있습니다. NN/g도 사용자가 실수를 고치고 선택을 되짚는 기능을 탐색과 학습에 연결해 설명합니다. 이 글에서는 그 효과의 크기를 숫자로 주장하거나 AI 도구에서도 똑같이 검증됐다고 말하지 않습니다."
    },
    {
      "type": "p",
      "text": "종이에 연필로 쓴 문장을 지우면 흐린 자국이 남기도 합니다. 화면 속 문서는 이전 내용을 더 말끔하게 복구할 수 있습니다. 그런데 그 문서를 본 사람이 이미 다른 일을 했다면 문서 자체를 복구하는 것으로는 부족합니다. 여기서부터는 저장된 상태와 그 상태 때문에 생긴 일을 따로 봐야 합니다."
    },
    {
      "type": "h",
      "text": "화면 밖에서 일어난 일"
    },
    {
      "type": "p",
      "text": "초안을 잘못 고친 경우와 잘못된 초안을 전달한 경우는 겉으로는 같은 문장 실수입니다. 앞의 경우에는 원본과 수정본을 비교해 문장을 되돌리면 됩니다. 뒤의 경우에는 받는 사람이 어느 내용을 읽었는지, 다른 사람에게 전달했는지, 그 내용으로 무엇을 결정했는지도 확인해야 할 수 있습니다. 수정본 하나를 보내는 일만으로 끝나는지는 상황에 따라 다릅니다."
    },
    {
      "type": "p",
      "text": "같은 이유로 공개한 글을 내리거나 값을 다시 수정했다고 해서 그 시간 사이의 일을 모두 없던 일로 만들었다고 단정할 수 없습니다. 누군가 본 내용이나 이미 만들어 둔 사본은 현재 화면과 별도로 남을 수 있습니다. 실제로 얼마나 퍼졌는지는 확인해야 할 사실입니다. 퍼졌을 것이라고 겁을 주거나, 아무도 보지 않았을 것이라고 안심시키는 추측은 둘 다 피해야 합니다."
    },
    {
      "type": "p",
      "text": "되돌릴 수 있는 부분부터 복구하고 남은 영향을 따로 다루자는 제안입니다. 기록 한 줄을 원래 값으로 바꿨다면 그 복구는 완료라고 말할 수 있습니다. 그 값으로 만들어진 문서가 아직 돌아다닌다면 문서의 정정은 남아 있습니다. 무엇을 끝냈고 무엇을 아직 모르는지 나누어 말하면 다음 행동도 구체해집니다."
    },
    {
      "type": "p",
      "text": "자동화 화면의 성공 표시에도 같은 질문을 붙일 만합니다. 작업을 중단했다는 표시는 다음 행동을 멈췄다는 뜻일 수 있고, 이미 실행한 행동을 복구했다는 뜻일 수도 있습니다. 실제 도구의 동작을 확인하기 전에는 어느 쪽인지 정할 수 없습니다. 중단 버튼을 눌렀다는 사실과 결과를 확인했다는 사실을 같은 완료 기록에 합치지 않는 편이 좋겠습니다."
    },
    {
      "type": "figure",
      "src": "/gallery/undo-boundary/pencil-trace.webp",
      "alt": "창가 나무 책상 위 연필과 지우개, 희미한 연필 자국이 남은 종이",
      "caption": "생성 이미지. 특정 작업이나 실제 기록을 촬영한 사진이 아닙니다.",
      "width": 1440,
      "height": 960
    },
    {
      "type": "h",
      "text": "확인은 어느 순간에 필요할까요?"
    },
    {
      "type": "p",
      "text": "되돌리기 어려운 영향을 만들기 전에 확인할 수 있는 순간을 남기는 것이 제 판단입니다. 확인 창을 모든 클릭에 붙이면 검토가 형식으로 흐를 수 있으므로, 무엇이 바뀌는지와 누구에게 영향을 주는지를 기준으로 확인할 지점을 고르는 편이 낫습니다. 이것은 모든 작업에 똑같은 절차를 적용하라는 뜻은 아닙니다."
    },
    {
      "type": "p",
      "text": "W3C의 WCAG 2.2 성공 기준 3.3.4는 법적 약속이나 금융 거래를 발생시키는 웹페이지, 사용자가 통제할 수 있는 저장 데이터를 수정하거나 삭제하는 웹페이지, 시험 응답을 제출하는 웹페이지를 다룹니다. 이런 경우 제출을 되돌릴 수 있거나, 입력 오류를 검사하고 고칠 기회를 주거나, 제출 확정 전에 정보를 검토하고 확인하고 수정할 방법을 제공하는 조건 중 적어도 하나가 충족돼야 한다고 설명합니다."
    },
    {
      "type": "p",
      "text": "여기서 눈여겨볼 부분은 선택 가능한 방법이 있다는 점입니다. 모든 행동을 사후에 완벽히 되돌려야 한다는 기준이 아닙니다. 되돌릴 수 없는 행동에는 실행 전에 검토할 자리를 마련하는 방법도 있습니다. 같은 문서는 단순한 문서 작성과 편집, 매번 저장하는 행동에 일일이 확인을 요구하려는 의도가 아니라고 밝힙니다. 기준이 겨냥하는 범위를 넓혀 읽으면 평범한 수정까지 불편하게 만들 수 있습니다."
    },
    {
      "type": "p",
      "text": "이 접근성 기준을 모든 AI 업무의 인증 기준으로 쓸 수는 없습니다. 저는 그 설명에서 확인 시간을 어디에 배치할지에 관한 힌트를 얻습니다. 외부로 나갈 문서라면 수신자와 첨부 파일을 전송 전에 볼 수 있어야 하고, 데이터를 바꾸는 일이라면 바뀔 대상을 실행 전에 확인할 수 있어야 합니다. 이미 끝난 일을 취소할 방법이 불완전할수록 그 앞의 검토가 더 구체해야 한다는 제안입니다."
    },
    {
      "type": "h",
      "text": "되돌릴 범위를 살피는 순서"
    },
    {
      "type": "p",
      "text": "1. 원래 상태가 어디에 남는지 봅니다. 원본 문서나 이전 값이 실제로 있어야 복구할 대상을 정할 수 있습니다. 있다고 알려진 백업과 지금 열어서 확인한 백업은 다릅니다. 복구에 필요한 자료를 찾지 못했다면 되돌릴 수 있는 작업으로 분류하기 어렵습니다."
    },
    {
      "type": "p",
      "text": "2. 바뀐 내용을 누가 볼 수 있는지 살핍니다. 나 혼자 쓰는 복사본인지, 팀이 함께 읽는 자료인지, 외부로 전달할 내용인지에 따라 영향의 범위가 달라집니다. 읽기 권한이 있다는 사실과 실제로 읽었다는 사실은 구분합니다. 확인되지 않은 열람을 사실처럼 기록할 필요는 없습니다."
    },
    {
      "type": "p",
      "text": "3. 되돌리는 데 필요한 사람과 시간을 적습니다. 혼자 이전 버전을 선택하면 되는 일과 다른 담당자의 협조가 필요한 일은 같은 취소 가능 목록에 넣기 어렵습니다. 여기서 정해진 시간 수치를 제시하지는 않습니다. 해당 업무에서 확인한 복구 절차와 조건을 적는 것이 먼저입니다."
    },
    {
      "type": "p",
      "text": "4. 복구 후 확인할 결과를 정합니다. 이전 값이 돌아왔는지, 이미 만든 산출물에도 수정이 필요한지, 다음 실행이 멈췄는지를 각각 확인합니다. 같은 버튼으로 여러 일을 처리하는 도구라면, 버튼 이름보다 그 뒤에 확인할 상태를 기준으로 완료를 기록하는 편이 정확합니다."
    },
    {
      "type": "figure",
      "src": "/gallery/undo-boundary/open-envelope.webp",
      "alt": "따뜻한 빛이 드는 선반 위 열린 크림색 봉투와 종이, 옆에 놓인 작은 종이 클립",
      "caption": "생성 이미지. 특정 작업이나 실제 기록을 촬영한 사진이 아닙니다.",
      "width": 1440,
      "height": 960
    },
    {
      "type": "h",
      "text": "DMS의 권한 단계와는 어떻게 다를까요?"
    },
    {
      "type": "p",
      "text": "DMS.Labs의 「AI 자동화, 권한을 세 단계로 나눠 주기」는 AI가 읽고 초안을 만들고 실행하는 범위를 나누는 실무 가이드입니다. 이 글은 그중 실행 뒤에 되돌릴 수 있는 범위를 더 좁게 생각해 본 것입니다. 읽기와 초안 단계로 남겨 두면 아직 전달되지 않은 내용을 고칠 자리가 있습니다. 실행 권한을 주더라도 외부 영향이 큰 행동에는 확인을 남길 수 있습니다.",
      "links": [
        {
          "label": "자동화 권한 단계 가이드 읽기",
          "href": "/works/automation-permission-ladder"
        }
      ]
    },
    {
      "type": "p",
      "text": "관련 가이드인 「AI에게 일을 시키기 전에, 업무 설명서 한 장부터 씁니다」도 작업의 대상과 완료 조건을 먼저 적는 방향을 제시합니다. 여기서 완료 조건에 복구 상태를 함께 적어 두면, 실행을 멈춘 것과 이전 상태를 되찾은 것을 구분하기 쉬워집니다. 실제 프로젝트에서 이 방법으로 얼마를 아꼈다는 성과는 이 글에 없으며, 가이드의 내용을 확장한 판단 기준으로 읽어 주시면 됩니다.",
      "links": [
        {
          "label": "AI 업무 설명서 가이드 읽기",
          "href": "/works/ai-skill-job-sheet"
        }
      ]
    },
    {
      "type": "h",
      "text": "취소 버튼이 있으면 자동 실행해도 될까요?"
    },
    {
      "type": "p",
      "text": "버튼이 있다는 이유만으로 자동 실행 범위를 넓히기는 어렵습니다. 어떤 상태를 되돌리는지, 언제까지 가능한지, 그 사이 영향을 받은 사람이 있는지를 먼저 확인해야 합니다. 답이 불분명한 작업은 초안에 머물러도 괜찮습니다. 자동화 안에서도 행동마다 실행 속도와 검토 조건을 달리 정할 수 있습니다."
    },
    {
      "type": "p",
      "text": "지금 쓰는 도구의 취소 기능 하나를 고른 뒤, 어떤 일을 되돌렸다고 말할 수 있는지 한 문장으로 적어 보는 것부터 시작해 볼 만합니다. 가령 문서의 이전 버전을 복구했다는 설명은 확인할 대상이 분명합니다. 이미 전달된 정보까지 사라졌다는 설명은 훨씬 많은 확인을 요구합니다. 작업을 맡기는 사람과 실행하는 도구가 그 차이를 같은 뜻으로 이해하는지 살펴보면 됩니다."
    }
  ],
  "sources": [
    {
      "label": "Nielsen Norman Group · User Control and Freedom",
      "href": "https://www.nngroup.com/articles/user-control-and-freedom/"
    },
    {
      "label": "W3C · WCAG 2.2 Understanding SC 3.3.4",
      "href": "https://www.w3.org/WAI/WCAG22/Understanding/error-prevention-legal-financial-data.html"
    }
  ],
  "next": {
    "label": "다음에 볼 것: 자동화·개발 및 교육 협업 안내",
    "href": "/contact"
  }
};

export const undoBoundaryEssayEn: IdeasEssay = {
  "id": "does-undo-erase-what-happened",
  "date": "2026. 10. 12",
  "category": "Essay",
  "title": "Does Undo Erase What Happened?",
  "subtitle": "Restoring a screen and reversing its effects",
  "summary": "Undo may restore a document without reversing what someone has already read or acted on. A reflection on the limits of cancellation and the review time worth keeping in automated work.",
  "blocks": [
    {
      "type": "p",
      "text": "Undo can return part of a screen to its earlier state. If someone has already read the content or begun work because of it, that effect may remain. Before handing a task to a tool, I think it is worth asking exactly what can be restored, rather than only looking for an Undo button."
    },
    {
      "type": "p",
      "text": "Recovering a sentence deleted from a document is familiar work. The earlier state is still available, so the editor brings it back. It is easy to carry that expectation into other tasks: try something now, cancel it later if it is wrong. That is often a reasonable approach while a draft stays private. Once the document reaches another person, there is more to check."
    },
    {
      "type": "p",
      "text": "The document and message situations below are hypothetical illustrations, not accounts of a client incident or something I experienced. I checked the Nielsen Norman Group explanation of user control and freedom and the W3C WCAG 2.2 error-prevention guidance on October 12, 2026. I distinguish what those sources say from the judgments I draw about automated work."
    },
    {
      "type": "h",
      "text": "Having somewhere to return to"
    },
    {
      "type": "p",
      "text": "Nielsen Norman Group separates going back a step, cancelling an unfinished task, and undoing a change of state. Back, Close, Cancel and Undo help people leave unwanted situations, but they do not necessarily do the same thing. People need to be able to anticipate what will remain after using each control."
    },
    {
      "type": "p",
      "text": "Consider closing an input window. In one application, the unfinished text is retained; in another, it disappears. The same-looking control leaves you with different work. Can you reopen the window and continue, or do you need to begin again? When that is unclear, the name of the button is not enough to describe the state it will leave behind."
    },
    {
      "type": "p",
      "text": "Knowing how to recover is different from permission to make any mistake. A visible way to correct an error reduces some of the burden of exploring a choice. NN/g connects correction and backtracking with exploration and learning. I am not claiming a measured effect size here, or that an identical effect has been established for AI tools."
    },
    {
      "type": "p",
      "text": "Erasing a pencil sentence can leave a faint mark on the paper. A digital editor may restore the earlier wording more cleanly. Yet if someone has already acted on the document, restoring the file is only part of the work. We need to separate the saved state from the events that followed from it."
    },
    {
      "type": "h",
      "text": "What happened beyond the screen"
    },
    {
      "type": "p",
      "text": "Editing a draft incorrectly and distributing an incorrect draft may begin with the same sentence error. In the first case, comparing versions and restoring the wording may be enough. In the second, you may also need to find out which version the recipient read, whether it was forwarded, and what decisions it informed. Whether sending a correction finishes the job depends on the situation."
    },
    {
      "type": "p",
      "text": "Removing a public post or changing a value back likewise does not establish that every intervening effect has disappeared. A reader may retain the information, and a copy may exist independently of the current screen. How far the material travelled is a fact to investigate. Neither assuming a wide spread nor assuming that nobody saw it helps."
    },
    {
      "type": "p",
      "text": "My proposal is to restore the parts that can be restored and address the remaining effects separately. If a record has returned to its earlier value, that restoration can be reported as complete. If a document based on the wrong value is still in circulation, correcting the document remains another task. Naming what is finished and what is unknown makes the next action more specific."
    },
    {
      "type": "p",
      "text": "The same distinction applies to a success message in an automation tool. A stopped status may mean that future actions have been prevented, or it may mean that earlier actions have been reversed. You cannot choose between those meanings without checking the tool. Pressing Stop and verifying the result should not be collapsed into a single completion record."
    },
    {
      "type": "figure",
      "src": "/gallery/undo-boundary/pencil-trace.webp",
      "alt": "A pencil and eraser beside faint pencil traces on paper on a wooden desk by a window",
      "caption": "Generated image, not a photograph of a particular task or actual record.",
      "width": 1440,
      "height": 960
    },
    {
      "type": "h",
      "text": "When should review happen?"
    },
    {
      "type": "p",
      "text": "I would keep a review point before creating an effect that is hard to reverse. Attaching a confirmation dialog to every click can turn review into a formality. It makes more sense to choose the review points by what changes and whom the change affects, without treating every task as if it carried the same consequences."
    },
    {
      "type": "p",
      "text": "WCAG 2.2 Success Criterion 3.3.4 covers web pages that create legal commitments or financial transactions, modify or delete user-controllable stored data, or submit test responses. At least one of its conditions must hold: submissions can be reversed; entered data is checked for errors with an opportunity to correct them; or a mechanism allows review, confirmation and correction before the submission is finalized."
    },
    {
      "type": "p",
      "text": "The choice among those conditions matters. This is not a requirement to make every action perfectly reversible afterwards. Review before finalization is another approach. The explanation also says that it is not intended to require confirmation for every save or for ordinary document creation and editing. Reading the scope too broadly would add friction to everyday revisions."
    },
    {
      "type": "p",
      "text": "An accessibility criterion is not a universal certification rule for AI workflows. I use its explanation as a way to think about where review belongs. For an outgoing document, the recipient and attachment should be visible before sending. For a data change, the target should be visible before execution. Where recovery afterwards is incomplete, I would make the review beforehand more specific."
    },
    {
      "type": "h",
      "text": "A sequence for checking what can be restored"
    },
    {
      "type": "p",
      "text": "1. Locate the earlier state. An original document or previous value has to exist before there is anything to restore. A backup said to exist is different from a backup you have opened and checked. If the material needed for recovery cannot be found, it is difficult to classify the task as reversible."
    },
    {
      "type": "p",
      "text": "2. Check who can see the changed material. A private copy, a shared team document and content being sent outside the team have different possible effects. Permission to read is not evidence that someone actually read it. An unverified view does not need to become a fact in the record."
    },
    {
      "type": "p",
      "text": "3. Identify the people and time needed for recovery. Selecting an earlier version on your own is different from restoring something with another operator’s help. I suggest no universal recovery-time figure. Start with the procedure and conditions established for the particular task."
    },
    {
      "type": "p",
      "text": "4. Decide what to verify after restoration. Check separately whether the previous value has returned, whether an output already produced needs correction, and whether future execution has stopped. If one control handles several actions, define completion by the resulting states, not just by the button’s name."
    },
    {
      "type": "figure",
      "src": "/gallery/undo-boundary/open-envelope.webp",
      "alt": "An open cream envelope, paper and a small paper clip on a shelf in soft daylight",
      "caption": "Generated image, not a photograph of a particular task or actual record.",
      "width": 1440,
      "height": 960
    },
    {
      "type": "h",
      "text": "How does this extend the DMS permission guide?"
    },
    {
      "type": "p",
      "text": "The DMS.Labs guide “Giving AI automation permission in three steps” separates reading, drafting and acting. This essay looks more closely at what can be reversed after the action. Keeping a task at reading or drafting leaves room to correct material that has not yet been distributed. Granting execution rights can still leave review in place for actions with substantial external effects.",
      "links": [
        {
          "label": "Read the permission guide",
          "href": "/en/works/automation-permission-ladder"
        }
      ]
    },
    {
      "type": "p",
      "text": "The related guide “Before you ask AI to do the job, write the one-page job sheet” also sets out the target of a task and its completion conditions. Including the restoration state in those conditions makes it easier to distinguish stopping execution from recovering the earlier state. This essay reports no project savings or client results; it offers a way of extending the guides’ reasoning.",
      "links": [
        {
          "label": "Read the job-sheet guide",
          "href": "/en/works/ai-skill-job-sheet"
        }
      ]
    },
    {
      "type": "h",
      "text": "Does an Undo button justify automatic execution?"
    },
    {
      "type": "p",
      "text": "The presence of the button is not enough. Check which state it restores, how long restoration is available, and whether anyone was affected in the meantime. A task can remain at drafting when those answers are unclear. Automated actions can run at different speeds and under different review conditions."
    },
    {
      "type": "p",
      "text": "A useful starting exercise is to choose one cancellation feature and write one sentence describing what it restores. “The earlier document version is back” names something you can inspect. “The information already distributed has disappeared” requires much more evidence. Check whether the person delegating the work and the tool executing it use those descriptions to mean the same thing."
    }
  ],
  "sources": [
    {
      "label": "Nielsen Norman Group · User Control and Freedom",
      "href": "https://www.nngroup.com/articles/user-control-and-freedom/"
    },
    {
      "label": "W3C · WCAG 2.2 Understanding SC 3.3.4",
      "href": "https://www.w3.org/WAI/WCAG22/Understanding/error-prevention-legal-financial-data.html"
    }
  ],
  "next": {
    "label": "Next: automation, development and training enquiries",
    "href": "/en/contact"
  }
};

