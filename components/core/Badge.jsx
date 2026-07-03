import React from 'react';

/**
 * Badge — a small status/label chip. Tones map to ngũ hành roles:
 * neutral (cement), primary (ember), success (moss), premium (brass),
 * ink (ink-slate). `dot` adds a leading status dot; `solid` fills.
 */
export function Badge({
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
    ink:     'var(--secondary)',
  };
  const c = tones[tone] || tones.neutral;
  const onSolid = tone === 'premium' ? 'var(--on-premium)' : 'var(--paper)';

  const base = {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '6px',
    fontFamily: 'var(--font-mono)',
    fontWeight: 'var(--weight-bold)',
    fontSize: '10px',
    lineHeight: 1,
    textTransform: 'var(--case-label)',
    letterSpacing: '0.1em',
    padding: '4px 8px',
    borderRadius: 'var(--radius-none)',
    border: `var(--border-hair) var(--border-style) ${solid ? c : 'var(--border)'}`,
    background: solid ? c : 'transparent',
    color: solid ? onSolid : 'var(--text)',
    ...style,
  };

  return (
    <span style={base} {...rest}>
      {dot ? (
        <span aria-hidden="true" style={{
          width: '6px', height: '6px', borderRadius: 'var(--radius-pill)',
          background: solid ? onSolid : c, flex: 'none',
        }} />
      ) : null}
      {children}
    </span>
  );
}
