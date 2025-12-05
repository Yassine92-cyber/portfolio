"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { trackLinkClick } from "@/components/Analytics";

// Organization logos - place images in public/logos/ folder
const logos = [
  { 
    name: "Slush", 
    image: "/logos/slush.png",
    url: "https://slush.org"
  },
  { 
    name: "Junction", 
    image: "/logos/junction.png",
    url: "https://junction.fi"
  },
  { 
    name: "Arctic15", 
    image: "/logos/arctic15.png",
    url: "https://arctic15.com"
  },
  { 
    name: "Maria 01", 
    image: "/logos/maria01.png",
    url: "https://maria.io"
  },
  { 
    name: "University of Helsinki", 
    image: "/logos/helsinki.png",
    url: "https://helsinki.fi"
  },
  { 
    name: "City of Espoo", 
    image: "/logos/espoo.png",
    url: "https://espoo.fi"
  },
  { 
    name: "Haaga-Helia", 
    image: "/logos/haaga-helia.png",
    url: "https://haaga-helia.fi"
  },
  { 
    name: "Familia", 
    image: "/logos/familia.png",
    url: ""
  },
  { 
    name: "Think Africa", 
    image: "/logos/think-africa.png",
    url: ""
  },
  { 
    name: "Institut de Chimie Moléculaire Université de Bourgogne", 
    image: "/logos/icmub.png",
    url: "https://icmub.u-bourgogne.fr"
  },
  { 
    name: "Université Mohammed Premier Oujda", 
    image: "/logos/ump-oujda.png",
    url: "https://ump.ac.ma"
  },
  { 
    name: "ONSSA", 
    image: "/logos/onssa.png",
    url: "https://onssa.gov.ma"
  },
  { 
    name: "Posti", 
    image: "/logos/posti.png",
    url: "https://posti.fi"
  },
  { 
    name: "Everest Center", 
    image: "/logos/everest.png",
    url: ""
  },
  { 
    name: "Yellow Method", 
    image: "/logos/yellow-method.png",
    url: ""
  },
  { 
    name: "AIESEC", 
    image: "/logos/aiesec.png",
    url: "https://aiesec.org"
  },
  { 
    name: "Frontiers in Pharmacology", 
    image: "/logos/frontiers-in-pharmacology.png",
    url: "https://www.frontiersin.org/journals/pharmacology"
  },
];

const stats = [
  { number: "600+", label: "people trained" },
  { number: "20+", label: "scientific publications" },
  { number: "14,000+", label: "LinkedIn connections" },
  { number: "191", label: "member community built" },
];

export default function Proof() {
  const [imageErrors, setImageErrors] = useState<Record<number, boolean>>({});

  const handleImageError = (index: number) => {
    setImageErrors((prev) => ({ ...prev, [index]: true }));
  };

  return (
    <section 
      className="py-24 bg-clarity-white dark:bg-gray-900 px-6 sm:px-8 lg:px-12 relative"
      aria-labelledby="proof-heading"
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 
            id="proof-heading"
            className="text-4xl sm:text-5xl font-bold text-bridge-blue dark:text-gray-100 mb-4 leading-tight font-heading"
          >
            Organizations I&apos;ve Worked With
          </h2>
          <div className="text-lg text-kind-gray dark:text-gray-300 max-w-2xl mx-auto font-body space-y-4">
            <p>
              My work has grown from lived experience and real contributions.
            </p>
            <p>
              I have collaborated with or contributed to:
            </p>
          </div>
        </motion.div>

        {/* Logo Row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-16"
        >
          <div 
            className="flex flex-wrap justify-center items-center gap-8 md:gap-12"
            role="list"
            aria-label="Organization logos"
          >
            {logos.map((logo, index) => {
              const hasError = imageErrors[index];
              
              // Check if this is Junction or Maria 01 - use unoptimized for troubleshooting
              const isProblematicLogo = logo.name === "Junction" || logo.name === "Maria 01";
              
              const LogoContent = (
                <div className="relative h-16 w-32 md:h-20 md:w-40 flex items-center justify-center">
                  {!hasError ? (
                    <Image
                      src={logo.image}
                      alt={`${logo.name} logo`}
                      width={160}
                      height={80}
                      className="object-contain max-h-full max-w-full opacity-60 hover:opacity-100 transition-opacity duration-300 grayscale hover:grayscale-0"
                      loading="lazy"
                      onError={() => {
                        console.error(`Failed to load logo: ${logo.name} at ${logo.image}`);
                        handleImageError(index);
                      }}
                      sizes="(max-width: 768px) 128px, 160px"
                      unoptimized={isProblematicLogo}
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-kind-gray text-sm md:text-base font-medium text-center border-2 border-bridge-blue/30 rounded-lg px-3 py-2 bg-warm-blush/30 hover:border-signal-teal/50 transition-colors font-body">
                      {logo.name}
                    </div>
                  )}
                </div>
              );

              return logo.url ? (
                <a
                  key={index}
                  href={logo.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block hover:scale-105 transition-transform duration-300 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 rounded-lg"
                  aria-label={`Visit ${logo.name} website`}
                  role="listitem"
                  onClick={() => trackLinkClick(logo.name, logo.url)}
                >
                  {LogoContent}
                </a>
              ) : (
                <div 
                  key={index} 
                  className="hover:scale-105 transition-transform duration-300"
                  role="listitem"
                >
                  {LogoContent}
                </div>
              );
            })}
          </div>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-8"
        >
          <div
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8"
            role="list"
            aria-label="Statistics"
          >
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-warm-blush/30 backdrop-blur-sm rounded-xl p-6 text-center border border-bridge-blue/20 hover:border-signal-teal/50 hover:shadow-lg hover:shadow-signal-teal/20 transition-all duration-300"
                role="listitem"
              >
                <div className="text-3xl sm:text-4xl font-bold text-signal-teal mb-2 font-heading" aria-label={stat.number}>
                  {stat.number}
                </div>
                <div className="text-sm text-kind-gray font-body">{stat.label}</div>
              </div>
            ))}
          </div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-lg text-kind-gray italic text-center leading-relaxed font-body"
          >
            These numbers matter, but the people behind them matter even more.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
