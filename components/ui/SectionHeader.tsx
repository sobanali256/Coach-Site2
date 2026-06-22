import type { ReactNode } from "react";
import type { HeadlinePart } from "@/types";
import AnimatedSection from "@/components/common/AnimatedSection";
import SectionLabel from "@/components/ui/SectionLabel";
import SplitHeadline from "@/components/ui/SplitHeadline";

interface SectionHeaderProps {
  label: string;
  parts: HeadlinePart[];
  align?: "center" | "left";
  /** Optional supporting line under the headline. */
  dek?: string;
  /** Optional action (e.g. a Button) shown to the right on desktop. */
  action?: ReactNode;
  className?: string;
}

/**
 * Eyebrow + split headline. With `align="left"` and an `action`, it renders
 * as an editorial header row (headline left, action bottom-right on desktop).
 */
export default function SectionHeader({
  label,
  parts,
  align = "center",
  dek,
  action,
  className = "",
}: SectionHeaderProps) {
  const block = (
    <div className={align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      <SectionLabel>{label}</SectionLabel>
      <SplitHeadline className="mt-4 text-hero" parts={parts} />
      {dek && <p className="mt-4 text-body-lg text-ink-muted">{dek}</p>}
    </div>
  );

  if (action) {
    return (
      <AnimatedSection
        className={`flex flex-col gap-6 md:flex-row md:items-end md:justify-between ${className}`}
      >
        {block}
        <div className="shrink-0">{action}</div>
      </AnimatedSection>
    );
  }

  return <AnimatedSection className={className}>{block}</AnimatedSection>;
}
