"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { business } from "@/data/site-content";

export function SiteFooter() {
  const pathname = usePathname();
  const isVariantRoute =
    pathname.startsWith("/premium-dark") || pathname.startsWith("/fresh-light");

  if (isVariantRoute) {
    return null;
  }

  const footerLinks = [
    { href: "/", label: "Home" },
    { href: "/services", label: "Services" },
    { href: "/gallery", label: "Gallery" },
    { href: "/contact", label: "Contact" }
  ];

  return (
    <footer className="border-t border-white/10 bg-charcoal text-white">
      <div className="container-shell py-12 text-center">
        <div className="flex justify-center">
          <Image
            src="/images/logo.png"
            alt={`${business.name} logo`}
            width={600}
            height={256}
            className="h-24 w-auto object-contain opacity-90 transition-transform duration-300 hover:scale-105"
          />
        </div>
        <div className="mt-5 space-y-1 text-sm text-white/80">
          <p className="font-semibold text-white">{business.name}</p>
          <p>Orlando, FL</p>
          <p>Phone: 407-247-4786</p>
        </div>
        <nav className="mt-6">
          <ul className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-white/85">
            {footerLinks.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="interactive-link transition hover:text-grass">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <div className="border-t border-white/10 py-6">
        <div className="container-shell text-center text-xs text-white/70">
          <p>© {new Date().getFullYear()} {business.name}. All rights reserved.</p>
          <p className="mt-6 text-center text-xs text-gray-500">
            Website Design by{" "}
            <a
              href="https://elevatedigitalstudios.net/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 transition hover:text-blue-300 hover:underline"
            >
              Elevate Digital Studio.
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
