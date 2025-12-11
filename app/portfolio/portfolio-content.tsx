"use client";

import { motion } from "framer-motion";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { projects } from "@/lib/portfolio-data";
import { ProjectCard } from "@/components/ui/project-card";

export function PortfolioPageContent() {
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
        <section className="relative py-12 md:py-16 pt-32 md:pt-40">
            <div className="container mx-auto px-4 md:px-6">
                <div className="max-w-6xl mx-auto">
                    <Breadcrumbs items={[{ label: "Portfolio" }]} />
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
                                Selected Work
                            </span>
                        </h1>
                        <p className="text-white/60 text-lg max-w-2xl mx-auto">
                            A showcase of my recent projects and community contributions
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {projects.map((project, index) => (
                            <ProjectCard key={project.title} project={project} index={index} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}


