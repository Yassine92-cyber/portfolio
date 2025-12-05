"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { trackLinkClick } from "./Analytics";

export default function CTASection() {
  return (
    <section 
      className="py-24 bg-gradient-to-br from-calm-sky-start via-calm-sky-end to-clarity-white dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 px-6 sm:px-8 lg:px-12 relative overflow-hidden"
      aria-labelledby="cta-heading"
    >
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle, #3AAFA9 1px, transparent 1px)`,
            backgroundSize: '40px 40px',
          }} 
        />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 
            id="cta-heading"
            className="text-4xl sm:text-5xl font-bold text-bridge-blue dark:text-gray-100 mb-8 leading-tight font-heading"
          >
            Let&apos;s Work Together
          </h2>
          <p className="text-xl text-kind-gray dark:text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed font-body">
            If you are an international talent searching for clarity, a founder building something ambitious, or an organization supporting people in transition,
          </p>
          <p className="text-xl text-bridge-blue dark:text-gray-200 font-medium mb-8 max-w-2xl mx-auto leading-relaxed font-body">
            I would be happy to help.
          </p>
          <p className="text-lg text-kind-gray mb-12 max-w-2xl mx-auto leading-relaxed font-body">
            Send a message, request a session, or simply start a conversation.
          </p>
          <p className="text-2xl font-bold text-signal-teal mb-12 max-w-2xl mx-auto font-heading">
            Everything begins with one small step.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="/contact"
              className="px-8 py-4 bg-signal-teal text-white rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-signal-teal focus:ring-offset-2 focus:ring-offset-clarity-white font-heading"
              onClick={() => trackLinkClick("CTA: Contact", "/contact")}
            >
              Get in Touch
            </Link>
            <Link
              href="/services"
              className="px-8 py-4 bg-bridge-blue text-white rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border-2 border-bridge-blue/20 hover:border-bridge-blue/40 focus:outline-none focus:ring-2 focus:ring-bridge-blue focus:ring-offset-2 focus:ring-offset-clarity-white font-heading"
              onClick={() => trackLinkClick("CTA: View Services", "/services")}
            >
              View Services
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
