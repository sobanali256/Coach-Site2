import Link from "next/link";
import Image from "next/image";
import HoverCard from "@/components/common/HoverCard";
import type { CaseStudy } from "@/types";

interface CaseStudyCardProps {
  study: CaseStudy;
  delay?: number;
}

export default function CaseStudyCard({ study, delay = 0 }: CaseStudyCardProps) {
  return (
    <HoverCard delay={delay} className="overflow-hidden">
      <div className="relative aspect-[16/9] w-full">
        <Image
          src={study.image}
          alt={`${study.title} — ${study.industry}`}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover"
        />
        <span className="absolute left-4 top-4 rounded-full bg-ink/80 px-3 py-1 text-xs font-medium text-cta-text backdrop-blur-sm">
          Case Study
        </span>
      </div>
      <div className="p-6">
        <h3 className="font-display text-title font-semibold text-ink">
          {study.title}
        </h3>
        <p className="mt-1 text-body text-ink-muted">{study.subtitle}</p>
        <span className="mt-4 inline-block rounded-full bg-accent-alt/20 px-3 py-1 text-sm font-medium text-accent">
          ↑ {study.outcome}
        </span>
        <div className="mt-5">
          <Link
            href={`/case-studies/${study.slug}`}
            className="font-display font-medium text-accent underline-offset-4 hover:underline"
          >
            Read Case Study →
          </Link>
        </div>
      </div>
    </HoverCard>
  );
}
