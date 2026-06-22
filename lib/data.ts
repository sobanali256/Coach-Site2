import {
  Target,
  Compass,
  Users,
  Phone,
  Map,
  Calendar,
  TrendingUp,
} from "lucide-react";
import type {
  NavLink,
  Service,
  CaseStudy,
  Testimonial,
  ProcessStep,
  Stat,
  PricingTier,
  FaqItem,
} from "@/types";

export const SITE = {
  name: "Meridian Coaching",
  email: "hello@meridiancoaching.com",
  phone: "+1 (555) 012-3456",
  url: "https://meridiancoaching.com",
} as const;

export const NAV_LINKS: NavLink[] = [
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "Blog", href: "/blog" },
];

export const SERVICES: Service[] = [
  {
    slug: "executive-coaching",
    title: "Executive Coaching",
    icon: Target,
    description:
      "For senior leaders navigating transitions, performance plateaus, or rapid scale. Six-month intensive program.",
    length: "6 Months",
    format: "Bi-weekly 60-min sessions, 1:1",
    forWho: "VPs, C-suite, and founders facing high-stakes inflection points.",
    outcomes: [
      "A sharpened leadership point of view",
      "Confident executive presence under pressure",
      "A decision-making framework you can repeat",
      "Measurable progress against your own KPIs",
    ],
  },
  {
    slug: "career-clarity-coaching",
    title: "Career Clarity Coaching",
    icon: Compass,
    description:
      "For high-achievers who know they're capable of more but can't see the path. Eight-week sprint format.",
    length: "8 Weeks",
    format: "Weekly 60-min sessions, 1:1",
    forWho: "High performers feeling stuck, plateaued, or quietly restless.",
    outcomes: [
      "Clarity on what you actually want next",
      "A concrete 12-month career roadmap",
      "Language to articulate your value",
      "Momentum and accountability week over week",
    ],
  },
  {
    slug: "leadership-development",
    title: "Leadership Development",
    icon: Users,
    description:
      "Team and group coaching for organizations building a culture of intentional leadership. Custom engagements.",
    length: "Custom",
    format: "Group cohorts + workshops",
    forWho: "Teams and orgs scaling their leadership bench with intention.",
    outcomes: [
      "A shared leadership language across the team",
      "Stronger trust and psychological safety",
      "Managers who coach instead of command",
      "Improved retention and team NPS",
    ],
  },
];

export const STATS: Stat[] = [
  { value: 200, suffix: "+", label: "Executives Coached" },
  { value: 94, suffix: "%", label: "Report Career Clarity Within 90 Days" },
  { value: 12, suffix: " Yrs", label: "Combined Coaching Experience" },
  { value: 4.9, suffix: "★", label: "Average Client Rating", decimals: 1 },
];

