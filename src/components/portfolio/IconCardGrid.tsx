"use client";

import type { LucideIcon } from "lucide-react";

export type IconCardItem = {
  icon: LucideIcon;
  title: string;
  body: string;
};

type Props = {
  items: IconCardItem[];
  columns?: 2 | 3;
};

export default function IconCardGrid({ items, columns = 2 }: Props) {
  const isOdd = items.length % columns !== 0;

  return (
    <div
      className="warm-icon-card-grid"
      style={
        {
          display: "grid",
          gridTemplateColumns: `repeat(${columns}, minmax(0, 1fr))`,
          gap: 20,
          maxWidth: 1100,
          margin: "0 auto",
          "--cols": columns,
        } as React.CSSProperties
      }
    >
      {items.map((item, i) => {
        const Icon = item.icon;
        const isLastOdd = isOdd && i === items.length - 1;
        return (
          <div
            key={i}
            className="warm-icon-card"
            style={{
              gridColumn: isLastOdd ? `span ${columns}` : undefined,
              background: "var(--paper-card, #FFFFFF)",
              border: "1px solid var(--border-color, rgba(42,15,8,0.2))",
              borderRadius: "var(--warm-radius-md, 12px)",
              padding: "clamp(20px, 2.4vw, 28px)",
              boxShadow: "var(--shadow-1, 0 1px 2px rgba(42,15,8,0.06))",
              display: "flex",
              gap: 16,
              alignItems: "flex-start",
              transition:
                "box-shadow 200ms ease, border-color 200ms ease, transform 200ms ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.boxShadow =
                "var(--shadow-2, 0 4px 14px rgba(42,15,8,0.08))";
              e.currentTarget.style.borderColor =
                "var(--border-strong, rgba(42,15,8,0.45))";
              e.currentTarget.style.transform = "translateY(-2px)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.boxShadow =
                "var(--shadow-1, 0 1px 2px rgba(42,15,8,0.06))";
              e.currentTarget.style.borderColor =
                "var(--border-color, rgba(42,15,8,0.2))";
              e.currentTarget.style.transform = "";
            }}
          >
            <div
              style={{
                flexShrink: 0,
                width: 44,
                height: 44,
                borderRadius: "var(--warm-radius-sm, 4px)",
                background: "var(--accent-tint, #E5E9FF)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "var(--accent, #3250FF)",
              }}
            >
              <Icon size={22} strokeWidth={1.5} aria-hidden="true" />
            </div>
            <div style={{ minWidth: 0 }}>
              <h4
                style={{
                  fontFamily:
                    "var(--display, 'Plus Jakarta Sans', sans-serif)",
                  fontWeight: 600,
                  fontSize: 18,
                  lineHeight: 1.3,
                  letterSpacing: "-0.01em",
                  color: "var(--ink, #0A0A0F)",
                  margin: 0,
                  marginBottom: 6,
                }}
              >
                {item.title}
              </h4>
              <p
                style={{
                  fontFamily:
                    "var(--sans, 'Plus Jakarta Sans', sans-serif)",
                  fontSize: 14.5,
                  lineHeight: 1.55,
                  color: "var(--grey-1, #1A1A22)",
                  margin: 0,
                }}
              >
                {item.body}
              </p>
            </div>
          </div>
        );
      })}
      <style>{`
        @media (max-width: 720px) {
          .warm-icon-card-grid {
            grid-template-columns: 1fr !important;
          }
          .warm-icon-card {
            grid-column: auto !important;
          }
        }
      `}</style>
    </div>
  );
}
