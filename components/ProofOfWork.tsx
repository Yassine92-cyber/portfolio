"use client";

import { motion } from "framer-motion";

const highlights = [
  {
    metric: "600+",
    description: "people trained across four cities",
  },
  {
    metric: "20+",
    description: "scientific publications",
  },
  {
    metric: "14,000+",
    description: "LinkedIn connections",
  },
  {
    metric: "191",
    description: "member career community built",
  },
];

export default function ProofOfWork() {
  return (
    <section 
      id="proof-of-work" 
      className="py-24 bg-clarity-white px-6 sm:px-8 lg:px-12 relative"
      aria-labelledby="proof-of-work-heading"
    >
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h2 
            id="proof-of-work-heading"
            className="text-4xl sm:text-5xl font-bold text-bridge-blue mb-6 leading-tight font-heading"
          >
            Proof of Work
          </h2>
          <p className="text-lg text-kind-gray mb-8 leading-relaxed font-body">
            My work has grown from lived experience and real contributions.
          </p>
          <p className="text-lg text-kind-gray mb-8 leading-relaxed font-body">
            I have collaborated with or contributed to:
          </p>
          <p className="text-lg text-bridge-blue font-medium leading-relaxed font-body">
            Slush, Junction, Arctic15, Maria 01, University of Helsinki, Haaga Helia, Familia, Think Africa, City of Espoo, EntryPoint, and more.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-8"
        >
          <h3 className="text-2xl font-bold text-bridge-blue mb-6 font-heading">
            Highlights
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {highlights.map((highlight, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4, delay: 0.3 + index * 0.05 }}
                className="bg-warm-blush/30 backdrop-blur-sm rounded-xl p-6 border border-bridge-blue/20"
              >
                <div className="text-3xl font-bold text-signal-teal mb-2 font-heading">
                  {highlight.metric}
                </div>
                <div className="text-kind-gray font-body">
                  {highlight.description}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-lg text-kind-gray italic text-center leading-relaxed font-body"
        >
          These numbers matter, but the people behind them matter even more.
        </motion.p>
      </div>
    </section>
  );
}

