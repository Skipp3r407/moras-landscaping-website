import type { Metadata } from "next";
import Image from "next/image";

import { CtaBand } from "@/components/cta-band";
import { GalleryLightbox } from "@/components/gallery-lightbox";
import { PageHero } from "@/components/page-hero";
import { ScrollReveal } from "@/components/scroll-reveal";
import { SectionHeading } from "@/components/section-heading";
import { StaggerItem, StaggerReveal } from "@/components/stagger-reveal";
import { featuredReels, galleryProjects, innerPageHeroImages } from "@/data/site-content";

export const metadata: Metadata = {
  title: "Gallery Projects",
  description:
    "Explore a portfolio-heavy gallery of Mora's Landscaping projects in Orlando, including design, installation, irrigation, cleanup, and artificial turf transformations."
};

export default function GalleryPage() {
  return (
    <>
      <PageHero
        heroImage={innerPageHeroImages.gallery}
        title="Gallery: Outdoor Transformations by Mora's Landscaping LLC"
        description="See real landscaping projects across Orlando, with before-and-after style visuals designed to showcase quality and craftsmanship."
        keywordLine="Landscape design Orlando | Landscape installation Orlando | Artificial turf and cleanup project gallery"
      />

      <section className="section">
        <div className="container-shell">
          <ScrollReveal>
            <SectionHeading
              eyebrow="Portfolio"
              title="Masonry Project Gallery with Lightbox"
              description="Click any image to expand. This gallery is designed for high visual impact and trust-building."
            />
          </ScrollReveal>
          <ScrollReveal className="mt-8">
            <GalleryLightbox projects={galleryProjects} />
          </ScrollReveal>
        </div>
      </section>

      <section className="section bg-earth/40">
        <div className="container-shell">
          <ScrollReveal>
            <SectionHeading
              eyebrow="Project Reel"
              title="Featured Video Walkthrough"
              description="Showcase recent work and before/after highlights through project reels."
            />
          </ScrollReveal>
          <StaggerReveal className="mt-8 grid gap-5 md:grid-cols-2">
            {featuredReels.map((reel) => (
              <StaggerItem key={reel.url}>
                <article className="card">
                  <div className="relative h-52 overflow-hidden rounded-xl">
                    <Image src={reel.thumbnail} alt={reel.title} fill className="object-cover" />
                  </div>
                  <h3 className="mt-4 text-xl font-bold text-pine-950">{reel.title}</h3>
                  <p className="mt-2 text-sm text-charcoal/80">
                    Follow our latest landscape transformations and seasonal project highlights.
                  </p>
                  <a
                    href={reel.url}
                    target="_blank"
                    rel="noreferrer"
                    className="btn-primary mt-5 w-full text-sm"
                  >
                    Watch on Facebook
                  </a>
                </article>
              </StaggerItem>
            ))}
          </StaggerReveal>
        </div>
      </section>

      <CtaBand
        title="Ready to Transform Your Property?"
        text="Request a free quote today and get expert help with lawn care, design, installation, irrigation, turf, or storm cleanup."
      />
    </>
  );
}
