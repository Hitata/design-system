// SiteHeader — fixed brutalist top bar with mono nav + theme toggle.
function SiteHeader({ dark, onToggle }) {
  const { Switch } = window.InhHADesignSystem_4c0127;
  const link = {
    fontFamily: 'var(--font-mono)', fontSize: '12px', fontWeight: 700,
    textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--text)',
    textDecoration: 'none', cursor: 'pointer',
  };
  return (
    <header style={{
      position: 'sticky', top: 0, zIndex: 10,
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      padding: '14px 32px', background: 'var(--bg)',
      borderBottom: 'var(--border-hair) solid var(--border)',
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
        <div style={{ width: '14px', height: '28px', background: 'var(--primary)', border: '1px solid var(--ink)' }} />
        <span style={{ fontFamily: 'var(--font-display)', fontWeight: 900, fontSize: '20px', letterSpacing: '-0.02em', color: 'var(--text)' }}>
          ĐINH H<span style={{ color: 'var(--primary)' }}>Ỏ</span>A
        </span>
      </div>
      <nav style={{ display: 'flex', alignItems: 'center', gap: '26px' }}>
        <a style={link}>Elements</a>
        <a style={link}>System</a>
        <a style={link}>Derivation</a>
        <Switch label={dark ? 'Ink' : 'Paper'} checked={dark} onChange={onToggle} />
      </nav>
    </header>
  );
}
window.SiteHeader = SiteHeader;
