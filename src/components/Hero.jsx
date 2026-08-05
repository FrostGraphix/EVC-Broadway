import { motion } from 'motion/react';
import { BroadwayWordmark } from './Logo.jsx';
import { PinIcon, DocIcon, ShieldIcon } from './Icons.jsx';
import { heroImage } from '../assets/photos.js';

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.15 } },
};
const item = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.2, 0.7, 0.2, 1] } },
};

export function Hero() {
  return (
    <section className="bw-hero">
      <div className="bw-hero__stage">
        <motion.img
          className="bw-hero__img"
          src={heroImage}
          alt="Broadway Residentials facade at dusk, warm lit windows and covered entrance"
          initial={{ scale: 1.12, opacity: 0, rotate: -1.4, rotateY: 0 }}
          animate={{
            opacity: 0.92,
            scale: [1.05, 1.11, 1.05],
            rotate: [-1.1, 1.1, -1.1],
            rotateY: [-4, 4, -4],
          }}
          transition={{
            opacity: { duration: 1.8, ease: [0.16, 1, 0.3, 1] },
            scale: { duration: 26, repeat: Infinity, ease: 'easeInOut' },
            rotate: { duration: 26, repeat: Infinity, ease: 'easeInOut' },
            rotateY: { duration: 18, repeat: Infinity, ease: 'easeInOut' },
          }}
        />
      </div>
      <div className="bw-hero__scrim" />
      <motion.div className="bw-hero__body" variants={container} initial="hidden" animate="show">
        <motion.div variants={item}>
          <BroadwayWordmark variant="light" size="lg" />
        </motion.div>
        <motion.p className="bw-hero__tag" variants={item}>
          …granting access to a smarter communal living, at the edge of Kwara State University.
        </motion.p>
        <motion.div className="bw-hero__meta" variants={item}>
          <span className="bw-hero__meta-item">
            <PinIcon size={17} />KWASU Axis, Malete, Kwara State
          </span>
          <span className="bw-hero__meta-item">
            <DocIcon size={17} />Studio · 2-Bed · 3-Bed Bungalows
          </span>
          <span className="bw-hero__badge bw-hero__badge--meta">
            <ShieldIcon size={14} />A New Development by EVC
          </span>
        </motion.div>
      </motion.div>
      <motion.div
        className="bw-scrollcue"
        aria-hidden="true"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1.1 }}
      >
        <span className="bw-scrollcue__line" />
        Scroll
      </motion.div>
    </section>
  );
}

export default Hero;
