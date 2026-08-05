import { motion } from 'motion/react';
import { CornerAccent } from './CornerAccent.jsx';
import { FenceIcon, SunIcon, GateIcon, DropIcon, RoadIcon } from './Icons.jsx';

const ITEMS = [
  { icon: FenceIcon, title: 'Perimeter Fencing' },
  { icon: SunIcon, title: 'Solar-Powered Estate Energy' },
  { icon: GateIcon, title: 'Gate House & Boom Gates' },
  { icon: DropIcon, title: 'Central Estate Borehole' },
  { icon: RoadIcon, title: 'Accessible Road Network' },
];

export function Infrastructure() {
  return (
    <section className="bw-section bw-section--dark bw-infra" id="infrastructure" style={{ position: 'relative' }}>
      <CornerAccent />
      <div className="bw-infra__glow bw-infra__glow--1" aria-hidden="true" />
      <div className="bw-infra__glow bw-infra__glow--2" aria-hidden="true" />
      <motion.div
        style={{ maxWidth: 640, position: 'relative', zIndex: 2 }}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.6 }}
      >
        <span className="bw-kicker bw-kicker--dark">Estate Infrastructure</span>
        <h2 className="bw-h-section bw-h-section--dark">Built for everyday reliability</h2>
        <p className="bw-lede" style={{ color: 'rgba(255,246,238,.72)', marginTop: 16 }}>
          Five commitments that keep the estate running, long after handover.
        </p>
      </motion.div>
      <div className="bw-infra-grid" style={{ position: 'relative', zIndex: 2 }}>
        {ITEMS.map((item, i) => (
          <motion.div
            className="bw-infra-item"
            key={item.title}
            initial={{ opacity: 0, y: 24, scale: 0.94 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.5, delay: i * 0.08, ease: [0.2, 0.7, 0.2, 1] }}
            whileHover={{ y: -4 }}
          >
            <span className="num">{String(i + 1).padStart(2, '0')}</span>
            <span className="bw-infra-icon">
              <item.icon />
            </span>
            <h3>{item.title}</h3>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Infrastructure;
