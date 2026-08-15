import { ArrowUpRight, Github, Star } from "lucide-react";
import SectionHeader from "../components/SectionHeader";
import Reveal from "../components/Reveal";
import { githubStats, selectedRepos } from "../data/github";

export default function GithubSection() {
  return (
    <section className="section-shell py-24 sm:py-32">
      <SectionHeader
        eyebrow="09 · GitHub"
        title="I build in public."
        description={`${githubStats.publicRepos} public repositories, spanning computer vision, machine learning, and applied AI tooling.`}
      />

      <div className="mt-12 grid lg:grid-cols-3 gap-5">
        {selectedRepos.map((repo, i) => (
          <Reveal key={repo.name} delay={i * 0.06} className="card p-6 group">
            <a href={repo.url} target="_blank" rel="noreferrer" className="flex flex-col h-full">
              <div className="flex items-start justify-between">
                <Github size={18} className="text-ink-500" />
                <ArrowUpRight
                  size={16}
                  className="text-ink-500 group-hover:text-signal-cyan group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all"
                />
              </div>
              <h3 className="font-mono text-sm font-medium text-ink-100 mt-4 group-hover:text-signal-cyan transition-colors">
                {repo.name}
              </h3>
              <p className="mt-2 text-sm text-ink-300 leading-relaxed flex-1">{repo.description}</p>
              <span className="mt-4 tag w-fit">{repo.language}</span>
            </a>
          </Reveal>
        ))}
      </div>

      <Reveal delay={0.15} className="mt-8 flex flex-col sm:flex-row sm:items-center gap-4 justify-between card p-6">
        <div className="flex items-center gap-3">
          <Star size={18} className="text-signal-cyan" />
          <p className="text-sm text-ink-300">
            <span className="text-ink-100 font-medium">{githubStats.publicRepos} repositories</span> and counting —
            see everything on GitHub.
          </p>
        </div>
        <a href={githubStats.profileUrl} target="_blank" rel="noreferrer" className="btn-primary shrink-0">
          <Github size={16} /> @{githubStats.username}
        </a>
      </Reveal>
    </section>
  );
}
