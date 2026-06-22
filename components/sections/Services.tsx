import Link from "next/link";
import { SERVICES } from "@/lib/data";
import SectionHeader from "@/components/ui/SectionHeader";
import HoverCard from "@/components/common/HoverCard";
import Button from "@/components/ui/Button";

export default function Services() {
  return (
    <section className="bg-bg py-24 md:py-32">
      <div className="container-content">
        <SectionHeader
          align="left"
          label="What We Offer"
          parts={[
            { text: "Coaching built for how you " },
            { text: "actually work.", accent: true },
          ]}
          action={
            <Button href="/services" variant="ghost">
              View All Services
            </Button>
          }
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {SERVICES.map((service, i) => {
            const Icon = service.icon;
            return (
              <HoverCard key={service.slug} delay={i * 0.1} className="flex flex-col p-8">
                <span className="w-fit rounded-xl bg-bg p-3">
                  <Icon className="h-6 w-6 text-accent" aria-hidden="true" />
                </span>
                <h3 className="mt-6 font-display text-title font-semibold text-ink">
                  {service.title}
                </h3>
                <p className="mt-3 text-body text-ink-muted">
                  {service.description}
                </p>
                <Link
                  href={`/services#${service.slug}`}
                  className="mt-6 inline-block font-display font-medium text-accent underline-offset-4 hover:underline"
                >
                  Learn More →
                </Link>
              </HoverCard>
            );
          })}
        </div>
      </div>
    </section>
  );
}
