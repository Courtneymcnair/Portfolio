# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev    # Dev server at http://localhost:3000
npm run build  # Production build (TypeScript check included)
npm run lint   # ESLint
```

## Architecture

**Stack:** Next.js 16 (App Router), React 19, TypeScript, Tailwind CSS v4

**Tailwind v4 — important:** No `tailwind.config.js`. All theme tokens are in `app/globals.css` under `@theme {}`. Custom typography classes (`.text-hero`, `.text-overline`, `.text-body`, etc.) and layout utilities (`.content-width`) are defined there as plain CSS, not Tailwind utilities.

**Fonts:** Satoshi from Fontshare CDN (declared in `app/layout.tsx` `<head>`). Local @font-face blocks in `globals.css` activate when `/public/fonts/satoshi/` files are present. The `madefor-text` Wix font is substituted with Inter via `font-sans`.

**Images:** All Wix source images load from `static.wixstatic.com` (configured in `next.config.ts` `remotePatterns`). Use `unoptimized` prop on those images. Self-hosted images should go in `/public/images/`.

**Routes:**
- `/` — homepage (blue bg, hero + 3 project cards)
- `/about` — bio, photo gallery
- `/work/chekhub` — CheKHub case study
- `/work/fsldictionary` — FSL Dictionary case study
- `/work/spotifyactive` — Spotify Active case study (some copy marked TODO)

**Component structure:**
- `components/layout/` — `Navbar.tsx` (client component, uses `usePathname`), `Footer.tsx`
- `components/ui/` — `ProjectCard`, `GoButton`, `SectionLabel`, `SectionHeading`, `JumpButton`, `MetaGrid`, `UserGroupCard`, `QuoteBlock`, `ExploreMore`

**Design tokens (from `@theme` in globals.css):**
- Colors: `bg-brand-blue` (#004BD6), `bg-brand-footer` (#3250FF), `bg-brand-off-white` (#F6F6FF), `bg-brand-card-light` (#E7E8FC), `text-text-muted` (#545041)
- Radius: `rounded-pill` (851px), `rounded-go` (50px), `rounded-card` (8.52px), `rounded-circle` (9999px)
- Font: `font-satoshi`

**Homepage visual effect:** The blue dome/arch at the top is achieved by a white `<div>` placed directly after the hero section — no clip-path or border-radius. The page background is `bg-brand-blue`; the white section sits on top of it.

**Case study pages:** All share the same pattern — `bg-brand-off-white` hero + TL;DR, then white sections separated by `border-t border-black/10`. Sections use `SectionLabel` (H4 overline) + `SectionHeading` (H3).

## inspect-canvas Integration

When the user says "update this element", "change this", "fix this", or similar requests about a UI element:

1. Read `.inspect-canvas.json` in the project root
2. It contains the selected element's details:
   - `tag` — HTML tag name
   - `selector` — CSS selector path to the element
   - `styles` — current computed styles
   - `text` — visible text content
   - `size` — rendered width/height
   - `instruction` — what the user wants changed (if provided)
3. Find the source file that renders this element
4. Apply the requested change to the source code

If `instruction` is present, follow it. If not, ask the user what they'd like to change.
