import type { Meta, StoryObj } from "@storybook/nextjs-vite";

/**
 * Tokens — visual reference for the Warm Hero design system.
 *
 * Source of truth: src/styles/warm-system.css
 * Update both this file and the CSS when adding/changing tokens.
 */

const meta: Meta = {
  title: "Tokens",
  parameters: {
    layout: "padded",
  },
};

export default meta;
type Story = StoryObj;

/* ============================================================
 * SHARED STYLES
 * ============================================================ */

const FONT_DISPLAY = "'Plus Jakarta Sans', sans-serif";
const FONT_MONO = "'JetBrains Mono', monospace";
const INK = "#2A0F08";
const HAIR = "rgba(42, 15, 8, 0.12)";
const BG = "#FFE9D6";

const pageStyle: React.CSSProperties = {
  padding: "48px 56px",
  background: BG,
  color: INK,
  fontFamily: FONT_DISPLAY,
  minHeight: "100vh",
};

const sectionTitle: React.CSSProperties = {
  fontFamily: FONT_DISPLAY,
  fontWeight: 600,
  fontSize: 28,
  letterSpacing: "-0.02em",
  margin: "0 0 8px",
};

const sectionSubtitle: React.CSSProperties = {
  fontFamily: FONT_MONO,
  fontWeight: 500,
  fontSize: 11,
  letterSpacing: "0.12em",
  textTransform: "uppercase",
  color: "rgba(42, 15, 8, 0.6)",
  margin: "0 0 32px",
};

const groupTitle: React.CSSProperties = {
  fontFamily: FONT_DISPLAY,
  fontWeight: 600,
  fontSize: 14,
  letterSpacing: "0.08em",
  textTransform: "uppercase",
  margin: "48px 0 16px",
  paddingBottom: 12,
  borderBottom: `1px solid ${HAIR}`,
};

const tokenName: React.CSSProperties = {
  fontFamily: FONT_MONO,
  fontSize: 12,
  color: INK,
};

const tokenValue: React.CSSProperties = {
  fontFamily: FONT_MONO,
  fontSize: 11,
  color: "rgba(42, 15, 8, 0.6)",
};

/* ============================================================
 * PALETTE
 * ============================================================ */

type Swatch = { name: string; value: string; note?: string };

const PALETTE_GROUPS: { label: string; description: string; swatches: Swatch[] }[] = [
  {
    label: "Surface",
    description: "Backgrounds and layered surfaces — the cream system.",
    swatches: [
      { name: "--warm-bg", value: "#FFE9D6", note: "primary cream" },
      { name: "--warm-bg-bright", value: "#FFF1E0", note: "lighter wash" },
      { name: "--warm-bg-deep", value: "#F4DEC8", note: "darker wash" },
      { name: "--warm-bg-card", value: "#FFEFE0", note: "elevated card" },
      { name: "--warm-bg-sunken", value: "#F0DBC4", note: "recessed" },
    ],
  },
  {
    label: "Ink",
    description: "Text colors at different emphasis levels — all dark brown, not pure black.",
    swatches: [
      { name: "--warm-ink", value: "#2A0F08", note: "primary text" },
      { name: "--warm-ink-strong", value: "#1A0903", note: "highest contrast" },
      { name: "--warm-ink-soft", value: "#4A1F12", note: "secondary text" },
      { name: "--warm-ink-mute", value: "rgba(42,15,8,0.65)", note: "metadata" },
      { name: "--warm-ink-faint", value: "rgba(42,15,8,0.4)", note: "labels" },
      { name: "--warm-ink-ghost", value: "rgba(42,15,8,0.2)", note: "disabled" },
    ],
  },
  {
    label: "Accent — Coral",
    description: "Primary warm palette — the dominant color story.",
    swatches: [
      { name: "--warm-accent", value: "#FF6B3D", note: "primary coral" },
      { name: "--warm-accent-deep", value: "#E5754A", note: "warmer secondary" },
      { name: "--warm-accent-strong", value: "#B8331A", note: "rust — hover, CTAs" },
      { name: "--warm-accent-soft", value: "#FF9472", note: "lighter coral" },
      { name: "--warm-accent-tint", value: "#FFDBC9", note: "surface tint" },
    ],
  },
  {
    label: "Quiet",
    description: "Supporting accents — used sparingly for secondary visual elements.",
    swatches: [
      { name: "--warm-quiet", value: "#C7644A", note: "terracotta" },
      { name: "--warm-quiet-soft", value: "#E8825F", note: "rose" },
    ],
  },
  {
    label: "Hairlines & Borders",
    description: "Dividers and edges — all derived from --warm-ink with alpha.",
    swatches: [
      { name: "--warm-hair", value: "rgba(42,15,8,0.12)", note: "default dividers" },
      { name: "--warm-hair-strong", value: "rgba(42,15,8,0.32)", note: "eyebrow lines" },
      { name: "--warm-border", value: "rgba(42,15,8,0.2)", note: "card borders" },
      { name: "--warm-border-strong", value: "rgba(42,15,8,0.45)", note: "active borders" },
    ],
  },
];

