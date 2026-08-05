import { motion } from 'motion/react';

const GOALS = [
  {
    num: '06',
    color: 'var(--sdg-water)',
    colorRGB: '38,189,226',
    title: 'Clean Water & Sanitation',
    body: 'A central estate borehole with a treatment system gives every resident access to safe, hygienic, potable water without reliance on tankers or local infrastructure.',
    icon: '💧',
  },
  {
    num: '07',
    color: 'var(--sdg-energy)',
    colorRGB: '252,195,11',
    title: 'Affordable & Clean Energy',
    body: 'Solar power with inverter backup eliminates generator dependency — cutting noise pollution, air pollution, and monthly electricity costs for every household.',
    icon: '☀️',
  },
  {
    num: '11',
    color: 'var(--sdg-cities)',
    colorRGB: '253,157,36',
    title: 'Sustainable Cities & Communities',
    body: 'A planned estate with modern amenities, paved roads, and long-term community management — building peace and prosperity locally, in Malete.',
    icon: '🏘️',
  },
];

export function Responsible() {
  return (
    <section className="bw-section bw-section--tight bw-responsible" style={{ background: 'var(--cream)' }}>
      <motion.div
        style={{ maxWidth: 640, marginBottom: 0 }}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      >
        <span className="bw-kicker">Built Responsibly</span>
        <h2 className="bw-h-section">
          Aligned with the UN Sustainable Development Goals
        </h2>
        <p className="bw-lede" style={{ marginTop: 16 }}>
          Broadway Residentials is designed to benefit people and the planet — not just its investors.
        </p>
      </motion.div>

      <div className="bw-sdg-strip">
        {GOALS.map((g, i) => (
          <motion.div
            className="bw-sdg-card bw-sdg-card--enhanced"
            key={g.num}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.55, delay: i * 0.12, ease: [0.16, 1, 0.3, 1] }}
            whileHover={{ y: -4, boxShadow: `0 16px 40px -8px rgba(${g.colorRGB},0.2)` }}
            style={{ '--sdg-accent': g.color, '--sdg-rgb': g.colorRGB }}
          >
            <span className="bw-sdg-num" style={{ background: g.color }}>
              {g.num}
            </span>
            <div>
              <h3>{g.title}</h3>
              <p>{g.body}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Responsible;
