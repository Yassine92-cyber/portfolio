import type { Metadata } from "next";
import { Navigation } from "@/components/Navigation";
import { PageHeader } from "@/components/ui/page-header";
import { ButtonLink } from "@/components/ui/button-link";
import { ogImage, absoluteUrl } from "@/lib/site";

export const metadata: Metadata = {
    title: "Store",
    description: "The Yassine Kaddouri store is coming soon.",
    robots: { index: false, follow: true },
    alternates: {
        canonical: absoluteUrl("/store"),
    },
    openGraph: {
        title: "Store | Yassine Kaddouri",
        description: "The Yassine Kaddouri store is coming soon.",
        url: absoluteUrl("/store"),
        type: "website",
        images: [ogImage],
    },
};

export default function StorePage() {
    return (
        <>
            <Navigation />
            <main id="main-content" className="relative min-h-screen bg-ink">
                <div className="page-shell pb-24 pt-28 md:pb-32 md:pt-36">
                    <PageHeader crumb="Store" eyebrow="Store" title="Store" />
                    <section
                        aria-label="Store status"
                        className="mt-14 rounded-[2rem] border border-dashed border-paper/15 bg-ink-2 px-7 py-16 text-center sm:px-12 md:mt-20 md:py-24"
                    >
                        <p className="eyebrow text-warm-300">Coming Soon</p>
                        <p className="mx-auto mt-5 max-w-xl font-display text-display-sm text-paper">
                            We&apos;re working on something special. Check back soon!
                        </p>
                        <div className="mt-10 flex flex-wrap justify-center gap-3">
                            <ButtonLink href="/portfolio">See my work</ButtonLink>
                            <ButtonLink href="/#contact" variant="secondary">
                                Get in touch
                            </ButtonLink>
                        </div>
                    </section>
                </div>
            </main>
        </>
    );
}
