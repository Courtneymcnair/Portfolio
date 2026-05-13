import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import Figure from "./Figure";

const meta: Meta<typeof Figure> = {
  title: "Case Study/Figure",
  component: Figure,
  parameters: { layout: "padded" },
};

export default meta;
type Story = StoryObj<typeof Figure>;

const wrap: React.CSSProperties = {
  padding: "64px var(--content-padding)",
  background: "#F4F4F0",
};
const SRC = "/images/thumbnails/chekhub.png";

export const Content: Story = {
  render: () => (
    <div style={wrap}>
      <Figure src={SRC} alt="Vendor portal dashboard" caption="Vendor portal — onboarding overview" />
    </div>
  ),
};

export const Wide: Story = {
  render: () => (
    <div style={wrap}>
      <Figure src={SRC} alt="Vendor portal dashboard" width="wide" caption="A wider crop for hero-level moments" />
    </div>
  ),
};

export const Half: Story = {
  render: () => (
    <div style={wrap}>
      <Figure src={SRC} alt="Vendor portal detail" width="half" caption="Pairs nicely beside text or another half figure" />
    </div>
  ),
};

export const NoCaption: Story = {
  render: () => (
    <div style={wrap}>
      <Figure src={SRC} alt="Vendor portal dashboard" />
    </div>
  ),
};

export const Desktop: Story = {
  globals: { viewport: { value: "desktop", isRotated: false } },
  render: () => (
    <div style={wrap}>
      <Figure src={SRC} alt="Vendor portal dashboard" caption="Vendor portal — onboarding overview" />
    </div>
  ),
};

export const Tablet: Story = {
  globals: { viewport: { value: "tablet", isRotated: false } },
  render: () => (
    <div style={wrap}>
      <Figure src={SRC} alt="Vendor portal dashboard" caption="Vendor portal — onboarding overview" />
    </div>
  ),
};

export const Mobile: Story = {
  globals: { viewport: { value: "mobile", isRotated: false } },
  render: () => (
    <div style={{ ...wrap, padding: "32px var(--content-padding)" }}>
      <Figure src={SRC} alt="Vendor portal dashboard" caption="Vendor portal — onboarding overview" />
    </div>
  ),
};
