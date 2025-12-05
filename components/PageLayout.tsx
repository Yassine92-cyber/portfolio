"use client";

import { ReactNode } from "react";
import Navigation from "./Navigation";
import SkipToContent from "./SkipToContent";

interface PageLayoutProps {
  children: ReactNode;
  className?: string;
}

export default function PageLayout({ children, className = "" }: PageLayoutProps) {
  return (
    <>
      <SkipToContent />
      <Navigation />
      <main className={`pt-16 md:pt-20 ${className}`}>
        {children}
      </main>
    </>
  );
}

