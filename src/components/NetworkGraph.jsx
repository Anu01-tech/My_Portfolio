import { motion } from "framer-motion";

// The graph is not decorative filler — each node is one of Anugraha's
// real projects or the model/technique behind it, wired together the
// way a small applied-AI portfolio actually connects: shared tools,
// shared problem space (vision, real-time, edge).
const nodes = [
  { id: "yolov8", label: "YOLOv8", x: 50, y: 8, r: 5, color: "cyan" },
  { id: "pothole", label: "Pothole Detection", x: 14, y: 30, r: 7, color: "cyan" },
  { id: "plastic", label: "EcoScanIndia", x: 86, y: 28, r: 7, color: "cyan" },
  { id: "csrnet", label: "CSRNet", x: 50, y: 46, r: 5, color: "violet" },
  { id: "occupancy", label: "Occupancy Monitor", x: 20, y: 62, r: 7, color: "violet" },
  { id: "livecount", label: "Live Count AI", x: 80, y: 62, r: 7, color: "violet" },
  { id: "churn", label: "Churn Prediction", x: 38, y: 84, r: 7, color: "blue" },
  { id: "explainer", label: "Code Explainer", x: 65, y: 88, r: 6, color: "blue" },
];

const edges = [
  ["yolov8", "pothole"],
  ["yolov8", "plastic"],
  ["yolov8", "csrnet"],
  ["csrnet", "occupancy"],
  ["csrnet", "livecount"],
  ["occupancy", "churn"],
  ["livecount", "explainer"],
  ["pothole", "occupancy"],
  ["plastic", "livecount"],
];

const colorMap = {
  cyan: "#4FE3D0",
  violet: "#8B7FFF",
  blue: "#5B9CFF",
};

function pos(id) {
  const n = nodes.find((n) => n.id === id);
  return { x: n.x, y: n.y };
}

export default function NetworkGraph() {
  return (
    <div className="relative w-full aspect-square max-w-md mx-auto select-none">
      <svg viewBox="0 0 100 100" className="w-full h-full overflow-visible" aria-hidden="true">
        <defs>
          <radialGradient id="nodeGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="white" stopOpacity="0.9" />
            <stop offset="100%" stopColor="white" stopOpacity="0" />
          </radialGradient>
        </defs>

        {edges.map(([a, b], i) => {
          const p1 = pos(a);
          const p2 = pos(b);
          return (
            <g key={i}>
              <line x1={p1.x} y1={p1.y} x2={p2.x} y2={p2.y} stroke="#26314D" strokeWidth="0.4" />
              <line
                x1={p1.x}
                y1={p1.y}
                x2={p2.x}
                y2={p2.y}
                stroke="#4FE3D0"
                strokeWidth="0.6"
                strokeDasharray="2 10"
                strokeLinecap="round"
                opacity="0.85"
              >
                <animate
                  attributeName="stroke-dashoffset"
                  values="24;0"
                  dur={`${2.4 + (i % 3)}s`}
                  repeatCount="indefinite"
                  begin={`${i * 0.3}s`}
                />
              </line>
            </g>
          );
        })}

        {nodes.map((n, i) => (
          <g key={n.id}>
            <motion.circle
              cx={n.x}
              cy={n.y}
              r={n.r + 3}
              fill="url(#nodeGlow)"
              opacity={0.12}
            />
            <motion.circle
              cx={n.x}
              cy={n.y}
              r={n.r * 0.42}
              fill={colorMap[n.color]}
              animate={{ scale: [1, 1.15, 1] }}
              transition={{ duration: 2.4, repeat: Infinity, delay: i * 0.15 }}
            />
            <circle cx={n.x} cy={n.y} r={n.r * 0.42} fill="none" stroke={colorMap[n.color]} strokeWidth="0.3" opacity="0.5">
              <animate attributeName="r" values={`${n.r * 0.42};${n.r * 1.1};${n.r * 0.42}`} dur="2.8s" repeatCount="indefinite" begin={`${i * 0.2}s`} />
              <animate attributeName="opacity" values="0.5;0;0.5" dur="2.8s" repeatCount="indefinite" begin={`${i * 0.2}s`} />
            </circle>
          </g>
        ))}
      </svg>

      {/* Node labels, positioned absolutely to stay legible at any size */}
      {nodes.map((n) => (
        <span
          key={n.id}
          className="absolute font-mono text-[9px] sm:text-[10px] tracking-tight text-ink-300 whitespace-nowrap px-1.5 py-0.5 rounded bg-base-950/70 border border-line/60"
          style={{
            left: `${n.x}%`,
            top: `${n.y}%`,
            transform: "translate(-50%, calc(-50% + 14px))",
          }}
        >
          {n.label}
        </span>
      ))}
    </div>
  );
}
