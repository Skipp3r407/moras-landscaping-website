"use client";

import { motion, useReducedMotion } from "framer-motion";

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
};

export function PageHero({ title, description, keywordLine }: PageHeroProps) {
  const reduce = useReducedMotion();
  const copyContainer = reduce ? reducedStaggerContainerVariants : staggerContainerVariants;
  const itemVariants = reduce ? reducedStaggerItemVariants : staggerItemVariants;

  return (
    <section className="bg-earth/40 pt-28">
      <div className="container-shell section">
        <motion.div
          className="max-w-4xl"
          variants={copyContainer}
          initial="hidden"
          animate="visible"
        >
          <motion.p
            variants={itemVariants}
            className="text-xs font-semibold uppercase tracking-[0.2em] text-pine-700"
          >
            {business.name} | Orlando, FL
          </motion.p>
          <motion.h1
            variants={itemVariants}
            className="mt-3 text-4xl font-extrabold tracking-tight text-pine-950 sm:text-5xl"
          >
            {title}
          </motion.h1>
          <motion.p variants={itemVariants} className="mt-5 text-lg text-charcoal/80">
            {description}
          </motion.p>
          {keywordLine ? (
            <motion.p
              variants={itemVariants}
              className="mt-4 rounded-xl border border-pine-100 bg-white px-4 py-3 text-sm text-pine-800"
            >
              {keywordLine}
            </motion.p>
          ) : null}
        </motion.div>
      </div>
    </section>
  );
}
