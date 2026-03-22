import Link from "next/link";

import { business } from "@/data/site-content";
import { variantNav } from "@/data/variant-site-content";

type VariantShellProps = {
  mode: "dark" | "light";
  basePath: "/premium-dark" | "/fresh-light";
  children: React.ReactNode;
};

export function VariantShell({ mode, basePath, children }: VariantShellProps) {
  const dark = mode === "dark";

  const wrapperClass = dark
    ? "min-h-screen bg-[#070a08] text-zinc-100"
    : "min-h-screen bg-[#f9fcf7] text-charcoal";
  const headerClass = dark
    ? "sticky top-0 z-50 border-b border-emerald-900/60 bg-black/45 backdrop-blur-xl"
    : "sticky top-0 z-50 border-b border-pine-100 bg-white/95 backdrop-blur";
  const badgeClass = dark
    ? "rounded-full border border-emerald-700/60 bg-emerald-500/10 px-3 py-1 text-xs uppercase tracking-[0.16em] text-emerald-300"
    : "rounded-full border border-pine-200 bg-pine-50 px-3 py-1 text-xs uppercase tracking-[0.16em] text-pine-700";
  const brandPrimary = dark ? "text-zinc-50" : "text-pine-950";
  const brandSecondary = dark ? "text-emerald-300" : "text-pine-700";
  const navClass = dark
    ? "interactive-link text-sm font-medium text-zinc-200 transition hover:text-emerald-300"
    : "interactive-link text-sm font-medium text-charcoal transition hover:text-pine-700";
  const callClass = dark
    ? "inline-flex items-center justify-center rounded-full border border-emerald-700/70 bg-emerald-500/10 px-5 py-2.5 text-sm font-semibold text-emerald-300 transition-all duration-300 transform-gpu hover:-translate-y-0.5 hover:scale-105 hover:bg-emerald-500/20"
    : "btn-secondary px-5 py-2.5 text-sm";
  const quoteClass = dark
    ? "inline-flex items-center justify-center rounded-full bg-emerald-500 px-5 py-2.5 text-sm font-semibold text-zinc-950 shadow-[0_0_22px_rgba(16,185,129,0.35)] transition-all duration-300 transform-gpu hover:-translate-y-0.5 hover:scale-105 hover:bg-emerald-400"
    : "btn-primary px-5 py-2.5 text-sm";
  const footerClass = dark
    ? "border-t border-emerald-900/60 bg-black/50"
    : "border-t border-pine-100 bg-white";
  const footerMuted = dark ? "text-zinc-400" : "text-charcoal/70";

  return (
    <div className={wrapperClass}>
      <header className={headerClass}>
        <div className="container-shell flex h-20 items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className={badgeClass}>{dark ? "Premium Dark" : "Fresh Light"}</span>
            <div className="hidden sm:block">
              <p className={`text-sm font-bold ${brandPrimary}`}>{business.name}</p>
              <p className={`text-xs uppercase tracking-[0.12em] ${brandSecondary}`}>Orlando, Florida</p>
            </div>
          </div>

          <nav className="hidden items-center gap-5 lg:flex" aria-label="Variation navigation">
            {variantNav.map((link) => (
              <Link
                key={link.slug}
                href={link.slug ? `${basePath}/${link.slug}` : basePath}
                className={navClass}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="hidden items-center gap-2 md:flex">
            <Link href="/premium-dark" className={dark ? quoteClass : callClass}>
              View Dark Version
            </Link>
            <Link href="/fresh-light" className={dark ? callClass : quoteClass}>
              View Light Version
            </Link>
          </div>
        </div>
      </header>

      <main>{children}</main>

      <footer className={footerClass}>
        <div className="container-shell grid gap-8 py-10 md:grid-cols-3 md:items-center">
          <div>
            <p className={`text-lg font-bold ${brandPrimary}`}>{business.name}</p>
            <p className={`mt-2 text-sm ${footerMuted}`}>
              Local Orlando landscaping company delivering dependable, licensed and insured outdoor
              services.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-2 text-sm">
            {variantNav.map((link) => (
              <Link
                key={link.slug}
                href={link.slug ? `${basePath}/${link.slug}` : basePath}
                className={
                  dark
                    ? "interactive-link text-zinc-300 hover:text-emerald-300"
                    : "interactive-link text-charcoal/85 hover:text-pine-700"
                }
              >
                {link.label}
              </Link>
            ))}
          </div>
          <div className="flex items-center justify-start md:justify-end">
            <a href={business.phoneHref} className={quoteClass}>
              Call {business.phoneDisplay}
            </a>
          </div>
        </div>
        <div className={dark ? "border-t border-emerald-900/60 py-5" : "border-t border-pine-100 py-5"}>
          <div className="container-shell flex flex-col gap-2 text-center sm:text-left">
            <div className={dark ? "text-sm text-zinc-400" : "text-sm text-gray-500"}>
              <p>© {new Date().getFullYear()} {business.name}. All rights reserved.</p>
              <p className="mt-3">
                Website Design by{" "}
                <a
                  href="https://elevatedigitalstudios.net"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={
                    dark
                      ? "group relative font-medium text-zinc-300 transition duration-300 hover:bg-gradient-to-r hover:from-cyan-400 hover:to-purple-500 hover:bg-clip-text hover:text-transparent hover:drop-shadow-[0_0_6px_rgba(56,189,248,0.5)]"
                      : "group relative font-medium text-gray-600 transition duration-300 hover:bg-gradient-to-r hover:from-cyan-500 hover:to-purple-500 hover:bg-clip-text hover:text-transparent hover:drop-shadow-[0_0_6px_rgba(56,189,248,0.4)]"
                  }
                >
                  Elevate Digital Studio.
                  <span className="absolute -bottom-1 left-0 h-[2px] w-0 bg-gradient-to-r from-cyan-400 to-purple-500 transition-all duration-300 group-hover:w-full"></span>
                </a>
              </p>
            </div>
          </div>
        </div>
      </footer>

      <div
        className={
          dark
            ? "fixed inset-x-0 bottom-0 z-50 border-t border-emerald-900/60 bg-black/80 p-3 backdrop-blur md:hidden"
            : "fixed inset-x-0 bottom-0 z-50 border-t border-pine-200 bg-white/95 p-3 backdrop-blur md:hidden"
        }
      >
        <div className="mx-auto grid max-w-md grid-cols-2 gap-2">
          <a href={business.phoneHref} className={callClass}>
            Call Now
          </a>
          <Link href={`${basePath}/contact#quote-form`} className={quoteClass}>
            Free Estimate
          </Link>
        </div>
      </div>
    </div>
  );
}
