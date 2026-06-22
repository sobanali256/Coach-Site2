import type { LucideIcon } from "lucide-react";

/** A segment of a split-weight headline. Accent segments render lime + bold. */
export interface HeadlinePart {
  text: string;
  accent?: boolean;
}

export interface NavLink {
  label: string;
  href: string;
}

export interface Service {
  slug: string;
  title: string;
  icon: LucideIcon;
  description: string;
  length: string;
  format: string;
  forWho: string;
  outcomes: string[];
}

export interface CaseStudy {
  slug: string;
  title: string;
  client: string;
  industry: string;
  subtitle: string;
  outcome: string;
  category: "Executive" | "Career" | "Team";
  image: string;
  /** Only the flagship study has full body content. */
  full?: CaseStudyDetail;
}

export interface CaseStudyDetail {
  challenge: string;
  approach: string;
  turningPoints: string[];
  outcomes: string;
  quote: string;
  quoteAuthor: string;
  metrics: { label: string; before: string; after: string }[];
}

export interface Testimonial {
  quote: string;
  name: string;
  title: string;
  avatar: string;
}

export interface ProcessStep {
  number: string;
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface Stat {
  value: number;
  suffix: string;
  prefix?: string;
  label: string;
  /** When the number is non-integer (e.g. 4.9) keep a decimal in the counter. */
  decimals?: number;
}

export interface PricingTier {
  name: string;
  price: string;
  cadence: string;
  description: string;
  features: string[];
  highlighted?: boolean;
  cta: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}
