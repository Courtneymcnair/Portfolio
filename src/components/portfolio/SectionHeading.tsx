"use client";

import SectionLabel from "./SectionLabel";

type Props = {
  children: React.ReactNode;
  /** Optional eyebrow label above the heading. */
  label?: string;
  /** Level for semantic HTML — visual size is constant (--text-h2). */
  as?: "h1" | "h2" | "h3";
  /** Optional secondary text below the heading. */
  description?: React.ReactNode;
  align?: "left" | "center";
  className?: string;
};

export default function SectionHeading({
  children,
  label,
  as = "h2",
  description,
  align = "left",
  className,
}: Props) {
  const Tag = as;

  const headingStyle: React.CSSProperties = {
    fontFamily: "var(--display, 'Plus Jakarta Sans', sans-serif)",
    fontWeight: 600,
    fontSize: "clamp(28px, 3.5vw, 48px)",
    letterSpacing: "-0.02em",
    lineHeight: 1.15,
    color: "var(--ink, #0A0A0F)",
    margin: 0,
    maxWidth: align === "center" ? 720 : 880,
  };

  const descStyle: React.CSSProperties = {
    fontFamily: "var(--sans, 'Plus Jakarta Sans', sans-serif)",
    fontWeight: 450,
    fontSize: "clamp(16px, 1.1vw, 18px)",
    letterSpacing: 0,
    lineHeight: 1.65,
    color: "var(--grey-1, #1A1A22)",
    margin: 0,
    maxWidth: 580,
  };

  return (
    <div
      className={className}
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
