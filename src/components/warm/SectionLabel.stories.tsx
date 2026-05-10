import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import SectionLabel from "./SectionLabel";

const meta: Meta<typeof SectionLabel> = {
  title: "Warm/SectionLabel",
  component: SectionLabel,
  parameters: { layout: "padded" },
};

export default meta;
type Story = StoryObj<typeof SectionLabel>;

const wrap: React.CSSProperties = {
  padding: "64px 56px",
  background: "#FFE9D6",
  display: "flex",
  flexDirection: "column",
  gap: 48,
};

export const Variants: Story = {
  render: () => (
    <div style={wrap}>
      <SectionLabel>Selected work</SectionLabel>
      <SectionLabel align="center">Selected work</SectionLabel>
      <SectionLabel withLines>Product designer</SectionLabel>
    </div>
  ),
};

export const Desktop: Story = {
  globals: { viewport: { value: "desktop", isRotated: false } },
  render: () => (
    <div style={wrap}>
      <SectionLabel>The challenge</SectionLabel>
      <SectionLabel withLines>Product designer</SectionLabel>
    </div>
  ),
};

export const Tablet: Story = {
  globals: { viewport: { value: "tablet", isRotated: false } },
  render: () => (
    <div style={wrap}>
      <SectionLabel>The challenge</SectionLabel>
      <SectionLabel withLines>Product designer</SectionLabel>
    </div>
  ),
};

export const Mobile: Story = {
  globals: { viewport: { value: "mobile", isRotated: false } },
  render: () => (
    <div style={{ ...wrap, padding: "48px 24px" }}>
      <SectionLabel>The challenge</SectionLabel>
      <SectionLabel withLines>Product designer</SectionLabel>
    </div>
  ),
};
