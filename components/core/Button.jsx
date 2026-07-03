import React from 'react';

/**
 * Button — the primary action primitive.
 * Brutalist: square corners, hairline ink border, mono uppercase label,
 * hard hover (no easing flourish). Ember is the one hero; secondary is
 * ink-slate; ghost is bordered; link is underlined ember.
 */
export function Button({
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
    sm: { padding: '6px 12px', fontSize: '11px' },
    md: { padding: '10px 18px', fontSize: '12px' },
    lg: { padding: '14px 26px', fontSize: '14px' },
  };

  const palette = {
    primary:   { bg: 'var(--primary)',   bgHover: 'var(--primary-hover)', fg: 'var(--on-primary)',   border: 'var(--border)' },
    secondary: { bg: 'var(--secondary)', bgHover: 'var(--secondary-hover)', fg: 'var(--on-secondary)', border: 'var(--border)' },
    ghost:     { bg: 'transparent',      bgHover: 'var(--ink)',           fg: 'var(--text)',         border: 'var(--border)', fgHover: 'var(--bg)' },
    link:      { bg: 'transparent',      bgHover: 'transparent',          fg: 'var(--link)',         border: 'transparent' },
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
    fontWeight: 'var(--weight-bold)',
    textTransform: 'var(--case-label)',
    letterSpacing: 'var(--tracking-wide)',
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
    transform: active && !disabled && !isLink ? 'translate(var(--press-offset), var(--press-offset))' : 'none',
    transition: 'background 80ms var(--ease-hard), color 80ms var(--ease-hard), transform 60ms var(--ease-hard)',
    ...style,
  };

  return (
    <button
      type="button"
      disabled={disabled}
      style={base}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => { setHover(false); setActive(false); }}
      onMouseDown={() => setActive(true)}
      onMouseUp={() => setActive(false)}
      {...rest}
    >
      {startIcon ? <span aria-hidden="true" style={{ display: 'inline-flex' }}>{startIcon}</span> : null}
      {children}
      {endIcon ? <span aria-hidden="true" style={{ display: 'inline-flex' }}>{endIcon}</span> : null}
    </button>
  );
}
