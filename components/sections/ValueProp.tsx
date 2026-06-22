import Link from "next/link";
import { Sprout } from "lucide-react";
import AnimatedSection from "@/components/common/AnimatedSection";

export default function ValueProp() {
  return (
    <section className="container-content py-24 md:py-32">
      <AnimatedSection className="mx-auto max-w-3xl text-center">
        <Sprout
          className="mx-auto h-12 w-12 text-accent"
          aria-hidden="true"
        />
        <p className="mt-8 font-display text-title leading-relaxed text-ink">
          We help you get <span className="font-bold">clear</span> on what kind
          of leader you want to be — your brand, your vision, your impact — and
          build it with <span className="font-bold">intention</span>.
        </p>
        <p className="mt-6 text-body-lg text-ink-muted">
          Leadership is not a title. It&apos;s how you show up every day.
          Coaching creates the kind of clarity and accountability that no
          course, book, or conference can replicate. If you&apos;re ready to
          lead on purpose, let&apos;s talk.
        </p>
        <Link
          href="/services"
          className="mt-8 inline-block font-display font-medium text-accent underline-offset-4 hover:underline"
        >
          See Our Coaching Programs →
        </Link>
      </AnimatedSection>
    </section>
  );
}
