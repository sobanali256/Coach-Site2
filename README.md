# Meridian Coaching — Portfolio Website

A premium, conversion-optimized portfolio website for executive / life / leadership
coaches. Built with **Next.js 14 (App Router)**, **TypeScript (strict)**,
**Tailwind CSS**, and **Framer Motion**. Static-export friendly and deploy-ready
on Vercel — no backend required.

## Getting started

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm start        # serve the production build
npm run lint     # eslint
```

## Pages

| Route                     | Description                                   |
| ------------------------- | --------------------------------------------- |
| `/`                       | Homepage (hero, marquee, stats, services, case studies, process, testimonials, CTA) |
| `/about`                  | Coach bio, philosophy, credentials            |
| `/services`               | Programs, pricing, FAQ accordion              |
| `/case-studies`           | Filterable case study index                   |
| `/case-studies/[slug]`    | Individual case study (one full, rest skeleton) |
| `/contact`                | Booking form (presentational, no backend)     |
| `/blog`                   | Resources placeholder                         |

## Editing content

All copy lives in **`lib/data.ts`** as typed constants — services, case studies,
testimonials, stats, pricing, FAQs, and site details (email/phone/name). Update
that file to change site content without touching components.

Design tokens (colors, type scale) live in **`app/globals.css`**
(CSS custom properties) and are mapped to Tailwind classes in
**`tailwind.config.ts`** (e.g. `bg-accent`, `text-ink`, `text-display`).

## Key design pieces

- `components/ui/SplitHeadline.tsx` — the signature split-weight headline (lime accent words).
- `components/common/BlobImage.tsx` — organic SVG `clipPath` image mask.
- `components/sections/Marquee.tsx` — CSS-only diagonal scrolling banner.
- `components/sections/Stats.tsx` — count-up stats (Framer `useSpring`).

## SEO & accessibility

- Per-page metadata via the Next.js Metadata API + canonical URLs.
- JSON-LD `LocalBusiness` (layout) and `Person` (about) structured data.
- `app/sitemap.ts` + `app/robots.ts` generated automatically.
- Semantic landmarks, skip link, focus rings, `aria-*` on interactive widgets,
  and `prefers-reduced-motion` respected throughout.

> Before going live, replace `https://meridiancoaching.com` (in `lib/data.ts`)
> and the placeholder Unsplash images with the coach's real brand assets.
