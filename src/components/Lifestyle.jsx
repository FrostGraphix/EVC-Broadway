import { Reveal } from './Reveal.jsx';
import { bungalow2bed, bungalow3bed, studioRow } from '../assets/photos.js';

const FRAMES = [bungalow2bed[1], bungalow3bed[0], studioRow[1]];

/**
 * Duotone triptych with a centered tagline — the Dome1 reference's
 * "AT DOME 1, EVERYDAY MOMENTS FEEL INTENTIONAL" page, recast for
 * Broadway using the estate photography we actually have.
 */
export function Lifestyle() {
  return (
    <Reveal as="div" className="bw-lifestyle">
      {FRAMES.map((src, i) => (
        <div className="bw-lifestyle__frame" key={src.slice(-24)}>
          <img src={src} alt="Broadway Residentials, estate photography" />
          {i === 1 && (
            <div className="bw-lifestyle__caption">
              <span className="lead">At Broadway Residentials,</span>
              <span className="sub">community living</span>
              <span className="sub">feels intentional.</span>
            </div>
          )}
        </div>
      ))}
    </Reveal>
  );
}

export default Lifestyle;
