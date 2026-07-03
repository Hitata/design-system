// CTASection — ember band with a newsletter-style sign-up, then footer.
function CTASection() {
  const { Button, Input } = window.InhHADesignSystem_4c0127;
  return (
    <section style={{ padding: '64px 32px', background: 'var(--primary)' }}>
      <div style={{ maxWidth: '820px', margin: '0 auto', textAlign: 'center' }}>
        <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 900, fontSize: 'clamp(34px, 5vw, 56px)', letterSpacing: '-0.03em', lineHeight: 1.02, margin: '0 0 16px', color: 'var(--on-primary)' }}>
          Port the tokens. Light the room.
        </h2>
        <p style={{ fontFamily: 'var(--font-serif)', fontSize: '20px', lineHeight: 1.5, color: 'var(--on-primary)', opacity: 0.92, margin: '0 0 28px' }}>
          One source of truth for color, type, and structure — ready to drop into the next build.
        </p>
        <div style={{ display: 'flex', gap: '10px', justifyContent: 'center', flexWrap: 'wrap', alignItems: 'flex-end' }}>
          <div style={{ width: '280px', textAlign: 'left' }}>
            <Input placeholder="you@domain" />
          </div>
          <Button variant="secondary" size="lg">Get the system</Button>
        </div>
      </div>
    </section>
  );
}
window.CTASection = CTASection;

function SiteFooter() {
  const col = { display: 'flex', flexDirection: 'column', gap: '8px' };
  const link = { fontFamily: 'var(--font-mono)', fontSize: '12px', color: 'var(--text-muted)', textDecoration: 'none', cursor: 'pointer' };
  const head = { fontFamily: 'var(--font-mono)', fontSize: '10px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.14em', color: 'var(--text)', marginBottom: '4px' };
  return (
    <footer style={{ padding: '40px 32px', background: 'var(--secondary)', color: 'var(--paper)' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '32px' }}>
        <div style={{ maxWidth: '320px' }}>
          <div style={{ fontFamily: 'var(--font-display)', fontWeight: 900, fontSize: '22px', letterSpacing: '-0.02em', marginBottom: '10px' }}>
            ĐINH H<span style={{ color: '#C06A3D' }}>Ỏ</span>A
          </div>
          <p style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', lineHeight: 1.6, opacity: 0.7, margin: 0 }}>
            Derived from BaZi + Tử Vi ngũ hành. Raw-industrial / brutalist. v1, first draft.
          </p>
        </div>
        <div style={{ display: 'flex', gap: '56px', flexWrap: 'wrap' }}>
          <div style={col}><span style={{ ...head, color: 'var(--paper)' }}>System</span><a style={{ ...link, color: 'rgba(232,228,221,0.7)' }}>Colors</a><a style={{ ...link, color: 'rgba(232,228,221,0.7)' }}>Type</a><a style={{ ...link, color: 'rgba(232,228,221,0.7)' }}>Spacing</a></div>
          <div style={col}><span style={{ ...head, color: 'var(--paper)' }}>Elements</span><a style={{ ...link, color: 'rgba(232,228,221,0.7)' }}>Thổ · Hỏa</a><a style={{ ...link, color: 'rgba(232,228,221,0.7)' }}>Thủy · Mộc</a><a style={{ ...link, color: 'rgba(232,228,221,0.7)' }}>Kim</a></div>
        </div>
      </div>
    </footer>
  );
}
window.SiteFooter = SiteFooter;
