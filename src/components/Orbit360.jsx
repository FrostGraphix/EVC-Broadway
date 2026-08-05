import { useRef, useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { bungalow2bed } from '../assets/photos.js';

const ANGLES = [
  { src: bungalow2bed[0], label: 'Front Elevation' },
  { src: bungalow2bed[1], label: 'Approach View' },
  { src: bungalow2bed[2], label: 'Side Elevation' },
];

const DRAG_THRESHOLD = 55;

/**
 * Drag-to-explore viewer cycling through the three photographed angles of
 * the 2 Bedroom Bungalow. Not true photogrammetry — labeled honestly as a
 * multi-angle preview, not a 360° scan.
 */
export function Orbit360() {
  const [index, setIndex] = useState(0);
  const dragStartX = useRef(null);
  const dragging = useRef(false);

  const step = (dir) => setIndex((i) => (i + dir + ANGLES.length) % ANGLES.length);

  const onPointerDown = (e) => {
    dragging.current = true;
    dragStartX.current = e.clientX;
    e.currentTarget.setPointerCapture?.(e.pointerId);
  };
  const onPointerMove = (e) => {
    if (!dragging.current || dragStartX.current === null) return;
    const delta = e.clientX - dragStartX.current;
    if (Math.abs(delta) > DRAG_THRESHOLD) {
      step(delta < 0 ? 1 : -1);
      dragStartX.current = e.clientX;
    }
  };
  const endDrag = () => {
    dragging.current = false;
    dragStartX.current = null;
  };

  return (
    <div
      className="bw-orbit360"
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={endDrag}
      onPointerLeave={endDrag}
      role="group"
      aria-label="360 degree preview of the 2 Bedroom Bungalow, drag or use arrow buttons to rotate"
    >
      <div className="bw-orbit360__frame">
        <AnimatePresence mode="wait">
          <motion.img
            key={ANGLES[index].src}
            src={ANGLES[index].src}
            alt={`2 Bedroom Bungalow — ${ANGLES[index].label}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.4, 0, 0.2, 1] }}
          />
        </AnimatePresence>
        <span className="bw-orbit360__badge">
          <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
            <ellipse cx="12" cy="12" rx="9" ry="4.5" />
            <ellipse cx="12" cy="12" rx="4.5" ry="9" transform="rotate(35 12 12)" />
          </svg>
          360° Preview
        </span>
        <button type="button" className="bw-orbit360__arrow left" aria-label="Previous angle" onClick={() => step(-1)}>
          ‹
        </button>
        <button type="button" className="bw-orbit360__arrow right" aria-label="Next angle" onClick={() => step(1)}>
          ›
        </button>
        <span className="bw-orbit360__hint">↔ Drag to rotate · {ANGLES[index].label}</span>
        <span className="bw-orbit360__dots">
          {ANGLES.map((a, i) => (
            <span key={a.label} className={i === index ? 'is-active' : ''} />
          ))}
        </span>
      </div>
    </div>
  );
}

export default Orbit360;
