import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import ImpactStatusBlock from './ImpactStatusBlock';

const meta = {
  title: 'Case Study/ImpactStatusBlock',
  component: ImpactStatusBlock,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component:
          'Status-aware impact section. Pill shows whether the project is in active development, shipped, or planned. "Today" column lists what is currently true; optional "Coming" column lists what is expected. Optional italic future-data note for when shipped metrics will replace the current narrative.',
      },
    },
  },
  argTypes: {
    statusVariant: { control: { type: 'inline-radio' }, options: ['active', 'shipped', 'planned'] },
  },
  args: {
    statusLabel: 'In active development',
    statusVariant: 'active',
    today: [
      'Full design scoping and front-end product architecture locked for demo build',
      'Functional overview document delivered to stakeholders ahead of demo',
      'Build phases sequenced collaboratively with the lead developer',
      'Data center operator stakeholders aligned with proposed direction through co-led discovery',
    ],
    coming: [
      'Demo to client end of May 2026',
      'First production use expected mid-late June 2026',
      'Adoption metrics, dispatch volume, time-to-onboard, invoicing cycle time',
      'Qualitative feedback from production users',
    ],
    futureNote: 'This section will be updated with real shipped metrics as data arrives.',
  },
} satisfies Meta<typeof ImpactStatusBlock>;

export default meta;
type Story = StoryObj<typeof meta>;

const desktop = { value: 'desktop', isRotated: false };
const tablet = { value: 'tablet', isRotated: false };
const mobile = { value: 'mobile', isRotated: false };

export const Desktop: Story = { globals: { viewport: desktop } };
export const Tablet: Story = { globals: { viewport: tablet } };
export const Mobile: Story = { globals: { viewport: mobile } };

export const Shipped: Story = {
  args: {
    statusLabel: 'Shipped',
    statusVariant: 'shipped',
    today: [
      '47% reduction in time-to-onboard new vendors',
      '22 enterprise clients using the per-connection config in production',
      'Vendor adoption rate of 91% within the first 60 days',
    ],
    coming: undefined,
    futureNote: undefined,
    todayLabel: 'Outcomes',
  },
};
