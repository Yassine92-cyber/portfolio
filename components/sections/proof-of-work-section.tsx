"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const organizations = [
    { name: "Slush", logo: "/logos/slush.png" },
    { name: "Junction", logo: "/logos/junction.png" },
    { name: "Arctic15", logo: "/logos/arctic15.png" },
    { name: "Maria 01", logo: "/logos/maria01.png" },
    { name: "University of Helsinki", logo: "/logos/helsinki.png" },
    { name: "Haaga Helia", logo: "/logos/haaga-helia.png" },
    { name: "Familia", logo: "/logos/familia.png" },
    { name: "Think Africa", logo: "/logos/think-africa.png" },
    { name: "City of Espoo", logo: "/logos/espoo.png" },
    { name: "AIESEC", logo: "/logos/aiesec.png" },
    { name: "Everest Center", logo: "/logos/everest.png" },
    { name: "Frontiers in Pharmacology", logo: "/logos/frontiers-in-pharmacology.png" },
    { name: "ICMUB", logo: "/logos/icmub.png" },
    { name: "ONSSA", logo: "/logos/onssa.png" },
    { name: "Posti", logo: "/logos/posti.png" },
    { name: "UMP Oujda", logo: "/logos/ump-oujda.png" },
    { name: "Yellow Method", logo: "/logos/yellow-method.png" },
];

const highlights = [
    { label: "600+", description: "people trained across four cities" },
    { label: "20+", description: "scientific publications" },
    { label: "14,000", description: "LinkedIn connections" },
    { label: "191", description: "member career community built" },
];

export function ProofOfWorkSection() {
    const fadeUpVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: (i: number) => ({
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                delay: i * 0.1,
                ease: [0.25, 0.4, 0.25, 1] as const,
            },
        }),
    };

    return (
        <section id="proof-of-work" className="relative py-12 md:py-16 bg-[#030303]">
            <div className="container mx-auto px-4 md:px-6">
                <div className="max-w-6xl mx-auto">
                    <motion.div
                        custom={0}
                        variants={fadeUpVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-4xl md:text-5xl font-bold mb-4">
                            <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-300 via-white to-rose-300">
                                Proof of Work
                            </span>
                        </h2>
                    </motion.div>

                    <motion.div
                        custom={1}
                        variants={fadeUpVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        className="space-y-12"
                    >
                        <div>
                            <p className="text-white/80 text-lg leading-relaxed mb-6 text-center">
                                My work has grown from lived experience and real contributions.
                            </p>
                            <p className="text-white/80 text-lg leading-relaxed mb-8 text-center">
                                I have collaborated with or contributed to:
                            </p>
                            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6 items-center justify-items-center">
                                {organizations.map((org, index) => (
                                    <motion.div
                                        key={index}
                                        custom={index}
                                        variants={fadeUpVariants}
                                        initial="hidden"
                                        whileInView="visible"
                                        viewport={{ once: true, margin: "-100px" }}
                                        className="flex items-center justify-center w-full h-24 p-4 rounded-xl bg-white/90 backdrop-blur-sm border border-white/20 hover:bg-white hover:shadow-lg transition-all"
                                    >
                                        <Image
                                            src={org.logo}
                                            alt={org.name}
                                            width={120}
                                            height={60}
                                            className="object-contain max-w-full max-h-full"
                                        />
                                    </motion.div>
                                ))}
                            </div>
                        </div>

                        <div>
                            <h3 className="text-2xl font-semibold text-white mb-8 text-center">
                                Highlights
                            </h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {highlights.map((highlight, index) => (
                                    <motion.div
                                        key={index}
                                        custom={index + 2}
                                        variants={fadeUpVariants}
                                        initial="hidden"
                                        whileInView="visible"
                                        viewport={{ once: true, margin: "-100px" }}
                                        className="p-6 rounded-xl bg-white/[0.03] border border-white/[0.08] text-center"
                                    >
                                        <div className="text-3xl font-bold text-indigo-300 mb-2">
                                            {highlight.label}
                                        </div>
                                        <p className="text-white/80 text-sm">
                                            {highlight.description}
                                        </p>
                                    </motion.div>
                                ))}
                            </div>
                        </div>

                        <div className="mt-12 p-8 rounded-2xl bg-gradient-to-r from-indigo-500/10 to-rose-500/10 border border-indigo-500/20 text-center">
                            <p className="text-white/80 text-lg leading-relaxed">
                                These numbers matter, but the people behind them matter even more.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

