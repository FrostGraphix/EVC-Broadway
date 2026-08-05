import { Reveal } from './Reveal.jsx';
import { CornerAccent } from './CornerAccent.jsx';

const BUILDING_CARDS = [
  { tag: 'Building', name: 'Room & Parlour Studio', amount: '₦22M', deposit: 'Initial deposit of ₦3,000,000' },
  { tag: 'Building', name: '2 Bedroom Bungalow', amount: '₦40M', deposit: 'Initial deposit of ₦4,000,000' },
];

const LAND_CARDS = [
  {
    tag: 'Land (sqm)',
    name: 'Build it yourself',
    rows: [
      { sqm: '300 sqm', amt: '₦2.5M' },
      { sqm: '500 sqm', amt: '₦4M' },
    ],
    deposit: 'From ₦500,000 initial deposit',
  },
  {
    tag: 'Land (Acres)',
    name: 'Build it yourself',
    rows: [
      { sqm: '300 sqm', amt: '₦15M' },
      { sqm: '500 sqm', amt: '₦24M' },
    ],
    deposit: 'From ₦3,000,000 initial deposit',
  },
];

export function Pricing() {
  return (
    <section className="bw-section bw-land-band" id="pricing" style={{ position: 'relative' }}>
      <CornerAccent />
      <Reveal style={{ maxWidth: 640 }}>
        <span className="bw-kicker bw-kicker--dark">More Lands to Own</span>
        <h2 className="bw-h-section bw-h-section--dark">Buy the plot, build it your way</h2>
        <p className="bw-lede" style={{ color: 'rgba(255,246,238,.72)', marginTop: 16 }}>
          More investors than units, always. So the estate extends outward — plots you can
          develop yourself, or hand to EVC to build on your behalf.
        </p>
      </Reveal>
      <Reveal className="bw-land-grid">
        {BUILDING_CARDS.map((card) => (
          <div className="bw-land-card" key={card.name}>
            <span className="tag">{card.tag}</span>
            <h3 style={{ color: 'var(--paper)', fontSize: 15, fontWeight: 700, margin: 0 }}>{card.name}</h3>
            <span className="bw-price-pill" style={{ alignSelf: 'flex-start' }}>
              <span className="amount">{card.amount}</span>
              <span className="unit">Full unit</span>
            </span>
            <span className="deposit">{card.deposit}</span>
          </div>
        ))}
        {LAND_CARDS.map((card) => (
          <div className="bw-land-card" key={card.tag}>
            <span className="tag">{card.tag}</span>
            <h3 style={{ color: 'var(--paper)', fontSize: 15, fontWeight: 700, margin: 0 }}>{card.name}</h3>
            {card.rows.map((row) => (
              <div className="bw-land-row" key={row.sqm}>
                <span className="sqm">{row.sqm}</span>
                <span className="amt">{row.amt}</span>
              </div>
            ))}
            <span className="deposit">{card.deposit}</span>
          </div>
        ))}
      </Reveal>
    </section>
  );
}

export default Pricing;
