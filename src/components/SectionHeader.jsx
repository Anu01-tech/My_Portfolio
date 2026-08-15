import Reveal from "./Reveal";

export default function SectionHeader({ eyebrow, title, description, align = "left" }) {
  return (
    <Reveal className={align === "center" ? "text-center max-w-2xl mx-auto" : "max-w-2xl"}>
      <p className="eyebrow">{eyebrow}</p>
      <h2 className="section-heading">{title}</h2>
      {description && <p className="mt-4 text-ink-300 leading-relaxed">{description}</p>}
    </Reveal>
  );
}
