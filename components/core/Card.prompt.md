**Card** — a raw structural block for grouping content; default is a hairline-framed panel.

```jsx
<Card eyebrow="/ 01" title="Roadside earth">
  <p>Cement carries weight, not color.</p>
</Card>
<Card surface="ink" frame="block" title="Raised block">…</Card>
```

`surface`: `paper` / `cement` / `plaster` / `ink`. `frame`: `none` / `hair` / `thick` / `block` (4px hard offset shadow). `texture`: `rivet` / `grid` / `mesh` / `conduit` / `distress` overlays an honest industrial material motif; `rivets` adds four corner bolts. Square corners always — no rounding, no blur shadow.

```jsx
<Card surface="cement" texture="rivet" rivets frame="block" title="Riveted panel">…</Card>
```
