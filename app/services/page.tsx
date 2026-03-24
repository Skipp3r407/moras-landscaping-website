import type { Metadata } from "next";

import { CtaBand } from "@/components/cta-band";
import { PageHero } from "@/components/page-hero";
import { ServiceCard } from "@/components/service-card";
import { StaggerItem, StaggerReveal } from "@/components/stagger-reveal";
import { services } from "@/data/site-content";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Explore landscaping services in Orlando including lawn maintenance, installation, design, irrigation, artificial turf, and cleanup services."
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        title="Landscaping Services in Orlando, Florida"
        description="Professional outdoor services built to improve curb appeal, increase property value, and deliver long-term landscape performance."
        keywordLine="Lawn maintenance Orlando | Landscape design | Irrigation, turf, cleanup, and installation"
      />

      <section className="section">
        <div className="container-shell">
          <StaggerReveal className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {services.map((service) => (
              <StaggerItem key={service.id}>
                <ServiceCard
                  icon={service.icon}
                  title={service.title}
                  short={service.short}
                  benefits={service.benefits}
                  useCases={service.useCases}
                />
              </StaggerItem>
            ))}
          </StaggerReveal>
        </div>
      </section>

      <section className="section bg-earth/40">
        <div className="container-shell rounded-3xl border border-pine-100 bg-white p-8 shadow-sm">
          <h2 className="text-3xl font-extrabold text-pine-950">Benefits of Choosing Mora&apos;s Landscaping</h2>
          <div className="mt-6 grid gap-3 sm:grid-cols-3">
            {[
              "Increase property value with professional upgrades",
              "Improve curb appeal with clean, polished landscaping",
              "Use low-maintenance options designed for Florida properties"
            ].map((benefit) => (
              <div key={benefit} className="rounded-xl border border-pine-100 bg-earth/30 px-4 py-3 text-sm">
                {benefit}
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        title="Not Sure Which Landscaping Service You Need?"
        text="Tell us about your yard goals and we will recommend the right service plan for your property and budget."
      />
    </>
  );
}
