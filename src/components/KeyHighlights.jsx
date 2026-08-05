import { motion } from 'motion/react';
import { CornerAccent } from './CornerAccent.jsx';
import { GateIcon, BedIcon, DocIcon, ShieldIcon, SunIcon, RoadIcon, DropIcon } from './Icons.jsx';

const HIGHLIGHTS = [
  {
    id: 'units',
    number: '60',
    unit: 'Units',
    title: 'Total Residences',
    subtitle: '60 exclusive residential units across the entire estate',
    icon: GateIcon,
    accent: '#F57F25',
    badge: 'Limited Phase 1 Allotment',
    details: ['Master-planned layout', 'Low-density communal design', 'Gated perimeter fence'],
  },
  {
    id: 'categories',
    number: '3',
    unit: 'Typologies',
    title: 'Unit Categories',
    subtitle: 'Designed to cater to diverse investment & lifestyle needs',
    icon: BedIcon,
    accent: '#FFB882',
    badge: 'Flexible Floorplans',
    details: ['Compact Studio Apartments', '2-Bedroom Semi-Detached', '3-Bedroom Detached Bungalows'],
  },
  {
    id: 'land',
    number: '300+',
    unit: 'Sqm',
    title: 'Freehold Land Options',
    subtitle: 'Generous plot allocations for private residential building',
    icon: DocIcon,
    accent: '#26BDE2',
    badge: 'Verified C of O Title',
    details: ['Instant physical allocation', 'Dry table land terrain', 'Ready for immediate build'],
  },
  {
    id: 'living',
    number: '100%',
    unit: 'Serviced',
    title: 'Infrastructure-First Living',
    subtitle: 'Communal-run estate infrastructure built for durability',
    icon: ShieldIcon,
    accent: '#FCC30B',
    badge: '24/7 Managed Estate',
    details: ['Paved internal roads', 'Dedicated solar lighting', 'Treated water supply'],
  },
];

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 32, scale: 0.96 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.65, ease: [0.16, 1, 0.3, 1] },
  },
};

export function KeyHighlights() {
  return (
    <section className="bw-section bw-section--dark bw-highlights-section" style={{ position: 'relative' }}>
      <CornerAccent />
      
      <motion.div
        style={{ maxWidth: 680, marginBottom: 48 }}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      >
        <span className="bw-kicker bw-kicker--dark">Key Highlights</span>
        <h2 className="bw-h-section bw-h-section--dark">The estate, at a glance</h2>
        <p className="bw-lede" style={{ color: 'rgba(255,246,238,.72)', marginTop: 14 }}>
          Core metrics, land specifications, and infrastructure commitments defining Broadway Residentials.
        </p>
      </motion.div>

      <motion.div
        className="bw-highlights-grid"
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: '-80px' }}
      >
        {HIGHLIGHTS.map((item) => {
          const IconComponent = item.icon;
          return (
            <motion.div
              key={item.id}
              className="bw-highlight-card"
              variants={cardVariants}
              whileHover={{ y: -6, transition: { duration: 0.25 } }}
            >
              {/* Card Top Pill Badge */}
              <div className="bw-highlight-card__header">
                <div
                  className="bw-highlight-card__icon"
                  style={{ background: `${item.accent}1A`, color: item.accent }}
                >
                  <IconComponent size={22} />
                </div>
                <span className="bw-highlight-card__badge" style={{ borderColor: `${item.accent}40`, color: item.accent }}>
                  {item.badge}
                </span>
              </div>

              {/* Big Metric Display */}
              <div className="bw-highlight-card__metric">
                <span className="bw-highlight-card__number">{item.number}</span>
                <span className="bw-highlight-card__unit">{item.unit}</span>
              </div>

              {/* Title & Subtitle */}
              <h3 className="bw-highlight-card__title">{item.title}</h3>
              <p className="bw-highlight-card__sub">{item.subtitle}</p>

              {/* Bullet Details */}
              <ul className="bw-highlight-card__list">
                {item.details.map((detail, idx) => (
                  <li key={idx}>
                    <span className="dot" style={{ background: item.accent }} />
                    {detail}
                  </li>
                ))}
              </ul>
            </motion.div>
          );
        })}
      </motion.div>

      {/* Bottom Summary Bar */}
      <motion.div
        className="bw-highlights-summary"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <div className="bw-highlights-summary__item">
          <SunIcon size={18} color="#F57F25" />
          <span>Solar Streetlights</span>
        </div>
        <div className="bw-highlights-summary__divider" />
        <div className="bw-highlights-summary__item">
          <RoadIcon size={18} color="#F57F25" />
          <span>Paved Access Roads</span>
        </div>
        <div className="bw-highlights-summary__divider" />
        <div className="bw-highlights-summary__item">
          <DropIcon size={18} color="#F57F25" />
          <span>Centralized Water Network</span>
        </div>
        <div className="bw-highlights-summary__divider" />
        <div className="bw-highlights-summary__item">
          <ShieldIcon size={18} color="#F57F25" />
          <span>Gated Security Outpost</span>
        </div>
      </motion.div>
    </section>
  );
}

export default KeyHighlights;
