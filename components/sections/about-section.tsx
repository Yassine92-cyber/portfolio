"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { cn } from "@/lib/utils";

export function AboutSection() {
    const [imageError, setImageError] = useState(false);

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
        <section id="about" className="relative py-24 md:py-32 bg-[#030303]">
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
                                About Yassine
                            </span>
                        </h2>
                    </motion.div>

                    <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-center md:items-start mb-12">
                        <motion.div
                            custom={1}
                            variants={fadeUpVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-100px" }}
                            className="flex-shrink-0"
                        >
                            <div className="relative w-48 h-48 md:w-56 md:h-56 rounded-full overflow-hidden ring-4 ring-white/10 ring-offset-4 ring-offset-[#030303] shadow-2xl bg-gradient-to-br from-indigo-500/20 to-rose-500/20 flex items-center justify-center">
                                {!imageError ? (
                                    <Image
                                        src="/images/yassine.png"
                                        alt="Yassine Kaddouri"
                                        fill
                                        className="object-cover"
                                        sizes="(max-width: 768px) 192px, 224px"
                                        priority
                                        onError={() => setImageError(true)}
                                    />
                                ) : (
                                    <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-indigo-500/30 to-rose-500/30">
                                        <span className="text-4xl md:text-5xl font-bold text-white/90">YK</span>
                                    </div>
                                )}
                            </div>
                        </motion.div>

                        <motion.div
                            custom={2}
                            variants={fadeUpVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-100px" }}
                            className="flex-1 text-center md:text-left"
                        >
                            <p className="text-white/80 text-lg leading-relaxed mb-4">
                                Postdoc researcher turned B2B SaaS business developer and community builder. I help people and teams go from 0→1 and turn noise into signal.
                            </p>
                            <p className="text-white/80 text-lg leading-relaxed mb-4">
                                I've contributed in Finnish startup ecosystem like Slush, Junction, Arctic15, Maria 01 – helping activate communities, match founders and investors, and run programs for hundreds of participants.
                            </p>
                            <p className="text-white/80 text-lg leading-relaxed">
                                My work focuses on helping founders move from idea to traction, supporting international talent find clarity and opportunities, and designing programs that feel human. I bring structured thinking from research, empathy from peer support, and storytelling from building a 14,000+ person LinkedIn audience.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}

