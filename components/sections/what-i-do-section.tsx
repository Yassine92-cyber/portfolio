"use client";

import { motion } from "framer-motion";
import { Code, Palette, Zap, Users } from "lucide-react";
import { cn } from "@/lib/utils";

const services = [
    {
        icon: Users,
        title: "Community & Ecosystem Building",
        description: "Design and run community engagement strategies. Build onboarding and activation flows for founders, members and newcomers. Create rituals, events and touchpoints that make people feel they belong.",
    },
    {
        icon: Zap,
        title: "Programs, Events & Peer Support",
        description: "Design and facilitate learning programs, cohorts and peer-support circles. Moderate panels, talks and workshops with clear, calm and human-centered energy. Turn program noise into signal with simple structures, summaries and dashboards.",
    },
    {
        icon: Code,
        title: "Research, Storytelling & Early-Stage Validation",
        description: "Conduct market and user research to reduce uncertainty at 0→1. Translate complex insights into clear narratives, decks and briefs. Build AI-assisted workflows for research, outreach and content.",
    },
];

export function WhatIDoSection() {
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
        <section id="what-i-do" className="relative py-24 md:py-32 bg-[#0a0a0a]">
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
                                How I Can Help
                            </span>
                        </h2>
                        <p className="text-white/60 text-lg max-w-2xl mx-auto">
                            I support startups, hubs, accelerators and communities at the intersection of strategy, execution and human connection.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {services.map((service, index) => {
                            const Icon = service.icon;
                            return (
                                <motion.div
                                    key={service.title}
                                    custom={index + 1}
                                    variants={fadeUpVariants}
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true, margin: "-100px" }}
                                    className="p-8 rounded-2xl bg-white/[0.03] border border-white/[0.08] hover:bg-white/[0.05] transition-colors"
                                >
                                    <div className="mb-4">
                                        <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-indigo-500/20 to-rose-500/20 flex items-center justify-center">
                                            <Icon className="w-6 h-6 text-indigo-300" />
                                        </div>
                                    </div>
                                    <h3 className="text-xl font-semibold text-white mb-3">
                                        {service.title}
                                    </h3>
                                    <p className="text-white/80 leading-relaxed">
                                        {service.description}
                                    </p>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}

