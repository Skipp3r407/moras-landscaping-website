import type { Metadata } from "next";

import { CtaBand } from "@/components/cta-band";
import { PageHero } from "@/components/page-hero";
import { ServiceAreaList } from "@/components/service-area-list";
import { serviceAreas } from "@/data/site-content";

export const metadata: Metadata = {
  title: "Service Areas",
  description:
    "Mora's Landscaping LLC proudly serves Orlando, Kissimmee, Winter Park, Altamonte Springs, Sanford, Davenport, and surrounding areas."
};

export default function ServiceAreasPage() {
  return (
    <>
      <PageHero
        title="Service Areas Around Orlando, Florida"
        description="Mora's Landscaping LLC serves homeowners and small commercial clients throughout Orlando and nearby Central Florida communities."
        keywordLine="Contact us to confirm service availability in your area."
      />

      <section className="section">
        <div className="container-shell">
          <ServiceAreaList areas={serviceAreas} />
          <p className="mt-6 rounded-xl border border-pine-100 bg-pine-50 px-4 py-3 text-sm text-pine-900">
            Service area availability may vary by project size, schedule, and crew routing. Contact
            us to confirm your location and timeline.
          </p>
        </div>
      </section>

      <CtaBand
        title="Need Landscaping in Orlando or Nearby?"
        text="Call today to discuss your project and get a free quote from a trusted local landscaping team."
      />
    </>
  );
}
