# 광통신 카테고리

- 한국어: `/blog/series/optical-communications`
- 영어: `/en/blog/series/optical-communications`
- 공통 시리즈 ID: `optical-communications`
- 표지: `public/series/optical-communications.webp`

자료가 없어도 두 언어의 블로그 목록과 카테고리 페이지에 표시됩니다. 첫 자료가 등록되면 기존 시리즈 글 목록으로 전환됩니다. 첫 글은 `optical-communications-dome-vs-inline-closures`이며 한국어와 영어를 각각 작성했습니다.

## 자료 등록 방식

현재 관리자는 기존 한국어 MDX 파일 수정용입니다. 새 파일 업로드나 영어 편집 기능은 제공하지 않습니다. 기존 저장소의 파일 등록 방식을 사용합니다.

1. 한국어 글을 `content/posts/<slug>.mdx`, 영어 글을 `content/posts/en/<slug>.mdx`에 같은 파일명으로 작성합니다.
2. 두 글의 frontmatter에 `series: "optical-communications"`를 지정합니다. `title`, `excerpt`, 본문은 각 언어로 작성하고 `date`, `chapter`, `coverImage` 등 공통 정보는 일치시킵니다. 표지가 따로 없으면 `coverImage: "/series/optical-communications.webp"`를 사용합니다.
3. 첨부할 PDF 등의 파일은 `public/resources/optical-communications/`에 저장하고 본문에서 `/resources/optical-communications/<filename>.pdf` 형태로 링크합니다. 자료는 공개 접근 가능한 파일이 됩니다.
4. 한국어 원문의 CRLF를 LF로 정규화한 전체 텍스트의 SHA-256 값을 영어 글의 `translationSourceHash`에 기록합니다. 원문 수정 후에는 영어 내용도 검토한 뒤 해시를 갱신합니다. 해시가 맞지 않으면 기존 번역 보호 로직에 따라 영어 글이 노출되지 않습니다.
5. `node scripts/sync-blog-translations.cjs --require-all`, `node scripts/verify-blog-translations.mjs`, `node scripts/verify-blog-loader.mjs`로 번역 등록을 확인하고 로컬 페이지에서 본문과 첨부파일을 검토합니다.
6. 공개 사이트 반영은 별도로 승인된 배포가 필요합니다.

## 표지 제작 기록

내장 ImageGen 도구로 생성한 이미지를 WebP(1536 × 1024, quality 88)로 최적화했습니다. 문구가 없는 공통 표지이므로 한국어와 영어에 함께 사용합니다.

최종 생성 프롬프트:

```text
Use case: stylized-concept. Asset type: premium editorial cover for the Optical Communications category of a Korean and English engineering blog, DMS.Labs. Create one polished photorealistic macro still life of fine transparent optical glass fibers, elegantly sweeping in a controlled arc from the bottom foreground toward a tightly arranged group of luminous cyan and cobalt fiber tips near the center. A few softly glowing warm amber tips suggest optical signal transmission. Deep midnight navy background, restrained laboratory atmosphere, precise specular highlights on glass, exquisite physical texture, shallow depth of field with soft distant fiber bokeh, minimal sophisticated engineering publication art direction. Landscape 3:2 composition, main focal cluster centered so it also crops elegantly to portrait 4:5 and landscape 16:11. Rich detail without visual clutter. No letters, no words, no numbers, no logo, no watermark, no UI, no diagram, no people. The image should feel tactile, credible and refined, not an exaggerated sci-fi tunnel.
```

## 로컬 검증 (2026-09-12)

- 표준 `npm run build`: Prisma 생성, 컴파일, 타입 검사는 통과했으나 관리자 환경변수가 없어 페이지 데이터 수집에서 차단됐습니다. 프로세스에만 임시 관리자 정보와 NEXTAUTH_SECRET을 넣은 최종 `next build`는 415개 페이지 생성까지 통과했습니다. 임시 인증값은 파일에 저장하지 않았습니다.
- 카테고리 관련 TS/TSX 9개 파일 린트: 오류·경고 0개. 관리자 파일 린트는 기존 HEAD와 동일한 오류 15개·경고 4개이며 추가 오류는 없습니다. `git diff --check` 통과.
- `verify-blog-loader.mjs`: 기존 영문 글 112개의 LF/CRLF 로딩, 오래된 번역 및 잘못된 slug 차단 통과.
- `verify-blog-http.mjs`: 기존 영문 121개 경로의 200 응답, 영어 문서 언어, canonical/hreflang, 사이트맵, 없는 경로의 404 통과.
- 신규 한·영 목록/상세 4개 경로: 200 응답, 제목·표지·빈 상태·언어별 URL·사이트맵 확인. 기존 공개 카테고리 8개 유지, 숨겨진 카테고리 비노출 확인.
- Chrome: 카드 클릭, 한→영→한 전환, 이미지 로딩, 1440px 데스크톱·390px 모바일 화면 확인. 영문 제목이 단어 중간에서 끊기는 문제를 수정 후 다시 확인했습니다.
- 화면 캡처: `output/playwright/optical-category/ko-desktop.png`, `ko-mobile.png`, `en-desktop-final.png`, `en-mobile-final.png`, `ko-card-final.png`.
- 기존 광고 스크립트의 로컬 도메인 요청 403/AdSense 경고가 관찰됐습니다. 화면 크기 전환 중 이전 크기 이미지의 preload 경고도 관찰됐지만 최종 표시 이미지는 정상 로딩됐습니다.
- 실제 자료 게시·첨부파일 업로드·관리자 로그인·운영 저장·공개 배포는 실행하지 않았습니다. 현재는 카테고리 준비 단계입니다.
