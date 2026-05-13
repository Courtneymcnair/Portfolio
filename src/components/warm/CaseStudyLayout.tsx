"use client";

type LayoutProps = {
  children: React.ReactNode;
};

export default function CaseStudyLayout({ children }: LayoutProps) {
  return (
    <main
      style={{
        minHeight: "100vh",
        background: "var(--warm-bg, #FFE9D6)",
        color: "var(--warm-ink, #2A0F08)",
        paddingTop: 64,
      }}
    >
      {children}
    </main>
  );
}

type Background = "bg" | "bg-bright" | "bg-card";

type SectionProps = {
  eyebrow?: string;
  heading?: string;
  background?: Background;
  topRule?: boolean;
  children: React.ReactNode;
};

const bgMap: Record<Background, string> = {
  bg: "var(--warm-bg, #FFE9D6)",
  "bg-bright": "var(--warm-bg-bright, #FFF1E0)",
  "bg-card": "var(--warm-bg-card, #FFEFE0)",
};

export function CaseStudySection({
  eyebrow,
  heading,
  background = "bg",
  topRule = false,
  children,
}: SectionProps) {
  return (
    <section
      style={{
        background: bgMap[background],
        padding: "clamp(56px, 8vw, 96px) var(--warm-content-padding)",
        borderTop: topRule
          ? "1px solid var(--warm-hair, rgba(42,15,8,0.12))"
          : undefined,
      }}
    >
      <div
        style={{
          maxWidth: 1180,
          margin: "0 auto",
        }}
      >
        {(eyebrow || heading) && (
          <header style={{ marginBottom: "clamp(28px, 4vw, 48px)" }}>
            {eyebrow && (
              <p
                style={{
                  fontFamily:
                    "var(--warm-display, 'Plus Jakarta Sans', sans-serif)",
                  fontSize: "clamp(11px, 1.3vw, 15px)",
                  fontWeight: 600,
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  color: "var(--warm-accent-strong, #B8331A)",
                  margin: 0,
                  marginBottom: 14,
                }}
              >
                {eyebrow}
              </p>
            )}
            {heading && (
              <h2
                style={{
                  fontFamily:
                    "var(--warm-display, 'Plus Jakarta Sans', sans-serif)",
                  fontWeight: 500,
                  fontSize: "clamp(32px, 4.5vw, 56px)",
                  lineHeight: 1.1,
                  letterSpacing: "-0.025em",
                  color: "var(--warm-ink, #2A0F08)",
                  margin: 0,
                  maxWidth: 880,
                }}
              >
                {heading}
              </h2>
            )}
          </header>
        )}
        {children}
      </div>
    </section>
  );
}
