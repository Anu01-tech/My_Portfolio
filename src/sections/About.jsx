import { Sparkles } from "lucide-react";
import SectionHeader from "../components/SectionHeader";
import Reveal from "../components/Reveal";
import { profile } from "../data/profile";

export default function About() {
  return (
    <section id="about" className="section-shell py-24 sm:py-32">
      <SectionHeader eyebrow="01 · About" title="A student who builds while learning." />

      <div className="mt-12 grid lg:grid-cols-[1.4fr_1fr] gap-10">
        <Reveal delay={0.05} className="space-y-5">
          {profile.about.paragraphs.map((p, i) => (
            <p key={i} className="text-ink-300 leading-relaxed text-[15px] sm:text-base">
              {p}
            </p>
          ))}
        </Reveal>

        <Reveal delay={0.15}>
          <div className="card p-6 sticky top-24">
            <div className="flex items-center gap-2 text-signal-cyan mb-4">
              <Sparkles size={16} />
              <span className="font-mono text-xs tracking-wider uppercase">Currently learning</span>
            </div>
            <ul className="space-y-3">
              {profile.currentlyLearning.map((item) => (
                <li key={item} className="flex items-center gap-3 text-sm text-ink-100">
                  <span className="h-1.5 w-1.5 rounded-full bg-signal-cyan/70 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
            <div className="mt-6 pt-5 border-t border-line">
              <p className="text-xs text-ink-500 leading-relaxed">
                {profile.college}
                <br />
                {profile.degree}
                <br />
                Expected graduation: {profile.gradYear}
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
