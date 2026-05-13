"use client";

type Props = {
  href: string;
  label?: string;
};

export default function JumpButton({
  href,
  label = "Jump to solution",
}: Props) {
  return (
    <a
      href={href}
      style={{
        display: "inline-flex",
        alignItems: "center",
        padding: "clamp(8px, 1.5vw, 12px) clamp(18px, 3vw, 28px)",
        borderRadius: "var(--r-pill, 999px)",
        background: "var(--ink, #0A0A0F)",
        color: "var(--paper, #F4F4F0)",
        fontFamily: "var(--sans, 'Plus Jakarta Sans', sans-serif)",
        fontSize: "clamp(13px, 1.4vw, 16px)",
        fontWeight: 600,
        textDecoration: "none",
        transition:
          "background 200ms ease, transform 200ms ease, box-shadow 200ms ease",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.background =
          "var(--accent, #3250FF)";
        e.currentTarget.style.transform = "translateY(-1px)";
        e.currentTarget.style.boxShadow =
          "var(--shadow-2, 0 4px 14px rgba(10, 10, 15, 0.08))";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.background = "var(--ink, #0A0A0F)";
        e.currentTarget.style.transform = "";
        e.currentTarget.style.boxShadow = "";
      }}
    >
      {label}
    </a>
  );
}
