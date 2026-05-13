"use client";

type Props = {
  label?: string;
  children: React.ReactNode;
};

export default function TLDR({ label = "TL;DR", children }: Props) {
  return (
    <aside
      style={{
        background: "var(--warm-bg-card, #FFEFE0)",
        border: "1px solid var(--warm-border, rgba(42,15,8,0.2))",
        borderRadius: "var(--warm-radius-md, 12px)",
        padding: "clamp(20px, 3vw, 32px)",
        maxWidth: 880,
        margin: "0 auto",
        boxShadow: "var(--warm-shadow-sm, 0 1px 2px rgba(42,15,8,0.06))",
      }}
    >
      <p
        style={{
          fontFamily: "var(--warm-display, 'Plus Jakarta Sans', sans-serif)",
          fontSize: "clamp(11px, 1.3vw, 15px)",
          fontWeight: 600,
          letterSpacing: "0.12em",
          textTransform: "uppercase",
          color: "var(--warm-accent-strong, #B8331A)",
          margin: 0,
          marginBottom: 12,
        }}
      >
        {label}
      </p>
      <p
        style={{
          fontFamily: "var(--warm-sans, 'Plus Jakarta Sans', sans-serif)",
          fontWeight: 500,
          fontSize: "clamp(17px, 1.6vw, 21px)",
          lineHeight: 1.5,
          letterSpacing: "-0.005em",
          color: "var(--warm-ink, #2A0F08)",
          margin: 0,
        }}
      >
        {children}
      </p>
    </aside>
  );
}
