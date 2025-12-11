"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Linkedin, Mail, ArrowUp, MapPin } from "lucide-react";
import { cn } from "@/lib/utils";

export function Footer() {
    const currentYear = new Date().getFullYear();

    const navLinks = [
        { label: "My Journey", href: "/my-journey" },
        { label: "Projects", href: "/portfolio" },
        { label: "Publications", href: "/publications" },
        { label: "Blog", href: "/blog" },
        { label: "Store", href: "/store" },
    ];

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <footer className="relative bg-[#030303] border-t border-white/[0.08] pt-16 pb-8 overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-indigo-500/5 rounded-full blur-[120px] pointer-events-none" />

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
                    {/* Brand Column */}
                    <div className="col-span-1 md:col-span-2 space-y-4">
                        <Link 
                            href="/" 
                            className="text-2xl font-bold tracking-tight text-white hover:opacity-80 transition-opacity"
                        >
                            Yassine Kaddouri, Ph.D
                        </Link>
                        <p className="text-white/60 max-w-sm leading-relaxed">
                            Postdoc researcher turned B2B SaaS business developer and community builder. Bridging scientific insight, human connection, and AI-driven progress.
                        </p>
                    </div>

                    {/* Navigation Column */}
                    <div className="space-y-4">
                        <h3 className="text-sm font-semibold text-white uppercase tracking-wider">
                            Explore
                        </h3>
                        <nav className="flex flex-col space-y-3">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    className="text-white/60 hover:text-indigo-400 transition-colors text-sm w-fit"
                                >
                                    {link.label}
                                </Link>
                            ))}
                        </nav>
                    </div>

                    {/* Connect Column */}
                    <div className="space-y-4">
                        <h3 className="text-sm font-semibold text-white uppercase tracking-wider">
                            Connect
                        </h3>
                        <div className="flex flex-col space-y-3">
                            <a
                                href="https://www.linkedin.com/in/dr-yassine92"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 text-white/60 hover:text-indigo-400 transition-colors text-sm w-fit"
                            >
                                <Linkedin className="w-4 h-4" />
                                LinkedIn
                            </a>
                            {/* 
                            <a
                                href="mailto:yassine.kaddouri@example.com"
                                className="inline-flex items-center gap-2 text-white/60 hover:text-indigo-400 transition-colors text-sm w-fit"
                            >
                                <Mail className="w-4 h-4" />
                                Email Me
                            </a>
                            */}
                            <div className="inline-flex items-center gap-2 text-white/60 text-sm w-fit">
                                <MapPin className="w-4 h-4" />
                                Helsinki, Finland
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-white/[0.08] flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-white/40">
                    <p>
                        &copy; {currentYear} Yassine Kaddouri. All rights reserved.
                    </p>
                    
                    <button 
                        onClick={scrollToTop}
                        className="flex items-center gap-2 hover:text-white transition-colors"
                    >
                        Back to top
                        <ArrowUp className="w-3 h-3" />
                    </button>
                </div>
            </div>
        </footer>
    );
}

