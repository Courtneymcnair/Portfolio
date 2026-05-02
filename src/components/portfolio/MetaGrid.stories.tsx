import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import MetaGrid from './MetaGrid';

const meta = {
  title: 'UI/MetaGrid',
  component: MetaGrid,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component:
          'Case study metadata strip: 4 columns on desktop, 2 on mobile. Each cell is a mono label + value. Used near the top of a case study to communicate role, timeline, team, platform.',
      },
    },
  },
  args: {
    items: [
      { label: 'Role', value: 'Sole Designer' },
      { label: 'Timeline', value: '2024 — Ongoing' },
      { label: 'Team', value: '1 PM, 4 Engineers' },
      { label: 'Platform', value: 'Web, B2B SaaS' },
    ],
  },
} satisfies Meta<typeof MetaGrid>;

export default meta;
type Story = StoryObj<typeof meta>;

const desktop = { value: 'desktop', isRotated: false };
const tablet = { value: 'tablet', isRotated: false };
const mobile = { value: 'mobile', isRotated: false };

export const Desktop: Story = { globals: { viewport: desktop } };
export const Tablet: Story = { globals: { viewport: tablet } };
export const Mobile: Story = { globals: { viewport: mobile } };

export const TwoItems: Story = {
  args: {
    items: [
      { label: 'Role', value: 'Lead Designer' },
      { label: 'Timeline', value: '2023' },
    ],
  },
};
