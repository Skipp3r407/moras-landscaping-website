import Image from "next/image";

type ProjectCardProps = {
  title: string;
  category: string;
  image: string;
  caption: string;
};

export function ProjectCard({ title, category, image, caption }: ProjectCardProps) {
  return (
    <article className="group overflow-hidden rounded-2xl border border-pine-100 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
      <div className="relative h-56 overflow-hidden">
        <Image
          src={image}
          alt={`${title} project for Mora's Landscaping LLC`}
          fill
          className="object-cover transition duration-500 group-hover:scale-105"
        />
      </div>
      <div className="p-5">
        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-pine-700">{category}</p>
        <h3 className="mt-2 text-xl font-bold text-pine-950">{title}</h3>
        <p className="mt-3 text-sm text-charcoal/80">{caption}</p>
      </div>
    </article>
  );
}
