import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { caseStudies, hasLiveLink, projects, type CaseStudy } from "@/lib/portfolio-data";
import { SectionHeading } from "@/components/ui/section-heading";
import { ButtonLink } from "@/components/ui/button-link";
import { Reveal } from "@/components/ui/reveal";
import { cn } from "@/lib/utils";

export function SelectedWork() {
  const [first, second, ...rest] = caseStudies;

  return (
    <section id="work" aria-labelledby="work-title" className="py-24 md:py-32">
      <div className="page-shell">
        <SectionHeading
          id="work-title"
          eyebrow="Selected work"
          title={
            <>
              Ventures, pipelines, communities <span className="text-paper/55">and research.</span>
            </>
          }
          intro="The work that shaped how I build: starting things, selling them, convening people around them, and testing ideas with evidence."
          action={
            <ButtonLink href="/portfolio" variant="secondary">
              All work
            </ButtonLink>
          }
        />

        <div className="mt-16 grid gap-6 lg:grid-cols-12">
          <Reveal className="lg:col-span-7">
            <CaseStudyCard study={first} featured />
          </Reveal>
          <Reveal delay={0.08} className="lg:col-span-5">
            <CaseStudyCard study={second} featured />
          </Reveal>
          {rest.map((study, index) => (
            <Reveal key={study.title} delay={index * 0.06} className="lg:col-span-6">
              <CaseStudyCard study={study} />
            </Reveal>
          ))}
        </div>

        <AiExperiments />
      </div>
    </section>
  );
}

export function CaseStudyCard({ study, featured = false }: { study: CaseStudy; featured?: boolean }) {
  return (
    <article
      className="group flex h-full flex-col rounded-3xl border border-line bg-ink-2 p-7 transition-colors duration-300 hover:border-paper/20 md:p-9"
    >
      <div className="flex items-center justify-between gap-4">
        <span className="eyebrow text-violet-300">{study.category}</span>
        <span className="font-mono text-xs text-paper/60">{study.period}</span>
      </div>

      <div className={cn("mt-10", featured ? "lg:mt-auto" : "")}>
        <p
          className={cn(
            "font-display leading-none tracking-tight text-paper",
            featured ? "text-[clamp(3.5rem,2.5rem+4vw,6rem)]" : "text-5xl"
          )}
        >
          {study.metric.value}
        </p>
        <p className="mt-2 text-sm text-paper/65">{study.metric.label}</p>
      </div>

      <div className="mt-10 border-t border-line pt-6">
        <h3 className="font-display text-display-sm text-paper">
          {study.href ? (
            <Link href={study.href} className="hover:text-violet-200">
              {study.title}
            </Link>
          ) : (
            study.title
          )}
        </h3>
        <p className="mt-1 text-sm text-paper/65">{study.role}</p>
        <p className="mt-4 leading-relaxed text-paper/80">{study.summary}</p>
        <ul className="mt-5 space-y-2">
          {study.evidence.map((line) => (
            <li key={line} className="flex gap-3 text-[0.9375rem] leading-relaxed text-paper/75">
              <span className="mt-[0.7em] h-px w-3 shrink-0 bg-violet-400" aria-hidden="true" />
              {line}
            </li>
          ))}
        </ul>
        {study.href && (
          <Link
            href={study.href}
            className="mt-6 inline-flex items-center gap-2 text-sm text-paper/80 hover:text-paper"
          >
            See the publications <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        )}
      </div>
    </article>
  );
}

export function AiExperiments({ className }: { className?: string }) {
  return (
    <div className={cn("mt-20 grid gap-8 border-t border-line pt-10 lg:grid-cols-12", className)}>
      <div className="lg:col-span-4">
        <p className="eyebrow text-paper/70">Side experiments</p>
        <h3 className="mt-3 font-display text-display-sm text-paper">Custom GPTs</h3>
        <p className="mt-3 max-w-sm text-[0.9375rem] leading-relaxed text-paper/70">
          Small AI tools I built while learning to prototype with language models.
        </p>
      </div>
      <ul className="divide-y divide-line border-y border-line lg:col-span-8">
        {projects.map((project) => {
          const rowClass = "grid gap-1 py-5 sm:grid-cols-[10rem_1fr_auto] sm:items-center sm:gap-6";
          const details = (
            <>
              <span className="font-medium text-paper">{project.title}</span>
              <span className="text-[0.9375rem] text-paper/70">{project.tags.slice(0, 3).join(" · ")}</span>
            </>
          );
          return (
            <li key={project.title}>
              {hasLiveLink(project) ? (
                <a href={project.link} target="_blank" rel="noopener noreferrer" className={cn("group", rowClass)}>
                  {details}
                  <span className="inline-flex items-center gap-1 text-sm text-paper/70 group-hover:text-paper">
                    Open <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                    <span className="sr-only">{project.title} (opens in a new tab)</span>
                  </span>
                </a>
              ) : (
                <div className={rowClass}>
                  {details}
                  <span className="text-sm text-paper/60">Search the GPT store</span>
                </div>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
