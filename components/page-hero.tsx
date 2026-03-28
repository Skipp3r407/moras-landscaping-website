"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";

import { business } from "@/data/site-content";
import {
  reducedStaggerContainerVariants,
  reducedStaggerItemVariants,
  staggerContainerVariants,
  staggerItemVariants
} from "@/lib/motion-variants";

type PageHeroProps = {
  title: string;
  description: string;
  keywordLine?: string;
  heroImage: { src: string; alt: string };
};

export function PageHero({ title, description, keywordLine, heroImage }: PageHeroProps) {
  const reduce = useReducedMotion();
  const copyContainer = reduce ? reducedStaggerContainerVariants : staggerContainerVariants;
  const itemVariants = reduce ? reducedStaggerItemVariants : staggerItemVariants;

  return (
    <section className="relative overflow-hidden border-b border-green-900/30 pt-28">
      <div className="absolute inset-0">
        <Image
          src={heroImage.src}
          alt={heroImage.alt}
          fill
          className="object-cover"
          sizes="100vw"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal/90 via-charcoal/72 to-charcoal/50" />
      </div>
      <div className="container-shell relative section">
        <motion.div
          className="max-w-4xl"
          variants={copyContainer}
          initial="hidden"
          animate="visible"
        >
          <motion.p
            variants={itemVariants}
            className="text-xs font-semibold uppercase tracking-[0.2em] text-green-200"
          >
            {business.name} | Orlando, FL
          </motion.p>
          <motion.h1
            variants={itemVariants}
            className="mt-3 text-balance text-4xl font-extrabold tracking-tight text-white sm:text-5xl"
          >
            {title}
          </motion.h1>
          <motion.p variants={itemVariants} className="mt-5 max-w-3xl text-lg leading-relaxed text-white/90">
            {description}
          </motion.p>
          {keywordLine ? (
            <motion.p
              variants={itemVariants}
              className="mt-4 rounded-xl border border-white/20 bg-white/10 px-4 py-3 text-sm text-white/95 backdrop-blur-sm"
            >
              {keywordLine}
            </motion.p>
          ) : null}
        </motion.div>
      </div>
    </section>
  );
}
