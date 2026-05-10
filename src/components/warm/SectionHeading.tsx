"use client";

import SectionLabel from "./SectionLabel";

type Props = {
  children: React.ReactNode;
  /** Optional eyebrow label above the heading. */
  label?: string;
  /** Level for semantic HTML — visual size is constant (--warm-text-h2). */
  as?: "h1" | "h2" | "h3";
  /** Optional secondary text below the heading. */
  description?: React.ReactNode;
  align?: "left" | "center";
};

export default function SectionHeading({
  children,
  label,
  as = "h2",
  description,
  align = "left",
}: Props) {
  const Tag = as;

  const headingStyle: React.CSSProperties = {
    fontFamily: "var(--warm-display, 'Plus Jakarta Sans', sans-serif)",
    fontWeight: 600,
    fontSize: "clamp(28px, 3.5vw, 48px)",
    letterSpacing: "-0.02em",
    lineHeight: 1.15,
    color: "var(--warm-ink, #2A0F08)",
    margin: 0,
    maxWidth: align === "center" ? 720 : 880,
  };

  const descStyle: React.CSSProperties = {
    fontFamily: "var(--warm-sans, 'Plus Jakarta Sans', sans-serif)",
    fontWeight: 450,
    fontSize: "clamp(16px, 1.1vw, 18px)",
    letterSpacing: 0,
    lineHeight: 1.65,
    color: "var(--warm-ink-soft, #4A1F12)",
    margin: 0,
    maxWidth: 580,
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: 12,
        alignItems: align === "center" ? "center" : "flex-start",
        textAlign: align,
        margin: align === "center" ? "0 auto" : undefined,
      }}
    >
      {label ? <SectionLabel align={align}>{label}</SectionLabel> : null}
      <Tag style={headingStyle}>{children}</Tag>
      {description ? <p style={descStyle}>{description}</p> : null}
    </div>
  );
}
