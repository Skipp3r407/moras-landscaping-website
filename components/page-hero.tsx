"use client";

import { motion, useReducedMotion } from "framer-motion";

import { business } from "@/data/site-content";

const ease = [0.22, 1, 0.36, 1] as const;

type PageHeroProps = {
  title: string;
  description: string;
  keywordLine?: string;
};

export function PageHero({ title, description, keywordLine }: PageHeroProps) {
  const reduce = useReducedMotion();
  const initial = reduce ? { opacity: 1, x: 0 } : { opacity: 0, x: -40 };

  return (
    <section className="bg-earth/40 pt-28">
      <div className="container-shell section">
        <motion.div
          className="max-w-4xl"
          initial={initial}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: reduce ? 0 : 0.55, ease }}
        >
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-pine-700">
            {business.name} | Orlando, FL
          </p>
          <h1 className="mt-3 text-4xl font-extrabold tracking-tight text-pine-950 sm:text-5xl">
            {title}
          </h1>
          <p className="mt-5 text-lg text-charcoal/80">{description}</p>
          {keywordLine ? (
            <p className="mt-4 rounded-xl border border-pine-100 bg-white px-4 py-3 text-sm text-pine-800">
              {keywordLine}
            </p>
          ) : null}
        </motion.div>
      </div>
    </section>
  );
}
