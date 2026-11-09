"use client";

import Link from "next/link";
import { ArrowUp, ArrowUpRight } from "lucide-react";
import { links, primaryNav } from "@/lib/site";

export function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="border-t border-line bg-ink">
            <div className="page-shell py-16 md:py-20">
                <div className="grid grid-cols-2 gap-x-8 gap-y-12 md:grid-cols-12">
                    <div className="col-span-2 md:col-span-6">
                        <Link href="/" className="font-display text-3xl tracking-tight text-paper">
                            Yassine Kaddouri<span className="text-violet-400">.</span>
                        </Link>
                        <p className="mt-3 text-paper/75">Founder & CEO of Orinavis</p>
                        <p className="mt-6 max-w-sm text-[0.9375rem] leading-relaxed text-paper/60">
                            Scientist, business developer and community builder, working on clearer paths from
                            skills to opportunity.
                        </p>
                    </div>

                    <nav className="md:col-span-3" aria-label="Footer navigation">
                        <h2 className="eyebrow mb-5 font-mono text-paper/60">Navigate</h2>
                        <ul className="space-y-3">
                            {primaryNav.map((item) => (
                                <li key={item.href}>
                                    <Link href={item.href} className="text-paper/80 transition-colors hover:text-paper">
                                        {item.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </nav>

                    <div className="md:col-span-3">
                        <h2 className="eyebrow mb-5 font-mono text-paper/60">Connect</h2>
                        <ul className="space-y-3">
                            <li>
                                <a
                                    href={links.linkedin}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-1.5 text-paper/80 transition-colors hover:text-paper"
                                >
                                    LinkedIn <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                                    <span className="sr-only">(opens in a new tab)</span>
                                </a>
                            </li>
                            <li>
                                <Link href={links.contact} className="text-paper/80 transition-colors hover:text-paper">
                                    Contact
                                </Link>
                            </li>
                            <li>
                                <a
                                    href={links.orinavis}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-1.5 text-paper/80 transition-colors hover:text-paper"
                                >
                                    Orinavis <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                                    <span className="sr-only">(opens in a new tab)</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="mt-16 flex flex-col gap-4 border-t border-line pt-8 text-sm text-paper/60 sm:flex-row sm:items-center sm:justify-between">
                    <p>
                        &copy; {currentYear} Yassine Kaddouri. Helsinki, Finland.
                    </p>
                    <button
                        type="button"
                        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                        className="inline-flex w-fit items-center gap-2 transition-colors hover:text-paper"
                    >
                        Back to top <ArrowUp className="h-3.5 w-3.5" aria-hidden="true" />
                    </button>
                </div>
            </div>
        </footer>
    );
}
