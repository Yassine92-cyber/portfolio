"use client";

import { motion } from "framer-motion";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { BlogPost } from "@/lib/blog-data";
import { ShareButtons } from "@/components/ui/share-buttons";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { EditorialCover } from "@/components/ui/editorial-cover";
import { getReadingTime } from "@/lib/utils";
import { absoluteUrl } from "@/lib/site";

function BlogThumbnail({ src, alt }: { src: string; alt: string }) {
    const [imageError, setImageError] = useState(false);

    if (imageError) {
        return (
            <div className="flex h-full w-full items-center justify-center bg-surface">
                <span className="font-display text-6xl text-paper/20" aria-hidden="true">YK.</span>
            </div>
        );
    }

    return (
        <Image
            src={src}
            alt={alt}
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 1024px"
            className="object-cover"
            onError={() => setImageError(true)}
            unoptimized
        />
    );
}

export function BlogPostContent({ post }: { post: BlogPost }) {
    const formattedDate = new Date(post.date).toLocaleDateString("en-GB", {
        year: "numeric",
        month: "long",
        day: "numeric",
        timeZone: "UTC",
    });
    const readingTime = getReadingTime(post.content ?? post.excerpt);

    return (
        <>
            <Breadcrumbs
                items={[
                    { label: "Writing", href: "/blog" },
                    { label: post.title },
                ]}
            />

            <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
                <header className="mx-auto mt-10 max-w-3xl md:mt-14">
                    <p className="flex flex-wrap items-center gap-x-3 gap-y-1 font-mono text-xs text-paper/65">
                        <span className="text-violet-300">{post.category}</span>
                        <span aria-hidden="true">·</span>
                        <time dateTime={post.date}>{formattedDate}</time>
                        <span aria-hidden="true">·</span>
                        <span>{readingTime} min read</span>
                    </p>
                    <h1 className="mt-6 text-display-lg text-paper">{post.title}</h1>
                </header>

                <div className="relative mx-auto mt-12 aspect-[16/9] w-full max-w-5xl overflow-hidden rounded-3xl border border-line bg-surface">
                    {post.thumbnail ? (
                        <BlogThumbnail src={post.thumbnail} alt="" />
                    ) : (
                        <EditorialCover title={post.title} category={post.category} />
                    )}
                </div>

                <div className="mx-auto mt-12 max-w-2xl">
                    <p className="text-lede text-paper/90">{post.excerpt}</p>
                    {post.content && (
                        <p className="mt-6 text-lg leading-relaxed text-paper/80">{post.content}</p>
                    )}

                    <aside className="mt-12 rounded-3xl border border-line bg-surface p-7 md:p-8">
                        <p className="eyebrow text-paper/65">Full article</p>
                        <p className="mt-3 text-paper/80">
                            This piece was first published on LinkedIn, where the full text and discussion live.
                        </p>
                        <a
                            href={post.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mt-6 inline-flex min-h-[44px] items-center gap-2 rounded-full bg-paper px-6 py-3 text-[0.9375rem] font-medium text-ink transition-colors hover:bg-violet-100"
                        >
                            Read on LinkedIn
                            <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                            <span className="sr-only">(opens in a new tab)</span>
                        </a>
                    </aside>

                    <div className="mt-10 flex flex-col gap-8 border-t border-line pt-8">
                        <ShareButtons
                            title={post.title}
                            url={absoluteUrl(`/blog/${post.slug}`)}
                            description={post.excerpt}
                        />
                        <Link
                            href="/blog"
                            className="inline-flex items-center gap-2 self-start text-sm text-paper/75 hover:text-paper"
                        >
                            <ArrowLeft className="h-4 w-4" aria-hidden="true" />
                            All writing
                        </Link>
                    </div>
                </div>
            </motion.div>
        </>
    );
}
