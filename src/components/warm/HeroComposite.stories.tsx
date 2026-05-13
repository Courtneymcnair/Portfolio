import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import HeroComposite from "./HeroComposite";

const meta: Meta<typeof HeroComposite> = {
  title: "Warm/HeroComposite",
  component: HeroComposite,
  parameters: { layout: "padded" },
};

export default meta;
type Story = StoryObj<typeof HeroComposite>;

const wrap: React.CSSProperties = {
  padding: "64px var(--warm-content-padding)",
  background: "#FFE9D6",
};

const LEFT = {
  src: "/images/thumbnails/chekhub.png",
  alt: "Internal ops dashboard",
  label: "Ops",
};

const RIGHT = {
  src: "/images/thumbnails/chekhub.png",
  alt: "Vendor portal view",
  label: "Vendor",
};

export const Default: Story = {
  render: () => (
    <div style={wrap}>
      <HeroComposite left={LEFT} right={RIGHT} />
    </div>
  ),
};

export const NoTicketLoop: Story = {
  render: () => (
    <div style={wrap}>
      <HeroComposite left={LEFT} right={RIGHT} showTicketLoop={false} />
    </div>
  ),
};

export const Desktop: Story = {
  globals: { viewport: { value: "desktop", isRotated: false } },
  render: () => (
    <div style={wrap}>
      <HeroComposite left={LEFT} right={RIGHT} />
    </div>
  ),
};

export const Tablet: Story = {
  globals: { viewport: { value: "tablet", isRotated: false } },
  render: () => (
    <div style={wrap}>
      <HeroComposite left={LEFT} right={RIGHT} />
    </div>
  ),
};

export const Mobile: Story = {
  globals: { viewport: { value: "mobile", isRotated: false } },
  render: () => (
    <div style={wrap}>
      <HeroComposite left={LEFT} right={RIGHT} />
    </div>
  ),
};
