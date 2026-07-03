/* @ds-bundle: {"format":4,"namespace":"InhHADesignSystem_4c0127","components":[{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Callout","sourcePath":"components/core/Callout.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"Input","sourcePath":"components/core/Input.jsx"},{"name":"Switch","sourcePath":"components/core/Switch.jsx"}],"sourceHashes":{"components/core/Badge.jsx":"261124a0b2e9","components/core/Button.jsx":"977254fc890f","components/core/Callout.jsx":"5815f0deb1f2","components/core/Card.jsx":"a5f992ea50ba","components/core/Input.jsx":"0ed8f10c1c92","components/core/Switch.jsx":"4d0308fd5840","ui_kits/darsana/CTASection.jsx":"49da79c3f41b","ui_kits/darsana/Editorial.jsx":"54369c94db3e","ui_kits/darsana/ElementGrid.jsx":"79794072f1f6","ui_kits/darsana/Hero.jsx":"b7d63534bd4a","ui_kits/darsana/SiteHeader.jsx":"e5d258290c84"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.InhHADesignSystem_4c0127 = window.InhHADesignSystem_4c0127 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Badge — a small status/label chip. Tones map to ngũ hành roles:
 * neutral (cement), primary (ember), success (moss), premium (brass),
 * ink (ink-slate). `dot` adds a leading status dot; `solid` fills.
 */
function Badge({
  tone = 'neutral',
  solid = false,
  dot = false,
  children,
  style,
  ...rest
}) {
  const tones = {
    neutral: 'var(--text-muted)',
    primary: 'var(--primary)',
    success: 'var(--success)',
    premium: 'var(--premium)',
    ink: 'var(--secondary)'
  };
  const c = tones[tone] || tones.neutral;
  const onSolid = tone === 'premium' ? 'var(--on-premium)' : 'var(--paper)';
  const base = {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '6px',
    fontFamily: 'var(--font-mono)',
    fontWeight: 700,
    fontSize: '10px',
    lineHeight: 1,
    textTransform: 'uppercase',
    letterSpacing: '0.1em',
    padding: '4px 8px',
    borderRadius: 'var(--radius-none)',
    border: `var(--border-hair) var(--border-style) ${solid ? c : 'var(--border)'}`,
    background: solid ? c : 'transparent',
    color: solid ? onSolid : 'var(--text)',
    ...style
  };
  return /*#__PURE__*/React.createElement("span", _extends({
    style: base
  }, rest), dot ? /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      width: '6px',
      height: '6px',
      borderRadius: 'var(--radius-pill)',
      background: solid ? onSolid : c,
      flex: 'none'
    }
  }) : null, children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Button — the primary action primitive.
 * Brutalist: square corners, hairline ink border, mono uppercase label,
 * hard hover (no easing flourish). Ember is the one hero; secondary is
 * ink-slate; ghost is bordered; link is underlined ember.
 */
