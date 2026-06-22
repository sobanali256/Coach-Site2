"use client";

import { useState } from "react";
import CaseStudyCard from "@/components/common/CaseStudyCard";
import { CASE_STUDIES } from "@/lib/data";

const FILTERS = ["All", "Executive", "Career", "Team"] as const;
type Filter = (typeof FILTERS)[number];

export default function CaseStudiesFilter() {
  const [active, setActive] = useState<Filter>("All");

  const visible =
    active === "All"
      ? CASE_STUDIES
      : CASE_STUDIES.filter((s) => s.category === active);

  return (
    <div>
      <div
        className="flex flex-wrap gap-2"
        role="group"
        aria-label="Filter case studies by category"
      >
        {FILTERS.map((f) => {
          const isActive = active === f;
          return (
            <button
              key={f}
              type="button"
              onClick={() => setActive(f)}
              aria-pressed={isActive}
              className={`rounded-full border px-5 py-2 text-sm font-medium transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent ${
                isActive
                  ? "border-ink bg-ink text-cta-text"
                  : "border-border bg-surface text-ink-muted hover:text-ink"
              }`}
            >
              {f}
            </button>
          );
        })}
      </div>

      <div className="mt-10 grid gap-6 md:grid-cols-2">
        {visible.map((study, i) => (
          <CaseStudyCard key={study.slug} study={study} delay={(i % 2) * 0.1} />
        ))}
      </div>
    </div>
  );
}
