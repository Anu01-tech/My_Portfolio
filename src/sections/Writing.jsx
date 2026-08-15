import { ArrowUpRight, PenLine } from "lucide-react";
import SectionHeader from "../components/SectionHeader";
import Reveal from "../components/Reveal";
import { writing } from "../data/experience";
import { profile } from "../data/profile";

export default function Writing() {
  return (
    <section id="writing" className="section-shell py-24 sm:py-32">
      <SectionHeader
        eyebrow="08 · Thoughts & Writing"
        title="Writing, outside of code."
        description="I write occasionally on Medium — mostly reflections, not technical posts. Article links below point to my profile until direct URLs are confirmed."
      />

      <div className="mt-12 grid sm:grid-cols-2 gap-5">
        {writing.map((w, i) => (
          <Reveal key={w.title} delay={i * 0.08} className="card p-6 flex flex-col">
            <PenLine size={18} className="text-signal-violet" />
            <h3 className="font-display font-semibold text-ink-100 mt-4">{w.title}</h3>
            <p className="mt-2 text-sm text-ink-300 leading-relaxed flex-1">{w.description}</p>
            <a
              href={w.url.startsWith("[") ? profile.links.medium : w.url}
              target="_blank"
              rel="noreferrer"
              className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-signal-cyan hover:gap-2.5 transition-all"
            >
              Read article <ArrowUpRight size={15} />
            </a>
          </Reveal>
        ))}
      </div>

      <Reveal delay={0.2} className="mt-8">
        <a href={profile.links.medium} target="_blank" rel="noreferrer" className="btn-secondary">
          View all writing on Medium <ArrowUpRight size={15} />
        </a>
      </Reveal>
    </section>
  );
}
