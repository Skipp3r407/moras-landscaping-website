"use client";

import { motion, useReducedMotion } from "framer-motion";

import {
  motionViewport,
  reducedStaggerContainerVariants,
  reducedStaggerItemVariants,
  staggerContainerVariants,
  staggerItemVariants
} from "@/lib/motion-variants";

type StaggerRevealProps = {
  children: React.ReactNode;
  className?: string;
};

export function StaggerReveal({ children, className = "" }: StaggerRevealProps) {
  const reduce = useReducedMotion();
  const container = reduce ? reducedStaggerContainerVariants : staggerContainerVariants;

  return (
    <motion.div
      className={className}
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={motionViewport}
    >
      {children}
    </motion.div>
  );
}

type StaggerItemProps = {
  children: React.ReactNode;
  className?: string;
};

export function StaggerItem({ children, className = "" }: StaggerItemProps) {
  const reduce = useReducedMotion();
  const item = reduce ? reducedStaggerItemVariants : staggerItemVariants;

  return (
    <motion.div className={className} variants={item}>
      {children}
    </motion.div>
  );
}
