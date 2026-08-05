import { motion } from 'motion/react';
import { interiors } from '../assets/interiors.js';
import { CornerAccent } from './CornerAccent.jsx';

export function Interiors() {
  return (
    <section className="bw-section bw-section--dark bw-interiors" id="interiors">
      <CornerAccent />
      <motion.div
        style={{ maxWidth: 640 }}
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.6, ease: [0.2, 0.7, 0.2, 1] }}
      >
        <span className="bw-kicker bw-kicker--dark">The Finish</span>
        <h2 className="bw-h-section bw-h-section--dark">The standard we build toward</h2>
        <p className="bw-lede" style={{ color: 'rgba(255,246,238,.72)', marginTop: 16 }}>
          Style references for the finish level going into every Broadway home — not photographs
          of a specific unit.
        </p>
      </motion.div>

      <div className="bw-interiors__grid">
        {interiors.map((room, i) => (
          <motion.figure
            key={room.src}
            className={`bw-interiors__tile ${room.tall ? 'is-tall' : ''}`}
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.55, delay: (i % 5) * 0.06, ease: [0.2, 0.7, 0.2, 1] }}
          >
            <img src={room.src} alt={`${room.room} — style reference interior`} loading="lazy" />
            <figcaption>
              <span className="room">{room.room}</span>
              <span className="tag">{room.tagline}</span>
            </figcaption>
          </motion.figure>
        ))}
      </div>

      <p className="bw-interiors__note">
        Interior photography above is style reference only — used to communicate finish quality,
        not a depiction of an actual Broadway Residentials unit.
      </p>
    </section>
  );
}

export default Interiors;
