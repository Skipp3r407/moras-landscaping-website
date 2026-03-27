type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  center?: boolean;
};

export function SectionHeading({ eyebrow, title, description, center }: SectionHeadingProps) {
  return (
    <div
      className={
        center
          ? "mx-auto max-w-3xl text-center"
          : "max-w-3xl lg:max-w-[40rem]"
      }
    >
      {eyebrow ? (
        <div
          className={
            center
              ? "mb-4 flex flex-col items-center gap-2"
              : "mb-4 flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-3"
          }
        >
          <span
            className="inline-block h-1 w-10 shrink-0 rounded-full bg-gradient-to-r from-pine-600 to-grass"
            aria-hidden
          />
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-pine-700">{eyebrow}</p>
        </div>
      ) : null}
      <h2 className="text-balance text-3xl font-extrabold tracking-tight text-pine-950 sm:text-4xl lg:text-[2.35rem] lg:leading-tight">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 text-base leading-relaxed text-charcoal/80 sm:text-lg">{description}</p>
      ) : null}
    </div>
  );
}
