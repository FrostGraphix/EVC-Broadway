import { motion } from 'motion/react';
import { CornerAccent } from './CornerAccent.jsx';

const CAPSULES = [
  { name: 'Room & Parlour Studio', price: '₦22,000,000', deposit: 'Initial deposit of ₦3,000,000', tone: 'peach' },
  { name: '2 Bedroom Bungalow', price: '₦40,000,000', deposit: 'Initial deposit of ₦4,000,000', tone: 'orange' },
];

export function PriceCapsules() {
  return (
    <section className="bw-section bw-section--dark bw-capsules" style={{ position: 'relative' }}>
      <CornerAccent />
      <motion.div
        style={{ textAlign: 'center' }}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.6 }}
      >
        <span className="bw-kicker bw-kicker--dark" style={{ justifyContent: 'center' }}>
          Pricing
        </span>
        <h2 className="bw-h-section bw-h-section--dark bw-capsules__headline">
          Own a piece of Broadway
        </h2>
      </motion.div>

      <div className="bw-capsules__row">
        {CAPSULES.map((c, i) => (
          <motion.div
            className={`bw-capsule bw-capsule--${c.tone}`}
            key={c.name}
            initial={{ opacity: 0, y: 30, scale: 0.96 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.55, delay: i * 0.12, ease: [0.2, 0.7, 0.2, 1] }}
            whileHover={{ y: -4 }}
          >
            <span className="bw-capsule__name">{c.name}</span>
            <span className="bw-capsule__price">{c.price}</span>
            <span className="bw-capsule__deposit">{c.deposit}</span>
          </motion.div>
        ))}
      </div>
      <motion.p
        className="bw-capsules__note"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        3 Bedroom Bungalow priced on request · full land and rate-card breakdown follows below
      </motion.p>
    </section>
  );
}

export default PriceCapsules;
