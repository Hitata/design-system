import React from 'react';

/**
 * Switch — a square brutalist toggle. The thumb is a hard ink block that
 * slides with no easing flourish; the track fills ember when on. Honest
 * structure: hairline frame, no rounding.
 */
export function Switch({
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
    padding: 0,
  };

  const thumb = {
    position: 'absolute',
    top: '2px',
    left: on ? '22px' : '2px',
    width: '18px',
    height: '18px',
    background: 'var(--ink)',
    transition: 'left 90ms linear',
  };

  return (
    <label htmlFor={fieldId} style={{
      display: 'inline-flex', alignItems: 'center', gap: '10px',
      cursor: disabled ? 'not-allowed' : 'pointer', ...style,
    }}>
      <button
        type="button"
        id={fieldId}
        role="switch"
        aria-checked={on}
        aria-label={label || 'toggle'}
        disabled={disabled}
        onClick={toggle}
        style={track}
        {...rest}
      >
        <span aria-hidden="true" style={thumb} />
      </button>
      {label ? (
        <span style={{
          fontFamily: 'var(--font-mono)', fontSize: '12px', fontWeight: 700,
          textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--text)',
        }}>{label}</span>
      ) : null}
    </label>
  );
}
