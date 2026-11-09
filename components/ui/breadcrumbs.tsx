"use client";

import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

export function Breadcrumbs({ items }: BreadcrumbsProps) {
  return (
    <nav aria-label="Breadcrumb">
      <ol className="flex flex-wrap items-center gap-2 font-mono text-xs uppercase tracking-[0.12em] text-paper/60">
        <li>
          <Link
            href="/"
            className="inline-flex items-center gap-1 rounded transition-colors hover:text-paper"
            aria-label="Home"
          >
            <Home className="h-3.5 w-3.5" aria-hidden="true" />
            <span className="sr-only">Home</span>
          </Link>
        </li>
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return (
            <li key={index} className="flex items-center gap-2">
              <ChevronRight className="h-3.5 w-3.5 text-paper/40" aria-hidden="true" />
              {isLast ? (
                <span className="block max-w-[28ch] truncate text-paper/85 sm:max-w-[48ch]" aria-current="page">
                  {item.label}
                </span>
              ) : (
                <Link
                  href={item.href || "#"}
                  className="rounded transition-colors hover:text-paper"
                >
                  {item.label}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}

