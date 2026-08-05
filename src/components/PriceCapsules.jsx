import { motion } from 'motion/react';
import { CornerAccent } from './CornerAccent.jsx';

const CAPSULES = [
  {
    id: 'studio',
    labelLine1: 'STUDIO',
    labelLine2: 'APARTMENT',
    price: '₦22M',
    deposit: 'INITIAL DEPOSIT - ₦3M',
    bgGradient: 'linear-gradient(135deg, #FF2A2A 0%, #D40000 100%)',
    textColor: '#FFFFFF',
    glowColor: 'rgba(255, 42, 42, 0.4)',
  },
  {
    id: '2bed',
    labelLine1: 'TWO BEDROOM',
    labelLine2: 'BUNGALOW',
    price: '₦40M',
    deposit: 'INITIAL DEPOSIT - ₦4M',
    bgGradient: 'linear-gradient(135deg, #F5D061 0%, #E6AD2B 50%, #C88E14 100%)',
    textColor: '#0E150F',
    glowColor: 'rgba(230, 173, 43, 0.4)',
  },
  {
    id: '3bed',
    labelLine1: 'THREE BEDROOM',
    labelLine2: 'BUNGALOW',
    price: 'ON REQUEST',
    deposit: 'FULL LAND & RATE-CARD BREAKDOWN BELOW',
    bgGradient: 'linear-gradient(135deg, #F57F25 0%, #D4661A 100%)',
    textColor: '#FFFFFF',
    glowColor: 'rgba(245, 127, 37, 0.4)',
  },
];

export function PriceCapsules() {
  return (
    <section className="bw-section bw-section--dark bw-capsules-target" id="pricing">
      <CornerAccent />
      
      {/* Header */}
      <motion.div
        className="bw-capsules-target__header"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
      >
        <span className="bw-capsules-target__kicker">P R I C I N G</span>
        <h2 className="bw-capsules-target__headline">Own a piece of Broadway</h2>
      </motion.div>

      {/* Capsules Stack */}
      <div className="bw-capsules-target__stack">
        {CAPSULES.map((item, index) => (
          <motion.div
            key={item.id}
            className="bw-capsule-item"
            initial={{ opacity: 0, y: 32, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.6, delay: index * 0.15, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Pill Container */}
            <motion.div
              className="bw-capsule-pill"
              style={{
                background: item.bgGradient,
                color: item.textColor,
                boxShadow: `0 14px 40px ${item.glowColor}`,
              }}
              whileHover={{ scale: 1.03, y: -4 }}
              transition={{ type: 'spring', stiffness: 280, damping: 20 }}
            >
              <div className="bw-capsule-pill__label">
                <span>{item.labelLine1}</span>
                <span>{item.labelLine2}</span>
              </div>
              
              <div className="bw-capsule-pill__dot" style={{ background: item.textColor }} />

              <div className="bw-capsule-pill__price">
                {item.price}
              </div>
            </motion.div>

            {/* Subtext underneath */}
            <div className="bw-capsule-item__deposit">
              {item.deposit}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Bottom Potential Rental Income Callout */}
      <motion.div
        className="bw-capsules-target__footer"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.5 }}
      >
        <div className="bw-capsules-target__rental">
          POTENTIAL RENTAL INCOME 7–8M PER ANNUM
        </div>
        <div className="bw-capsules-target__line" />
      </motion.div>
    </section>
  );
}

export default PriceCapsules;
