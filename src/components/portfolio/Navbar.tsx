"use client";

import { useEffect, useState } from "react";
import BloomMark from "./icons/BloomMark";
import Button from "./Button";

type NavLink = { label: string; href: string };
type Cta = { label: string; href: string; external?: boolean };

type Props = {
  links?: NavLink[];
  /** Override the brand label text. */
  brand?: string;
  /** Active link href (drives the small underline). */
  activeHref?: string;
  /** Right-side CTA button. Set to null to omit. */
  cta?: Cta | null;
};

const DEFAULT_LINKS: NavLink[] = [
  { label: "Work", href: "/" },
  { label: "About", href: "/about" },
];

const DEFAULT_CTA: Cta = {
  label: "LinkedIn",
  href: "https://linkedin.com",
  external: true,
};

function Hamburger({ open }: { open: boolean }) {
  const common = {
    stroke: "currentColor",
    strokeWidth: 1.8,
    strokeLinecap: "round" as const,
  };
  return (
    <svg
      aria-hidden
      viewBox="0 0 24 24"
      width={22}
      height={22}
      fill="none"
      style={{ display: "block" }}
    >
      {open ? (
        <>
          <line x1={6} y1={6} x2={18} y2={18} {...common} />
          <line x1={6} y1={18} x2={18} y2={6} {...common} />
        </>
      ) : (
        <>
          <line x1={4} y1={7} x2={20} y2={7} {...common} />
          <line x1={4} y1={13} x2={20} y2={13} {...common} />
          <line x1={4} y1={19} x2={20} y2={19} {...common} />
        </>
      )}
    </svg>
  );
}

