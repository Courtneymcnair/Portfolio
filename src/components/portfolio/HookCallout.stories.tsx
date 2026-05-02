import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import HookCallout from './HookCallout';

const meta = {
  title: 'Case Study/HookCallout',
  component: HookCallout,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component:
          'The "The hook —" callout used near the top of a case study to land the central thesis in one beat. Blue tint background, accent-colored eyebrow, serif body. One per case study.',
      },
    },
  },
  argTypes: {
    label: { control: 'text' },
    children: { control: 'text' },
  },
  args: {
    label: 'The hook',
    children:
      "This wasn't a feature added to an existing product. It was a net-new product capability, scoped without a defined PRD, designed to serve multiple enterprise clients with related but non-identical requirements. The central design decision — making every connection configurable per-relationship — wasn't a feature pick. It was the system architecture.",
  },
} satisfies Meta<typeof HookCallout>;

export default meta;
type Story = StoryObj<typeof meta>;

const desktop = { value: 'desktop', isRotated: false };
const tablet = { value: 'tablet', isRotated: false };
const mobile = { value: 'mobile', isRotated: false };

export const Desktop: Story = { globals: { viewport: desktop } };
export const Tablet: Story = { globals: { viewport: tablet } };
export const Mobile: Story = { globals: { viewport: mobile } };
