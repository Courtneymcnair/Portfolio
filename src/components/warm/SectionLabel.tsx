"use client";

type Props = {
  children: React.ReactNode;
  /** Show flanking hairlines on either side of the label (like the hero eyebrow). */
  withLines?: boolean;
  /** Alignment when no flanking lines. */
  align?: "left" | "center" | "right";
};

export default function SectionLabel({ children, withLines = false, align = "left" }: Props) {
  const textStyle: React.CSSProperties = {
    fontFamily: "var(--warm-display, 'Plus Jakarta Sans', sans-serif)",
    fontWeight: 600,
    fontSize: "clamp(11px, 1.3vw, 15px)",
    letterSpacing: "0.12em",
    textTransform: "uppercase",
    color: "var(--warm-ink, #2A0F08)",
    whiteSpace: "nowrap",
  };

  if (withLines) {
    return (
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: 20,
        }}
      >
        <span
          aria-hidden
          style={{
            flex: "0 1 120px",
            height: 1,
            background: "var(--warm-hair-strong, rgba(42,15,8,0.32))",
          }}
        />
        <span style={textStyle}>{children}</span>
        <span
          aria-hidden
          style={{
            flex: "0 1 120px",
            height: 1,
            background: "var(--warm-hair-strong, rgba(42,15,8,0.32))",
          }}
        />
      </div>
    );
  }

  return (
    <div style={{ textAlign: align }}>
      <span style={textStyle}>{children}</span>
    </div>
  );
}
