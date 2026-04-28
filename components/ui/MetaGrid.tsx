interface MetaItem {
  label: string;
  value: string;
}

export default function MetaGrid({ items }: { items: MetaItem[] }) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 py-10 border-t border-b border-black/10">
      {items.map((item) => (
        <div key={item.label}>
          <p className="text-overline mb-2">{item.label}</p>
          <p className="text-body text-black">{item.value}</p>
        </div>
      ))}
    </div>
  );
}
