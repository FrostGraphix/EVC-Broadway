import { useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'motion/react';
import { BroadwayWordmark } from './Logo.jsx';
import { PinIcon, DocIcon, ShieldIcon, ArrowIcon } from './Icons.jsx';
import { heroImage } from '../assets/photos.js';

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.14, delayChildren: 0.2 },
  },
};

const item = {
  hidden: { opacity: 0, y: 24, filter: 'blur(6px)' },
  show: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { duration: 0.75, ease: [0.16, 1, 0.3, 1] },
  },
};

const floatCard = (delay = 0) => ({
  initial: { opacity: 0, x: 24, y: 16 },
  animate: {
    opacity: 1,
    x: 0,
    y: [0, -8, 0],
    transition: {
      opacity: { duration: 0.8, delay },
      x: { duration: 0.8, delay },
      y: { duration: 5, repeat: Infinity, ease: 'easeInOut', delay },
    },
  },
});

export function Hero() {
  const [isHovered, setIsHovered] = useState(false);

  // Mouse parallax motion
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 28, stiffness: 140 };
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [5, -5]), springConfig);
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-6, 6]), springConfig);
  const imgScale = useSpring(useTransform(mouseX, [-0.5, 0.5], [1.05, 1.1]), springConfig);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
    setIsHovered(false);
  };

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      className="bw-hero"
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
    >
      {/* Background Stage with Dynamic Parallax Motion */}
      <div className="bw-hero__stage">
        <motion.img
          className="bw-hero__img"
          src={heroImage}
          alt="Broadway Residentials facade at dusk"
          style={{
            rotateX,
            rotateY,
            scale: imgScale,
          }}
          initial={{ scale: 1.15, opacity: 0 }}
          animate={{ opacity: 0.95 }}
          transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
        />

        {/* Ambient Radial Glow behind logo */}
        <div className="bw-hero__spotlight" />

        {/* Shimmer Light Gradient */}
        <motion.div
          className="bw-hero__shimmer"
          animate={{
            opacity: [0.25, 0.55, 0.25],
            scale: [1, 1.03, 1],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      </div>

      <div className="bw-hero__scrim" />

      {/* Hero Body Content */}
      <motion.div
        className="bw-hero__body"
        variants={container}
        initial="hidden"
        animate="show"
      >
        {/* Clean Logo Display */}
        <motion.div variants={item} className="bw-hero__wordmark-wrap">
          <BroadwayWordmark variant="light" size="lg" />
        </motion.div>

        {/* Clean Tagline */}
        <motion.p className="bw-hero__tag" variants={item}>
          …granting access to a smarter communal living, at the edge of Kwara State University.
        </motion.p>

        {/* Action Buttons */}
        <motion.div className="bw-hero__actions" variants={item}>
          <motion.button
            className="bw-btn bw-btn--hero-primary"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.96 }}
            onClick={() => scrollToSection('residences')}
          >
            Explore Residences <ArrowIcon size={16} />
          </motion.button>

          <motion.button
            className="bw-btn bw-btn--hero-secondary"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.96 }}
            onClick={() => scrollToSection('pricing')}
          >
            View Pricing Offers
          </motion.button>
        </motion.div>

        {/* Metadata Footer Strip */}
        <motion.div className="bw-hero__meta" variants={item}>
          <div className="bw-hero__meta-item">
            <PinIcon size={16} />
            <span>KWASU Axis, Malete, Kwara State</span>
          </div>

          <div className="bw-hero__meta-item">
            <DocIcon size={16} />
            <span>Studio • 2-Bed • 3-Bed Bungalows</span>
          </div>

          <div className="bw-hero__badge bw-hero__badge--meta">
            <ShieldIcon size={13} />
            <span>A New Development by EVC</span>
          </div>
        </motion.div>
      </motion.div>

      {/* Floating Glass Cards (Desktop Side Display) */}
      <div className="bw-hero__float-cards">
        <motion.div
          className="bw-hero__float-card"
          variants={floatCard(0.5)}
          initial="initial"
          animate="animate"
          whileHover={{ scale: 1.05, y: -4 }}
        >
          <div className="bw-hero__float-badge">HIGH YIELD ASSET</div>
          <div className="bw-hero__float-value">9.8% Annual ROI</div>
          <div className="bw-hero__float-sub">Driven by KWASU student & staff demand</div>
        </motion.div>

        <motion.div
          className="bw-hero__float-card"
          variants={floatCard(0.8)}
          initial="initial"
          animate="animate"
          whileHover={{ scale: 1.05, y: -4 }}
        >
          <div className="bw-hero__float-badge">VERIFIED LAND TITLE</div>
          <div className="bw-hero__float-value">Certificate of Occupancy</div>
          <div className="bw-hero__float-sub">100% legal perfection & peace of mind</div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="bw-scrollcue"
        aria-hidden="true"
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.2 }}
        onClick={() => scrollToSection('interiors')}
        style={{ cursor: 'pointer' }}
      >
        <motion.span
          className="bw-scrollcue__line"
          animate={{ scaleY: [0.4, 1, 0.4] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
        />
        Scroll
      </motion.div>
    </section>
  );
}

export default Hero;
