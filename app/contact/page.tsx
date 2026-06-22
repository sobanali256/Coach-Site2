import type { Metadata } from "next";
import { Check } from "lucide-react";
import SplitHeadline from "@/components/ui/SplitHeadline";
import SectionLabel from "@/components/ui/SectionLabel";
import AnimatedSection from "@/components/common/AnimatedSection";
import ContactForm from "@/components/sections/ContactForm";
import { SITE } from "@/lib/data";

export const metadata: Metadata = {
  title: "Book a Free Clarity Call",
  description:
    "Book a free 45-minute discovery call with Meridian. No commitment. Just a conversation about where you want to go and whether we're the right fit.",
  alternates: { canonical: `${SITE.url}/contact` },
  openGraph: {
    title: "Book a Free Clarity Call | Meridian Coaching",
    description:
      "A free 45-minute discovery call. No commitment, no pitch deck — just a real conversation.",
    url: `${SITE.url}/contact`,
    siteName: SITE.name,
    type: "website",
  },
};

const infoCards = [
  {
    title: "What happens on this call",
    items: [
      "We map where you are and where you want to go",
      "You get one concrete insight to act on, free",
      "We see if working together makes sense",
    ],
  },
  {
    title: "Who this is for",
    items: [
      "Leaders and high-achievers feeling stuck or plateaued",
      "People ready to invest in real, structured change",
      "Anyone who values honesty over hype",
    ],
  },
  {
    title: "What this is not",
    items: [
      "A disguised sales pitch or pressure call",
      "Therapy or generic life advice",
      "A commitment of any kind",
    ],
  },
];

export default function ContactPage() {
  return (
    <section className="container-content grid gap-12 py-16 md:py-24 lg:grid-cols-2 lg:gap-16">
      {/* Left — context */}
      <AnimatedSection>
        <SectionLabel>Book a Call</SectionLabel>
        <SplitHeadline
          as="h1"
          className="mt-5 text-display"
          parts={[
            { text: "Let's figure out if we're a " },
            { text: "good fit.", accent: true },
          ]}
        />

        <div className="mt-10 space-y-4">
          {infoCards.map((card) => (
            <div
              key={card.title}
              className="rounded-2xl border border-border bg-surface p-6"
            >
              <h2 className="font-display text-lg font-semibold text-ink">
                {card.title}
              </h2>
              <ul className="mt-3 space-y-2">
                {card.items.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-ink-muted">
                    <Check
                      className="mt-1 h-4 w-4 shrink-0 text-accent-alt"
                      aria-hidden="true"
                    />
                    <span className="text-body">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <blockquote className="mt-8 border-l-4 border-accent-alt pl-6 text-body-lg italic text-ink">
          &ldquo;I came in skeptical. I left with a plan, a promotion, and a
          completely different relationship with how I show up at work.&rdquo;
          <footer className="mt-2 text-sm not-italic text-ink-muted">
            — James O., VP of Finance
          </footer>
        </blockquote>
      </AnimatedSection>

      {/* Right — form */}
      <AnimatedSection delay={0.1}>
        <ContactForm />
      </AnimatedSection>
    </section>
  );
}
