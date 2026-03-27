import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { CtaBand } from "@/components/cta-band";
import { HomeHero } from "@/components/home-hero";
import { QuoteForm } from "@/components/quote-form";
import { ScrollReveal } from "@/components/scroll-reveal";
import { SectionHeading } from "@/components/section-heading";
import { ServiceAreaList } from "@/components/service-area-list";
import { ServiceCard } from "@/components/service-card";
import { StaggerItem, StaggerReveal } from "@/components/stagger-reveal";
import { TestimonialCard } from "@/components/testimonial-card";
import { business } from "@/data/site-content";
import { galleryProjects, serviceAreas, services, testimonialSamples, whyChooseUs } from "@/data/site-content";

export const metadata: Metadata = {
  title: "Transform Your Outdoor Space with Expert Landscaping",
  description:
    "Serving Orlando since 2015 with licensed, insured landscaping and over 25 years of local experience."
};

export default function HomePage() {
  return (
    <>
      <HomeHero />

      <section className="section section-band bg-white">
        <div className="container-shell">
          <ScrollReveal>
            <SectionHeading
              center
              eyebrow="Our Services"
              title="Professional Landscaping Services in Orlando"
              description="From routine lawn care to full installations, we deliver high-quality work built for Florida properties."
            />
          </ScrollReveal>
          <StaggerReveal className="mt-12 grid gap-6 md:grid-cols-2 md:gap-8 xl:grid-cols-3">
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

      <section className="section bg-earth/50">
        <div className="container-shell">
          <ScrollReveal>
            <SectionHeading
              center
              eyebrow="Why Choose Us"
              title="Trusted Landscaping with Proven Local Experience"
              description="Mora's Landscaping combines craftsmanship, reliability, and deep Orlando roots to deliver premium outdoor results."
            />
          </ScrollReveal>
          <StaggerReveal className="mt-12 grid gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4">
            {whyChooseUs.map((point) => (
              <StaggerItem key={point}>
                <article className="card h-full">
                  <p className="text-2xl text-grass">✔</p>
                  <p className="mt-3 text-sm font-medium text-charcoal/90">{point}</p>
                </article>
              </StaggerItem>
            ))}
          </StaggerReveal>
        </div>
      </section>

      <section className="section section-band bg-white">
        <div className="container-shell">
          <ScrollReveal>
            <SectionHeading
              center
              eyebrow="Gallery Preview"
              title="Real Landscaping Transformations"
              description="A portfolio-driven showcase to build trust and demonstrate quality workmanship."
            />
          </ScrollReveal>
          <div className="mt-12 grid gap-6 lg:grid-cols-[1.2fr_1fr] lg:gap-8 lg:items-start">
            <ScrollReveal variant="slide-left">
              <article className="group relative overflow-hidden rounded-3xl border border-pine-100 shadow-lg">
                <div className="relative h-[360px]">
                  <Image
                    src={galleryProjects[0].image}
                    alt={galleryProjects[0].title}
                    fill
                    className="object-cover transition duration-500 ease-out group-hover:scale-[1.06]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/65 to-transparent" />
                  <div className="absolute bottom-5 left-5">
                    <p className="text-xs uppercase tracking-[0.14em] text-white/85">Featured Project</p>
                    <p className="mt-1 text-xl font-bold text-white">{galleryProjects[0].title}</p>
                  </div>
                </div>
              </article>
            </ScrollReveal>
            <StaggerReveal className="grid gap-4 sm:grid-cols-2 sm:gap-5">
              {galleryProjects.slice(1, 5).map((project) => (
                <StaggerItem key={project.title}>
                  <article className="group relative overflow-hidden rounded-2xl border border-pine-100 shadow-sm">
                    <div className="relative h-40">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover transition duration-500 ease-out group-hover:scale-[1.06]"
                      />
                    </div>
                    <div className="absolute inset-0 bg-black/25 opacity-0 transition group-hover:opacity-100" />
                    <div className="absolute bottom-3 left-3 rounded-full bg-black/60 px-3 py-1 text-xs font-medium text-white">
                      {project.category}
                    </div>
                  </article>
                </StaggerItem>
              ))}
            </StaggerReveal>
          </div>
          <ScrollReveal variant="fade-up" className="mt-10 text-center">
            <Link href="/gallery" className="btn-primary">
              View Full Gallery
            </Link>
          </ScrollReveal>
        </div>
      </section>

      <section className="section bg-earth/50">
        <div className="container-shell grid gap-10 lg:grid-cols-[1fr_0.95fr] lg:items-stretch lg:gap-12">
          <ScrollReveal variant="slide-left">
            <article className="card">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-pine-700">About Preview</p>
              <h2 className="mt-3 text-3xl font-extrabold text-pine-950">
                Proudly Serving Central Florida Since 2015
              </h2>
              <p className="mt-4 text-charcoal/80">
                Mora&apos;s Landscaping has proudly served Central Florida since 2015. Owner Michael (Myke) Mora is a
                native to Orlando and brings over 25 years of landscaping experience to every project.
              </p>
              <Link href="/about" className="btn-primary mt-6">
                Learn More
              </Link>
            </article>
          </ScrollReveal>

          <ScrollReveal variant="slide-right">
            <article className="card">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-pine-700">
                Proudly Serving Orlando and Surrounding Areas
              </p>
              <div className="mt-5">
                <ServiceAreaList areas={serviceAreas} />
              </div>
              <Link href="/service-areas" className="btn-secondary mt-6">
                View Service Areas
              </Link>
            </article>
          </ScrollReveal>
        </div>
      </section>

      <section className="section section-band bg-white">
        <div className="container-shell">
          <ScrollReveal>
            <SectionHeading
              center
              eyebrow="Testimonials"
              title="What Local Clients Say"
              description="Homeowners across Orlando trust our team for reliability, professionalism, and quality results."
            />
          </ScrollReveal>
          <StaggerReveal className="mt-12 grid gap-6 md:grid-cols-3 md:gap-8">
            {testimonialSamples.slice(0, 3).map((item) => (
              <StaggerItem key={item.name + item.location}>
                <TestimonialCard
                  quote={item.quote}
                  name={item.name}
                  location={item.location}
                  rating={item.rating}
                />
              </StaggerItem>
            ))}
          </StaggerReveal>
          <ScrollReveal variant="fade-up" className="mt-10 text-center">
            <Link href="/testimonials" className="btn-secondary">
              Read More Reviews
            </Link>
          </ScrollReveal>
        </div>
      </section>

      <CtaBand
        title="Ready to Upgrade Your Yard?"
        text="Get your free quote today and let Mora's Landscaping bring your outdoor vision to life."
      />

      <section className="section bg-earth/30">
        <div className="container-shell grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-start lg:gap-12">
          <ScrollReveal variant="slide-left">
            <article className="card">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-pine-700">Contact</p>
              <h2 className="mt-3 text-3xl font-extrabold text-pine-950">Request a Free Quote Today</h2>
              <p className="mt-4 text-charcoal/80">
                Call us now or send your project details using the form. We&apos;ll follow up quickly with next steps
                and pricing guidance.
              </p>
              <p className="mt-6 text-base font-semibold text-pine-900">Phone: {business.phoneDisplay}</p>
              <p className="mt-1 text-base text-charcoal/80">Email: {business.email}</p>
            </article>
          </ScrollReveal>

          <ScrollReveal variant="slide-right">
            <QuoteForm />
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
