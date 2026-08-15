import { useState } from "react";
import SectionHeader from "../components/SectionHeader";
import ProjectCard from "../components/ProjectCard";
import ProjectModal from "../components/ProjectModal";
import { projects } from "../data/projects";

export default function Projects() {
  const [active, setActive] = useState(null);

  return (
    <section id="projects" className="section-shell py-24 sm:py-32">
      <SectionHeader
        eyebrow="03 · Projects"
        title="Things I've built."
        description="Selected from my GitHub — chosen for technical depth and real problem-solving, not repo count. Click any card for the full breakdown."
      />

      <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {projects.map((p, i) => (
          <ProjectCard key={p.slug} project={p} onOpen={setActive} index={i} />
        ))}
      </div>

      <ProjectModal project={active} onClose={() => setActive(null)} />
    </section>
  );
}
