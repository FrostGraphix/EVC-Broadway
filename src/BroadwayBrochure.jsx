import { useState } from 'react';
import { MotionConfig } from 'motion/react';
import './brochure.css';
import { Hero } from './components/Hero.jsx';
import { Orbit360 } from './components/Orbit360.jsx';
import { GateIntro } from './components/GateIntro.jsx';
import { KeyHighlights } from './components/KeyHighlights.jsx';
import { Essence } from './components/Essence.jsx';
import { LocationOrbit } from './components/LocationOrbit.jsx';
import { Lifestyle } from './components/Lifestyle.jsx';
import { Infrastructure } from './components/Infrastructure.jsx';
import { Residences } from './components/Residences.jsx';
import { ElevationStrip } from './components/ElevationStrip.jsx';
import { Interiors } from './components/Interiors.jsx';
import { Pricing } from './components/Pricing.jsx';
import { Perks } from './components/Perks.jsx';
import { Responsible } from './components/Responsible.jsx';
import { FAQ } from './components/FAQ.jsx';
import { CTA } from './components/CTA.jsx';
import { PriceCapsules } from './components/PriceCapsules.jsx';
import { Closing } from './components/Closing.jsx';
import { RunningFooter } from './components/RunningFooter.jsx';

/**
 * Broadway Residentials — digital brochure.
 * A New Development by EVC. Drop into any React app; styles come from
 * ./brochure.css, palette + type scale from ./tokens.js.
 *
 * Structure follows the Dome1 reference brochure's visual language
 * (full-bleed dark cover, key-highlights rate card, orbit location
 * diagram, duotone lifestyle triptych, labeled elevation plates, interior
 * gallery, capsule pricing) recoloured into the EVC brand palette.
 */
export function BroadwayBrochure() {
  const [introDone, setIntroDone] = useState(false);

  return (
    <MotionConfig reducedMotion="user">
    <div className="bw-root">
      {!introDone && <GateIntro onDone={() => setIntroDone(true)} />}
      <main className="bw-brochure">
        <Hero />

        <section className="bw-section bw-section--dark bw-orbit-section">
          <div style={{ maxWidth: 640, marginBottom: 32 }}>
            <span className="bw-kicker bw-kicker--dark">See It For Yourself</span>
            <h2 className="bw-h-section bw-h-section--dark" style={{ fontSize: 28 }}>
              Explore the 2 Bedroom Bungalow
            </h2>
          </div>
          <Orbit360 />
        </section>
        <RunningFooter label="Broadway Residentials — Malete" page="01" dark />

        <KeyHighlights />
        <RunningFooter label="Key Highlights" page="02" dark />

        <Essence />
        <RunningFooter label="Overview" page="03" dark />

        <LocationOrbit />
        <RunningFooter label="Strategic Location" page="04" />

        <Lifestyle />
        <RunningFooter label="Life at Broadway" page="05" dark />

        <Infrastructure />
        <RunningFooter label="Estate Infrastructure" page="06" dark />

        <Residences />
        <RunningFooter label="The Residences" page="07" />

        <ElevationStrip />
        <RunningFooter label="Elevation Plates" page="08" dark />

        <Interiors />
        <RunningFooter label="The Finish" page="09" dark />

        <Pricing />
        <RunningFooter label="Glorious Price Offers" page="10" dark />

        <Perks />
        <RunningFooter label="The Perks of Living Here" page="11" />

        <Responsible />
        <RunningFooter label="Built Responsibly" page="12" />

        <FAQ />
        <RunningFooter label="Frequently Asked" page="13" />

        <CTA />
        <RunningFooter label="More Lands to Own" page="14" />

        <PriceCapsules />
        <RunningFooter label="Pricing" page="15" dark />

        <Closing />
      </main>
    </div>
    </MotionConfig>
  );
}

export default BroadwayBrochure;
