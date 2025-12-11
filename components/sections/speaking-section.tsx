"use client";

import { motion } from "framer-motion";

const topics = [
    "moving from 0→1: small wins, clarity and momentum",
    "turning noise into signal in early-stage journeys",
    "peer support and newcomer integration in ecosystems",
    "community as infrastructure for innovation",
];

export function SpeakingSection() {
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
        <section id="speaking" className="relative py-24 md:py-32 bg-[#030303]">
            <div className="container mx-auto px-4 md:px-6">
                <div className="max-w-4xl mx-auto">
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
                                Speaking & Facilitation
                            </span>
                        </h2>
                    </motion.div>

                    <motion.div
                        custom={1}
                        variants={fadeUpVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        className="max-w-3xl mx-auto"
                    >
                        <p className="text-white/80 text-lg leading-relaxed mb-6">
                            I speak and facilitate in English and French on topics like:
                        </p>
                        <ul className="text-white/80 text-lg leading-relaxed mb-8 space-y-2 list-disc list-outside ml-6">
                            {topics.map((topic, index) => (
                                <li key={index}>{topic}</li>
                            ))}
                        </ul>
                        <p className="text-white/80 text-lg leading-relaxed mb-8">
                            My facilitation style is calm, structured and human-centered: I make space for quieter voices, keep conversations on track, and always leave participants with something practical they can apply.
                        </p>
                        <div className="text-center">
                            <a
                                href="#contact"
                                className="inline-block px-6 py-3 rounded-lg bg-gradient-to-r from-indigo-500 to-rose-500 text-white font-medium hover:from-indigo-600 hover:to-rose-600 transition-all"
                            >
                                Interested in having me speak or facilitate? Let's talk.
                            </a>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

