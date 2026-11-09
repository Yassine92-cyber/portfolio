import { absoluteUrl, ogImage } from "@/lib/site";
import { Navigation } from "@/components/Navigation";
import { blogPosts } from "@/lib/blog-data";
import { BlogPostContent } from "@/components/blog-post-content";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import type { Metadata } from "next";

export async function generateStaticParams() {
    return blogPosts.map((post) => ({
        slug: post.slug,
    }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
    const { slug } = await params;
    const post = blogPosts.find((p) => p.slug === slug);

    if (!post) {
        return {
            title: "Post Not Found",
            description: "The blog post you're looking for doesn't exist.",
        };
    }

    const url = absoluteUrl(`/blog/${post.slug}`);

    return {
        title: post.title,
        description: post.excerpt,
        alternates: {
            canonical: url,
        },
        openGraph: {
            title: post.title,
            description: post.excerpt,
            url,
            type: "article",
            publishedTime: post.date,
            authors: ["Yassine Kaddouri"],
            images: [
                {
                    url: post.thumbnail ?? ogImage.url,
                    width: 1200,
                    height: 630,
                    alt: post.title,
                },
            ],
        },
        twitter: {
            card: "summary_large_image",
            title: post.title,
            description: post.excerpt,
            images: [post.thumbnail ?? ogImage.url],
        },
    };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const post = blogPosts.find((p) => p.slug === slug);

    if (!post) {
        return (
            <>
                <Navigation />
                <main id="main-content" className="relative min-h-screen bg-ink">
                    <div className="page-shell pb-24 pt-36 text-center">
                        <h1 className="text-display-lg text-paper">Post not found</h1>
                        <p className="mx-auto mb-10 mt-5 max-w-md text-paper/70">The blog post you&apos;re looking for doesn&apos;t exist.</p>
                        <Link
                            href="/blog"
                            className="inline-flex items-center gap-2 rounded-full bg-paper px-6 py-3 font-medium text-ink transition-colors hover:bg-violet-100"
                        >
                            <ArrowLeft className="h-4 w-4" aria-hidden="true" />
                            Back to writing
                        </Link>
                    </div>
                </main>
            </>
        );
    }

    return (
        <>
            <Navigation />
            <main id="main-content" className="relative min-h-screen bg-ink">
                <article className="page-shell pb-24 pt-28 md:pb-32 md:pt-36">
                    <BlogPostContent post={post} />
                </article>
            </main>
        </>
    );
}
