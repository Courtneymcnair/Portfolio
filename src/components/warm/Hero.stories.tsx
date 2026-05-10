import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import Hero from "./Hero";

const meta: Meta<typeof Hero> = {
  title: "Warm/Hero",
  component: Hero,
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;
type Story = StoryObj<typeof Hero>;

export const Desktop: Story = {
  globals: { viewport: { value: "desktop", isRotated: false } },
};

export const Tablet: Story = {
  globals: { viewport: { value: "tablet", isRotated: false } },
};

export const Mobile: Story = {
  globals: { viewport: { value: "mobile", isRotated: false } },
};
