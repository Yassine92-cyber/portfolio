"use client";

import { motion } from "framer-motion";
import { Link2, Users, Target, Zap, Sparkles } from "lucide-react";

export function WhatIDoSectionNew() {
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

    const bridgeItems = [
        { icon: Users, text: "Between people and opportunities." },
        { icon: Target, text: "Between confusion and direction." },
        { icon: Zap, text: "Between information and signal." },
    ];

    const scaleVariants = {
        hidden: { opacity: 0, scale: 0.8 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                duration: 0.5,
                ease: [0.25, 0.4, 0.25, 1] as const,
            },
        },
    };

    const floatVariants = {
        animate: {
            y: [0, -10, 0],
            transition: {
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut" as const,
            },
        },
    };

    return (
        <section id="what-i-do" className="relative py-12 md:py-16 bg-[#0a0a0a]">
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
                                What I Do
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
                        {/* Main heading with icon */}
                        <div className="flex flex-col items-center gap-4">
                            <motion.div
                                variants={floatVariants}
                                animate="animate"
                                className="mb-2"
                            >
                                <Link2 className="w-12 h-12 md:w-16 md:h-16 text-indigo-300" />
                            </motion.div>
                            <p className="text-white/80 text-xl md:text-2xl font-medium text-center leading-relaxed">
                                My work centers around creating bridges.
                            </p>
                        </div>

                        {/* Bridge items with icons */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {bridgeItems.map((item, index) => {
                                const Icon = item.icon;
                                return (
                                    <motion.div
                                        key={index}
                                        custom={index + 2}
                                        variants={fadeUpVariants}
                                        initial="hidden"
                                        whileInView="visible"
                                        viewport={{ once: true, margin: "-100px" }}
                                        whileHover={{ scale: 1.05, y: -5 }}
                                        className="p-6 rounded-xl bg-white/[0.03] border border-white/[0.08] hover:bg-white/[0.05] hover:border-indigo-500/30 transition-all cursor-pointer group"
                                    >
                                        <div className="flex flex-col items-center text-center gap-4">
                                            <div className="w-14 h-14 rounded-full bg-gradient-to-br from-indigo-500/20 to-rose-500/20 flex items-center justify-center group-hover:from-indigo-500/30 group-hover:to-rose-500/30 transition-all">
                                                <Icon className="w-7 h-7 text-indigo-300 group-hover:text-indigo-200 transition-colors" />
                                            </div>
                                            <p className="text-white/80 text-lg leading-relaxed">
                                                {item.text}
                                            </p>
                                        </div>
                                    </motion.div>
                                );
                            })}
                        </div>

                        <motion.p
                            custom={5}
                            variants={fadeUpVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-100px" }}
                            className="text-white/80 text-lg leading-relaxed text-center mt-8"
                        >
                            I design warm, human-centered systems that help people take the next step with confidence.
                        </motion.p>

                        {/* Areas of focus card */}
                        <motion.div
                            custom={6}
                            variants={scaleVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-100px" }}
                            whileHover={{ scale: 1.02 }}
                            className="mt-8 p-6 rounded-xl bg-white/[0.03] border border-white/[0.08] hover:border-indigo-500/20 transition-all"
                        >
                            <div className="flex items-start gap-3">
                                <Sparkles className="w-5 h-5 text-indigo-300 flex-shrink-0 mt-1" />
                                <p className="text-white/80 text-lg leading-relaxed">
                                    My areas of focus include peer support and integration coaching, career clarity and strategic networking, public speaking and workshops, scientific and technical communication, content strategy and LinkedIn positioning, and structured opportunity creation for early-stage teams.
                                </p>
                            </div>
                        </motion.div>

                        {/* Call to action card */}
                        <motion.div
                            custom={7}
                            variants={scaleVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-100px" }}
                            whileHover={{ scale: 1.02, boxShadow: "0 20px 40px rgba(99, 102, 241, 0.1)" }}
                            className="mt-12 p-8 rounded-2xl bg-gradient-to-r from-indigo-500/10 to-rose-500/10 border border-indigo-500/20 hover:border-indigo-500/40 transition-all relative overflow-hidden"
                        >
                            <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/5 to-rose-500/5 opacity-0 hover:opacity-100 transition-opacity" />
                            <div className="relative z-10">
                                <p className="text-white/80 text-lg leading-relaxed text-center">
                                    Everything I do begins with one question:
                                </p>
                                <motion.p
                                    initial={{ opacity: 0, y: 10 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.3 }}
                                    className="text-white text-xl md:text-2xl font-semibold text-center mt-4 bg-clip-text text-transparent bg-gradient-to-r from-indigo-300 to-rose-300"
                                >
                                    What is the smallest next step that creates momentum?
                                </motion.p>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

