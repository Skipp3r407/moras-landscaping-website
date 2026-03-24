"use client";

import { motion, useReducedMotion } from "framer-motion";

const ease = [0.22, 1, 0.36, 1] as const;

const viewport = {
  once: true,
  amount: 0.12,
  margin: "0px 0px -8% 0px"
} as const;

type Variant = "fade-up" | "fade" | "slide-left" | "slide-right";

const presets: Record<Variant, { initial: Record<string, number>; animate: Record<string, number> }> = {
  "fade-up": { initial: { opacity: 0, y: 32 }, animate: { opacity: 1, y: 0 } },
  fade: { initial: { opacity: 0 }, animate: { opacity: 1 } },
  "slide-left": { initial: { opacity: 0, x: -44 }, animate: { opacity: 1, x: 0 } },
  "slide-right": { initial: { opacity: 0, x: 44 }, animate: { opacity: 1, x: 0 } }
};

type ScrollRevealProps = {
  children: React.ReactNode;
  className?: string;
  variant?: Variant;
};

export function ScrollReveal({ children, className = "", variant = "fade-up" }: ScrollRevealProps) {
  const reduce = useReducedMotion();
  const preset = presets[variant];
  const duration = reduce ? 0 : 0.55;
  const initial = reduce ? preset.animate : preset.initial;

  return (
    <motion.div
      className={className}
      initial={initial}
      whileInView={preset.animate}
      viewport={viewport}
      transition={{ duration, ease }}
    >
      {children}
    </motion.div>
  );
}
