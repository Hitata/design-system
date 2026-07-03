// Editorial — long-read serif column + a dụng thần callout, on cement.
function Editorial() {
  const { Callout, Card } = window.InhHADesignSystem_4c0127;
  return (
    <section style={{ padding: '56px 32px', background: 'var(--bg)', borderBottom: 'var(--border-hair) solid var(--border)' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1.6fr 1fr', gap: '40px', alignItems: 'start' }}>
        <div>
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.14em', color: 'var(--text-muted)', marginBottom: '14px' }}>/ Working hypothesis</div>
          <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '34px', letterSpacing: '-0.02em', margin: '0 0 18px', color: 'var(--text)' }}>Why fire stays a controlled spark</h2>
          <p style={{ fontFamily: 'var(--font-serif)', fontSize: '19px', lineHeight: 1.62, color: 'var(--text)', margin: '0 0 16px' }}>
            Đinh born in Mão month is a resource-strong day master, so the elements to <em style={{ color: 'var(--primary)' }}>nourish</em> are the scarce ones — Kim and Thủy. That is why metal and ink-water carry the structure, while ember stays a controlled spark rather than flooding the page.
          </p>
          <p style={{ fontFamily: 'var(--font-serif)', fontSize: '19px', lineHeight: 1.62, color: 'var(--text-muted)', margin: 0 }}>
            Đinh Hỏa is the whole personality of the palette: a flame that gathers, not one that blazes. Accents are warm but restrained — ember, never neon.
          </p>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <Callout tone="primary" title="Dụng thần">
            Nourish the scarce elements — Kim and Thủy. Refine once a full BaZi strength analysis is locked.
          </Callout>
          <Card surface="ink" frame="block" texture="conduit" rivets eyebrow="Hierarchy" title="In one line">
            <p style={{ margin: 0, fontFamily: 'var(--font-mono)', fontSize: '12px', lineHeight: 1.7, color: 'var(--paper)' }}>
              Background = cement · <span style={{ color: '#C06A3D' }}>CTA = ember</span> · Secondary = ink-slate · Success = moss · Premium = brass
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
}
window.Editorial = Editorial;
