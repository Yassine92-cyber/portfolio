import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

type Variant = "primary" | "secondary" | "quiet";

interface ButtonLinkProps {
  href: string;
  children: React.ReactNode;
  variant?: Variant;
  className?: string;
  ariaLabel?: string;
}

const variants: Record<Variant, string> = {
  primary:
    "bg-paper text-ink hover:bg-violet-100 px-6 py-3.5",
  secondary:
    "border border-paper/20 text-paper hover:border-paper/50 hover:bg-paper/[0.04] px-6 py-3.5",
  quiet: "text-paper/80 hover:text-paper px-0 py-2",
};

export function ButtonLink({ href, children, variant = "primary", className, ariaLabel }: ButtonLinkProps) {
  const external = /^https?:\/\//.test(href);
  const Icon = external ? ArrowUpRight : ArrowRight;
  const classes = cn(
    "group inline-flex items-center justify-center gap-2 rounded-full text-[0.9375rem] font-medium transition-colors duration-300",
    variants[variant],
    className
  );
  const content = (
    <>
      <span>{children}</span>
      <Icon
        className="h-4 w-4 transition-transform duration-300 ease-editorial group-hover:translate-x-0.5 group-hover:-translate-y-px"
        aria-hidden="true"
      />
      {external && <span className="sr-only">(opens in a new tab)</span>}
    </>
  );

  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={classes} aria-label={ariaLabel}>
        {content}
      </a>
    );
  }

  return (
    <Link href={href} className={classes} aria-label={ariaLabel}>
      {content}
    </Link>
  );
}
