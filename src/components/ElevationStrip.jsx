import { bungalow2bed, studioRow } from '../assets/photos.js';
import logoWhite from '../assets/logo/broadway-logo-white.png';

const PLATES = [
  { src: bungalow2bed[2], label: '2 Bedroom Bungalow', sub: 'Front Elevation', index: '01' },
  { src: studioRow[0], label: 'Room & Parlour Studio', sub: 'Street Elevation', index: '02' },
  { src: studioRow[2], label: 'Room & Parlour Studio', sub: 'Approach View', index: '03' },
];

export function ElevationStrip() {
  return (
    <>
      {PLATES.map((plate) => (
        <div className="bw-elevation" key={plate.index}>
          <img src={plate.src} alt={`${plate.label} — ${plate.sub}`} />
          <div className="bw-elevation__scrim" />
          <span className="bw-elevation__badge">
            <img src={logoWhite} alt="" aria-hidden="true" />
            Development by EVC
          </span>
          <span className="bw-elevation__label">{plate.label}</span>
          <span className="bw-elevation__index">
            {plate.sub} · {plate.index}
          </span>
        </div>
      ))}
    </>
  );
}

export default ElevationStrip;
