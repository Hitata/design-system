---
name: dinh-hoa-design
description: Use this skill to generate well-branded interfaces and assets for the Đinh Hỏa design system (a raw-industrial / brutalist system with a BaZi ngũ hành color logic), either for production or throwaway prototypes/mocks. Contains essential design guidelines, colors, type, fonts, assets, and UI kit components for prototyping.
user-invocable: true
---

Read the `readme.md` file within this skill, and explore the other available files (`tokens/`, `components/core/`, `ui_kits/darsana/`, `guidelines/`).

If creating visual artifacts (slides, mocks, throwaway prototypes, etc.), copy assets out and create static HTML files for the user to view — link `styles.css`, then mount components from the compiled bundle via `window.InhHADesignSystem_4c0127`. If working on production code, you can copy assets and read the rules here to become an expert in designing with this brand.

Core rules to honor every time:
- **One spark per view.** Ember (`--primary` #A0522D) leads; moss/brass/ink-slate appear only when their meaning does.
- **Cement carries weight, not color.** Backgrounds and structure stay in the Thổ greys; ink before ember for text.
- **Raw over polished.** Square corners, hairline ink borders, flat surfaces, no gradients, no soft shadows (only the hard 4px offset block).
- **Type:** Be Vietnam Pro (display/UI/body, black + tight tracking, full Vietnamese diacritics), Newsreader (serif long-read), Space Mono (UPPERCASE eyebrows/labels). No emoji.

If the user invokes this skill without any other guidance, ask them what they want to build or design, ask some questions, and act as an expert designer who outputs HTML artifacts _or_ production code, depending on the need.
