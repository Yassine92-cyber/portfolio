"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { projects } from "@/lib/portfolio-data";

interface ProjectCardProps {
    project: typeof projects[0];
    index: number;
    className?: string;
}

export function ProjectCard({ project, index, className }: ProjectCardProps) {
    return (
        <motion.article
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className={cn(
                "group relative flex flex-col h-full bg-white/[0.03] border border-white/[0.08] rounded-3xl overflow-hidden hover:border-white/20 transition-colors duration-300",
                index % 2 === 1 ? "md:mt-12" : "",
                className
            )}
        >
            {/* Image Container */}
            <div className="relative aspect-[16/9] overflow-hidden">
                <div className="absolute inset-0 bg-indigo-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 mix-blend-overlay" />
                <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
            </div>

            {/* Content */}
            <div className="flex flex-col flex-grow p-8">
                <div className="mb-6">
                    <div className="flex items-center justify-between mb-2">
                        <h3 className="text-2xl font-bold text-white group-hover:text-indigo-300 transition-colors">
                            {project.title}
                        </h3>
                        <span className="text-xs font-medium text-white/40 border border-white/10 px-2 py-1 rounded-full">
                            {project.context}
                        </span>
                    </div>
                    <p className="text-indigo-400 font-medium text-sm mb-4">
                        {project.role}
                    </p>
                    <p className="text-white/70 leading-relaxed">
                        {project.description}
                    </p>
                </div>

                <div className="mt-auto pt-6 border-t border-white/5">
                    <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag, i) => (
                            <motion.span
                                key={tag}
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.1 * i + 0.5 }}
                                className="px-3 py-1 text-xs font-medium rounded-full bg-white/5 text-white/60 border border-white/5 group-hover:border-white/10 group-hover:text-white/90 transition-colors"
                            >
                                {tag}
                            </motion.span>
                        ))}
                    </div>
                </div>
            </div>
        </motion.article>
    );
}

