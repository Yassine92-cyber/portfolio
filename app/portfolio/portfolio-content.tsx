import { ArrowUpRight } from "lucide-react";
import { caseStudies, hasLiveLink, orinavis, projects } from "@/lib/portfolio-data";
import { PageHeader } from "@/components/ui/page-header";
import { ButtonLink } from "@/components/ui/button-link";
import { Reveal } from "@/components/ui/reveal";
import { CaseStudyCard } from "@/components/home/selected-work";

export function PortfolioPageContent() {
    return (
        <div className="page-shell pb-24 pt-28 md:pb-32 md:pt-36">
            <PageHeader
                crumb="Work"
                eyebrow="Work"
                title={
                    <>
                        One company, <em className="font-display italic text-warm-300">and the work before it.</em>
                    </>
                }
                intro="Orinavis is what I am building now. The ventures, pipelines, communities and research below are where its ideas were tested first."
            />

            <section aria-labelledby="flagship-title" className="py-16 md:py-24">
                <Reveal>
                    <article className="grid gap-10 overflow-hidden rounded-[2rem] border border-line bg-surface p-7 sm:p-10 md:p-14 lg:grid-cols-12">
                        <div className="lg:col-span-6">
                            <p className="eyebrow flex items-center gap-3 text-violet-300">
                                <span className="h-px w-8 bg-violet-400" aria-hidden="true" />
                                Flagship · {orinavis.role}
                            </p>
                            <h2 id="flagship-title" className="mt-5 text-display-md text-paper">
                                {orinavis.name}
                            </h2>
                            <p className="mt-2 text-lede text-paper/75">{orinavis.tagline}</p>
                            <p className="mt-6 inline-flex items-center gap-2 rounded-full border border-paper/15 px-4 py-1.5 font-mono text-xs text-paper/80">
                                <span className="h-1.5 w-1.5 rounded-full bg-warm-400" aria-hidden="true" />
                                {orinavis.status}
                            </p>
                            <p className="mt-8 max-w-xl leading-relaxed text-paper/80">{orinavis.problem}</p>
                            <div className="mt-8 flex flex-wrap gap-3">
                                <ButtonLink href={orinavis.url}>Visit orinavis.com</ButtonLink>
                                <ButtonLink href="/#orinavis" variant="secondary">
                                    Why I founded it
                                </ButtonLink>
                            </div>
                        </div>
                        <ul className="divide-y divide-line self-end border-y border-line lg:col-span-5 lg:col-start-8">
                            {orinavis.pillars.map((pillar) => (
                                <li key={pillar.title} className="py-6">
                                    <div className="flex items-center justify-between gap-4">
                                        <h3 className="font-medium text-paper">{pillar.title}</h3>
                                        <span className="rounded-full bg-violet-400/10 px-2.5 py-1 font-mono text-[0.6875rem] uppercase tracking-wider text-violet-200">
                                            {pillar.status}
                                        </span>
                                    </div>
                                    <p className="mt-2 text-[0.9375rem] leading-relaxed text-paper/70">{pillar.body}</p>
                                </li>
                            ))}
                        </ul>
                    </article>
                </Reveal>
            </section>

            <section aria-labelledby="case-studies-title" className="border-t border-line py-16 md:py-24">
                <div className="grid gap-6 lg:grid-cols-12 lg:items-end">
                    <div className="lg:col-span-8">
                        <p className="eyebrow mb-5 flex items-center gap-3">
                            <span className="h-px w-8 bg-violet-400" aria-hidden="true" />
                            Before Orinavis
                        </p>
                        <h2 id="case-studies-title" className="text-display-md text-paper">
                            Selected work
                        </h2>
                    </div>
                    <p className="max-w-md text-paper/70 lg:col-span-4">
                        Outcomes as recorded at the time, with my role in each.
                    </p>
                </div>
                <div className="mt-12 grid gap-6 md:grid-cols-2">
                    {caseStudies.map((study, index) => (
                        <Reveal key={study.title} delay={(index % 2) * 0.06}>
                            <CaseStudyCard study={study} />
                        </Reveal>
                    ))}
                </div>
            </section>

            <section aria-labelledby="experiments-title" className="border-t border-line pt-14 md:pt-20">
                <div className="grid gap-8 lg:grid-cols-12">
                    <div className="lg:col-span-4">
                        <p className="eyebrow flex items-center gap-3 text-paper/70">
                            <span className="h-px w-8 bg-paper/30" aria-hidden="true" />
                            Side experiments
                        </p>
                        <h2 id="experiments-title" className="mt-4 font-display text-display-sm text-paper">
                            Custom GPTs
                        </h2>
                        <p className="mt-3 max-w-sm text-[0.9375rem] leading-relaxed text-paper/70">
                            Small AI tools built while learning to prototype with language models.
                        </p>
                    </div>
                    <ul className="divide-y divide-line border-y border-line lg:col-span-8">
                        {projects.map((project) => (
                            <li key={project.title} className="grid gap-3 py-6 sm:grid-cols-[11rem_1fr] sm:gap-8">
                                <div>
                                    <h3 className="font-medium text-paper">{project.title}</h3>
                                    <p className="mt-1 font-mono text-xs text-paper/60">{project.context}</p>
                                    <p className="mt-1 text-xs text-violet-300">{project.role}</p>
                                </div>
                                <div>
                                    <p className="text-[0.9375rem] leading-relaxed text-paper/75">{project.description}</p>
                                    <div className="mt-4 flex flex-wrap items-center justify-between gap-3">
                                        <ul className="flex flex-wrap gap-x-3 gap-y-1 text-xs text-paper/60" aria-label="Tags">
                                            {project.tags.map((tag) => (
                                                <li key={tag}>{tag}</li>
                                            ))}
                                        </ul>
                                        {hasLiveLink(project) ? (
                                            <a
                                                href={project.link}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="inline-flex min-h-11 items-center gap-1.5 text-sm font-medium text-paper hover:text-violet-200"
                                            >
                                                Open GPT <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                                                <span className="sr-only">{project.title} (opens in a new tab)</span>
                                            </a>
                                        ) : (
                                            <span className="text-sm text-paper/60">Search the GPT store</span>
                                        )}
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </section>
        </div>
    );
}
