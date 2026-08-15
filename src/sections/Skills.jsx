import SectionHeader from "../components/SectionHeader";
import Reveal from "../components/Reveal";
import { skillGroups } from "../data/skills";

const levelDot = {
  comfortable: "bg-signal-cyan",
  working: "bg-signal-blue",
  learning: "bg-signal-violet",
};

const levelLabel = {
  comfortable: "Comfortable",
  working: "Working knowledge",
  learning: "Currently learning",
};

export default function Skills() {
  return (
    <section id="skills" className="section-shell py-24 sm:py-32">
      <SectionHeader
        eyebrow="02 · Skills"
        title="Tools I reach for."
        description="Grouped by what they're for, not ranked by a made-up percentage. The dot shows how deep my hands-on experience actually goes."
      />

      <div className="mt-12 grid sm:grid-cols-2 gap-5">
        {skillGroups.map((group, gi) => (
          <Reveal key={group.title} delay={gi * 0.08} className="card p-6">
            <h3 className="font-display font-semibold text-lg text-ink-100">{group.title}</h3>
            <p className="mt-1 text-sm text-ink-500">{group.description}</p>
            <div className="mt-5 flex flex-wrap gap-2">
              {group.items.map((item) => (
                <span
                  key={item.name}
                  title={levelLabel[item.level]}
                  className="tag flex items-center gap-1.5 normal-case text-[12px] py-1.5"
                >
                  <span className={`h-1.5 w-1.5 rounded-full ${levelDot[item.level]}`} />
                  {item.name}
                </span>
              ))}
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal delay={0.2} className="mt-6 flex flex-wrap gap-4 text-xs text-ink-500 font-mono">
        <span className="flex items-center gap-1.5">
          <span className="h-1.5 w-1.5 rounded-full bg-signal-cyan" /> Comfortable
        </span>
        <span className="flex items-center gap-1.5">
          <span className="h-1.5 w-1.5 rounded-full bg-signal-blue" /> Working knowledge
        </span>
        <span className="flex items-center gap-1.5">
          <span className="h-1.5 w-1.5 rounded-full bg-signal-violet" /> Currently learning
        </span>
      </Reveal>
    </section>
  );
}
