"use client";

import { motion } from "framer-motion";
import { BlogPost } from "@/lib/blog-data";
import { Calendar, Clock, ExternalLink, Linkedin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { getReadingTime } from "@/lib/utils";
import { useState } from "react";

interface BlogCardProps {
    post: BlogPost;
    index: number;
}

export function BlogCard({ post, index }: BlogCardProps) {
    const [imageError, setImageError] = useState(false);

    const postDate = new Date(post.date);
    const formattedDate = postDate.toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
    });

    const fadeUpVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: (i: number) => ({
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5,
                delay: i * 0.05,
                ease: [0.25, 0.4, 0.25, 1],
            },
        }),
    };

    return (
        <motion.article
            custom={index}
            variants={fadeUpVariants}
            initial="hidden"
            animate="visible"
            layout
            className="group flex flex-col h-full rounded-2xl bg-white/[0.03] border border-white/[0.08] hover:bg-white/[0.05] hover:border-indigo-500/30 hover:shadow-lg hover:shadow-indigo-500/10 transition-all duration-300 overflow-hidden"
        >
            {/* Thumbnail */}
            <div className="relative aspect-[16/9] w-full overflow-hidden bg-[#0a0a0a]">
                {!imageError ? (
                    <Image
                        src={post.thumbnail}
                        alt={`Thumbnail for ${post.title}`}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                        onError={() => setImageError(true)}
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                ) : (
                    <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-indigo-500/10 to-rose-500/10">
                        <span className="text-white/20 text-sm font-medium">No Image</span>
                    </div>
                )}
                
                {/* Category Badge */}
                <div className="absolute top-4 left-4 z-10">
                    <span className="px-3 py-1 text-xs font-medium rounded-full bg-black/60 backdrop-blur-md border border-white/10 text-white shadow-sm">
                        {post.category}
                    </span>
                </div>
            </div>

            {/* Content */}
            <div className="flex flex-col flex-1 p-6">
                {/* Meta */}
                <div className="flex items-center gap-4 text-xs text-white/50 mb-3">
                    <div className="flex items-center gap-1.5">
                        <Calendar className="w-3.5 h-3.5" />
                        <time dateTime={post.date}>{formattedDate}</time>
                    </div>
                    <div className="flex items-center gap-1.5">
                        <Clock className="w-3.5 h-3.5" />
                        <span>1 min read</span>
                    </div>
                </div>

                {/* Title */}
                <h2 className="text-lg font-bold text-white mb-2 line-clamp-2 group-hover:text-indigo-300 transition-colors">
                    {post.title}
                </h2>

                {/* Description */}
                <p className="text-sm text-white/60 line-clamp-3 mb-6 flex-1">
                    {post.excerpt}
                </p>

                {/* Footer / CTA */}
                <div className="flex items-center justify-between mt-auto pt-4 border-t border-white/10">
                    {/* Primary CTA: Check if internal URL exists or placeholder */}
                    <Link
                        href={`/blog/${post.slug}`} 
                        className="text-sm font-medium text-white hover:text-indigo-300 transition-colors flex items-center gap-1"
                    >
                        Read more
                    </Link>

                    {/* Source / External Link */}
                    <a
                        href={post.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 text-xs text-white/40 hover:text-indigo-400 transition-colors px-2 py-1 rounded-md hover:bg-white/5"
                        aria-label={`Read ${post.title} on LinkedIn`}
                    >
                        <Linkedin className="w-3.5 h-3.5" />
                        <span>LinkedIn</span>
                        <ExternalLink className="w-3 h-3" />
                    </a>
                </div>
            </div>
        </motion.article>
    );
}

