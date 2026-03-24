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
    <header className="fixed inset-x-0 top-0 z-50 w-full border-b border-gray-800 bg-[#0f172a]/90 backdrop-blur-md">
      <div className="container-shell flex min-h-[11rem] items-center justify-between gap-5 py-2 md:min-h-[18rem] md:py-4">
        <Link href="/" aria-label={business.name} className="flex items-center shrink-0 pl-1 sm:pl-2">
          <Image
            src="/images/logo-white.png"
            alt={`${business.name} logo`}
            width={1536}
            height={1024}
            className="h-40 md:h-64 w-auto object-contain shrink-0 transition-transform duration-300 hover:scale-105"
            priority
          />
        </Link>

        <nav className="hidden items-center gap-6 lg:flex" aria-label="Main navigation">
          {headerLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="interactive-link text-sm font-medium text-gray-300 transition hover:text-green-400"
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
          <summary className="grid h-10 w-10 cursor-pointer list-none place-items-center rounded-lg border border-gray-600 text-gray-100">
            <span className="text-xl">☰</span>
          </summary>
          <div className="absolute right-0 mt-3 w-64 rounded-2xl border border-gray-800 bg-[#0f172a] p-3 shadow-xl">
            <div className="flex flex-col gap-1 text-left">
              {headerLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="interactive-link rounded-lg px-3 py-2 text-sm font-medium text-gray-300 transition hover:bg-white/5 hover:text-green-400"
                >
                  {link.label}
                </Link>
              ))}
            </div>
            <div className="mt-3 grid gap-2 border-t border-gray-800 pt-3">
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