function Button({
  variant = 'primary',
  size = 'md',
  disabled = false,
  full = false,
  startIcon,
  endIcon,
  children,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const [active, setActive] = React.useState(false);
  const sizes = {
    sm: {
      padding: '6px 12px',
      fontSize: '11px'
    },
    md: {
      padding: '10px 18px',
      fontSize: '12px'
    },
    lg: {
      padding: '14px 26px',
      fontSize: '14px'
    }
  };
  const palette = {
    primary: {
      bg: 'var(--primary)',
      bgHover: 'var(--primary-hover)',
      fg: 'var(--on-primary)',
      border: 'var(--border)'
    },
    secondary: {
      bg: 'var(--secondary)',
      bgHover: '#1c252c',
      fg: 'var(--on-secondary)',
      border: 'var(--border)'
    },
    ghost: {
      bg: 'transparent',
      bgHover: 'var(--ink)',
      fg: 'var(--text)',
      border: 'var(--border)',
      fgHover: 'var(--bg)'
    },
    link: {
      bg: 'transparent',
      bgHover: 'transparent',
      fg: 'var(--link)',
      border: 'transparent'
    }
  };
  const p = palette[variant] || palette.primary;
  const isLink = variant === 'link';
  const base = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '8px',
    width: full ? '100%' : 'auto',
    fontFamily: 'var(--font-mono)',
    fontWeight: 700,
    textTransform: 'uppercase',
    letterSpacing: '0.08em',
    lineHeight: 1,
    border: `var(--border-hair) var(--border-style) ${p.border}`,
    borderRadius: 'var(--radius-none)',
    background: hover && !disabled ? p.bgHover : p.bg,
    color: hover && !disabled && p.fgHover ? p.fgHover : p.fg,
    cursor: disabled ? 'not-allowed' : 'pointer',
    opacity: disabled ? 0.45 : 1,
    textDecoration: isLink ? 'underline' : 'none',
    textUnderlineOffset: isLink ? '3px' : undefined,
    padding: isLink ? '0' : sizes[size].padding,
    fontSize: sizes[size].fontSize,
    transform: active && !disabled && !isLink ? 'translate(1px, 1px)' : 'none',
    transition: 'background 80ms linear, color 80ms linear, transform 60ms linear',
    ...style
  };
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    disabled: disabled,
    style: base,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => {
      setHover(false);
      setActive(false);
    },
    onMouseDown: () => setActive(true),
    onMouseUp: () => setActive(false)
  }, rest), startIcon ? /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      display: 'inline-flex'
    }
  }, startIcon) : null, children, endIcon ? /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      display: 'inline-flex'
    }
  }, endIcon) : null);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Callout.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Callout — an inline note block with a heavy left rule in the tone color.
 * Tones map to ngũ hành roles. This is the one place a colored edge is
 * allowed (it carries meaning), kept honest with a flat surface.
 */
function Callout({
  tone = 'primary',
  title,
  children,
  style,
  ...rest
}) {
  const tones = {
    primary: 'var(--primary)',
    success: 'var(--success)',
    ink: 'var(--secondary)',
    premium: 'var(--premium)',
    neutral: 'var(--text-muted)'
  };
  const c = tones[tone] || tones.primary;
  const base = {
    background: 'var(--surface-warm)',
    borderTop: 'var(--border-hair) var(--border-style) var(--border)',
    borderRight: 'var(--border-hair) var(--border-style) var(--border)',
    borderBottom: 'var(--border-hair) var(--border-style) var(--border)',
    borderLeft: `var(--border-heavy) var(--border-style) ${c}`,
    borderRadius: 'var(--radius-none)',
    padding: 'var(--space-4) var(--space-5)',
    color: 'var(--text)',
    ...style
  };
  return /*#__PURE__*/React.createElement("div", _extends({
    role: "note",
    style: base
  }, rest), title ? /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: '11px',
      fontWeight: 700,
      textTransform: 'uppercase',
      letterSpacing: '0.1em',
      color: c,
      marginBottom: '6px'
    }
  }, title) : null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--text-sm)',
      lineHeight: 'var(--leading-normal)'
    }
  }, children));
}
Object.assign(__ds_scope, { Callout });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Callout.jsx", error: String((e && e.message) || e) }); }

// components/core/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Card — a raw structural block. Default is a hairline-framed panel on the
 * warm-plaster or paper surface. `frame="block"` adds the hard offset shadow
 * (4px, no blur) for a brutalist raised block. `surface` picks the ground.
 * `texture` overlays an honest industrial material motif (riveted metal,
 * brick grid, mesh, conduit, distressed); `rivets` adds four corner bolts.
 */
