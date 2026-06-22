interface SectionLabelProps {
  children: string;
  className?: string;
}

/** Eyebrow label — uppercase, wide-tracked, muted. */
export default function SectionLabel({
  children,
  className = "",
}: SectionLabelProps) {
  return (
    <span className={`eyebrow block text-ink-muted ${className}`}>
      {children}
    </span>
  );
}
