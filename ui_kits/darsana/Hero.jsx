// Hero — big Be Vietnam Pro display, mono eyebrow, ember CTA. The thesis line.
function Hero() {
  const { Button, Badge } = window.InhHADesignSystem_4c0127;
  return (
    <section style={{
      padding: '72px 32px 56px', borderBottom: 'var(--border-hair) solid var(--border)',
      background: 'var(--bg)',
    }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        <div style={{
          fontFamily: 'var(--font-mono)', fontSize: '12px', fontWeight: 700,
          textTransform: 'uppercase', letterSpacing: '0.16em', color: 'var(--text-muted)',
          marginBottom: '20px',
        }}>
          Lộ Bàng Thổ — roadside earth · ngũ hành color system v1
        </div>
        <h1 style={{
          fontFamily: 'var(--font-display)', fontWeight: 900,
          fontSize: 'clamp(48px, 8vw, 92px)', lineHeight: 0.98, letterSpacing: '-0.03em',
          margin: '0 0 24px', color: 'var(--text)', maxWidth: '14ch',
        }}>
          The cement is the room. The <span style={{ color: 'var(--primary)' }}>chart</span> is the light.
        </h1>
        <p style={{
          fontFamily: 'var(--font-serif)', fontSize: '22px', lineHeight: 1.5,
          color: 'var(--text)', maxWidth: '52ch', margin: '0 0 32px',
        }}>
          A flame that gathers, not one that blazes. Brutalism is the ground; the five
          elements are the sparks on it — ember leads, the rest speak only when their meaning does.
        </p>
        <div style={{ display: 'flex', gap: '14px', alignItems: 'center', flexWrap: 'wrap' }}>
          <Button variant="primary" size="lg">Explore the system</Button>
          <Button variant="ghost" size="lg">Read the derivation</Button>
          <Badge tone="primary" solid>Đinh Hỏa</Badge>
        </div>
      </div>
    </section>
  );
}
window.Hero = Hero;
