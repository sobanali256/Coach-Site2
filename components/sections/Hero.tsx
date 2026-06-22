"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Star } from "lucide-react";
import Button from "@/components/ui/Button";
import SplitHeadline from "@/components/ui/SplitHeadline";
import BlobImage from "@/components/common/BlobImage";
import { EASE_OUT_EXPO } from "@/lib/motion";

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: EASE_OUT_EXPO },
  },
};

export default function Hero() {
  const reduce = useReducedMotion();

  return (
    <section className="container-content grid items-center gap-12 py-16 lg:min-h-[calc(100vh-73px)] lg:grid-cols-2 lg:gap-16 lg:py-20">
      {/* Left — blob image */}
      <div className="order-2 lg:order-1">
        <BlobImage
          src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=1200"
          alt="Executive coach in a bright professional setting, smiling confidently"
          priority
          className="mx-auto max-w-md lg:max-w-none"
        />
      </div>

      {/* Right — text */}
      <motion.div
        className="order-1 lg:order-2"
        variants={reduce ? undefined : container}
        initial={reduce ? false : "hidden"}
        animate={reduce ? undefined : "visible"}
      >
        <motion.p
          variants={reduce ? undefined : item}
          className="eyebrow text-ink-muted"
        >
          Executive &amp; Life Coaching
        </motion.p>

        <motion.div variants={reduce ? undefined : item} className="mt-5">
          <SplitHeadline
            as="h1"
            className="text-display"
            parts={[
              { text: "Turn Clarity\nInto Your\n" },
              { text: "Competitive Edge.", accent: true },
            ]}
          />
        </motion.div>

        <motion.p
          variants={reduce ? undefined : item}
          className="mt-6 max-w-xl text-body-lg text-ink-muted"
        >
          Executive coaching for leaders who are done playing small. We help you
          lead with precision, communicate your vision, and build the career you
          actually want.
        </motion.p>

        <motion.div
          variants={reduce ? undefined : item}
          className="mt-8 flex flex-col gap-3 sm:flex-row"
        >
          <Button href="/contact" variant="primary" size="lg" withArrow>
            Book My Free Clarity Call
          </Button>
          <Button href="/#process" variant="ghost" size="lg">
            See How It Works
          </Button>
        </motion.div>

        <motion.p
          variants={reduce ? undefined : item}
          className="mt-6 flex items-center gap-2 text-sm text-ink-muted"
        >
          <span className="flex" aria-hidden="true">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star
                key={i}
                className="h-4 w-4 fill-accent-alt text-accent-alt"
              />
            ))}
          </span>
          Trusted by 200+ executives across the US &amp; UK
        </motion.p>
      </motion.div>
    </section>
  );
}
