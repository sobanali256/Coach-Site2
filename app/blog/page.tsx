import type { Metadata } from "next";
import SplitHeadline from "@/components/ui/SplitHeadline";
import SectionLabel from "@/components/ui/SectionLabel";
import AnimatedSection from "@/components/common/AnimatedSection";
import PageCta from "@/components/sections/PageCta";
import { SITE } from "@/lib/data";

export const metadata: Metadata = {
  title: "Blog & Resources",
  description:
    "Essays and resources on leadership, clarity, and career growth from Meridian Coaching. New writing coming soon.",
  alternates: { canonical: `${SITE.url}/blog` },
  openGraph: {
    title: "Blog & Resources | Meridian Coaching",
    description:
      "Essays and resources on leadership, clarity, and career growth.",
    url: `${SITE.url}/blog`,
    siteName: SITE.name,
    type: "website",
  },
};

const placeholders = [
  "The Clarity Audit: 5 Questions Every Leader Should Answer",
  "Why Accountability Beats Motivation Every Time",
  "Executive Presence Is a Skill, Not a Personality",
];

export default function BlogPage() {
  return (
    <>
      <section className="container-content py-16 md:py-24">
        <AnimatedSection className="max-w-3xl">
          <SectionLabel>Blog &amp; Resources</SectionLabel>
          <SplitHeadline
            as="h1"
            className="mt-5 text-display"
            parts={[
              { text: "Ideas worth " },
              { text: "leading with.", accent: true },
            ]}
          />
          <p className="mt-6 max-w-xl text-body-lg text-ink-muted">
            We&apos;re putting the finishing touches on our writing. Here&apos;s
            a preview of what&apos;s coming.
          </p>
        </AnimatedSection>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {placeholders.map((title, i) => (
            <AnimatedSection
              as="article"
              key={title}
              delay={i * 0.1}
              className="flex flex-col rounded-2xl border border-border bg-surface p-8"
            >
              <span className="w-fit rounded-full bg-accent-alt/20 px-3 py-1 text-xs font-medium text-accent">
                Coming soon
              </span>
              <h2 className="mt-5 font-display text-title font-semibold text-ink">
                {title}
              </h2>
              <p className="mt-3 text-body text-ink-muted">
                A practical, no-fluff read for leaders who want to think more
                clearly and act with intention.
              </p>
            </AnimatedSection>
          ))}
        </div>
      </section>

      <PageCta heading="Want this in your inbox?" cta="Book a Clarity Call" />
    </>
  );
}
