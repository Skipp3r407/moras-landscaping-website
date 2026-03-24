"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import { useMemo, useState } from "react";

import {
  reducedStaggerContainerVariants,
  reducedStaggerItemVariants,
  staggerContainerVariants,
  staggerItemVariants
} from "@/lib/motion-variants";

type GalleryProject = {
  title: string;
  category: string;
  image: string;
  caption: string;
};

type GalleryLightboxProps = {
  projects: GalleryProject[];
};

export function GalleryLightbox({ projects }: GalleryLightboxProps) {
  const reduce = useReducedMotion();
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const categories = useMemo(() => ["All", ...new Set(projects.map((item) => item.category))], [projects]);
  const filteredProjects = useMemo(
    () => (activeCategory === "All" ? projects : projects.filter((item) => item.category === activeCategory)),
    [activeCategory, projects]
  );

  const openLightbox = (index: number) => setSelectedIndex(index);
  const closeLightbox = () => setSelectedIndex(null);

  const activeProject = selectedIndex !== null ? filteredProjects[selectedIndex] : null;

  const nextImage = () => {
    if (selectedIndex === null) return;
    setSelectedIndex((selectedIndex + 1) % filteredProjects.length);
  };

  const previousImage = () => {
    if (selectedIndex === null) return;
    setSelectedIndex((selectedIndex - 1 + filteredProjects.length) % filteredProjects.length);
  };

  const container = reduce ? reducedStaggerContainerVariants : staggerContainerVariants;
  const item = reduce ? reducedStaggerItemVariants : staggerItemVariants;

  return (
    <>
      <div className="mb-8 flex flex-wrap gap-2">
        {categories.map((category) => (
          <button
            key={category}
            type="button"
            onClick={() => setActiveCategory(category)}
            className={
              activeCategory === category
                ? "rounded-full border border-pine-700 bg-pine-700 px-4 py-2 text-xs font-semibold uppercase tracking-[0.12em] text-white shadow-sm transition-all duration-300 hover:shadow-md"
                : "rounded-full border border-pine-200 bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.12em] text-pine-800 transition-all duration-300 hover:scale-[1.02] hover:border-pine-500 hover:text-pine-700 hover:shadow-sm active:scale-[0.98]"
            }
          >
            {category}
          </button>
        ))}
      </div>

      <motion.div
        key={activeCategory}
        className="columns-1 gap-4 md:columns-2 xl:columns-3"
        variants={container}
        initial="hidden"
        animate="visible"
      >
        {filteredProjects.map((project, index) => (
          <motion.div
            key={`${project.title}-${index}-${activeCategory}`}
            variants={item}
            className="mb-4 break-inside-avoid"
          >
            <button
              type="button"
              onClick={() => openLightbox(index)}
              className="group relative block w-full overflow-hidden rounded-2xl border border-pine-100 bg-white shadow-sm transition-shadow duration-300 hover:shadow-lg"
            >
              <div className="relative h-[280px] w-full overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition duration-500 ease-out group-hover:scale-[1.05]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/10 to-transparent opacity-85 transition duration-300 group-hover:opacity-95" />
                <div className="absolute left-4 top-4 rounded-full bg-white/85 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.14em] text-pine-900">
                  {project.category}
                </div>
                <div className="absolute bottom-4 left-4 right-4 text-left">
                  <p className="text-lg font-bold text-white">{project.title}</p>
                  <p className="mt-1 text-xs text-white/85">{project.caption}</p>
                </div>
              </div>
            </button>
          </motion.div>
        ))}
      </motion.div>

      {activeProject ? (
        <div className="fixed inset-0 z-[110] flex items-center justify-center bg-black/85 p-4 backdrop-blur-sm">
          <button
            type="button"
            onClick={closeLightbox}
            className="absolute right-4 top-4 rounded-full bg-white/10 px-3 py-2 text-white transition hover:bg-white/20"
            aria-label="Close image lightbox"
          >
            ✕
          </button>
          <button
            type="button"
            onClick={previousImage}
            className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-white/10 px-3 py-2 text-white transition hover:bg-white/20"
            aria-label="Previous image"
          >
            ←
          </button>
          <button
            type="button"
            onClick={nextImage}
            className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-white/10 px-3 py-2 text-white transition hover:bg-white/20"
            aria-label="Next image"
          >
            →
          </button>

          <div className="w-full max-w-5xl">
            <div className="relative h-[72vh] overflow-hidden rounded-2xl border border-white/10">
              <Image src={activeProject.image} alt={activeProject.title} fill className="object-contain" />
            </div>
            <div className="mt-3 text-center">
              <p className="text-lg font-semibold text-white">{activeProject.title}</p>
              <p className="text-sm text-white/80">{activeProject.caption}</p>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
