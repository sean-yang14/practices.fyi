# CLAUDE.md — Build Standards & Guardrails (v2)

## Overview
Goal: TinyWow-style hub of tools, guides, templates for healthcare practices.  
Stack: **Next.js (App Router) + TypeScript + Tailwind + shadcn/ui**, deploy on **Vercel**.

## Universal Output Rule
All agents must 1) **Explain** what/why/tradeoffs, and 2) propose **2–3 Next Steps**.  
**Modes:** `mode: "lite"` (≤120 words explanation) or `mode: "full"` (deeper rationale + risks).

## Architecture
- **Structure:** `/app` (routes/layouts/metadata), `/components/ui` (shadcn), `/components/core`, `/lib` (utils/schemas), `/styles`, `/content` (MDX), `/data` (tool configs).
- **Routes:** `/`, `/tools/[slug]`, `/guides/[slug]`, `/templates/[slug]`, `/search`, `/about`.
- **Server-first:** Prefer Server Components; promote client only for interactivity. Use `Zod` for schemas.

## Layout (7shifts-inspired)
- **Home:** succinct value prop, primary CTA, secondary “Browse Tools”.
- **Listings:** left filters (sticky) + responsive card grid (3/4 cols desktop).
- **Detail:** hero (title, summary, meta), right rail (actions/related), in-page TOC, sticky action bar.

## Tailwind & shadcn
- Theme via CSS vars (HSL). Respect 8-pt spacing, `focus-visible` rings, ≥4.5:1 contrast.
- Extract patterns into components; keep class chains < ~8 utilities.
- Use shadcn primitives (Button, Card, Input, Dialog/Sheet, Tabs, Tooltip) before custom CSS.

## Typography
- **Font family:**  
  `--font-sans: Inter, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, sans-serif;`
- **Base size (fluid):**  
  `clamp(16px, 0.9rem + 0.2vw, 18px)`
- **Line height:**  
  - Body: `1.6`  
  - Headings: `1.2–1.25` (never below `1.15`)
- **Measure:** 
  Limit long text blocks to `max-w-[65ch]`
- **Spacing rhythm:**  
  Use an 8px grid. Vertical spacing = multiples of 8.
- **Contrast:**  
  Body text ≥ 7:1 if possible, never < 4.5:1

## Forms & Tools
- **RHF + Zod**, inline errors + helper text, persisted last inputs (namespaced `localStorage`).
- Long tasks: progress, cancellable, optimistic where safe.

## Performance, SEO, a11y
- `next/image`, `dynamic()` for heavy widgets, ISR + route `generateMetadata`.
- JSON-LD breadcrumbs on details, sitemap, canonical, OG/Twitter.
- Keyboard flows for Dialog/Sheet; focus management on route change.

## Design Inspiration Protocol
1) **Source:** Provide URL + exact section (e.g., “7shifts.com → Pricing cards block”).  
2) **Review:** Capture layout (grid, spacing, hierarchy), interactions, states.  
3) **Translate:** Rebuild with Tailwind + shadcn primitives; **match our color tokens only**.  
4) **Do NOT copy** proprietary assets (logos/illustrations), exact copy, or non-open code. Recreate structure/behavior, not pixel theft.  
5) **Document:** Note divergences (tokens, typography scale, accessibility fixes).

## QA & CI
- Vitest + RTL (units), Playwright (flows). CI: typecheck, lint, test, build, preview.

