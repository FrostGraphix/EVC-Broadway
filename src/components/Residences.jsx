import { useEffect, useState } from 'react';
import { Reveal } from './Reveal.jsx';
import { BedIcon, BathIcon, KitchenIcon } from './Icons.jsx';
import { bungalow2bed, bungalow3bed, studioRow } from '../assets/photos.js';

const TYPOLOGIES = [
  {
    id: '2bed',
    tag: '15 units available',
    count: 'Standalone Building',
    name: '2 Bedroom Bungalow',
    blurb:
      'A private, standalone building comprising a living room, two bedrooms, a three-piece bathroom and a fitted kitchen.',
    specs: [
      { icon: BedIcon, label: '2 Bedrooms' },
      { icon: BathIcon, label: '3-Piece Bath' },
      { icon: KitchenIcon, label: 'Fitted Kitchen' },
    ],
    price: '₦40,000,000',
    priceNote: 'Initial deposit of ₦4,000,000',
    images: bungalow2bed,
  },
  {
    id: '3bed',
    tag: '15 units available',
    count: 'Standalone Building',
    name: '3 Bedroom Bungalow',
    blurb:
      "The estate's largest footprint — a standalone building comprising a living room, three bedrooms, a three-piece bathroom and a fitted kitchen.",
    specs: [
      { icon: BedIcon, label: '3 Bedrooms' },
      { icon: BathIcon, label: '3-Piece Bath' },
      { icon: KitchenIcon, label: 'Fitted Kitchen' },
    ],
    price: 'Price on request',
    priceNote: '',
    images: bungalow3bed,
  },
  {
    id: 'studio',
    tag: '30 units available',
    count: '2 units per building',
    name: 'Room & Parlour Studio',
    blurb:
      "The estate's entry point — a living room, one bedroom, a three-piece bathroom and kitchen. Two studio units share each building.",
    specs: [
      { icon: BedIcon, label: '1 Bedroom' },
      { icon: BathIcon, label: '3-Piece Bath' },
      { icon: KitchenIcon, label: 'Kitchen' },
    ],
    price: '₦22,000,000',
    priceNote: 'Initial deposit of ₦3,000,000',
    images: studioRow,
  },
];

function TypologyCard({ typology, reversed }) {
  const [imgIndex, setImgIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setImgIndex((i) => (i + 1) % typology.images.length);
    }, 4500);
    return () => clearInterval(id);
  }, [typology.images.length]);

  return (
    <div className="bw-typology" style={{ gridTemplateColumns: reversed ? '1fr 1fr' : undefined }}>
      <div className="bw-typology__media" style={{ order: reversed ? 2 : 0 }}>
        {typology.images.map((src, i) => (
          <img
            key={src.slice(-24)}
            src={src}
            alt={`${typology.name} — exterior view ${i + 1}`}
            className={i === imgIndex ? 'is-active' : ''}
          />
        ))}
        <span className="bw-typology__media-tag">{typology.tag}</span>
        <div className="bw-typology__dots">
          {typology.images.map((src, i) => (
            <button
              key={src.slice(-24)}
              type="button"
              aria-label={`Show photo ${i + 1} of ${typology.name}`}
              className={i === imgIndex ? 'is-active' : ''}
              onClick={() => setImgIndex(i)}
            />
          ))}
        </div>
      </div>
      <div className="bw-typology__body">
        <span className="bw-typology__count">{typology.count}</span>
        <h3 className="bw-h-card">{typology.name}</h3>
        <p className="bw-body" style={{ margin: 0 }}>
          {typology.blurb}
        </p>
        <div className="bw-typology__specs">
          {typology.specs.map((spec) => (
            <span className="bw-spec" key={spec.label}>
              <spec.icon size={16} />
              {spec.label}
            </span>
          ))}
        </div>
        <div className="bw-typology__price-row">
          {typology.price === 'Price on request' ? (
            <span className="bw-price" style={{ fontSize: 20 }}>
              {typology.price}
            </span>
          ) : (
            <span className="bw-price-pill">
              <span className="amount">{typology.price}</span>
              <span className="unit">Per unit</span>
            </span>
          )}
          {typology.priceNote && <span className="bw-price-note">{typology.priceNote}</span>}
        </div>
      </div>
    </div>
  );
}

export function Residences() {
  const [active, setActive] = useState(TYPOLOGIES[0].id);
  const current = TYPOLOGIES.find((t) => t.id === active);

  return (
    <>
      <section className="bw-section" style={{ paddingBottom: 0 }} id="residences">
        <Reveal className="bw-res-intro">
          <div style={{ maxWidth: 640 }}>
            <span className="bw-kicker">The Residences</span>
            <h2 className="bw-h-section">
              Three ways to
              <br />
              call Broadway home
            </h2>
          </div>
          <p className="bw-body" style={{ margin: 0 }}>
            Every home ships with 24/7 security, solar backup, borehole water and estate
            internet — the difference is scale.
          </p>
        </Reveal>
        <div className="bw-res-tabs" role="tablist" aria-label="Residence typologies">
          {TYPOLOGIES.map((t) => (
            <button
              key={t.id}
              type="button"
              role="tab"
              aria-selected={active === t.id}
              className={active === t.id ? 'is-active' : ''}
              onClick={() => setActive(t.id)}
            >
              {t.name}
            </button>
          ))}
        </div>
      </section>
      <TypologyCard typology={current} />
    </>
  );
}

export default Residences;
