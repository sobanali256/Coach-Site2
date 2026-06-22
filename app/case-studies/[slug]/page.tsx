import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { CASE_STUDIES, SITE } from "@/lib/data";
import AnimatedSection from "@/components/common/AnimatedSection";
import CaseStudyCard from "@/components/common/CaseStudyCard";
import Button from "@/components/ui/Button";
import SectionLabel from "@/components/ui/SectionLabel";

interface Params {
  params: { slug: string };
}

export function generateStaticParams() {
  return CASE_STUDIES.map((s) => ({ slug: s.slug }));
}

export function generateMetadata({ params }: Params): Metadata {
  const study = CASE_STUDIES.find((s) => s.slug === params.slug);
  if (!study) return { title: "Case Study Not Found" };
  return {
    title: `${study.title} — Case Study`,
    description: `${study.title}. ${study.subtitle}. Outcome: ${study.outcome}.`,
    alternates: { canonical: `${SITE.url}/case-studies/${study.slug}` },
    openGraph: {
      title: `${study.title} | Meridian Coaching`,
      description: `${study.subtitle} — ${study.outcome}.`,
      url: `${SITE.url}/case-studies/${study.slug}`,
      siteName: SITE.name,
      type: "article",
      images: [study.image],
    },
  };
}

const TOC = [
  { id: "challenge", label: "The Challenge" },
  { id: "approach", label: "Coaching Approach" },
  { id: "turning-points", label: "Key Turning Points" },
  { id: "outcomes", label: "Outcomes" },
  { id: "quote", label: "In Their Words" },
];

export default function CaseStudyDetailPage({ params }: Params) {
  const study = CASE_STUDIES.find((s) => s.slug === params.slug);
  if (!study) notFound();

  const related = CASE_STUDIES.filter((s) => s.slug !== study.slug).slice(0, 2);
  const full = study.full;

  return (
    <>
      {/* Hero */}
      <header className="relative">
        <div className="relative h-[42vh] min-h-[320px] w-full">
          <Image
            src={study.image}
            alt={`${study.title} — ${study.industry}`}
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-ink/65" />
          <div className="absolute inset-0 flex items-end">
            <div className="container-content pb-10">
              <span className="rounded-full bg-accent-alt/20 px-3 py-1 text-sm font-medium text-accent-alt">
                {study.category}
              </span>
              <h1 className="mt-4 max-w-3xl font-display text-hero font-extrabold text-bg">
                {study.title}
              </h1>
              <p className="mt-3 text-body-lg text-bg/80">{study.subtitle}</p>
            </div>
          </div>
        </div>
      </header>

      {full ? (
        <div className="container-content grid gap-12 py-16 md:py-24 lg:grid-cols-[220px_1fr] lg:gap-16">
          {/* Sticky TOC */}
          <aside className="hidden lg:block">
            <nav aria-label="On this page" className="sticky top-28">
              <p className="eyebrow text-ink-muted">On this page</p>
              <ul className="mt-4 space-y-2 text-sm">
                {TOC.map((item) => (
                  <li key={item.id}>
                    <a
                      href={`#${item.id}`}
                      className="text-ink-muted underline-offset-4 hover:text-accent hover:underline"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </aside>

          <article className="max-w-2xl">
            {/* Outcome metric grid */}
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
              {full.metrics.map((m) => (
                <div
                  key={m.label}
                  className="rounded-2xl border border-border bg-surface p-5"
                >
                  <p className="text-xs uppercase tracking-wide text-ink-muted">
                    {m.label}
                  </p>
                  <p className="mt-2 text-sm text-ink-muted line-through">
                    {m.before}
                  </p>
                  <p className="font-display text-lg font-bold text-accent">
                    {m.after}
                  </p>
                </div>
              ))}
            </div>

            <Section id="challenge" title="The Challenge" body={full.challenge} />
            <Section
              id="approach"
              title="Coaching Approach"
              body={full.approach}
            />

            <AnimatedSection as="section" className="mt-12">
              <h2
                id="turning-points"
                className="scroll-mt-28 font-display text-title font-semibold text-ink"
              >
                Key Turning Points
              </h2>
              <ul className="mt-4 space-y-3">
                {full.turningPoints.map((p) => (
                  <li
                    key={p}
                    className="border-l-4 border-accent-alt pl-5 text-body text-ink-muted"
                  >
                    {p}
                  </li>
                ))}
              </ul>
            </AnimatedSection>

            <Section id="outcomes" title="Outcomes" body={full.outcomes} />

            <AnimatedSection as="section" className="mt-12">
              <h2 id="quote" className="sr-only">
                In Their Words
              </h2>
              <blockquote className="scroll-mt-28 rounded-2xl border border-border bg-surface p-8">
                <p className="font-display text-title italic text-ink">
                  &ldquo;{full.quote}&rdquo;
                </p>
                <footer className="mt-4 text-sm font-medium text-ink-muted">
                  — {full.quoteAuthor}
                </footer>
              </blockquote>
            </AnimatedSection>
          </article>
        </div>
      ) : (
        <div className="container-content py-24 text-center md:py-32">
          <AnimatedSection className="mx-auto max-w-xl">
            <SectionLabel>{study.category}</SectionLabel>
            <p className="mt-4 font-display text-title font-semibold text-ink">
              Full case study coming soon.
            </p>
            <p className="mt-3 text-body text-ink-muted">
              We&apos;re writing up the full story behind &ldquo;{study.title}
              &rdquo;. In the meantime, the headline result speaks for itself:{" "}
              <span className="font-medium text-accent">{study.outcome}</span>.
            </p>
            <div className="mt-8 flex justify-center">
              <Button href="/contact" variant="primary" withArrow>
                Book a Call
              </Button>
            </div>
          </AnimatedSection>
        </div>
      )}

      {/* Related */}
      <section className="bg-surface py-20 md:py-24">
        <div className="container-content">
          <h2 className="font-display text-hero font-extrabold text-ink">
            More case studies
          </h2>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {related.map((s, i) => (
              <CaseStudyCard key={s.slug} study={s} delay={(i % 2) * 0.1} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-ink">
        <AnimatedSection className="container-content py-20 text-center md:py-24">
          <h2 className="font-display text-hero font-extrabold text-bg">
            Ready to write your own case study?
          </h2>
          <div className="mt-8 flex justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-accent-alt px-10 py-5 font-display text-lg font-extrabold text-ink transition-colors hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-alt focus-visible:ring-offset-2 focus-visible:ring-offset-ink"
            >
              Book a Call
            </Link>
          </div>
        </AnimatedSection>
      </section>
    </>
  );
}

function Section({
  id,
  title,
  body,
}: {
  id: string;
  title: string;
  body: string;
}) {
  return (
    <AnimatedSection as="section" className="mt-12">
      <h2
        id={id}
        className="scroll-mt-28 font-display text-title font-semibold text-ink"
      >
        {title}
      </h2>
      <p className="mt-4 text-body-lg text-ink-muted">{body}</p>
    </AnimatedSection>
  );
}
