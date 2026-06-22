const PHRASES: { text: string; accent?: boolean }[] = [
  { text: "Your Life, " },
  { text: "Amplified.", accent: true },
  { text: " · Your Career, " },
  { text: "Elevated.", accent: true },
  { text: " · Your Leadership, " },
  { text: "Sharpened.", accent: true },
  { text: " · " },
];

function MarqueeContent() {
  return (
    <span className="flex shrink-0 items-center font-display text-xl font-medium text-marquee-text">
      {PHRASES.map((p, i) => (
        <span key={i} className={p.accent ? "text-marquee-accent" : undefined}>
          {p.text}
        </span>
      ))}
    </span>
  );
}

/**
 * Full-bleed diagonal marquee banner. The outer wrapper is rotated -2deg and
 * clips overflow; the content is counter-rotated so text reads level. The
 * track is pure CSS (@keyframes marquee) and pauses for reduced motion.
 */
export default function Marquee() {
  // Repeat the content enough times to fill very wide viewports, duplicated
  // once more so translateX(-50%) produces a seamless loop.
  const half = Array.from({ length: 6 });
  return (
    <div className="relative overflow-hidden bg-marquee-bg py-2 -rotate-2">
      <div className="py-3 rotate-2">
        <div className="marquee-track" aria-hidden="true">
          {half.map((_, i) => (
            <MarqueeContent key={`a-${i}`} />
          ))}
          {half.map((_, i) => (
            <MarqueeContent key={`b-${i}`} />
          ))}
        </div>
        <span className="sr-only">
          Your life, amplified. Your career, elevated. Your leadership,
          sharpened.
        </span>
      </div>
    </div>
  );
}
