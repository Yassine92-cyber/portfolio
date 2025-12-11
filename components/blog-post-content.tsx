"use client";

import { motion } from "framer-motion";
import { Calendar, ExternalLink, ArrowLeft, FileText } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { BlogPost } from "@/lib/blog-data";
import { ShareButtons } from "@/components/ui/share-buttons";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";

function BlogThumbnail({ src, alt }: { src: string; alt: string }) {
    const [imageError, setImageError] = useState(false);

    if (imageError) {
        return (
            <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-indigo-500/10 to-rose-500/10">
                <FileText className="w-12 h-12 text-white/20" aria-hidden="true" />
            </div>
        );
    }

    return (
        <Image
            src={src}
            alt={alt}
            fill
            className="object-cover"
            onError={() => setImageError(true)}
            unoptimized
        />
    );
}

export function BlogPostContent({ post }: { post: BlogPost }) {
    const postDate = new Date(post.date);
    const formattedDate = postDate.toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
    });

    return (
        <>
            <Breadcrumbs
                items={[
                    { label: "Blog", href: "/blog" },
                    { label: post.title },
                ]}
            />

            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            >
                <div className="flex items-center gap-3 mb-6">
                    <span className="px-3 py-1 text-xs rounded-full bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">
                        {post.category}
                    </span>
                    <div className="flex items-center gap-2 text-white/50 text-sm">
                        <Calendar className="w-4 h-4" aria-hidden="true" />
                        <time dateTime={post.date}>{formattedDate}</time>
                    </div>
                </div>

                <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                    {post.title}
                </h1>

                <div className="relative w-full h-64 md:h-96 rounded-xl overflow-hidden mb-8 bg-gradient-to-br from-indigo-500/20 to-rose-500/20 border border-white/[0.08]">
                    <BlogThumbnail src={post.thumbnail} alt={post.title} />
                </div>

                <div className="prose prose-invert prose-lg max-w-none mb-8">
                    <p className="text-white/80 text-lg leading-relaxed mb-6">{post.excerpt}</p>
                    {post.content && (
                        <p className="text-white/80 text-lg leading-relaxed mb-8">{post.content}</p>
                    )}
                </div>

                <div className="space-y-6 mb-8">
                    <ShareButtons
                        title={post.title}
                        url={`https://yassinekaddouri.com/blog/${post.slug}`}
                        description={post.excerpt}
                    />
                    <div className="p-6 rounded-xl bg-white/[0.03] border border-white/[0.08]">
                        <p className="text-white/60 text-sm mb-4">Read the full post on LinkedIn:</p>
                        <a
                            href={post.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-gradient-to-r from-indigo-500 to-rose-500 text-white font-medium hover:from-indigo-600 hover:to-rose-600 transition-all focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-white/[0.03] rounded"
                            aria-label={`Read ${post.title} on LinkedIn`}
                        >
                            Read on LinkedIn
                            <ExternalLink className="w-4 h-4" aria-hidden="true" />
                        </a>
                    </div>
                </div>
            </motion.div>
        </>
    );
}

