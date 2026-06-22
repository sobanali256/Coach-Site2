import type { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
}

/** Generic bordered card shell — Redis-inspired, no shadow. */
export default function Card({ children, className = "" }: CardProps) {
  return (
    <div
      className={`rounded-2xl border border-border bg-surface p-8 ${className}`}
    >
      {children}
    </div>
  );
}
