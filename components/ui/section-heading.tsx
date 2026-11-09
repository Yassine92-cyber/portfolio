import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  eyebrow: string;
  title: React.ReactNode;
  intro?: React.ReactNode;
  action?: React.ReactNode;
  id?: string;
  className?: string;
}

export function SectionHeading({ eyebrow, title, intro, action, id, className }: SectionHeadingProps) {
  return (
    <div className={cn("grid gap-6 md:grid-cols-12 md:items-end", className)}>
      <div className="md:col-span-8">
        <p className="eyebrow mb-5 flex items-center gap-3">
          <span className="h-px w-8 bg-violet-400" aria-hidden="true" />
          {eyebrow}
        </p>
        <h2 id={id} className="text-display-md text-paper">
          {title}
        </h2>
        {intro && <p className="mt-6 max-w-2xl text-lede text-paper/75">{intro}</p>}
      </div>
      {action && <div className="md:col-span-4 md:justify-self-end">{action}</div>}
    </div>
  );
}
