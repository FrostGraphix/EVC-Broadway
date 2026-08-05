import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

const SESSION_KEY = 'bw-gate-intro-seen';

/**
 * One-time "arrival" cutscene: a car drives up to the estate's gate house,
 * the boom gate lifts, and the wordmark reveals — then hands off to the
 * real hero. Purely decorative and rare (plays once per session), so it's
 * allowed to be expressive; it also fully bypasses under reduced-motion
 * and is skippable at any time.
 */
export function GateIntro({ onDone }) {
  const [phase, setPhase] = useState('idle'); // idle -> drive -> arrive -> reveal -> exit -> done
  const skip = useRef(false);
  const reduced = useRef(false);

  useEffect(() => {
    reduced.current = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;
    const alreadySeen = sessionStorage.getItem(SESSION_KEY);

    if (reduced.current || alreadySeen) {
      setPhase('done');
      onDone?.();
      return;
    }

    sessionStorage.setItem(SESSION_KEY, '1');
    const timers = [
      setTimeout(() => !skip.current && setPhase('drive'), 50),
      setTimeout(() => !skip.current && setPhase('arrive'), 1450),
      setTimeout(() => !skip.current && setPhase('reveal'), 2000),
      setTimeout(() => !skip.current && setPhase('exit'), 3500),
      setTimeout(() => !skip.current && finish(), 4150),
    ];
    return () => timers.forEach(clearTimeout);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function finish() {
    setPhase('done');
    onDone?.();
  }

  function handleSkip() {
    skip.current = true;
    finish();
  }

  if (phase === 'done') return null;

  const carX = phase === 'idle' ? -180 : phase === 'drive' ? 430 : phase === 'arrive' ? 480 : 900;
  const gateOpen = phase === 'arrive' || phase === 'reveal' || phase === 'exit';

  return (
    <AnimatePresence>
      {phase !== 'done' && (
        <motion.div
          className="bw-gate-intro"
          initial={{ opacity: 1 }}
          animate={{ opacity: phase === 'exit' ? 0 : 1, filter: phase === 'exit' ? 'blur(6px)' : 'blur(0px)' }}
          transition={{ duration: 0.65, ease: [0.4, 0, 0.2, 1] }}
        >
          <svg className="bw-gate-intro__scene" viewBox="0 0 900 320" preserveAspectRatio="xMidYMax slice">
            <rect x="0" y="0" width="900" height="320" fill="url(#bwGateSky)" />
            <defs>
              <linearGradient id="bwGateSky" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#141926" />
                <stop offset="100%" stopColor="#1C2333" />
              </linearGradient>
            </defs>

            <rect x="0" y="250" width="900" height="70" fill="#0E1220" />
            <rect x="0" y="248" width="900" height="4" fill="rgba(255,246,238,.18)" />

            {/* gate pillars */}
            <rect x="410" y="120" width="18" height="132" fill="#2A3247" />
            <rect x="472" y="120" width="18" height="132" fill="#2A3247" />
            {/* boom barrier — hinges at left pillar, lifts open */}
            <motion.rect
              x="428" y="150" width="150" height="7" rx="3"
              fill="var(--orange)"
              style={{ transformOrigin: '428px 153.5px' }}
              animate={{ rotate: gateOpen ? -78 : 0 }}
              transition={{ duration: 0.55, ease: [0.34, 1.4, 0.4, 1] }}
            />
            <circle cx="428" cy="153.5" r="6" fill="var(--orange-deep)" />

            {/* small house mark above gate */}
            <g transform="translate(419,78)" opacity="0.9">
              <path d="M4 22 L26 5 L48 22" stroke="var(--paper)" strokeWidth="3.4" strokeLinecap="round" strokeLinejoin="round" fill="none" />
              <rect x="20" y="16" width="5" height="5" fill="var(--orange)" />
              <rect x="27" y="16" width="5" height="5" fill="var(--orange)" />
            </g>

            {/* car */}
            <motion.g
              animate={{ x: carX }}
              transition={{
                duration: phase === 'drive' ? 1.4 : phase === 'exit' ? 0.9 : 0.5,
                ease: phase === 'drive' ? [0.16, 0.6, 0.3, 1] : [0.4, 0, 0.2, 1],
              }}
            >
              <g transform="translate(0,196)">
                <rect x="0" y="14" width="86" height="24" rx="7" fill="var(--peach)" />
                <path d="M12 14 Q22 -2 40 -2 L62 -2 Q72 -2 74 14 Z" fill="var(--peach)" />
                <path d="M17 12 L38 12 L40 1 L28 1 Z" fill="#141926" opacity="0.55" />
                <path d="M42 12 L60 12 L58 1 L48 1 Z" fill="#141926" opacity="0.55" />
                <circle cx="18" cy="40" r="8" fill="#141926" />
                <circle cx="66" cy="40" r="8" fill="#141926" />
                <circle cx="18" cy="40" r="3" fill="rgba(255,246,238,.5)" />
                <circle cx="66" cy="40" r="3" fill="rgba(255,246,238,.5)" />
              </g>
            </motion.g>
          </svg>

          <AnimatePresence>
            {(phase === 'reveal' || phase === 'exit') && (
              <motion.div
                className="bw-gate-intro__welcome"
                initial={{ opacity: 0, y: 14, filter: 'blur(6px)' }}
                animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                exit={{ opacity: 0, y: -8, filter: 'blur(4px)' }}
                transition={{ duration: 0.6, ease: [0.2, 0.7, 0.2, 1] }}
              >
                <span className="eyebrow">You have arrived at</span>
                <span className="headline">WELCOME TO BROADWAY RESIDENTIALS</span>
              </motion.div>
            )}
          </AnimatePresence>

          <button type="button" className="bw-gate-intro__skip" onClick={handleSkip}>
            Skip
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default GateIntro;
