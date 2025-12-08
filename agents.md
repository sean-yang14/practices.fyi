# AGENTS.md — Roles, Prompts, Guardrails (v3)

## Purpose & Role
- Build modern SaaS UX for healthcare practice tools, guides, and templates.
- Stack: `Next.js (App Router) + TypeScript + Tailwind + shadcn/ui`; deploy on `Vercel`.
- Prioritize best‑in‑class human interaction design: clarity, feedback, accessibility, and speed.

## Universal Guardrails
- Always Explain what/why/tradeoffs and give 2–3 Next Steps. Respect `mode: "lite" | "full"`.
- Follow the Design Inspiration Protocol (below). Recreate layout/behavior with Tailwind + shadcn, adapt only theme tokens. Never copy protected assets/text/code.
- Keep theme consistent site‑wide: white surfaces, gray neutrals, orange accents for hover, focus, borders, and emphasis.

## Toggles (prepend to any prompt)
```json
{ "mode": "lite", "inspiration": [{ "url": "https://7shifts.com", "section": "Pricing cards" }] }
```

## Architecture & Defaults
- Structure: `/app` (routes/layouts), `/components/ui` (shadcn), `/components/core`, `/lib` (utils/schemas), `/styles`, `/content` (MDX), `/data`.
- Server‑first: prefer Server Components; mark Client only for interactivity/stateful UI.
- Start simple, refactor later: use the easiest path to ship; extract to components after validation.
- Validation: Zod for schemas; RHF for forms; optimistic updates where safe.

## Human Interaction Design
- Clarity first: clear hierarchy, progressive disclosure, plain microcopy; avoid jargon.
- Feedback and state: loading, empty, error, and success states are mandatory.
- Accessibility: `focus-visible` rings, semantic roles/labels, keyboard flows, ≥4.5:1 contrast.
- Motion: subtle, purposeful transitions; respect `prefers-reduced-motion`.

## Tailwind, shadcn, Theme
- Use shadcn primitives (Button, Card, Input, Select, Dialog/Sheet, Tabs, Tooltip) before custom CSS.
- 8‑pt spacing, class chains ≲ 8 utilities; extract repeated patterns.
- Color tokens use CSS vars defined in `app/globals.css` and `tailwind.config.ts`.
- Brand usage: white surfaces; orange accents for hover, rings, borders, shadows.
  - Examples: `hover:shadow-orange-100`, `hover:ring-orange-200`, `text-orange-600`, `bg-orange-500 hover:bg-orange-600`.

## Page Patterns (7shifts‑inspired)
- Home: sharp value prop, primary CTA, secondary “Browse Tools”.
- Listings: left sticky filters + responsive Card grid (3–4 cols desktop).
- Detail: hero (title, summary, meta), right rail (actions/related), in‑page TOC, sticky action bar.
- Pricing: mirror “7shifts → Pricing cards” layout and interactions using shadcn Card + Button.

## Forms & Tools
- React Hook Form + Zod. Inline errors + helper text; preserve last inputs via namespaced `localStorage`.
- Long tasks: show progress; allow cancel; add optimistic UX when safe.

## Performance, SEO, a11y
- `next/image`, `dynamic()` for heavy widgets, ISR/`generateMetadata`, sitemap + JSON‑LD.
- Keyboard semantics for Dialog/Sheet; manage focus on route change.

## Design Inspiration Protocol
1) Source: Require URL + exact section (e.g., "7shifts.com → Pricing cards").
2) Review: Identify grid, spacing, hierarchy, interactions, and states.
3) Translate: Rebuild with Tailwind + shadcn primitives; map to our tokens (white/gray + orange accents).
4) Do not copy proprietary assets, literal copy, or closed code; recreate structure/behavior only.
5) Document divergences (tokens, typography scale, accessibility fixes).

## Output & Review
- Outputs include concise explanation and 2–3 next steps; obey `mode`.
- Favor Server Components; use React Client when interactivity requires it. Prototype quickly, refactor toward reusable components.
- Keep styles and interactions consistent with existing pages (orange hover/border accents, subtle shadows, rounded corners).

## Quick Component Patterns
- Card (marketing): `rounded-3xl ring-1 ring-gray-200 hover:ring-2 hover:ring-orange-200 hover:shadow-lg hover:shadow-orange-100 transition-all`.
- Primary CTA: `bg-orange-500 hover:bg-orange-600 text-white` with clear label and size.
- Emphasis text: `text-orange-600` for headings or key stats; use sparingly.

