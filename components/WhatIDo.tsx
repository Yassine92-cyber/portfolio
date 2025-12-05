"use client";

import { motion } from "framer-motion";

const bridges = [
  {
    title: "People and Opportunities",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
  },
  {
    title: "Confusion and Direction",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
      </svg>
    ),
  },
  {
    title: "Information and Signal",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
];

const focusAreas = [
  "Peer support and integration coaching",
  "Career clarity and strategic networking",
  "Public speaking and workshops",
  "Scientific and technical communication",
  "Content strategy and LinkedIn positioning",
  "Structured opportunity creation for early-stage teams",
];

export default function WhatIDo() {
  return (
    <section 
      id="what-i-do" 
      className="py-24 bg-gradient-to-b from-warm-blush/20 to-clarity-white dark:from-gray-800 dark:to-gray-900 px-6 sm:px-8 lg:px-12 relative"
      aria-labelledby="what-i-do-heading"
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 
            id="what-i-do-heading"
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-bridge-blue dark:text-gray-100 mb-6 leading-tight font-heading"
          >
            What I Do
          </h2>
          
          <p className="text-xl sm:text-2xl text-kind-gray dark:text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed font-body">
            My work centers around creating bridges.
          </p>
        </motion.div>

        {/* Bridges Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {bridges.map((bridge, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-clarity-white dark:bg-gray-800 rounded-2xl p-8 border-2 border-bridge-blue/20 dark:border-gray-700 hover:border-signal-teal/50 dark:hover:border-signal-teal/50 hover:shadow-xl hover:shadow-signal-teal/20 transition-all duration-300 group text-center"
            >
              <div className="text-signal-teal mb-4 group-hover:scale-110 transition-transform duration-300 flex justify-center">
                {bridge.icon}
              </div>
              <p className="text-lg text-kind-gray dark:text-gray-300 font-body">
                Between
              </p>
              <h3 className="text-xl font-bold text-bridge-blue dark:text-gray-100 font-heading">
                {bridge.title}
              </h3>
            </motion.div>
          ))}
        </div>

        {/* Main Message */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="max-w-4xl mx-auto mb-12"
        >
          <div className="bg-gradient-to-br from-calm-sky-start/30 via-calm-sky-end/30 to-signal-teal/20 dark:from-gray-800/50 dark:via-gray-700/50 dark:to-signal-teal/20 rounded-2xl p-8 lg:p-10 border border-bridge-blue/20 dark:border-gray-700">
            <p className="text-xl sm:text-2xl text-bridge-blue dark:text-gray-200 font-semibold mb-6 leading-relaxed font-body">
              I design warm, human-centered systems that help people take the next step with confidence.
            </p>
          </div>
        </motion.div>

        {/* Focus Areas */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="max-w-4xl mx-auto mb-12"
        >
          <h3 className="text-2xl sm:text-3xl font-bold text-bridge-blue dark:text-gray-100 mb-8 text-center font-heading">
            My Areas of Focus
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {focusAreas.map((area, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4, delay: 0.5 + index * 0.05 }}
                className="flex items-start gap-3 bg-clarity-white dark:bg-gray-800 rounded-xl p-4 border border-bridge-blue/10 dark:border-gray-700 hover:border-signal-teal/30 dark:hover:border-signal-teal/30 hover:bg-warm-blush/20 dark:hover:bg-gray-700 transition-all duration-300"
              >
                <span className="text-signal-teal mt-1 flex-shrink-0">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </span>
                <span className="text-lg text-kind-gray dark:text-gray-300 font-body">{area}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Question Box */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <div className="bg-gradient-to-br from-signal-teal/10 via-bridge-gold/10 to-warm-blush/20 dark:from-signal-teal/20 dark:via-bridge-gold/20 dark:to-gray-800/50 rounded-2xl p-8 lg:p-10 border-2 border-signal-teal/30 dark:border-signal-teal/50">
            <p className="text-lg sm:text-xl text-kind-gray dark:text-gray-300 mb-4 text-center leading-relaxed font-body">
              Everything I do begins with one question:
            </p>
            <p className="text-2xl sm:text-3xl font-bold text-signal-teal text-center leading-relaxed font-heading">
              What is the smallest next step that creates momentum?
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
