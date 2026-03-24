"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

import { business, galleryProjects } from "@/data/site-content";

const ease = [0.22, 1, 0.36, 1] as const;

export function HomeHero() {
  const reduce = useReducedMotion();
  const tHero = { duration: reduce ? 0 : 0.72, ease };
  const tCopy = { duration: reduce ? 0 : 0.62, ease, delay: reduce ? 0 : 0.06 };
  const heroImgInit = reduce ? { opacity: 1, x: 0 } : { opacity: 0, x: 40 };
  const heroCopyInit = reduce ? { opacity: 1, x: 0 } : { opacity: 0, x: -48 };

  return (
    <section className="relative overflow-hidden bg-hero-gradient pt-28">
      <div className="absolute inset-0">
        <motion.div
          className="absolute inset-0 h-full w-full"
          initial={heroImgInit}
          animate={{ opacity: 1, x: 0 }}
          transition={tHero}
        >
          <Image
            src={galleryProjects[0].image}
            alt="Luxury landscaping project by Mora's Landscaping"
            fill
            className="object-cover"
            priority
          />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal/85 via-charcoal/65 to-charcoal/40" />
      </div>
      <div className="container-shell relative section">
        <motion.div
          className="max-w-3xl text-white"
          initial={heroCopyInit}
          animate={{ opacity: 1, x: 0 }}
          transition={tCopy}
        >
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-green-200">
            Mora&apos;s Landscaping LLC | Orlando, FL
          </p>
          <h1 className="mt-4 text-4xl font-extrabold tracking-tight sm:text-6xl">
            Transform Your Outdoor Space with Expert Landscaping
          </h1>
          <p className="mt-5 text-lg text-white/90">
            Serving Orlando since 2015 - trusted, licensed, and built on over 25 years of experience.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/contact#quote-form"
              className="btn-primary bg-grass text-charcoal transition-transform duration-300 hover:scale-105 hover:bg-[#8ddb90]"
            >
              Get a Free Quote
            </Link>
            <a
              href={business.phoneHref}
              className="btn-secondary border-white/30 bg-white/10 text-white transition-transform duration-300 hover:scale-105 hover:bg-white/20 hover:text-white"
            >
              Call Now
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
