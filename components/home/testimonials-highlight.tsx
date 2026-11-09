import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { testimonials } from "@/lib/testimonials-data";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { links } from "@/lib/site";
import { cn } from "@/lib/utils";

const featuredNames = ["Marina Repina", "Marii Juht", "Sinan Saka"];

type Testimonial = (typeof testimonials)[number];

function Attribution({ person, large = false }: { person: Testimonial; large?: boolean }) {
  const context = [person.role, person.company].filter(Boolean).join(", ");
  return (
    <figcaption className="flex items-center gap-4">
      <span className={cn("relative shrink-0 overflow-hidden rounded-full bg-surface", large ? "h-14 w-14" : "h-11 w-11")}>
        <Image src={person.image} alt="" fill sizes="56px" className="object-cover" />
      </span>
      <span>
        <span className="block font-medium text-paper">{person.name}</span>
        {context && <span className="block text-sm text-paper/65">{context}</span>}
      </span>
    </figcaption>
  );
}

export function TestimonialsHighlight() {
  const featured = featuredNames
    .map((name) => testimonials.find((t) => t.name === name))
    .filter((t): t is Testimonial => Boolean(t));
  const [lead, ...others] = featured;

  return (
    <section id="testimonials" aria-labelledby="testimonials-title" className="border-t border-line py-24 md:py-32">
      <div className="page-shell">
        <SectionHeading
          id="testimonials-title"
          eyebrow="Recommendations"
          title={
            <>
              In the words of <span className="text-paper/55">people I&apos;ve worked with.</span>
            </>
          }
        />

        <div className="mt-16 grid gap-12 lg:grid-cols-12 lg:gap-16">
          {lead && (
            <Reveal className="lg:col-span-7">
              <figure className="flex h-full flex-col">
                <span aria-hidden="true" className="font-display text-7xl leading-none text-violet-400/70">
                  &ldquo;
                </span>
                <blockquote className="mt-2 font-display text-[clamp(1.25rem,1.05rem+0.6vw,1.5625rem)] leading-[1.5] text-paper/95">
                  {lead.content}
                </blockquote>
                <div className="mt-10">
                  <Attribution person={lead} large />
                </div>
              </figure>
            </Reveal>
          )}

          <div className="flex flex-col gap-10 lg:col-span-5 lg:border-l lg:border-line lg:pl-12">
            {others.map((person, index) => (
              <Reveal key={person.name} delay={0.08 * (index + 1)}>
                <figure className="border-t border-line pt-8 first:border-t-0 first:pt-0 max-lg:first:border-t max-lg:first:pt-8">
                  <blockquote className="leading-relaxed text-paper/85">&ldquo;{person.content}&rdquo;</blockquote>
                  <div className="mt-6">
                    <Attribution person={person} />
                  </div>
                </figure>
              </Reveal>
            ))}

            <a
              href={links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-[0.9375rem] text-paper/80 hover:text-paper"
            >
              More recommendations on LinkedIn
              <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              <span className="sr-only">(opens in a new tab)</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
