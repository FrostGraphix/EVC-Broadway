import { motion } from 'motion/react';
import { ShieldIcon, WifiIcon, DropIcon, BusIcon, CheckIcon } from './Icons.jsx';
import { perksImage } from '../assets/photos.js';

const PERKS = [
  {
    icon: ShieldIcon,
    title: 'Smarter Communal Living',
    body: 'Everyone desires an environment where everything simply works. This is that place — a gated, managed estate built for modern living.',
    check: 'Gated security, 24/7',
  },
  {
    icon: WifiIcon,
    title: 'Internet in Every Home',
    body: 'A major community pain point, solved — high-speed connectivity comes standard, not as an upgrade. Stay connected from day one.',
    check: 'Fibre-ready infrastructure',
  },
  {
    icon: DropIcon,
    title: 'Potable Water Supply',
    body: 'Hygienic water delivered through a central estate borehole, always on tap. No water scarcity, no jerry cans, no stress.',
    check: 'Central borehole + treatment',
  },
  {
    icon: BusIcon,
    title: 'Bus Shuttle Partnerships',
    body: 'Easing the daily commute in and out of the estate, to campus and beyond. An amenity no other estate in Malete offers.',
    check: 'To KWASU & Ilorin city',
  },
];

const containerV = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

const perkV = {
  hidden: { opacity: 0, x: -18 },
  show: { opacity: 1, x: 0, transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] } },
};

export function Perks() {
  return (
    <section className="bw-section bw-perks-section">
      <div className="bw-perks-wrap">
        {/* Photo */}
        <motion.figure
          className="bw-perks-photo"
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <img src={perksImage} alt="Broadway Residentials — estate exterior view" />
          {/* Overlay badge */}
          <div className="bw-perks-photo__badge">
            <span className="bw-perks-photo__badge-dot" />
            Managed Estate Living
          </div>
        </motion.figure>

        {/* Right: Content */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6 }}
          >
            <span className="bw-kicker">The Perks of Living Here</span>
            <h2 className="bw-h-section">
              Whether landlord
              <br />
              or tenant, everyone gains
            </h2>
            <p className="bw-lede" style={{ marginTop: 16, marginBottom: 0 }}>
              Broadway Residentials is more than a place to sleep — it's a curated lifestyle environment.
            </p>
          </motion.div>

          <motion.div
            className="bw-perk-list"
            variants={containerV}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-60px' }}
          >
            {PERKS.map((perk) => (
              <motion.div className="bw-perk" key={perk.title} variants={perkV}>
                <span className="bw-perk-icon">
                  <perk.icon size={20} />
                </span>
                <div>
                  <h3>{perk.title}</h3>
                  <p>{perk.body}</p>
                  <span className="bw-perk-check">
                    <CheckIcon size={13} />
                    {perk.check}
                  </span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Perks;
