/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        base: {
          950: "#05070D",
          900: "#080B14",
          800: "#0C1120",
          700: "#121829",
          600: "#1A2236",
        },
        line: "#1E2740",
        signal: {
          cyan: "#4FE3D0",
          violet: "#8B7FFF",
          blue: "#5B9CFF",
        },
        ink: {
          100: "#F3F6FB",
          300: "#B9C3D9",
          500: "#7E8AA8",
          700: "#4B5570",
        },
      },
      fontFamily: {
        display: ["'Space Grotesk'", "sans-serif"],
        body: ["'Inter'", "sans-serif"],
        mono: ["'JetBrains Mono'", "monospace"],
      },
      backgroundImage: {
        "grid-faint":
          "linear-gradient(to right, rgba(255,255,255,0.035) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.035) 1px, transparent 1px)",
      },
      boxShadow: {
        glow: "0 0 40px rgba(79,227,208,0.15)",
        "glow-violet": "0 0 40px rgba(139,127,255,0.15)",
      },
      keyframes: {
        drift: {
          "0%,100%": { transform: "translate(0,0)" },
          "50%": { transform: "translate(12px,-14px)" },
        },
        pulseSlow: {
          "0%,100%": { opacity: 0.5 },
          "50%": { opacity: 1 },
        },
      },
      animation: {
        drift: "drift 9s ease-in-out infinite",
        pulseSlow: "pulseSlow 3s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
