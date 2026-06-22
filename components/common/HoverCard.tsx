"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";
import { fadeUp, viewportOnce } from "@/lib/motion";

interface HoverCardProps {
  children: ReactNode;
  className?: string;
  /** Stagger delay (seconds) for grids of cards. */
  delay?: number;
}

/**
 * Bordered card that fades up on scroll and lifts subtly on hover.
 * Border-color hover transition is handled with the `group` + CSS classes
 * passed in via className.
 */
export default function HoverCard({
  children,
  className = "",
  delay = 0,
}: HoverCardProps) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      variants={reduce ? undefined : fadeUp}
      initial={reduce ? false : "hidden"}
      whileInView={reduce ? undefined : "visible"}
      viewport={viewportOnce}
      whileHover={reduce ? undefined : { y: -4 }}
      transition={{ duration: 0.2, delay }}
      style={{ willChange: "transform" }}
      className={`group rounded-2xl border border-border bg-surface transition-colors duration-200 hover:border-accent ${className}`}
    >
      {children}
    </motion.div>
  );
}
