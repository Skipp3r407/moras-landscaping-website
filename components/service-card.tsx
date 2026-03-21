import Link from "next/link";

type ServiceCardProps = {
  icon?: string;
  title: string;
  short: string;
  benefits: readonly string[];
  useCases: readonly string[];
};

export function ServiceCard({ icon, title, short, benefits, useCases }: ServiceCardProps) {
  return (
    <article className="card h-full">
      {icon ? (
        <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-pine-50 text-xl">
          {icon}
        </span>
      ) : null}
      <h3 className="mt-3 text-xl font-bold text-pine-900">{title}</h3>
      <p className="mt-3 text-sm text-charcoal/80">{short}</p>

      <div className="mt-5 space-y-3 text-sm">
        <div>
          <p className="font-semibold text-pine-900">Benefits</p>
          <ul className="mt-2 space-y-1 text-charcoal/80">
            {benefits.map((benefit) => (
              <li key={benefit}>• {benefit}</li>
            ))}
          </ul>
        </div>
        <div>
          <p className="font-semibold text-pine-900">Ideal For</p>
          <ul className="mt-2 space-y-1 text-charcoal/80">
            {useCases.map((useCase) => (
              <li key={useCase}>• {useCase}</li>
            ))}
          </ul>
        </div>
      </div>

      <Link href="/contact#quote-form" className="btn-primary mt-6 w-full text-sm">
        Get a Free Quote
      </Link>
    </article>
  );
}
