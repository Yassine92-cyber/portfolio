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
              <AlertCircle className="mx-auto mb-6 h-12 w-12 text-warm-400" aria-hidden="true" />
              <h1 className="mb-5 text-display-lg text-paper">
                Something went wrong!
              </h1>
              <p className="mb-8 text-lede text-paper/70">
                We encountered an unexpected error. Please try again or return to the home page.
              </p>
              {error.digest && (
                <p className="mb-8 font-mono text-xs text-paper/60">
                  Error ID: {error.digest}
                </p>
              )}
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={reset}
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-paper px-6 py-3 font-medium text-ink transition-colors hover:bg-violet-100"
                >
                  <RefreshCw className="w-5 h-5" aria-hidden="true" />
                  Try again
                </button>
                <Link
                  href="/"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-paper/20 px-6 py-3 font-medium text-paper transition-colors hover:border-paper/50"
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
    </>
  );
}

