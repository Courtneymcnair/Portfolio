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
        borderRadius: "var(--warm-radius-pill, 999px)",
        background: "var(--warm-ink, #2A0F08)",
        color: "var(--warm-bg, #FFE9D6)",
        fontFamily: "var(--warm-sans, 'Plus Jakarta Sans', sans-serif)",
        fontSize: "clamp(13px, 1.4vw, 16px)",
        fontWeight: 600,
        textDecoration: "none",
        transition:
          "background 200ms ease, transform 200ms ease, box-shadow 200ms ease",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.background =
          "var(--warm-accent-strong, #B8331A)";
        e.currentTarget.style.transform = "translateY(-1px)";
        e.currentTarget.style.boxShadow =
          "var(--warm-shadow-md, 0 4px 14px rgba(42,15,8,0.08))";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.background = "var(--warm-ink, #2A0F08)";
        e.currentTarget.style.transform = "";
        e.currentTarget.style.boxShadow = "";
      }}
    >
      {label}
    </a>
  );
}
