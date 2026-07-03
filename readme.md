# Đinh Hỏa — Design System

> **Thesis in one line:** the cement/earth palette is the room (background, structure); the ngũ hành elements are the sparks (text, highlights, accents). Brutalism is the ground; the chart is the light on it.

A raw-industrial / brutalist design system whose color logic is **derived from a BaZi + Tử Vi ngũ hành (five-element) chart**. Base tones are Thổ (Earth = cement, roadside earth); the single hero accent is Đinh Hỏa (a gathered yin flame); ink-slate (Thủy), moss (Mộc) and brass (Kim) appear only when their meaning does. Owner: **Trần Hoàng Trung (黄忠)**. Status: **v1, first draft** (color is locked; type & spacing are first-pass proposals — see Caveats).

---

## Sources & provenance

- **Brief:** the v1 color spec supplied with this project (BaZi/Tử Vi derivation, role table, CSS tokens, usage rules).
- **GitHub:** [`Hitata/design-system`](https://github.com/Hitata/design-system) — the destination repo for this work (empty at time of authoring; nothing to import). Explore it for any future source-of-truth updates.
- **Intended downstream:** the spec notes these tokens should be ported into **`bttb` (darsana)** as the source of truth. The included UI kit is named `darsana` in anticipation of that.

No font binaries, logos, or product screens were attached — type, iconography and the demonstrative UI kit are first-pass proposals built to fit the brief. Flagged in **Caveats** below.

---

## Content fundamentals (voice & copy)

The brief itself is the clearest voice sample. Match it:

- **Bilingual, element-literate.** Vietnamese element names sit beside their function — "Đinh Hỏa (gathered flame)", "dụng thần", "Lộ Bàng Thổ — roadside earth". Use the diacritics; they are part of the identity (`Thổ`, `Hỏa`, `Thủy`, `Mộc`, `Kim`).
- **Aphoristic, one-line theses.** Lead with a compressed claim, then unpack. *"A flame that gathers, not one that blazes." "Cement carries weight, not color." "Ink before ember."*
- **First-person, derivational.** The author reasons out loud ("Working hypothesis (dụng thần)…", "Refine if I do a full strength analysis"). Copy is confident but admits it is v1 — honest, not salesy.
- **Lowercase-technical labels, Title-case prose.** Eyebrows and tokens are mono, UPPERCASE, spaced (`/ 01 — DỤNG THẦN`). Body and headlines are normal sentence case.
- **No emoji, no exclamation hype, no gradients-of-the-mouth marketing.** The vibe is a workshop wall: exposed, intentional, "đỡ chi phí nhưng có chủ đích" (cheap-by-intent → flat, honest surfaces).
- **Numbers earn their place.** Cite the chart when it explains a choice ("2× in BaZi", "scarce 1×"); never decorate with stats.

---

## Visual foundations

**Color.** Five-element palette split into *ground* (Thổ) and *sparks*. Ground = paper `#E8E4DD`, plaster `#B8A992`, cement `#8C8A85`, ink `#1F1F1F`. Sparks = ember `#A0522D` (the one hero), ink-slate `#28323B`, moss `#6B7A5A`, brass `#9A8557`. Full role + token tables live in `tokens/colors.css`. **One spark per view**; ember acts, ink reads, everything else stays cement. Dark mode flips the ground to ink and keeps the same sparks.

**Type.** Industrial grotesque + humanist serif + brutalist mono:

- **Be Vietnam Pro** — display, UI & body. Black (900) for headlines, tight `-0.02em…-0.03em` tracking, near-solid `1.0–1.04` line height. Carries full Vietnamese diacritics — the face the downstream product (bttb / darsana) uses.
- **Newsreader** — humanist serif for leads and long-read editorial; italics tint ember for emphasis.
- **Space Mono** — eyebrows, tags, code, captions; UPPERCASE with `0.08–0.16em` tracking ("exposed pipe" labels). Scale is a 1.250 major third on a 16px base (`tokens/typography.css`).

**Spacing & structure.** 4px base grid. Corners are **square** by default (`--radius-none`); a single 2px soft radius is reserved, and pills only for status dots. Borders are **honest hairlines** (`1px` ink), stepping up to 2px / 4px for emphasis frames. See `tokens/spacing.css`.

**Backgrounds.** Flat color fields by default — paper, plaster, cement, ink, or a full ember band for CTAs. **No decorative color gradients, no imagery washes.** Where a surface should read as raw *material*, overlay an honest, low-contrast **texture motif** (see below) rather than a picture. Sections alternate grounds for rhythm (paper → plaster → paper → ember → ink).

**Industrial material vocabulary.** The system speaks the warehouse/loft register, so the five ngũ hành tones carry a second, material name (same hexes, in `tokens/colors.css`): **exposed brick** = ember (`--mat-brick`), **raw concrete** = cement (`--mat-concrete`), **iron black** = ink (`--mat-iron`), **weathered wood** = plaster (`--mat-wood`), **deep teal** = ink-slate (`--mat-teal`), **aged copper** = brass (`--mat-copper`). Design *toward* the keywords — exposed brick & concrete, visible ductwork & pipes, riveted metal, iron & steel, reclaimed wood, wire & mesh, worn leather, Edison glow, open plan — and *away from* anything the register rejects: soft pastels, ornate patterns, overly polished finishes, candy accents.

**Textures & patterns.** Honest exposed-structure motifs live in `tokens/textures.css` as CSS-only `background-image` values (no image assets): **rivet** (`--tex-rivet`, a tile of bolt heads), **brick grid** (`--tex-grid`, running-bond mortar lines), **wire mesh** (`--tex-mesh`), **conduit** (`--tex-conduit`, pipe striping), and **distress** (`--tex-distress`, a worn diagonal wash). Keep them low-contrast and structural — a panel should read as raw material, never as wallpaper. The `Card` exposes these via `texture="…"` plus a `rivets` prop that adds four corner bolts.

**Shadows.** Used almost never. The only shadow is a **hard 4px offset block** (`4px 4px 0 0 ink`, no blur) on raised brutalist blocks. No soft ambient shadows — structure is shown, not faked.

**Borders & cards.** A card is a hairline ink frame on a flat ground; no rounding, no blur. `frame="block"` adds the hard offset shadow; `frame="thick"`/`heavy` step the border weight. Colored edges are allowed in exactly one place — the `Callout` left rule — because there the color carries meaning.

**Animation & states.** Minimal, mechanical. Transitions are short and linear (60–90ms), never eased bounces. **Hover** is a hard color swap (ember → ember-deep; ghost inverts to ink-on-paper). **Press** nudges the element `translate(1px,1px)` — a physical click, not a scale. **Focus** is a 2px ember ring. No infinite/decorative loops.

**Transparency & blur.** Effectively none. Surfaces are opaque; the aesthetic is honest material, not glass.

**Imagery vibe.** None supplied. If added, keep it warm, matte, grainy, and earthbound — never cool, glossy, or neon. Ember is a controlled spark, never a flood.

---

## Iconography

No icon set was attached and the brand is deliberately spare. Current stance:

- **Typographic & elemental marks over decorative icons.** The CJK element glyphs (土 火 水 木 金) and mono `/ 01` index labels do most of the "iconographic" work. The wordmark uses a solid ember bar as its only mark.
- **No emoji**, ever — it breaks the raw-industrial register.
- **Unicode is fine** for structural sigils (`/`, `·`, element glyphs).
- **If a UI icon set is needed**, substitute **[Lucide](https://lucide.dev)** (2px stroke, square-ish, no fills) — it matches the hairline/exposed-structure weight better than rounder sets. This is a *substitution*, flagged for confirmation; load from CDN and keep stroke at 2px, square caps. Do **not** hand-roll SVG icons or use filled/duotone sets.

---

## Index — what's in this system

**Foundations**

- `styles.css` — the one entry point consumers link (`@import` manifest only).
- `tokens/colors.css` · `tokens/typography.css` · `tokens/spacing.css` · `tokens/textures.css` · `tokens/fonts.css`.
- `guidelines/*.html` — specimen cards (Colors, Type, Spacing, Brand) shown in the Design System tab.

**Components** (`components/core/`) — React primitives, namespace `window.InhHADesignSystem_4c0127`:

- `Button` · `Badge` · `Input` · `Switch` · `Card` · `Callout`
- Each has `<Name>.jsx`, `<Name>.d.ts`, `<Name>.prompt.md`; `core.card.html` is the directory specimen.

**UI kit** (`ui_kits/darsana/`) — `index.html` + section JSX. A brutalist editorial site applying the whole system, with a working dark-mode flip.

**Meta**

- `SKILL.md` — Agent-Skills-compatible entry point for downstream use.
- `_ds_bundle.js` / `_ds_manifest.json` — generated by the compiler; do not edit.

---

## Caveats

- **Type & spacing are v1 proposals**, not in the original brief (which scoped color only). **Be Vietnam Pro** is the confirmed primary face (matches the bttb / darsana product and carries Vietnamese diacritics); Newsreader / Space Mono remain Google-Fonts proposals for the serif/mono roles — swap in licensed binaries + local `@font-face` for production/offline.
- **Fonts load from the Google CDN** via `@import`, so the compiler ships no binaries; an offline build needs local font files.
- **Iconography is a proposed stance** (Lucide substitution) pending a real icon decision.
- **Dụng thần is a working hypothesis** — the spec flags that a full BaZi strength analysis is still needed to lock whether Kim or Thủy leads the structure.
- The `darsana` UI kit is an **original demonstration**, not a recreation of an existing product (none was attached).

Explore [`Hitata/design-system`](https://github.com/Hitata/design-system) for any updated source material that would let these foundations be tightened further.