export const CASE_STUDIES: CaseStudy[] = [
  {
    slug: "vp-to-c-suite",
    title: "From VP to C-Suite in 18 Months",
    client: "Sarah Mitchell",
    industry: "Fortune 500 Tech",
    subtitle: "Sarah Mitchell · Fortune 500 Tech",
    outcome: "VP → Chief Strategy Officer",
    category: "Executive",
    image:
      "https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=800",
    full: {
      challenge:
        "Sarah was a respected VP of Strategy who had stalled. She delivered results but kept being passed over for the executive table. The feedback was vague — 'not quite ready,' 'needs more presence' — and she had no framework for closing the gap.",
      approach:
        "We started by separating signal from noise: what the business actually needed from a Chief Strategy Officer, and where Sarah's real gaps were versus her perceived ones. We rebuilt how she showed up in executive forums, sharpened her narrative, and ran structured rehearsals before every high-stakes meeting.",
      turningPoints: [
        "Reframing 'presence' from personality to a set of repeatable behaviors",
        "Building a one-page strategic narrative she could deliver in any room",
        "A board presentation that became the proof point for her promotion",
      ],
      outcomes:
        "Within 18 months Sarah was promoted to Chief Strategy Officer, expanded her remit to include corporate development, and now mentors two of her own direct reports through the same framework.",
      quote:
        "Working with Meridian changed how I think about leadership entirely. Within three months I had more clarity on my career direction than I had accumulated in ten years of climbing the ladder.",
      quoteAuthor: "Sarah Mitchell, Chief Strategy Officer",
      metrics: [
        { label: "Title", before: "VP, Strategy", after: "Chief Strategy Officer" },
        { label: "Time to promotion", before: "Stalled 3 yrs", after: "18 months" },
        { label: "Direct reports", before: "6", after: "24" },
      ],
    },
  },
  {
    slug: "executive-presence-after-burnout",
    title: "Rebuilding Executive Presence After Burnout",
    client: "James Okafor",
    industry: "Financial Services",
    subtitle: "James Okafor · Financial Services",
    outcome: "Returned stronger, promoted within 6 months",
    category: "Executive",
    image:
      "https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=800",
  },
  {
    slug: "career-pivot-at-45",
    title: "Career Pivot at 45: From Corporate to Founder",
    client: "Diana Reyes",
    industry: "Healthcare",
    subtitle: "Diana Reyes · Healthcare",
    outcome: "Launched company, $1.2M raised Year 1",
    category: "Career",
    image:
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800",
  },
  {
    slug: "leading-a-remote-team",
    title: "Leading a Remote Team of 200",
    client: "Marcus Chen",
    industry: "SaaS",
    subtitle: "Marcus Chen · SaaS",
    outcome: "Team NPS from 52 → 87 in 90 days",
    category: "Team",
    image:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800",
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      "Working with Meridian changed how I think about leadership entirely. Within three months I had more clarity on my career direction than I had accumulated in ten years of climbing the ladder.",
    name: "Sarah M.",
    title: "Chief Strategy Officer",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=96&h=96&fit=crop",
  },
  {
    quote:
      "I came in skeptical. I left with a plan, a promotion, and a completely different relationship with how I show up at work.",
    name: "James O.",
    title: "VP of Finance",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=96&h=96&fit=crop",
  },
  {
    quote:
      "The structured process is what makes it different. It's not therapy, it's not cheerleading. It's a real system for real growth.",
    name: "Diana R.",
    title: "Founder",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=96&h=96&fit=crop",
  },
  {
    quote: "My team notices the difference. That's the real proof.",
    name: "Marcus C.",
    title: "Head of Engineering",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=96&h=96&fit=crop",
  },
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    number: "01",
    title: "Clarity Call",
    description:
      "Free 45-min session. We map where you are and where you want to go.",
    icon: Phone,
  },
  {
    number: "02",
    title: "Custom Roadmap",
    description:
      "You receive a bespoke coaching plan built around your goals and timeline.",
    icon: Map,
  },
  {
    number: "03",
    title: "Weekly Sessions",
    description:
      "Deep, structured 60-min sessions with accountability between them.",
    icon: Calendar,
  },
  {
    number: "04",
    title: "Measurable Results",
    description:
      "We track outcomes against your defined goals. No vague transformations.",
    icon: TrendingUp,
  },
];

export const PRICING: PricingTier[] = [
  {
    name: "Clarity Sprint",
    price: "$2,400",
    cadence: "8 Weeks",
    description: "Career clarity for high-achievers who feel stuck.",
    features: [
      "8 weekly 1:1 sessions",
      "Personalized career roadmap",
      "Strengths & values assessment",
      "Async support between sessions",
      "Session recordings & notes",
    ],
    cta: "Apply for Clarity Sprint",
  },
  {
    name: "Executive Intensive",
    price: "$6,500",
    cadence: "6 Months",
    description: "Deep executive coaching for senior leaders.",
    features: [
      "12 bi-weekly 1:1 sessions",
      "Stakeholder 360 feedback",
      "Executive presence rehearsals",
      "Unlimited async support",
      "Quarterly outcome reviews",
      "Priority scheduling",
    ],
    highlighted: true,
    cta: "Apply for Executive Intensive",
  },
  {
    name: "Team Engagement",
    price: "Custom",
    cadence: "Contact for pricing",
    description: "Group coaching for organizations.",
    features: [
      "Tailored cohort program",
      "Leadership workshops",
      "Manager-as-coach training",
      "Team health diagnostics",
      "Executive sponsor reporting",
    ],
    cta: "Contact for pricing",
  },
];

export const FAQS: FaqItem[] = [
  {
    question: "How is this different from therapy?",
    answer:
      "Therapy generally looks backward to heal; coaching looks forward to build. We focus on your goals, your performance, and the concrete actions between now and where you want to be. If something surfaces that's better served by a therapist, we'll say so.",
  },
  {
    question: "Do you work with clients outside the US and UK?",
    answer:
      "Yes. While most of our clients are based in the US and UK, sessions run over video, so we work with leaders across time zones. We'll find a recurring slot that fits your schedule.",
  },
  {
    question: "What if I don't see results?",
    answer:
      "We define success metrics together in the first two weeks and review them on a set cadence. If we're not making progress, we change the approach. Coaching is a partnership, not a subscription you forget about.",
  },
  {
    question: "How long before I notice a difference?",
    answer:
      "Most clients feel a shift in clarity within the first three weeks. Structural results — promotions, pivots, team metrics — typically land over the full program as the work compounds.",
  },
  {
    question: "Can my company sponsor this?",
    answer:
      "Absolutely. Many engagements are employer-sponsored. We can provide a scope document, invoicing, and outcome reporting suitable for L&D or HR budgets.",
  },
  {
    question: "What does a typical session look like?",
    answer:
      "60 focused minutes: a quick check on commitments from last time, the core work for the session, and clear actions before we meet again. You'll always leave knowing exactly what to do next.",
  },
];
