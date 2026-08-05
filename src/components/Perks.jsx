import { Reveal } from './Reveal.jsx';
import { ShieldIcon, WifiIcon, DropIcon, BusIcon } from './Icons.jsx';
import { perksImage } from '../assets/photos.js';

const PERKS = [
  { icon: ShieldIcon, title: 'Smarter Communal Living', body: 'Everyone desires an environment where everything simply works. This is that place.' },
  { icon: WifiIcon, title: 'Internet in Every Home', body: 'A major community pain point, solved — connectivity comes standard, not as an upgrade.' },
  { icon: DropIcon, title: 'Potable Water Supply', body: 'Hygienic water delivered through a central estate borehole, always on tap.' },
  { icon: BusIcon, title: 'Bus Shuttle Partnerships', body: 'Easing the daily commute in and out of the estate, to campus and beyond.' },
];

export function Perks() {
  return (
    <section className="bw-section">
      <div className="bw-perks-wrap">
        <Reveal as="figure" className="bw-perks-photo">
          <img src={perksImage} alt="Broadway Residentials bungalow, side angle exterior view" />
        </Reveal>
        <Reveal>
          <span className="bw-kicker">The Perks of Living Here</span>
          <h2 className="bw-h-section">
            Whether landlord
            <br />
            or tenant, everyone gains
          </h2>
          <div className="bw-perk-list">
            {PERKS.map((perk) => (
              <div className="bw-perk" key={perk.title}>
                <span className="bw-perk-icon">
                  <perk.icon />
                </span>
                <div>
                  <h3>{perk.title}</h3>
                  <p>{perk.body}</p>
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export default Perks;
