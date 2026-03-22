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
    layout: "image-right",
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
