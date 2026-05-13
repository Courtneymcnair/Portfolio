import type { Meta, StoryObj } from "@storybook/nextjs-vite";

/**
 * Tokens — visual reference for the Blue Hero design system.
 *
 * Source of truth: src/app/globals.css (`:root` block at the top)
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

const FONT_DISPLAY = "'Source Serif 4', Georgia, 'Times New Roman', serif";
const FONT_SANS = "'Geist', system-ui, sans-serif";
const FONT_MONO = "'JetBrains Mono', ui-monospace, monospace";
const INK = "#0A0A0F";
const HAIR = "rgba(10, 10, 15, 0.08)";
const BG = "#F4F4F0";

const pageStyle: React.CSSProperties = {
  padding: "48px 56px",
  background: BG,
  color: INK,
  fontFamily: FONT_SANS,
  minHeight: "100vh",
};

const sectionTitle: React.CSSProperties = {
  fontFamily: FONT_DISPLAY,
  fontWeight: 600,
  fontSize: 28,
  letterSpacing: "-0.01em",
  margin: "0 0 8px",
};

const sectionSubtitle: React.CSSProperties = {
  fontFamily: FONT_MONO,
  fontWeight: 500,
  fontSize: 11,
  letterSpacing: "0.12em",
  textTransform: "uppercase",
  color: "rgba(10, 10, 15, 0.6)",
  margin: "0 0 32px",
};

const groupTitle: React.CSSProperties = {
  fontFamily: FONT_SANS,
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
  color: "rgba(10, 10, 15, 0.6)",
};

/* ============================================================
 * PALETTE
 * ============================================================ */

type Swatch = { name: string; value: string; note?: string; onDark?: boolean };

