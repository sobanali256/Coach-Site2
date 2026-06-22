import type { Metadata } from "next";
import Image from "next/image";
import Script from "next/script";
import { CheckCircle2 } from "lucide-react";
import SplitHeadline from "@/components/ui/SplitHeadline";
import SectionLabel from "@/components/ui/SectionLabel";
import AnimatedSection from "@/components/common/AnimatedSection";
import BlobImage from "@/components/common/BlobImage";
import PageCta from "@/components/sections/PageCta";
import { SITE } from "@/lib/data";

export const metadata: Metadata = {
  title: "About — Meet Your Coach",
  description:
    "Meet the coach behind Meridian. Learn about our philosophy, credentials, and why we believe clarity is the most underrated leadership skill.",
  alternates: { canonical: `${SITE.url}/about` },
  openGraph: {
    title: "About | Meridian Coaching — Meet Your Coach",
    description:
      "Meet the coach behind Meridian. Our philosophy, credentials, and why clarity is the most underrated leadership skill.",
    url: `${SITE.url}/about`,
    siteName: SITE.name,
    type: "website",
  },
};

const beliefs = [
  {
    title: "Clarity before strategy.",
    body: "You can't execute a plan you can't see. We start by getting ruthlessly clear on what you actually want — then build the strategy to reach it.",
  },
  {
    title: "Accountability before motivation.",
    body: "Motivation is unreliable. A structure that holds you to your word is what actually moves the needle, week after week.",
  },
  {
    title: "Systems before willpower.",
    body: "Lasting change is engineered, not forced. We design repeatable systems so progress doesn't depend on how you feel that day.",
  },
];

const credentials = [
  "ICF PCC Certified Coach",
  "12 years coaching senior leaders",
  "Former Fortune 500 executive",
  "Forbes Coaches Council member",
];

const badges = ["ICF", "Forbes", "EMCC", "Harvard"];

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "The Coach behind Meridian",
  jobTitle: "Executive & Leadership Coach",
  worksFor: { "@type": "Organization", name: SITE.name },
  url: `${SITE.url}/about`,
  knowsAbout: [
    "Executive Coaching",
    "Career Coaching",
    "Leadership Development",
  ],
};

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="container-content grid items-center gap-12 py-16 lg:grid-cols-2 lg:gap-16 lg:py-24">
        <AnimatedSection>
          <SectionLabel>About Meridian</SectionLabel>
          <SplitHeadline
            as="h1"
            className="mt-5 text-display"
            parts={[
              { text: "Built on two beliefs: " },
              { text: "clarity matters", accent: true },
              { text: ", and you're more capable than you know." },
            ]}
          />
        </AnimatedSection>
        <div>
          <BlobImage
            src="https://images.unsplash.com/photo-1589156280159-27698a70f29e?w=800"
            alt="Portrait of the Meridian coach in a warm, professional setting"
            className="mx-auto max-w-md lg:max-w-none"
          />
        </div>
      </section>

      {/* Philosophy */}
      <section className="bg-surface py-24 md:py-32">
        <div className="container-content">
          <AnimatedSection className="mx-auto max-w-2xl text-center">
            <SectionLabel>What We Believe</SectionLabel>
            <SplitHeadline
              className="mt-4 text-hero"
              parts={[
                { text: "Three convictions that shape " },
                { text: "every session.", accent: true },
              ]}
            />
          </AnimatedSection>
          <div className="mt-14 grid gap-6 lg:grid-cols-3">
            {beliefs.map((b, i) => (
              <AnimatedSection
                as="div"
                key={b.title}
                delay={i * 0.1}
                className="rounded-2xl border border-border bg-bg p-8"
              >
                <h3 className="font-display text-title font-semibold text-ink">
                  {b.title}
                </h3>
                <p className="mt-3 text-body text-ink-muted">{b.body}</p>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Coach bio */}
      <section className="container-content grid gap-12 py-24 md:py-32 lg:grid-cols-2 lg:items-start">
        <AnimatedSection className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl border-2 border-accent-alt">
          <Image
            src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=800"
            alt="The Meridian coach"
            fill
            sizes="(max-width: 1024px) 90vw, 45vw"
            className="object-cover"
          />
        </AnimatedSection>
        <AnimatedSection>
          <SectionLabel>Meet Your Coach</SectionLabel>
          <h2 className="mt-4 font-display text-hero font-extrabold text-ink">
            Hi, I&apos;m your coach.
          </h2>
          <p className="mt-5 text-body-lg text-ink-muted">
            After twelve years leading teams inside Fortune 500 companies, I
            saw the same pattern again and again: brilliant people stalling not
            for lack of talent, but for lack of clarity. I started Meridian to
            fix exactly that.
          </p>
          <p className="mt-4 text-body text-ink-muted">
            My work blends the rigor of executive strategy with the honesty of
            real coaching. No fluff, no scripts — just a structured partnership
            built around the results you actually care about.
          </p>

          <ul className="mt-8 space-y-3">
            {credentials.map((c) => (
              <li key={c} className="flex items-center gap-3 text-ink">
                <CheckCircle2
                  className="h-5 w-5 shrink-0 text-accent"
                  aria-hidden="true"
                />
                {c}
              </li>
            ))}
          </ul>

          <blockquote className="mt-8 border-l-4 border-accent-alt pl-6 text-body-lg italic text-ink">
            &ldquo;Clarity is the most underrated leadership skill. Everything
            else is downstream of knowing what you actually want.&rdquo;
          </blockquote>
        </AnimatedSection>
      </section>

      {/* Credentials row */}
      <section className="border-y border-border bg-surface py-16">
        <div className="container-content">
          <p className="text-center text-sm text-ink-muted">
            Trained, certified, and recognized by
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-x-12 gap-y-6">
            {badges.map((b) => (
              <span
                key={b}
                className="font-display text-2xl font-extrabold text-ink/40 grayscale transition-all duration-300 hover:text-ink hover:grayscale-0"
              >
                {b}
              </span>
            ))}
          </div>
        </div>
      </section>

      <PageCta heading="Let's talk about where you want to go." />

      <Script
        id="ld-json-person"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
    </>
  );
}
