import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import JumpButton from "./JumpButton";

const meta: Meta<typeof JumpButton> = {
  title: "UI/Buttons/JumpButton",
  component: JumpButton,
  parameters: { layout: "padded" },
};

export default meta;
type Story = StoryObj<typeof JumpButton>;

const wrap: React.CSSProperties = {
  padding: "64px var(--content-padding)",
  background: "#F4F4F0",
};

export const Default: Story = {
  render: () => (
    <div style={wrap}>
      <JumpButton href="#final-design" />
    </div>
  ),
};

export const CustomLabel: Story = {
  render: () => (
    <div style={wrap}>
      <JumpButton href="#impact" label="Skip to impact" />
    </div>
  ),
};

export const Desktop: Story = {
  globals: { viewport: { value: "desktop", isRotated: false } },
  render: () => (
    <div style={wrap}>
      <JumpButton href="#final-design" />
    </div>
  ),
};

export const Tablet: Story = {
  globals: { viewport: { value: "tablet", isRotated: false } },
  render: () => (
    <div style={wrap}>
      <JumpButton href="#final-design" />
    </div>
  ),
};

export const Mobile: Story = {
  globals: { viewport: { value: "mobile", isRotated: false } },
  render: () => (
    <div style={wrap}>
      <JumpButton href="#final-design" />
    </div>
  ),
};
