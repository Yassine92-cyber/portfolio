import Image from "next/image";
import { credentialGroups, credentialLogos } from "@/lib/profile-data";
import { Reveal } from "@/components/ui/reveal";

export function Credibility() {
  return (
    <section aria-labelledby="credibility-title" className="border-y border-line bg-ink-2 py-16 md:py-20">
      <div className="page-shell">
        <div className="mb-12 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <h2 id="credibility-title" className="font-sans text-base font-medium text-paper">
            Roles held across research, industry and the startup ecosystem
          </h2>
          <p className="text-sm text-paper/60">Organisations listed by role. No endorsement implied.</p>
        </div>

        <div className="grid gap-x-10 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
          {credentialGroups.map((group, groupIndex) => (
            <Reveal key={group.label} delay={groupIndex * 0.06}>
              <div className="border-t border-line pt-5">
                <p className="eyebrow text-paper/80">{group.label}</p>
                <p className="mt-1 text-xs text-paper/60">{group.note}</p>
                <ul className="mt-6 space-y-5">
                  {group.items.map((item) => (
                    <li key={item.org}>
                      <span className="block text-[0.9375rem] font-medium leading-snug text-paper">{item.org}</span>
                      <span className="mt-0.5 block text-sm leading-snug text-paper/65">
                        {item.role} <span className="text-paper/55">· {item.period}</span>
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>

        <ul
          className="mt-14 grid grid-cols-3 items-center gap-x-6 gap-y-8 border-t border-line pt-10 sm:grid-cols-5 lg:flex lg:justify-between"
          aria-label="Logos of organisations named above"
        >
          {credentialLogos.map((logo) => (
            <li key={logo.src} className="relative h-9 w-full lg:w-28">
              <Image
                src={logo.src}
                alt={logo.name}
                fill
                sizes="112px"
                className="object-contain opacity-55 brightness-0 invert transition-opacity duration-300 hover:opacity-90"
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
