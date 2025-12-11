"use client";

import { motion } from "framer-motion";
import { Users, Rocket, Mic } from "lucide-react";

const serviceCategories = [
    {
        icon: Users,
        title: "Community & Talent System Design",
        services: [
            "Peer-support frameworks",
            "Onboarding systems",
            "Integration programs",
            "Community activation",
            "Event facilitation",
        ],
    },
    {
        icon: Rocket,
        title: "Startup & Founder Support",
        services: [
            "Market research",
            "ICP validation",
            "BD strategy",
            "AI workflows",
            "Investor mapping",
        ],
    },
    {
        icon: Mic,
        title: "Training & Speaking",
        services: [
            "Resilience under uncertainty",
            "Job search clarity",
            "AI workflows",
            "Navigating Finland",
            "Storytelling for professionals",
        ],
    },
];

export function ServicesSection() {
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
        <section id="services" className="relative py-24 md:py-32 bg-[#0a0a0a]">
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
                                Services
                            </span>
                        </h2>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {serviceCategories.map((category, index) => {
                            const Icon = category.icon;
                            return (
                                <motion.div
                                    key={index}
                                    custom={index + 1}
                                    variants={fadeUpVariants}
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true, margin: "-100px" }}
                                    className="p-6 rounded-xl bg-white/[0.03] border border-white/[0.08] hover:bg-white/[0.05] transition-colors"
                                >
                                    <div className="flex items-center gap-3 mb-6">
                                        <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-indigo-500/20 to-rose-500/20 flex items-center justify-center">
                                            <Icon className="w-5 h-5 text-indigo-300" />
                                        </div>
                                        <h3 className="text-xl font-semibold text-white">
                                            {category.title}
                                        </h3>
                                    </div>
                                    <ul className="space-y-3">
                                        {category.services.map((service, serviceIndex) => (
                                            <li
                                                key={serviceIndex}
                                                className="text-white/80 text-sm leading-relaxed flex items-start gap-2"
                                            >
                                                <span className="text-indigo-300 mt-1.5">•</span>
                                                <span>{service}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}