function Card({
  surface = 'paper',
  frame = 'hair',
  texture = 'none',
  rivets = false,
  eyebrow,
  title,
  children,
  style,
  ...rest
}) {
  const grounds = {
    paper: 'var(--bg)',
    cement: 'var(--surface)',
    plaster: 'var(--surface-warm)',
    ink: 'var(--secondary)'
  };
  const onInk = surface === 'ink';
  const frames = {
    none: {
      border: 'none'
    },
    hair: {
      border: 'var(--border-hair) var(--border-style) var(--border)'
    },
    thick: {
      border: 'var(--border-thick) var(--border-style) var(--border)'
    },
    block: {
      border: 'var(--border-hair) var(--border-style) var(--ink)',
      boxShadow: '4px 4px 0 0 var(--ink)'
    }
  };
  const textures = {
    none: null,
    rivet: {
      image: 'var(--tex-rivet)',
      size: 'var(--tex-rivet-size)'
    },
    grid: {
      image: 'var(--tex-grid)',
      size: 'auto'
    },
    mesh: {
      image: 'var(--tex-mesh)',
      size: 'auto'
    },
    conduit: {
      image: 'var(--tex-conduit)',
      size: 'auto'
    },
    distress: {
      image: 'var(--tex-distress)',
      size: 'auto'
    }
  };
  const tex = textures[texture];
  const base = {
    position: 'relative',
    background: grounds[surface] || grounds.paper,
    backgroundImage: tex ? tex.image : undefined,
    backgroundSize: tex ? tex.size : undefined,
    color: onInk ? 'var(--paper)' : 'var(--text)',
    borderRadius: 'var(--radius-none)',
    padding: 'var(--space-5)',
    ...(frames[frame] || frames.hair),
    ...style
  };
  const bolt = {
    position: 'absolute',
    width: 'var(--bolt-size)',
    height: 'var(--bolt-size)',
    borderRadius: 'var(--radius-pill)',
    background: onInk ? 'var(--paper)' : 'var(--ink)'
  };
  return /*#__PURE__*/React.createElement("div", _extends({
    style: base
  }, rest), rivets ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      ...bolt,
      top: '6px',
      left: '6px'
    }
  }), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      ...bolt,
      top: '6px',
      right: '6px'
    }
  }), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      ...bolt,
      bottom: '6px',
      left: '6px'
    }
  }), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      ...bolt,
      bottom: '6px',
      right: '6px'
    }
  })) : null, eyebrow ? /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: '10px',
      fontWeight: 700,
      textTransform: 'uppercase',
      letterSpacing: '0.14em',
      color: onInk ? 'rgba(232,228,221,0.7)' : 'var(--text-muted)',
      marginBottom: '8px'
    }
  }, eyebrow) : null, title ? /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 800,
      fontSize: 'var(--text-lg)',
      letterSpacing: '-0.01em',
      lineHeight: 'var(--leading-snug)',
      marginBottom: children ? '10px' : 0
    }
  }, title) : null, children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Card.jsx", error: String((e && e.message) || e) }); }

// components/core/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Input — single-line text field. Hairline ink frame, square corners,
 * ember focus ring. Mono uppercase label sits above; optional hint/error
 * below. The field is honest structure: no inner shadow, no fill flourish.
 */
function Input({
  label,
  hint,
  error,
  id,
  prefix,
  style,
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const reactId = React.useId();
  const fieldId = id || reactId;
  const invalid = Boolean(error);
  const frame = {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    background: 'var(--bg)',
    border: `var(--border-hair) var(--border-style) ${invalid ? 'var(--primary)' : 'var(--border)'}`,
    borderRadius: 'var(--radius-none)',
    padding: '0 12px',
    boxShadow: focus ? '0 0 0 2px var(--focus)' : 'none',
    transition: 'box-shadow 80ms linear'
  };
  const input = {
    flex: 1,
    appearance: 'none',
    border: 'none',
    outline: 'none',
    background: 'transparent',
    fontFamily: 'var(--font-sans)',
    fontSize: 'var(--text-base)',
    color: 'var(--text)',
    padding: '11px 0',
    width: '100%'
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '6px',
      ...style
    }
  }, label ? /*#__PURE__*/React.createElement("label", {
    htmlFor: fieldId,
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: '10px',
      fontWeight: 700,
      textTransform: 'uppercase',
      letterSpacing: '0.12em',
      color: 'var(--text-muted)'
    }
  }, label) : null, /*#__PURE__*/React.createElement("div", {
    style: frame
  }, prefix ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: '13px',
      color: 'var(--text-muted)'
    }
  }, prefix) : null, /*#__PURE__*/React.createElement("input", _extends({
    id: fieldId,
    style: input,
    "aria-invalid": invalid || undefined,
    onFocus: e => {
      setFocus(true);
      rest.onFocus && rest.onFocus(e);
    },
    onBlur: e => {
      setFocus(false);
      rest.onBlur && rest.onBlur(e);
    }
  }, rest))), error ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: '11px',
      color: 'var(--primary)'
    }
  }, error) : hint ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: '11px',
      color: 'var(--text-muted)'
    }
  }, hint) : null);
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Input.jsx", error: String((e && e.message) || e) }); }

