type TestimonialCardProps = {
  quote: string;
  name: string;
  location: string;
  rating?: number;
};

export function TestimonialCard({ quote, name, location, rating = 5 }: TestimonialCardProps) {
  return (
    <article className="card h-full bg-earth/30">
      <p className="mb-3 text-sm text-blue-500">{Array.from({ length: rating }, () => "★").join(" ")}</p>
      <p className="text-sm leading-relaxed text-charcoal/90">&ldquo;{quote}&rdquo;</p>
      <div className="mt-5 border-t border-pine-100 pt-4">
        <p className="font-semibold text-pine-900">{name}</p>
        <p className="text-xs uppercase tracking-[0.12em] text-pine-700">{location}</p>
      </div>
    </article>
  );
}
