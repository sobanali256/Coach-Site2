"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { useId } from "react";
import { EASE_OUT_EXPO } from "@/lib/motion";

interface BlobImageProps {
  src: string;
  alt: string;
  /** Pass true only for the LCP hero image. */
  priority?: boolean;
  className?: string;
}

/**
 * Organic blob-masked image with a decorative lime accent blob behind it.
 * The mask is an SVG clipPath in objectBoundingBox units, so it scales to
 * any container size. Mounts with a subtle scale + fade (reduced-motion aware).
 */
export default function BlobImage({
  src,
  alt,
  priority = false,
  className = "",
}: BlobImageProps) {
  const rawId = useId().replace(/[:]/g, "");
  const clipId = `blob-${rawId}`;
  const reduce = useReducedMotion();

  return (
    <div className={`relative aspect-square w-full ${className}`}>
      {/* Decorative accent blob — sits behind, lower-right, 60% opacity */}
      <div
        aria-hidden="true"
        className="absolute bottom-0 right-0 h-[42%] w-[42%] translate-x-2 translate-y-2 rounded-[42%_58%_58%_42%/52%_44%_56%_48%] bg-accent-alt/60"
      />

      <svg
        aria-hidden="true"
        width="0"
        height="0"
        className="absolute"
        focusable="false"
      >
        <defs>
          <clipPath id={clipId} clipPathUnits="objectBoundingBox">
            <path d="M0.5,0.02 C0.79,0 0.99,0.22 0.98,0.48 C0.97,0.73 0.86,0.99 0.56,0.99 C0.31,0.99 0.02,0.87 0.02,0.55 C0.02,0.28 0.21,0.04 0.5,0.02 Z" />
          </clipPath>
        </defs>
      </svg>

      <motion.div
        className="relative h-full w-full"
        style={{ clipPath: `url(#${clipId})`, willChange: "transform" }}
        initial={reduce ? false : { opacity: 0, scale: 0.92 }}
        animate={reduce ? undefined : { opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.3, ease: EASE_OUT_EXPO }}
      >
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          sizes="(max-width: 1024px) 90vw, 45vw"
          className="object-cover"
        />
      </motion.div>
    </div>
  );
}
