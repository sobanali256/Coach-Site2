"use client";

import { useRef } from "react";
import Image from "next/image";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import { TESTIMONIALS } from "@/lib/data";
import SectionLabel from "@/components/ui/SectionLabel";
import SplitHeadline from "@/components/ui/SplitHeadline";
import AnimatedSection from "@/components/common/AnimatedSection";
import type { Testimonial } from "@/types";

function Stars() {
  return (
    <div className="flex items-center gap-1" aria-hidden="true">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} className="h-4 w-4 fill-accent-alt text-accent-alt" />
      ))}
    </div>
  );
}

function Author({ t, dark = false }: { t: Testimonial; dark?: boolean }) {
  return (
    <figcaption className="flex items-center gap-3">
      <Image
        src={t.avatar}
        alt={t.name}
        width={48}
        height={48}
        className="h-12 w-12 rounded-full object-cover"
      />
      <span>
        <span className={`block font-display font-medium ${dark ? "text-bg" : "text-ink"}`}>
          {t.name}
        </span>
        <span className={`block text-sm ${dark ? "text-bg/60" : "text-ink-muted"}`}>
          {t.title}
        </span>
      </span>
    </figcaption>
  );
}

/** Large, dark featured testimonial — the visual anchor of the section. */
function FeaturedCard({ t }: { t: Testimonial }) {
  return (
    <figure className="flex h-full flex-col justify-between rounded-2xl bg-ink p-8 md:p-10">
      <div>
        <span aria-hidden="true" className="font-display text-6xl leading-none text-accent-alt">
          &ldquo;
        </span>
        <blockquote className="mt-2 font-display text-2xl font-medium leading-snug text-bg md:text-3xl">
          {t.quote}
        </blockquote>
      </div>
      <div className="mt-8 flex flex-col gap-4">
        <Stars />
        <Author t={t} dark />
      </div>
    </figure>
  );
}

/** Compact bordered testimonial used in the supporting stack / carousel. */
function CompactCard({ t }: { t: Testimonial }) {
  return (
    <figure className="flex h-full snap-start flex-col rounded-2xl border border-border bg-surface p-6">
      <blockquote className="text-body italic text-ink">
        &ldquo;{t.quote}&rdquo;
      </blockquote>
      <div className="mt-5 flex items-center justify-between gap-3">
        <Author t={t} />
        <Stars />
      </div>
    </figure>
  );
}

export default function Testimonials() {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const [featured, ...rest] = TESTIMONIALS;

  function scrollBy(dir: 1 | -1) {
    const el = scrollerRef.current;
    if (!el) return;
    el.scrollBy({ left: dir * (el.clientWidth * 0.85), behavior: "smooth" });
  }

  return (
    <section className="bg-bg py-24 md:py-32" aria-label="Testimonials">
      <div className="container-content">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <SectionLabel>What Coaches Say</SectionLabel>
            <SplitHeadline
              className="mt-4 text-hero"
              parts={[
                { text: "The people we've helped " },
                { text: "move forward.", accent: true },
              ]}
            />
          </div>
          {/* Carousel controls — mobile only */}
          <div className="flex gap-2 lg:hidden">
            <button
              type="button"
              onClick={() => scrollBy(-1)}
              aria-label="Previous testimonial"
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border bg-surface text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
            >
              <ChevronLeft className="h-5 w-5" aria-hidden="true" />
            </button>
            <button
              type="button"
              onClick={() => scrollBy(1)}
              aria-label="Next testimonial"
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border bg-surface text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
            >
              <ChevronRight className="h-5 w-5" aria-hidden="true" />
            </button>
          </div>
        </div>

        {/* Mobile / tablet: horizontal snap carousel of every testimonial. */}
        <div
          ref={scrollerRef}
          className="mt-12 flex snap-x snap-mandatory gap-6 overflow-x-auto pb-4 [scrollbar-width:none] lg:hidden [&::-webkit-scrollbar]:hidden"
        >
          {TESTIMONIALS.map((t) => (
            <div key={t.name} className="min-w-[85%] sm:min-w-[55%]">
              <CompactCard t={t} />
            </div>
          ))}
        </div>

        {/* Desktop: asymmetric layout — featured quote + supporting stack. */}
        <AnimatedSection className="mt-12 hidden gap-6 lg:grid lg:grid-cols-2">
          <FeaturedCard t={featured} />
          <div className="grid gap-6">
            {rest.map((t) => (
              <CompactCard key={t.name} t={t} />
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
