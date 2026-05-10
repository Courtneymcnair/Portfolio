import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import Footer from "./Footer";

const meta: Meta<typeof Footer> = {
  title: "Warm/Footer",
  component: Footer,
  parameters: { layout: "fullscreen" },
};

export default meta;
type Story = StoryObj<typeof Footer>;

export const Default: Story = {
  render: () => <Footer />,
};

export const Desktop: Story = {
  globals: { viewport: { value: "desktop", isRotated: false } },
  render: () => <Footer />,
};

export const Tablet: Story = {
  globals: { viewport: { value: "tablet", isRotated: false } },
  render: () => <Footer />,
};

export const Mobile: Story = {
  globals: { viewport: { value: "mobile", isRotated: false } },
  render: () => <Footer />,
};
