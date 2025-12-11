'use client';

import { useEffect } from 'react';
import { Navigation } from '@/components/Navigation';
import { AlertCircle, RefreshCw, Home } from 'lucide-react';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error('Error:', error);
  }, [error]);

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
              <AlertCircle className="w-16 h-16 text-rose-500 mx-auto mb-6" aria-hidden="true" />
              <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">
                Something went wrong!
              </h1>
              <p className="text-white/60 text-lg mb-8 leading-relaxed">
                We encountered an unexpected error. Please try again or return to the home page.
              </p>
              {error.digest && (
                <p className="text-white/40 text-sm mb-8">
                  Error ID: {error.digest}
                </p>
              )}
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={reset}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-gradient-to-r from-indigo-500 to-rose-500 text-white font-medium hover:from-indigo-600 hover:to-rose-600 transition-all focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-[#030303]"
                >
                  <RefreshCw className="w-5 h-5" aria-hidden="true" />
                  Try again
                </button>
                <Link
                  href="/"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-white/5 border border-white/15 text-white font-medium hover:bg-white/10 transition-all focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-[#030303]"
                >
                  <Home className="w-5 h-5" aria-hidden="true" />
                  Go Home
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
}

