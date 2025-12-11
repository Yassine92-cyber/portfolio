"use client";

import { Navigation } from "@/components/navigation";
import { motion } from "framer-motion";

export default function StorePage() {
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
        <main className="relative min-h-screen bg-[#030303]">
            <Navigation />
            <section className="relative py-12 md:py-16 pt-32 md:pt-40">
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
                            <h1 className="text-4xl md:text-5xl font-bold mb-4">
                                <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-300 via-white to-rose-300">
                                    Store
                                </span>
                            </h1>
                        </motion.div>

                        <motion.div
                            custom={1}
                            variants={fadeUpVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-100px" }}
                            className="text-center"
                        >
                            <div className="p-12 rounded-2xl bg-gradient-to-r from-indigo-500/10 to-rose-500/10 border border-indigo-500/20">
                                <p className="text-white/80 text-2xl md:text-3xl font-semibold mb-4">
                                    Coming Soon
                                </p>
                                <p className="text-white/60 text-lg leading-relaxed">
                                    We're working on something special. Check back soon!
                                </p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>
        </main>
    );
}

