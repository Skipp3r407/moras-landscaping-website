"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { business } from "@/data/site-content";
import { headerDropVariants, reducedScrollVariants } from "@/lib/motion-variants";

export function SiteHeader() {
  const pathname = usePathname();
  const reduce = useReducedMotion();
  const isVariantRoute =
    pathname.startsWith("/premium-dark") || pathname.startsWith("/fresh-light");

  if (isVariantRoute) {
    return null;
  }

  const headerVariants = reduce ? reducedScrollVariants : headerDropVariants;

  const headerLinks = [
    { href: "/", label: "Home" },
    { href: "/services", label: "Services" },
    { href: "/gallery", label: "Gallery" },
    { href: "/contact", label: "Contact" }
  ];

  return (
    <motion.header
      className="fixed inset-x-0 top-0 z-50 w-full border-b border-green-900 bg-[#1f4d2b]/95 backdrop-blur-md"
      variants={headerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="container-shell flex min-h-[11rem] items-center justify-between gap-5 py-2 md:min-h-[18rem] md:py-4">
        <Link href="/" aria-label={business.name} className="flex items-center shrink-0 pl-1 sm:pl-2">
          <Image
            src="/images/logo-mower.png"
            alt={`${business.name} — lawn care logo`}
            width={342}
            height={396}
            className="h-40 md:h-64 w-auto object-contain shrink-0 transition-transform duration-300 hover:scale-105"
            priority
          />
        </Link>

        <nav className="hidden items-center gap-6 lg:flex" aria-label="Main navigation">
          {headerLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-gray-200 transition-all duration-300 hover:scale-[1.03] hover:text-green-300"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <a
            href="tel:4072474786"
            className="inline-flex items-center justify-center rounded-full bg-green-400 px-5 py-2.5 text-sm font-medium text-black shadow-md transition-all duration-300 hover:scale-105 hover:bg-green-500 hover:shadow-lg active:scale-[0.97]"
          >
            Call Now
          </a>
        </div>

        <details className="relative lg:hidden">
          <summary className="grid h-10 w-10 cursor-pointer list-none place-items-center rounded-lg border border-green-800/80 text-gray-100 transition hover:bg-white/10">
            <span className="text-xl">☰</span>
          </summary>
          <div className="absolute right-0 mt-3 w-64 rounded-2xl border border-green-900/90 bg-[#163d22] p-3 shadow-xl backdrop-blur-md">
            <div className="flex flex-col gap-1 text-left">
              {headerLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="rounded-lg px-3 py-2 text-sm font-medium text-gray-200 transition duration-300 hover:bg-white/10 hover:text-green-300"
                >
                  {link.label}
                </Link>
              ))}
            </div>
            <div className="mt-3 grid gap-2 border-t border-green-900/70 pt-3">
              <a
                href="tel:4072474786"
                className="inline-flex items-center justify-center rounded-full bg-green-400 px-4 py-2.5 text-sm font-medium text-black shadow-md transition-all duration-300 hover:scale-105 hover:bg-green-500 hover:shadow-lg active:scale-[0.97]"
              >
                Call {business.phoneDisplay}
              </a>
            </div>
          </div>
        </details>
      </div>
    </motion.header>
  );
}
