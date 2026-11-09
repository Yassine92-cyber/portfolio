import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { publications } from "@/lib/publications-data";
import { blogPosts } from "@/lib/blog-data";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { EditorialCover } from "@/components/ui/editorial-cover";

function selectPublications() {
  const byCitations = [...publications].sort((a, b) => b.citations - a.citations).slice(0, 3);
  const mostRecent = [...publications].sort((a, b) => Number(b.year) - Number(a.year) || b.citations - a.citations)[0];
  const picks = byCitations.includes(mostRecent) ? byCitations : [...byCitations, mostRecent];
  return picks.sort((a, b) => Number(b.year) - Number(a.year));
}

const formatDate = (value: string) =>
  new Date(value).toLocaleDateString("en-GB", { month: "short", year: "numeric", timeZone: "UTC" });

export function ResearchWriting() {
  const selected = selectPublications();
  const latestPosts = [...blogPosts].sort((a, b) => b.date.localeCompare(a.date)).slice(0, 3);
  const totalCitations = publications.reduce((sum, pub) => sum + pub.citations, 0);
  const firstAuthor = publications.filter((pub) => pub.firstAuthor).length;

  return (
    <section id="research" aria-labelledby="research-title" className="py-24 md:py-32">
      <div className="page-shell">
        <SectionHeading
          id="research-title"
          eyebrow="Research & writing"
          title={
            <>
              Peer-reviewed science, <span className="text-paper/55">and notes from the field.</span>
            </>
          }
        />

        <div className="mt-16 grid gap-16 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-7">
            <div className="flex flex-col gap-5 border-b border-line pb-6 sm:flex-row sm:items-end sm:justify-between">
              <h3 className="eyebrow text-paper/80">Selected publications</h3>
              <div className="sm:text-right">
                <dl className="flex gap-8 sm:gap-6 sm:justify-end">
                  {[
                    { label: "Papers", value: publications.length },
                    { label: "Citations", value: totalCitations },
                    { label: "First author", value: firstAuthor },
                  ].map((stat) => (
                    <div key={stat.label}>
                      <dt className="font-mono text-[0.6875rem] uppercase tracking-wider text-paper/60">{stat.label}</dt>
                      <dd className="font-display text-2xl text-paper">{stat.value}</dd>
                    </div>
                  ))}
                </dl>
                <p className="mt-2 font-mono text-[0.6875rem] uppercase tracking-wider text-paper/45">
                  Totals from publications listed on this site
                </p>
              </div>
            </div>

            <ul className="divide-y divide-line">
              {selected.map((pub, index) => (
                <li key={pub.title}>
                  <Reveal delay={index * 0.05} className="grid gap-3 py-7 sm:grid-cols-[4.5rem_1fr]">
                    <span className="font-mono text-sm text-paper/60">{pub.year}</span>
                    <div>
                      <p className="text-lg leading-snug text-paper">{pub.title}</p>
                      <p className="mt-3 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-paper/65">
                        <span className="italic">{pub.journal}</span>
                        <span aria-hidden="true">·</span>
                        <span>{pub.citations} citations</span>
                        {pub.firstAuthor && (
                          <>
                            <span aria-hidden="true">·</span>
                            <span className="text-violet-300">First author</span>
                          </>
                        )}
                      </p>
                    </div>
                  </Reveal>
                </li>
              ))}
            </ul>

            <Link
              href="/publications"
              className="mt-8 inline-flex items-center gap-2 text-[0.9375rem] text-paper hover:text-violet-200"
            >
              All {publications.length} publications <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>

          <div className="lg:col-span-5">
            <div className="flex items-end justify-between gap-6 border-b border-line pb-6">
              <h3 className="eyebrow text-paper/80">Latest writing</h3>
              <span className="font-mono text-xs text-paper/60">{blogPosts.length} articles</span>
            </div>

            <ul className="divide-y divide-line">
              {latestPosts.map((post, index) => (
                <li key={post.slug}>
                  <Reveal delay={index * 0.05}>
                    <Link href={`/blog/${post.slug}`} className="group flex gap-5 py-6">
                      <span className="relative aspect-[4/3] w-24 shrink-0 overflow-hidden rounded-lg bg-surface sm:w-28">
                        {post.thumbnail ? (
                          <Image
                            src={post.thumbnail}
                            alt=""
                            fill
                            sizes="112px"
                            className="object-cover opacity-90 transition duration-500 group-hover:scale-[1.03] group-hover:opacity-100"
                          />
                        ) : (
                          <EditorialCover title={post.title} category={post.category} compact />
                        )}
                      </span>
                      <span className="min-w-0">
                        <span className="font-mono text-xs text-paper/60">
                          {post.category} · {formatDate(post.date)}
                        </span>
                        <span className="mt-2 block leading-snug text-paper transition-colors group-hover:text-violet-200">
                          {post.title}
                        </span>
                      </span>
                    </Link>
                  </Reveal>
                </li>
              ))}
            </ul>

            <Link
              href="/blog"
              className="mt-8 inline-flex items-center gap-2 text-[0.9375rem] text-paper hover:text-violet-200"
            >
              All writing <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
