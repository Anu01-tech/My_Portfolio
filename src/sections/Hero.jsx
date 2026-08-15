import { motion } from "framer-motion";
import { ArrowRight, FileDown, Github, Linkedin } from "lucide-react";
import { profile } from "../data/profile";
import NetworkGraph from "../components/NetworkGraph";

export default function Hero() {
  return (
    <section id="home" className="relative pt-32 pb-20 sm:pt-40 sm:pb-28 overflow-hidden">
      <div className="absolute inset-0 grid-bg [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,black,transparent)]" />
      <div className="absolute -top-40 -right-40 h-96 w-96 rounded-full bg-signal-violet/10 blur-[110px] animate-drift" />
      <div className="absolute top-40 -left-32 h-72 w-72 rounded-full bg-signal-cyan/10 blur-[100px] animate-drift" />

      <div className="section-shell relative grid lg:grid-cols-[1.1fr_0.9fr] gap-14 items-center">
        <div>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="eyebrow flex items-center gap-2"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-signal-cyan animate-pulseSlow" />
            {profile.role} · Available for internships
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="mt-5 text-4xl sm:text-5xl lg:text-[3.4rem] font-semibold leading-[1.08] text-ink-100"
          >
            {profile.tagline}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="mt-6 text-base sm:text-lg text-ink-300 max-w-xl leading-relaxed"
          >
            {profile.subTagline}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="mt-9 flex flex-wrap items-center gap-3"
          >
            <a href="#projects" className="btn-primary">
              View Projects <ArrowRight size={16} />
            </a>
            <a href={profile.links.resume} download className="btn-secondary">
              <FileDown size={16} /> Download Resume
            </a>
            <a
              href={profile.links.github}
              target="_blank"
              rel="noreferrer"
              className="btn-secondary !px-3.5"
              aria-label="GitHub"
            >
              <Github size={17} />
            </a>
            <a
              href={profile.links.linkedin}
              target="_blank"
              rel="noreferrer"
              className="btn-secondary !px-3.5"
              aria-label="LinkedIn"
            >
              <Linkedin size={17} />
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-12 flex flex-wrap gap-x-8 gap-y-3 font-mono text-xs text-ink-500"
          >
            <span>{profile.college}</span>
            <span className="hidden sm:inline text-line">/</span>
            <span>Class of {profile.gradYear}</span>
            <span className="hidden sm:inline text-line">/</span>
            <span>{profile.location}</span>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <NetworkGraph />
        </motion.div>
      </div>
    </section>
  );
}
