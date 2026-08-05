import { motion } from 'motion/react';
import { PinIcon, BuildingIcon, GateIcon, ArrowIcon } from './Icons.jsx';
import { CornerAccent } from './CornerAccent.jsx';

const CENTER = { x: 280, y: 220 };

const LANDMARKS = [
  {
    id: 'kwasu',
    title: 'KWASU Main Campus',
    sub: 'Kwara State University',
    dist: '1.2 km • 3 Mins',
    x: 460,
    y: 110,
    badgeAlign: 'right',
    delay: 0.8,
    color: '#F57F25',
  },
  {
    id: 'malete',
    title: 'Malete Township',
    sub: 'Commercial & Town Center',
    dist: '2.4 km • 5 Mins',
    x: 100,
    y: 330,
    badgeAlign: 'left',
    delay: 1.0,
    color: '#FFB882',
  },
  {
    id: 'hospital',
    title: 'Health & Commercial Hub',
    sub: 'KWASU Axis Corridor',
    dist: '3.1 km • 7 Mins',
    x: 430,
    y: 350,
    badgeAlign: 'right',
    delay: 1.2,
    color: '#26BDE2',
  },
];

const PROXIMITY_CARDS = [
  {
    icon: GateIcon,
    time: '3 Mins',
    label: 'KWASU Campus Gate',
    detail: 'Direct access along the paved university highway',
    accent: '#F57F25',
  },
  {
    icon: BuildingIcon,
    time: '5 Mins',
    label: 'Malete Town Center',
    detail: 'Banking, retail markets, and student commerce hub',
    accent: '#FFB882',
  },
  {
    icon: PinIcon,
    time: 'Direct',
    label: 'KWASU Main Highway',
    detail: 'Prime roadside positioning with 100% dry table land',
    accent: '#26BDE2',
  },
];

const ringVariant = (delay) => ({
  hidden: { pathLength: 0, opacity: 0 },
  show: { pathLength: 1, opacity: 0.8, transition: { duration: 1.2, delay, ease: 'easeInOut' } },
});

