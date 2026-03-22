# Homepage Overhaul Plan

## Goal
- Reposition the homepage from a DMS company landing page to a Reedo-centered practical portfolio/workshop site.

## Scope
- Replace the homepage section stack in `app/page.tsx` with a one-page portfolio flow.
- Rewrite shared `components/sections/Navbar.tsx` and `components/sections/Footer.tsx` for Reedo branding and hash navigation.
- Update `lib/seo.ts` and `lib/metadata.ts` to align titles, descriptions, OG, and schema with the Reedo identity.
- Adjust `app/globals.css` to support the lighter editorial direction, remove harmful `select-none` defaults, and add anchor scroll offset support.
- Keep existing subpages functional in this pass; do not fully rewrite them.

## Implementation Steps
1. Introduce homepage content constants for hero, intro, stats, offerings, works, writing, and contact CTA.
2. Rebuild `app/page.tsx` around the new section order and remove company-funnel sections from the homepage path.
3. Rework `Navbar.tsx` to use homepage hash links (`/#about`, `/#work`, etc.) while preserving route navigation for other pages.
4. Rework `Footer.tsx` to use consistent Reedo branding and simpler personal-profile copy.
5. Update SEO/config helpers in `lib/seo.ts` and `lib/metadata.ts`, including `Person` schema support.
6. Update `app/globals.css` with warmer global tokens and scroll-margin/selection behavior for portfolio reading.
7. Run diagnostics, lint, and build; fix only issues introduced by these changes.

## Risks And Mitigations
- Shared navbar/footer affect all pages -> keep links to existing routes where needed and avoid breaking app-wide navigation.
- Existing dark glass styles may leak into the new homepage -> explicitly set homepage section backgrounds and text colors.
- Anchor links can hide under fixed nav -> add global `scroll-margin-top` support for homepage section ids.
- SEO/story mismatch can persist -> update config and schema in the same pass as visual/content changes.

## Verification
- `lsp_diagnostics` on all changed files shows zero errors.
- `npm run lint` passes.
- `npm run build` passes.
- Homepage renders with Reedo branding, portfolio section order, working hash navigation, and updated metadata.
