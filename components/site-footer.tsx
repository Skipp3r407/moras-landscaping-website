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
    <footer className="border-t border-green-900 bg-[#1f4d2b] text-center">
      <div className="container-shell py-10 text-center">
        <Image
          src="/images/logo-white.png"
          alt={`${business.name} logo`}
          width={1536}
          height={1024}
          className="mx-auto h-10 w-auto object-contain opacity-95 transition-transform duration-300 hover:scale-105"
        />

        <div className="mt-4 space-y-1">
          <p className="font-semibold text-gray-200">{business.name}</p>
          <p className="text-sm text-gray-400">Orlando, FL</p>
          <p className="text-sm text-gray-400">Phone: 407-247-4786</p>
        </div>

        <nav className="mt-6" aria-label="Footer navigation">
          <ul className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-gray-200">
            {footerLinks.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="transition duration-300 hover:text-green-300"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <div className="border-t border-green-900/80 bg-[#163d22] py-6">
        <div className="container-shell text-center">
          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()} {business.name}. All rights reserved.
          </p>
          <p className="mt-4 text-xs text-gray-400">
            Website Design by{" "}
            <a
              href="https://elevatedigitalstudios.net/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 transition duration-300 hover:text-blue-300"
            >
              Elevate Digital Studio
            </a>
            .
          </p>
        </div>
      </div>
    </footer>
  );
}
