import Image from "next/image";
import { ArrowUpRight, MapPin } from "lucide-react";
import { ButtonLink } from "@/components/ui/button-link";
import { links } from "@/lib/site";

export function Hero() {
  return (
    <section
      id="hero"
      aria-labelledby="hero-title"
      className="relative overflow-hidden pb-20 pt-28 md:pb-28 md:pt-36 lg:pt-40"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(60rem_40rem_at_85%_-10%,rgba(146,134,255,0.10),transparent_60%),radial-gradient(40rem_30rem_at_-10%_110%,rgba(228,171,174,0.06),transparent_60%)]"
      />

      <div className="page-shell relative grid gap-12 lg:grid-cols-12 lg:gap-8">
        <div className="animate-in fade-in slide-in-from-bottom-4 fill-mode-both duration-700 ease-out lg:col-span-7 lg:pt-10">
          <p className="eyebrow mb-8 flex flex-wrap items-center gap-x-3 gap-y-2">
            <span className="h-px w-8 bg-violet-400" aria-hidden="true" />
            Founder & CEO <span aria-hidden="true" className="text-violet-400">·</span> Scientist
            <span aria-hidden="true" className="text-violet-400">·</span> Builder
          </p>

          <h1 id="hero-title" className="max-w-[13ch] text-display-xl text-paper">
            Building clearer paths from skills to{" "}
            <em className="font-display italic text-warm-300">opportunity.</em>
          </h1>
        </div>

        <figure
          className="animate-in fade-in slide-in-from-bottom-6 fill-mode-both delay-100 duration-1000 ease-out relative mx-auto w-full max-w-[22rem] sm:max-w-[26rem] lg:col-span-5 lg:row-span-2 lg:mx-0 lg:max-w-none lg:justify-self-end"
        >
          <div className="relative w-full overflow-hidden rounded-t-full border border-line bg-gradient-to-b from-surface via-surface/70 to-ink-2 px-[9%] pb-8 pt-[9%] lg:w-[min(100%,30rem)]">
            <div className="relative aspect-square w-full">
              <span
                aria-hidden="true"
                className="absolute -inset-[5%] rounded-full border border-paper/10"
              />
              <Image
                src="/images/yassine-portrait.webp"
                alt="Portrait of Yassine Kaddouri"
                fill
                priority
                sizes="(min-width: 1024px) 26rem, (min-width: 640px) 22rem, 80vw"
                className="rounded-full object-cover"
              />
            </div>
            <figcaption className="mt-8 flex items-end justify-between gap-4 border-t border-line pt-5">
              <span>
                <span className="block font-display text-xl text-paper">Yassine Kaddouri, Ph.D.</span>
                <span className="mt-1 block text-sm text-paper/70">Founder & CEO, Orinavis</span>
              </span>
              <span className="inline-flex shrink-0 items-center gap-1.5 font-mono text-xs text-paper/60">
                <MapPin className="h-3.5 w-3.5" aria-hidden="true" />
                Helsinki
              </span>
            </figcaption>
          </div>
        </figure>

        <div className="animate-in fade-in slide-in-from-bottom-4 fill-mode-both delay-200 duration-700 ease-out lg:col-span-7">
          <p className="max-w-xl text-lede text-paper/80">
            I&apos;m Yassine Kaddouri, Ph.D., founder of Orinavis. I bring together scientific thinking,
            technology, and human-centered design to build practical solutions.
          </p>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
            <ButtonLink href={links.orinavis}>Explore Orinavis</ButtonLink>
            <ButtonLink href="/portfolio" variant="secondary">
              View my work
            </ButtonLink>
          </div>

          <ul className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-3 text-sm text-paper/70">
            <li>
              <a
                href={links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="link-underline inline-flex items-center gap-1.5 hover:text-paper"
              >
                LinkedIn
                <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
                <span className="sr-only">(opens in a new tab)</span>
              </a>
            </li>
            <li>
              <a href="#contact" className="link-underline hover:text-paper">
                Get in touch
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
