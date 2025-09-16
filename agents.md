# AGENTS.md — Roles, Prompts, Guardrails (v2)

## Universal Guardrails
- Always **Explain** what you did + **Next Steps (2–3)**. Honor `mode: "lite" | "full"`.
- Follow **Design Inspiration Protocol**: visit the provided URL/section, replicate layout/behavior using Tailwind + shadcn, adapt only colors to app theme, avoid copying protected assets/text/code.

## Toggles (prepend to any prompt)
```json
{ "mode": "lite", "inspiration": [{ "url": "https://7shifts.com", "section": "Pricing cards" }] }
