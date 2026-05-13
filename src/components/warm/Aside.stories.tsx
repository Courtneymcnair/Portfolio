import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import Aside from "./Aside";

const meta: Meta<typeof Aside> = {
  title: "Warm/Aside",
  component: Aside,
  parameters: { layout: "padded" },
};

export default meta;
type Story = StoryObj<typeof Aside>;

const wrap: React.CSSProperties = {
  padding: "64px var(--warm-content-padding)",
  background: "#FFE9D6",
};

const COPY =
  "Most enterprise tools optimize for the operator who configures them — not the vendor who lives inside them. Flipping that perspective changed which features made the cut.";

export const Default: Story = {
  render: () => (
    <div style={wrap}>
      <Aside>{COPY}</Aside>
    </div>
  ),
};

export const CustomLabel: Story = {
  render: () => (
    <div style={wrap}>
      <Aside label="The bet">
        We bet that vendors would tolerate a smaller surface area in exchange
        for fewer dead ends. The bet paid off in the first cohort.
      </Aside>
    </div>
  ),
};

export const Desktop: Story = {
  globals: { viewport: { value: "desktop", isRotated: false } },
  render: () => (
    <div style={wrap}>
      <Aside>{COPY}</Aside>
    </div>
  ),
};

export const Tablet: Story = {
  globals: { viewport: { value: "tablet", isRotated: false } },
  render: () => (
    <div style={wrap}>
      <Aside>{COPY}</Aside>
    </div>
  ),
};

export const Mobile: Story = {
  globals: { viewport: { value: "mobile", isRotated: false } },
  render: () => (
    <div style={{ ...wrap, padding: "32px var(--warm-content-padding)" }}>
      <Aside>{COPY}</Aside>
    </div>
  ),
};
