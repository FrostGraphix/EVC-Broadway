import { Reveal } from './Reveal.jsx';
import { BroadwayWordmark } from './Logo.jsx';
import { CornerAccent } from './CornerAccent.jsx';
import { GlobeIcon, PinIcon } from './Icons.jsx';

export function Closing() {
  return (
    <section className="bw-closing">
      <CornerAccent />
      <Reveal className="bw-closing__inner">
        <BroadwayWordmark variant="light" size="md" />
        <p style={{ color: 'rgba(255,246,238,.68)', fontSize: 15, maxWidth: '40ch', margin: 0 }}>
          …granting access to a smarter communal living.
        </p>
        <div className="bw-closing__contact">
          <div>
            <GlobeIcon size={16} />
            www.evcng.com
          </div>
          <div>
            <PinIcon size={16} />
            Malete, Kwara State
          </div>
        </div>
        <p className="payline">
          A New Development by EVC (Experience Vision Creations) · Creating Homes, Envisioning
          Prosperity
        </p>
      </Reveal>
    </section>
  );
}

export default Closing;
