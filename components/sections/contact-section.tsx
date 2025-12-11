"use client";

import { motion } from "framer-motion";
import { ContactForm } from "@/components/ui/contact-form";
import { ArrowRight, Calendar, Mail, MessageSquare } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

const contactInfo = {
    email: "yassine.kaddouri@example.com", // TODO: Update with your actual email
    linkedin: "www.linkedin.com/in/dr-yassine92",
    location: "Helsinki, Finland — open to remote EU",
};

export function ContactSection() {
    const [activeAction, setActiveAction] = useState<string | null>(null);

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

    const actions = [
        {
            id: "message",
            icon: Mail,
            title: "Send a message",
            description: "Have a specific project or question in mind? Drop me a line.",
            action: () => {
                const element = document.getElementById("contact-form");
                element?.scrollIntoView({ behavior: "smooth" });
                setActiveAction("message");
            },
            cta: "Write message",
        },
        {
            id: "session",
            icon: Calendar,
            title: "Request a session",
            description: "Looking for clarity or strategy? Let's book a dedicated time.",
            action: () => {
                // TODO: Replace with actual booking link or modal
                window.location.href = `mailto:${contactInfo.email}?subject=Request a session`;
            },
            cta: "Book now",
        },
        {
            id: "conversation",
            icon: MessageSquare,
            title: "Start a conversation",
            description: "Not sure where to start? Let's just chat and see where it goes.",
            action: () => {
                window.open(`https://${contactInfo.linkedin}`, '_blank');
            },
            cta: "Connect on LinkedIn",
        },
    ];

    return (
        <section id="contact" className="relative py-16 md:py-24 bg-[#030303] overflow-hidden">
            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-indigo-500/5 rounded-full blur-[100px] pointer-events-none" />

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="max-w-6xl mx-auto">
                    <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-start">
                        {/* Left Side: Copy */}
                        <motion.div
                            custom={0}
                            variants={fadeUpVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-100px" }}
                            className="flex flex-col justify-center"
                        >
                            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8">
                                <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-300 via-white to-rose-300">
                                    Let's Work Together
                                </span>
                            </h2>
                            
                            <div className="space-y-6 text-lg md:text-xl leading-relaxed">
                                <p className="text-white/80">
                                    If you are an international talent searching for clarity, a founder building something ambitious, or an organization supporting people in transition,
                                </p>
                                <p className="text-white font-semibold text-2xl md:text-3xl">
                                    I would be happy to help.
                                </p>
                                <p className="text-white/60">
                                    Send a message, request a session, or simply start a conversation.
                                </p>
                                
                                <motion.div 
                                    className="pt-4"
                                    initial={{ opacity: 0 }}
                                    whileInView={{ opacity: 1 }}
                                    transition={{ delay: 0.6, duration: 1 }}
                                >
                                    <p className="text-white font-medium italic border-l-2 border-indigo-500 pl-4">
                                        Everything begins with one small step.
                                    </p>
                                </motion.div>
                            </div>
                        </motion.div>

                        {/* Right Side: Interactive Actions */}
                        <div className="space-y-8">
                            <div className="grid gap-4">
                                {actions.map((action, index) => {
                                    const Icon = action.icon;
                                    return (
                                        <motion.button
                                            key={action.id}
                                            custom={index + 1}
                                            variants={fadeUpVariants}
                                            initial="hidden"
                                            whileInView="visible"
                                            viewport={{ once: true, margin: "-100px" }}
                                            onClick={action.action}
                                            className="group w-full text-left p-6 rounded-2xl bg-white/[0.03] border border-white/[0.08] hover:bg-white/[0.06] hover:border-indigo-500/30 transition-all duration-300 relative overflow-hidden"
                                        >
                                            <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                            
                                            <div className="relative z-10 flex items-start gap-4">
                                                <div className="p-3 rounded-xl bg-white/5 group-hover:bg-white/10 transition-colors">
                                                    <Icon className="w-6 h-6 text-indigo-300" />
                                                </div>
                                                <div className="flex-1">
                                                    <h3 className="text-lg font-semibold text-white mb-1 group-hover:text-indigo-200 transition-colors">
                                                        {action.title}
                                                    </h3>
                                                    <p className="text-white/60 text-sm mb-4">
                                                        {action.description}
                                                    </p>
                                                    <div className="flex items-center text-sm font-medium text-indigo-400 group-hover:text-indigo-300 group-hover:translate-x-1 transition-all">
                                                        {action.cta}
                                                        <ArrowRight className="w-4 h-4 ml-1" />
                                                    </div>
                                                </div>
                                            </div>
                                        </motion.button>
                                    );
                                })}
                            </div>

                            {/* Contact Form (Conditionally rendered) */}
                            {activeAction === 'message' && (
                                <motion.div
                                    id="contact-form"
                                    initial={{ opacity: 0, height: 0 }}
                                    animate={{ opacity: 1, height: "auto" }}
                                    exit={{ opacity: 0, height: 0 }}
                                    transition={{ duration: 0.5 }}
                                    className="p-8 rounded-2xl bg-white/[0.03] border border-white/[0.08] ring-2 ring-indigo-500/50 shadow-lg shadow-indigo-500/10 overflow-hidden"
                                >
                                    <h3 className="text-xl font-semibold text-white mb-6">
                                        Send a message
                                    </h3>
                                    <ContactForm />
                                </motion.div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
