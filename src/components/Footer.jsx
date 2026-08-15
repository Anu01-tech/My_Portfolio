import { Github, Linkedin, PenLine } from "lucide-react";
import { profile } from "../data/profile";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-line">
      <div className="section-shell py-10 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="text-center sm:text-left">
          <p className="font-display font-semibold text-ink-100">{profile.displayName}</p>
          <p className="text-xs text-ink-500 mt-1">AI/ML Developer</p>
        </div>

        <div className="flex items-center gap-5">
          <a href={profile.links.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="text-ink-500 hover:text-signal-cyan transition-colors">
            <Github size={18} />
          </a>
          <a href={profile.links.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="text-ink-500 hover:text-signal-cyan transition-colors">
            <Linkedin size={18} />
          </a>
          <a href={profile.links.medium} target="_blank" rel="noreferrer" aria-label="Medium" className="text-ink-500 hover:text-signal-cyan transition-colors">
            <PenLine size={18} />
          </a>
        </div>

        <div className="text-center sm:text-right">
          <p className="text-xs text-ink-500">© {year} {profile.name}</p>
          <p className="font-mono text-[11px] text-ink-700 mt-1">Always learning. Always building.</p>
        </div>
      </div>
    </footer>
  );
}
