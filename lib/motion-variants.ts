import type { Variants } from "framer-motion";

/** Smooth ease used across the site */
export const motionEase = [0.22, 1, 0.36, 1] as const;

/** Scroll reveal: trigger when ~22% visible, fire once */
export const motionViewport = {
  once: true,
  amount: 0.25,
  margin: "0px 0px -100px 0px"
} as const;

export const motionDuration = {
  short: 0.55,
  medium: 0.7,
  long: 0.85
} as const;

const transition = (duration: number) => ({
  duration,
  ease: motionEase
});

/** Fade + move up (sections, headings) */
export const fadeUpVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: transition(motionDuration.medium)
  }
};

/** Slide in from left */
export const slideInLeftVariants: Variants = {
  hidden: { opacity: 0, x: -72 },
  visible: {
    opacity: 1,
    x: 0,
    transition: transition(motionDuration.long)
  }
};

/** Slide in from right */
export const slideInRightVariants: Variants = {
  hidden: { opacity: 0, x: 72 },
  visible: {
    opacity: 1,
    x: 0,
    transition: transition(motionDuration.long)
  }
};

/** Simple fade */
export const fadeVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: transition(motionDuration.medium)
  }
};

/** Parent: stagger children */
export const staggerContainerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.09,
      delayChildren: 0.06
    }
  }
};

/** Child of stagger container */
export const staggerItemVariants: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: transition(motionDuration.medium)
  }
};

/** Header mount */
export const headerDropVariants: Variants = {
  hidden: { opacity: 0, y: -18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: transition(motionDuration.short)
  }
};

/** Footer subtle */
export const footerFadeUpVariants: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: transition(0.5)
  }
};

/** Reduced motion: no movement */
export const reducedScrollVariants: Variants = {
  hidden: { opacity: 1, x: 0, y: 0 },
  visible: { opacity: 1, x: 0, y: 0, transition: { duration: 0 } }
};

export const reducedStaggerContainerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0, delayChildren: 0 } }
};

export const reducedStaggerItemVariants: Variants = {
  hidden: { opacity: 1, y: 0 },
  visible: { opacity: 1, y: 0, transition: { duration: 0 } }
};

export type ScrollRevealVariantName = "fade-up" | "fade" | "slide-left" | "slide-right";

const variantByName: Record<ScrollRevealVariantName, Variants> = {
  "fade-up": fadeUpVariants,
  fade: fadeVariants,
  "slide-left": slideInLeftVariants,
  "slide-right": slideInRightVariants
};

export function getScrollRevealVariants(
  name: ScrollRevealVariantName,
  reduceMotion: boolean
): Variants {
  return reduceMotion ? reducedScrollVariants : variantByName[name];
}
