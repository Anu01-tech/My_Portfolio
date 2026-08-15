import { Award } from "lucide-react";
import SectionHeader from "../components/SectionHeader";
import Reveal from "../components/Reveal";
import { achievements } from "../data/experience";

export default function Achievements() {
  return (
    <section id="achievements" className="section-shell py-24 sm:py-32">
      <SectionHeader
        eyebrow="06 · Achievements"
        title="Recognition along the way."
        description="Certifications, competitions, and milestones — updated as they happen."
      />

      <div className="mt-12 grid sm:grid-cols-2 gap-5">
        {achievements.map((a, i) => (
          <Reveal key={i} delay={i * 0.08} className="card p-6 flex gap-4">
            <div className="h-10 w-10 rounded-xl bg-signal-cyan/10 flex items-center justify-center shrink-0">
              <Award size={18} className="text-signal-cyan" />
            </div>
            <div>
              <div className="flex items-center gap-2 flex-wrap">
                <span className="tag">{a.category}</span>
                <span className="text-xs text-ink-500 font-mono">{a.date}</span>
              </div>
              <h3 className="font-display font-semibold text-ink-100 mt-2">{a.title}</h3>
              <p className="mt-1.5 text-sm text-ink-300 leading-relaxed">{a.description}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
