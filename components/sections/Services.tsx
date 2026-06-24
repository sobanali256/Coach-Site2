"use client";

import Link from "next/link";
import { SERVICES } from "@/lib/data";
import SectionHeader from "@/components/ui/SectionHeader";
import Button from "@/components/ui/Button";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";

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

        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Card A — "Executive Coaching" */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5 }}
            className="group relative flex flex-col bg-accent text-white rounded-3xl md:row-span-2 p-6 lg:p-8 overflow-hidden border border-white/15 transition-all duration-500 ease-out hover:-translate-y-1 hover:shadow-[0_20px_60px_rgba(61,107,53,0.3)]"
          >
            <div className="flex items-center justify-between relative z-10 mb-6">
              <span className="font-display text-xs font-bold uppercase tracking-[0.2em] text-white/70 px-3.5 py-1.5 rounded-full border border-white/20 backdrop-blur-md">
                Premier Program
              </span>
              <div className="font-display text-5xl lg:text-6xl font-extrabold tracking-tighter text-white/20 select-none transition-transform duration-500 group-hover:scale-105 group-hover:text-white/30">
                01
              </div>
            </div>

            <div className="relative z-10 mb-6">
              <h3 className="font-display text-2xl lg:text-3xl font-bold tracking-tight">
                {cardA.title}
              </h3>
              <p className="mt-2 text-sm lg:text-base font-light leading-relaxed text-white/80 max-w-md">
                {cardA.description}
              </p>
            </div>

            {/* Premium Feature List */}
            <div className="relative z-10 mb-8 flex flex-col gap-2.5 border-y border-white/10 py-4 my-auto">
              <div className="text-[11px] font-semibold tracking-wider text-white/60 uppercase mb-0.5">Program Highlights</div>
              <div className="flex items-center gap-2.5 text-sm text-white/90">
                <CheckCircle2 className="h-4 w-4 text-white/60 shrink-0" />
                <span>1:1 Intensive Strategy Sessions</span>
              </div>
              <div className="flex items-center gap-2.5 text-sm text-white/90">
                <CheckCircle2 className="h-4 w-4 text-white/60 shrink-0" />
                <span>360° Executive Leadership Assessment</span>
              </div>
              <div className="flex items-center gap-2.5 text-sm text-white/90">
                <CheckCircle2 className="h-4 w-4 text-white/60 shrink-0" />
                <span>Direct On-Demand Advisory Support</span>
              </div>
              <div className="flex items-center gap-2.5 text-sm text-white/90">
                <CheckCircle2 className="h-4 w-4 text-white/60 shrink-0" />
                <span>Bespoke Board & C-Suite Positioning</span>
              </div>
            </div>

            <div className="relative z-10 mt-auto pt-4 border-t border-white/10 flex items-center justify-between">
              <span className="text-xs lg:text-sm font-medium text-white/70">6-Month Partnership</span>
              <Link
                href={`/services#${cardA.slug}`}
                className="inline-flex items-center gap-1.5 text-sm lg:text-base font-semibold text-white group/btn underline-offset-4 hover:underline"
              >
                <span>Learn More</span>
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
              </Link>
            </div>

            {/* Subtle background gradient glow on hover */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100 pointer-events-none" />
          </motion.div>

          {/* Card B — "Career Clarity Coaching" */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.45, delay: 0.1 }}
            className="group relative flex flex-col overflow-hidden bg-surface text-ink rounded-3xl border border-border/80 p-6 lg:p-8 transition-all duration-500 ease-out hover:-translate-y-1 hover:shadow-[0_16px_48px_rgba(0,0,0,0.08)]"
          >
            <div className="flex items-center justify-between relative z-10 mb-4">
              <span className="font-display text-xs font-bold uppercase tracking-[0.2em] text-ink-muted px-3.5 py-1.5 rounded-full border border-border bg-bg/50">
                8-Week Sprint
              </span>
              <div className="font-display text-4xl lg:text-5xl font-extrabold tracking-tighter text-ink/10 select-none transition-transform duration-500 group-hover:scale-105 group-hover:text-ink/20">
                02
              </div>
            </div>

            <div className="relative z-10 mb-6">
              <h3 className="font-display text-xl lg:text-2xl font-bold tracking-tight">
                {cardB.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-muted max-w-md">
                {cardB.description}
              </p>
            </div>

            {/* Premium Feature Tags */}
            <div className="relative z-10 mb-6 flex flex-wrap gap-2 my-auto">
              <span className="text-[11px] font-semibold px-2.5 py-1 bg-bg border border-border rounded-lg text-ink-muted">Career Trajectory</span>
              <span className="text-[11px] font-semibold px-2.5 py-1 bg-bg border border-border rounded-lg text-ink-muted">Targeted Roadmap</span>
              <span className="text-[11px] font-semibold px-2.5 py-1 bg-bg border border-border rounded-lg text-ink-muted">Interview Pitch</span>
            </div>

            <div className="relative z-10 mt-auto pt-4 border-t border-border flex items-center justify-between">
              <span className="text-xs lg:text-sm font-medium text-ink-muted">Intensive Framework</span>
              <Link
                href={`/services#${cardB.slug}`}
                className="inline-flex items-center gap-1.5 text-sm lg:text-base font-semibold text-accent group/btn underline-offset-4 hover:underline"
              >
                <span>Learn More</span>
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
              </Link>
            </div>
          </motion.div>

          {/* Card C — "Leadership Development" */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.45, delay: 0.2 }}
            className="group relative flex flex-col overflow-hidden bg-ink text-[#EDE9E3] rounded-3xl border border-white/10 p-6 lg:p-8 transition-all duration-500 ease-out hover:-translate-y-1 hover:shadow-[0_16px_48px_rgba(0,0,0,0.2)]"
          >
            <div className="flex items-center justify-between relative z-10 mb-4">
              <span className="font-display text-xs font-bold uppercase tracking-[0.2em] text-accent-alt px-3.5 py-1.5 rounded-full border border-accent-alt/30 bg-accent-alt/10">
                Organizations
              </span>
              <div className="font-display text-4xl lg:text-5xl font-extrabold tracking-tighter text-white/10 select-none transition-transform duration-500 group-hover:scale-105 group-hover:text-white/20">
                03
              </div>
            </div>

            <div className="relative z-10 mb-6">
              <h3 className="font-display text-xl lg:text-2xl font-bold tracking-tight text-white">
                {cardC.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed opacity-80 max-w-md">
                {cardC.description}
              </p>
            </div>

            {/* Premium Feature Tags */}
            <div className="relative z-10 mb-6 flex flex-wrap gap-2 my-auto">
              <span className="text-[11px] font-semibold px-2.5 py-1 bg-white/5 border border-white/10 rounded-lg text-white/70">Team Scaling</span>
              <span className="text-[11px] font-semibold px-2.5 py-1 bg-white/5 border border-white/10 rounded-lg text-white/70">Cultural Intentionality</span>
              <span className="text-[11px] font-semibold px-2.5 py-1 bg-white/5 border border-white/10 rounded-lg text-white/70">Custom Scope</span>
            </div>

            <div className="relative z-10 mt-auto pt-4 border-t border-white/10 flex items-center justify-between">
              <span className="text-xs lg:text-sm font-medium text-white/60">Bespoke Engagements</span>
              <Link
                href={`/services#${cardC.slug}`}
                className="inline-flex items-center gap-1.5 text-sm lg:text-base font-semibold text-accent-alt group/btn underline-offset-4 hover:underline"
              >
                <span>Learn More</span>
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

