"use client";

import type { LucideIcon } from "lucide-react";

type Section = {
  label: string;
  content: string;
};

type Props = {
  /** Optional Lucide icon. If absent, renders an initial avatar. */
  icon?: LucideIcon;
  name: string;
  sections: Section[];
};

export default function UserGroupCard({ icon: Icon, name, sections }: Props) {
  return (
    <div
      style={{
        background: "var(--warm-accent-tint, #FFDBC9)",
        borderRadius: "var(--warm-radius-md, 12px)",
        padding: "32px 24px",
        display: "flex",
        flexDirection: "column",
        gap: 20,
        border: "1px solid var(--warm-hair, rgba(42,15,8,0.12))",
      }}
    >
      <div
        style={{
          width: 96,
          height: 96,
          margin: "0 auto",
          borderRadius: "50%",
          background: "var(--warm-bg-card, #FFEFE0)",
          border: "1px solid var(--warm-border, rgba(42,15,8,0.2))",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "var(--warm-accent-strong, #B8331A)",
          fontFamily: "var(--warm-display, 'Plus Jakarta Sans', sans-serif)",
          fontSize: 32,
          fontWeight: 600,
          letterSpacing: "-0.02em",
        }}
      >
        {Icon ? <Icon size={36} strokeWidth={1.5} aria-hidden="true" /> : name.charAt(0)}
      </div>
      <h5
        style={{
          fontFamily: "var(--warm-display, 'Plus Jakarta Sans', sans-serif)",
          fontWeight: 600,
          fontSize: 20,
          letterSpacing: "-0.015em",
          color: "var(--warm-ink, #2A0F08)",
          textAlign: "center",
          margin: 0,
        }}
      >
        {name}
      </h5>
      {sections.map((section) => (
        <div key={section.label}>
          <p
            style={{
              fontFamily: "var(--warm-display, 'Plus Jakarta Sans', sans-serif)",
              fontSize: 11,
              fontWeight: 600,
              letterSpacing: "0.16em",
              textTransform: "uppercase",
              color: "var(--warm-accent-strong, #B8331A)",
              margin: 0,
              marginBottom: 6,
            }}
          >
            {section.label}
          </p>
          <p
            style={{
              fontFamily: "var(--warm-sans, 'Plus Jakarta Sans', sans-serif)",
              fontSize: 14,
              lineHeight: 1.55,
              color: "var(--warm-ink, #2A0F08)",
              margin: 0,
            }}
          >
            {section.content}
          </p>
        </div>
      ))}
    </div>
  );
}
