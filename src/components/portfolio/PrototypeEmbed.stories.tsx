import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import PrototypeEmbed from "./PrototypeEmbed";

const meta: Meta<typeof PrototypeEmbed> = {
  title: "Case Study/PrototypeEmbed",
  component: PrototypeEmbed,
  parameters: { layout: "padded" },
};

export default meta;
type Story = StoryObj<typeof PrototypeEmbed>;

const wrap: React.CSSProperties = {
  padding: "64px var(--content-padding)",
  background: "#F4F4F0",
};

const SRC = "https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2Fexample";

export const Default: Story = {
  render: () => (
    <div style={wrap}>
      <PrototypeEmbed
        src={SRC}
        title="Vendor portal flow"
        caption="Click to load interactive prototype"
        externalHref="https://www.figma.com/"
      />
    </div>
  ),
};

export const NoExternalLink: Story = {
  render: () => (
    <div style={wrap}>
      <PrototypeEmbed src={SRC} title="Vendor portal flow" caption="Click to load" />
    </div>
  ),
};

export const Desktop: Story = {
  globals: { viewport: { value: "desktop", isRotated: false } },
  render: () => (
    <div style={wrap}>
      <PrototypeEmbed
        src={SRC}
        title="Vendor portal flow"
        caption="Click to load interactive prototype"
        externalHref="https://www.figma.com/"
      />
    </div>
  ),
};

export const Tablet: Story = {
  globals: { viewport: { value: "tablet", isRotated: false } },
  render: () => (
    <div style={wrap}>
      <PrototypeEmbed
        src={SRC}
        title="Vendor portal flow"
        caption="Click to load interactive prototype"
        externalHref="https://www.figma.com/"
      />
    </div>
  ),
};

export const Mobile: Story = {
  globals: { viewport: { value: "mobile", isRotated: false } },
  render: () => (
    <div style={{ ...wrap, padding: "32px var(--content-padding)" }}>
      <PrototypeEmbed
        src={SRC}
        title="Vendor portal flow"
        caption="Click to load"
        externalHref="https://www.figma.com/"
      />
    </div>
  ),
};
