"use client";

import { useState, type FormEvent } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { CheckCircle2, ChevronDown } from "lucide-react";
import { SITE } from "@/lib/data";

const fieldClasses =
  "w-full rounded-xl border border-border bg-bg px-4 py-3 text-ink placeholder-ink-muted focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const reduce = useReducedMotion();

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    // Presentational only — no network request on this static portfolio site.
    e.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <motion.div
        initial={reduce ? false : { opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        className="flex flex-col items-center rounded-2xl border border-border bg-surface p-10 text-center"
        role="status"
        aria-live="polite"
      >
        <CheckCircle2 className="h-12 w-12 text-accent" aria-hidden="true" />
        <h2 className="mt-5 font-display text-title font-semibold text-ink">
          Request received.
        </h2>
        <p className="mt-3 text-body text-ink-muted">
          We&apos;ll be in touch within 24 hours to find a time for your free
          clarity call.
        </p>
      </motion.div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-2xl border border-border bg-surface p-8"
      noValidate
    >
      <div className="grid gap-5">
        <div>
          <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-ink">
            Name
          </label>
          <input id="name" name="name" type="text" required autoComplete="name" placeholder="Jane Doe" className={fieldClasses} />
        </div>

        <div>
          <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-ink">
            Email
          </label>
          <input id="email" name="email" type="email" required autoComplete="email" placeholder="jane@company.com" className={fieldClasses} />
        </div>

        <div>
          <label htmlFor="linkedin" className="mb-1.5 block text-sm font-medium text-ink">
            LinkedIn URL <span className="text-ink-muted">(optional)</span>
          </label>
          <input id="linkedin" name="linkedin" type="url" placeholder="https://linkedin.com/in/…" className={fieldClasses} />
        </div>

        <div>
          <label htmlFor="role" className="mb-1.5 block text-sm font-medium text-ink">
            Role / Title
          </label>
          <input id="role" name="role" type="text" placeholder="VP of Strategy" className={fieldClasses} />
        </div>

        <div>
          <label htmlFor="type" className="mb-1.5 block text-sm font-medium text-ink">
            Coaching type
          </label>
          <div className="relative">
            <select
              id="type"
              name="type"
              defaultValue="Executive"
              className={`${fieldClasses} cursor-pointer appearance-none pr-11 [color-scheme:light]`}
            >
              <option value="Executive">Executive Coaching</option>
              <option value="Career">Career Clarity</option>
              <option value="Team">Team / Leadership</option>
            </select>
            <ChevronDown
              className="pointer-events-none absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 text-ink-muted"
              aria-hidden="true"
            />
          </div>
        </div>

        <div>
          <label htmlFor="challenge" className="mb-1.5 block text-sm font-medium text-ink">
            What&apos;s your biggest challenge right now?{" "}
            <span className="text-ink-muted">(optional)</span>
          </label>
          <textarea id="challenge" name="challenge" rows={4} placeholder="Tell us a little about where you're stuck…" className={fieldClasses} />
        </div>

        <button
          type="submit"
          className="w-full rounded-full bg-cta px-8 py-4 font-display font-semibold text-cta-text transition-colors duration-200 hover:bg-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-surface"
        >
          Send My Request
        </button>

        <p className="text-center text-sm text-ink-muted">
          Prefer email?{" "}
          <a href={`mailto:${SITE.email}`} className="text-accent underline-offset-4 hover:underline">
            {SITE.email}
          </a>
        </p>
      </div>
    </form>
  );
}
