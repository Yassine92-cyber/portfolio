"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { trackLinkClick } from "./Analytics";

const services = [
  {
    title: "Peer Support and Integration Coaching",
    description: "Warm, structured conversations for people navigating change, relocation, or uncertainty. Grounded in training from MIELI, ADHD Liitto, and the Finnish Refugee Council.",
  },
  {
    title: "Career Clarity Coaching and Strategic Networking",
    description: "My 0→1 clarity framework helps you define your direction, communicate your story, and build a purposeful network.",
  },
  {
    title: "Public Speaking and Workshops",
    description: "Talks and interactive sessions for universities, accelerators, and organizations. Focused on clarity, integration, resilience, community, and storytelling.",
  },
  {
    title: "Scientific and Technical Writing",
    description: "Clear, precise writing for researchers, labs, educators, and industry. Includes papers, reviews, grant proposals, SOPs, reports, and scientific storytelling.",
  },
  {
    title: "Content Strategy and LinkedIn Positioning",
    description: "Helping professionals, founders, and jobseekers transform their stories into visible, clear signals that attract the right audience.",
  },
  {
    title: "Lead Generation and Sales Development",
    description: "Structured systems for early-stage startups including ICP definition, market research, lead sourcing, outreach scripts, CRM workflows, and commercial clarity.",
  },
];

export default function HowICanHelpPreview() {
  return (
    <section 
      id="how-i-can-help" 
      className="py-24 bg-warm-blush/20 dark:bg-gray-800 px-6 sm:px-8 lg:px-12 relative"
      aria-labelledby="how-i-can-help-heading"
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h2 
            id="how-i-can-help-heading"
            className="text-4xl sm:text-5xl font-bold text-bridge-blue dark:text-gray-100 mb-6 leading-tight font-heading"
          >
            How I Can Help
          </h2>
          <p className="text-lg text-kind-gray dark:text-gray-300 max-w-2xl font-body">
            Here are the core services I offer to individuals and organizations.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {services.map((service, index) => (
            <motion.article
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="bg-clarity-white dark:bg-gray-800 backdrop-blur-sm rounded-xl p-6 border border-bridge-blue/20 dark:border-gray-700 hover:border-signal-teal/50 dark:hover:border-signal-teal/50 hover:shadow-lg hover:shadow-signal-teal/20 transition-all duration-300"
            >
              <h3 className="text-xl font-bold text-bridge-blue dark:text-gray-100 mb-3 leading-tight font-heading">
                {service.title}
              </h3>
              <p className="text-sm text-kind-gray dark:text-gray-300 leading-relaxed font-body">
                {service.description}
              </p>
            </motion.article>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center"
        >
          <Link
            href="/services"
            className="inline-flex items-center gap-2 px-8 py-4 bg-signal-teal text-white rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-signal-teal focus:ring-offset-2 focus:ring-offset-clarity-white font-heading"
            onClick={() => trackLinkClick("Home: View All Services", "/services")}
          >
            <span>View All Services</span>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
