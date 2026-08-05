import { useReveal } from '../hooks/useReveal.js';

export function Reveal({ as: Tag = 'div', className = '', style, children }) {
  const { ref, isIn } = useReveal();
  return (
    <Tag ref={ref} className={`bw-reveal ${isIn ? 'is-in' : ''} ${className}`} style={style}>
      {children}
    </Tag>
  );
}

export default Reveal;
