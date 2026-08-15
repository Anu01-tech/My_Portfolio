import { useState } from "react";
import { Github, Linkedin, Mail, Send, Phone } from "lucide-react";
import SectionHeader from "../components/SectionHeader";
import Reveal from "../components/Reveal";
import { profile } from "../data/profile";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simplest secure approach for a static student portfolio: open the
    // user's own mail client with a pre-filled message. No API keys or
    // secrets are involved. See README for a real backend option
    // (e.g. Formspree/EmailJS) if you want in-page submission instead.
    const subject = encodeURIComponent(`Portfolio contact from ${form.name || "a visitor"}`);
    const body = encodeURIComponent(`${form.message}\n\n— ${form.name} (${form.email})`);
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
    setSent(true);
  };

  return (
    <section id="contact" className="section-shell py-24 sm:py-32">
      <SectionHeader
        eyebrow="10 · Contact"
        title="Let's build something intelligent."
        description="Open to AI/ML internships, research collaborations, and interesting problems in general. Reach out — I read everything."
      />

      <div className="mt-12 grid lg:grid-cols-[0.9fr_1.1fr] gap-8">
        <Reveal className="space-y-4">
          <a
            href={`mailto:${profile.email}`}
            className="card p-5 flex items-center gap-4 hover:border-signal-cyan/40 transition-colors"
          >
            <div className="h-10 w-10 rounded-xl bg-signal-cyan/10 flex items-center justify-center shrink-0">
              <Mail size={18} className="text-signal-cyan" />
            </div>
            <div>
              <p className="text-xs text-ink-500">Email</p>
              <p className="text-sm text-ink-100 font-medium break-all">{profile.email}</p>
            </div>
          </a>

          {profile.phone && (
            <div className="card p-5 flex items-center gap-4">
              <div className="h-10 w-10 rounded-xl bg-signal-blue/10 flex items-center justify-center shrink-0">
                <Phone size={18} className="text-signal-blue" />
              </div>
              <div>
                <p className="text-xs text-ink-500">Phone</p>
                <p className="text-sm text-ink-100 font-medium">{profile.phone}</p>
              </div>
            </div>
          )}

          <a
            href={profile.links.linkedin}
            target="_blank"
            rel="noreferrer"
            className="card p-5 flex items-center gap-4 hover:border-signal-cyan/40 transition-colors"
          >
            <div className="h-10 w-10 rounded-xl bg-signal-violet/10 flex items-center justify-center shrink-0">
              <Linkedin size={18} className="text-signal-violet" />
            </div>
            <div>
              <p className="text-xs text-ink-500">LinkedIn</p>
              <p className="text-sm text-ink-100 font-medium">Anugraha P J</p>
            </div>
          </a>

          <a
            href={profile.links.github}
            target="_blank"
            rel="noreferrer"
            className="card p-5 flex items-center gap-4 hover:border-signal-cyan/40 transition-colors"
          >
            <div className="h-10 w-10 rounded-xl bg-base-700 flex items-center justify-center shrink-0">
              <Github size={18} className="text-ink-100" />
            </div>
            <div>
              <p className="text-xs text-ink-500">GitHub</p>
              <p className="text-sm text-ink-100 font-medium">@{profile.links.github.split("/").pop()}</p>
            </div>
          </a>
        </Reveal>

        <Reveal delay={0.1} className="card p-6 sm:p-8">
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label htmlFor="name" className="block text-xs text-ink-500 mb-2">
                Name
              </label>
              <input
                id="name"
                type="text"
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full bg-base-900 border border-line rounded-xl px-4 py-3 text-sm text-ink-100 focus:border-signal-cyan/60 outline-none transition-colors"
                placeholder="Your name"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-xs text-ink-500 mb-2">
                Email
              </label>
              <input
                id="email"
                type="email"
                required
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full bg-base-900 border border-line rounded-xl px-4 py-3 text-sm text-ink-100 focus:border-signal-cyan/60 outline-none transition-colors"
                placeholder="you@example.com"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-xs text-ink-500 mb-2">
                Message
              </label>
              <textarea
                id="message"
                required
                rows={5}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full bg-base-900 border border-line rounded-xl px-4 py-3 text-sm text-ink-100 focus:border-signal-cyan/60 outline-none transition-colors resize-none"
                placeholder="What are you working on?"
              />
            </div>
            <button type="submit" className="btn-primary w-full sm:w-auto justify-center">
              <Send size={16} /> Send message
            </button>
            {sent && (
              <p className="text-xs text-signal-cyan">
                Opening your email client with this message pre-filled — send it from there to reach me.
              </p>
            )}
          </form>
        </Reveal>
      </div>
    </section>
  );
}
