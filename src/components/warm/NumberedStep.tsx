"use client";

type Props = {
  number: string;
  title: string;
  children: React.ReactNode;
};

export default function NumberedStep({ number, title, children }: Props) {
  return (
    <section
      style={{
        maxWidth: 1100,
        margin: "0 auto",
        padding: "clamp(28px, 4vw, 48px) 0",
      }}
    >
      <header
        style={{
          display: "flex",
          alignItems: "baseline",
          gap: "clamp(14px, 2vw, 24px)",
          marginBottom: 24,
        }}
      >
        <span
          style={{
            flexShrink: 0,
            minWidth: "clamp(40px, 5vw, 64px)",
            fontFamily: "var(--warm-mono, 'JetBrains Mono', monospace)",
            fontSize: "clamp(28px, 4vw, 48px)",
            lineHeight: 1,
            color: "var(--warm-accent-strong, #B8331A)",
            letterSpacing: "-0.01em",
            fontWeight: 400,
          }}
        >
          {number}
        </span>
        <h3
          style={{
            flex: 1,
            fontFamily: "var(--warm-display, 'Plus Jakarta Sans', sans-serif)",
            fontWeight: 500,
            fontSize: "clamp(24px, 3vw, 34px)",
            lineHeight: 1.25,
            letterSpacing: "-0.015em",
            color: "var(--warm-ink, #2A0F08)",
            margin: 0,
          }}
        >
          {title}
        </h3>
      </header>
      <div
        style={{
          fontFamily: "var(--warm-sans, 'Plus Jakarta Sans', sans-serif)",
          fontSize: 16.5,
          lineHeight: 1.65,
          color: "var(--warm-ink-soft, #4A1F12)",
          maxWidth: "100%",
        }}
      >
        {children}
      </div>
    </section>
  );
}
