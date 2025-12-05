"use client";

import { ErrorBoundary } from "@/components/ErrorBoundary";
import PageLayout from "@/components/PageLayout";
import { motion } from "framer-motion";
import { PUBLICATIONS } from "@/data/publications";
import { useState, useMemo } from "react";
import { trackLinkClick } from "@/components/Analytics";

export default function PublicationsPage() {
  const [selectedYear, setSelectedYear] = useState<number | null>(null);

  const years = useMemo(() => {
    const uniqueYears = Array.from(new Set(PUBLICATIONS.map((p) => p.year))).sort(
      (a, b) => b - a
    );
    return uniqueYears;
  }, []);

  const filteredPublications = useMemo(() => {
    if (selectedYear === null) return PUBLICATIONS;
    return PUBLICATIONS.filter((p) => p.year === selectedYear);
  }, [selectedYear]);

  const groupedByYear = useMemo(() => {
    const grouped: Record<number, typeof PUBLICATIONS> = {};
    filteredPublications.forEach((pub) => {
      if (!grouped[pub.year]) {
        grouped[pub.year] = [];
      }
      grouped[pub.year].push(pub);
    });
    return grouped;
  }, [filteredPublications]);

  return (
    <ErrorBoundary>
      <PageLayout>
        <div className="relative w-full bg-clarity-white dark:bg-gray-900 min-h-screen">
          <section className="py-24 px-6 sm:px-8 lg:px-12">
            <div className="max-w-6xl mx-auto">
              {/* Header */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="mb-16 text-center"
              >
                <h1 className="text-5xl sm:text-6xl font-bold text-bridge-blue dark:text-gray-100 mb-6 font-heading">
                  Research Publications
                </h1>
                <p className="text-xl text-kind-gray dark:text-gray-300 max-w-2xl mx-auto font-body">
                  {PUBLICATIONS.length}+ peer-reviewed papers on computational chemistry, corrosion inhibition, and molecular design.
                </p>
              </motion.div>

              {/* Year Filter */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="mb-12"
              >
                <div className="flex flex-wrap gap-3 justify-center">
                  <button
                    onClick={() => setSelectedYear(null)}
                    className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-200 font-heading ${
                      selectedYear === null
                        ? "bg-signal-teal text-white shadow-lg"
                        : "bg-warm-blush/30 text-kind-gray hover:bg-warm-blush/50 hover:text-bridge-blue"
                    }`}
                  >
                    All Years
                  </button>
                  {years.map((year) => (
                    <button
                      key={year}
                      onClick={() => setSelectedYear(year)}
                      className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-200 font-heading ${
                        selectedYear === year
                          ? "bg-signal-teal text-white shadow-lg"
                          : "bg-warm-blush/30 text-kind-gray hover:bg-warm-blush/50 hover:text-bridge-blue"
                      }`}
                    >
                      {year}
                    </button>
                  ))}
                </div>
              </motion.div>

              {/* Publications List */}
              <div className="space-y-12">
                {Object.entries(groupedByYear)
                  .sort(([a], [b]) => Number(b) - Number(a))
                  .map(([year, publications], yearIndex) => (
                    <motion.div
                      key={year}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: yearIndex * 0.1 }}
                    >
                      <h2 className="text-3xl font-bold text-bridge-blue mb-6 pb-2 border-b border-bridge-blue/20 font-heading">
                        {year}
                      </h2>
                      <div className="space-y-6">
                        {publications.map((pub, index) => (
                          <PublicationCard key={index} publication={pub} />
                        ))}
                      </div>
                    </motion.div>
                  ))}
              </div>
            </div>
          </section>
        </div>
      </PageLayout>
    </ErrorBoundary>
  );
}

function PublicationCard({ publication }: { publication: typeof PUBLICATIONS[0] }) {
  const hasLink = !!publication.link;
  
  const cardContent = (
    <>
      <h3 className={`text-lg font-bold mb-2 leading-snug font-heading ${
        hasLink 
          ? "text-bridge-blue hover:text-signal-teal transition-colors cursor-pointer" 
          : "text-bridge-blue"
      }`}>
        {publication.title}
      </h3>
      <p className="text-sm text-signal-teal mb-2 font-body">{publication.journal}</p>
      <p className="text-sm text-kind-gray mb-4 font-body">{publication.authors}</p>
      {hasLink && (
        <div className="flex items-center gap-3 mt-4">
          <a
            href={publication.link}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => {
              e.stopPropagation();
              trackLinkClick(`Publication: ${publication.title}`, publication.link!);
            }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-signal-teal text-white rounded-lg text-sm font-medium hover:bg-signal-teal/90 transition-all duration-200 shadow-md hover:shadow-lg font-body"
          >
            <span>View Publication</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
          <span className="text-xs text-kind-gray font-body">External link</span>
        </div>
      )}
      {!hasLink && (
        <p className="text-xs text-kind-gray italic mt-4 font-body">
          Link coming soon
        </p>
      )}
    </>
  );

  if (hasLink) {
    return (
      <motion.article
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.4 }}
        className="bg-warm-blush/30 backdrop-blur-sm rounded-xl p-6 border border-bridge-blue/20 hover:border-signal-teal/50 hover:shadow-lg hover:shadow-signal-teal/20 transition-all duration-300"
      >
        {cardContent}
      </motion.article>
    );
  }

  return (
    <motion.article
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.4 }}
      className="bg-warm-blush/30 backdrop-blur-sm rounded-xl p-6 border border-bridge-blue/20 hover:border-signal-teal/30 transition-all duration-300"
    >
      {cardContent}
    </motion.article>
  );
}

