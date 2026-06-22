import AnimatedSection from "@/components/common/AnimatedSection";
import Button from "@/components/ui/Button";

interface PageCtaProps {
  heading: string;
  cta?: string;
  href?: string;
}

/** Consistent interior-page CTA band shown before the footer. */
export default function PageCta({
  heading,
  cta = "Book a Clarity Call",
  href = "/contact",
}: PageCtaProps) {
  return (
    <section className="container-content py-24 md:py-28">
      <AnimatedSection className="mx-auto max-w-3xl rounded-2xl border border-border bg-surface px-8 py-16 text-center">
        <h2 className="font-display text-hero font-extrabold text-ink">
          {heading}
        </h2>
        <div className="mt-8 flex justify-center">
          <Button href={href} variant="primary" size="lg" withArrow>
            {cta}
          </Button>
        </div>
      </AnimatedSection>
    </section>
  );
}
