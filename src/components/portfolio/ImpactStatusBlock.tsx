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
    bg: "var(--accent-tint, #E5E9FF)",
    text: "var(--accent, #3250FF)",
    dot: "var(--accent, #3250FF)",
  },
  shipped: {
    bg: "#E8E4D0",
    text: "#5A4A1C",
    dot: "#5A4A1C",
  },
  planned: {
    bg: "var(--grey-5, #ECECE6)",
    text: "var(--grey-2, rgba(10, 10, 15, 0.65))",
    dot: "var(--grey-2, rgba(10, 10, 15, 0.65))",
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
          borderRadius: "var(--r-pill, 999px)",
          background: colors.bg,
          color: colors.text,
          fontFamily: "var(--display, 'Plus Jakarta Sans', sans-serif)",
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
            fontFamily: "var(--sans, 'Plus Jakarta Sans', sans-serif)",
            fontWeight: 400,
            fontSize: 16,
            lineHeight: 1.55,
            color: "var(--grey-2, rgba(10, 10, 15, 0.65))",
            margin: 0,
            paddingTop: 16,
            borderTop: "1px solid var(--hair-color, rgba(10, 10, 15, 0.12))",
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
    ? "var(--accent, #3250FF)"
    : "var(--grey-2, rgba(10, 10, 15, 0.65))";
  const dashColor = accent
    ? "var(--accent, #3250FF)"
    : "var(--ink-faint, rgba(10, 10, 15, 0.4))";

  return (
    <div>
      <p
        style={{
          fontFamily: "var(--display, 'Plus Jakarta Sans', sans-serif)",
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
              fontFamily: "var(--sans, 'Plus Jakarta Sans', sans-serif)",
              fontSize: 15,
              lineHeight: 1.55,
              color: "var(--ink, #0A0A0F)",
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
