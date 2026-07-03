import React from 'react';

/**
 * Input — single-line text field. Hairline ink frame, square corners,
 * ember focus ring. Mono uppercase label sits above; optional hint/error
 * below. The field is honest structure: no inner shadow, no fill flourish.
 */
export function Input({
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
    transition: 'box-shadow 80ms linear',
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
    width: '100%',
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', ...style }}>
      {label ? (
        <label htmlFor={fieldId} style={{
          fontFamily: 'var(--font-mono)', fontSize: '10px', fontWeight: 700,
          textTransform: 'uppercase', letterSpacing: '0.12em', color: 'var(--text-muted)',
        }}>{label}</label>
      ) : null}
      <div style={frame}>
        {prefix ? <span style={{ fontFamily: 'var(--font-mono)', fontSize: '13px', color: 'var(--text-muted)' }}>{prefix}</span> : null}
        <input
          id={fieldId}
          style={input}
          aria-invalid={invalid || undefined}
          onFocus={(e) => { setFocus(true); rest.onFocus && rest.onFocus(e); }}
          onBlur={(e) => { setFocus(false); rest.onBlur && rest.onBlur(e); }}
          {...rest}
        />
      </div>
      {error ? (
        <span style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--primary)' }}>{error}</span>
      ) : hint ? (
        <span style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--text-muted)' }}>{hint}</span>
      ) : null}
    </div>
  );
}
