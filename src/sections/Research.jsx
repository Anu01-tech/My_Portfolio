import { FlaskConical } from "lucide-react";
import SectionHeader from "../components/SectionHeader";
import Reveal from "../components/Reveal";
import { research } from "../data/experience";

export default function Research() {
  return (
    <section id="research" className="section-shell py-24 sm:py-32">
      <SectionHeader
        eyebrow="05 · Research"
        title="Questions I keep coming back to."
        description="Projects are what I build. This is what I'm actually curious about underneath them."
      />

      <div className="mt-12 grid lg:grid-cols-3 gap-5">
        {research.map((r, i) => (
          <Reveal key={r.title} delay={i * 0.1} className="card p-6 flex flex-col">
            <FlaskConical size={20} className="text-signal-violet" />
            <h3 className="font-display font-semibold text-ink-100 mt-4">{r.title}</h3>
            <p className="mt-3 text-sm text-ink-300 leading-relaxed flex-1">{r.summary}</p>
            <div className="mt-5 flex flex-wrap gap-1.5">
              {r.tags.map((t) => (
                <span key={t} className="tag">
                  {t}
                </span>
              ))}
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
