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
  hidden: { opacity: 0, y: 28, filter: 'blur(8px)' },
  show: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
  },
};

const floatCard = (delay = 0) => ({
  initial: { opacity: 0, x: 30, y: 20 },
  animate: {
    opacity: 1,
    x: 0,
    y: [0, -10, 0],
    transition: {
      opacity: { duration: 0.8, delay },
      x: { duration: 0.8, delay },
      y: { duration: 6, repeat: Infinity, ease: 'easeInOut', delay },
    },
  },
});

export function Hero() {
  const [isHovered, setIsHovered] = useState(false);

  // Mouse parallax motion
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 120 };
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [6, -6]), springConfig);
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-8, 8]), springConfig);
  const imgScale = useSpring(useTransform(mouseX, [-0.5, 0.5], [1.06, 1.12]), springConfig);

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
      {/* Background Stage with Motion Parallax */}
      <div className="bw-hero__stage">
        <motion.img
          className="bw-hero__img"
          src={heroImage}
          alt="Broadway Residentials facade at dusk, warm lit windows and covered entrance"
          style={{
            rotateX,
            rotateY,
            scale: imgScale,
          }}
          initial={{ scale: 1.15, opacity: 0 }}
          animate={{ opacity: 0.95 }}
          transition={{ duration: 1.6, ease: [0.16, 1, 0.3, 1] }}
        />
        {/* Animated Light Shimmer Overlay */}
        <motion.div
          className="bw-hero__shimmer"
          animate={{
            opacity: [0.3, 0.65, 0.3],
            scale: [1, 1.04, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      </div>

      <div className="bw-hero__scrim" />

      {/* Hero Content Body */}
      <motion.div
        className="bw-hero__body"
        variants={container}
        initial="hidden"
        animate="show"
      >
        {/* Live Status Badge */}
        <motion.div variants={item} className="bw-hero__status">
          <span className="bw-hero__status-dot" />
          <span>Now Selling • Phase 1 Residential Allotment</span>
        </motion.div>

        {/* Brand Logo / Wordmark */}
        <motion.div variants={item} className="bw-hero__wordmark-wrap">
          <BroadwayWordmark variant="light" size="lg" />
        </motion.div>

        {/* Tagline */}
        <motion.p className="bw-hero__tag" variants={item}>
          …granting access to a smarter communal living, at the edge of Kwara State University.
        </motion.p>

        {/* Quick Action Buttons */}
        <motion.div className="bw-hero__actions" variants={item}>
          <motion.button
            className="bw-btn bw-btn--hero-primary"
            whileHover={{ scale: 1.04, y: -2 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => scrollToSection('residences')}
          >
            Explore Residences <ArrowIcon size={16} />
          </motion.button>

          <motion.button
            className="bw-btn bw-btn--hero-secondary"
            whileHover={{ scale: 1.04, y: -2 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => scrollToSection('pricing')}
          >
            View Pricing Offers
          </motion.button>
        </motion.div>

        {/* Metadata Strip */}
        <motion.div className="bw-hero__meta" variants={item}>
          <motion.span
            className="bw-hero__meta-item"
            whileHover={{ x: 4 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            <PinIcon size={17} /> KWASU Axis, Malete, Kwara State
          </motion.span>

          <motion.span
            className="bw-hero__meta-item"
            whileHover={{ x: 4 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            <DocIcon size={17} /> Studio • 2-Bed • 3-Bed Bungalows
          </motion.span>

          <motion.span
            className="bw-hero__badge bw-hero__badge--meta"
            whileHover={{ scale: 1.05 }}
          >
            <ShieldIcon size={14} /> A New Development by EVC
          </motion.span>
        </motion.div>
      </motion.div>

      {/* Floating Glass Accent Cards (Right Side Desktop) */}
      <div className="bw-hero__float-cards">
        <motion.div
          className="bw-hero__float-card"
          variants={floatCard(0.6)}
          initial="initial"
          animate="animate"
          whileHover={{ scale: 1.05, y: -5 }}
        >
          <div className="bw-hero__float-title">High Investment Yield</div>
          <div className="bw-hero__float-value">9.8% Annual ROI</div>
          <div className="bw-hero__float-sub">Driven by KWASU student & staff demand</div>
        </motion.div>

        <motion.div
          className="bw-hero__float-card"
          variants={floatCard(0.9)}
          initial="initial"
          animate="animate"
          whileHover={{ scale: 1.05, y: -5 }}
        >
          <div className="bw-hero__float-title">Title Guarantee</div>
          <div className="bw-hero__float-value">Certificate of Occupancy</div>
          <div className="bw-hero__float-sub">100% verified legal perfection</div>
        </motion.div>
      </div>

      {/* Scroll Cue Animation */}
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