export default function Navbar({
  links = DEFAULT_LINKS,
  brand = "Courtney McNair",
  activeHref,
  cta = DEFAULT_CTA,
}: Props) {
  const [menuOpen, setMenuOpen] = useState(false);

  // Close on Escape.
  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [menuOpen]);

  // Close menu when crossing the breakpoint into desktop.
  useEffect(() => {
    const mq = window.matchMedia("(min-width: 721px)");
    const onChange = () => {
      if (mq.matches) setMenuOpen(false);
    };
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  return (
    <>
      <style>{`
        .warm-nav-desktop { display: flex; }
        .warm-nav-mobile { display: none; }
        @media (max-width: 720px) {
          .warm-nav-desktop { display: none; }
          .warm-nav-mobile { display: flex; }
        }
      `}</style>

      <nav
        style={{
          position: "sticky",
          top: 0,
          zIndex: 50,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "clamp(10px, 2.2vw, 20px) var(--content-padding)",
          background: "rgba(244, 244, 240, 0.78)",
          backdropFilter: "blur(12px)",
          WebkitBackdropFilter: "blur(12px)",
          borderBottom: "1px solid var(--hair-color, rgba(10, 10, 15, 0.08))",
        }}
      >
        <a
          href="/"
          style={{
            display: "flex",
            alignItems: "center",
            gap: 12,
            textDecoration: "none",
            color: "var(--ink, #0A0A0F)",
          }}
        >
          <BloomMark size={28} variant="icon" animate={false} />
          <span
            style={{
              fontFamily: "var(--display, 'Plus Jakarta Sans', sans-serif)",
              fontWeight: 600,
              fontSize: 16,
              letterSpacing: "-0.015em",
              whiteSpace: "nowrap",
            }}
          >
            {brand}
          </span>
        </a>

        {/* Desktop / tablet nav */}
        <div
          className="warm-nav-desktop"
          style={{
            alignItems: "center",
            gap: "clamp(20px, 3vw, 40px)",
          }}
        >
          <ul
            style={{
              display: "flex",
              alignItems: "center",
              gap: "clamp(20px, 3vw, 40px)",
              margin: 0,
              padding: 0,
              listStyle: "none",
            }}
          >
            {links.map((link) => {
              const isActive = link.href === activeHref;
              return (
                <li key={link.href}>
                  <a
                    href={link.href}
                    style={{
                      fontFamily: "var(--display, 'Plus Jakarta Sans', sans-serif)",
                      fontWeight: 500,
                      fontSize: 15,
                      letterSpacing: "-0.005em",
                      color: "var(--ink, #0A0A0F)",
                      textDecoration: "none",
                      paddingBottom: 2,
                      borderBottom: isActive
                        ? "1px solid var(--ink, #0A0A0F)"
                        : "1px solid transparent",
                      transition: "border-color var(--dur-small, 250ms)",
                    }}
                  >
                    {link.label}
                  </a>
                </li>
              );
            })}
          </ul>
          {cta ? (
            <Button
              variant="secondary"
              size="sm"
              href={cta.href}
              iconRight={cta.external ? <span aria-hidden>↗</span> : undefined}
            >
              {cta.label}
            </Button>
          ) : null}
        </div>

        {/* Mobile hamburger trigger */}
        <button
          type="button"
          className="warm-nav-mobile"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          aria-controls="warm-nav-panel"
          onClick={() => setMenuOpen((v) => !v)}
          style={{
            alignItems: "center",
            justifyContent: "center",
            width: 40,
            height: 40,
            background: "transparent",
            border: "none",
            padding: 0,
            color: "var(--ink, #0A0A0F)",
            cursor: "pointer",
            transition: "opacity var(--dur-small, 250ms)",
          }}
        >
          <Hamburger open={menuOpen} />
        </button>

        {/* Mobile menu panel — only relevant on small screens; the CSS query
            ensures it's never visible on desktop. */}
        {menuOpen ? (
          <div
            id="warm-nav-panel"
            className="warm-nav-mobile"
            role="menu"
            style={{
              position: "absolute",
              top: "100%",
              left: 0,
              right: 0,
              flexDirection: "column",
              gap: 4,
              padding: "16px var(--content-padding) 28px",
              background: "rgba(244, 244, 240, 0.96)",
              backdropFilter: "blur(16px)",
              WebkitBackdropFilter: "blur(16px)",
              borderBottom: "1px solid var(--hair-strong, rgba(10, 10, 15, 0.32))",
              animation: "warm-nav-slide 280ms cubic-bezier(0.22, 1, 0.36, 1)",
            }}
          >
            <style>{`
              @keyframes warm-nav-slide {
                from { opacity: 0; transform: translateY(-8px); }
                to { opacity: 1; transform: translateY(0); }
              }
            `}</style>
            {links.map((link) => {
              const isActive = link.href === activeHref;
              return (
                <a
                  key={link.href}
                  href={link.href}
                  role="menuitem"
                  onClick={() => setMenuOpen(false)}
                  style={{
                    fontFamily: "var(--display, 'Plus Jakarta Sans', sans-serif)",
                    fontWeight: 500,
                    fontSize: 22,
                    letterSpacing: "-0.015em",
                    color: "var(--ink, #0A0A0F)",
                    textDecoration: "none",
                    padding: "14px 0",
                    borderBottom: "1px solid var(--hair-color, rgba(10, 10, 15, 0.12))",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <span
                    style={{
                      borderBottom: isActive
                        ? "1px solid var(--ink, #0A0A0F)"
                        : "none",
                      paddingBottom: 1,
                    }}
                  >
                    {link.label}
                  </span>
                  <span aria-hidden style={{ color: "var(--grey-2, rgba(10, 10, 15, 0.65))", fontSize: 18 }}>
                    →
                  </span>
                </a>
              );
            })}
            {cta ? (
              <div style={{ marginTop: 16, alignSelf: "flex-start" }}>
                <Button
                  variant="secondary"
                  size="md"
                  href={cta.href}
                  iconRight={cta.external ? <span aria-hidden>↗</span> : undefined}
                >
                  {cta.label}
                </Button>
              </div>
            ) : null}
          </div>
        ) : null}
      </nav>
    </>
  );
}
