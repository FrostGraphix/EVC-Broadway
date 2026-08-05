import logoDark from '../assets/logo/broadway-logo-dark.png';
import logoWhite from '../assets/logo/broadway-logo-white.png';

/**
 * The real Broadway Residentials logo artwork — dark-on-light for cream
 * grounds, white-on-dark for navy grounds. Not a redrawn/vector approximation.
 */
export function BroadwayWordmark({ variant = 'dark', size = 'lg', className = '' }) {
  const widths = { lg: 220, md: 170, sm: 130 };
  const src = variant === 'light' ? logoWhite : logoDark;
  const width = widths[size] || widths.lg;

  return (
    <img
      className={`bw-lockup ${className}`}
      src={src}
      alt="Broadway Residentials"
      style={{ width, height: 'auto', display: 'block' }}
    />
  );
}

export default BroadwayWordmark;
