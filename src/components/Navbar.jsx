import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Github, Linkedin, Menu, X, FileDown } from "lucide-react";
import { nav, profile } from "../data/profile";
import useActiveSection from "../hooks/useActiveSection";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const active = useActiveSection(nav.map((n) => n.href.replace("#", "")));

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-base-950/85 backdrop-blur-md border-b border-line" : "bg-transparent"
      }`}
    >
      <nav className="section-shell flex items-center justify-between h-16">
        <a
          href="#home"
          className="font-display font-semibold text-ink-100 text-lg tracking-tight flex items-center gap-2"
        >
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-pulseSlow absolute inline-flex h-full w-full rounded-full bg-signal-cyan" />
          </span>
          {profile.displayName}
        </a>

        <ul className="hidden lg:flex items-center gap-1">
          {nav.map((item) => {
            const id = item.href.replace("#", "");
            const isActive = active === id;
            return (
              <li key={item.href}>
                <a
                  href={item.href}
                  className={`relative px-3 py-2 text-sm font-medium transition-colors ${
                    isActive ? "text-signal-cyan" : "text-ink-300 hover:text-ink-100"
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <motion.span
                      layoutId="nav-active"
                      className="absolute left-3 right-3 -bottom-0.5 h-[2px] bg-signal-cyan rounded-full"
                    />
                  )}
                </a>
              </li>
            );
          })}
        </ul>

        <div className="hidden lg:flex items-center gap-3">
          <a
            href={profile.links.github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub profile"
            className="text-ink-300 hover:text-signal-cyan transition-colors"
          >
            <Github size={19} />
          </a>
          <a
            href={profile.links.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn profile"
            className="text-ink-300 hover:text-signal-cyan transition-colors"
          >
            <Linkedin size={19} />
          </a>
          <a href={profile.links.resume} download className="btn-secondary !py-2 !px-4 !text-xs">
            <FileDown size={14} /> Resume
          </a>
        </div>

        <button
          className="lg:hidden text-ink-100 p-2"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="lg:hidden bg-base-950/98 backdrop-blur-md border-b border-line overflow-hidden"
          >
            <ul className="section-shell flex flex-col py-4 gap-1">
              {nav.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="block py-3 text-base text-ink-300 hover:text-signal-cyan transition-colors border-b border-line/60"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
            <div className="section-shell flex items-center gap-4 pb-6">
              <a href={profile.links.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="text-ink-300">
                <Github size={20} />
              </a>
              <a href={profile.links.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="text-ink-300">
                <Linkedin size={20} />
              </a>
              <a href={profile.links.resume} download className="btn-primary !py-2 !px-4 !text-xs ml-auto">
                <FileDown size={14} /> Resume
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
