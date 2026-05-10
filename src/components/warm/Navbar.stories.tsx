import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import Navbar from "./Navbar";

const meta: Meta<typeof Navbar> = {
  title: "Warm/Navbar",
  component: Navbar,
  parameters: { layout: "fullscreen" },
};

export default meta;
type Story = StoryObj<typeof Navbar>;

function Frame({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ minHeight: "100vh", background: "#FFE9D6" }}>
      {children}
      <div style={{ height: 1200, padding: 56, color: "rgba(42,15,8,0.4)", fontSize: 14 }}>
        Scroll content — navbar is sticky.
      </div>
    </div>
  );
}

export const Default: Story = {
  render: () => (
    <Frame>
      <Navbar activeHref="/" />
    </Frame>
  ),
};

export const Desktop: Story = {
  globals: { viewport: { value: "desktop", isRotated: false } },
  render: () => (
    <Frame>
      <Navbar activeHref="/about" />
    </Frame>
  ),
};

export const Tablet: Story = {
  globals: { viewport: { value: "tablet", isRotated: false } },
  render: () => (
    <Frame>
      <Navbar activeHref="/" />
    </Frame>
  ),
};

export const Mobile: Story = {
  globals: { viewport: { value: "mobile", isRotated: false } },
  render: () => (
    <Frame>
      <Navbar activeHref="/" />
    </Frame>
  ),
};
