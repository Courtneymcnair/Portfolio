"use client";

type Props = {
  label?: string;
  children: React.ReactNode;
};

export default function Aside({ label = "Why this matters", children }: Props) {
  return (
    <div
      style={{
        margin: "24px 0",
        paddingLeft: 18,
        borderLeft: "2px solid var(--warm-accent-strong, #B8331A)",
        maxWidth: 760,
      }}
    >
      <p
        style={{
          fontFamily: "var(--warm-display, 'Plus Jakarta Sans', sans-serif)",
          fontSize: 11,
          fontWeight: 600,
          letterSpacing: "0.16em",
          textTransform: "uppercase",
          color: "var(--warm-accent-strong, #B8331A)",
          margin: 0,
          marginBottom: 8,
        }}
      >
        {label}
      </p>
      <p
        style={{
          fontFamily: "var(--warm-sans, 'Plus Jakarta Sans', sans-serif)",
          fontStyle: "italic",
          fontWeight: 400,
          fontSize: 18,
          lineHeight: 1.55,
          color: "var(--warm-ink-soft, #4A1F12)",
          margin: 0,
        }}
      >
        {children}
      </p>
    </div>
  );
}
