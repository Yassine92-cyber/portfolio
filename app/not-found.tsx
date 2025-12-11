"use client";

import Link from 'next/link';
import { Navigation } from '@/components/navigation';
import { Home, ArrowLeft } from 'lucide-react';
import { motion } from 'framer-motion';

export default function NotFound() {
  return (
    <main className="relative min-h-screen bg-[#030303]">
      <Navigation />
      <section className="relative py-24 md:py-32 pt-32 md:pt-40">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-2xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-8xl md:text-9xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-indigo-300 via-white to-rose-300">
                404
              </h1>
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
                Page Not Found
              </h2>
              <p className="text-white/60 text-lg mb-8 leading-relaxed">
                The page you're looking for doesn't exist or has been moved. 
                Let's get you back on track.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-gradient-to-r from-indigo-500 to-rose-500 text-white font-medium hover:from-indigo-600 hover:to-rose-600 transition-all focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-[#030303]"
                >
                  <Home className="w-5 h-5" aria-hidden="true" />
                  Go Home
                </Link>
                <button
                  onClick={() => window.history.back()}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-white/5 border border-white/15 text-white font-medium hover:bg-white/10 transition-all focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-[#030303]"
                >
                  <ArrowLeft className="w-5 h-5" aria-hidden="true" />
                  Go Back
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
}