// components/core/Switch.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Switch — a square brutalist toggle. The thumb is a hard ink block that
 * slides with no easing flourish; the track fills ember when on. Honest
 * structure: hairline frame, no rounding.
 */
function Switch({
  checked,
  defaultChecked = false,
  onChange,
  disabled = false,
  label,
  id,
  style,
  ...rest
}) {
  const isControlled = checked !== undefined;
  const [internal, setInternal] = React.useState(defaultChecked);
  const on = isControlled ? checked : internal;
  const reactId = React.useId();
  const fieldId = id || reactId;
  function toggle() {
    if (disabled) return;
    const next = !on;
    if (!isControlled) setInternal(next);
    onChange && onChange(next);
  }
  const track = {
    position: 'relative',
    width: '44px',
    height: '24px',
    flex: 'none',
    background: on ? 'var(--primary)' : 'var(--surface)',
    border: 'var(--border-hair) var(--border-style) var(--border)',
    borderRadius: 'var(--radius-none)',
    cursor: disabled ? 'not-allowed' : 'pointer',
    opacity: disabled ? 0.45 : 1,
    transition: 'background 80ms linear',
    padding: 0
  };
  const thumb = {
    position: 'absolute',
    top: '2px',
    left: on ? '22px' : '2px',
    width: '18px',
    height: '18px',
    background: 'var(--ink)',
    transition: 'left 90ms linear'
  };
  return /*#__PURE__*/React.createElement("label", {
    htmlFor: fieldId,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '10px',
      cursor: disabled ? 'not-allowed' : 'pointer',
      ...style
    }
  }, /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    id: fieldId,
    role: "switch",
    "aria-checked": on,
    "aria-label": label || 'toggle',
    disabled: disabled,
    onClick: toggle,
    style: track
  }, rest), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: thumb
  })), label ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: '12px',
      fontWeight: 700,
      textTransform: 'uppercase',
      letterSpacing: '0.08em',
      color: 'var(--text)'
    }
  }, label) : null);
}
Object.assign(__ds_scope, { Switch });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Switch.jsx", error: String((e && e.message) || e) }); }