export function LocationOrbit() {
  return (
    <section className="bw-section bw-section--dark bw-orbit-section" id="location" style={{ position: 'relative' }}>
      <CornerAccent />

      {/* Section Header */}
      <motion.div
        style={{ maxWidth: 680, marginBottom: 40 }}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      >
        <span className="bw-kicker bw-kicker--dark">Strategic Location</span>
        <h2 className="bw-h-section bw-h-section--dark bw-orbit__headline">
          Positioned on the KWASU axis
        </h2>
        <p className="bw-lede" style={{ color: 'rgba(255,246,238,.75)', marginTop: 14 }}>
          Prime roadside access connecting Kwara State University directly to Malete township.
        </p>
      </motion.div>

      {/* Interactive Radar Console Container */}
      <motion.div
        className="bw-radar-console"
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-40px' }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      >
        {/* HUD Top Status Bar */}
        <div className="bw-radar-hud">
          <div className="bw-radar-hud__left">
            <span className="bw-radar-hud__pulse" />
            <span className="bw-radar-hud__title">MALETE AXIS PROXIMITY SCAN</span>
          </div>
          <div className="bw-radar-hud__coords">8.7117° N, 4.4539° E • KWASU CORRIDOR</div>
        </div>

        {/* SVG Radar Graphic */}
        <div className="bw-radar-stage">
          <svg
            className="bw-radar-svg"
            viewBox="0 0 560 440"
            aria-hidden="true"
          >
            <defs>
              {/* Radar Sweep Gradient */}
              <linearGradient id="bw-radar-sweep-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#F57F25" stopOpacity="0" />
                <stop offset="70%" stopColor="#F57F25" stopOpacity="0.25" />
                <stop offset="100%" stopColor="#F57F25" stopOpacity="0.75" />
              </linearGradient>

              {/* Center Glow Radial Gradient */}
              <radialGradient id="bw-center-glow" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#F57F25" stopOpacity="0.9" />
                <stop offset="40%" stopColor="#F57F25" stopOpacity="0.4" />
                <stop offset="100%" stopColor="#F57F25" stopOpacity="0" />
              </radialGradient>
            </defs>

            {/* Grid Crosshairs (N-S, E-W) */}
            <line x1={CENTER.x} y1="20" x2={CENTER.x} y2="420" stroke="rgba(255,246,238,0.12)" strokeWidth="1" strokeDasharray="3 4" />
            <line x1="20" y1={CENTER.y} x2="540" y2={CENTER.y} stroke="rgba(255,246,238,0.12)" strokeWidth="1" strokeDasharray="3 4" />

            {/* Compass Directions */}
            <text x={CENTER.x} y="35" textAnchor="middle" fill="rgba(255,246,238,0.4)" fontSize="10" fontWeight="700" letterSpacing="0.1em">NORTH (KWASU CAMPUS)</text>
            <text x={CENTER.x} y="432" textAnchor="middle" fill="rgba(255,246,238,0.4)" fontSize="10" fontWeight="700" letterSpacing="0.1em">SOUTH (ILORIN HIGHWAY)</text>

            {/* Concentric Radar Rings */}
            <motion.circle cx={CENTER.x} cy={CENTER.y} r="200" fill="none" stroke="rgba(255,246,238,0.15)" strokeWidth="1" strokeDasharray="4 6" variants={ringVariant(0.1)} />
            <motion.circle cx={CENTER.x} cy={CENTER.y} r="145" fill="none" stroke="rgba(245,127,37,0.3)" strokeWidth="1.2" strokeDasharray="4 6" variants={ringVariant(0.25)} />
            <motion.circle cx={CENTER.x} cy={CENTER.y} r="90" fill="none" stroke="rgba(255,246,238,0.2)" strokeWidth="1" strokeDasharray="2 4" variants={ringVariant(0.4)} />

            {/* Ring Distance Tags */}
            <text x={CENTER.x + 95} y={CENTER.y - 6} fill="rgba(255,246,238,0.35)" fontSize="9" fontWeight="600">500m</text>
            <text x={CENTER.x + 150} y={CENTER.y - 6} fill="rgba(245,127,37,0.7)" fontSize="9" fontWeight="700">1.5km</text>
            <text x={CENTER.x + 205} y={CENTER.y - 6} fill="rgba(255,246,238,0.35)" fontSize="9" fontWeight="600">3.0km</text>

            {/* Rotating Radar Scanner Beam */}
            <g style={{ transformOrigin: `${CENTER.x}px ${CENTER.y}px`, animation: 'bw-radar-spin 8s linear infinite' }}>
              <path
                d={`M ${CENTER.x} ${CENTER.y} L ${CENTER.x + 200} ${CENTER.y} A 200 200 0 0 1 ${CENTER.x + 200 * Math.cos(0.75)} ${CENTER.y + 200 * Math.sin(0.75)} Z`}
                fill="url(#bw-radar-sweep-gradient)"
              />
              <line x1={CENTER.x} y1={CENTER.y} x2={CENTER.x + 200 * Math.cos(0.75)} y2={CENTER.y + 200 * Math.sin(0.75)} stroke="#F57F25" strokeWidth="2" opacity="0.9" />
            </g>

            {/* Center Landmark — Broadway Residentials (Estate) */}
            {/* Center Pulsing Ripple Waves */}
            <circle cx={CENTER.x} cy={CENTER.y} r="45" fill="url(#bw-center-glow)" />
            <circle cx={CENTER.x} cy={CENTER.y} r="22" fill="#F57F25" opacity="0.25" className="bw-radar-ping" />
            <circle cx={CENTER.x} cy={CENTER.y} r="14" fill="#F57F25" />
            <circle cx={CENTER.x} cy={CENTER.y} r="6" fill="#FFFFFF" />

            {/* Center Badge Tag */}
            <g transform={`translate(${CENTER.x - 90}, ${CENTER.y - 48})`}>
              <rect x="0" y="0" width="180" height="28" rx="14" fill="#F57F25" />
              <text x="90" y="18" textAnchor="middle" fill="#FFFFFF" fontSize="11" fontWeight="800" letterSpacing="0.06em">
                ★ BROADWAY ESTATE
              </text>
            </g>

            {/* Landmark Destination Nodes & Flight Paths */}
            {LANDMARKS.map((lm) => {
              const isRight = lm.badgeAlign === 'right';
              const rectX = isRight ? lm.x + 14 : lm.x - 174;
              const rectY = lm.y - 18;

              return (
                <g key={lm.id}>
                  {/* Connecting Flight Path Line */}
                  <line
                    x1={CENTER.x}
                    y1={CENTER.y}
                    x2={lm.x}
                    y2={lm.y}
                    stroke={lm.color}
                    strokeWidth="1.5"
                    strokeDasharray="4 4"
                    opacity="0.6"
                  />

                  {/* Pulsing Beacon Circle */}
                  <circle cx={lm.x} cy={lm.y} r="12" fill={lm.color} opacity="0.2" className="bw-radar-ping" />
                  <circle cx={lm.x} cy={lm.y} r="7" fill={lm.color} />
                  <circle cx={lm.x} cy={lm.y} r="3" fill="#FFFFFF" />

                  {/* High Contrast Node Pill Badge */}
                  <g transform={`translate(${rectX}, ${rectY})`}>
                    <rect
                      x="0"
                      y="0"
                      width="160"
                      height="38"
                      rx="8"
                      fill="rgba(20, 25, 38, 0.92)"
                      stroke={lm.color}
                      strokeWidth="1.2"
                    />
                    <text x="12" y="16" fill="#FFFFFF" fontSize="11" fontWeight="700">
                      {lm.title}
                    </text>
                    <text x="12" y="30" fill={lm.color} fontSize="10" fontWeight="800">
                      {lm.dist}
                    </text>
                  </g>
                </g>
              );
            })}
          </svg>
        </div>

        {/* HUD Bottom Legend Bar */}
        <div className="bw-radar-hud-bottom">
          <div className="bw-radar-hud-tag">
            <span className="dot" style={{ background: '#F57F25' }} />
            <span>Broadway Residentials (Hub)</span>
          </div>
          <div className="bw-radar-hud-tag">
            <span className="dot" style={{ background: '#FFB882' }} />
            <span>KWASU Main Campus (1.2km)</span>
          </div>
          <div className="bw-radar-hud-tag">
            <span className="dot" style={{ background: '#26BDE2' }} />
            <span>Malete Town Center (2.4km)</span>
          </div>
        </div>
      </motion.div>

      {/* Proximity Details Cards below Radar */}
      <div className="bw-proximity-grid">
        {PROXIMITY_CARDS.map((card, i) => {
          const IconComp = card.icon;
          return (
            <motion.div
              key={card.label}
              className="bw-proximity-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              whileHover={{ y: -4 }}
            >
              <div className="bw-proximity-card__icon" style={{ background: `${card.accent}1F`, color: card.accent }}>
                <IconComp size={20} />
              </div>
              <div className="bw-proximity-card__time" style={{ color: card.accent }}>
                {card.time}
              </div>
              <h3 className="bw-proximity-card__label">{card.label}</h3>
              <p className="bw-proximity-card__detail">{card.detail}</p>
            </motion.div>
          );
        })}
      </div>

      {/* Narrative Copy */}
      <motion.div
        className="bw-orbit-copy-row"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-40px' }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <p className="bw-body" style={{ color: 'rgba(255,246,238,0.85)' }}>
          <strong>Broadway Residentials</strong> sits directly on the Kwara State University axis in Malete — close enough to campus life for guaranteed 100% student and staff tenant demand, yet positioned inside a quiet, planned communal layout.
        </p>
        <div className="bw-orbit-location-badge">
          <PinIcon size={18} style={{ color: '#F57F25' }} />
          <span>Kwara State University Axis, Malete, Kwara State</span>
        </div>
      </motion.div>
    </section>
  );
}

export default LocationOrbit;
