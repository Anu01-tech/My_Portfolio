import { motion } from "framer-motion";

/**
 * Wraps children in a subtle scroll-reveal animation.
 * Falls back gracefully — content is fully visible/functional
 * even with animations/JS disabled, since initial opacity isn't 0
 * in the underlying DOM (Framer sets it via style at runtime only
 * after hydration, and respects prefers-reduced-motion globally via CSS).
 */
export default function Reveal({
  children,
  delay = 0,
  y = 18,
  className = "",
  as = "div",
  once = true,
}) {
  const Comp = motion[as] || motion.div;
  return (
    <Comp
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, margin: "-80px" }}
      transition={{ duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </Comp>
  );
}
