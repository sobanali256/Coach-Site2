import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { SITE } from "@/lib/data";

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: "Meridian Coaching — Executive & Life Coaching for Leaders",
    template: "%s | Meridian Coaching",
  },
  description:
    "Executive and life coaching for leaders who want clarity, direction, and measurable career results. Book a free clarity call today.",
  keywords: [
    "executive coaching",
    "leadership coach",
    "career coaching",
    "life coaching",
    "leadership development",
  ],
  robots: { index: true, follow: true },
  openGraph: {
    title: "Meridian Coaching — Executive & Life Coaching for Leaders",
    description:
      "Executive and life coaching for leaders who want clarity, direction, and measurable career results.",
    url: SITE.url,
    siteName: SITE.name,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Meridian Coaching",
    description:
      "Executive and life coaching for leaders who want clarity, direction, and measurable career results.",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: SITE.name,
  "@id": SITE.url,
  url: SITE.url,
  description:
    "Executive and life coaching for leaders who want clarity, direction, and measurable career results.",
  serviceType: [
    "Executive Coaching",
    "Career Coaching",
    "Leadership Development",
  ],
  areaServed: ["United States", "United Kingdom"],
  priceRange: "$$",
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "customer service",
    email: SITE.email,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-ink focus:px-5 focus:py-2.5 focus:font-display focus:text-sm focus:font-semibold focus:text-cta-text"
        >
          Skip to main content
        </a>
        <Navbar />
        <main id="main">{children}</main>
        <Footer />
        <Script
          id="ld-json-localbusiness"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
