"use client";

import { motion, useReducedMotion } from "framer-motion";

const viewport = {
  once: true,
  amount: 0.1,
  margin: "0px 0px -10% 0px"
} as const;

const ease = [0.22, 1, 0.36, 1] as const;

type StaggerRevealProps = {
  children: React.ReactNode;
  className?: string;
};

export function StaggerReveal({ children, className = "" }: StaggerRevealProps) {
  const reduce = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={viewport}
      variants={{
        hidden: {},
        show: {
          transition: {
            staggerChildren: reduce ? 0 : 0.07,
            delayChildren: reduce ? 0 : 0.04
          }
        }
      }}
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

  return (
    <motion.div
      className={className}
      variants={{
        hidden: reduce ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 },
        show: {
          opacity: 1,
          y: 0,
          transition: { duration: reduce ? 0 : 0.5, ease }
        }
      }}
    >
      {children}
    </motion.div>
  );
}
