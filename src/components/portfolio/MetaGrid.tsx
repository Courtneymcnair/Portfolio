interface MetaItem {
  label: string;
  value: string;
}

export default function MetaGrid({ items }: { items: MetaItem[] }) {
  return (
    <div
      className="grid grid-cols-2 md:flex md:justify-between md:items-start gap-6 md:gap-10 py-10"
      style={{ borderTop: 'var(--hair-2)', borderBottom: 'var(--hair-2)' }}
    >
      {items.map((item) => (
        <div key={item.label}>
          <p
            style={{
              fontFamily: 'var(--mono)',
              fontSize: 11,
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
              color: 'var(--grey-2)',
              marginBottom: 8,
            }}
          >
            {item.label}
          </p>
          <p style={{ fontSize: 15, lineHeight: 1.6, color: 'var(--ink)' }}>
            {item.value}
          </p>
        </div>
      ))}
    </div>
  );
}
