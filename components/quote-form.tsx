import { business } from "@/data/site-content";

export function QuoteForm() {
  return (
    <form
      id="quote-form"
      className="rounded-2xl border border-pine-100 bg-white p-6 shadow-sm sm:p-8"
      aria-label="Request a free landscaping quote"
    >
      <h3 className="text-2xl font-bold text-pine-950">Get a Free Quote</h3>
      <p className="mt-2 text-sm text-charcoal/80">
        Tell us about your landscaping project and we&apos;ll follow up with pricing and availability.
      </p>

      <div className="mt-6 grid gap-4">
        <label className="grid gap-2 text-sm font-medium text-charcoal">
          Name
          <input
            type="text"
            name="name"
            required
            className="rounded-xl border border-pine-200 px-4 py-3 outline-none transition focus:border-pine-500"
            placeholder="Your full name"
          />
        </label>
        <label className="grid gap-2 text-sm font-medium text-charcoal">
          Phone
          <input
            type="tel"
            name="phone"
            required
            className="rounded-xl border border-pine-200 px-4 py-3 outline-none transition focus:border-pine-500"
            placeholder="(407) 000-0000"
          />
        </label>
        <label className="grid gap-2 text-sm font-medium text-charcoal">
          Email
          <input
            type="email"
            name="email"
            required
            className="rounded-xl border border-pine-200 px-4 py-3 outline-none transition focus:border-pine-500"
            placeholder="you@email.com"
          />
        </label>
        <label className="grid gap-2 text-sm font-medium text-charcoal">
          Service Needed
          <select
            name="service"
            defaultValue=""
            className="rounded-xl border border-pine-200 bg-white px-4 py-3 outline-none transition focus:border-pine-500"
          >
            <option value="" disabled>
              Select a service
            </option>
            <option>Lawn Maintenance</option>
            <option>Landscape Installation</option>
            <option>Landscape Design</option>
            <option>Irrigation Services</option>
            <option>Artificial Turf</option>
            <option>Landscape Cleanup</option>
            <option>Storm Cleanup</option>
          </select>
        </label>
      </div>

      <label className="mt-4 grid gap-2 text-sm font-medium text-charcoal">
        Message
        <textarea
          name="message"
          rows={5}
          className="rounded-xl border border-pine-200 px-4 py-3 outline-none transition focus:border-pine-500"
          placeholder="Tell us about your yard goals, timeline, and the services you need."
        />
      </label>

      <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <button type="submit" className="btn-primary">
          Get a Free Quote
        </button>
        <a href={business.phoneHref} className="text-sm font-semibold text-pine-800 hover:text-pine-900">
          Prefer to call? {business.phoneDisplay}
        </a>
      </div>
    </form>
  );
}
