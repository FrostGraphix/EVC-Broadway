// Building photography — real file imports (Vite/CRA/Next all resolve
// these to hashed, cache-friendly asset URLs at build time).

import b1_01 from './photos/b1-01.jpg';
import b1_02 from './photos/b1-02.jpg';
import b1_03 from './photos/b1-03.jpg';
import b2_01 from './photos/b2-01.jpg';
import b2_02 from './photos/b2-02.jpg';
import b2_03 from './photos/b2-03.jpg';
import b3_01 from './photos/b3-01.jpg';
import b3_02 from './photos/b3-02.jpg';
import b3_03 from './photos/b3-03.jpg';

export const bungalow2bed = [b1_01, b1_02, b1_03];
export const bungalow3bed = [b2_01, b2_02, b2_03];
export const studioRow = [b3_01, b3_02, b3_03];

export const heroImage = bungalow3bed[1]; // dusk, warm-lit facade
export const essenceImage = bungalow2bed[0];
export const perksImage = bungalow3bed[2];
