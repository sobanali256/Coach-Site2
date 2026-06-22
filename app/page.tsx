import Link from "next/link";
import Hero from "@/components/sections/Hero";
import Marquee from "@/components/sections/Marquee";
import ValueProp from "@/components/sections/ValueProp";
import Stats from "@/components/sections/Stats";
import Services from "@/components/sections/Services";
import CaseStudies from "@/components/sections/CaseStudies";
import Process from "@/components/sections/Process";
import Testimonials from "@/components/sections/Testimonials";
import FinalCTA from "@/components/sections/FinalCTA";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Marquee />
      <ValueProp />
      <Stats />
      {/* Inline CTA — placed after credibility is established */}
      <div className="container-content -mt-4 mb-8 text-center">
        <Link
          href="/contact"
          className="font-display font-medium text-accent underline-offset-4 hover:underline"
        >
          Join 200+ executives →
        </Link>
      </div>
      <Services />
      <CaseStudies />
      <Process />
      <Testimonials />
      <FinalCTA />
    </>
  );
}
