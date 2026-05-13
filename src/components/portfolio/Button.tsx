"use client";

import type { ReactNode } from "react";

type Variant = "primary" | "secondary" | "ghost" | "link";
type Size = "sm" | "md" | "lg";

type Props = {
  children: ReactNode;
  variant?: Variant;
  size?: Size;
  href?: string;
  onClick?: () => void;
  ariaLabel?: string;
  iconRight?: ReactNode;
  iconLeft?: ReactNode;
};

const SIZE_PADDING: Record<Size, string> = {
  sm: "10px 18px",
  md: "14px 24px",
  lg: "18px 32px",
};

const SIZE_TEXT: Record<Size, number> = {
  sm: 14,
  md: 15,
  lg: 16,
};

function variantStyle(variant: Variant): React.CSSProperties {
  switch (variant) {
    case "primary":
      return {
        background: "var(--ink, #0A0A0F)",
        color: "var(--paper-card, #FFFFFF)",
        border: "1px solid var(--ink, #0A0A0F)",
      };
    case "secondary":
      return {
        background: "transparent",
        color: "var(--ink, #0A0A0F)",
        border: "1px solid var(--ink, #0A0A0F)",
      };
    case "ghost":
      return {
        background: "transparent",
        color: "var(--ink, #0A0A0F)",
        border: "1px solid var(--hair-strong, rgba(42,15,8,0.32))",
      };
    case "link":
      return {
        background: "transparent",
        color: "var(--accent, #3250FF)",
        border: "none",
        padding: 0,
        textDecoration: "underline",
        textUnderlineOffset: "4px",
        textDecorationThickness: "1px",
      };
  }
}

export default function Button({
  children,
  variant = "primary",
  size = "md",
  href,
  onClick,
  ariaLabel,
  iconRight,
  iconLeft,
}: Props) {
  const isLink = variant === "link";
  const base: React.CSSProperties = {
    fontFamily: "var(--display, 'Plus Jakarta Sans', sans-serif)",
    fontWeight: 600,
    fontSize: SIZE_TEXT[size],
    letterSpacing: isLink ? "-0.01em" : "0.02em",
    padding: isLink ? 0 : SIZE_PADDING[size],
    borderRadius: isLink ? 0 : "var(--warm-radius-pill, 999px)",
    cursor: "pointer",
    display: "inline-flex",
    alignItems: "center",
    gap: 10,
    transition:
      "transform var(--warm-duration-base, 250ms) var(--warm-ease-out, cubic-bezier(0.22,1,0.36,1)), background var(--warm-duration-base, 250ms), color var(--warm-duration-base, 250ms)",
    textDecoration: isLink ? "underline" : "none",
    textUnderlineOffset: isLink ? "4px" : undefined,
    whiteSpace: "nowrap",
  };

  const combined: React.CSSProperties = { ...base, ...variantStyle(variant) };

  const content = (
    <>
      {iconLeft ? <span style={{ display: "inline-flex" }}>{iconLeft}</span> : null}
      {children}
      {iconRight ? <span style={{ display: "inline-flex" }}>{iconRight}</span> : null}
    </>
  );

  if (href) {
    return (
      <a href={href} aria-label={ariaLabel} style={combined}>
        {content}
      </a>
    );
  }

  return (
    <button type="button" onClick={onClick} aria-label={ariaLabel} style={combined}>
      {content}
    </button>
  );
}
