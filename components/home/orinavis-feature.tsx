import { orinavis } from "@/lib/portfolio-data";
import { ButtonLink } from "@/components/ui/button-link";
import { Reveal } from "@/components/ui/reveal";

const narrative = [
  { label: "The problem", body: orinavis.problem },
  { label: "Why I founded it", body: orinavis.whyFounded },
  { label: "Who it is for", body: orinavis.users },
];

export function OrinavisFeature() {
  return (
    <section id="orinavis" aria-labelledby="orinavis-title" className="relative py-24 md:py-32">
      <div className="page-shell">
        <div className="relative overflow-hidden border-y border-line bg-surface px-5 py-14 max-sm:-mx-5 sm:rounded-[2rem] sm:border sm:px-10 md:px-14 md:py-20 lg:px-20">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-40 -top-40 h-[32rem] w-[32rem] rounded-full bg-violet-400/[0.07] blur-3xl"
          />

          <div className="relative grid gap-12 lg:grid-cols-12">
            <Reveal className="lg:col-span-7">
              <p className="eyebrow mb-6 flex flex-wrap items-center gap-3">
                <span className="h-px w-8 bg-violet-400" aria-hidden="true" />
                Flagship · {orinavis.role} · {orinavis.company}
              </p>
              <h2 id="orinavis-title" className="text-display-lg text-paper">
                Building <em className="italic text-violet-300">Orinavis.</em>
              </h2>
              <p className="mt-6 max-w-xl text-lede text-paper/80">
                {orinavis.tagline}: one shared workspace where coaches and their clients turn scattered
                career effort into visible progress.
              </p>
            </Reveal>

            <Reveal delay={0.1} className="flex flex-col gap-6 lg:col-span-5 lg:items-end lg:justify-end">
              <p className="inline-flex items-center gap-2 rounded-full border border-paper/15 px-4 py-2 font-mono text-xs text-paper/80">
                <span className="h-1.5 w-1.5 rounded-full bg-warm-400" aria-hidden="true" />
                {orinavis.status}
              </p>
              <ButtonLink href={orinavis.url}>Visit orinavis.com</ButtonLink>
            </Reveal>
          </div>

          <div className="relative mt-16 grid gap-x-12 gap-y-10 border-t border-line pt-12 md:grid-cols-3">
            {narrative.map((item, index) => (
              <Reveal key={item.label} delay={index * 0.05}>
                <h3 className="eyebrow mb-3 text-paper/70">{item.label}</h3>
                <p className="text-[1.0625rem] leading-relaxed text-paper/85">{item.body}</p>
              </Reveal>
            ))}
          </div>

          <div className="relative mt-16 grid gap-10 xl:grid-cols-12">
            <div className="xl:col-span-4">
              <h3 className="font-display text-display-sm text-paper">The approach</h3>
              <ol className="mt-6 space-y-2 font-mono text-sm text-paper/70" aria-label="The Orinavis loop">
                {orinavis.loop.map((step, index) => (
                  <li key={step} className="flex gap-3">
                    <span className="text-violet-300">{String(index + 1).padStart(2, "0")}</span>
                    {step}
                  </li>
                ))}
              </ol>
            </div>

            <ul className="grid gap-px overflow-hidden rounded-2xl border border-line bg-line lg:grid-cols-3 xl:col-span-8">
              {orinavis.pillars.map((pillar) => (
                <li key={pillar.title} className="flex flex-col bg-surface p-6">
                  <span className="mb-6 inline-flex w-fit items-center gap-1.5 rounded-full bg-violet-400/10 px-2.5 py-1 font-mono text-[0.6875rem] uppercase tracking-wider text-violet-200">
                    {pillar.status}
                  </span>
                  <h4 className="text-lg font-medium text-paper">{pillar.title}</h4>
                  <p className="mt-3 text-[0.9375rem] leading-relaxed text-paper/75">{pillar.body}</p>
                </li>
              ))}
            </ul>
          </div>

          <div className="relative mt-10 rounded-2xl border border-dashed border-paper/15 p-6 md:flex md:items-start md:gap-8">
            <p className="eyebrow mb-3 shrink-0 text-warm-300 md:mb-0 md:w-40">Product vision</p>
            <p className="text-[0.9375rem] leading-relaxed text-paper/75">{orinavis.vision}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