function SwatchCard({ swatch }: { swatch: Swatch }) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: 8,
      }}
    >
      <div
        style={{
          background: swatch.value,
          height: 96,
          borderRadius: 12,
          border: `1px solid ${HAIR}`,
        }}
      />
      <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
        <span style={tokenName}>{swatch.name}</span>
        <span style={tokenValue}>{swatch.value}</span>
        {swatch.note ? (
          <span
            style={{
              fontFamily: FONT_DISPLAY,
              fontSize: 12,
              color: "rgba(42, 15, 8, 0.7)",
              marginTop: 2,
            }}
          >
            {swatch.note}
          </span>
        ) : null}
      </div>
    </div>
  );
}

export const Palette: Story = {
  render: () => (
    <div style={pageStyle}>
      <h1 style={sectionTitle}>Palette</h1>
      <p style={sectionSubtitle}>WARM HERO · COLOR SYSTEM</p>

      {PALETTE_GROUPS.map((group) => (
        <section key={group.label}>
          <h2 style={groupTitle}>{group.label}</h2>
          <p
            style={{
              fontSize: 14,
              color: "rgba(42, 15, 8, 0.7)",
              margin: "-8px 0 20px",
              maxWidth: 580,
              lineHeight: 1.55,
            }}
          >
            {group.description}
          </p>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(180px, 1fr))",
              gap: 20,
            }}
          >
            {group.swatches.map((s) => (
              <SwatchCard key={s.name} swatch={s} />
            ))}
          </div>
        </section>
      ))}
    </div>
  ),
};

/* ============================================================
 * TYPOGRAPHY
 * ============================================================ */

type TypeSpec = {
  name: string;
  cssVar: string;
  sample: string;
  // For preview render (since clamp doesn't render meaningfully outside layout context):
  previewSize: number;
  weight: number;
  tracking: string;
  leading: number;
  italic?: boolean;
  family?: "display" | "mono";
  notes?: string;
};

const TYPE_SPECS: TypeSpec[] = [
  {
    name: "Display",
    cssVar: "--warm-text-display · clamp(36, 6.5vw, 88)",
    sample: "Courtney McNair",
    previewSize: 88,
    weight: 500,
    tracking: "-0.025em",
    leading: 1,
    notes: "Hero wordmark. Use sparingly — only at very top of screens.",
  },
  {
    name: "H1",
    cssVar: "--warm-text-h1 · clamp(40, 5vw, 72)",
    sample: "Designing for high-stakes workflows",
    previewSize: 64,
    weight: 600,
    tracking: "-0.02em",
    leading: 1.05,
    notes: "Case study titles, major page headings.",
  },
  {
    name: "H2",
    cssVar: "--warm-text-h2 · clamp(28, 3.5vw, 48)",
    sample: "The challenge",
    previewSize: 40,
    weight: 600,
    tracking: "-0.02em",
    leading: 1.15,
    notes: "Section headings within case studies.",
  },
  {
    name: "H3",
    cssVar: "--warm-text-h3 · clamp(22, 2.4vw, 32)",
    sample: "How I worked through it",
    previewSize: 28,
    weight: 500,
    tracking: "-0.015em",
    leading: 1.25,
    notes: "Subsection headings, card titles.",
  },
  {
    name: "H4",
    cssVar: "--warm-text-h4 · clamp(18, 1.7vw, 22)",
    sample: "Anchored navigation",
    previewSize: 20,
    weight: 600,
    tracking: "-0.01em",
    leading: 1.35,
  },
  {
    name: "Lead",
    cssVar: "--warm-text-lead · clamp(19, 1.5vw, 22)",
    sample: "Plus Jakarta Sans at lead size carries the opening paragraph of a case study — warm, readable, distinctly humanist.",
    previewSize: 21,
    weight: 400,
    tracking: "-0.005em",
    leading: 1.5,
    notes: "Intro paragraphs after a hero or section title.",
  },
  {
    name: "Body",
    cssVar: "--warm-text-body · clamp(16, 1.1vw, 18)",
    sample: "Body text carries the bulk of case study reading. Set it at comfortable line-length (around 580px max) with relaxed leading so dense narrative still scans easily.",
    previewSize: 17,
    weight: 450,
    tracking: "0",
    leading: 1.65,
    notes: "Default paragraph text.",
  },
  {
    name: "Body Small",
    cssVar: "--warm-text-body-sm · 15px",
    sample: "Smaller body for sidebar notes, secondary descriptions, and dense reference content.",
    previewSize: 15,
    weight: 450,
    tracking: "0",
    leading: 1.6,
  },
  {
    name: "Caption",
    cssVar: "--warm-text-caption · 13px",
    sample: "Figure caption: a screenshot of the redesigned billing modal showing inline line-item editing.",
    previewSize: 13,
    weight: 500,
    tracking: "0",
    leading: 1.5,
    notes: "Figure captions, footnotes, source attributions.",
  },
  {
    name: "Label",
    cssVar: "--warm-text-label · 15px uppercase",
    sample: "PRODUCT DESIGNER",
    previewSize: 15,
    weight: 600,
    tracking: "0.12em",
    leading: 1.2,
    notes: "Eyebrows, section labels — uppercase + heavy tracking.",
  },
  {
    name: "Mono",
    cssVar: "--warm-text-mono · 14px",
    sample: "Vendor portal · design lead",
    previewSize: 14,
    weight: 500,
    tracking: "0",
    leading: 1.5,
    family: "mono",
    notes: "Metadata, dates, dense data labels.",
  },
];