// ui_kits/darsana/CTASection.jsx
try { (() => {
// CTASection — ember band with a newsletter-style sign-up, then footer.
function CTASection() {
  const {
    Button,
    Input
  } = window.InhHADesignSystem_4c0127;
  return /*#__PURE__*/React.createElement("section", {
    style: {
      padding: '64px 32px',
      background: 'var(--primary)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: '820px',
      margin: '0 auto',
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 900,
      fontSize: 'clamp(34px, 5vw, 56px)',
      letterSpacing: '-0.03em',
      lineHeight: 1.02,
      margin: '0 0 16px',
      color: 'var(--on-primary)'
    }
  }, "Port the tokens. Light the room."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-serif)',
      fontSize: '20px',
      lineHeight: 1.5,
      color: 'var(--on-primary)',
      opacity: 0.92,
      margin: '0 0 28px'
    }
  }, "One source of truth for color, type, and structure — ready to drop into the next build."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: '10px',
      justifyContent: 'center',
      flexWrap: 'wrap',
      alignItems: 'flex-end'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: '280px',
      textAlign: 'left'
    }
  }, /*#__PURE__*/React.createElement(Input, {
    placeholder: "you@domain"
  })), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    size: "lg"
  }, "Get the system"))));
}
window.CTASection = CTASection;
function SiteFooter() {
  const col = {
    display: 'flex',
    flexDirection: 'column',
    gap: '8px'
  };
  const link = {
    fontFamily: 'var(--font-mono)',
    fontSize: '12px',
    color: 'var(--text-muted)',
    textDecoration: 'none',
    cursor: 'pointer'
  };
  const head = {
    fontFamily: 'var(--font-mono)',
    fontSize: '10px',
    fontWeight: 700,
    textTransform: 'uppercase',
    letterSpacing: '0.14em',
    color: 'var(--text)',
    marginBottom: '4px'
  };
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      padding: '40px 32px',
      background: 'var(--secondary)',
      color: 'var(--paper)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: '1100px',
      margin: '0 auto',
      display: 'flex',
      justifyContent: 'space-between',
      flexWrap: 'wrap',
      gap: '32px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: '320px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 900,
      fontSize: '22px',
      letterSpacing: '-0.02em',
      marginBottom: '10px'
    }
  }, "ĐINH H", /*#__PURE__*/React.createElement("span", {
    style: {
      color: '#C06A3D'
    }
  }, "Ỏ"), "A"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: '11px',
      lineHeight: 1.6,
      opacity: 0.7,
      margin: 0
    }
  }, "Derived from BaZi + Tử Vi ngũ h\xE0nh. Raw-industrial / brutalist. v1, first draft.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: '56px',
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: col
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      ...head,
      color: 'var(--paper)'
    }
  }, "System"), /*#__PURE__*/React.createElement("a", {
    style: {
      ...link,
      color: 'rgba(232,228,221,0.7)'
    }
  }, "Colors"), /*#__PURE__*/React.createElement("a", {
    style: {
      ...link,
      color: 'rgba(232,228,221,0.7)'
    }
  }, "Type"), /*#__PURE__*/React.createElement("a", {
    style: {
      ...link,
      color: 'rgba(232,228,221,0.7)'
    }
  }, "Spacing")), /*#__PURE__*/React.createElement("div", {
    style: col
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      ...head,
      color: 'var(--paper)'
    }
  }, "Elements"), /*#__PURE__*/React.createElement("a", {
    style: {
      ...link,
      color: 'rgba(232,228,221,0.7)'
    }
  }, "Thổ \xB7 Hỏa"), /*#__PURE__*/React.createElement("a", {
    style: {
      ...link,
      color: 'rgba(232,228,221,0.7)'
    }
  }, "Thủy \xB7 Mộc"), /*#__PURE__*/React.createElement("a", {
    style: {
      ...link,
      color: 'rgba(232,228,221,0.7)'
    }
  }, "Kim")))));
}
window.SiteFooter = SiteFooter;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/darsana/CTASection.jsx", error: String((e && e.message) || e) }); }

// ui_kits/darsana/Editorial.jsx
try { (() => {
// Editorial — long-read serif column + a dụng thần callout, on cement.
function Editorial() {
  const {
    Callout,
    Card
  } = window.InhHADesignSystem_4c0127;
  return /*#__PURE__*/React.createElement("section", {
    style: {
      padding: '56px 32px',
      background: 'var(--bg)',
      borderBottom: 'var(--border-hair) solid var(--border)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: '1100px',
      margin: '0 auto',
      display: 'grid',
      gridTemplateColumns: '1.6fr 1fr',
      gap: '40px',
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: '11px',
      fontWeight: 700,
      textTransform: 'uppercase',
      letterSpacing: '0.14em',
      color: 'var(--text-muted)',
      marginBottom: '14px'
    }
  }, "/ Working hypothesis"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 800,
      fontSize: '34px',
      letterSpacing: '-0.02em',
      margin: '0 0 18px',
      color: 'var(--text)'
    }
  }, "Why fire stays a controlled spark"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-serif)',
      fontSize: '19px',
      lineHeight: 1.62,
      color: 'var(--text)',
      margin: '0 0 16px'
    }
  }, "Đinh born in M\xE3o month is a resource-strong day master, so the elements to ", /*#__PURE__*/React.createElement("em", {
    style: {
      color: 'var(--primary)'
    }
  }, "nourish"), " are the scarce ones — Kim and Thủy. That is why metal and ink-water carry the structure, while ember stays a controlled spark rather than flooding the page."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-serif)',
      fontSize: '19px',
      lineHeight: 1.62,
      color: 'var(--text-muted)',
      margin: 0
    }
  }, "Đinh Hỏa is the whole personality of the palette: a flame that gathers, not one that blazes. Accents are warm but restrained — ember, never neon.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '16px'
    }
  }, /*#__PURE__*/React.createElement(Callout, {
    tone: "primary",
    title: "Dụng thần"
  }, "Nourish the scarce elements — Kim and Thủy. Refine once a full BaZi strength analysis is locked."), /*#__PURE__*/React.createElement(Card, {
    surface: "ink",
    frame: "block",
    texture: "conduit",
    rivets: true,
    eyebrow: "Hierarchy",
    title: "In one line"
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-mono)',
      fontSize: '12px',
      lineHeight: 1.7,
      color: 'var(--paper)'
    }
  }, "Background = cement \xB7 ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: '#C06A3D'
    }
  }, "CTA = ember"), " \xB7 Secondary = ink-slate \xB7 Success = moss \xB7 Premium = brass")))));
}
window.Editorial = Editorial;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/darsana/Editorial.jsx", error: String((e && e.message) || e) }); }

