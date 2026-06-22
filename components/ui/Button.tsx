import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { ReactNode } from "react";

type Variant = "primary" | "ghost" | "text" | "invert";
type Size = "md" | "lg";

interface ButtonProps {
  children: ReactNode;
  href: string;
  variant?: Variant;
  size?: Size;
  /** Show a trailing arrow icon. */
  withArrow?: boolean;
  className?: string;
  "aria-label"?: string;
}

const base =
  "inline-flex items-center justify-center font-display font-semibold transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-bg";

const variants: Record<Variant, string> = {
  primary:
    "rounded-full bg-cta text-cta-text hover:bg-accent",
  ghost:
    "rounded-full bg-cta-ghost border border-border text-ink hover:border-ink",
  invert:
    "rounded-full bg-accent-alt text-ink hover:bg-white",
  text: "text-accent hover:underline underline-offset-4 gap-1",
};

const sizes: Record<Size, string> = {
  md: "px-6 py-2.5 text-base gap-2",
  lg: "px-8 py-4 text-base gap-2",
};

/**
 * Pill button rendered as a Next.js Link for crawlability and prefetching.
 * Variants: primary (dark), ghost (bordered), invert (lime on dark), text.
 */
export default function Button({
  children,
  href,
  variant = "primary",
  size = "md",
  withArrow = false,
  className = "",
  ...rest
}: ButtonProps) {
  const sizeClasses = variant === "text" ? "" : sizes[size];
  return (
    <Link
      href={href}
      className={`${base} ${variants[variant]} ${sizeClasses} ${className}`}
      {...rest}
    >
      {children}
      {withArrow && <ArrowRight className="h-4 w-4" aria-hidden="true" />}
    </Link>
  );
}
