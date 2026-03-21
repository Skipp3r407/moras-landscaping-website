import Image from "next/image";
import Link from "next/link";

import { EstimateForm } from "@/components/variations/estimate-form";
import { business, galleryProjects, serviceAreas, services, testimonialSamples } from "@/data/site-content";
import { aboutCopy, conversionPoints, sharedHeadlines } from "@/data/variant-site-content";

type Mode = "dark" | "light";

function theme(mode: Mode) {
  const dark = mode === "dark";
  return {
    heroShell: dark
      ? "relative overflow-hidden border-b border-emerald-900/60 bg-[radial-gradient(circle_at_20%_20%,rgba(16,185,129,0.22),transparent_42%),radial-gradient(circle_at_80%_20%,rgba(4,120,87,0.32),transparent_45%),#060907]"
      : "relative overflow-hidden border-b border-pine-100 bg-[radial-gradient(circle_at_20%_20%,rgba(112,194,44,0.22),transparent_45%),radial-gradient(circle_at_80%_20%,rgba(54,143,84,0.20),transparent_45%),#f8fcf7]",
    heading: dark ? "text-zinc-50" : "text-pine-950",
    text: dark ? "text-zinc-300" : "text-charcoal/80",
    muted: dark ? "text-zinc-400" : "text-charcoal/70",
    section: dark ? "border-b border-emerald-900/50 bg-black/20" : "border-b border-pine-100 bg-white",
    sectionAlt: dark ? "border-b border-emerald-900/50 bg-[#060907]" : "border-b border-pine-100 bg-earth/35",
    card: dark
      ? "rounded-2xl border border-emerald-900/70 bg-zinc-950/45 p-6 shadow-[0_18px_45px_rgba(0,0,0,0.45)] backdrop-blur transition-all duration-300 transform-gpu hover:-translate-y-1 hover:scale-[1.01]"
      : "rounded-2xl border border-pine-100 bg-white p-6 shadow-sm transition-all duration-300 transform-gpu hover:-translate-y-1 hover:scale-[1.01]",
    cardSmall: dark
      ? "rounded-xl border border-emerald-900/60 bg-zinc-950/40 p-4 transition-all duration-300 transform-gpu hover:scale-[1.02]"
      : "rounded-xl border border-pine-100 bg-white p-4 transition-all duration-300 transform-gpu hover:scale-[1.02]",
    ctaPrimary: dark
      ? "inline-flex items-center justify-center rounded-full bg-emerald-500 px-6 py-3 font-semibold text-zinc-950 shadow-[0_0_24px_rgba(16,185,129,0.38)] transition-all duration-300 transform-gpu hover:-translate-y-0.5 hover:scale-105 hover:bg-emerald-400"
      : "btn-primary",
    ctaSecondary: dark
      ? "inline-flex items-center justify-center rounded-full border border-emerald-700/70 bg-emerald-500/10 px-6 py-3 font-semibold text-emerald-300 transition-all duration-300 transform-gpu hover:-translate-y-0.5 hover:scale-105 hover:bg-emerald-500/20"
      : "btn-secondary",
    label: dark ? "text-emerald-300" : "text-pine-700"
  };
}

type PageProps = {
  mode: Mode;
  basePath: "/premium-dark" | "/fresh-light";
};

