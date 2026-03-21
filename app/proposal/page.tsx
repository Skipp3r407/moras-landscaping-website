import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { PageHero } from "@/components/page-hero";
import { QuoteForm } from "@/components/quote-form";
import { SectionHeading } from "@/components/section-heading";
import { business, galleryProjects, navLinks, services } from "@/data/site-content";

export const metadata: Metadata = {
  title: "Client Preview Proposal",
  description:
    "Client-facing website proposal preview for Mora's Landscaping LLC, including brand direction, sitemap, service cards, gallery preview, lead form, and responsive concept.",
  robots: {
    index: false,
    follow: false
  }
};

const serviceIcons = ["🍃", "✂️", "🧭", "🟩", "🌿", "🪨", "💧", "🏡", "🧱", "🌳"];

const proposedSitemap = [
  "Home",
  "About",
  "Services",
  "Gallery / Projects",
  "Testimonials",
  "Service Areas",
  "FAQ",
  "Contact"
];

const seoSuggestions = [
  {
    page: "Home",
    title: "Mora's Landscaping LLC | Landscaping Orlando FL",
    meta:
      "Licensed and insured landscaping company in Orlando offering lawn maintenance, landscape design, sod installation, irrigation, turf, hardscape, and tree services."
  },
  {
    page: "Services",
    title: "Landscaping Services in Orlando, FL | Mora's Landscaping LLC",
    meta:
      "Explore yard cleanups, lawn maintenance, sod installs, irrigation services, turf, hardscape work, and complete landscape upgrades in Orlando."
  },
  {
    page: "Gallery",
    title: "Landscaping Project Gallery | Orlando Outdoor Transformations",
    meta:
      "View lawn, sod, mulch, planting, hardscape, and artificial turf project examples from Mora's Landscaping LLC in Orlando."
  },
  {
    page: "Contact",
    title: "Request a Landscaping Quote in Orlando | Mora's Landscaping LLC",
    meta:
      "Call (407) 247-4786 or request a free estimate for landscaping, lawn care, irrigation, sod, turf, and hardscape services in Orlando."
  }
];

