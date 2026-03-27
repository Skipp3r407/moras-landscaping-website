import Image from "next/image";

import { lawnMaintenanceShowcase } from "@/data/site-content";

export function LawnMaintenanceStrip() {
  return (
    <section
      aria-label="Lawn maintenance"
      className="border-b border-green-900/20 bg-[#0f2418]"
    >
      <div className="container-shell py-4 sm:py-5">
        <p className="mb-3 text-center text-[11px] font-semibold uppercase tracking-[0.28em] text-green-200/90">
          Lawn maintenance and turf care
        </p>
        <div className="grid grid-cols-2 gap-2 sm:gap-3 md:grid-cols-4">
          {lawnMaintenanceShowcase.map((item) => (
            <div
              key={item.src}
              className="group relative aspect-[4/3] overflow-hidden rounded-lg shadow-lg ring-1 ring-white/10 sm:aspect-[3/2]"
            >
              <Image
                src={item.src}
                alt={item.alt}
                fill
                sizes="(max-width: 768px) 50vw, 25vw"
                className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
