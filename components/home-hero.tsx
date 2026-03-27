"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

import { business, galleryProjects } from "@/data/site-content";
import {
  motionEase,
  reducedStaggerContainerVariants,
  reducedStaggerItemVariants,
  staggerContainerVariants,
  staggerItemVariants
} from "@/lib/motion-variants";

const heroImgTransition = { duration: 0.85, ease: motionEase };

export function HomeHero() {
  const reduce = useReducedMotion();
  const copyContainer = reduce ? reducedStaggerContainerVariants : staggerContainerVariants;
  const heroImgInit = reduce ? { opacity: 1, x: 0 } : { opacity: 0, x: 56 };
  const itemVariants = reduce ? reducedStaggerItemVariants : staggerItemVariants;

  return (
    <section className="relative overflow-hidden bg-hero-gradient pt-28">
      <div className="absolute inset-0">
        <motion.div
          className="absolute inset-0 h-full w-full"
          initial={heroImgInit}
          animate={{ opacity: 1, x: 0 }}
          transition={reduce ? { duration: 0 } : heroImgTransition}
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
          className="max-w-3xl text-white lg:max-w-[42rem]"
          variants={copyContainer}
          initial="hidden"
          animate="visible"
        >
          <motion.p
            variants={itemVariants}
            className="text-xs font-semibold uppercase tracking-[0.2em] text-green-200"
          >
            Mora&apos;s Landscaping LLC | Orlando, FL
          </motion.p>
          <motion.h1
            variants={itemVariants}
            className="mt-4 text-balance text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl lg:leading-[1.08]"
          >
            Transform Your Outdoor Space with Expert Landscaping
          </motion.h1>
          <motion.p variants={itemVariants} className="mt-5 max-w-2xl text-lg leading-relaxed text-white/90">
            Serving Orlando since 2015 - trusted, licensed, and built on over 25 years of experience.
          </motion.p>
          <motion.div variants={itemVariants} className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/contact#quote-form"
              className="btn-primary bg-grass text-charcoal shadow-md hover:bg-[#8ddb90]"
            >
              Get a Free Quote
            </Link>
            <a
              href={business.phoneHref}
              className="btn-secondary border-white/30 bg-white/10 text-white shadow-md hover:bg-white/20 hover:text-white"
            >
              Call Now
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
