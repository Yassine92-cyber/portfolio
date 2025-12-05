"use client";

import { motion } from "framer-motion";

const helpCategories = [
  {
    title: "International Talents",
    description: "Finding their place",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: "Founders",
    description: "Shaping early-stage chaos",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    title: "Organizations",
    description: "Designing better learning, community, and support systems",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
  },
];

export default function WhoIHelp() {
  return (
    <section 
      id="who-i-help" 
      className="py-24 bg-gradient-to-b from-clarity-white to-warm-blush/10 dark:from-gray-900 dark:to-gray-800 px-6 sm:px-8 lg:px-12 relative"
      aria-labelledby="who-i-help-heading"
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
            id="who-i-help-heading"
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-bridge-blue dark:text-gray-100 mb-6 leading-tight font-heading"
          >
            Who I Help
          </h2>
          
          <p className="text-xl sm:text-2xl text-kind-gray dark:text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed font-body">
            I work with people navigating complexity.
          </p>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {helpCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-clarity-white dark:bg-gray-800 rounded-2xl p-8 border-2 border-bridge-blue/20 dark:border-gray-700 hover:border-signal-teal/50 dark:hover:border-signal-teal/50 hover:shadow-xl hover:shadow-signal-teal/20 transition-all duration-300 group"
            >
              <div className="text-signal-teal mb-4 group-hover:scale-110 transition-transform duration-300">
                {category.icon}
              </div>
              <h3 className="text-2xl font-bold text-bridge-blue dark:text-gray-100 mb-2 font-heading">
                {category.title}
              </h3>
              <p className="text-lg text-kind-gray dark:text-gray-300 font-body">
                {category.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Main Message */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="max-w-4xl mx-auto space-y-8"
        >
          <div className="bg-gradient-to-br from-calm-sky-start/30 via-calm-sky-end/30 to-signal-teal/20 dark:from-gray-800/50 dark:via-gray-700/50 dark:to-signal-teal/20 rounded-2xl p-8 lg:p-10 border border-bridge-blue/20 dark:border-gray-700">
            <p className="text-lg sm:text-xl text-kind-gray dark:text-gray-300 mb-6 leading-relaxed font-body">
              I help them move from uncertainty to clarity by offering structure, support, and direction at the moments when they need it most.
            </p>

            <div className="border-l-4 border-signal-teal pl-6 mb-6">
              <p className="text-lg sm:text-xl text-bridge-blue dark:text-gray-200 font-semibold leading-relaxed font-body">
                If you feel stuck, overwhelmed, or unsure where to begin, you are in the right place.
              </p>
            </div>

            <p className="text-2xl sm:text-3xl font-bold text-signal-teal leading-relaxed font-heading">
              Clarity is something you build, not something you wait for.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
