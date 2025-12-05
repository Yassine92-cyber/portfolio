"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { trackLinkClick } from "./Analytics";

const journeyStages = [
  {
    title: "From chemistry to clarity",
    description: "I spent years in scientific research, publishing more than twenty papers and working in cross-disciplinary labs in four countries. Science taught me structure, precision, and the ability to turn complexity into clear insight.",
  },
  {
    title: "From postdoc to peer support",
    description: "Moving to Finland transformed how I understand transitions. I worked night shifts while building community by day and supporting international talents through volunteering, speaking, and mentorship.",
  },
  {
    title: "From business development to opportunity design",
    description: "In B2B SaaS, I built systems for lead generation, investor pipelines, and commercial clarity. I discovered that business growth and human growth both depend on the same thing: reducing noise so people can act with confidence.",
  },
];

export default function JourneyPreview() {
  return (
    <section 
      id="journey-preview" 
      className="py-24 bg-clarity-white dark:bg-gray-900 px-6 sm:px-8 lg:px-12 relative"
      aria-labelledby="journey-preview-heading"
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
            id="journey-preview-heading"
            className="text-4xl sm:text-5xl font-bold text-bridge-blue dark:text-gray-100 mb-6 leading-tight font-heading"
          >
            My Journey
          </h2>
          <p className="text-lg text-kind-gray dark:text-gray-300 mb-8 leading-relaxed font-body">
            My path has never been linear. It has always been a collection of dots that eventually connected.
          </p>
        </motion.div>

        <div className="space-y-8 mb-12">
          {journeyStages.map((stage, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-warm-blush/30 dark:bg-gray-800 backdrop-blur-sm rounded-xl p-8 border border-bridge-blue/20 dark:border-gray-700 hover:border-signal-teal/50 dark:hover:border-signal-teal/50 hover:shadow-lg hover:shadow-signal-teal/20 transition-all duration-300"
            >
              <h3 className="text-2xl font-bold text-bridge-blue dark:text-gray-100 mb-4 font-heading">
                {stage.title}
              </h3>
              <p className="text-kind-gray dark:text-gray-300 leading-relaxed font-body">
                {stage.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="bg-gradient-to-br from-calm-sky-start/30 via-calm-sky-end/30 to-signal-teal/20 dark:from-gray-800/50 dark:via-gray-700/50 dark:to-signal-teal/20 rounded-xl p-8 border border-bridge-blue/20 dark:border-gray-700"
        >
          <h3 className="text-2xl font-bold text-bridge-blue dark:text-gray-100 mb-4 font-heading">
            Now
          </h3>
          <p className="text-lg text-kind-gray dark:text-gray-300 mb-4 leading-relaxed font-body">
            I combine all of this into one identity.
          </p>
          <ul className="space-y-2 mb-6">
            <li className="flex items-start gap-3 text-lg text-kind-gray dark:text-gray-300 font-body">
              <span className="text-signal-teal mt-1.5 font-bold">•</span>
              <span>A Bridge Builder.</span>
            </li>
            <li className="flex items-start gap-3 text-lg text-kind-gray dark:text-gray-300 font-body">
              <span className="text-signal-teal mt-1.5 font-bold">•</span>
              <span>A Peer Supporter.</span>
            </li>
            <li className="flex items-start gap-3 text-lg text-kind-gray dark:text-gray-300 font-body">
              <span className="text-signal-teal mt-1.5 font-bold">•</span>
              <span>A Scientist turned Strategist who helps people and teams move from uncertainty to clarity.</span>
            </li>
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <Link
            href="/journey"
            className="inline-flex items-center gap-2 px-8 py-4 bg-signal-teal text-white rounded-lg font-medium hover:bg-signal-teal/90 transition-all duration-200 shadow-lg hover:shadow-xl hover:shadow-signal-teal/50 focus:outline-none focus:ring-2 focus:ring-signal-teal focus:ring-offset-2 focus:ring-offset-clarity-white font-heading"
            onClick={() => trackLinkClick("Journey: View Full Story", "/journey")}
          >
            <span>View Full Journey</span>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
