import { PROCESS_STEPS } from "@/lib/data";
import SectionHeader from "@/components/ui/SectionHeader";
import AnimatedSection from "@/components/common/AnimatedSection";

export default function Process() {
  return (
    <section id="process" className="scroll-mt-24 bg-surface py-24 md:py-32">
      <div className="container-content">
        <SectionHeader
          label="The Process"
          parts={[
            { text: "A structure that " },
            { text: "actually", accent: true },
            { text: " gets you moving." },
          ]}
        />

        <div className="relative mt-16">
          {/* Connecting line — desktop only, behind the cards */}
          <div
            aria-hidden="true"
            className="absolute left-0 right-0 top-1/2 hidden -translate-y-1/2 border-t border-border lg:block"
          />

          <ol className="relative grid gap-6 lg:grid-cols-4">
            {PROCESS_STEPS.map((step, i) => {
              const Icon = step.icon;
              return (
                <AnimatedSection
                  as="li"
                  key={step.number}
                  delay={i * 0.1}
                  className="group relative overflow-hidden rounded-2xl border border-border bg-bg p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-accent/30"
                >
                  <span
                    aria-hidden="true"
                    className="pointer-events-none absolute -right-2 -top-4 font-display font-extrabold text-accent-alt opacity-15 transition-opacity duration-300 group-hover:opacity-25"
                    style={{ fontSize: "clamp(4rem, 6vw, 6rem)" }}
                  >
                    {step.number}
                  </span>
                  <div className="relative inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-accent/10 border border-accent/20 text-accent transition-all duration-300 group-hover:scale-110 group-hover:bg-accent group-hover:text-white">
                    <Icon className="h-7 w-7 transition-colors duration-300" strokeWidth={1.75} aria-hidden="true" />
                  </div>
                  <h3 className="relative mt-6 font-display text-title font-semibold text-ink">
                    {step.title}
                  </h3>
                  <p className="relative mt-3 text-body text-ink-muted">
                    {step.description}
                  </p>
                </AnimatedSection>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
}