export default function ProposalPage() {
  return (
    <>
      <section className="bg-charcoal pt-24 text-white">
        <div className="container-shell py-5">
          <p className="inline-flex rounded-full border border-white/20 bg-white/5 px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em]">
            Phase 1 - Client Presentation Preview
          </p>
        </div>
      </section>

      <PageHero
        title="Professional Landscaping Services That Transform Outdoor Spaces"
        description="Website concept for Mora's Landscaping LLC: a premium, lead-focused Orlando landscaping brand presence highlighting licensed and insured service, lawn care, design, installs, irrigation, artificial turf, and hardscapes."
        keywordLine="Proposal Goal: Impress the client, build trust quickly, and convert visitors into estimate requests."
      />

      <section className="section">
        <div className="container-shell">
          <SectionHeading
            eyebrow="Website Proposal Snapshot"
            title="Pitch Deck Quality, Built as a Real Web Preview"
            description="This preview is designed to show exactly how the site will position Mora's Landscaping LLC as an established, high-quality Orlando service brand."
          />
          <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <article className="card">
              <h3 className="text-lg font-bold text-pine-900">Purpose</h3>
              <p className="mt-2 text-sm text-charcoal/80">
                Generate qualified leads and present Mora&apos;s as a professional local authority.
              </p>
            </article>
            <article className="card">
              <h3 className="text-lg font-bold text-pine-900">Audience</h3>
              <p className="mt-2 text-sm text-charcoal/80">
                Orlando homeowners and light commercial clients looking for reliable landscaping.
              </p>
            </article>
            <article className="card">
              <h3 className="text-lg font-bold text-pine-900">Brand Direction</h3>
              <p className="mt-2 text-sm text-charcoal/80">
                Premium service-business identity using bold greens, clean layout, and trust signals.
              </p>
            </article>
            <article className="card">
              <h3 className="text-lg font-bold text-pine-900">Conversion Strategy</h3>
              <p className="mt-2 text-sm text-charcoal/80">
                Clear service hierarchy, strong calls-to-action, and a frictionless estimate form.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="section bg-earth/40">
        <div className="container-shell grid gap-8 lg:grid-cols-2">
          <article className="card">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-pine-700">Brand Direction</p>
            <h2 className="mt-2 text-3xl font-extrabold text-pine-950">
              Clean, Modern, Trustworthy Landscaping Identity
            </h2>
            <p className="mt-4 text-charcoal/80">
              The visual approach combines dark green, natural green, white, charcoal, and earthy
              neutrals to create a premium but approachable local home-service look. Rounded
              buttons, soft shadows, and structured cards keep the experience modern and easy to
              scan on mobile and desktop.
            </p>
          </article>

          <article className="card">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-pine-700">Logo Concept Area</p>
            <div className="mt-4 grid gap-4">
              <div className="rounded-2xl bg-charcoal p-5 text-white">
                <p className="text-xs uppercase tracking-[0.2em] text-grass">Dark Version</p>
                <p className="mt-2 text-2xl font-extrabold tracking-tight">Mora&apos;s Landscaping LLC</p>
                <p className="mt-1 text-sm text-white/80">Leaf + Lawn Inspired Service Identity</p>
              </div>
              <div className="rounded-2xl border border-pine-200 bg-white p-5">
                <p className="text-xs uppercase tracking-[0.2em] text-pine-700">Light Version</p>
                <p className="mt-2 text-2xl font-extrabold tracking-tight text-pine-900">
                  Mora&apos;s Landscaping LLC
                </p>
                <p className="mt-1 text-sm text-charcoal/75">Clean local-brand application for trucks, shirts, and web</p>
              </div>
            </div>
          </article>
        </div>
      </section>

      <section className="section">
        <div className="container-shell">
          <SectionHeading
            eyebrow="Why This Website Works"
            title="Built to Win Trust and Drive Quote Requests"
            description="The layout strategy is intentionally conversion-focused for local service buying behavior."
          />
          <div className="mt-8 grid gap-3 md:grid-cols-2">
            {[
              "Builds credibility quickly with licensed and insured messaging above the fold",
              "Highlights core landscaping services clearly so visitors self-qualify fast",
              "Makes quote requests and phone calls obvious on every key section",
              "Strengthens local Orlando credibility with service-area and location context",
              "Positions the company as established, dependable, and premium without feeling corporate",
              "Supports SEO structure for landscaping Orlando FL and related service intent keywords"
            ].map((point) => (
              <div key={point} className="rounded-xl border border-pine-100 bg-white px-4 py-3 text-sm text-charcoal/85">
                {point}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-earth/40">
        <div className="container-shell">
          <SectionHeading
            eyebrow="Proposed Site Map"
            title="Full Production Site Structure"
            description="Pages planned for launch and already structured in this build."
            center
          />
          <div className="mx-auto mt-8 grid max-w-5xl gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {proposedSitemap.map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-pine-100 bg-white px-4 py-5 text-center text-sm font-semibold text-pine-900 shadow-sm"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-shell">
          <SectionHeading
            eyebrow="Sample Services Preview"
            title="Service Cards Designed for Quick Decision-Making"
            description="Icons and card hierarchy can be refined with custom brand illustrations later."
          />
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
            {services.map((service, index) => (
              <article key={service.id} className="rounded-2xl border border-pine-100 bg-white p-4 shadow-sm">
                <p className="text-2xl">{serviceIcons[index] ?? "🌱"}</p>
                <h3 className="mt-3 text-base font-bold text-pine-900">{service.title}</h3>
                <p className="mt-2 text-xs text-charcoal/75">{service.short}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-earth/40">
        <div className="container-shell">
          <SectionHeading
            eyebrow="Sample Project Showcase"
            title="Gallery Preview for Before/After Storytelling"
            description="Uses real-source placeholders now and can be swapped with final client media."
          />
          <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {[
              "Sod Installation",
              "Yard Cleanup",
              "Mulch & Plant Refresh",
              "Landscape Redesign",
              "Artificial Turf",
              "Hardscape Upgrade"
            ].map((label, index) => (
              <article
                key={label}
                className="group overflow-hidden rounded-2xl border border-pine-100 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="relative h-44 overflow-hidden">
                  <Image
                    src={galleryProjects[index % galleryProjects.length].image}
                    alt={`${label} preview`}
                    fill
                    className="object-cover transition duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-bold text-pine-900">{label}</h3>
                  <p className="mt-2 text-sm text-charcoal/80">Polished caption area for project outcomes and scope.</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-shell">
          <SectionHeading
            eyebrow="Mobile Responsive Preview"
            title="Optimized for Homeowners Browsing on Their Phones"
            description="This concept is built mobile-first with sticky actions, readable type, and touch-friendly CTAs."
          />
          <div className="mt-8 grid gap-8 lg:grid-cols-[1fr_0.9fr] lg:items-center">
            <article className="rounded-3xl border border-pine-100 bg-white p-6 shadow-sm">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-pine-700">Desktop View Focus</p>
              <h3 className="mt-2 text-xl font-bold text-pine-900">Strong hierarchy and trust-first layout</h3>
              <ul className="mt-4 space-y-2 text-sm text-charcoal/80">
                <li>• Sticky header with clear service navigation</li>
                <li>• Hero and trust messaging above the fold</li>
                <li>• Service cards, projects, and testimonials for proof</li>
                <li>• Repeated estimate CTAs to improve conversion</li>
              </ul>
            </article>
            <article className="mx-auto w-full max-w-sm rounded-[2rem] border-8 border-charcoal bg-white p-4 shadow-2xl">
              <div className="mx-auto h-2 w-24 rounded-full bg-charcoal/20" />
              <div className="mt-4 rounded-2xl bg-pine-900 p-4 text-white">
                <p className="text-xs uppercase tracking-[0.2em] text-grass">Mobile Hero</p>
                <p className="mt-2 text-lg font-bold leading-tight">
                  Request Your Free Estimate Today
                </p>
                <a href={business.phoneHref} className="btn-secondary mt-4 w-full border-white/30 bg-transparent text-white">
                  Call {business.phoneDisplay}
                </a>
              </div>
              <div className="mt-3 rounded-2xl border border-pine-100 bg-earth/40 p-4 text-sm">
                Fast, tap-friendly service cards and quote form flow.
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="section bg-earth/40">
        <div className="container-shell grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
          <div>
            <SectionHeading
              eyebrow="Lead Capture Preview"
              title="Request a Free Estimate Section"
              description="Designed to minimize friction and capture complete project details for faster quoting."
            />
            <div className="mt-8 rounded-2xl border border-pine-100 bg-white p-6 shadow-sm">
              <h3 className="text-xl font-bold text-pine-900">SEO Title + Meta Suggestions</h3>
              <div className="mt-4 space-y-3">
                {seoSuggestions.map((item) => (
                  <article key={item.page} className="rounded-xl border border-pine-100 bg-earth/30 p-3">
                    <p className="text-xs font-semibold uppercase tracking-[0.16em] text-pine-700">{item.page}</p>
                    <p className="mt-1 text-sm font-semibold text-pine-900">{item.title}</p>
                    <p className="mt-1 text-xs text-charcoal/75">{item.meta}</p>
                  </article>
                ))}
              </div>
            </div>
          </div>
          <QuoteForm />
        </div>
      </section>

      <section className="section">
        <div className="container-shell rounded-3xl bg-pine-900 p-8 text-white shadow-xl sm:p-10">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-grass">Phase 2 - Full Website Build</p>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight">Production Pages Are Fully Built and Ready</h2>
          <p className="mt-4 max-w-3xl text-white/85">
            The full website structure is already implemented with Home, About, Services, Gallery,
            Testimonials, Service Areas, FAQ, and Contact pages, plus reusable components and
            responsive styling.
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <Link href="/" className="btn-secondary border-white/30 bg-transparent text-white hover:bg-white/10">
              View Live Home
            </Link>
            <Link href="/services" className="btn-primary bg-grass text-charcoal hover:bg-[#86d83f]">
              View Services Page
            </Link>
            <Link href="/contact" className="btn-primary bg-white text-pine-900 hover:bg-pine-50">
              Open Contact Page
            </Link>
          </div>
          <div className="mt-7 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-xl border border-white/15 bg-white/5 px-3 py-2 text-sm font-medium transition hover:bg-white/10"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
