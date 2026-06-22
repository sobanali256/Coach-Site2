import { CASE_STUDIES } from "@/lib/data";
import SectionHeader from "@/components/ui/SectionHeader";
import CaseStudyCard from "@/components/common/CaseStudyCard";
import Button from "@/components/ui/Button";

export default function CaseStudies() {
  return (
    <section className="bg-bg py-24 md:py-32">
      <div className="container-content">
        <SectionHeader
          align="left"
          label="Proven Track Record"
          parts={[
            { text: "Leaders who chose clarity — and " },
            { text: "won.", accent: true },
          ]}
          action={
            <Button href="/case-studies" variant="primary">
              See All Case Studies
            </Button>
          }
        />

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {CASE_STUDIES.map((study, i) => (
            <CaseStudyCard key={study.slug} study={study} delay={(i % 2) * 0.1} />
          ))}
        </div>
      </div>
    </section>
  );
}
