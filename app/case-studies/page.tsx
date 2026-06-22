import type { Metadata } from "next";
import SplitHeadline from "@/components/ui/SplitHeadline";
import SectionLabel from "@/components/ui/SectionLabel";
import AnimatedSection from "@/components/common/AnimatedSection";
import CaseStudiesFilter from "@/components/sections/CaseStudiesFilter";
import PageCta from "@/components/sections/PageCta";
import { SITE } from "@/lib/data";

export const metadata: Metadata = {
  title: "Case Studies — Real Outcomes for Real Leaders",
  description:
    "Read how executives and leaders used Meridian coaching to earn promotions, launch businesses, and transform their teams. Real stories, real results.",
  alternates: { canonical: `${SITE.url}/case-studies` },
  openGraph: {
    title: "Case Studies | Meridian Coaching",
    description:
      "Real outcomes for real leaders — promotions, pivots, and transformed teams.",
    url: `${SITE.url}/case-studies`,
    siteName: SITE.name,
    type: "website",
  },
};

export default function CaseStudiesPage() {
  return (
    <>
      <section className="container-content py-16 md:py-24">
        <AnimatedSection className="max-w-3xl">
          <SectionLabel>Case Studies</SectionLabel>
          <SplitHeadline
            as="h1"
            className="mt-5 text-display"
            parts={[
              { text: "Results from real people with " },
              { text: "real careers.", accent: true },
            ]}
          />
          <p className="mt-6 max-w-xl text-body-lg text-ink-muted">
            No generic transformations. Here&apos;s exactly what changed, and
            how.
          </p>
        </AnimatedSection>

        <div className="mt-12">
          <CaseStudiesFilter />
        </div>
      </section>

      <PageCta heading="Ready to write your own case study?" />
    </>
  );
}
