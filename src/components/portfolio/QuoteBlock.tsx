"use client";

type Props = {
  quote: React.ReactNode;
  attribution?: string;
  role?: string;
};

export default function QuoteBlock({ quote, attribution, role }: Props) {
  return (
    <figure
      style={{
        margin: 0,
        padding: "40px 0",
        borderTop: "1px solid var(--hair-color, rgba(42,15,8,0.12))",
        borderBottom: "1px solid var(--hair-color, rgba(42,15,8,0.12))",
        maxWidth: 880,
      }}
    >
      <blockquote
        style={{
          margin: 0,
          fontFamily: "var(--display, 'Plus Jakarta Sans', sans-serif)",
          fontWeight: 500,
          fontSize: "clamp(22px, 2.4vw, 32px)",
          letterSpacing: "-0.015em",
          lineHeight: 1.35,
          color: "var(--ink, #0A0A0F)",
        }}
      >
        <span
          aria-hidden
          style={{
            color: "var(--accent, #3250FF)",
            marginRight: 8,
            fontWeight: 500,
          }}
        >
          &ldquo;
        </span>
        {quote}
        <span
          aria-hidden
          style={{
            color: "var(--accent, #3250FF)",
            marginLeft: 4,
            fontWeight: 500,
          }}
        >
          &rdquo;
        </span>
      </blockquote>
      {attribution || role ? (
        <figcaption
          style={{
            marginTop: 24,
            display: "flex",
            alignItems: "baseline",
            gap: 12,
            flexWrap: "wrap",
            fontFamily: "var(--sans, 'Plus Jakarta Sans', sans-serif)",
            fontSize: 15,
            lineHeight: 1.5,
          }}
        >
          {attribution ? (
            <span
              style={{
                fontWeight: 600,
                letterSpacing: "-0.005em",
                color: "var(--ink, #0A0A0F)",
              }}
            >
              {attribution}
            </span>
          ) : null}
          {role ? (
            <span
              style={{
                fontWeight: 450,
                color: "var(--grey-2, rgba(10, 10, 15, 0.65))",
              }}
            >
              {role}
            </span>
          ) : null}
        </figcaption>
      ) : null}
    </figure>
  );
}
