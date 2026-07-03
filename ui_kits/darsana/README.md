# Darsana — UI kit

A single-page **brutalist editorial site** that applies the full Đinh Hỏa system end to end: cement/earth grounds, ink body copy, one ember spark, and the ngũ hành elements as exposed-structure blocks. It also demonstrates the **dark-mode ground flip** (toggle in the header).

This kit is a *recreation/demonstration* of the design language — there was no existing product UI attached, so the surface is an original application of the v1 color spec rather than a copy of a shipping screen.

## Files
- `index.html` — composes the page and owns the light/dark theme state. Mounts the bundle components.
- `SiteHeader.jsx` — sticky mono nav + wordmark + theme `Switch`.
- `Hero.jsx` — Be Vietnam Pro display, serif lead, ember CTA (`Button`, `Badge`).
- `ElementGrid.jsx` — the five elements in a hairline-framed grid (`Card`, `Badge`).
- `Editorial.jsx` — humanist serif long-read + `Callout` + ink `Card`.
- `CTASection.jsx` — ember band with `Input` + `Button`, plus `SiteFooter`.

## Composition notes
- Every interactive element is a bundle primitive (`Button`, `Badge`, `Input`, `Switch`, `Card`, `Callout`) — no re-implementations.
- Section rhythm alternates grounds: paper → plaster → paper → ember → ink-slate, never two heroes in one view.
- All structure is hairline ink rules; the one hard offset shadow appears on raised `Card frame="block"` blocks.
