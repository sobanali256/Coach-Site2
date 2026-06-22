interface ServiceVisualProps {
  slug: string;
}

/** Abstract decorative SVG per service. Purely presentational. */
export default function ServiceVisual({ slug }: ServiceVisualProps) {
  return (
    <div className="flex aspect-[4/3] w-full items-center justify-center rounded-2xl border border-border bg-surface p-8">
      {slug === "executive-coaching" && <RadarChart />}
      {slug === "career-clarity-coaching" && <JourneyPath />}
      {slug === "leadership-development" && <NetworkGraph />}
    </div>
  );
}

function RadarChart() {
  // 5-axis spider chart of leadership dimensions.
  const cx = 120;
  const cy = 120;
  const axes = 5;
  const rings = [40, 70, 100];
  const point = (i: number, r: number) => {
    const angle = (Math.PI * 2 * i) / axes - Math.PI / 2;
    return [cx + r * Math.cos(angle), cy + r * Math.sin(angle)];
  };
  const values = [95, 70, 88, 60, 80];
  const dataPoints = values
    .map((v, i) => point(i, (v / 100) * 100).join(","))
    .join(" ");

  return (
    <svg viewBox="0 0 240 240" className="h-full w-full" role="img" aria-label="Leadership dimensions radar chart">
      {rings.map((r) => (
        <polygon
          key={r}
          points={Array.from({ length: axes })
            .map((_, i) => point(i, r).join(","))
            .join(" ")}
          fill="none"
          stroke="rgb(var(--color-border))"
        />
      ))}
      {Array.from({ length: axes }).map((_, i) => {
        const [x, y] = point(i, 100);
        return (
          <line
            key={i}
            x1={cx}
            y1={cy}
            x2={x}
            y2={y}
            stroke="rgb(var(--color-border))"
          />
        );
      })}
      <polygon
        points={dataPoints}
        fill="rgb(var(--color-accent-alt))"
        fillOpacity="0.35"
        stroke="rgb(var(--color-accent))"
        strokeWidth="2"
      />
    </svg>
  );
}

function JourneyPath() {
  return (
    <svg viewBox="0 0 240 240" className="h-full w-full" role="img" aria-label="Career journey path">
      <path
        d="M20,200 C80,200 70,120 120,120 C170,120 160,40 220,40"
        fill="none"
        stroke="rgb(var(--color-accent))"
        strokeWidth="3"
        strokeDasharray="2 10"
        strokeLinecap="round"
      />
      {[
        [20, 200],
        [120, 120],
        [220, 40],
      ].map(([x, y], i) => (
        <circle
          key={i}
          cx={x}
          cy={y}
          r={i === 2 ? 12 : 8}
          fill={i === 2 ? "rgb(var(--color-accent-alt))" : "rgb(var(--color-surface))"}
          stroke="rgb(var(--color-accent))"
          strokeWidth="3"
        />
      ))}
    </svg>
  );
}

function NetworkGraph() {
  const nodes = [
    [120, 60],
    [60, 130],
    [180, 130],
    [90, 200],
    [150, 200],
  ];
  const edges = [
    [0, 1],
    [0, 2],
    [1, 3],
    [1, 2],
    [2, 4],
    [3, 4],
  ];
  return (
    <svg viewBox="0 0 240 240" className="h-full w-full" role="img" aria-label="Team network graph">
      {edges.map(([a, b], i) => (
        <line
          key={i}
          x1={nodes[a][0]}
          y1={nodes[a][1]}
          x2={nodes[b][0]}
          y2={nodes[b][1]}
          stroke="rgb(var(--color-border))"
          strokeWidth="2"
        />
      ))}
      {nodes.map(([x, y], i) => (
        <circle
          key={i}
          cx={x}
          cy={y}
          r={i === 0 ? 16 : 11}
          fill={i === 0 ? "rgb(var(--color-accent))" : "rgb(var(--color-accent-alt))"}
        />
      ))}
    </svg>
  );
}
