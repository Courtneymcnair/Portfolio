import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import TwoColumn from "./TwoColumn";
import Figure from "./Figure";

const meta: Meta<typeof TwoColumn> = {
  title: "Warm/TwoColumn",
  component: TwoColumn,
  parameters: { layout: "padded" },
};

export default meta;
type Story = StoryObj<typeof TwoColumn>;

const wrap: React.CSSProperties = {
  padding: "64px var(--warm-content-padding)",
  background: "#FFE9D6",
};

const TEXT = (
  <div
    style={{
      fontFamily: "var(--warm-sans, 'Plus Jakarta Sans', sans-serif)",
      color: "var(--warm-ink, #2A0F08)",
    }}
  >
    <h3
      style={{
        fontFamily: "var(--warm-display, 'Plus Jakarta Sans', sans-serif)",
        fontWeight: 500,
        fontSize: "clamp(24px, 3vw, 32px)",
        lineHeight: 1.2,
        letterSpacing: "-0.015em",
        margin: 0,
        marginBottom: 16,
      }}
    >
      The shape of the work
    </h3>
    <p style={{ margin: 0, lineHeight: 1.65, fontSize: 16 }}>
      The vendor portal isn&apos;t a CRUD app. It&apos;s a coordination surface
      between two organizations that don&apos;t share tools. Every screen had to
      assume the person on the other side was waiting.
    </p>
  </div>
);

const VISUAL = (
  <Figure
    src="/images/thumbnails/chekhub.png"
    alt="Vendor portal screenshot"
    width="full"
  />
);

export const Equal: Story = {
  render: () => (
    <div style={wrap}>
      <TwoColumn text={TEXT} visual={VISUAL} />
    </div>
  ),
};

export const TextHeavy: Story = {
  render: () => (
    <div style={wrap}>
      <TwoColumn text={TEXT} visual={VISUAL} ratio="text-heavy" />
    </div>
  ),
};

export const VisualHeavy: Story = {
  render: () => (
    <div style={wrap}>
      <TwoColumn text={TEXT} visual={VISUAL} ratio="visual-heavy" />
    </div>
  ),
};

export const Reversed: Story = {
  render: () => (
    <div style={wrap}>
      <TwoColumn text={TEXT} visual={VISUAL} reverse />
    </div>
  ),
};

export const Desktop: Story = {
  globals: { viewport: { value: "desktop", isRotated: false } },
  render: () => (
    <div style={wrap}>
      <TwoColumn text={TEXT} visual={VISUAL} />
    </div>
  ),
};

export const Tablet: Story = {
  globals: { viewport: { value: "tablet", isRotated: false } },
  render: () => (
    <div style={wrap}>
      <TwoColumn text={TEXT} visual={VISUAL} />
    </div>
  ),
};

export const Mobile: Story = {
  globals: { viewport: { value: "mobile", isRotated: false } },
  render: () => (
    <div style={{ ...wrap, padding: "32px var(--warm-content-padding)" }}>
      <TwoColumn text={TEXT} visual={VISUAL} />
    </div>
  ),
};
