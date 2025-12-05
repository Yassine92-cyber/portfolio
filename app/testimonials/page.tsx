"use client";

import { ErrorBoundary } from "@/components/ErrorBoundary";
import PageLayout from "@/components/PageLayout";
import { motion } from "framer-motion";
import { TESTIMONIALS, Testimonial } from "@/data/testimonials";
import Image from "next/image";

export default function TestimonialsPage() {
  return (
    <ErrorBoundary>
      <PageLayout>
        <div className="relative w-full bg-clarity-white dark:bg-gray-900 min-h-screen">
          <section className="py-24 px-6 sm:px-8 lg:px-12">
            <div className="max-w-7xl mx-auto">
              {/* Header */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
                className="mb-16 text-center"
              >
                <h1 className="text-5xl sm:text-6xl font-bold text-bridge-blue dark:text-gray-100 mb-6 font-heading">
                  What People Say
                </h1>
                <p className="text-xl text-kind-gray dark:text-gray-300 max-w-2xl mx-auto font-body leading-relaxed">
                  Real stories from people I&apos;ve worked with—international talents, founders, and organizations building meaningful programs.
                </p>
              </motion.div>

              {/* All Testimonials */}
              <div className="max-w-4xl mx-auto grid grid-cols-1 gap-8 lg:gap-10">
                {TESTIMONIALS.map((testimonial, index) => (
                  <TestimonialCard
                    key={testimonial.id}
                    testimonial={testimonial}
                    index={index}
                  />
                ))}
              </div>
            </div>
          </section>
        </div>
      </PageLayout>
    </ErrorBoundary>
  );
}

// Helper function to format quote with bold important sentences
function formatQuote(quote: string) {
  // Split by sentence endings (., !, ?) but keep the punctuation
  const sentences = quote.match(/[^.!?]+[.!?]+/g) || [quote];
  
  // Keywords/phrases that indicate important sentences
  const importantKeywords = [
    /I (highly|would|strongly) recommend/i,
    /I (truly|really) (appreciate|value)/i,
    /He|She|They (is|are|was|were) (an|a) (great|excellent|outstanding|invaluable|remarkable)/i,
    /(great|excellent|outstanding|invaluable|remarkable) (ability|asset|professional|individual)/i,
    /(pleasure|honor|honour) to (work|collaborate)/i,
    /(key|essential|crucial|important) to/i,
    /(would|will) be (a|an) (great|excellent|valuable) (asset|addition)/i,
  ];
  
  return sentences.map((sentence, index) => {
    const trimmed = sentence.trim();
    const isFirstSentence = index === 0;
    const hasImportantKeyword = importantKeywords.some(pattern => pattern.test(trimmed));
    const isImportant = isFirstSentence || hasImportantKeyword;
    
    if (isImportant) {
      return <strong key={index} className="font-semibold text-bridge-blue dark:text-gray-200">{trimmed}</strong>;
    }
    return <span key={index}>{trimmed}</span>;
  });
}

function TestimonialCard({
  testimonial,
  index,
}: {
  testimonial: Testimonial;
  index: number;
}) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.3, delay: index * 0.03 }}
      className="bg-warm-blush/30 dark:bg-gray-800 backdrop-blur-sm rounded-2xl p-8 lg:p-10 border border-bridge-blue/20 dark:border-gray-700 hover:border-signal-teal/50 dark:hover:border-signal-teal/50 hover:shadow-lg hover:shadow-signal-teal/20 transition-all duration-300 h-full flex flex-col"
    >
      <div className="flex items-start gap-4 mb-6">
        {testimonial.image ? (
          <Image
            src={testimonial.image}
            alt={testimonial.name}
            width={56}
            height={56}
            className="w-14 h-14 rounded-full object-cover flex-shrink-0"
          />
        ) : (
          <div className="w-14 h-14 rounded-full bg-signal-teal flex items-center justify-center text-white font-bold text-lg flex-shrink-0">
            {testimonial.name.charAt(0)}
          </div>
        )}
        <div className="flex-1 min-w-0">
          <h3 className="text-xl font-bold text-bridge-blue dark:text-gray-100 font-heading mb-1">{testimonial.name}</h3>
          <p className="text-sm text-kind-gray dark:text-gray-300 font-body leading-relaxed">
            {testimonial.role}
            {testimonial.organization && (
              <>
                <span className="mx-1.5">•</span>
                <span>{testimonial.organization}</span>
              </>
            )}
          </p>
        </div>
      </div>
      <blockquote className="text-kind-gray dark:text-gray-300 leading-relaxed font-body text-base lg:text-lg flex-1">
        <span className="text-signal-teal text-2xl leading-none mr-1">&ldquo;</span>
        <span className="relative">{formatQuote(testimonial.quote)}</span>
        <span className="text-signal-teal text-2xl leading-none ml-1">&rdquo;</span>
      </blockquote>
    </motion.article>
  );
}

