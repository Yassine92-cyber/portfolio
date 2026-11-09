import { journeyChapters } from "@/lib/profile-data";
import { SectionHeading } from "@/components/ui/section-heading";
import { ButtonLink } from "@/components/ui/button-link";
import { Reveal } from "@/components/ui/reveal";
import { cn } from "@/lib/utils";

export function JourneyOverview() {
  return (
    <section id="journey" aria-labelledby="journey-title" className="border-y border-line bg-ink-2 py-24 md:py-32">
      <div className="page-shell">
        <SectionHeading
          id="journey-title"
          eyebrow="My journey"
          title={
            <>
              From the lab bench <span className="text-paper/55">to the founder&apos;s desk.</span>
            </>
          }
          intro="Four chapters that overlap more than a timeline suggests. Each one added a way of working I still use."
          action={
            <ButtonLink href="/my-journey" variant="secondary">
              The full story
            </ButtonLink>
          }
        />

        <ol className="mt-16 grid gap-0 md:grid-cols-2 lg:grid-cols-4">
          {journeyChapters.map((chapter, index) => {
            const isCurrent = index === journeyChapters.length - 1;
            return (
              <li key={chapter.index} className="relative">
                <Reveal
                  delay={index * 0.08}
                  className={cn(
                    "flex h-full flex-col border-l border-line py-2 pl-6 pr-4 md:pb-10",
                    "max-md:pb-12 lg:pr-8"
                  )}
                >
                  <span
                    aria-hidden="true"
                    className={cn(
                      "absolute -left-[5px] top-3 h-[9px] w-[9px] rounded-full border",
                      isCurrent ? "border-warm-400 bg-warm-400" : "border-paper/40 bg-ink-2"
                    )}
                  />
                  <div className="flex items-baseline justify-between gap-3">
                    <span className="font-mono text-xs text-paper/60">{chapter.index}</span>
                    <span className={cn("font-mono text-xs", isCurrent ? "text-warm-300" : "text-paper/70")}>
                      {chapter.period}
                    </span>
                  </div>
                  <h3 className="mt-6 font-display text-[1.75rem] leading-tight text-paper">{chapter.title}</h3>
                  <p className="mt-4 leading-relaxed text-paper/80">{chapter.summary}</p>
                  <p className="mt-auto pt-6 text-sm leading-relaxed text-paper/60">{chapter.evidence}</p>
                </Reveal>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
