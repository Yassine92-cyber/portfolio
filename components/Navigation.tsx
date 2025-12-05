"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { trackLinkClick } from "./Analytics";
import ThemeToggle from "./ThemeToggle";

interface NavItem {
  name: string;
  href: string;
}

const navItems: NavItem[] = [
  { name: "Home", href: "/" },
  { name: "Journey", href: "/journey" },
  { name: "Services", href: "/services" },
  { name: "Testimonials", href: "/testimonials" },
  { name: "Publications", href: "/publications" },
  { name: "Blog", href: "/blog" },
  { name: "Store", href: "/store" },
  { name: "Contact", href: "/contact" },
];

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }
    return pathname?.startsWith(href);
  };

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-clarity-white/95 dark:bg-gray-900/95 backdrop-blur-md border-b border-bridge-blue/10 dark:border-gray-700 shadow-lg"
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo/Name */}
          <Link
            href="/"
            className="flex items-center h-12 md:h-14 hover:opacity-80 transition-opacity"
            onClick={() => trackLinkClick("Navigation: Home", "/")}
            aria-label="Home"
          >
            <Image
              src="/bridge-builder.png"
              alt="Bridge-builder - Bridges that create opportunities"
              width={200}
              height={56}
              className="h-10 md:h-12 w-auto object-contain"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => {
              const active = isActive(item.href);
              const handleClick = () => {
                trackLinkClick(`Navigation: ${item.name}`, item.href);
              };
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                    active
                      ? "text-signal-teal bg-signal-teal/10 dark:bg-signal-teal/20"
                      : "text-kind-gray dark:text-gray-300 hover:text-bridge-blue dark:hover:text-signal-teal hover:bg-warm-blush/30 dark:hover:bg-gray-800"
                  }`}
                  onClick={handleClick}
                >
                  {item.name}
                </Link>
              );
            })}
            <ThemeToggle />
            <a
              href="https://linkedin.com/in/yassinekaddouri"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-2 px-4 py-2 bg-signal-teal text-white rounded-lg text-sm font-medium hover:bg-signal-teal/90 transition-all shadow-lg hover:shadow-xl"
              onClick={() => trackLinkClick("Navigation: LinkedIn", "https://linkedin.com/in/yassinekaddouri")}
            >
              Connect
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-kind-gray hover:text-bridge-blue transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
            aria-expanded={isMobileMenuOpen}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden bg-clarity-white/98 dark:bg-gray-900/98 backdrop-blur-md border-t border-bridge-blue/10 dark:border-gray-700"
          >
            <div className="px-6 py-4 space-y-2">
              {navItems.map((item) => {
                const active = isActive(item.href);
                const handleClick = () => {
                  setIsMobileMenuOpen(false);
                  trackLinkClick(`Navigation: ${item.name}`, item.href);
                };
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`block px-4 py-3 rounded-lg text-base font-medium transition-colors ${
                      active
                        ? "text-signal-teal bg-signal-teal/10 dark:bg-signal-teal/20"
                        : "text-kind-gray dark:text-gray-300 hover:text-bridge-blue dark:hover:text-signal-teal hover:bg-warm-blush/30 dark:hover:bg-gray-800"
                    }`}
                    onClick={handleClick}
                  >
                    {item.name}
                  </Link>
                );
              })}
              <div className="flex items-center justify-center gap-4 mt-4">
                <ThemeToggle />
                <a
                  href="https://linkedin.com/in/yassinekaddouri"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 px-4 py-3 bg-signal-teal text-white rounded-lg text-base font-medium text-center hover:bg-signal-teal/90 transition-all"
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    trackLinkClick("Navigation: LinkedIn", "https://linkedin.com/in/yassinekaddouri");
                  }}
                >
                  Connect on LinkedIn
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}

