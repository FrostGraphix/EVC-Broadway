import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronIcon } from './Icons.jsx';

const QA = [
  {
    letter: 'A',
    q: 'Where is Broadway Residentials located?',
    a: 'Broadway Residentials – Malete is located within the Kwara State University axis, Malete, Kwara State. A strategic position that ensures both academic and commercial foot traffic.',
  },
  {
    letter: 'B',
    q: 'Who are the developers?',
    a: 'EVC Nig. Ltd — Experience Vision Creations. A development firm with a track record of delivering premium residential estates across Nigeria.',
  },
  {
    letter: 'C',
    q: 'Can I tweak the design when I buy?',
    a: "Yes, you can — reasonable customisations are accommodated. Our design team will work with you to incorporate your preferences within the estate's aesthetic guidelines.",
  },
  {
    letter: 'D',
    q: 'If I build it myself, is there a template?',
    a: 'Yes — a design template is provided to all land owners to keep the estate visually consistent and maintain premium property values for everyone.',
  },
  {
    letter: 'E',
    q: 'Are there other payments to make?',
    a: 'None. The quoted price is the price — no hidden levies, development charges, or agency fees. What we quote is what you pay.',
  },
  {
    letter: 'F',
    q: 'What documents do I get on completion?',
    a: 'Receipt of Purchase, Deed of Assignment, Contract of Sale, and Letter of Allocation — fully executed and legally sound.',
  },
  {
    letter: 'G',
    q: 'Where do I make payment to?',
    a: 'United Bank of Africa (UBA) — Acct No. 1023525044, Experience Vision Creations (EVC). Always request a payment confirmation from our team.',
  },
];

export function FAQ() {
  const [open, setOpen] = useState('A');

  return (
    <section className="bw-section bw-faq-section" id="faq">
      <motion.div
        style={{ maxWidth: 680 }}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      >
        <span className="bw-kicker">Frequently Asked</span>
        <h2 className="bw-h-section">Before you commit</h2>
        <p className="bw-lede" style={{ marginTop: 16 }}>
          Straight answers to the questions every investor asks before signing.
        </p>
      </motion.div>

      <motion.div
        className="bw-faq-list"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: '-40px' }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        {QA.map((item, idx) => {
          const isOpen = open === item.letter;
          return (
            <motion.div
              className="bw-faq-item"
              data-open={isOpen}
              key={item.letter}
              initial={{ opacity: 0, x: -12 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: idx * 0.07 }}
            >
              <button
                type="button"
                aria-expanded={isOpen}
                onClick={() => setOpen(isOpen ? null : item.letter)}
              >
                <span className="bw-faq-letter">{item.letter}</span>
                <h3>{item.q}</h3>
                <motion.span
                  className="icon"
                  animate={{ rotate: isOpen ? 180 : 0 }}
                  transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                >
                  <ChevronIcon size={18} />
                </motion.span>
              </button>
              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    className="bw-faq-panel-motion"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.32, ease: [0.16, 1, 0.3, 1] }}
                    style={{ overflow: 'hidden' }}
                  >
                    <p className="bw-faq-answer">{item.a}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
}

export default FAQ;
