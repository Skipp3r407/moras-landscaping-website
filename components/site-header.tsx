"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { business } from "@/data/site-content";

export function SiteHeader() {
  const pathname = usePathname();
  const isVariantRoute =
    pathname.startsWith("/premium-dark") || pathname.startsWith("/fresh-light");

  if (isVariantRoute) {
    return null;
  }

  const headerLinks = [
    { href: "/", label: "Home" },
    { href: "/services", label: "Services" },
    { href: "/gallery", label: "Gallery" },
    { href: "/contact", label: "Contact" }
  ];

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-charcoal/90 backdrop-blur-xl">
      <div className="container-shell flex h-52 items-center justify-between gap-5 sm:h-60">
        <Link href="/" aria-label={business.name} className="inline-flex items-center">
          <Image
            src="/images/logo.png"
            alt={`${business.name} logo`}
            width={1040}
            height={224}
            className="h-48 w-auto transition-transform duration-300 hover:scale-105 sm:h-56"
            priority
          />
        </Link>

        <nav className="hidden items-center gap-6 lg:flex" aria-label="Main navigation">
          {headerLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="interactive-link text-sm font-medium text-white/85 transition hover:text-grass"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <a
            href="tel:4072474786"
            className="inline-flex items-center justify-center rounded-full bg-grass px-5 py-2.5 text-sm font-semibold text-charcoal transition-all duration-300 hover:scale-105 hover:bg-[#7cd27f]"
          >
            Call Now
          </a>
        </div>

        <details className="relative lg:hidden">
          <summary className="grid h-10 w-10 cursor-pointer list-none place-items-center rounded-lg border border-white/20 text-white">
            <span className="text-xl">☰</span>
          </summary>
          <div className="absolute right-0 mt-3 w-64 rounded-2xl border border-white/10 bg-charcoal p-3 shadow-xl">
            <div className="flex flex-col gap-1 text-left">
              {headerLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="interactive-link rounded-lg px-3 py-2 text-sm font-medium text-white/90 hover:bg-white/10"
                >
                  {link.label}
                </Link>
              ))}
            </div>
            <div className="mt-3 grid gap-2 border-t border-white/10 pt-3">
              <a
                href="tel:4072474786"
                className="inline-flex items-center justify-center rounded-full bg-grass px-4 py-2.5 text-sm font-semibold text-charcoal transition-all duration-300 hover:scale-105 hover:bg-[#7cd27f]"
              >
                Call {business.phoneDisplay}
              </a>
            </div>
          </div>
        </details>
      </div>
    </header>
  );
}
