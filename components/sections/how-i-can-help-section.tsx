"use client";

import { motion } from "framer-motion";
import { Heart, Target, Mic, FileText, Linkedin, Rocket } from "lucide-react";

const services = [
    {
        icon: Heart,
        title: "Peer Support and Integration Coaching",
        description: "Warm, structured conversations for people navigating change, relocation, or uncertainty. Grounded in training from MIELI, ADHD Liitto, and the Finnish Refugee Council.",
    },
    {
        icon: Target,
        title: "Career Clarity Coaching and Strategic Networking",
        description: "My 0→1 clarity framework helps you define your direction, communicate your story, and build a purposeful network.",
    },
    {
        icon: Mic,
        title: "Public Speaking and Workshops",
        description: "Talks and interactive sessions for universities, accelerators, and organizations. Focused on clarity, integration, resilience, community, and storytelling.",
    },
    {
        icon: FileText,
        title: "Scientific and Technical Writing",
        description: "Clear, precise writing for researchers, labs, educators, and industry. Includes papers, reviews, grant proposals, SOPs, reports, and scientific storytelling.",
    },
    {
        icon: Linkedin,
        title: "Content Strategy and LinkedIn Positioning",
        description: "Helping professionals, founders, and jobseekers transform their stories into visible, clear signals that attract the right audience.",
    },
    {
        icon: Rocket,
        title: "Lead Generation and Sales Development",
        description: "Structured systems for early-stage startups including ICP definition, market research, lead sourcing, outreach scripts, CRM workflows, and commercial clarity.",
    },
];

export function HowICanHelpSection() {
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
        <section id="how-i-can-help" className="relative py-12 md:py-16 bg-[#0a0a0a]">
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
                            Here are the core services I offer to individuals and organizations.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
                                    className="p-6 rounded-xl bg-white/[0.03] border border-white/[0.08] hover:bg-white/[0.05] transition-colors"
                                >
                                    <div className="mb-4">
                                        <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-indigo-500/20 to-rose-500/20 flex items-center justify-center">
                                            <Icon className="w-6 h-6 text-indigo-300" />
                                        </div>
                                    </div>
                                    <h3 className="text-xl font-semibold text-white mb-3">
                                        {service.title}
                                    </h3>
                                    <p className="text-white/80 text-sm leading-relaxed">
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

