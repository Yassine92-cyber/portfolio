import { ArrowUpRight, Linkedin, Mail } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";
import { contactEmail, links } from "@/lib/site";

const actionBase =
  "group inline-flex min-h-14 w-full items-center justify-center gap-3 rounded-full px-7 py-4 text-base font-medium transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-400 focus-visible:ring-offset-2 focus-visible:ring-offset-ink";

const topics = ["Partnerships", "Collaborations", "Speaking", "Professional conversations"];

export function Contact() {
  return (
    <section id="contact" aria-labelledby="contact-title" className="relative overflow-hidden border-t border-line py-24 md:py-32">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-48 left-1/2 h-[36rem] w-[60rem] -translate-x-1/2 rounded-full bg-violet-400/[0.06] blur-3xl"
      />
      <div className="page-shell relative grid gap-16 lg:grid-cols-12">
        <Reveal className="lg:col-span-5">
          <p className="eyebrow mb-6 flex items-center gap-3">
            <span className="h-px w-8 bg-violet-400" aria-hidden="true" />
            Contact
          </p>
          <h2 id="contact-title" className="text-display-lg text-paper">
            Let&apos;s build something <em className="italic text-warm-300">meaningful.</em>
          </h2>
          <p className="mt-6 max-w-md text-lede text-paper/80">
            Partnerships, collaborations, speaking opportunities, and professional conversations.
          </p>

          <ul className="mt-8 flex flex-wrap gap-2" aria-label="Topics">
            {topics.map((topic) => (
              <li key={topic} className="rounded-full border border-paper/15 px-3.5 py-1.5 text-sm text-paper/75">
                {topic}
              </li>
            ))}
          </ul>

          <dl className="mt-12 space-y-5 border-t border-line pt-8">
            <div className="flex items-baseline justify-between gap-6">
              <dt className="eyebrow text-paper/60">LinkedIn</dt>
              <dd>
                <a
                  href={links.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-underline inline-flex items-center gap-1.5 text-paper"
                >
                  in/dr-yassine92 <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                  <span className="sr-only">(opens in a new tab)</span>
                </a>
              </dd>
            </div>
            <div className="flex items-baseline justify-between gap-6">
              <dt className="eyebrow text-paper/60">Company</dt>
              <dd>
                <a
                  href={links.orinavis}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-underline inline-flex items-center gap-1.5 text-paper"
                >
                  orinavis.com <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                  <span className="sr-only">(opens in a new tab)</span>
                </a>
              </dd>
            </div>
            <div className="flex items-baseline justify-between gap-6">
              <dt className="eyebrow text-paper/60">Based in</dt>
              <dd className="text-paper">Helsinki, Finland</dd>
            </div>
          </dl>
        </Reveal>

        <Reveal delay={0.1} className="lg:col-span-6 lg:col-start-7">
          <div id="contact-actions" className="rounded-[1.75rem] border border-line bg-surface p-6 sm:p-8 md:p-10">
            <h3 className="font-display text-display-sm text-paper">Start a conversation</h3>
            <p className="mt-4 max-w-md text-paper/70">
              For partnerships, collaborations, speaking and professional conversations.
            </p>
            <div className="mt-8 flex flex-col gap-4">
              {contactEmail ? (
                <a
                  href={`mailto:${contactEmail}`}
                  aria-label={`Email me at ${contactEmail}`}
                  className={`${actionBase} bg-paper text-ink hover:bg-violet-100`}
                >
                  <Mail className="h-5 w-5" aria-hidden="true" />
                  Email Me
                </a>
              ) : null}
              <a
                href={links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Connect on LinkedIn (opens in a new tab)"
                className={
                  contactEmail
                    ? `${actionBase} border border-paper/20 text-paper hover:border-paper/50 hover:bg-paper/[0.04]`
                    : `${actionBase} bg-paper text-ink hover:bg-violet-100`
                }
              >
                <Linkedin className="h-5 w-5" aria-hidden="true" />
                Connect on LinkedIn
                <ArrowUpRight
                  className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-px"
                  aria-hidden="true"
                />
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