function TypeRow({ spec }: { spec: TypeSpec }) {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "200px 1fr",
        gap: 32,
        padding: "32px 0",
        borderBottom: `1px solid ${HAIR}`,
        alignItems: "baseline",
      }}
    >
      <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
        <span style={{ ...tokenName, fontWeight: 600 }}>{spec.name}</span>
        <span style={tokenValue}>{spec.cssVar}</span>
        <span style={tokenValue}>
          {spec.weight} · {spec.tracking} · {spec.leading}
        </span>
        {spec.notes ? (
          <span
            style={{
              fontFamily: FONT_DISPLAY,
              fontSize: 12,
              color: "rgba(42, 15, 8, 0.6)",
              marginTop: 6,
              lineHeight: 1.45,
            }}
          >
            {spec.notes}
          </span>
        ) : null}
      </div>
      <div
        style={{
          fontFamily: spec.family === "mono" ? FONT_MONO : FONT_DISPLAY,
          fontSize: spec.previewSize,
          fontWeight: spec.weight,
          fontStyle: spec.italic ? "italic" : "normal",
          letterSpacing: spec.tracking,
          lineHeight: spec.leading,
          textTransform: spec.name === "Label" ? "uppercase" : "none",
          color: INK,
          maxWidth: 720,
        }}
      >
        {spec.sample}
      </div>
    </div>
  );
}

export const Typography: Story = {
  render: () => (
    <div style={pageStyle}>
      <h1 style={sectionTitle}>Typography</h1>
      <p style={sectionSubtitle}>WARM HERO · TYPE SCALE</p>
      <p
        style={{
          fontSize: 15,
          color: "rgba(42, 15, 8, 0.7)",
          margin: "0 0 24px",
          maxWidth: 640,
          lineHeight: 1.55,
        }}
      >
        Single-font system: Plus Jakarta Sans across display and body. JetBrains Mono kept for true
        monospace moments (metadata, dates, code). All display sizes scale responsively via clamp().
      </p>

      <div style={{ marginTop: 16 }}>
        {TYPE_SPECS.map((spec) => (
          <TypeRow key={spec.name} spec={spec} />
        ))}
      </div>
    </div>
  ),
};

/* ============================================================
 * SPACING
 * ============================================================ */

const SPACING: { name: string; cssVar: string; value: number }[] = [
  { name: "space-1", cssVar: "--warm-space-1", value: 4 },
  { name: "space-2", cssVar: "--warm-space-2", value: 8 },
  { name: "space-3", cssVar: "--warm-space-3", value: 12 },
  { name: "space-4", cssVar: "--warm-space-4", value: 16 },
  { name: "space-5", cssVar: "--warm-space-5", value: 20 },
  { name: "space-6", cssVar: "--warm-space-6", value: 24 },
  { name: "space-7", cssVar: "--warm-space-7", value: 32 },
  { name: "space-8", cssVar: "--warm-space-8", value: 40 },
  { name: "space-9", cssVar: "--warm-space-9", value: 48 },
  { name: "space-10", cssVar: "--warm-space-10", value: 64 },
  { name: "space-11", cssVar: "--warm-space-11", value: 80 },
  { name: "space-12", cssVar: "--warm-space-12", value: 96 },
  { name: "space-13", cssVar: "--warm-space-13", value: 128 },
  { name: "space-14", cssVar: "--warm-space-14", value: 160 },
  { name: "space-15", cssVar: "--warm-space-15", value: 200 },
];

