"use client";

import Link from 'next/link';
import { Navigation } from '@/components/Navigation';
import { Home, ArrowLeft } from 'lucide-react';
import { motion } from 'framer-motion';

export default function NotFound() {
  return (
    <>
    <Navigation />
    <main id="main-content" className="relative min-h-screen bg-ink">
      <section className="relative pb-24 pt-36 md:pb-32 md:pt-44">
        <div className="page-shell">
          <div className="mx-auto max-w-2xl text-center">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <p className="eyebrow mb-6 text-warm-300">Error 404</p>
              <h1 className="mb-5 text-display-lg text-paper">
                Page Not Found
              </h1>
              <p className="mb-10 text-lede text-paper/70">
                The page you&apos;re looking for doesn&apos;t exist or has been moved.
                Let&apos;s get you back on track.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-paper px-6 py-3 font-medium text-ink transition-colors hover:bg-violet-100"
                >
                  <Home className="w-5 h-5" aria-hidden="true" />
                  Go Home
                </Link>
                <button
                  onClick={() => window.history.back()}
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-paper/20 px-6 py-3 font-medium text-paper transition-colors hover:border-paper/50"
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
    </>
  );
}

