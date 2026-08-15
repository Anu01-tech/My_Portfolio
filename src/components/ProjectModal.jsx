import { useEffect, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ExternalLink, Github, X } from "lucide-react";
import ProjectVisual from "./ProjectVisual";

export default function ProjectModal({ project, onClose }) {
  const closeRef = useRef(null);

  useEffect(() => {
    if (!project) return;
    const onKey = (e) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [project, onClose]);

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          className="fixed inset-0 z-[70] flex items-start sm:items-center justify-center p-0 sm:p-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="absolute inset-0 bg-base-950/85 backdrop-blur-sm"
            onClick={onClose}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />

          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby="project-modal-title"
            initial={{ opacity: 0, y: 30, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.98 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="relative w-full sm:max-w-3xl max-h-[92vh] overflow-y-auto bg-base-900 sm:rounded-2xl border border-line shadow-2xl"
          >
            <div className="sticky top-0 z-10 flex items-center justify-between px-6 sm:px-8 py-5 bg-base-900/95 backdrop-blur border-b border-line">
              <div>
                <p className="eyebrow">{project.category}</p>
                <h2 id="project-modal-title" className="font-display text-xl sm:text-2xl font-semibold text-ink-100 mt-1">
                  {project.title}
                </h2>
              </div>
              <button
                ref={closeRef}
                onClick={onClose}
                aria-label="Close project details"
                className="p-2 rounded-full text-ink-300 hover:text-ink-100 hover:bg-base-800 transition-colors"
              >
                <X size={20} />
              </button>
            </div>

            <div className="px-6 sm:px-8 py-6 space-y-8">
              {project.images && project.images.length > 0 ? (
                <div className="grid sm:grid-cols-2 gap-3">
                  {project.images.map((src) => (
                    <img
                      key={src}
                      src={src}
                      alt={`${project.title} screenshot`}
                      loading="lazy"
                      className="rounded-lg border border-line w-full h-40 object-cover"
                    />
                  ))}
                </div>
              ) : (
                <ProjectVisual type={project.visual} className="h-40 rounded-lg border border-line" />
              )}

              <div className="flex flex-wrap gap-3">
                {project.links.github ? (
                  <a href={project.links.github} target="_blank" rel="noreferrer" className="btn-primary">
                    <Github size={16} /> View on GitHub
                  </a>
                ) : (
                  <span className="tag !py-2.5 !px-4 !normal-case !text-xs">
                    No public repository linked yet
                  </span>
                )}
                {project.links.demo && (
                  <a href={project.links.demo} target="_blank" rel="noreferrer" className="btn-secondary">
                    <ExternalLink size={16} /> Live Demo
                  </a>
                )}
              </div>

              <Detail label="Problem" text={project.problem} />
              <Detail label="Approach" text={project.approach} />
              <Detail label="AI / ML" text={project.aiml} />

              <div>
                <h3 className="eyebrow">Tech Stack</h3>
                <div className="mt-3 flex flex-wrap gap-2">
                  {project.techStack.map((t) => (
                    <span key={t} className="tag">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="eyebrow">Key Features</h3>
                <ul className="mt-3 space-y-2.5">
                  {project.keyFeatures.map((f) => (
                    <li key={f} className="flex gap-3 text-sm text-ink-300 leading-relaxed">
                      <span className="h-1.5 w-1.5 rounded-full bg-signal-cyan mt-2 shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>

              {project.results && project.results.length > 0 && (
                <div>
                  <h3 className="eyebrow">Results</h3>
                  <div className="mt-3 grid grid-cols-2 sm:grid-cols-3 gap-3">
                    {project.results.map((r) => (
                      <div key={r.label} className="card p-4">
                        <p className="text-xl font-display font-semibold text-signal-cyan">{r.value}</p>
                        <p className="text-xs text-ink-500 mt-1">{r.label}</p>
                      </div>
                    ))}
                  </div>
                  {project.resultsNote && (
                    <p className="mt-3 text-xs text-ink-500 leading-relaxed">{project.resultsNote}</p>
                  )}
                </div>
              )}
              {(!project.results || project.results.length === 0) && project.resultsNote && (
                <p className="text-xs text-ink-500 leading-relaxed">{project.resultsNote}</p>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function Detail({ label, text }) {
  return (
    <div>
      <h3 className="eyebrow">{label}</h3>
      <p className="mt-3 text-sm text-ink-300 leading-relaxed">{text}</p>
    </div>
  );
}
