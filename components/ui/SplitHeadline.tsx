import type { ElementType } from "react";
import type { HeadlinePart } from "@/types";

interface SplitHeadlineProps {
  /** Ordered segments. Accent segments render lime + extrabold. */
  parts: HeadlinePart[];
  /** Heading element to render. Defaults to h2. */
  as?: ElementType;
  className?: string;
}

/**
 * The signature split-weight headline. Regular segments use ink; accent
 * segments render in lime green (--color-accent-alt) with font-extrabold.
 * Whitespace inside each segment's `text` is preserved verbatim.
 */
export default function SplitHeadline({
  parts,
  as: Tag = "h2",
  className = "",
}: SplitHeadlineProps) {
  return (
    <Tag
      className={`whitespace-pre-line break-words font-display font-extrabold text-ink leading-[0.95] ${className}`}
    >
      {parts.map((part, i) => (
        <span
          key={i}
          className={
            part.accent ? "text-accent-alt font-extrabold" : undefined
          }
        >
          {part.text}
        </span>
      ))}
    </Tag>
  );
}
