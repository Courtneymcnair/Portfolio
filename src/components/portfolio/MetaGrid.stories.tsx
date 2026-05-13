import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import MetaGrid from "./MetaGrid";

const meta: Meta<typeof MetaGrid> = {
  title: "Case Study/MetaGrid",
  component: MetaGrid,
  parameters: { layout: "padded" },
};

export default meta;
type Story = StoryObj<typeof MetaGrid>;

const ITEMS = [
  { label: "Role", value: "Lead product designer" },
  { label: "Team", value: "Solo design, 4 engineers" },
  { label: "Platform", value: "Web — desktop first" },
  { label: "Sector", value: "B2B SaaS operations" },
];

const wrap: React.CSSProperties = {
  padding: "64px var(--content-padding)",
  background: "#F4F4F0",
};

export const Default: Story = {
  render: () => (
    <div style={wrap}>
      <MetaGrid items={ITEMS} />
    </div>
  ),
};

export const Desktop: Story = {
  globals: { viewport: { value: "desktop", isRotated: false } },
  render: () => (
    <div style={wrap}>
      <MetaGrid items={ITEMS} />
    </div>
  ),
};

export const Tablet: Story = {
  globals: { viewport: { value: "tablet", isRotated: false } },
  render: () => (
    <div style={wrap}>
      <MetaGrid items={ITEMS} />
    </div>
  ),
};

export const Mobile: Story = {
  globals: { viewport: { value: "mobile", isRotated: false } },
  render: () => (
    <div style={{ ...wrap, padding: "48px var(--content-padding)" }}>
      <MetaGrid items={ITEMS} />
    </div>
  ),
};
