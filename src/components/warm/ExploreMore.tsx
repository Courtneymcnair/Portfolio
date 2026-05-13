"use client";

import Button from "./Button";

type Props = {
  heading?: string;
  description?: string;
  primaryHref?: string;
  primaryLabel?: string;
  secondaryHref?: string;
  secondaryLabel?: string;
};

export default function ExploreMore({
  heading = "Looking for more?",
  description = "There are more case studies on the way — or get in touch directly.",
  primaryHref = "/",
  primaryLabel = "See all work",
  secondaryHref = "mailto:courtney@chekhub.com",
  secondaryLabel = "Get in touch",
}: Props) {
  return (
    <section
      style={{
        padding: "clamp(64px, 8vw, 128px) var(--warm-content-padding)",
        background: "var(--warm-bg, #FFE9D6)",
        borderTop: "1px solid var(--warm-hair, rgba(42, 15, 8, 0.12))",
        textAlign: "center",
      }}
    >
      <div style={{ maxWidth: 720, margin: "0 auto", display: "flex", flexDirection: "column", gap: 24, alignItems: "center" }}>
        <h2
          style={{
            margin: 0,
            fontFamily: "var(--warm-display, 'Plus Jakarta Sans', sans-serif)",
            fontWeight: 600,
            fontSize: "clamp(32px, 4vw, 56px)",
            letterSpacing: "-0.02em",
            lineHeight: 1.1,
            color: "var(--warm-ink, #2A0F08)",
          }}
        >
          {heading}
        </h2>
        <p
          style={{
            margin: 0,
            fontFamily: "var(--warm-sans, 'Plus Jakarta Sans', sans-serif)",
            fontWeight: 450,
            fontSize: "clamp(16px, 1.2vw, 19px)",
            lineHeight: 1.6,
            color: "var(--warm-ink-soft, #4A1F12)",
            maxWidth: 520,
          }}
        >
          {description}
        </p>
        <div style={{ display: "flex", gap: 16, marginTop: 16, flexWrap: "wrap", justifyContent: "center" }}>
          <Button variant="primary" size="lg" href={primaryHref}>
            {primaryLabel}
          </Button>
          <Button variant="secondary" size="lg" href={secondaryHref}>
            {secondaryLabel}
          </Button>
        </div>
      </div>
    </section>
  );
}
