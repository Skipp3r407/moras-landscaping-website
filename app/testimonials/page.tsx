import type { Metadata } from "next";

import { CtaBand } from "@/components/cta-band";
import { PageHero } from "@/components/page-hero";
import { ScrollReveal } from "@/components/scroll-reveal";
import { SectionHeading } from "@/components/section-heading";
import { TestimonialCard } from "@/components/testimonial-card";
import { testimonialSamples } from "@/data/site-content";

export const metadata: Metadata = {
  title: "Testimonials",
  description:
    "Read client testimonials for Mora's Landscaping LLC highlighting reliability, professionalism, and high-quality landscape results."
};

export default function TestimonialsPage() {
  return (
    <>
      <PageHero
        title="Testimonials and Client Feedback"
        description="See how Orlando homeowners describe their experience working with Mora's Landscaping."
        keywordLine="Reliability, communication, craftsmanship, and professional landscape results"
      />

      <section className="section">
        <div className="container-shell">
          <ScrollReveal>
            <SectionHeading
              eyebrow="Client Reviews"
              title="Trusted by Local Homes and Businesses"
              description="These testimonials highlight the professionalism and consistency clients value most."
            />
          </ScrollReveal>
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {testimonialSamples.map((testimonial) => (
              <ScrollReveal key={testimonial.name + testimonial.location}>
                <TestimonialCard key={testimonial.name + testimonial.location} {...testimonial} />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-earth/40">
        <div className="container-shell rounded-3xl border border-pine-100 bg-white p-8 shadow-sm">
          <h2 className="text-3xl font-extrabold text-pine-950">What Clients Typically Value Most</h2>
          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            {[
              "On-time arrival and dependable scheduling",
              "Clear communication throughout the project",
              "Respect for property and clean worksites",
              "Detail-focused craftsmanship from start to finish",
              "Consistent quality across every service visit",
              "Visible curb appeal and property value improvements"
            ].map((point) => (
              <div key={point} className="rounded-xl border border-pine-100 bg-earth/30 px-4 py-3 text-sm">
                {point}
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        title="Be Our Next Happy Client"
        text="Call now or request a free quote and discover why Orlando homeowners trust Mora's Landscaping for quality outdoor work."
      />
    </>
  );
}
