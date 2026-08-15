import { Github } from "lucide-react";
import SectionHeader from "../components/SectionHeader";
import Reveal from "../components/Reveal";
import { spotlightProject } from "../data/projects";

const stages = [
  {
    title: "Problem",
    body: "Manual road inspection doesn't scale. Spotting potholes automatically from images or footage is a practical first step toward faster, data-driven maintenance.",
  },
  {
    title: "AI Approach",
    body: "YOLOv8 Nano, fine-tuned via transfer learning on a synthetic road dataset (300 images with lanes and rough-edged potholes), trained at 320×320 resolution.",
  },
  {
    title: "Detection",
    body: "Single-image, batch-folder, and video inference — each with FPS tracking — plus a Streamlit dashboard for interactive uploads.",
  },
  {
    title: "Analysis",
    body: "Training and validation loss are tracked per epoch; detection runs log pothole counts, per-image averages, and inference latency.",
  },
  {
    title: "Output",
    body: "Annotated images/video with bounding boxes around detected potholes, viewable directly in the dashboard or saved to the results folder.",
  },
];

export default function Spotlight() {
  if (!spotlightProject) return null;
  const p = spotlightProject;

  return (
    <section className="relative py-24 sm:py-32 overflow-hidden border-y border-line bg-base-900/40">
      <div className="absolute inset-0 grid-bg opacity-40 [mask-image:radial-gradient(ellipse_70%_60%_at_50%_50%,black,transparent)]" />
      <div className="section-shell relative">
        <SectionHeader
          eyebrow="Spotlight"
          title={p.title}
          description={p.oneLiner}
        />

        <Reveal delay={0.1} className="mt-12 relative">
          <div className="hidden lg:block absolute top-6 left-[8%] right-[8%] h-px bg-gradient-to-r from-transparent via-line to-transparent" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-5">
            {stages.map((s, i) => (
              <div key={s.title} className="relative">
                <div className="hidden lg:flex items-center justify-center h-12 w-12 rounded-full bg-base-950 border border-signal-cyan/40 text-signal-cyan font-mono text-sm mb-4 relative z-10">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <div className="card p-5 h-full">
                  <p className="lg:hidden font-mono text-xs text-signal-cyan mb-1">0{i + 1}</p>
                  <h3 className="font-display font-semibold text-ink-100">{s.title}</h3>
                  <p className="mt-2 text-sm text-ink-300 leading-relaxed">{s.body}</p>
                </div>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.2} className="mt-10 grid sm:grid-cols-3 gap-4">
          {p.results.slice(0, 3).map((r) => (
            <div key={r.label} className="card p-5">
              <p className="text-2xl font-display font-semibold text-signal-cyan">{r.value}</p>
              <p className="text-xs text-ink-500 mt-1">{r.label}</p>
            </div>
          ))}
        </Reveal>
        <Reveal delay={0.25}>
          <p className="mt-4 text-xs text-ink-500 max-w-2xl leading-relaxed">{p.resultsNote}</p>
        </Reveal>

        <Reveal delay={0.3} className="mt-8">
          <a href={p.links.github} target="_blank" rel="noreferrer" className="btn-secondary">
            <Github size={16} /> Explore the full pipeline on GitHub
          </a>
        </Reveal>
      </div>
    </section>
  );
}
