import SectionHeader from "../components/SectionHeader";
import Reveal from "../components/Reveal";
import { experience } from "../data/experience";

export default function Experience() {
  return (
    <section id="experience" className="section-shell py-24 sm:py-32">
      <SectionHeader
        eyebrow="04 · Experience"
        title="Where I've applied this."
        description="This section grows as internships, fellowships, and hackathons happen — placeholders below are ready to be filled in."
      />

      <div className="mt-12 relative">
        <div className="absolute left-[7px] top-2 bottom-2 w-px bg-line hidden sm:block" />
        <div className="space-y-8">
          {experience.map((e, i) => (
            <Reveal key={i} delay={i * 0.08} className="relative sm:pl-10">
              <span className="hidden sm:block absolute left-0 top-1.5 h-3.5 w-3.5 rounded-full bg-base-950 border-2 border-signal-cyan" />
              <div className="card p-6">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <h3 className="font-display font-semibold text-lg text-ink-100">{e.role}</h3>
                  <span className="tag">{e.type}</span>
                </div>
                <p className="text-sm text-signal-cyan mt-1">{e.org}</p>
                <p className="text-xs text-ink-500 font-mono mt-1">{e.duration}</p>

                <ul className="mt-4 space-y-2">
                  {e.responsibilities.map((r, ri) => (
                    <li key={ri} className="flex gap-3 text-sm text-ink-300 leading-relaxed">
                      <span className="h-1.5 w-1.5 rounded-full bg-ink-700 mt-2 shrink-0" />
                      {r}
                    </li>
                  ))}
                </ul>

                <div className="mt-4 flex flex-wrap gap-1.5">
                  {e.technologies.map((t) => (
                    <span key={t} className="tag">
                      {t}
                    </span>
                  ))}
                </div>

                <p className="mt-4 text-sm text-ink-500 border-t border-line pt-4">
                  <span className="text-ink-300 font-medium">Outcome — </span>
                  {e.outcome}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
