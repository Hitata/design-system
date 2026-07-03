import React from 'react';

/**
 * Callout — an inline note block with a heavy left rule in the tone color.
 * Tones map to ngũ hành roles. This is the one place a colored edge is
 * allowed (it carries meaning), kept honest with a flat surface.
 */
export function Callout({
  tone = 'primary',
  title,
  children,
  style,
  ...rest
}) {
  const tones = {
    primary: 'var(--primary)',
    success: 'var(--success)',
    ink:     'var(--secondary)',
    premium: 'var(--premium)',
    neutral: 'var(--text-muted)',
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
    ...style,
  };

  return (
    <div role="note" style={base} {...rest}>
      {title ? (
        <div style={{
          fontFamily: 'var(--font-mono)', fontSize: '11px', fontWeight: 'var(--weight-bold)',
          textTransform: 'var(--case-label)', letterSpacing: '0.1em', color: c, marginBottom: '6px',
        }}>{title}</div>
      ) : null}
      <div style={{ fontFamily: 'var(--font-sans)', fontSize: 'var(--text-sm)', lineHeight: 'var(--leading-normal)' }}>
        {children}
      </div>
    </div>
  );
}
