"use client";

type StatusVariant = "active" | "shipped" | "planned";

type Props = {
  statusLabel: string;
  statusVariant?: StatusVariant;
  today: string[];
  coming?: string[];
  futureNote?: string;
  todayLabel?: string;
  comingLabel?: string;
};

const variantColors: Record<
  StatusVariant,
  { bg: string; text: string; dot: string }
> = {
  active: {
    bg: "var(--warm-accent-tint, #FFDBC9)",
    text: "var(--warm-accent-strong, #B8331A)",
    dot: "var(--warm-accent-strong, #B8331A)",
  },
  shipped: {
    bg: "#E8E4D0",
    text: "#5A4A1C",
    dot: "#5A4A1C",
  },
  planned: {
    bg: "var(--warm-bg-sunken, #F0DBC4)",
    text: "var(--warm-ink-mute, rgba(42,15,8,0.65))",
    dot: "var(--warm-ink-mute, rgba(42,15,8,0.65))",
  },
};

export default function ImpactStatusBlock({
  statusLabel,
  statusVariant = "active",
  today,
  coming,
  futureNote,
  todayLabel = "Today",
  comingLabel = "Coming",
}: Props) {
  const colors = variantColors[statusVariant];

  return (
    <div
      style={{
        maxWidth: 1100,
        margin: "0 auto",
        display: "flex",
        flexDirection: "column",
        gap: 32,
      }}
    >
      <span
        style={{
          alignSelf: "flex-start",
          display: "inline-flex",
          alignItems: "center",
          gap: 8,
          padding: "6px 14px",
          borderRadius: "var(--warm-radius-pill, 999px)",
          background: colors.bg,
          color: colors.text,
          fontFamily: "var(--warm-display, 'Plus Jakarta Sans', sans-serif)",
          fontSize: 12,
          fontWeight: 600,
          letterSpacing: "0.12em",
          textTransform: "uppercase",
        }}
      >
        <span
          aria-hidden
          style={{
            width: 6,
            height: 6,
            borderRadius: "50%",
            background: colors.dot,
          }}
        />
        {statusLabel}
      </span>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: coming
            ? "repeat(auto-fit, minmax(min(280px, 100%), 1fr))"
            : "1fr",
          gap: 32,
        }}
      >
        <StatusColumn label={todayLabel} items={today} accent />
        {coming && <StatusColumn label={comingLabel} items={coming} />}
      </div>

      {futureNote && (
        <p
          style={{
            fontFamily: "var(--warm-sans, 'Plus Jakarta Sans', sans-serif)",
            fontStyle: "italic",
            fontWeight: 400,
            fontSize: 16,
            lineHeight: 1.55,
            color: "var(--warm-ink-mute, rgba(42,15,8,0.65))",
            margin: 0,
            paddingTop: 16,
            borderTop: "1px solid var(--warm-hair, rgba(42,15,8,0.12))",
          }}
        >
          {futureNote}
        </p>
      )}
    </div>
  );
}

function StatusColumn({
  label,
  items,
  accent = false,
}: {
  label: string;
  items: string[];
  accent?: boolean;
}) {
  const labelColor = accent
    ? "var(--warm-accent-strong, #B8331A)"
    : "var(--warm-ink-mute, rgba(42,15,8,0.65))";
  const dashColor = accent
    ? "var(--warm-accent-strong, #B8331A)"
    : "var(--warm-ink-faint, rgba(42,15,8,0.4))";

  return (
    <div>
      <p
        style={{
          fontFamily: "var(--warm-display, 'Plus Jakarta Sans', sans-serif)",
          fontSize: 12,
          fontWeight: 600,
          letterSpacing: "0.16em",
          textTransform: "uppercase",
          color: labelColor,
          margin: 0,
          marginBottom: 14,
        }}
      >
        {label}
      </p>
      <ul
        style={{
          listStyle: "none",
          padding: 0,
          margin: 0,
          display: "flex",
          flexDirection: "column",
          gap: 10,
        }}
      >
        {items.map((item, i) => (
          <li
            key={i}
            style={{
              fontFamily: "var(--warm-sans, 'Plus Jakarta Sans', sans-serif)",
              fontSize: 15,
              lineHeight: 1.55,
              color: "var(--warm-ink, #2A0F08)",
              paddingLeft: 18,
              position: "relative",
            }}
          >
            <span
              aria-hidden
              style={{
                position: "absolute",
                left: 0,
                top: "0.7em",
                width: 8,
                height: 1,
                background: dashColor,
              }}
            />
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
