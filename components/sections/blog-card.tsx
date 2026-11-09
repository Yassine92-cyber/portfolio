"use client";

import { motion } from "framer-motion";
import { BlogPost } from "@/lib/blog-data";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { getReadingTime } from "@/lib/utils";
import { useState } from "react";
import { EditorialCover } from "@/components/ui/editorial-cover";

interface BlogCardProps {
    post: BlogPost;
    index: number;
}

export function BlogCard({ post, index }: BlogCardProps) {
    const [imageError, setImageError] = useState(false);
    const useEditorial = !post.thumbnail || imageError;

    const formattedDate = new Date(post.date).toLocaleDateString("en-GB", {
        year: "numeric",
        month: "short",
        day: "numeric",
        timeZone: "UTC",
    });
    const readingTime = getReadingTime(post.content ?? post.excerpt);

    return (
        <motion.article
            data-reveal=""
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: Math.min(index, 8) * 0.04, ease: [0.22, 1, 0.36, 1] }}
            layout
            className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-line bg-ink-2 transition-colors duration-300 hover:border-paper/25"
        >
            <div className="relative aspect-[16/10] w-full overflow-hidden bg-surface">
                {useEditorial ? (
                    <EditorialCover title={post.title} category={post.category} compact />
                ) : (
                    <>
                        <Image
                            src={post.thumbnail!}
                            alt=""
                            fill
                            className="object-cover transition-transform duration-700 group-hover:scale-[1.03] motion-reduce:transition-none"
                            onError={() => setImageError(true)}
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        />
                        <div
                            className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink-2/70 via-transparent to-transparent"
                            aria-hidden="true"
                        />
                    </>
                )}
            </div>

            <div className="flex flex-1 flex-col p-6 md:p-7">
                <p className="flex flex-wrap items-center gap-x-3 gap-y-1 font-mono text-xs text-paper/60">
                    <span className="text-violet-300">{post.category}</span>
                    <span aria-hidden="true">·</span>
                    <time dateTime={post.date}>{formattedDate}</time>
                    <span aria-hidden="true">·</span>
                    <span>{readingTime} min read</span>
                </p>

                <h2 className="mt-4 font-display text-[1.375rem] leading-snug text-paper">
                    <Link
                        href={`/blog/${post.slug}`}
                        className="rounded-sm after:absolute after:inset-0 after:content-[''] group-hover:text-violet-100"
                    >
                        {post.title}
                    </Link>
                </h2>

                <p className="mt-3 line-clamp-3 flex-1 text-[0.9375rem] leading-relaxed text-paper/70">
                    {post.excerpt}
                </p>

                <div className="mt-6 flex items-center justify-between border-t border-line pt-5">
                    <span className="text-sm font-medium text-paper" aria-hidden="true">
                        Read article
                    </span>
                    <a
                        href={post.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="relative z-10 inline-flex items-center gap-1 rounded-md px-2 py-1 text-xs text-paper/60 transition-colors hover:text-paper"
                        aria-label={`Read ${post.title} on LinkedIn (opens in a new tab)`}
                    >
                        LinkedIn <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
                    </a>
                </div>
            </div>
        </motion.article>
    );
}
