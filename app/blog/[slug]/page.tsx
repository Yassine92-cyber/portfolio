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

    return {
        title: post.title,
        description: post.excerpt,
        openGraph: {
            title: post.title,
            description: post.excerpt,
            type: "article",
            publishedTime: post.date,
            authors: ["Yassine Kaddouri"],
            images: [
                {
                    url: post.thumbnail,
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
            images: [post.thumbnail],
        },
    };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const post = blogPosts.find((p) => p.slug === slug);

    if (!post) {
        return (
            <main className="relative min-h-screen bg-[#030303]">
                <Navigation />
                <section className="relative py-12 md:py-16 pt-32">
                    <div className="container mx-auto px-4 md:px-6">
                        <div className="max-w-4xl mx-auto text-center">
                            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">Post Not Found</h1>
                            <p className="text-white/60 mb-8">The blog post you're looking for doesn't exist.</p>
                            <Link
                                href="/blog"
                                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-gradient-to-r from-indigo-500 to-rose-500 text-white font-medium hover:from-indigo-600 hover:to-rose-600 transition-all"
                                aria-label="Back to blog"
                            >
                                <ArrowLeft className="w-4 h-4" aria-hidden="true" />
                                Back to Blog
                            </Link>
                        </div>
                    </div>
                </section>
            </main>
        );
    }

    return (
        <main className="relative min-h-screen bg-[#030303]">
            <Navigation />
            <article className="relative py-12 md:py-16 pt-32">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="max-w-4xl mx-auto">
                        <BlogPostContent post={post} />
                    </div>
                </div>
            </article>
        </main>
    );
}
