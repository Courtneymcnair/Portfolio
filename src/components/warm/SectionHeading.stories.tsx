import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import SectionHeading from "./SectionHeading";

const meta: Meta<typeof SectionHeading> = {
  title: "Warm/SectionHeading",
  component: SectionHeading,
  parameters: { layout: "padded" },
};

export default meta;
type Story = StoryObj<typeof SectionHeading>;

const wrap: React.CSSProperties = {
  padding: "64px 56px",
  background: "#FFE9D6",
  display: "flex",
  flexDirection: "column",
  gap: 64,
};

export const Variants: Story = {
  render: () => (
    <div style={wrap}>
      <SectionHeading>The challenge</SectionHeading>
      <SectionHeading label="Approach">Three layered problems</SectionHeading>
      <SectionHeading
        label="Selected work"
        description="A focused selection of recent product design work — case studies on the systems and infrastructure behind operational SaaS."
      >
        Designing for high-stakes workflows
      </SectionHeading>
      <SectionHeading align="center" label="Reflection">
        What I learned shipping the vendor portal
      </SectionHeading>
    </div>
  ),
};

export const Desktop: Story = {
  globals: { viewport: { value: "desktop", isRotated: false } },
  render: () => (
    <div style={wrap}>
      <SectionHeading
        label="Approach"
        description="Three layered problems shaped the entire design system — each had to be solved in service of the others."
      >
        Three layered problems
      </SectionHeading>
    </div>
  ),
};

export const Tablet: Story = {
  globals: { viewport: { value: "tablet", isRotated: false } },
  render: () => (
    <div style={wrap}>
      <SectionHeading label="Approach" description="Three layered problems shaped the design system.">
        Three layered problems
      </SectionHeading>
    </div>
  ),
};

export const Mobile: Story = {
  globals: { viewport: { value: "mobile", isRotated: false } },
  render: () => (
    <div style={{ ...wrap, padding: "48px 24px" }}>
      <SectionHeading label="Approach" description="Three layered problems shaped the design system.">
        Three layered problems
      </SectionHeading>
    </div>
  ),
};
