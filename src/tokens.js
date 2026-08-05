// Broadway Residentials — design tokens
// Base palette sourced from the EVC Brand Identity Guidelines (2022):
// accent #F57F25 / #FFB882, neutral #FFF5ED, text #4A5257, base #21283B.
// Deepened slightly here for on-screen contrast; values stay within the same hue family.

export const color = {
  navy: '#1C2333',
  navyDeep: '#141926',
  navyCard: '#242C41',
  orange: '#F57F25',
  orangeDeep: '#D4661A',
  peach: '#FFB882',
  cream: '#FFF6EE',
  paper: '#FFFBF5',
  ink: '#211D1A',
  inkSoft: '#5A5650',
  hair: 'rgba(28,35,51,0.12)',
  hairOnDark: 'rgba(255,246,238,0.16)',
  backdropLight: '#E7E0D3',
  backdropDark: '#0D1017',
  sdg: { water: '#26BDE2', energy: '#FCC30B', cities: '#FD9D24' },
};

export const font = {
  // Body/UI face — Inter throughout, per brand direction. Embedded as a
  // single variable font (weight axis 100–900), see brochure.css.
  body: "'Inter', -apple-system, 'Segoe UI', sans-serif",
  weight: { regular: 400, medium: 500, semibold: 600, bold: 700, extrabold: 800 },
  scale: {
    display: 'clamp(40px, 7vw, 74px)',
    h1: 'clamp(28px, 4vw, 42px)',
    h2: '26px',
    h3: '15.5px',
    lede: '18px',
    body: '15.5px',
    small: '13px',
    micro: '11px',
  },
};

export const space = [0, 4, 8, 12, 16, 20, 24, 32, 40, 56, 72, 96];

export const radius = { sm: '6px', md: '12px', pill: '999px' };

export const shadow = { soft: '0 30px 70px -30px rgba(20,25,38,0.45)' };

export const motion = {
  ease: 'cubic-bezier(.2,.7,.2,1)',
  fast: '.25s',
  base: '.7s',
};

// CSS custom-property mirror, so plain CSS (brochure.css) and inline styles
// stay in lockstep with the single source of truth above.
export const cssVariables = `
  --navy:${color.navy}; --navy-deep:${color.navyDeep}; --navy-card:${color.navyCard};
  --orange:${color.orange}; --orange-deep:${color.orangeDeep}; --peach:${color.peach};
  --cream:${color.cream}; --paper:${color.paper}; --ink:${color.ink}; --ink-soft:${color.inkSoft};
  --hair:${color.hair}; --hair-on-dark:${color.hairOnDark};
  --sdg-water:${color.sdg.water}; --sdg-energy:${color.sdg.energy}; --sdg-cities:${color.sdg.cities};
  --shadow:${shadow.soft};
`;

export default { color, font, space, radius, shadow, motion, cssVariables };
