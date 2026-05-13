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
        background: "var(--accent-tint, #E5E9FF)",
        borderRadius: "var(--r-md, 12px)",
        padding: "32px 24px",
        display: "flex",
        flexDirection: "column",
        gap: 20,
        border: "1px solid var(--hair-color, rgba(10, 10, 15, 0.12))",
      }}
    >
      <div
        style={{
          width: 96,
          height: 96,
          margin: "0 auto",
          borderRadius: "50%",
          background: "var(--paper-card, #FFFFFF)",
          border: "1px solid var(--border-color, rgba(10, 10, 15, 0.2))",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "var(--accent, #3250FF)",
          fontFamily: "var(--display, 'Plus Jakarta Sans', sans-serif)",
          fontSize: 32,
          fontWeight: 600,
          letterSpacing: "-0.02em",
        }}
      >
        {Icon ? <Icon size={36} strokeWidth={1.5} aria-hidden="true" /> : name.charAt(0)}
      </div>
      <h5
        style={{
          fontFamily: "var(--display, 'Plus Jakarta Sans', sans-serif)",
          fontWeight: 600,
          fontSize: 20,
          letterSpacing: "-0.015em",
          color: "var(--ink, #0A0A0F)",
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
              fontFamily: "var(--display, 'Plus Jakarta Sans', sans-serif)",
              fontSize: 11,
              fontWeight: 600,
              letterSpacing: "0.16em",
              textTransform: "uppercase",
              color: "var(--accent, #3250FF)",
              margin: 0,
              marginBottom: 6,
            }}
          >
            {section.label}
          </p>
          <p
            style={{
              fontFamily: "var(--sans, 'Plus Jakarta Sans', sans-serif)",
              fontSize: 14,
              lineHeight: 1.55,
              color: "var(--ink, #0A0A0F)",
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
