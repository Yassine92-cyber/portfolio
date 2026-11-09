"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { links, primaryNav } from "@/lib/site";

export function Navigation() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const pathname = usePathname();
    const toggleRef = useRef<HTMLButtonElement>(null);
    const firstLinkRef = useRef<HTMLAnchorElement>(null);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 24);
        onScroll();
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    const [menuPath, setMenuPath] = useState(pathname);
    if (menuPath !== pathname) {
        setMenuPath(pathname);
        setIsOpen(false);
    }

    useEffect(() => {
        if (!isOpen) return;
        const previousOverflow = document.body.style.overflow;
        document.body.style.overflow = "hidden";
        firstLinkRef.current?.focus();

        const onKeyDown = (event: KeyboardEvent) => {
            if (event.key === "Escape") {
                setIsOpen(false);
                toggleRef.current?.focus();
            }
        };
        window.addEventListener("keydown", onKeyDown);
        return () => {
            document.body.style.overflow = previousOverflow;
            window.removeEventListener("keydown", onKeyDown);
        };
    }, [isOpen]);

    const isActive = (href: string) => pathname === href || pathname.startsWith(`${href}/`);

    return (
        <header
            className={cn(
                "fixed inset-x-0 top-0 z-50 transition-[background-color,border-color] duration-300",
                isOpen
                    ? "border-b border-line bg-ink"
                    : scrolled
                      ? "border-b border-line bg-ink/85 backdrop-blur-xl"
                      : "border-b border-transparent bg-transparent"
            )}
        >
            <nav className="page-shell flex h-16 items-center justify-between md:h-20" aria-label="Main navigation">
                <Link
                    href="/"
                    className="group flex items-baseline gap-3 text-paper"
                    aria-label="Yassine Kaddouri, Ph.D. — home"
                >
                    <span className="font-display text-2xl leading-none tracking-tight">
                        YK<span className="text-violet-400">.</span>
                    </span>
                    <span className="hidden text-sm text-paper/70 transition-colors group-hover:text-paper sm:inline">
                        Yassine Kaddouri, Ph.D.
                    </span>
                </Link>

                <div className="hidden items-center gap-1 md:flex">
                    <ul className="flex items-center gap-1">
                        {primaryNav.map((item) => {
                            const active = isActive(item.href);
                            return (
                                <li key={item.href}>
                                    <Link
                                        href={item.href}
                                        aria-current={active ? "page" : undefined}
                                        className={cn(
                                            "relative rounded-full px-4 py-2 text-sm transition-colors",
                                            active ? "text-paper" : "text-paper/65 hover:text-paper"
                                        )}
                                    >
                                        {item.label}
                                        {active && (
                                            <motion.span
                                                layoutId="nav-active"
                                                className="absolute inset-x-4 -bottom-0.5 h-px bg-violet-400"
                                                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                                            />
                                        )}
                                    </Link>
                                </li>
                            );
                        })}
                    </ul>
                    <Link
                        href={links.contact}
                        className="ml-4 rounded-full border border-paper/20 px-5 py-2 text-sm text-paper transition-colors hover:border-paper/50 hover:bg-paper/[0.05]"
                    >
                        Contact
                    </Link>
                </div>

                <button
                    ref={toggleRef}
                    type="button"
                    onClick={() => setIsOpen((open) => !open)}
                    className="-mr-2 inline-flex h-11 w-11 items-center justify-center rounded-full text-paper md:hidden"
                    aria-label={isOpen ? "Close menu" : "Open menu"}
                    aria-expanded={isOpen}
                    aria-controls="mobile-menu"
                >
                    {isOpen ? <X className="h-6 w-6" aria-hidden="true" /> : <Menu className="h-6 w-6" aria-hidden="true" />}
                </button>
            </nav>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        id="mobile-menu"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.25 }}
                        className="fixed inset-x-0 bottom-0 top-16 overflow-y-auto bg-ink md:hidden"
                    >
                        <div className="page-shell flex min-h-full flex-col justify-between pb-10 pt-8">
                            <ul className="flex flex-col">
                                {[...primaryNav, { label: "Contact", href: links.contact }].map((item, index) => {
                                    const active = isActive(item.href);
                                    return (
                                        <li key={item.href} className="border-b border-line">
                                            <Link
                                                ref={index === 0 ? firstLinkRef : undefined}
                                                href={item.href}
                                                onClick={() => setIsOpen(false)}
                                                aria-current={active ? "page" : undefined}
                                                className={cn(
                                                    "flex items-baseline justify-between py-5 font-display text-4xl tracking-tight",
                                                    active ? "text-paper" : "text-paper/75"
                                                )}
                                            >
                                                {item.label}
                                                <span className="font-mono text-xs text-paper/60" aria-hidden="true">
                                                    {String(index + 1).padStart(2, "0")}
                                                </span>
                                            </Link>
                                        </li>
                                    );
                                })}
                            </ul>
                            <div className="mt-10 flex flex-col gap-4 text-paper/75">
                                <a
                                    href={links.orinavis}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2"
                                >
                                    Orinavis <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                                </a>
                                <a
                                    href={links.linkedin}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2"
                                >
                                    LinkedIn <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                                </a>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}
