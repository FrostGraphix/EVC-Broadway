import { motion } from 'motion/react';
import { PinIcon } from './Icons.jsx';

const CENTER = { x: 250, y: 230 };

const LANDMARKS = [
  { id: 'kwasu', lines: ['Kwara State University', '(KWASU)'], x: 430, y: 120, side: 'above', delay: 0.9 },
  { id: 'malete', lines: ['Malete Township'], x: 100, y: 330, side: 'below', delay: 1.15 },
];

const ringVariant = (delay) => ({
  hidden: { pathLength: 0, opacity: 0 },
  show: { pathLength: 1, opacity: 1, transition: { duration: 1.1, delay, ease: 'easeInOut' } },
});

// heading (deg) so a north-pointing glyph aims from the center toward (x, y)
const headingTo = (x, y) => (Math.atan2(y - CENTER.y, x - CENTER.x) * 180) / Math.PI + 90;

export function LocationOrbit() {
  return (
    <section className="bw-section" id="location">
      <motion.div
        style={{ maxWidth: 640, marginBottom: 8 }}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.6 }}
      >
        <span className="bw-kicker">Strategic Location</span>
        <h2 className="bw-h-section bw-orbit__headline">Positioned on the KWASU axis</h2>
      </motion.div>
      <div className="bw-orbit-wrap">
        <motion.svg
          className="bw-orbit-svg"
          viewBox="0 0 600 460"
          aria-hidden="true"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-40px' }}
        >
          <defs>
            <linearGradient id="bw-radar-sweep" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="var(--orange)" stopOpacity="0" />
              <stop offset="100%" stopColor="var(--orange)" stopOpacity=".55" />
            </linearGradient>
          </defs>

          <motion.circle cx={CENTER.x} cy={CENTER.y} r="205" fill="none" stroke="var(--hair)" strokeDasharray="2 6" variants={ringVariant(0.1)} />
          <motion.circle cx={CENTER.x} cy={CENTER.y} r="160" fill="none" stroke="var(--hair)" strokeDasharray="2 6" variants={ringVariant(0.25)} />
          <motion.circle cx={CENTER.x} cy={CENTER.y} r="115" fill="none" stroke="var(--hair)" strokeDasharray="2 6" variants={ringVariant(0.4)} />

          {/* radar sweep — slow continuous rotation reinforcing "location scan" */}
          <motion.g
            style={{ transformOrigin: `${CENTER.x}px ${CENTER.y}px` }}
            initial={{ rotate: 0, opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            animate={{ rotate: 360 }}
            transition={{ opacity: { duration: 0.6, delay: 1.6 }, rotate: { duration: 10, repeat: Infinity, ease: 'linear' } }}
          >
            <path
              d={`M ${CENTER.x} ${CENTER.y} L ${CENTER.x + 205} ${CENTER.y} A 205 205 0 0 1 ${CENTER.x + 205 * Math.cos(0.62)} ${CENTER.y + 205 * Math.sin(0.62)} Z`}
              fill="url(#bw-radar-sweep)"
              opacity="0.5"
            />
          </motion.g>

          <motion.circle
            cx={CENTER.x} cy={CENTER.y} r="34" fill="var(--peach)" opacity="0.5"
            initial={{ scale: 0 }} whileInView={{ scale: [0, 1.3, 1] }}
            viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.5, ease: 'easeOut' }}
            style={{ transformOrigin: `${CENTER.x}px ${CENTER.y}px` }}
          />
          <motion.circle
            cx={CENTER.x} cy={CENTER.y} r="18" fill="var(--orange)"
            initial={{ scale: 0 }} whileInView={{ scale: 1 }}
            viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.6, ease: 'easeOut' }}
            style={{ transformOrigin: `${CENTER.x}px ${CENTER.y}px` }}
          />
          <motion.circle
            cx={CENTER.x} cy={CENTER.y} r="18" fill="none" stroke="var(--orange)" strokeWidth="1.5"
            initial={{ scale: 1, opacity: 0.6 }}
            whileInView={{ scale: [1, 2.2], opacity: [0.6, 0] }}
            viewport={{ once: true }}
            transition={{ duration: 2, delay: 1.3, repeat: Infinity, repeatDelay: 0.6, ease: 'easeOut' }}
            style={{ transformOrigin: `${CENTER.x}px ${CENTER.y}px` }}
          />

          {LANDMARKS.map((l) => (
            <g key={l.id}>
              <motion.line
                x1={CENTER.x} y1={CENTER.y} x2={l.x} y2={l.y} stroke="var(--hair)" strokeWidth="1"
                variants={ringVariant(l.delay)}
              />

              {/* plane effect — a small marker travels the connecting line on
                  a loop, underscoring how close each landmark really is */}
              <motion.g
                initial={{ x: CENTER.x, y: CENTER.y, opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                animate={{ x: [CENTER.x, l.x], y: [CENTER.y, l.y], opacity: [0, 1, 1, 0] }}
                transition={{
                  opacity: { duration: 2.1, delay: l.delay + 1.5, repeat: Infinity, repeatDelay: 1.3, times: [0, 0.15, 0.8, 1], ease: 'easeInOut' },
                  x: { duration: 2.1, delay: l.delay + 1.5, repeat: Infinity, repeatDelay: 1.3, ease: 'easeInOut' },
                  y: { duration: 2.1, delay: l.delay + 1.5, repeat: Infinity, repeatDelay: 1.3, ease: 'easeInOut' },
                }}
              >
                <path
                  d="M0 -6 L4.5 5 L0 2.2 L-4.5 5 Z"
                  fill="var(--orange)"
                  transform={`rotate(${headingTo(l.x, l.y)})`}
                />
              </motion.g>

              <motion.circle
                cx={l.x} cy={l.y} r="6" fill="var(--navy)"
                initial={{ scale: 0 }} whileInView={{ scale: 1 }}
                viewport={{ once: true }} transition={{ duration: 0.4, delay: l.delay + 0.3 }}
                whileHover={{ scale: 1.3 }}
                style={{ transformOrigin: `${l.x}px ${l.y}px` }}
              />

              <motion.text
                textAnchor="middle"
                fontSize="15"
                fontWeight="600"
                fill="var(--navy)"
                initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
                viewport={{ once: true }} transition={{ duration: 0.5, delay: l.delay + 0.4 }}
              >
                {l.lines.map((line, i) => (
                  <tspan
                    key={line}
                    x={l.x}
                    y={l.side === 'above' ? l.y - 34 + i * 19 : l.y + 30 + i * 19}
                  >
                    {line}
                  </tspan>
                ))}
              </motion.text>
            </g>
          ))}
        </motion.svg>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, delay: 0.15 }}
        >
          <p className="bw-body">
            <strong>Broadway Residentials</strong> sits directly on the Kwara State University
            axis in Malete — close enough to campus life for steady tenant demand, far enough
            for a quiet, planned community of its own.
          </p>
          <p className="bw-body">
            This location is built to deliver income, stability, and capital appreciation as
            Malete continues to grow around it.
          </p>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginTop: 20, fontWeight: 600, fontSize: 14, color: 'var(--navy)' }}>
            <PinIcon size={18} style={{ color: 'var(--orange-deep)' }} />
            Kwara State University Axis, Malete, Kwara State
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default LocationOrbit;
