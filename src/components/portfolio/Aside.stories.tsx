import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import Aside from './Aside';

const meta = {
  title: 'Case Study/Aside',
  component: Aside,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component:
          'Italic emphasis block for "Why this matters —" / "Honest reflection —" patterns inside Process steps. Accent left rule, mono uppercase eyebrow, serif italic body. Inline within the surrounding section.',
      },
    },
  },
  argTypes: {
    label: { control: 'text' },
    children: { control: 'text' },
  },
  args: {
    label: 'Why this matters',
    children:
      "It would have been easier to scope the data center operator's exact needs. The harder call was building for a pattern that worked for both.",
  },
} satisfies Meta<typeof Aside>;

export default meta;
type Story = StoryObj<typeof meta>;

const desktop = { value: 'desktop', isRotated: false };
const tablet = { value: 'tablet', isRotated: false };
const mobile = { value: 'mobile', isRotated: false };

export const Desktop: Story = { globals: { viewport: desktop } };
export const Tablet: Story = { globals: { viewport: tablet } };
export const Mobile: Story = { globals: { viewport: mobile } };

export const HonestReflection: Story = {
  args: {
    label: 'Honest reflection',
    children:
      "I won't claim I saw this from day one. It crystallized over discovery, and I made the call when I had enough evidence that no single config was going to be right.",
  },
};