const PALETTE_GROUPS: { label: string; description: string; swatches: Swatch[] }[] = [
  {
    label: "Surface",
    description: "Backgrounds and layered surfaces — the paper system.",
    swatches: [
      { name: "--paper", value: "#F4F4F0", note: "primary paper" },
      { name: "--paper-warm", value: "#EFEEE6", note: "warmer variant" },
      { name: "--paper-card", value: "#FFFFFF", note: "elevated card" },
    ],
  },
  {
    label: "Ink",
    description: "Primary text — near-black with a slight warm cast, not pure #000.",
    swatches: [
      { name: "--ink", value: "#0A0A0F", note: "primary text" },
    ],
  },
  {
    label: "Accent — Blue",
    description: "Brand color story — CTAs, links, highlights.",
    swatches: [
      { name: "--accent", value: "#3250FF", note: "primary brand blue" },
      { name: "--accent-soft", value: "#4F6BFF", note: "hover state" },
      { name: "--accent-tint", value: "#E5E9FF", note: "surface tint" },
      { name: "--accent-tint-2", value: "#EEF1FF", note: "lighter wash" },
      { name: "--accent-tint-3", value: "#F5F7FF", note: "faintest wash" },
    ],
  },
  {
    label: "Greys",
    description: "Neutral scale — used for secondary text, borders, and quiet surfaces.",
    swatches: [
      { name: "--grey-1", value: "#1A1A22", note: "darkest" },
      { name: "--grey-2", value: "#6B6B78", note: "muted text" },
      { name: "--grey-3", value: "#B5B5B0", note: "subtle text" },
      { name: "--grey-4", value: "#DDDDD6", note: "soft borders" },
      { name: "--grey-5", value: "#ECECE6", note: "lightest" },
    ],
  },
  {
    label: "Hairlines",
    description: "Dividers and edges — derived from --ink with alpha, or accent-tinted.",
    swatches: [
      { name: "--hair", value: "rgba(10,10,15,0.08)", note: "default dividers" },
      { name: "--hair-2", value: "rgba(10,10,15,0.12)", note: "stronger dividers" },
      { name: "--hair-blue", value: "rgba(50,80,255,0.18)", note: "accent dividers" },
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
              fontFamily: FONT_SANS,
              fontSize: 12,
              color: "rgba(10, 10, 15, 0.7)",
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
      <p style={sectionSubtitle}>BLUE HERO · COLOR SYSTEM</p>

      {PALETTE_GROUPS.map((group) => (
        <section key={group.label}>
          <h2 style={groupTitle}>{group.label}</h2>
          <p
            style={{
              fontSize: 14,
              color: "rgba(10, 10, 15, 0.7)",
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
  previewSize: number;
  weight: number;
  tracking: string;
  leading: number;
  italic?: boolean;
  family?: "display" | "sans" | "mono";
  notes?: string;
};

const TYPE_SPECS: TypeSpec[] = [
  {
    name: "Hero (Courtney)",
    cssVar: "Source Serif 4 · clamp(56, 12vw, 184)",
    sample: "Courtney",
    previewSize: 120,
    weight: 600,
    tracking: "-0.015em",
    leading: 1,
    family: "display",
    notes: "Hero wordmark. Roman style — anchors the page.",
  },
  {
    name: "Hero (McNair)",
    cssVar: "Source Serif 4 italic · clamp(56, 12vw, 184)",
    sample: "McNair",
    previewSize: 120,
    weight: 500,
    tracking: "-0.01em",
    leading: 1,
    italic: true,
    family: "display",
    notes: "Italic carries presence — slab-serif italic > sans italic at hero scale.",
  },
  {
    name: "CaseStudyHero H1",
    cssVar: "Source Serif 4 · clamp(40, 5vw, 80)",
    sample: "Designing for high-stakes workflows",
    previewSize: 64,
    weight: 600,
    tracking: "-0.01em",
    leading: 1.05,
    family: "display",
    notes: "Case study titles, major page headings.",
  },
  {
    name: "SelectWorks H2",
    cssVar: "Source Serif 4 · clamp(48, 7vw, 96)",
    sample: "Selected work",
    previewSize: 72,
    weight: 600,
    tracking: "-0.015em",
    leading: 1.05,
    family: "display",
    notes: "Landing section heading.",
  },
  {
    name: "H3 / Section",
    cssVar: "Source Serif 4 · ~32px",
    sample: "The challenge",
    previewSize: 32,
    weight: 500,
    tracking: "-0.01em",
    leading: 1.2,
    family: "display",
    notes: "SectionHeading, CaseStudyLayout h2, NumberedStep titles.",
  },
  {
    name: "Quote / Hook",
    cssVar: "Source Serif 4 italic · 24–32px",
    sample: "The honest answer was: we hadn't designed for that yet.",
    previewSize: 26,
    weight: 500,
    tracking: "-0.015em",
    leading: 1.35,
    italic: true,
    family: "display",
    notes: "QuoteBlock, HookCallout — italic display, not Geist italic.",
  },
  {
    name: "Body",
    cssVar: "Geist · 16–18px",
    sample: "Body text carries the bulk of case study reading. Set it at comfortable line-length (around 580px max) with relaxed leading so dense narrative still scans easily.",
    previewSize: 17,
    weight: 400,
    tracking: "0",
    leading: 1.65,
    family: "sans",
    notes: "Default paragraph text.",
  },
  {
    name: "Body Small",
    cssVar: "Geist · 14–15px",
    sample: "Smaller body for sidebar notes, secondary descriptions, and dense reference content.",
    previewSize: 15,
    weight: 400,
    tracking: "0",
    leading: 1.6,
    family: "sans",
  },
  {
    name: "Caption",
    cssVar: "Geist · 13px",
    sample: "Figure caption: a screenshot of the redesigned billing modal showing inline line-item editing.",
    previewSize: 13,
    weight: 500,
    tracking: "0",
    leading: 1.5,
    family: "sans",
    notes: "Figure captions, footnotes, source attributions.",
  },
  {
    name: "Label / Eyebrow",
    cssVar: "JetBrains Mono · 11–13px uppercase",
    sample: "PRODUCT DESIGNER",
    previewSize: 12,
    weight: 500,
    tracking: "0.16em",
    leading: 1.2,
    family: "mono",
    notes: "SectionLabel — uppercase mono, heavy tracking.",
  },
  {
    name: "Mono / Data",
    cssVar: "JetBrains Mono · 14px",
    sample: "vendor-portal · case 01",
    previewSize: 14,
    weight: 500,
    tracking: "0",
    leading: 1.5,
    family: "mono",
    notes: "Case numbers, dates, dense data labels.",
  },
];

function TypeRow({ spec }: { spec: TypeSpec }) {
  const fontFamily =
    spec.family === "mono" ? FONT_MONO : spec.family === "sans" ? FONT_SANS : FONT_DISPLAY;
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
              fontFamily: FONT_SANS,
              fontSize: 12,
              color: "rgba(10, 10, 15, 0.6)",
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
          fontFamily,
          fontSize: spec.previewSize,
          fontWeight: spec.weight,
          fontStyle: spec.italic ? "italic" : "normal",
          letterSpacing: spec.tracking,
          lineHeight: spec.leading,
          textTransform: spec.name.startsWith("Label") ? "uppercase" : "none",
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
      <p style={sectionSubtitle}>BLUE HERO · TYPE SCALE</p>
      <p
        style={{
          fontSize: 15,
          color: "rgba(10, 10, 15, 0.7)",
          margin: "0 0 24px",
          maxWidth: 640,
          lineHeight: 1.55,
        }}
      >
        Three-family system: Source Serif 4 (display/headings) for editorial voice, Geist (sans)
        for body/UI, and JetBrains Mono for labels and data. Display sizes scale responsively via
        clamp().
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
 * RADII
 * ============================================================ */

const RADII = [
  { name: "r-xs", cssVar: "--r-xs", value: 6 },
  { name: "r-sm", cssVar: "--r-sm", value: 10 },
  { name: "r-md", cssVar: "--r-md", value: 16, note: "card default" },
  { name: "r-lg", cssVar: "--r-lg", value: 22 },
  { name: "r-pill", cssVar: "--r-pill", value: 999, label: "pill", note: "all buttons" },
];

export const Radii: Story = {
  render: () => (
    <div style={pageStyle}>
      <h1 style={sectionTitle}>Radii</h1>
      <p style={sectionSubtitle}>BLUE HERO · BORDER RADIUS</p>

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
                background: "#E5E9FF",
                border: `1px solid ${HAIR}`,
                height: 120,
                borderRadius: r.value,
              }}
            />
            <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
              <span style={tokenName}>{r.cssVar}</span>
              <span style={tokenValue}>{r.label ?? `${r.value}px`}</span>
              {r.note ? (
                <span
                  style={{
                    fontFamily: FONT_SANS,
                    fontSize: 12,
                    color: "rgba(10, 10, 15, 0.7)",
                    marginTop: 2,
                  }}
                >
                  {r.note}
                </span>
              ) : null}
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
  {
    name: "shadow-1",
    cssVar: "--shadow-1",
    value: "0 1px 2px rgba(20,30,80,0.04), 0 2px 6px rgba(20,30,80,0.04)",
    note: "subtle lift — cards at rest",
  },
  {
    name: "shadow-2",
    cssVar: "--shadow-2",
    value: "0 1px 2px rgba(20,30,80,0.04), 0 4px 14px rgba(20,30,80,0.06)",
    note: "hover state for cards",
  },
  {
    name: "shadow-3",
    cssVar: "--shadow-3",
    value: "0 2px 4px rgba(20,30,80,0.05), 0 14px 36px rgba(20,30,80,0.08)",
    note: "modals, raised surfaces",
  },
  {
    name: "shadow-4",
    cssVar: "--shadow-4",
    value: "0 4px 10px rgba(20,30,80,0.06), 0 30px 70px rgba(50,80,255,0.12)",
    note: "hero composites — blue-tinted",
  },
];

export const Shadows: Story = {
  render: () => (
    <div style={pageStyle}>
      <h1 style={sectionTitle}>Shadows</h1>
      <p style={sectionSubtitle}>BLUE HERO · ELEVATION</p>
      <p
        style={{
          fontSize: 15,
          color: "rgba(10, 10, 15, 0.7)",
          margin: "0 0 32px",
          maxWidth: 640,
          lineHeight: 1.55,
        }}
      >
        Blue-tinted shadows — built from a desaturated navy (rgba(20,30,80, …)) so they read warmer
        than a flat black drop, with the deepest tier picking up brand-blue at the bottom edge.
      </p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))",
          gap: 32,
          marginTop: 24,
        }}
      >
        {SHADOWS.map((s) => (
          <div key={s.name} style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            <div
              style={{
                background: "#FFFFFF",
                height: 140,
                borderRadius: 12,
                boxShadow: s.value,
              }}
            />
            <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
              <span style={tokenName}>{s.cssVar}</span>
              <span style={tokenValue}>{s.value}</span>
              {s.note ? (
                <span
                  style={{
                    fontFamily: FONT_SANS,
                    fontSize: 12,
                    color: "rgba(10, 10, 15, 0.7)",
                    marginTop: 2,
                  }}
                >
                  {s.note}
                </span>
              ) : null}
            </div>
          </div>
        ))}
      </div>
    </div>
  ),
};

/* ============================================================
 * MOTION
 * ============================================================ */

const MOTION_TOKENS = [
  { name: "--ease-out", value: "cubic-bezier(0.22, 1, 0.36, 1)", note: "default easing — soft deceleration" },
  { name: "--dur-small", value: "700ms", note: "labels, eyebrows, small UI" },
  { name: "--dur-reveal", value: "900ms", note: "default scroll reveals" },
  { name: "--dur-hero", value: "1300ms", note: "hero / large elements" },
  { name: "--stagger-gap", value: "120ms", note: "per-item delay in cascades" },
  { name: "--y-offset", value: "20px", note: "default vertical reveal distance (max 32px)" },
];

export const Motion: Story = {
  render: () => (
    <div style={pageStyle}>
      <h1 style={sectionTitle}>Motion</h1>
      <p style={sectionSubtitle}>BLUE HERO · ANIMATION TOKENS</p>
      <p
        style={{
          fontSize: 15,
          color: "rgba(10, 10, 15, 0.7)",
          margin: "0 0 32px",
          maxWidth: 640,
          lineHeight: 1.55,
        }}
      >
        Soft deceleration, vertical-only, unhurried. All values defined in <code>:root</code> and
        applied through <code>.reveal</code> / <code>.stagger</code> CSS classes plus the{" "}
        <code>useInView</code> hook. <code>prefers-reduced-motion</code> is mandatory.
      </p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "240px 200px 1fr",
          gap: 24,
          alignItems: "baseline",
          paddingBottom: 12,
          borderBottom: `1px solid ${HAIR}`,
        }}
      >
        <span style={{ ...tokenName, fontWeight: 600 }}>Token</span>
        <span style={{ ...tokenName, fontWeight: 600 }}>Value</span>
        <span style={{ ...tokenName, fontWeight: 600 }}>Purpose</span>
      </div>

      <div style={{ display: "flex", flexDirection: "column" }}>
        {MOTION_TOKENS.map((m) => (
          <div
            key={m.name}
            style={{
              display: "grid",
              gridTemplateColumns: "240px 200px 1fr",
              gap: 24,
              padding: "16px 0",
              borderBottom: `1px solid ${HAIR}`,
              alignItems: "baseline",
            }}
          >
            <span style={tokenName}>{m.name}</span>
            <span style={tokenValue}>{m.value}</span>
            <span
              style={{
                fontFamily: FONT_SANS,
                fontSize: 13,
                color: "rgba(10, 10, 15, 0.7)",
                lineHeight: 1.5,
              }}
            >
              {m.note}
            </span>
          </div>
        ))}
      </div>
    </div>
  ),
};
