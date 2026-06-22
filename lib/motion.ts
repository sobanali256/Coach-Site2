import type { Variants } from "framer-motion";

/** Custom ease-out-expo curve used across all scroll animations. */
export const EASE_OUT_EXPO = [0.22, 1, 0.36, 1] as const;

/** Scroll-triggered fade-up for a single element. */
export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: EASE_OUT_EXPO },
  },
};

/** Container that staggers its children in sequence. */
export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1 },
  },
};

/** Standard viewport config: animate once, slightly before fully in view. */
export const viewportOnce = { once: true, margin: "-80px" } as const;
