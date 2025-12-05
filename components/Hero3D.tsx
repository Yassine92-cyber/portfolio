"use client";

import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import Link from "next/link";
import { trackLinkClick } from "@/components/Analytics";

// Dynamically import Canvas3D to avoid SSR issues
const Canvas3D = dynamic(() => import("./Canvas3D"), {
  ssr: false,
  loading: () => null,
});

export default function Hero3D() {

  return (
    <section 
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-calm-sky-start via-calm-sky-end to-clarity-white dark:from-gray-900 dark:via-gray-800 dark:to-gray-900"
      aria-label="Hero section"
    >
      {/* 3D Background */}
      <Canvas3D />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-clarity-white/30 to-clarity-white/60 dark:via-gray-900/30 dark:to-gray-900/60 z-0" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 py-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          {/* Name */}
          <motion.h1 
            className="text-5xl sm:text-6xl lg:text-7xl font-bold text-bridge-blue dark:text-gray-100 mb-6 font-heading"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Yassine Kaddouri
          </motion.h1>
          
          {/* Scientist → Strategist */}
          <motion.div 
            className="mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <span className="text-4xl sm:text-5xl lg:text-6xl font-bold text-signal-teal font-heading">
              Scientist
            </span>
            <span className="text-4xl sm:text-5xl lg:text-6xl font-bold text-bridge-blue dark:text-gray-300 mx-3">
              →
            </span>
            <span className="text-4xl sm:text-5xl lg:text-6xl font-bold text-bridge-gold font-heading">
              Strategist
            </span>
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg sm:text-xl lg:text-2xl text-kind-gray dark:text-gray-300 max-w-3xl mx-auto leading-relaxed mb-4 font-body"
          >
            I design human-centered experiences that support international talents, founders, teams, and organizations.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="text-xl sm:text-2xl lg:text-3xl text-signal-teal font-semibold max-w-3xl mx-auto leading-relaxed mb-12 font-heading"
          >
            Together we turn uncertainty into understanding and understanding into momentum.
          </motion.p>

          {/* Location & Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-wrap items-center justify-center gap-6 mb-12 text-kind-gray dark:text-gray-300 text-sm font-body"
          >
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span>Helsinki, Finland</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>Available for Remote roles</span>
            </div>
            <a
              href="https://www.linkedin.com/in/dr-yassine92/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-kind-gray dark:text-gray-300 hover:text-bridge-blue dark:hover:text-signal-teal transition-colors"
              aria-label="LinkedIn Profile"
              onClick={() => trackLinkClick("LinkedIn", "https://www.linkedin.com/in/dr-yassine92/")}
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
              <span>LinkedIn</span>
            </a>
          </motion.div>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Link
              href="/services"
              className="px-8 py-4 bg-signal-teal text-white rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-signal-teal focus:ring-offset-2 focus:ring-offset-clarity-white inline-block font-heading"
              onClick={() => trackLinkClick("Hero: View Services", "/services")}
            >
              How I Can Help
            </Link>
            <Link
              href="/contact"
              className="px-8 py-4 bg-bridge-blue text-white rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border-2 border-bridge-blue/20 hover:border-bridge-blue/40 focus:outline-none focus:ring-2 focus:ring-bridge-blue focus:ring-offset-2 focus:ring-offset-clarity-white inline-block font-heading"
              onClick={() => trackLinkClick("Hero: Contact", "/contact")}
            >
              Get in Touch
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

