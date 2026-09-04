export interface BodyParagraph {
  /** text: 본문  |  motto: 중앙 강조구  |  quote: 이탤릭 인용 */
  type: "text" | "motto" | "quote";
  text: string;
}

export interface GalleryPiece {
  id: string;
  date: string;
  category: string;
  title: string;
  subtitle?: string;
  body: string;                    // layout fallback / meta description용
  paragraphs?: BodyParagraph[];    // 다단락 렌더링 시 사용
  image: string;
  imageAlt: string;
  layout: "image-left" | "image-right" | "fullbleed" | "text-dominant";
  accent: "blue" | "coral" | "yellow";
}

// ──────────────────────────────────────────────
// 이미지는 /public/gallery/ 폴더에 넣어주세요.
// 예: /gallery/my-photo.jpg
// ──────────────────────────────────────────────
export const galleryPieces: GalleryPiece[] = [
  {
    id: "what-you-cannot-say",
    date: "2026. 09",
    category: "Essay",
    title: "설명할 수 없는 일은 넘길 수 없다",
    subtitle: "What You Cannot Say, You Cannot Hand Over",
    body: "AI 전환은 도구를 고르는 일에서 시작한다고 생각했다. 막상 시키려고 앉으니, 십 년을 해온 일의 첫 문장이 나오지 않았다.",
    paragraphs: [
      {
        type: "text",
        text: "처음에는 도구를 고르는 일이라고 생각했다.\n무엇을 붙이면 몇 시간이 줄어드는지,\n그 계산부터 했다.\n\n그런데 막상 시키려고 앉으니\n한 줄도 쓸 수가 없었다.\n십 년을 해온 일인데\n첫 문장이 나오지 않았다.",
      },
      {
        type: "text",
        text: "손은 알고 있었다.\n어디서 멈추고, 무엇을 먼저 열고,\n어떤 신호가 오면 되돌아가는지.\n몸이 기억하는 순서가 분명히 있었다.\n\n다만 그 순서에 이름이 없었다.\n이름이 없으니 넘길 수가 없었다.\n기계에게도, 사람에게도.",
      },
      {
        type: "motto",
        text: "— 넘길 수 없는 일은, 아직 내가 모르는 일이다. —",
      },
      {
        type: "text",
        text: "그래서 전환은 도입보다 받아쓰기에 가깝다.\n이미 하고 있던 일을\n처음으로 문장으로 옮겨 적는 일.\n\n적다 보면 이상한 것들이 보인다.\n왜 여기서 두 번 확인하지.\n이 단계는 누가 정했지.\n지난달에 바뀐 걸 왜 아직 이렇게 하고 있지.\n\n기계에게 시키려고 쓴 문장이\n사람의 일을 먼저 고친다.",
      },
      {
        type: "quote",
        text: "You cannot delegate what you cannot describe — and the describing turns out to be most of the work.",
      },
      {
        type: "text",
        text: "결국 자동화된 것은 절반쯤이었다.\n나머지 절반은 자동화할 필요가 없었다.\n적고 나서야\n원래 없어도 되는 일이었다는 걸 알았다.\n\n줄어든 시간보다\n사라진 단계가 더 많았다.",
      },
      {
        type: "motto",
        text: "— 도구가 일을 줄이기 전에, 문장이 먼저 줄인다. —",
      },
    ],
    image: "/gallery/what-you-cannot-say.webp",
    imageAlt: "엉킨 유리 조각들이 오른쪽에서 순서도로 정리되고, 아래에서 손이 그것을 노트에 옮겨 적고 있는 장면",
    layout: "image-left",
    accent: "blue",
  },
  {
    "id": "workshop-of-ideas",
    "date": "2026. 09",
    "category": "Essay",
    "title": "아이디어는 정비소에서 나온다",
    "subtitle": "Nothing New, Only Newly Joined",
    "body": "새로운 아이디어는 번개처럼 내리치지 않는다. 이미 있던 부품들이 처음으로 한 축에 물릴 때, 그때 처음인 것처럼 보일 뿐이다.",
    "paragraphs": [
      {
        "type": "text",
        "text": "사람들은 아이디어가 번개처럼 온다고 말한다.\n어두운 하늘이 갈라지고, 한 줄기가 내리꽂히고,\n그 자리에 없던 것이 생겨난다고.\n\n나는 그런 순간을 겪어본 적이 없다.\n내가 아는 아이디어는 전부 정비소에서 나왔다."
      },
      {
        "type": "text",
        "text": "정비소에는 새것이 없다.\n선반에는 누군가 쓰다 남긴 부품이 종류별로 놓여 있고,\n바닥에는 지난달에 실패한 조립이 아직 치워지지 않은 채 굴러다닌다.\n공기 중에는 먼지와 증기가 섞여 있다.\n\n새로운 것은 부품이 아니라 조합이다.\n왼쪽 선반의 축과 오른쪽 선반의 기어가\n처음으로 같은 회전에 물리는 순간,\n그것은 세상에 없던 것이 된다.\n부품은 둘 다 원래 거기 있었는데도."
      },
      {
        "type": "motto",
        "text": "— 없던 것을 만드는 게 아니라, 붙지 않던 것을 붙이는 일. —"
      },
      {
        "type": "text",
        "text": "그래서 정비공은 두 가지를 한다.\n\n첫째, 부품을 모은다.\n쓸 데가 지금 없어도 모은다.\n광통신 도면과 무역 서류와 사진 한 장이\n같은 선반에 놓여 있어야,\n언젠가 셋이 물릴 수 있다.\n서로 다른 서랍에 정리해두면 영영 만나지 않는다.\n\n둘째, 계기를 읽는다.\n머리에 달린 게이지들은 장식이 아니다.\n압력이 오르는 지점, 열이 나는 지점,\n소리가 달라지는 지점.\n그 눈금이 다음에 어디를 손볼지 알려준다.\n관찰 없이 조립하면 그냥 부품이 망가진다."
      },
      {
        "type": "text",
        "text": "작업대 위의 도면은 처음부터 저렇게 그려진 게 아니다.\n조립하고, 돌려보고, 어긋난 자리를 지우고,\n다시 그린 흔적이 겹겹이 남은 종이다.\n\n도면이 조립을 만든 게 아니라\n조립이 도면을 만들었다.\n순서를 거꾸로 알고 있으면\n영원히 완벽한 도면을 기다리다 아무것도 만들지 못한다."
      },
      {
        "type": "quote",
        "text": "Every new thing is an old thing meeting another old thing for the first time."
      },
      {
        "type": "text",
        "text": "창의 빛은 오후 늦게 가장 낮게 들어온다.\n그 시간에 먼지가 보인다.\n\n먼지는 실패의 잔해다.\n갈아낸 것, 깎아낸 것, 맞지 않아 버린 것.\n정비소가 밝을수록 먼지가 잘 보이고,\n먼지가 많을수록 그곳은 일하는 곳이다.\n\n아이디어가 안 나온다고 느낄 때\n대개 부족한 것은 영감이 아니라 부품이다.\n혹은 아직 충분히 어긋내 보지 않았거나."
      },
      {
        "type": "motto",
        "text": "— 번개를 기다리지 말고, 선반을 채워라. —"
      }
    ],
    "image": "/images/a20.webp",
    "imageAlt": "오래된 작업장에서 부품을 조립하는 정비공",
    "layout": "image-right",
    "accent": "yellow"
  },
  {
    id: "chaos-in-my-head",
    date: "2026. 03",
    category: "Essay",
    title: "혼돈의 머릿속",
    subtitle: "A Mind That Never Stops",
    body: "배우면 배울수록 모르는 것이 더 많아진다. 혼돈은 무지에서 오는 것이 아니라, 앎의 경계가 선명해질수록 더 깊어진다.",
    paragraphs: [
      {
        type: "text",
        text: "배우면 배울수록\n모르는 것이 더 많아진다.\n지식의 지평이 넓어질수록\n그 너머의 어둠도 함께 커진다.\n혼돈은 무지에서 오는 것이 아니라\n앎의 경계가 선명해질수록\n더 깊어진다.",
      },
      {
        type: "motto",
        text: "— 알수록, 더 모른다. —",
      },
      {
        type: "text",
        text: "어제는 이것을 이해했다 생각했는데\n오늘은 또 다른 개념이 벽처럼 서 있다.\n공부는 정리가 아니라\n계속해서 새로운 혼돈을 만드는 일이다.\n그래도 멈출 수가 없다.\n혼돈 속에서만 진짜 생각이 자라기 때문이다.",
      },
      {
        type: "quote",
        text: "The more you learn, the more you realize you never know enough — and yet, that chaos is the only place where real thinking grows.",
      },
    ],
    image: "/images/art/1.webp",
    imageAlt: "혼돈의 머릿속",
    layout: "image-left",
    accent: "yellow",
  },
  {
    id: "want-to-love",
    date: "2026. 03",
    category: "Essay",
    title: "사랑하고 싶다는 것",
    subtitle: "A Leaning Toward the World",
    body: "사랑하고 싶다는 것은 어딘가를 향해 손을 뻗고 싶다는 것이다. 닿을지 모르지만 뻗는 그 행위 자체가 이미 사랑의 시작이다.",
    paragraphs: [
      {
        type: "text",
        text: "사랑하고 싶다는 것은\n어딘가를 향해 손을 뻗고 싶다는 것이다.\n닿을지 모르지만 뻗는 그 행위 자체가\n이미 사랑의 시작이다.\n우리는 완성된 감정만을 사랑이라 부르지만,\n아직 이름 붙여지지 않은 그 기울어짐도\n사랑이다.",
      },
      {
        type: "motto",
        text: "— 기울어짐도, 사랑이다. —",
      },
      {
        type: "text",
        text: "아무도 모르게 누군가를 위해 고른 단어들,\n마음속에서만 쓰인 편지들,\n그리고 끝내 보내지 못한 시선들.\n사랑하고 싶다는 것은\n결국 살아있다는 가장 솔직한 고백이다.",
      },
      {
        type: "quote",
        text: "To want to love is already an act of love — a leaning toward the world, before the world ever leans back.",
      },
    ],
    image: "/images/c1.webp",
    imageAlt: "사랑하고 싶다는 것",
    layout: "image-right",
    accent: "coral",
  },
  {
    id: "museum-library",
    date: "2026. 03",
    category: "Essay",
    title: "나의 미술관 & 나의 도서관",
    subtitle: "Design the Imagination",
    body: "쓰고, 만들고, 사유할 수 있다면 생각만으로도 철학과 예술, 그리고 글을 하나로 엮을 수 있다.",
    paragraphs: [
      {
        type: "text",
        text: "쓰고, 만들고, 사유할 수 있다면\n생각만으로도 철학과 예술, 그리고 글을 하나로 엮을 수 있다.\n이제 필요한 것은\n생각의 한계를 넘어서는 훈련이다.\n상상은 떠오르는 데서 끝나면 안 된다.\n형태를 입고, 구조를 갖고, 결국 현실이 되어야 한다.",
      },
      {
        type: "motto",
        text: "— 상상을 디자인하라. —",
      },
      {
        type: "text",
        text: "점점 옅어지는 젊음의 예의 바른 속삭임은 잊어버릴까.\n진정한 스타일이란 시간의 환상을 산산조각 내는 날것 그대로의,\n거침없는 비명",
      },
      {
        type: "quote",
        text: "Forget the polite whispers of fading youth; true style is a raw, unapologetic scream that shatters the illusion of time.",
      },
    ],
    image: "/My_art/museum-library.jpg",
    imageAlt: "나의 미술관 & 나의 도서관",
    layout: "image-left",
    accent: "blue",
  },
];
