import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import SelectWorks from "./SelectWorks";

const meta: Meta<typeof SelectWorks> = {
  title: "UI/SelectWorks",
  component: SelectWorks,
  parameters: { layout: "fullscreen" },
};

export default meta;
type Story = StoryObj<typeof SelectWorks>;

export const Default: Story = { render: () => <SelectWorks /> };

export const Desktop: Story = {
  globals: { viewport: { value: "desktop", isRotated: false } },
  render: () => <SelectWorks />,
};

export const Tablet: Story = {
  globals: { viewport: { value: "tablet", isRotated: false } },
  render: () => <SelectWorks />,
};

export const Mobile: Story = {
  globals: { viewport: { value: "mobile", isRotated: false } },
  render: () => <SelectWorks />,
};
