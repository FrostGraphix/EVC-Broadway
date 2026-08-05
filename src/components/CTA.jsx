import { Reveal } from './Reveal.jsx';

export function CTA() {
  return (
    <section className="bw-section bw-section--tight">
      <Reveal className="bw-cta-band">
        <div style={{ maxWidth: '52ch' }}>
          <span className="bw-kicker" style={{ marginBottom: 8 }}>
            Ready When You Are
          </span>
          <h2 style={{ fontSize: 24, fontWeight: 800, color: 'var(--navy)', margin: 0 }}>
            Reserve your unit, or reserve a plot to build your own.
          </h2>
        </div>
        <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap' }}>
          <a className="bw-btn" href="https://www.evcng.com">
            Visit evcng.com
          </a>
          <a className="bw-btn bw-btn--ghost" href="#">
            Book an Inspection
          </a>
        </div>
      </Reveal>
    </section>
  );
}

export default CTA;
