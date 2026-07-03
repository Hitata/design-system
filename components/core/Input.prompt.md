**Input** — a single-line text field with an optional mono label, hint, and error.

```jsx
<Input label="Email" placeholder="you@domain" hint="We never share it." />
<Input label="Amount" prefix="¥" error="Required" />
```

Hairline ink frame, square corners, ember focus ring (2px). `error` recolors the frame to ember and replaces the hint. No inner shadow — the frame is honest structure.
