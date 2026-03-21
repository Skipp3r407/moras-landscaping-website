import { business } from "@/data/site-content";

type EstimateFormProps = {
  mode: "dark" | "light";
  id?: string;
};

export function EstimateForm({ mode, id = "quote-form" }: EstimateFormProps) {
  const dark = mode === "dark";

  const shellClass = dark
    ? "rounded-3xl border border-emerald-900/60 bg-black/40 p-6 shadow-[0_24px_60px_rgba(16,185,129,0.12)] backdrop-blur"
    : "rounded-3xl border border-pine-100 bg-white p-6 shadow-sm";
  const labelClass = dark ? "text-zinc-200" : "text-charcoal";
  const fieldClass = dark
    ? "rounded-xl border border-emerald-900/70 bg-zinc-950/60 px-4 py-3 text-zinc-100 outline-none transition placeholder:text-zinc-500 focus:border-emerald-500"
    : "rounded-xl border border-pine-200 bg-white px-4 py-3 text-charcoal outline-none transition placeholder:text-charcoal/40 focus:border-pine-500";
  const buttonClass = dark
    ? "inline-flex items-center justify-center rounded-full bg-emerald-500 px-6 py-3 font-semibold text-zinc-950 shadow-[0_0_24px_rgba(16,185,129,0.35)] transition-all duration-300 transform-gpu hover:-translate-y-0.5 hover:scale-105 hover:bg-emerald-400"
    : "btn-primary";
  const headingClass = dark ? "text-zinc-50" : "text-pine-950";
  const subClass = dark ? "text-zinc-300" : "text-charcoal/80";
  const linkClass = dark ? "text-emerald-300 hover:text-emerald-200" : "text-pine-800 hover:text-pine-900";

  return (
    <form id={id} className={shellClass} aria-label="Request free estimate">
      <h3 className={`text-2xl font-bold ${headingClass}`}>Request a Free Estimate</h3>
      <p className={`mt-2 text-sm ${subClass}`}>
        Tell us about your property and goals. We&apos;ll follow up quickly with next steps.
      </p>

      <div className="mt-5 grid gap-4 sm:grid-cols-2">
        <label className={`grid gap-2 text-sm font-medium ${labelClass}`}>
          Name
          <input type="text" required className={fieldClass} placeholder="Your full name" />
        </label>
        <label className={`grid gap-2 text-sm font-medium ${labelClass}`}>
          Phone
          <input type="tel" required className={fieldClass} placeholder="(407) 000-0000" />
        </label>
        <label className={`grid gap-2 text-sm font-medium ${labelClass}`}>
          Email
          <input type="email" required className={fieldClass} placeholder="you@email.com" />
        </label>
        <label className={`grid gap-2 text-sm font-medium ${labelClass}`}>
          Service Needed
          <select className={fieldClass} defaultValue="">
            <option value="" disabled>
              Select a service
            </option>
            <option>Yard Cleanups</option>
            <option>Lawn Maintenance</option>
            <option>Landscape Design</option>
            <option>Sod Installation</option>
            <option>Plant Installation</option>
            <option>Mulch & Rock Installation</option>
            <option>Irrigation Services</option>
            <option>Artificial Turf</option>
            <option>Hardscape Services</option>
            <option>Tree Services</option>
          </select>
        </label>
      </div>

      <label className={`mt-4 grid gap-2 text-sm font-medium ${labelClass}`}>
        Address
        <input type="text" className={fieldClass} placeholder="Street, City, ZIP" />
      </label>

      <label className={`mt-4 grid gap-2 text-sm font-medium ${labelClass}`}>
        Project Details
        <textarea
          rows={4}
          className={fieldClass}
          placeholder="Tell us about your goals, timeline, and project size."
        />
      </label>

      <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <button type="submit" className={buttonClass}>
          Get My Quote
        </button>
        <a href={business.phoneHref} className={`text-sm font-semibold transition ${linkClass}`}>
          Call {business.phoneDisplay}
        </a>
      </div>
    </form>
  );
}
