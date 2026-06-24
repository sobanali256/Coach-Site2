import { Check } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";
import AnimatedSection from "@/components/common/AnimatedSection";
import Button from "@/components/ui/Button";
import { PRICING } from "@/lib/data";

export default function Pricing() {
  return (
    <section className="bg-surface py-24 md:py-32">
      <div className="container-content">
        <SectionHeader
          label="Pricing"
          parts={[
            { text: "Simple programs, " },
            { text: "clear pricing.", accent: true },
          ]}
        />
        <div className="mt-14 grid gap-6 lg:grid-cols-3 lg:items-stretch">
          {PRICING.map((tier, i) => (
            <AnimatedSection
              as="div"
              key={tier.name}
              delay={i * 0.1}
              className={`flex flex-col rounded-2xl bg-bg p-8 ${
                tier.highlighted
                  ? "border-2 border-accent"
                  : "border border-border"
              }`}
            >
              {tier.highlighted && (
                <span className="mb-4 w-fit rounded-full bg-accent-alt/20 px-3 py-1 text-xs font-medium text-accent">
                  Most Popular
                </span>
              )}
              <h3 className="font-display text-title font-semibold text-ink">
                {tier.name}
              </h3>
              <p className="mt-2 text-sm text-ink-muted">{tier.description}</p>
              <div className="mt-5">
                <span className="font-display text-3xl font-extrabold text-ink">
                  {tier.price}
                </span>
                <span className="ml-2 text-sm text-ink-muted">
                  {tier.cadence}
                </span>
              </div>
              <ul className="mt-6 flex-1 space-y-2.5">
                {tier.features.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-ink">
                    <Check
                      className="mt-1 h-4 w-4 shrink-0 text-accent-alt"
                      aria-hidden="true"
                    />
                    <span className="text-body">{f}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                <Button
                  href="/contact"
                  variant={tier.highlighted ? "primary" : "ghost"}
                  className="w-full"
                >
                  {tier.cta}
                </Button>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
