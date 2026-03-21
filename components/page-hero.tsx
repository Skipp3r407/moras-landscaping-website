import { business } from "@/data/site-content";

type PageHeroProps = {
  title: string;
  description: string;
  keywordLine?: string;
};

export function PageHero({ title, description, keywordLine }: PageHeroProps) {
  return (
    <section className="bg-earth/40 pt-28">
      <div className="container-shell section">
        <div className="max-w-4xl fade-in-up">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-pine-700">
            {business.name} | Orlando, FL
          </p>
          <h1 className="mt-3 text-4xl font-extrabold tracking-tight text-pine-950 sm:text-5xl">
            {title}
          </h1>
          <p className="mt-5 text-lg text-charcoal/80">{description}</p>
          {keywordLine ? (
            <p className="mt-4 rounded-xl border border-pine-100 bg-white px-4 py-3 text-sm text-pine-800">
              {keywordLine}
            </p>
          ) : null}
        </div>
      </div>
    </section>
  );
}
