import React from 'react';

/**
 * Card — a raw structural block. Default is a hairline-framed panel on the
 * warm-plaster or paper surface. `frame="block"` adds the hard offset shadow
 * (4px, no blur) for a brutalist raised block. `surface` picks the ground.
 * `texture` overlays an honest industrial material motif (riveted metal,
 * brick grid, mesh, conduit, distressed); `rivets` adds four corner bolts.
 */
export function Card({
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
    ink: 'var(--secondary)',
  };
  const onInk = surface === 'ink';

  const frames = {
    none:  { border: 'none' },
    hair:  { border: 'var(--border-hair) var(--border-style) var(--border)' },
    thick: { border: 'var(--border-thick) var(--border-style) var(--border)' },
    block: { border: 'var(--border-hair) var(--border-style) var(--ink)', boxShadow: '4px 4px 0 0 var(--ink)' },
  };

  const textures = {
    none:     null,
    rivet:    { image: 'var(--tex-rivet)',    size: 'var(--tex-rivet-size)' },
    grid:     { image: 'var(--tex-grid)',     size: 'auto' },
    mesh:     { image: 'var(--tex-mesh)',     size: 'auto' },
    conduit:  { image: 'var(--tex-conduit)',  size: 'auto' },
    distress: { image: 'var(--tex-distress)', size: 'auto' },
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
    ...style,
  };

  const bolt = {
    position: 'absolute',
    width: 'var(--bolt-size)',
    height: 'var(--bolt-size)',
    borderRadius: 'var(--radius-pill)',
    background: onInk ? 'var(--paper)' : 'var(--ink)',
  };

  return (
    <div style={base} {...rest}>
      {rivets ? (
        <React.Fragment>
          <span aria-hidden="true" style={{ ...bolt, top: '6px', left: '6px' }} />
          <span aria-hidden="true" style={{ ...bolt, top: '6px', right: '6px' }} />
          <span aria-hidden="true" style={{ ...bolt, bottom: '6px', left: '6px' }} />
          <span aria-hidden="true" style={{ ...bolt, bottom: '6px', right: '6px' }} />
        </React.Fragment>
      ) : null}
      {eyebrow ? (
        <div style={{
          fontFamily: 'var(--font-mono)', fontSize: '10px', fontWeight: 700,
          textTransform: 'uppercase', letterSpacing: '0.14em',
          color: onInk ? 'rgba(232,228,221,0.7)' : 'var(--text-muted)',
          marginBottom: '8px',
        }}>{eyebrow}</div>
      ) : null}
      {title ? (
        <div style={{
          fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 'var(--text-lg)',
          letterSpacing: '-0.01em', lineHeight: 'var(--leading-snug)', marginBottom: children ? '10px' : 0,
        }}>{title}</div>
      ) : null}
      {children}
    </div>
  );
}
