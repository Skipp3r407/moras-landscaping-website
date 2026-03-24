import type { Metadata } from "next";
import Link from "next/link";

import { CtaBand } from "@/components/cta-band";
import { PageHero } from "@/components/page-hero";
import { SectionHeading } from "@/components/section-heading";
import { ScrollReveal } from "@/components/scroll-reveal";
import { business } from "@/data/site-content";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about Mora's Landscaping LLC, owner Michael (Myke) Mora, and over 25 years of landscaping experience in Orlando."
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        title="About Mora's Landscaping LLC"
        description="A local Orlando landscaping company delivering premium outdoor transformations with dependable service and craftsmanship."
        keywordLine="Serving Central Florida since 2015 | 25+ years experience | Licensed and insured"
      />

      <section className="section">
        <div className="container-shell grid gap-8 lg:grid-cols-2">
          <ScrollReveal variant="slide-left">
            <article className="card">
              <h2 className="text-2xl font-bold text-pine-950">Our Story</h2>
              <p className="mt-4 text-charcoal/80">
                {business.name} has proudly served Central Florida since {business.serviceSince}.
                Owner {business.ownerName} is a native to Orlando and has over {business.experienceYears} of
                landscaping experience, from routine maintenance to complete outdoor transformations.
              </p>
              <p className="mt-4 text-charcoal/80">
                Before launching Mora&apos;s Landscaping, Myke gained years of hands-on expertise
                managing residential and commercial properties with a focus on quality, curb appeal,
                and long-term performance.
              </p>
            </article>
          </ScrollReveal>

          <ScrollReveal variant="slide-right">
            <article className="card">
              <h2 className="text-2xl font-bold text-pine-950">Mission Statement</h2>
              <p className="mt-4 text-charcoal/80">
                Our mission is to deliver high-quality landscaping with a customer-first approach,
                helping clients create outdoor spaces that look exceptional and function beautifully.
              </p>
              <ul className="mt-4 space-y-3 text-charcoal/80">
                <li>• Fully licensed and insured service for peace of mind</li>
                <li>• Reliable communication and professional scheduling</li>
                <li>• High-quality workmanship and detail-focused execution</li>
                <li>• Honest recommendations tailored to each property</li>
              </ul>
            </article>
          </ScrollReveal>
        </div>
      </section>

      <section className="section bg-earth/40">
        <div className="container-shell">
          <ScrollReveal>
            <SectionHeading
              eyebrow="Full-Service Landscaping"
              title="From Routine Lawn Care to Full Outdoor Transformations"
              description="We handle lawn maintenance, landscape design, installations, irrigation, artificial turf, and cleanup services for homes and small commercial properties."
            />
          </ScrollReveal>
          <ScrollReveal>
            <div className="mt-8 rounded-2xl border border-pine-100 bg-white p-6 text-charcoal/85">
              <p>
                Every property has different goals. We start by understanding your vision, then
                build a practical plan that balances visual impact, long-term maintenance, and value.
              </p>
              <Link href="/contact#quote-form" className="btn-primary mt-6">
                Get a Free Quote
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <CtaBand
        title="Need a Landscaping Team You Can Trust?"
        text="Call now or request a free quote to discuss your project with a licensed and insured Orlando professional."
      />
    </>
  );
}
