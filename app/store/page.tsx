"use client";

import { ErrorBoundary } from "@/components/ErrorBoundary";
import PageLayout from "@/components/PageLayout";
import { motion } from "framer-motion";

export default function StorePage() {
  return (
    <ErrorBoundary>
      <PageLayout>
        <div className="relative w-full bg-clarity-white dark:bg-gray-900 min-h-screen">
          <section className="py-32 px-6 sm:px-8 lg:px-12">
            <div className="max-w-4xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-bridge-blue dark:text-gray-100 mb-6 font-heading">
                  Store
                </h1>
                <p className="text-2xl sm:text-3xl text-signal-teal font-semibold mb-8 font-heading">
                  Coming Soon
                </p>
                <p className="text-lg sm:text-xl text-kind-gray dark:text-gray-300 max-w-2xl mx-auto leading-relaxed font-body">
                  We&apos;re working on something special. Check back soon for exciting updates!
                </p>
              </motion.div>
            </div>
          </section>
        </div>
      </PageLayout>
    </ErrorBoundary>
  );
}

