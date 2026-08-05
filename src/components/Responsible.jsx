import { Reveal } from './Reveal.jsx';

const GOALS = [
  { num: '06', color: 'var(--sdg-water)', title: 'Clean Water & Sanitation', body: 'A central estate borehole gives every resident access to hygienic, potable water.' },
  { num: '07', color: 'var(--sdg-energy)', title: 'Affordable & Clean Energy', body: 'Solar power with inverter backup, cutting the noise and pollution of generators.' },
  { num: '11', color: 'var(--sdg-cities)', title: 'Sustainable Cities & Communities', body: 'Peace and prosperity for people and planet, made local in Malete.' },
];

export function Responsible() {
  return (
    <section className="bw-section bw-section--tight" style={{ background: 'var(--cream)' }}>
      <Reveal>
        <span className="bw-kicker">Built Responsibly</span>
        <h2 className="bw-h-section" style={{ fontSize: 26 }}>
          Aligned with the UN Sustainable Development Goals
        </h2>
      </Reveal>
      <Reveal className="bw-sdg-strip">
        {GOALS.map((g) => (
          <div className="bw-sdg-card" key={g.num}>
            <span className="bw-sdg-num" style={{ background: g.color }}>
              {g.num}
            </span>
            <div>
              <h3>{g.title}</h3>
              <p>{g.body}</p>
            </div>
          </div>
        ))}
      </Reveal>
    </section>
  );
}

export default Responsible;
