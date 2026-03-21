type FaqItem = {
  question: string;
  answer: string;
};

type FaqListProps = {
  items: FaqItem[];
};

export function FaqList({ items }: FaqListProps) {
  return (
    <div className="space-y-3">
      {items.map((item) => (
        <details key={item.question} className="rounded-xl border border-pine-100 bg-white p-5">
          <summary className="cursor-pointer list-none font-semibold text-pine-950">
            {item.question}
          </summary>
          <p className="mt-3 text-sm text-charcoal/80">{item.answer}</p>
        </details>
      ))}
    </div>
  );
}
