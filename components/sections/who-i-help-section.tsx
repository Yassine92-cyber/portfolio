"use client";

import { motion } from "framer-motion";

export function WhoIHelpSection() {
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
        <section id="who-i-help" className="relative py-12 md:py-16 bg-[#030303]">
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
                                Who I Help
                            </span>
                        </h2>
                    </motion.div>

                    <motion.div
                        custom={1}
                        variants={fadeUpVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        className="space-y-8"
                    >
                        <p className="text-white/80 text-xl md:text-2xl font-medium text-center leading-relaxed">
                            I work with people navigating complexity.
                        </p>

                        <div className="space-y-6">
                            <div className="p-6 rounded-xl bg-white/[0.03] border border-white/[0.08]">
                                <p className="text-white/80 text-lg leading-relaxed">
                                    <span className="font-semibold text-indigo-300">International talents</span> finding their place.
                                </p>
                            </div>
                            <div className="p-6 rounded-xl bg-white/[0.03] border border-white/[0.08]">
                                <p className="text-white/80 text-lg leading-relaxed">
                                    <span className="font-semibold text-indigo-300">Founders</span> shaping early-stage chaos.
                                </p>
                            </div>
                            <div className="p-6 rounded-xl bg-white/[0.03] border border-white/[0.08]">
                                <p className="text-white/80 text-lg leading-relaxed">
                                    <span className="font-semibold text-indigo-300">Organizations</span> designing better learning, community, and support systems.
                                </p>
                            </div>
                        </div>

                        <p className="text-white/80 text-lg leading-relaxed text-center mt-8">
                            I help them move from uncertainty to clarity by offering structure, support, and direction at the moments when they need it most.
                        </p>

                        <div className="mt-12 p-8 rounded-2xl bg-gradient-to-r from-indigo-500/10 to-rose-500/10 border border-indigo-500/20">
                            <p className="text-white/80 text-lg leading-relaxed text-center">
                                If you feel stuck, overwhelmed, or unsure where to begin, you are in the right place.
                            </p>
                            <p className="text-white text-xl font-semibold text-center mt-4">
                                Clarity is something you build, not something you wait for.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

