import { useState } from 'react';
import { Reveal } from './Reveal.jsx';
import { ChevronIcon } from './Icons.jsx';

const QA = [
  { letter: 'A', q: 'Where is Broadway Residentials located?', a: 'Broadway Residentials – Malete is located within the Kwara State University axis, Malete, Kwara State.' },
  { letter: 'B', q: 'Who are the developers?', a: 'EVC Nig. Ltd — Experience Vision Creations.' },
  { letter: 'C', q: 'Can I tweak the design when I buy?', a: 'Yes, you can — reasonable customisations are accommodated.' },
  { letter: 'D', q: 'If I build it myself, is there a template?', a: 'Yes — a design template is provided to keep the estate consistent.' },
  { letter: 'E', q: 'Are there other payments to make?', a: 'None. The quoted price is the price.' },
  { letter: 'F', q: 'What documents do I get on completion?', a: 'Receipt of Purchase, Deed of Assignment, Contract of Sale, and Letter of Allocation.' },
  { letter: 'G', q: 'Where do I make payment to?', a: 'United Bank of Africa (UBA) — Acct No. 1023525044, Experience Vision Creations (EVC).' },
];

export function FAQ() {
  const [open, setOpen] = useState('A');

  return (
    <section className="bw-section" id="faq">
      <Reveal style={{ maxWidth: 640 }}>
        <span className="bw-kicker">Frequently Asked</span>
        <h2 className="bw-h-section">Before you commit</h2>
      </Reveal>
      <Reveal as="div" className="bw-faq-list">
        {QA.map((item) => {
          const isOpen = open === item.letter;
          return (
            <div className="bw-faq-item" data-open={isOpen} key={item.letter}>
              <button
                type="button"
                aria-expanded={isOpen}
                onClick={() => setOpen(isOpen ? null : item.letter)}
              >
                <span className="bw-faq-letter">{item.letter}</span>
                <h3>{item.q}</h3>
                <ChevronIcon size={18} />
              </button>
              <div className="bw-faq-panel">
                <div>
                  <p>{item.a}</p>
                </div>
              </div>
            </div>
          );
        })}
      </Reveal>
    </section>
  );
}

export default FAQ;
