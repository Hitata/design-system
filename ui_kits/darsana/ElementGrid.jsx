// ElementGrid — the five ngũ hành elements as exposed-structure blocks.
function ElementGrid() {
  const { Card, Badge } = window.InhHADesignSystem_4c0127;
  const els = [
    { ch: '土', name: 'Thổ', role: 'The ground', hex: '#8C8A85', note: 'Background, surface, structure. Roadside earth — literally cement.', tone: 'neutral' },
    { ch: '火', name: 'Hỏa', role: 'The spark', hex: '#A0522D', note: 'Day Master Đinh — the one hero accent. Links, highlights, CTAs.', tone: 'primary' },
    { ch: '水', name: 'Thủy', role: 'Ink + depth', hex: '#28323B', note: 'Phá Quân. Primary text, the breaking / remaking accent.', tone: 'ink' },
    { ch: '木', name: 'Mộc', role: 'Living accent', hex: '#6B7A5A', note: 'Born Mão month — the resource that feeds the fire. Success states.', tone: 'success' },
    { ch: '金', name: 'Kim', role: 'Rare premium', hex: '#9A8557', note: 'Canh year, scarce — the wealth element. Use almost never.', tone: 'premium' },
  ];
  return (
    <section style={{ padding: '56px 32px', background: 'var(--surface-warm)', backgroundImage: 'var(--tex-grid)', borderBottom: 'var(--border-hair) solid var(--border)' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', marginBottom: '28px', flexWrap: 'wrap', gap: '8px' }}>
          <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '38px', letterSpacing: '-0.02em', margin: 0, color: 'var(--text)' }}>Five elements, one ground</h2>
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--text-muted)' }}>/ ngũ hành</span>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(190px, 1fr))', gap: '0', border: '1px solid var(--ink)' }}>
          {els.map((e, i) => (
            <div key={e.name} style={{
              padding: '20px', background: 'var(--bg)',
              borderRight: i < els.length - 1 ? '1px solid var(--ink)' : 'none',
            }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '14px' }}>
                <span style={{ fontFamily: 'var(--font-serif)', fontSize: '34px', lineHeight: 1, color: e.hex }}>{e.ch}</span>
                <span style={{ width: '20px', height: '20px', background: e.hex, border: '1px solid var(--ink)' }} />
              </div>
              <div style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '20px', color: 'var(--text)' }}>{e.name}</div>
              <Badge tone={e.tone} style={{ margin: '8px 0 10px' }}>{e.role}</Badge>
              <p style={{ fontFamily: 'var(--font-sans)', fontSize: '12.5px', lineHeight: 1.45, color: 'var(--text-muted)', margin: 0 }}>{e.note}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
window.ElementGrid = ElementGrid;
