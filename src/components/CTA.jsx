import { motion } from 'motion/react';
import { ArrowIcon, PhoneIcon } from './Icons.jsx';

export function CTA() {
  return (
    <section className="bw-section bw-section--tight bw-cta-outer">
      <motion.div
        className="bw-cta-band"
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
      >
        {/* Left: Text block */}
        <div className="bw-cta-text">
          <span className="bw-kicker" style={{ marginBottom: 10 }}>
            Ready When You Are
          </span>
          <h2 className="bw-cta-headline">
            Reserve your unit, or reserve a plot to build your own.
          </h2>
          <p className="bw-cta-sub">
            Flexible payment plans available. Talk to EVC today and secure your slice of Broadway Residentials before Phase 1 closes.
          </p>
        </div>

        {/* Right: CTA Buttons */}
        <div className="bw-cta-actions">
          <motion.a
            className="bw-btn bw-btn--cta-primary"
            href="https://www.evcng.com"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.04, y: -2 }}
            whileTap={{ scale: 0.97 }}
          >
            Visit evcng.com <ArrowIcon size={16} />
          </motion.a>
          <motion.a
            className="bw-btn bw-btn--cta-secondary"
            href="tel:+2348000000000"
            whileHover={{ scale: 1.04, y: -2 }}
            whileTap={{ scale: 0.97 }}
          >
            <PhoneIcon size={16} /> Book an Inspection
          </motion.a>
        </div>
      </motion.div>
    </section>
  );
}

export default CTA;
