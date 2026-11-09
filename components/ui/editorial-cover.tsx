import { cn } from "@/lib/utils";

interface EditorialCoverProps {
  title: string;
  category: string;
  className?: string;
  compact?: boolean;
}

export function EditorialCover({ title, category, className, compact = false }: EditorialCoverProps) {
  return (
    <div
      aria-hidden="true"
      className={cn(
        "relative flex h-full w-full flex-col justify-between overflow-hidden bg-ink-2",
        "bg-[radial-gradient(ellipse_at_top_right,rgba(167,139,250,0.16),transparent_55%),linear-gradient(160deg,#14131a_0%,#0c0b10_55%,#17141c_100%)]",
        className
      )}
    >
      <div className="pointer-events-none absolute inset-0 opacity-40 [background-image:linear-gradient(to_right,rgba(246,244,240,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(246,244,240,0.05)_1px,transparent_1px)] [background-size:28px_28px]" />
      <div className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-violet-400/15 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-20 left-8 h-40 w-40 rounded-full bg-warm-400/10 blur-3xl" />

      <div className={cn("relative z-10", compact ? "p-5" : "p-7 md:p-8")}>
        <p className="eyebrow text-violet-300">{category}</p>
      </div>

      <div className={cn("relative z-10", compact ? "p-5 pt-0" : "p-7 pt-0 md:p-8")}>
        <p
          className={cn(
            "font-display leading-snug text-paper",
            compact ? "text-xl" : "text-2xl md:text-3xl"
          )}
        >
          {title}
        </p>
      </div>
    </div>
  );
}
