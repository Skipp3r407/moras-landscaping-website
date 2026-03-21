"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { business } from "@/data/site-content";

export function MobileCallBar() {
  const pathname = usePathname();
  const isVariantRoute =
    pathname.startsWith("/premium-dark") || pathname.startsWith("/fresh-light");

  if (isVariantRoute) {
    return null;
  }

  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-pine-200 bg-white/95 p-3 backdrop-blur md:hidden">
      <div className="mx-auto grid max-w-md grid-cols-2 gap-2">
        <a href={business.phoneHref} className="btn-secondary px-4 py-2.5 text-sm">
          Call Now
        </a>
        <Link href="/contact#quote-form" className="btn-primary px-4 py-2.5 text-sm">
          Get a Quote
        </Link>
      </div>
    </div>
  );
}
