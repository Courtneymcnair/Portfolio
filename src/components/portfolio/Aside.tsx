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
        borderLeft: "2px solid var(--accent, #3250FF)",
        maxWidth: 760,
      }}
    >
      <p
        style={{
          fontFamily: "var(--display, 'Plus Jakarta Sans', sans-serif)",
          fontSize: 11,
          fontWeight: 600,
          letterSpacing: "0.16em",
          textTransform: "uppercase",
          color: "var(--accent, #3250FF)",
          margin: 0,
          marginBottom: 8,
        }}
      >
        {label}
      </p>
      <p
        style={{
          fontFamily: "var(--sans, 'Plus Jakarta Sans', sans-serif)",
          fontWeight: 400,
          fontSize: 18,
          lineHeight: 1.55,
          color: "var(--grey-1, #1A1A22)",
          margin: 0,
        }}
      >
        {children}
      </p>
    </div>
  );
}
