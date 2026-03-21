type ServiceAreaListProps = {
  areas: readonly string[];
};

export function ServiceAreaList({ areas }: ServiceAreaListProps) {
  return (
    <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
      {areas.map((area) => (
        <div
          key={area}
          className="rounded-xl border border-pine-100 bg-white px-4 py-3 text-sm font-medium text-pine-900"
        >
          {area}
        </div>
      ))}
    </div>
  );
}