export function VariantHomePage({ mode, basePath }: PageProps) {
  const t = theme(mode);

  return (
    <>
      <section className={t.heroShell}>
        <div className="container-shell section pt-14">
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div className="fade-in-up">
              <p className={`text-xs font-semibold uppercase tracking-[0.2em] ${t.label}`}>
                {mode === "dark" ? "Premium Dark Version" : "Fresh Light Version"}
              </p>
              <h1 className={`mt-4 text-4xl font-extrabold tracking-tight sm:text-5xl ${t.heading}`}>
                {sharedHeadlines.heroTitle}
              </h1>
              <p className={`mt-5 text-lg ${t.text}`}>{sharedHeadlines.heroSubtitle}</p>
              <div className="mt-7 flex flex-wrap gap-3">
                <a href={business.phoneHref} className={t.ctaPrimary}>
                  Call Now: {business.phoneDisplay}
                </a>
                <Link href={`${basePath}/contact#quote-form`} className={t.ctaSecondary}>
                  Request Free Estimate
                </Link>
              </div>
              <div className="mt-7 grid gap-3 sm:grid-cols-3">
                {["Licensed & Insured", "Local Orlando Team", "Professional & Dependable"].map((item) => (
                  <div key={item} className={t.cardSmall}>
                    <p className={`text-center text-sm font-semibold ${t.heading}`}>{item}</p>
                  </div>
                ))}
              </div>
            </div>

            <article className={t.card}>
              <div className="relative h-72 overflow-hidden rounded-2xl sm:h-80">
                <Image
                  src={galleryProjects[0].image}
                  alt="Featured landscaping project"
                  fill
                  className="object-cover"
                  priority
                />
                {mode === "dark" ? <div className="absolute inset-0 bg-black/20" /> : null}
              </div>
              <p className={`mt-3 text-sm ${t.muted}`}>
                Outdoor Solutions Designed for Florida Homes.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className={t.section}>
        <div className="container-shell section">
          <h2 className={`text-3xl font-extrabold sm:text-4xl ${t.heading}`}>Services Overview</h2>
          <p className={`mt-3 max-w-3xl text-base ${t.text}`}>
            From routine lawn care to full landscape transformations, we deliver clean, high-quality
            work that improves curb appeal and long-term property value.
          </p>
          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {services.slice(0, 6).map((service) => (
              <article key={service.id} className={t.card}>
                <h3 className={`text-xl font-bold ${t.heading}`}>{service.title}</h3>
                <p className={`mt-3 text-sm ${t.text}`}>{service.short}</p>
                <Link href={`${basePath}/services`} className={`${t.ctaSecondary} mt-5 text-sm`}>
                  View Service Details
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className={t.sectionAlt}>
        <div className="container-shell section grid gap-8 lg:grid-cols-[1fr_1fr] lg:items-start">
          <article>
            <h2 className={`text-3xl font-extrabold sm:text-4xl ${t.heading}`}>
              {sharedHeadlines.whyTitle}
            </h2>
            <p className={`mt-3 ${t.text}`}>
              {sharedHeadlines.trustTitle}. Our process keeps communication clear and quote requests easy.
            </p>
            <div className="mt-4 grid gap-2">
              {conversionPoints.map((point) => (
                <div key={point} className={t.cardSmall}>
                  <p className={`text-sm ${t.text}`}>{point}</p>
                </div>
              ))}
            </div>
          </article>
          <article className={t.card}>
            <h3 className={`text-2xl font-bold ${t.heading}`}>Featured Projects</h3>
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              {galleryProjects.slice(0, 4).map((project) => (
                <div key={project.title} className="overflow-hidden rounded-xl">
                  <div className="relative h-32">
                    <Image src={project.image} alt={project.title} fill className="object-cover" />
                  </div>
                  <div className={mode === "dark" ? "bg-black/40 p-2" : "bg-white p-2"}>
                    <p className={`text-xs font-semibold ${t.heading}`}>{project.title}</p>
                  </div>
                </div>
              ))}
            </div>
            <Link href={`${basePath}/gallery`} className={`${t.ctaPrimary} mt-5 text-sm`}>
              Browse Project Gallery
            </Link>
          </article>
        </div>
      </section>

      <section className={t.section}>
        <div className="container-shell section">
          <div className="grid gap-8 lg:grid-cols-[1fr_1fr]">
            <article className={t.card}>
              <h2 className={`text-2xl font-bold ${t.heading}`}>About Preview</h2>
              <p className={`mt-3 ${t.text}`}>{aboutCopy.intro}</p>
              <p className={`mt-3 ${t.text}`}>{aboutCopy.bodyOne}</p>
              <Link href={`${basePath}/about`} className={`${t.ctaSecondary} mt-5 text-sm`}>
                Read About Mora&apos;s Landscaping
              </Link>
            </article>

            <article className={t.card}>
              <h2 className={`text-2xl font-bold ${t.heading}`}>Testimonials Preview</h2>
              <div className="mt-4 space-y-3">
                {testimonialSamples.slice(0, 2).map((item) => (
                  <div key={item.name} className={t.cardSmall}>
                    <p className={`text-sm ${t.text}`}>{item.quote}</p>
                    <p className={`mt-2 text-xs font-semibold uppercase tracking-[0.14em] ${t.label}`}>
                      {item.name} - {item.location}
                    </p>
                  </div>
                ))}
              </div>
              <Link href={`${basePath}/testimonials`} className={`${t.ctaSecondary} mt-5 text-sm`}>
                View Testimonials
              </Link>
            </article>
          </div>
        </div>
      </section>

      <section className={t.sectionAlt}>
        <div className="container-shell section grid gap-8 lg:grid-cols-[1fr_1fr]">
          <article className={t.card}>
            <h2 className={`text-2xl font-bold ${t.heading}`}>Service Areas Preview</h2>
            <p className={`mt-3 text-sm ${t.text}`}>
              Proudly serving Orlando, Conway, Belle Isle, Kissimmee, Winter Park, Pine Castle,
              Edgewood, and nearby Central Florida communities.
            </p>
            <p className={`mt-3 text-sm font-semibold ${t.label}`}>
              Contact us to confirm service availability in your area.
            </p>
            <div className="mt-4 grid gap-2 sm:grid-cols-2">
              {serviceAreas.slice(0, 6).map((area) => (
                <span key={area} className={t.cardSmall}>
                  <span className={`text-sm ${t.heading}`}>{area}</span>
                </span>
              ))}
            </div>
          </article>

          <EstimateForm mode={mode} />
        </div>
      </section>

      <section className={mode === "dark" ? "bg-black/80 py-16" : "bg-pine-900 py-16"}>
        <div className="container-shell">
          <div className={mode === "dark" ? "rounded-3xl border border-emerald-900/70 bg-zinc-950/60 p-8" : "rounded-3xl bg-white p-8"}>
            <h2 className={`text-3xl font-extrabold ${t.heading}`}>{sharedHeadlines.ctaTitle}</h2>
            <p className={`mt-3 max-w-3xl ${t.text}`}>{sharedHeadlines.ctaText}</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href={business.phoneHref} className={t.ctaPrimary}>
                Call {business.phoneDisplay}
              </a>
              <Link href={`${basePath}/contact#quote-form`} className={t.ctaSecondary}>
                Request Free Estimate
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export function VariantAboutPage({ mode, basePath }: PageProps) {
  const t = theme(mode);
  return (
    <>
      <section className={t.heroShell}>
        <div className="container-shell section pt-14">
          <p className={`text-xs font-semibold uppercase tracking-[0.2em] ${t.label}`}>About Mora&apos;s Landscaping LLC</p>
          <h1 className={`mt-3 text-4xl font-extrabold sm:text-5xl ${t.heading}`}>Local Orlando Landscaping Experts</h1>
          <p className={`mt-4 max-w-4xl text-lg ${t.text}`}>{aboutCopy.intro}</p>
        </div>
      </section>
      <section className={t.section}>
        <div className="container-shell section grid gap-6 lg:grid-cols-2">
          <article className={t.card}>
            <h2 className={`text-2xl font-bold ${t.heading}`}>Company Introduction</h2>
            <p className={`mt-4 ${t.text}`}>{aboutCopy.bodyOne}</p>
            <p className={`mt-4 ${t.text}`}>{aboutCopy.bodyTwo}</p>
          </article>
          <article className={t.card}>
            <h2 className={`text-2xl font-bold ${t.heading}`}>Mission & Values</h2>
            <p className={`mt-4 ${t.text}`}>{aboutCopy.mission}</p>
            <ul className={`mt-4 space-y-2 text-sm ${t.text}`}>
              <li>• Fully licensed and insured operations</li>
              <li>• Professional communication and dependable scheduling</li>
              <li>• Quality workmanship and customer-first service</li>
              <li>• Outdoor transformations designed for Florida properties</li>
            </ul>
            <Link href={`${basePath}/contact#quote-form`} className={`${t.ctaPrimary} mt-6 text-sm`}>
              Request a Free Estimate
            </Link>
          </article>
        </div>
      </section>
    </>
  );
}

export function VariantServicesPage({ mode, basePath }: PageProps) {
  const t = theme(mode);
  return (
    <>
      <section className={t.heroShell}>
        <div className="container-shell section pt-14">
          <p className={`text-xs font-semibold uppercase tracking-[0.2em] ${t.label}`}>Services</p>
          <h1 className={`mt-3 text-4xl font-extrabold sm:text-5xl ${t.heading}`}>Outdoor Solutions Designed for Florida Homes</h1>
          <p className={`mt-4 max-w-4xl ${t.text}`}>
            Yard cleanups, lawn maintenance, design, installs, irrigation, artificial turf, hardscape, and tree services with professional execution.
          </p>
        </div>
      </section>
      <section className={t.section}>
        <div className="container-shell section grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service) => (
            <article key={service.id} className={t.card}>
              <h2 className={`text-xl font-bold ${t.heading}`}>{service.title}</h2>
              <p className={`mt-3 text-sm ${t.text}`}>{service.short}</p>
              <div className="mt-4">
                <p className={`text-xs font-semibold uppercase tracking-[0.12em] ${t.label}`}>Benefits</p>
                <ul className={`mt-2 space-y-1 text-sm ${t.text}`}>
                  {service.benefits.map((benefit) => (
                    <li key={benefit}>• {benefit}</li>
                  ))}
                </ul>
              </div>
              <div className="mt-4">
                <p className={`text-xs font-semibold uppercase tracking-[0.12em] ${t.label}`}>When Needed</p>
                <ul className={`mt-2 space-y-1 text-sm ${t.text}`}>
                  {service.useCases.map((useCase) => (
                    <li key={useCase}>• {useCase}</li>
                  ))}
                </ul>
              </div>
              <Link href={`${basePath}/contact#quote-form`} className={`${t.ctaPrimary} mt-6 text-sm`}>
                Request Quote
              </Link>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}

export function VariantGalleryPage({ mode }: Omit<PageProps, "basePath">) {
  const t = theme(mode);
  return (
    <>
      <section className={t.heroShell}>
        <div className="container-shell section pt-14">
          <p className={`text-xs font-semibold uppercase tracking-[0.2em] ${t.label}`}>Gallery / Projects</p>
          <h1 className={`mt-3 text-4xl font-extrabold sm:text-5xl ${t.heading}`}>Before & After Style Project Showcase</h1>
          <p className={`mt-4 max-w-4xl ${t.text}`}>
            Sod Installation, Yard Cleanup, Mulch & Plant Refresh, Landscape Redesign, Artificial Turf, and Hardscape Upgrade examples.
          </p>
        </div>
      </section>
      <section className={t.section}>
        <div className="container-shell section">
          <div className="mb-6 flex flex-wrap gap-2">
            {[
              "All Projects",
              "Sod Installation",
              "Yard Cleanup",
              "Mulch & Plant Refresh",
              "Landscape Redesign",
              "Artificial Turf",
              "Hardscape Upgrade"
            ].map((tag) => (
              <span key={tag} className={t.cardSmall}>
                <span className={`text-xs font-semibold uppercase tracking-[0.14em] ${t.label}`}>{tag}</span>
              </span>
            ))}
          </div>
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {galleryProjects.map((project) => (
              <article key={project.title} className={t.card}>
                <div className="relative h-52 overflow-hidden rounded-xl">
                  <Image src={project.image} alt={project.title} fill className="object-cover transition duration-500 hover:scale-105" />
                </div>
                <h2 className={`mt-4 text-xl font-bold ${t.heading}`}>{project.title}</h2>
                <p className={`mt-2 text-sm ${t.text}`}>{project.caption}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export function VariantTestimonialsPage({ mode }: Omit<PageProps, "basePath">) {
  const t = theme(mode);
  return (
    <>
      <section className={t.heroShell}>
        <div className="container-shell section pt-14">
          <p className={`text-xs font-semibold uppercase tracking-[0.2em] ${t.label}`}>Testimonials</p>
          <h1 className={`mt-3 text-4xl font-extrabold sm:text-5xl ${t.heading}`}>Trusted by Homeowners Across Orlando</h1>
          <p className={`mt-4 max-w-4xl ${t.text}`}>
            Sample testimonials shown below emphasize reliability, communication, professionalism, and quality work.
          </p>
        </div>
      </section>
      <section className={t.section}>
        <div className="container-shell section grid gap-5 md:grid-cols-2">
          {testimonialSamples.map((item) => (
            <article key={item.name + item.location} className={t.card}>
              <p className={`text-base ${t.text}`}>&ldquo;{item.quote}&rdquo;</p>
              <p className={`mt-4 text-sm font-semibold ${t.heading}`}>{item.name}</p>
              <p className={`text-xs uppercase tracking-[0.14em] ${t.label}`}>{item.location}</p>
              <p className={`mt-2 text-xs ${t.muted}`}>Sample testimonial content for layout and trust-section preview.</p>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}

export function VariantContactPage({ mode }: Omit<PageProps, "basePath">) {
  const t = theme(mode);
  return (
    <>
      <section className={t.heroShell}>
        <div className="container-shell section pt-14">
          <p className={`text-xs font-semibold uppercase tracking-[0.2em] ${t.label}`}>Contact</p>
          <h1 className={`mt-3 text-4xl font-extrabold sm:text-5xl ${t.heading}`}>Get a Fast Landscaping Quote in Orlando</h1>
          <p className={`mt-4 max-w-4xl ${t.text}`}>
            Call {business.phoneDisplay} or send your project details below. We respond quickly during business hours.
          </p>
        </div>
      </section>
      <section className={t.section}>
        <div className="container-shell section grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <article className={t.card}>
            <h2 className={`text-2xl font-bold ${t.heading}`}>Contact Details</h2>
            <p className={`mt-3 ${t.text}`}>Phone: {business.phoneDisplay}</p>
            <p className={`mt-1 ${t.text}`}>Email: {business.email}</p>
            <p className={`mt-4 text-sm ${t.text}`}>
              Service Areas: Orlando, Conway, Belle Isle, Kissimmee, Winter Park, Pine Castle,
              Edgewood, and nearby Central Florida communities.
            </p>
            <p className={`mt-2 text-sm font-semibold ${t.label}`}>
              Contact us to confirm service availability in your area.
            </p>
            <div className={`mt-5 rounded-xl border border-dashed p-4 ${mode === "dark" ? "border-emerald-800/70" : "border-pine-200"}`}>
              <p className={`text-sm ${t.text}`}>Map placeholder for Orlando service coverage.</p>
            </div>
            <div className={`mt-4 rounded-xl ${mode === "dark" ? "bg-zinc-950/40" : "bg-earth/40"} p-4`}>
              <p className={`text-sm font-semibold ${t.heading}`}>Business Hours (Placeholder)</p>
              <p className={`mt-2 text-sm ${t.text}`}>Mon-Fri: 8:00 AM - 6:00 PM</p>
              <p className={`text-sm ${t.text}`}>Saturday: 8:00 AM - 2:00 PM</p>
              <p className={`text-sm ${t.text}`}>Sunday: By appointment</p>
            </div>
          </article>
          <EstimateForm mode={mode} />
        </div>
      </section>
    </>
  );
}
