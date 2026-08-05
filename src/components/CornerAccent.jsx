import { color } from '../tokens.js';

/**
 * Thin diagonal bracket lines framing dark slides — the recurring corner
 * device from the Dome1 reference brochure, recoloured to the EVC accent.
 */
export function CornerAccent({ tone = color.peach }) {
  return (
    <svg className="bw-corner-accent" preserveAspectRatio="none" viewBox="0 0 100 100" aria-hidden="true">
      <polyline points="72,0 100,0 100,26" fill="none" stroke={tone} strokeWidth="0.3" />
      <polyline points="0,74 0,100 26,100" fill="none" stroke={tone} strokeWidth="0.3" />
    </svg>
  );
}

export default CornerAccent;
