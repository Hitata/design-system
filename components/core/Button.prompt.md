**Button** — the primary action primitive; ember leads, so reserve `primary` for the single most important action in a view.

```jsx
<Button variant="primary" size="md">Act now</Button>
<Button variant="ghost">Later</Button>
<Button variant="link">Read the derivation</Button>
```

Variants: `primary` (filled ember), `secondary` (filled ink-slate), `ghost` (ink border, inverts to ink-on-paper on hover), `link` (underlined ember, no fill). Sizes: `sm` / `md` / `lg`. Props: `disabled`, `full`, `startIcon`, `endIcon`. Hover is a hard color swap; press nudges 1px down — no easing flourish.
