"use client";

import { motion, useReducedMotion } from "framer-motion";

import {
  getScrollRevealVariants,
  motionViewport,
  type ScrollRevealVariantName
} from "@/lib/motion-variants";

type ScrollRevealProps = {
  children: React.ReactNode;
  className?: string;
  variant?: ScrollRevealVariantName;
};

/**
 * Scroll-driven reveal using variants (reliable with App Router + nested layouts).
 * Uses a generous viewport margin so left/right slides are visible before elements feel "stuck".
 */
export function ScrollReveal({ children, className = "", variant = "fade-up" }: ScrollRevealProps) {
  const reduce = useReducedMotion();
  const variants = getScrollRevealVariants(variant, Boolean(reduce));

  return (
    <motion.div
      className={className}
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={motionViewport}
    >
      {children}
    </motion.div>
  );
}
