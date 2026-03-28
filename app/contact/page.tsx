import type { Metadata } from "next";

import { PageHero } from "@/components/page-hero";
import { QuoteForm } from "@/components/quote-form";
import { ScrollReveal } from "@/components/scroll-reveal";
import { SectionHeading } from "@/components/section-heading";
import { business, innerPageHeroImages } from "@/data/site-content";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Mora's Landscaping LLC in Orlando, FL for a fast quote. Call (407) 247-4786 or submit the contact form."
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        heroImage={innerPageHeroImages.contact}
        title="Contact Mora's Landscaping LLC"
        description="Call or send your project details for a fast landscaping quote. We serve Orlando and surrounding Central Florida communities."
        keywordLine="Fast quote for lawn maintenance, landscape installation, design, irrigation, turf, and cleanup services"
      />

      <section className="section">
        <div className="container-shell grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <ScrollReveal variant="slide-left" className="space-y-6">
            <article className="card">
              <h2 className="text-2xl font-bold text-pine-950">Call for Immediate Assistance</h2>
              <a href={business.phoneHref} className="mt-4 inline-block text-3xl font-extrabold text-pine-700">
                {business.phoneDisplay}
              </a>
              <p className="mt-3 text-sm text-charcoal/80">
                We&apos;re here to help with lawn maintenance, landscape installation, design,
                irrigation, artificial turf, and cleanup services.
              </p>
            </article>

            <article className="card">
              <h3 className="text-xl font-bold text-pine-950">Service Area</h3>
              <p className="mt-3 text-sm text-charcoal/80">
                Orlando, Kissimmee, Winter Park, Altamonte Springs, Sanford, Davenport, and
                nearby Central Florida communities.
              </p>
              <p className="mt-3 text-sm font-semibold text-pine-800">
                Contact us to confirm service availability in your area.
              </p>
            </article>

            <article className="card">
              <h3 className="text-xl font-bold text-pine-950">Business Hours</h3>
              <ul className="mt-3 space-y-1 text-sm text-charcoal/80">
                <li>Monday - Friday: 8:00 AM - 6:00 PM</li>
                <li>Saturday: 8:00 AM - 2:00 PM</li>
                <li>Sunday: By appointment</li>
              </ul>
            </article>
          </ScrollReveal>

          <ScrollReveal variant="slide-right">
            <QuoteForm />
          </ScrollReveal>
        </div>
      </section>

      <section className="section bg-earth/40">
        <div className="container-shell">
          <ScrollReveal>
            <SectionHeading
              eyebrow="Map Placeholder"
              title="Orlando Service Radius"
              description="Replace this area with an embedded Google Map focused on your service coverage area."
            />
          </ScrollReveal>
          <ScrollReveal variant="fade-up" className="mt-8">
            <div className="grid h-80 place-items-center rounded-2xl border border-dashed border-pine-300 bg-white text-center shadow-sm transition-shadow duration-300 hover:shadow-md">
              <div className="max-w-md px-4">
                <p className="text-lg font-semibold text-pine-900">Interactive Map Embed Placeholder</p>
                <p className="mt-2 text-sm text-charcoal/70">
                  Recommended: embed a map pin for Orlando, FL and mention nearby service areas.
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
