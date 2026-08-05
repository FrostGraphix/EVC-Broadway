import { motion } from 'motion/react';
import { BroadwayWordmark } from './Logo.jsx';
import { CornerAccent } from './CornerAccent.jsx';
import { GlobeIcon, PinIcon, PhoneIcon, ArrowIcon } from './Icons.jsx';

export function Closing() {
  return (
    <section className="bw-closing">
      <CornerAccent />

      {/* Animated ambient glow */}
      <motion.div
        className="bw-closing__glow"
        animate={{ scale: [1, 1.15, 1], opacity: [0.35, 0.6, 0.35] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      />

      <motion.div
        className="bw-closing__inner"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65, delay: 0.1 }}
        >
          <BroadwayWordmark variant="light" size="md" />
        </motion.div>

        <motion.p
          className="bw-closing__tagline"
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          …granting access to a smarter communal living, at the edge of Kwara State University.
        </motion.p>

        {/* Contact Row */}
        <motion.div
          className="bw-closing__contact"
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <a className="bw-closing__contact-item" href="https://www.evcng.com" target="_blank" rel="noopener noreferrer">
            <GlobeIcon size={16} />
            www.evcng.com
          </a>
          <span className="bw-closing__contact-sep" />
          <div className="bw-closing__contact-item">
            <PinIcon size={16} />
            Malete, Kwara State
          </div>
        </motion.div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <motion.a
            className="bw-btn bw-closing__cta"
            href="https://www.evcng.com"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.97 }}
          >
            Get in Touch with EVC <ArrowIcon size={16} />
          </motion.a>
        </motion.div>

        <p className="payline">
          A New Development by EVC (Experience Vision Creations) · Creating Homes, Envisioning Prosperity
        </p>
      </motion.div>
    </section>
  );
}

export default Closing;
