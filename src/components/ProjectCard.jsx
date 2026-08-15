import { motion } from "framer-motion";
import { ArrowUpRight, Github } from "lucide-react";
import ProjectVisual from "./ProjectVisual";

export default function ProjectCard({ project, onOpen, index = 0 }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: (index % 3) * 0.08 }}
      className="group card overflow-hidden flex flex-col hover:border-signal-cyan/40 transition-colors duration-300"
    >
      <button
        onClick={() => onOpen(project)}
        className="text-left flex flex-col h-full"
        aria-label={`Open details for ${project.title}`}
      >
        <div className="h-36 overflow-hidden border-b border-line relative">
          <ProjectVisual type={project.visual} className="h-full w-full transition-transform duration-500 group-hover:scale-105" />
          <div className="absolute top-3 left-3 tag">{project.category}</div>
        </div>

        <div className="p-6 flex flex-col flex-1">
          <div className="flex items-start justify-between gap-3">
            <h3 className="font-display font-semibold text-lg text-ink-100 group-hover:text-signal-cyan transition-colors">
              {project.title}
            </h3>
            <ArrowUpRight
              size={18}
              className="text-ink-500 shrink-0 mt-1 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-signal-cyan"
            />
          </div>
          <p className="text-sm text-ink-500 mt-1">{project.subtitle}</p>
          <p className="text-sm text-ink-300 mt-3 leading-relaxed line-clamp-3">{project.oneLiner}</p>

          <div className="mt-4 flex flex-wrap gap-1.5">
            {project.techStack.slice(0, 4).map((t) => (
              <span key={t} className="tag">
                {t}
              </span>
            ))}
          </div>

          <div className="mt-auto pt-5 flex items-center justify-between text-xs text-ink-500">
            <span className="font-mono">{project.year}</span>
            <span className="flex items-center gap-1.5 text-ink-300">
              <Github size={13} /> View details
            </span>
          </div>
        </div>
      </button>
    </motion.article>
  );
}
