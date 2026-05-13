"use client";

type Props = {
  label?: string;
  children: React.ReactNode;
};

export default function TLDR({ label = "TL;DR", children }: Props) {
  return (
    <aside
      style={{
        background: "var(--paper-card, #FFFFFF)",
        border: "1px solid var(--border-color, rgba(42,15,8,0.2))",
        borderRadius: "var(--warm-radius-md, 12px)",
        padding: "clamp(20px, 3vw, 32px)",
        maxWidth: 880,
        margin: "0 auto",
        boxShadow: "var(--shadow-1, 0 1px 2px rgba(42,15,8,0.06))",
      }}
    >
      <p
        style={{
          fontFamily: "var(--display, 'Plus Jakarta Sans', sans-serif)",
          fontSize: "clamp(11px, 1.3vw, 15px)",
          fontWeight: 600,
          letterSpacing: "0.12em",
          textTransform: "uppercase",
          color: "var(--accent, #3250FF)",
          margin: 0,
          marginBottom: 12,
        }}
      >
        {label}
      </p>
      <p
        style={{
          fontFamily: "var(--sans, 'Plus Jakarta Sans', sans-serif)",
          fontWeight: 500,
          fontSize: "clamp(17px, 1.6vw, 21px)",
          lineHeight: 1.5,
          letterSpacing: "-0.005em",
          color: "var(--ink, #0A0A0F)",
          margin: 0,
        }}
      >
        {children}
      </p>
    </aside>
  );
}