// ui_kits/darsana/ElementGrid.jsx
try { (() => {
// ElementGrid — the five ngũ hành elements as exposed-structure blocks.
function ElementGrid() {
  const {
    Card,
    Badge
  } = window.InhHADesignSystem_4c0127;
  const els = [{
    ch: '土',
    name: 'Thổ',
    role: 'The ground',
    hex: '#8C8A85',
    note: 'Background, surface, structure. Roadside earth — literally cement.',
    tone: 'neutral'
  }, {
    ch: '火',
    name: 'Hỏa',
    role: 'The spark',
    hex: '#A0522D',
    note: 'Day Master Đinh — the one hero accent. Links, highlights, CTAs.',
    tone: 'primary'
  }, {
    ch: '水',
    name: 'Thủy',
    role: 'Ink + depth',
    hex: '#28323B',
    note: 'Phá Quân. Primary text, the breaking / remaking accent.',
    tone: 'ink'
  }, {
    ch: '木',
    name: 'Mộc',
    role: 'Living accent',
    hex: '#6B7A5A',
    note: 'Born Mão month — the resource that feeds the fire. Success states.',
    tone: 'success'
  }, {
    ch: '金',
    name: 'Kim',
    role: 'Rare premium',
    hex: '#9A8557',
    note: 'Canh year, scarce — the wealth element. Use almost never.',
    tone: 'premium'
  }];
  return /*#__PURE__*/React.createElement("section", {
    style: {
      padding: '56px 32px',
      background: 'var(--surface-warm)',
      backgroundImage: 'var(--tex-grid)',
      borderBottom: 'var(--border-hair) solid var(--border)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: '1100px',
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'baseline',
      justifyContent: 'space-between',
      marginBottom: '28px',
      flexWrap: 'wrap',
      gap: '8px'
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 800,
      fontSize: '38px',
      letterSpacing: '-0.02em',
      margin: 0,
      color: 'var(--text)'
    }
  }, "Five elements, one ground"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: '11px',
      letterSpacing: '0.12em',
      textTransform: 'uppercase',
      color: 'var(--text-muted)'
    }
  }, "/ ngũ h\xE0nh")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(190px, 1fr))',
      gap: '0',
      border: '1px solid var(--ink)'
    }
  }, els.map((e, i) => /*#__PURE__*/React.createElement("div", {
    key: e.name,
    style: {
      padding: '20px',
      background: 'var(--bg)',
      borderRight: i < els.length - 1 ? '1px solid var(--ink)' : 'none'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginBottom: '14px'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-serif)',
      fontSize: '34px',
      lineHeight: 1,
      color: e.hex
    }
  }, e.ch), /*#__PURE__*/React.createElement("span", {
    style: {
      width: '20px',
      height: '20px',
      background: e.hex,
      border: '1px solid var(--ink)'
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 800,
      fontSize: '20px',
      color: 'var(--text)'
    }
  }, e.name), /*#__PURE__*/React.createElement(Badge, {
    tone: e.tone,
    style: {
      margin: '8px 0 10px'
    }
  }, e.role), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: '12.5px',
      lineHeight: 1.45,
      color: 'var(--text-muted)',
      margin: 0
    }
  }, e.note))))));
}
window.ElementGrid = ElementGrid;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/darsana/ElementGrid.jsx", error: String((e && e.message) || e) }); }

