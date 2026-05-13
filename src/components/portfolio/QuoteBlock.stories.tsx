import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import QuoteBlock from "./QuoteBlock";

const meta: Meta<typeof QuoteBlock> = {
  title: "Case Study/QuoteBlock",
  component: QuoteBlock,
  parameters: { layout: "padded" },
};

export default meta;
type Story = StoryObj<typeof QuoteBlock>;

const wrap: React.CSSProperties = {
  padding: "64px var(--content-padding)",
  background: "#F4F4F0",
};

const SAMPLE = {
  quote:
    "The vendor portal redesign cut our onboarding time by more than half and gave our partners real visibility into the work they were doing for us.",
  attribution: "Marcus Hill",
  role: "VP Operations, Chekhub",
};

export const Default: Story = {
  render: () => (
    <div style={wrap}>
      <QuoteBlock quote={SAMPLE.quote} attribution={SAMPLE.attribution} role={SAMPLE.role} />
    </div>
  ),
};

export const Desktop: Story = {
  globals: { viewport: { value: "desktop", isRotated: false } },
  render: () => (
    <div style={wrap}>
      <QuoteBlock quote={SAMPLE.quote} attribution={SAMPLE.attribution} role={SAMPLE.role} />
    </div>
  ),
};

export const Tablet: Story = {
  globals: { viewport: { value: "tablet", isRotated: false } },
  render: () => (
    <div style={wrap}>
      <QuoteBlock quote={SAMPLE.quote} attribution={SAMPLE.attribution} role={SAMPLE.role} />
    </div>
  ),
};

export const Mobile: Story = {
  globals: { viewport: { value: "mobile", isRotated: false } },
  render: () => (
    <div style={{ ...wrap, padding: "48px var(--content-padding)" }}>
      <QuoteBlock quote={SAMPLE.quote} attribution={SAMPLE.attribution} role={SAMPLE.role} />
    </div>
  ),
};
