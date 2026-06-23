"use client";

import Link from "next/link";
import { SERVICES } from "@/lib/data";
import SectionHeader from "@/components/ui/SectionHeader";
import Button from "@/components/ui/Button";
import { motion } from "framer-motion";

export default function Services() {
  const cardA = SERVICES[0];
  const cardB = SERVICES[1];
  const cardC = SERVICES[2];

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

        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-[1.25rem]">
          {/* Card A — "Executive Coaching" */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5 }}
            className="group relative flex flex-col justify-between bg-accent text-white min-h-[480px] rounded-2xl md:row-span-2 p-8 overflow-hidden transition-all duration-300 ease-out hover:-translate-y-[3px] hover:shadow-[0_16px_48px_rgba(0,0,0,0.3)]"
            style={{ border: "1px solid rgba(255,255,255,0.1)" }}
          >
            <div
              className="absolute top-[1.25rem] right-[1.5rem] pointer-events-none select-none"
              style={{
                fontFamily: "Georgia, serif",
                fontSize: "clamp(8.4rem, 16.8vw, 14rem)",
                fontWeight: 300,
                opacity: 0.28,
                color: "white",
                lineHeight: 1,
              }}
            >
              01
            </div>

            <div className="h-8 pointer-events-none" />

            <div className="relative z-10 mt-auto mb-8">
              <h3 className="font-display text-4xl font-semibold">
                {cardA.title}
              </h3>
              <p className="mt-3 text-base font-light leading-relaxed opacity-80">
                {cardA.description}
              </p>
              <Link
                href={`/services#${cardA.slug}`}
                className="mt-4 inline-block text-base text-white underline-offset-4 hover:underline"
              >
                Learn More →
              </Link>
            </div>
          </motion.div>

          {/* Card B — "Career Clarity Coaching" */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.45, delay: 0.1 }}
            className="group relative flex flex-col overflow-hidden bg-surface text-ink rounded-2xl border border-border p-8 transition-all duration-300 ease-out hover:-translate-y-[3px] hover:shadow-[0_12px_32px_rgba(0,0,0,0.12)]"
          >
            <div
              className="absolute top-[1.25rem] right-[1.5rem] text-ink pointer-events-none select-none"
              style={{
                fontFamily: "Georgia, serif",
                fontSize: "clamp(6rem, 12vw, 10rem)",
                fontWeight: 300,
                opacity: 0.10,
                lineHeight: 1,
              }}
            >
              02
            </div>
            <div className="relative z-10">
              <h3 className="font-display text-xl font-semibold">
                {cardB.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-ink-muted">
                {cardB.description}
              </p>
              <Link
                href={`/services#${cardB.slug}`}
                className="mt-4 inline-block text-sm font-medium text-accent underline-offset-4 hover:underline"
              >
                Learn More →
              </Link>
            </div>
          </motion.div>

          {/* Card C — "Leadership Development" */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.45, delay: 0.2 }}
            className="group relative flex flex-col overflow-hidden bg-ink text-[#EDE9E3] rounded-2xl p-8 transition-all duration-300 ease-out hover:-translate-y-[3px] hover:shadow-[0_12px_32px_rgba(0,0,0,0.12)]"
            style={{ border: "1px solid rgba(255,255,255,0.07)" }}
          >
            <div
              className="absolute top-[1.25rem] right-[1.5rem] text-white pointer-events-none select-none"
              style={{
                fontFamily: "Georgia, serif",
                fontSize: "clamp(6rem, 12vw, 10rem)",
                fontWeight: 300,
                opacity: 0.15,
                lineHeight: 1,
              }}
            >
              03
            </div>
            <div className="relative z-10">
              <h3 className="font-display text-xl font-semibold text-white">
                {cardC.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed opacity-70">
                {cardC.description}
              </p>
              <Link
                href={`/services#${cardC.slug}`}
                className="mt-4 inline-block text-sm font-medium text-accent-alt underline-offset-4 hover:underline"
              >
                Learn More →
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
