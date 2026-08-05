import { motion } from 'motion/react';
import { CornerAccent } from './CornerAccent.jsx';

export function Essence() {
  return (
    <section className="bw-section bw-section--dark bw-overview" id="essence">
      <CornerAccent />
      <motion.div
        className="bw-overview__inner"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: '-100px' }}
        variants={{ hidden: {}, show: { transition: { staggerChildren: 0.14 } } }}
      >
        <motion.span
          className="bw-kicker bw-kicker--dark"
          variants={{ hidden: { opacity: 0, y: 14 }, show: { opacity: 1, y: 0 } }}
          transition={{ duration: 0.6 }}
        >
          Overview
        </motion.span>
        <motion.h2
          className="bw-h-section bw-h-section--dark bw-overview__headline"
          variants={{ hidden: { opacity: 0, y: 22 }, show: { opacity: 1, y: 0 } }}
          transition={{ duration: 0.7 }}
        >
          A planned estate, not just another development.
        </motion.h2>
        <motion.p
          className="bw-body bw-overview__copy"
          variants={{ hidden: { opacity: 0, y: 18 }, show: { opacity: 1, y: 0 } }}
          transition={{ duration: 0.6 }}
        >
          Since the founding of Kwara State University, the Malete community has seen a fast
          rise in economic, social and academic life — but housing has not kept pace.{' '}
          <strong>Broadway Residentials</strong> is EVC's answer: a planned, infrastructure-first
          estate that closes that gap.
        </motion.p>
        <motion.p
          className="bw-body bw-overview__copy"
          variants={{ hidden: { opacity: 0, y: 18 }, show: { opacity: 1, y: 0 } }}
          transition={{ duration: 0.6 }}
        >
          It is built to serve three audiences at once — <strong>investors</strong> seeking a
          dependable asset, <strong>students</strong> seeking a better place to live, and{' '}
          <strong>community hosts</strong> seeking dignified rental income.
        </motion.p>
        <motion.p
          className="bw-overview__quote"
          variants={{ hidden: { opacity: 0, y: 18 }, show: { opacity: 1, y: 0 } }}
          transition={{ duration: 0.6 }}
        >
          "A win-win for investors, students, and community hosts."
        </motion.p>
      </motion.div>
    </section>
  );
}

export default Essence;
