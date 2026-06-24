import type { Metadata } from "next";
import { Check } from "lucide-react";
import SplitHeadline from "@/components/ui/SplitHeadline";
import SectionLabel from "@/components/ui/SectionLabel";
import SectionHeader from "@/components/ui/SectionHeader";
import AnimatedSection from "@/components/common/AnimatedSection";
import Button from "@/components/ui/Button";
import ServiceVisual from "@/components/sections/ServiceVisual";
import Faq from "@/components/sections/Faq";
import Pricing from "@/components/sections/Pricing";
import { SERVICES, SITE } from "@/lib/data";

export const metadata: Metadata = {
  title: "Coaching Programs — Executive, Career & Leadership Coaching",
  description:
    "Explore our coaching programs: Executive Coaching, Career Clarity, and Leadership Development. Structured programs for leaders who want measurable results.",
  alternates: { canonical: `${SITE.url}/services` },
  openGraph: {
    title: "Coaching Programs | Meridian Coaching",
    description:
      "Executive Coaching, Career Clarity, and Leadership Development. Structured programs built around outcomes, not hours.",
    url: `${SITE.url}/services`,
    siteName: SITE.name,
    type: "website",
  },
};

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-surface py-20 md:py-28">
        <AnimatedSection className="container-content max-w-3xl">
          <SectionLabel>Coaching Programs</SectionLabel>
          <SplitHeadline
            as="h1"
            className="mt-5 text-display"
            parts={[
              { text: "Programs designed around " },
              { text: "outcomes, not hours.", accent: true },
            ]}
          />
          <p className="mt-6 max-w-xl text-body-lg text-ink-muted">
            Every Meridian program is built backward from your specific goal. We
            don&apos;t do generic.
          </p>
          <div className="mt-8">
            <Button href="/contact" variant="primary" size="lg" withArrow>
              Book a Free Clarity Call
            </Button>
          </div>
        </AnimatedSection>
      </section>

      {/* Service details — alternating layout */}
      <div className="container-content py-24 md:py-32">
        <div className="space-y-24 md:space-y-32">
          {SERVICES.map((service, i) => {
            const even = i % 2 === 1;
            return (
              <article
                key={service.slug}
                id={service.slug}
                className="scroll-mt-24 grid items-center gap-12 lg:grid-cols-2 lg:gap-16"
              >
                <AnimatedSection className={even ? "lg:order-2" : ""}>
                  <SectionLabel>{service.length}</SectionLabel>
                  <h2 className="mt-4 font-display text-hero font-extrabold text-ink">
                    {service.title}
                  </h2>
                  <p className="mt-4 text-body-lg text-ink-muted">
                    {service.description}
                  </p>

                  <dl className="mt-6 grid grid-cols-1 gap-x-8 gap-y-3 sm:grid-cols-2">
                    <div>
                      <dt className="text-sm font-medium text-ink">Format</dt>
                      <dd className="text-sm text-ink-muted">{service.format}</dd>
                    </div>
                    <div>
                      <dt className="text-sm font-medium text-ink">Who it&apos;s for</dt>
                      <dd className="text-sm text-ink-muted">{service.forWho}</dd>
                    </div>
                  </dl>

                  <ul className="mt-6 space-y-2.5">
                    {service.outcomes.map((o) => (
                      <li key={o} className="flex items-start gap-3 text-ink">
                        <Check
                          className="mt-1 h-4 w-4 shrink-0 text-accent-alt"
                          aria-hidden="true"
                        />
                        <span className="text-body">{o}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-8">
                    <Button href="/contact" variant="primary">
                      Apply for {service.title}
                    </Button>
                  </div>
                </AnimatedSection>

                <AnimatedSection className={even ? "lg:order-1" : ""}>
                  <ServiceVisual slug={service.slug} />
                </AnimatedSection>
              </article>
            );
          })}
        </div>
      </div>

      {/* Pricing */}
      <Pricing />

      {/* FAQ */}
      <section className="container-content py-24 md:py-32">
        <SectionHeader
          label="Questions"
          parts={[
            { text: "Everything you " },
            { text: "might be wondering.", accent: true },
          ]}
        />
        <Faq />
      </section>
    </>
  );
}
