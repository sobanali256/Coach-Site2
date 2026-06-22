"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";
import { fadeUp, viewportOnce } from "@/lib/motion";

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  /** HTML tag to render. Defaults to a div. */
  as?: "div" | "section" | "article" | "li" | "header";
  /** Optional delay (seconds) before the fade-up begins. */
  delay?: number;
}

/**
 * Scroll-triggered fade-up wrapper. Animations are disabled automatically
 * when the user prefers reduced motion.
 */
export default function AnimatedSection({
  children,
  className,
  as = "div",
  delay = 0,
}: AnimatedSectionProps) {
  const reduce = useReducedMotion();
  const MotionTag = motion[as];

  if (reduce) {
    const Tag = as;
    return <Tag className={className}>{children}</Tag>;
  }

  return (
    <MotionTag
      className={className}
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      transition={{ delay }}
      style={{ willChange: "transform" }}
    >
      {children}
    </MotionTag>
  );
}