export const Spacing: Story = {
  render: () => (
    <div style={pageStyle}>
      <h1 style={sectionTitle}>Spacing</h1>
      <p style={sectionSubtitle}>WARM HERO · 4PX BASE GRID</p>
      <p
        style={{
          fontSize: 15,
          color: "rgba(42, 15, 8, 0.7)",
          margin: "0 0 32px",
          maxWidth: 640,
          lineHeight: 1.55,
        }}
      >
        Spacing scale on a 4px base grid. Use semantic clusters: 1–3 for inline gaps, 4–6 for
        component padding, 7–9 for section gaps, 10+ for layout/page rhythm.
      </p>

      <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
        {SPACING.map((s) => (
          <div
            key={s.name}
            style={{
              display: "grid",
              gridTemplateColumns: "140px 80px 1fr",
              gap: 24,
              alignItems: "center",
            }}
          >
            <span style={{ ...tokenName, fontWeight: 600 }}>{s.cssVar}</span>
            <span style={tokenValue}>{s.value}px</span>
            <div
              style={{
                width: s.value,
                height: 24,
                background: "#FF6B3D",
                borderRadius: 4,
                opacity: 0.7,
              }}
            />
          </div>
        ))}
      </div>
    </div>
  ),
};

/* ============================================================
 * RADII
 * ============================================================ */

const RADII = [
  { name: "radius-sm", cssVar: "--warm-radius-sm", value: 4 },
  { name: "radius-md", cssVar: "--warm-radius-md", value: 12 },
  { name: "radius-lg", cssVar: "--warm-radius-lg", value: 24 },
  { name: "radius-xl", cssVar: "--warm-radius-xl", value: 40 },
  { name: "radius-pill", cssVar: "--warm-radius-pill", value: 999, label: "pill" },
];

export const Radii: Story = {
  render: () => (
    <div style={pageStyle}>
      <h1 style={sectionTitle}>Radii</h1>
      <p style={sectionSubtitle}>WARM HERO · BORDER RADIUS</p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(180px, 1fr))",
          gap: 24,
          marginTop: 24,
        }}
      >
        {RADII.map((r) => (
          <div key={r.name} style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            <div
              style={{
                background: "#FFDBC9",
                border: `1px solid ${HAIR}`,
                height: 120,
                borderRadius: r.value,
              }}
            />
            <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
              <span style={tokenName}>{r.cssVar}</span>
              <span style={tokenValue}>{r.label ?? `${r.value}px`}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  ),
};

/* ============================================================
 * SHADOWS
 * ============================================================ */

const SHADOWS = [
  { name: "shadow-sm", cssVar: "--warm-shadow-sm", value: "0 1px 2px rgba(42,15,8,0.06)" },
  { name: "shadow-md", cssVar: "--warm-shadow-md", value: "0 4px 14px rgba(42,15,8,0.08)" },
  { name: "shadow-lg", cssVar: "--warm-shadow-lg", value: "0 16px 48px rgba(42,15,8,0.12)" },
  { name: "shadow-xl", cssVar: "--warm-shadow-xl", value: "0 32px 80px rgba(42,15,8,0.16)" },
];

export const Shadows: Story = {
  render: () => (
    <div style={pageStyle}>
      <h1 style={sectionTitle}>Shadows</h1>
      <p style={sectionSubtitle}>WARM HERO · ELEVATION</p>
      <p
        style={{
          fontSize: 15,
          color: "rgba(42, 15, 8, 0.7)",
          margin: "0 0 32px",
          maxWidth: 640,
          lineHeight: 1.55,
        }}
      >
        Warm-tinted shadows — all built from --warm-ink with low alpha. No cold grays.
      </p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))",
          gap: 32,
          marginTop: 24,
        }}
      >
        {SHADOWS.map((s) => (
          <div key={s.name} style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            <div
              style={{
                background: "#FFEFE0",
                height: 140,
                borderRadius: 12,
                boxShadow: s.value,
              }}
            />
            <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
              <span style={tokenName}>{s.cssVar}</span>
              <span style={tokenValue}>{s.value}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  ),
};
