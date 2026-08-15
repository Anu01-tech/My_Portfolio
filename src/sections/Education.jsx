import { GraduationCap } from "lucide-react";
import SectionHeader from "../components/SectionHeader";
import Reveal from "../components/Reveal";
import { education } from "../data/experience";

export default function Education() {
  return (
    <section id="education" className="section-shell py-24 sm:py-32">
      <SectionHeader eyebrow="07 · Education" title="Academic background." />

      <div className="mt-12 space-y-5">
        {education.map((e, i) => (
          <Reveal key={i} delay={i * 0.08} className="card p-6 flex gap-4">
            <div className="h-10 w-10 rounded-xl bg-signal-blue/10 flex items-center justify-center shrink-0">
              <GraduationCap size={18} className="text-signal-blue" />
            </div>
            <div>
              <h3 className="font-display font-semibold text-ink-100">{e.degree}</h3>
              <p className="text-sm text-signal-cyan mt-1">{e.institution}</p>
              <p className="text-xs text-ink-500 font-mono mt-1">{e.duration}</p>
              <p className="mt-3 text-sm text-ink-300 leading-relaxed">{e.detail}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
