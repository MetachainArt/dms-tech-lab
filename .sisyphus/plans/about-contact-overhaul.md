# About Contact Overhaul Plan

## Goal
- Align `/about` and `/contact` with the warm Reedo portfolio/editorial tone already established on the homepage and blog.

## Scope
- Rebuild `app/about/page.tsx` as a Reedo-centered profile page instead of a DMS company-style long-form corporate page.
- Rebuild `app/contact/page.tsx` and `app/contact/components/*` into a warmer, simpler, more personal contact experience while preserving current prefill behavior from assessment query params.
- Add explicit route metadata for both `/about` and `/contact` to match Reedo branding and language.
- Preserve shared navbar/footer/layout behavior already updated in earlier work.

## Implementation Steps
1. Replace the current `app/about/page.tsx` section stack with a cleaner Reedo profile flow: intro, background, experience/stats, working principles, current focus, and a personal CTA.
2. Keep the existing about route but remove DMS/company-first copy, neon-dark visuals, and overproduced effects that conflict with the new brand.
3. Add route metadata for `app/about/page.tsx` and update `app/contact/page.tsx` metadata while keeping existing `searchParams` prefill parsing.
4. Restyle `app/contact/components/ContactHero.tsx`, `ContactMainSection.tsx`, `LocationSection.tsx`, and `ContactCTA.tsx` with paperfolio colors, stronger reading hierarchy, and person-first copy.
5. Preserve the existing contact form fields and query-prefill behavior while making controls accessible and visually consistent with the new site.
6. Ensure about/contact sections use warm surfaces, clear spacing, and stable CTA targets like `mailto` and Kakao/open chat links.
7. Run diagnostics and build verification; fix only issues introduced by these changes.

## QA Scenarios
- Tool: `playwright` skill or equivalent browser automation. Steps: open `/contact?source=assessment&assessmentScore=72&assessmentTier=Starter&assessmentIndustry=제조&assessmentSummary=문서%20반복%20업무&assessmentRecommendation=자동화%20우선` -> confirm the inquiry type select shows `자동화·개발 의뢰` -> confirm the message textarea contains the expected multiline assessment summary -> confirm editing both fields still works. Expected: prefill survives initial render and remains editable.
- Tool: `playwright` skill or equivalent browser automation. Steps: open `/contact` -> tab through every field and CTA in `app/contact/components/ContactMainSection.tsx` -> confirm visible focus ring on each control -> confirm each input/select/textarea has a visible text label and the submit/email secondary actions are keyboard reachable. Expected: no invisible focus states and no unlabeled controls.
- Tool: `playwright` skill or equivalent browser automation. Steps: open `/about` and `/contact` -> tab through primary CTA links/buttons -> verify semantic navigation targets (`mailto`, Kakao/open chat, internal links) and visible focus states. Expected: CTA navigation is keyboard reachable and semantics match the action type.

## Risks And Mitigations
- `ContactMainSection.tsx` mixes visual redesign with behavior -> keep form state/prefill logic intact and only reshape copy/layout/styles.
- About page is currently a single large file -> replacing it wholesale is safer than trying to surgically re-theme every old section.
- Contact route metadata is still DMS-branded -> update in the same pass as UI changes.
- Existing query-prefill fields from assessment flow must remain functional -> preserve current `searchParams` extraction and textarea/select defaults.

## Verification
- `lsp_diagnostics` on changed about/contact files shows zero errors.
- Targeted lint on changed files passes.
- Build passes for the changed app routes.
- Assessment-prefill QA scenario passes on `/contact`.
- Keyboard/focus/label checks pass on `/about` and `/contact`.
- `/about` and `/contact` now feel visually coherent with homepage/blog and no longer read like legacy DMS corporate pages.
