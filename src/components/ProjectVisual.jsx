// Clean technical SVG illustrations used when a project has no
// screenshot available. Each one is a lightweight visual metaphor for
// what the project actually does — not a stock photo, not a logo.

function Radar() {
  return (
    <svg viewBox="0 0 200 120" className="w-full h-full">
      <rect width="200" height="120" fill="none" />
      {[1, 2, 3, 4].map((i) => (
        <rect
          key={i}
          x={20 + i * 4}
          y={20 + i * 4}
          width={160 - i * 8}
          height={80 - i * 8}
          rx="4"
          fill="none"
          stroke="#26314D"
          strokeWidth="1"
        />
      ))}
      {[[45, 55], [90, 68], [130, 48], [155, 72]].map(([x, y], i) => (
        <g key={i}>
          <rect x={x - 8} y={y - 8} width="16" height="16" rx="2" fill="none" stroke="#4FE3D0" strokeWidth="1.4" />
          <circle cx={x} cy={y} r="1.6" fill="#4FE3D0" />
        </g>
      ))}
    </svg>
  );
}

function Layers() {
  return (
    <svg viewBox="0 0 200 120" className="w-full h-full">
      {[0, 1, 2].map((i) => (
        <rect
          key={i}
          x={40 - i * 10}
          y={30 + i * 18}
          width="120"
          height="46"
          rx="8"
          fill={i === 2 ? "#0F1420" : "none"}
          stroke={["#8B7FFF", "#5B9CFF", "#4FE3D0"][i]}
          strokeWidth="1.4"
          opacity={1 - i * 0.15}
        />
      ))}
      <circle cx="100" cy="60" r="3" fill="#4FE3D0" />
    </svg>
  );
}

function Heatmap() {
  const cells = [];
  for (let r = 0; r < 5; r++) {
    for (let c = 0; c < 9; c++) {
      const intensity = Math.abs(Math.sin(r * 1.3 + c * 0.7));
      cells.push(
        <rect
          key={`${r}-${c}`}
          x={12 + c * 20}
          y={14 + r * 18}
          width="16"
          height="14"
          rx="2"
          fill="#8B7FFF"
          opacity={0.15 + intensity * 0.55}
        />
      );
    }
  }
  return (
    <svg viewBox="0 0 200 120" className="w-full h-full">
      {cells}
    </svg>
  );
}

function Pulse() {
  return (
    <svg viewBox="0 0 200 120" className="w-full h-full">
      <polyline
        points="10,60 45,60 55,30 70,90 85,45 100,60 200,60"
        fill="none"
        stroke="#5B9CFF"
        strokeWidth="1.6"
        strokeLinejoin="round"
        strokeLinecap="round"
      />
      <circle cx="70" cy="90" r="3" fill="#5B9CFF" />
      <circle cx="70" cy="90" r="7" fill="none" stroke="#5B9CFF" strokeWidth="1" opacity="0.5" />
    </svg>
  );
}

function Bars() {
  const values = [30, 55, 40, 78, 65, 90, 50];
  return (
    <svg viewBox="0 0 200 120" className="w-full h-full">
      {values.map((v, i) => (
        <rect
          key={i}
          x={20 + i * 24}
          y={100 - v}
          width="14"
          height={v}
          rx="3"
          fill={i === 5 ? "#4FE3D0" : "#26314D"}
        />
      ))}
      <line x1="14" y1="100" x2="188" y2="100" stroke="#1E2740" strokeWidth="1" />
    </svg>
  );
}

function Terminal() {
  return (
    <svg viewBox="0 0 200 120" className="w-full h-full">
      <rect x="16" y="16" width="168" height="88" rx="8" fill="#0C1120" stroke="#1E2740" strokeWidth="1" />
      <circle cx="30" cy="30" r="3" fill="#26314D" />
      <circle cx="40" cy="30" r="3" fill="#26314D" />
      <circle cx="50" cy="30" r="3" fill="#26314D" />
      <text x="26" y="52" fontFamily="monospace" fontSize="8" fill="#4FE3D0">
        &gt; explain(code)
      </text>
      <text x="26" y="66" fontFamily="monospace" fontSize="7" fill="#7E8AA8">
        this function loops through...
      </text>
      <text x="26" y="78" fontFamily="monospace" fontSize="7" fill="#7E8AA8">
        returning a filtered list.
      </text>
    </svg>
  );
}

const map = { radar: Radar, layers: Layers, heatmap: Heatmap, pulse: Pulse, bars: Bars, terminal: Terminal };

export default function ProjectVisual({ type, className = "" }) {
  const Comp = map[type] || Layers;
  return (
    <div className={`bg-base-900 ${className}`}>
      <Comp />
    </div>
  );
}