// ui_kits/darsana/Hero.jsx
try { (() => {
// Hero — big Be Vietnam Pro display, mono eyebrow, ember CTA. The thesis line.
function Hero() {
  const {
    Button,
    Badge
  } = window.InhHADesignSystem_4c0127;
  return /*#__PURE__*/React.createElement("section", {
    style: {
      padding: '72px 32px 56px',
      borderBottom: 'var(--border-hair) solid var(--border)',
      background: 'var(--bg)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: '1100px',
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: '12px',
      fontWeight: 700,
      textTransform: 'uppercase',
      letterSpacing: '0.16em',
      color: 'var(--text-muted)',
      marginBottom: '20px'
    }
  }, "Lộ B\xE0ng Thổ — roadside earth \xB7 ngũ h\xE0nh color system v1"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 900,
      fontSize: 'clamp(48px, 8vw, 92px)',
      lineHeight: 0.98,
      letterSpacing: '-0.03em',
      margin: '0 0 24px',
      color: 'var(--text)',
      maxWidth: '14ch'
    }
  }, "The cement is the room. The ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--primary)'
    }
  }, "chart"), " is the light."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-serif)',
      fontSize: '22px',
      lineHeight: 1.5,
      color: 'var(--text)',
      maxWidth: '52ch',
      margin: '0 0 32px'
    }
  }, "A flame that gathers, not one that blazes. Brutalism is the ground; the five elements are the sparks on it — ember leads, the rest speak only when their meaning does."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: '14px',
      alignItems: 'center',
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg"
  }, "Explore the system"), /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    size: "lg"
  }, "Read the derivation"), /*#__PURE__*/React.createElement(Badge, {
    tone: "primary",
    solid: true
  }, "Đinh Hỏa"))));
}
window.Hero = Hero;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/darsana/Hero.jsx", error: String((e && e.message) || e) }); }

// ui_kits/darsana/SiteHeader.jsx
try { (() => {
// SiteHeader — fixed brutalist top bar with mono nav + theme toggle.
function SiteHeader({
  dark,
  onToggle
}) {
  const {
    Switch
  } = window.InhHADesignSystem_4c0127;
  const link = {
    fontFamily: 'var(--font-mono)',
    fontSize: '12px',
    fontWeight: 700,
    textTransform: 'uppercase',
    letterSpacing: '0.08em',
    color: 'var(--text)',
    textDecoration: 'none',
    cursor: 'pointer'
  };
  return /*#__PURE__*/React.createElement("header", {
    style: {
      position: 'sticky',
      top: 0,
      zIndex: 10,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '14px 32px',
      background: 'var(--bg)',
      borderBottom: 'var(--border-hair) solid var(--border)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '12px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: '14px',
      height: '28px',
      background: 'var(--primary)',
      border: '1px solid var(--ink)'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 900,
      fontSize: '20px',
      letterSpacing: '-0.02em',
      color: 'var(--text)'
    }
  }, "ĐINH H", /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--primary)'
    }
  }, "Ỏ"), "A")), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '26px'
    }
  }, /*#__PURE__*/React.createElement("a", {
    style: link
  }, "Elements"), /*#__PURE__*/React.createElement("a", {
    style: link
  }, "System"), /*#__PURE__*/React.createElement("a", {
    style: link
  }, "Derivation"), /*#__PURE__*/React.createElement(Switch, {
    label: dark ? 'Ink' : 'Paper',
    checked: dark,
    onChange: onToggle
  })));
}
window.SiteHeader = SiteHeader;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/darsana/SiteHeader.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Callout = __ds_scope.Callout;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Switch = __ds_scope.Switch;

})();
