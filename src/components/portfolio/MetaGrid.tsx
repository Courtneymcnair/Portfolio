"use client";

type Item = {
  label: string;
  value: React.ReactNode;
};

type Props = {
  items: Item[];
  columns?: 2 | 3 | 4;
};

export default function MetaGrid({ items, columns = 4 }: Props) {
  const labelStyle: React.CSSProperties = {
    fontFamily: "var(--mono, 'JetBrains Mono', monospace)",
    fontSize: 11,
    fontWeight: 500,
    letterSpacing: "0.12em",
    textTransform: "uppercase",
    color: "var(--grey-2, rgba(10, 10, 15, 0.65))",
    margin: 0,
  };

  const valueStyle: React.CSSProperties = {
    fontFamily: "var(--display, 'Plus Jakarta Sans', sans-serif)",
    fontSize: "clamp(16px, 1.1vw, 18px)",
    fontWeight: 500,
    letterSpacing: "-0.01em",
    lineHeight: 1.4,
    color: "var(--ink, #0A0A0F)",
    margin: 0,
  };

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: `repeat(auto-fit, minmax(260px, 1fr))`,
        gap: 32,
        padding: "32px 0",
        borderTop: "1px solid var(--hair-color, rgba(42,15,8,0.12))",
        borderBottom: "1px solid var(--hair-color, rgba(42,15,8,0.12))",
        maxWidth: columns === 4 ? "none" : columns * 220,
      }}
    >
      {items.map((item, i) => (
        <div key={i} style={{ display: "flex", flexDirection: "column", gap: 8 }}>
          <p style={labelStyle}>{item.label}</p>
          <p style={valueStyle}>{item.value}</p>
        </div>
      ))}
    </div>
  );
}
