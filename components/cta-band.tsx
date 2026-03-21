import Link from "next/link";

import { business } from "@/data/site-content";

type CtaBandProps = {
  title: string;
  text: string;
};

export function CtaBand({ title, text }: CtaBandProps) {
  return (
    <section className="section">
      <div className="container-shell">
        <div className="rounded-3xl bg-pine-900 p-8 text-white shadow-xl sm:p-12">
          <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-grass">
                Licensed & Insured Landscaping Experts
              </p>
              <h2 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl">{title}</h2>
              <p className="mt-4 max-w-2xl text-white/85">{text}</p>
            </div>
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
              <a href={business.phoneHref} className="btn-secondary border-white/30 bg-transparent text-white hover:bg-white/10">
                Call {business.phoneDisplay}
              </a>
              <Link href="/contact#quote-form" className="btn-primary bg-grass text-charcoal hover:bg-[#86d83f]">
                Get a Free Quote
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
