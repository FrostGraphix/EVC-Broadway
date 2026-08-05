import { Reveal } from './Reveal.jsx';
import { CornerAccent } from './CornerAccent.jsx';

const ROWS = [
  { label: 'Total units', value: '60 residences across the estate' },
  { label: 'Unit categories', value: 'Studio · 2‑Bed · 3‑Bed Bungalow' },
  { label: 'Land options', value: 'Freehold plots from 300 sqm' },
  { label: 'What to expect', value: 'Infrastructure-first, community-run living' },
];

export function KeyHighlights() {
  return (
    <section className="bw-section bw-section--dark" style={{ position: 'relative' }}>
      <CornerAccent />
      <Reveal style={{ maxWidth: 640 }}>
        <span className="bw-kicker bw-kicker--dark">Key Highlights</span>
        <h2 className="bw-h-section bw-h-section--dark">The estate, at a glance</h2>
      </Reveal>
      <Reveal className="bw-highlights">
        {ROWS.map((row) => (
          <div className="bw-highlight-row" key={row.label}>
            <span className="bw-highlight-label">{row.label}</span>
            <span className="bw-highlight-value">{row.value}</span>
          </div>
        ))}
      </Reveal>
    </section>
  );
}

export default KeyHighlights;
