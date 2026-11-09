import { Breadcrumbs } from "@/components/ui/breadcrumbs";

interface PageHeaderProps {
  crumb: string;
  eyebrow: string;
  title: React.ReactNode;
  intro?: React.ReactNode;
  aside?: React.ReactNode;
}

export function PageHeader({ crumb, eyebrow, title, intro, aside }: PageHeaderProps) {
  return (
    <header className="border-b border-line pb-12 md:pb-16">
      <Breadcrumbs items={[{ label: crumb }]} />
      <div className="mt-10 grid gap-10 md:mt-14 lg:grid-cols-12 lg:items-end">
        <div className="lg:col-span-8">
          <p className="eyebrow mb-5 flex items-center gap-3">
            <span className="h-px w-8 bg-violet-400" aria-hidden="true" />
            {eyebrow}
          </p>
          <h1 className="text-display-lg text-paper">{title}</h1>
          {intro && <p className="mt-6 max-w-2xl text-lede text-paper/75">{intro}</p>}
        </div>
        {aside && <div className="lg:col-span-4 lg:justify-self-end">{aside}</div>}
      </div>
    </header>
  );
}

export function StatList({ items }: { items: { value: React.ReactNode; label: string }[] }) {
  return (
    <dl className="flex gap-10">
      {items.map((item) => (
        <div key={item.label}>
          <dt className="eyebrow mb-2 text-paper/60">{item.label}</dt>
          <dd className="font-display text-4xl text-paper md:text-5xl">{item.value}</dd>
        </div>
      ))}
    </dl>
  );
}
