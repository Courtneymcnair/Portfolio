import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import TLDR from "./TLDR";

const meta: Meta<typeof TLDR> = {
  title: "Warm/TLDR",
  component: TLDR,
  parameters: { layout: "padded" },
};

export default meta;
type Story = StoryObj<typeof TLDR>;

const wrap: React.CSSProperties = {
  padding: "64px var(--warm-content-padding)",
  background: "#FFE9D6",
};

const BODY =
  "Designed and shipped a vendor management portal in 90 days, replacing six fragmented systems and reducing average vendor onboarding time from 11 days to 2.";

export const Default: Story = {
  render: () => (
    <div style={wrap}>
      <TLDR>{BODY}</TLDR>
    </div>
  ),
};

export const CustomLabel: Story = {
  render: () => (
    <div style={wrap}>
      <TLDR label="In short">{BODY}</TLDR>
    </div>
  ),
};

export const Desktop: Story = {
  globals: { viewport: { value: "desktop", isRotated: false } },
  render: () => (
    <div style={wrap}>
      <TLDR>{BODY}</TLDR>
    </div>
  ),
};

export const Tablet: Story = {
  globals: { viewport: { value: "tablet", isRotated: false } },
  render: () => (
    <div style={wrap}>
      <TLDR>{BODY}</TLDR>
    </div>
  ),
};

export const Mobile: Story = {
  globals: { viewport: { value: "mobile", isRotated: false } },
  render: () => (
    <div style={{ ...wrap, padding: "32px var(--warm-content-padding)" }}>
      <TLDR>{BODY}</TLDR>
    </div>
  ),
};
