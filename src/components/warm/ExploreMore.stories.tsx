import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import ExploreMore from "./ExploreMore";

const meta: Meta<typeof ExploreMore> = {
  title: "Warm/ExploreMore",
  component: ExploreMore,
  parameters: { layout: "fullscreen" },
};

export default meta;
type Story = StoryObj<typeof ExploreMore>;

export const Default: Story = {
  render: () => <ExploreMore />,
};

export const Desktop: Story = {
  globals: { viewport: { value: "desktop", isRotated: false } },
  render: () => <ExploreMore />,
};

export const Tablet: Story = {
  globals: { viewport: { value: "tablet", isRotated: false } },
  render: () => <ExploreMore />,
};

export const Mobile: Story = {
  globals: { viewport: { value: "mobile", isRotated: false } },
  render: () => <ExploreMore />,
};
