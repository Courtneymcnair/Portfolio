"use client";

import BloomMark from "./icons/BloomMark";
import Button from "./Button";
import MailIcon from "./icons/MailIcon";

type NavLink = { label: string; href: string; external?: boolean };

const DEFAULT_LINKS: NavLink[] = [
  { label: "Work", href: "/" },
  { label: "About", href: "/about" },
  { label: "LinkedIn", href: "https://linkedin.com", external: true },
];

type Props = {
  links?: NavLink[];
  /** Mailto for the Get in touch CTA. */
  contactEmail?: string;
};

export default function Footer({
  links = DEFAULT_LINKS,
  contactEmail = "courtney@chekhub.com",
}: Props) {
  return (
    <footer
      style={{
        padding: "clamp(48px, 6vw, 96px) clamp(24px, 4vw, 56px)",
        background: "var(--warm-bg, #FFE9D6)",
        borderTop: "1px solid var(--warm-hair, rgba(42, 15, 8, 0.12))",
        color: "var(--warm-ink, #2A0F08)",
      }}
    >
      <div
        style={{
          maxWidth: 1280,
          margin: "0 auto",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 32,
        }}
      >
        <ul
          style={{
            margin: 0,
            padding: 0,
            listStyle: "none",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "clamp(40px, 6vw, 80px)",
            flexWrap: "wrap",
          }}
        >
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                target={link.external ? "_blank" : undefined}
                rel={link.external ? "noopener noreferrer" : undefined}
                style={{
                  fontFamily: "var(--warm-display, 'Plus Jakarta Sans', sans-serif)",
                  fontWeight: 500,
                  fontSize: 16,
                  letterSpacing: "-0.005em",
                  color: "var(--warm-ink, #2A0F08)",
                  textDecoration: "none",
                }}
              >
                {link.label}
                {link.external ? <span aria-hidden> ↗</span> : null}
              </a>
            </li>
          ))}
        </ul>

        <Button
          variant="primary"
          size="md"
          href={`mailto:${contactEmail}`}
          iconLeft={<MailIcon size={16} />}
        >
          Get in touch
        </Button>
      </div>

      <div
        style={{
          marginTop: 64,
          paddingTop: 24,
          borderTop: "1px solid var(--warm-hair, rgba(42, 15, 8, 0.12))",
          maxWidth: 1280,
          margin: "64px auto 0",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <a
          href="/"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 12,
            textDecoration: "none",
            color: "var(--warm-ink, #2A0F08)",
          }}
        >
          <BloomMark size={28} variant="icon" animate={false} />
          <span
            style={{
              fontFamily: "var(--warm-display, 'Plus Jakarta Sans', sans-serif)",
              fontWeight: 600,
              fontSize: 16,
              letterSpacing: "-0.015em",
            }}
          >
            Courtney McNair
          </span>
        </a>
      </div>
    </footer>
  );
}
