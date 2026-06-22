"use client";

import { useEffect, useRef } from "react";
import {
  useInView,
  useMotionValue,
  useSpring,
  useReducedMotion,
} from "framer-motion";
import { STATS } from "@/lib/data";
import type { Stat } from "@/types";

function Counter({ stat }: { stat: Stat }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const reduce = useReducedMotion();
  const motionValue = useMotionValue(0);
  const spring = useSpring(motionValue, { duration: 1600, bounce: 0 });

  useEffect(() => {
    if (!inView) return;
    if (reduce) {
      motionValue.jump(stat.value);
      return;
    }
    motionValue.set(stat.value);
  }, [inView, reduce, stat.value, motionValue]);

  useEffect(() => {
    const unsubscribe = spring.on("change", (latest) => {
      if (!ref.current) return;
      ref.current.textContent = `${stat.prefix ?? ""}${latest.toFixed(
        stat.decimals ?? 0,
      )}${stat.suffix}`;
    });
    return unsubscribe;
  }, [spring, stat.prefix, stat.suffix, stat.decimals]);

  const initial = `${stat.prefix ?? ""}${(0).toFixed(stat.decimals ?? 0)}${
    stat.suffix
  }`;

  return (
    <span
      ref={ref}
      className="font-display font-extrabold text-ink"
      style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)", lineHeight: 1 }}
    >
      {initial}
    </span>
  );
}

export default function Stats() {
  return (
    <section className="container-content py-12" aria-label="Results by the numbers">
      <dl className="grid grid-cols-2 gap-y-10 lg:grid-cols-4">
        {STATS.map((stat, i) => (
          <div
            key={stat.label}
            className={`flex flex-col items-center px-4 text-center ${
              i < STATS.length - 1 ? "lg:border-r lg:border-border" : ""
            }`}
          >
            <dt className="sr-only">{stat.label}</dt>
            <dd className="flex flex-col items-center">
              <Counter stat={stat} />
              <span className="mt-3 max-w-[14rem] text-body text-ink-muted">
                {stat.label}
              </span>
            </dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
