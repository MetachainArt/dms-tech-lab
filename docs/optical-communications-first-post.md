# 광통신 첫 글 제작 기록

- 글 ID: `optical-communications-dome-vs-inline-closures`
- 한국어: `content/posts/optical-communications-dome-vs-inline-closures.mdx`
- 영어: `content/posts/en/optical-communications-dome-vs-inline-closures.mdx`
- 시리즈: `optical-communications`, 글 번호 `01`, 날짜 `2026-09-12`.
- 사용자가 제공한 영어 원문의 본문 문장을 유지하고 한국어로 번역했습니다. 추가된 내용은 이미지 캡션, 포스터 소제목, 개념 이미지 안내입니다.
- 사용자 첨부 JPG는 `public/images/posts/dome-vs-inline-closures/site-selection-original.jpg`에 원본 그대로 복사했습니다.
- 내장 ImageGen으로 이미지 3장을 생성한 뒤 기존 sharp로 WebP(quality 88) 최적화했습니다. 별도 유료 API나 새 의존성을 추가하지 않았습니다.
- 생성 이미지는 특정 모델의 실측 사진이나 조립 지침이 아닌 개념 이미지임을 양쪽 본문에 표시했습니다.

## 생성 이미지와 최종 프롬프트

게시 전 검증: 한·영 113개 글의 번역 hash·본문 구조·MDX 컴파일 검사 및 로더 검사 통과. 기존 포함 영문 123개 경로의 문서 언어·canonical/hreflang·사이트맵·404 검사 통과. 프로세스에만 임시 인증 환경변수를 넣은 최종 빌드는 417개 페이지 생성까지 통과했습니다. 공개 카테고리 관련 TS/TSX 9개 파일 lint와 diff 공백 검사 통과; 관리자 파일에는 이전 HEAD와 동일한 기존 lint 오류가 있습니다. Chrome에서 한·영 본문, 이미지 로딩, 언어 전환, 1440px/390px 화면을 확인했습니다. 운영 게시 요청에 따라 이 카테고리와 첫 글에 필요한 파일만 기존 GitHub–Vercel 배포 경로로 반영합니다.

### closure-comparison.webp

저장 위치: `public/images/posts/dome-vs-inline-closures/closure-comparison.webp`

```text
Use case: product-mockup. Create one premium photorealistic engineering editorial cover for an article comparing dome and inline fiber optic splice closures. Landscape 16:9 composition, no text anywhere. Two generic unbranded black polymer optical splice enclosures arranged on a warm light-gray laboratory plinth: at left a vertical round domed single-ended closure with a ribbed cylindrical cap, a realistic circular mechanical clamp at the base and two black outdoor fiber optic cables entering only through its bottom base; at right a horizontal oblong low-profile inline closure with a long perimeter seam and small mechanical latches, one black fiber optic cable entering each opposing end. Both products fully visible, spaced apart, correct gravity, physically plausible moderate cable loops with wide smooth bends. Closed enclosures, no cutaway, no visible fiber strands glowing, no exposed electrical wiring. Precise molded polymer surface texture, subtle red accents from reflected light only, soft architectural side lighting, generous clean background, high-end industrial still-life photography, restrained contrast, realistic proportions. These are generic concept products, not reproductions of a specific manufacturer's model. Keep both objects inside the center 75 percent so the image crops safely to 4:3. No letters, labels, numbers, logos, watermarks, arrows or diagrams.
```

### installation-space.webp

저장 위치: `public/images/posts/dome-vs-inline-closures/installation-space.webp`

```text
Use case: scientific-educational. Asset type: explanatory editorial illustration for an engineering blog, landscape 3:2, no text. Create a refined photorealistic isometric cutaway of a single rectangular underground telecom handhole set into a quiet pavement. A section of the near concrete wall and earth is cut away for clear viewing. Inside, a generic black horizontal inline fiber optic splice closure sits neatly on an inner-wall support bracket with moderate black optical cables entering its opposing ends. Broad smooth cable service loops lie organized on a separate support beneath the closure. Two cable ducts enter through the side wall; one unused capped conduit is visible for potential future routing. The opening above the enclosure is completely clear and broad enough to show a useful maintenance workspace; the removed rectangular cover lies safely flat beside the chamber, not over the opening. Emphasize cable approach directions, broad bend radii and open working space. Warm ivory background, light-gray concrete, black cable jacket, subtle terracotta surface accents, architectural engineering visualization with physically plausible construction, accurate perspective, soft natural daylight, sharp restrained material detail. No person, no vehicle, no text, no symbols, no measurements, no arrows, no logos, no fantasy glowing cables. Conceptual explanatory scene rather than a product installation drawing.
```

### maintenance-access.webp

저장 위치: `public/images/posts/dome-vs-inline-closures/maintenance-access.webp`

```text
Use case: scientific-educational. Asset type: maintenance and expansion editorial photograph for fiber optic splice closure article. Create one clean technically plausible photorealistic close-up, landscape 3:2. An opened generic black inline fiber optic splice closure rests horizontally on a clean pale-gray technician's work mat in a workshop. Its lid is removed and lies to the rear. In the lower enclosure a stack of three pale splice organizer trays is clearly visible; the top tray is hinged upward at a modest angle so the tray below can be accessed. Very thin colored optical fibers follow organized broad oval paths retained inside trays, with a neat central row of small splice protectors; no loose tangles, no sharp bends, no glowing fiber. Two black outdoor cables enter opposing ends and are mechanically secured before their fibers reach the trays. In the foreground on the clean mat are a separate uninstalled matching spare tray and a simple spare elastomer gasket laid flat, showing planning for future expansion and resealing. No person, no hands, no text, no part numbers, no logos, no arrows. Warm neutral palette, crisp black polymer, soft white tray plastic, tiny blue and orange fiber accents, subtle red fabric tool strap at the edge, soft controlled studio light, refined engineering editorial art direction. Keep it a generic conceptual visualization rather than a manufacturer's assembly procedure or model-specific drawing.
```
