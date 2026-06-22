import Link from "next/link";
import { Linkedin, Instagram, Twitter } from "lucide-react";
import { SITE, NAV_LINKS, SERVICES } from "@/lib/data";

const socials = [
  { label: "LinkedIn", href: "https://linkedin.com", Icon: Linkedin },
  { label: "Instagram", href: "https://instagram.com", Icon: Instagram },
  { label: "Twitter", href: "https://twitter.com", Icon: Twitter },
];

export default function Footer() {
  return (
    <footer className="bg-ink text-bg">
      <div className="container-content py-16">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <span className="block font-display text-xl font-extrabold">
              MERIDIAN
            </span>
            <p className="mt-3 max-w-xs text-sm text-bg/70">
              Executive and life coaching for leaders who want clarity,
              direction, and measurable results.
            </p>
            <ul className="mt-5 flex gap-3">
              {socials.map(({ label, href, Icon }) => (
                <li key={label}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-bg transition-colors hover:text-accent-alt focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-alt"
                  >
                    <Icon className="h-4 w-4" aria-hidden="true" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Navigate */}
          <nav aria-label="Footer navigation">
            <h2 className="font-display text-sm font-semibold uppercase tracking-wider text-bg/60">
              Navigate
            </h2>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li>
                <Link href="/" className="text-bg/85 hover:underline">
                  Home
                </Link>
              </li>
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-bg/85 hover:underline">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Programs */}
          <nav aria-label="Programs">
            <h2 className="font-display text-sm font-semibold uppercase tracking-wider text-bg/60">
              Programs
            </h2>
            <ul className="mt-4 space-y-2.5 text-sm">
              {SERVICES.map((service) => (
                <li key={service.slug}>
                  <Link
                    href={`/services#${service.slug}`}
                    className="text-bg/85 hover:underline"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Connect */}
          <div>
            <h2 className="font-display text-sm font-semibold uppercase tracking-wider text-bg/60">
              Connect
            </h2>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li>
                <a
                  href={`mailto:${SITE.email}`}
                  className="text-bg/85 hover:underline"
                >
                  {SITE.email}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${SITE.phone.replace(/[^+\d]/g, "")}`}
                  className="text-bg/85 hover:underline"
                >
                  {SITE.phone}
                </a>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="font-medium text-accent-alt hover:underline"
                >
                  Book a Call
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 border-t border-white/10 pt-6">
          <div className="flex flex-col items-start justify-between gap-3 text-sm text-bg/50 sm:flex-row sm:items-center">
            <p>© 2025 Meridian Coaching. All rights reserved.</p>
            <p>
              <Link href="/" className="hover:underline">
                Privacy Policy
              </Link>{" "}
              ·{" "}
              <Link href="/" className="hover:underline">
                Terms
              </Link>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
