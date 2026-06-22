import Link from "next/link";
import { ArrowRight, Lock, ShieldCheck, Ban } from "lucide-react";
import AnimatedSection from "@/components/common/AnimatedSection";
import { SITE } from "@/lib/data";

export default function FinalCTA() {
  return (
    <section className="bg-ink">
      <AnimatedSection className="container-content py-24 text-center md:py-32">
        <div className="mx-auto max-w-2xl">
          <h2 className="font-display text-hero font-extrabold text-bg">
            Ready to lead with more clarity?
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-body-lg text-bg/80">
            Book a free 45-minute discovery call. No obligation, no pitch deck.
            Just a real conversation about where you want to go.
          </p>
          <div className="mt-8 flex justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-accent-alt px-10 py-5 font-display text-lg font-extrabold text-ink transition-colors duration-200 hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-alt focus-visible:ring-offset-2 focus-visible:ring-offset-ink"
            >
              Book My Free Call
              <ArrowRight className="h-5 w-5" aria-hidden="true" />
            </Link>
          </div>
          <p className="mt-6 text-sm text-bg/60">
            Or email directly:{" "}
            <a
              href={`mailto:${SITE.email}`}
              className="underline-offset-4 hover:underline"
            >
              {SITE.email}
            </a>
          </p>
          <ul className="mt-6 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-bg/55">
            <li className="flex items-center gap-2">
              <Lock className="h-4 w-4 text-accent-alt" aria-hidden="true" />
              Free
            </li>
            <li className="flex items-center gap-2">
              <ShieldCheck className="h-4 w-4 text-accent-alt" aria-hidden="true" />
              Confidential
            </li>
            <li className="flex items-center gap-2">
              <Ban className="h-4 w-4 text-accent-alt" aria-hidden="true" />
              No commitment
            </li>
          </ul>
        </div>
      </AnimatedSection>
    </section>
  );
}
