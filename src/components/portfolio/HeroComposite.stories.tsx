import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import HeroComposite from './HeroComposite';

const meta = {
  title: 'Case Study/HeroComposite',
  component: HeroComposite,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component:
          'Animated two-sided hero visual. Left and right panels fade in from their outer edges. An accent-blue line draws between them after the panels settle. A "ticket" pill travels left-to-right along the line every 4s on a soft loop. Built specifically for the Vendor Portal case study (client side ↔ vendor side, connected by a shared ticket), but reusable for any "two surfaces, one shared object" hero.',
      },
    },
  },
  args: {
    left: {
      src: '/images/thumbnails/chekhub.png',
      alt: 'Client side dashboard',
      label: 'Client',
    },
    right: {
      src: '/images/thumbnails/chekhub.png',
      alt: 'Vendor portal',
      label: 'Vendor',
    },
    showTicketLoop: true,
    ticketLabel: 'TICKET #1042',
  },
} satisfies Meta<typeof HeroComposite>;

export default meta;
type Story = StoryObj<typeof meta>;

const desktop = { value: 'desktop', isRotated: false };
const tablet = { value: 'tablet', isRotated: false };
const mobile = { value: 'mobile', isRotated: false };

export const Desktop: Story = { globals: { viewport: desktop } };
export const Tablet: Story = { globals: { viewport: tablet } };
export const Mobile: Story = { globals: { viewport: mobile } };

export const NoTicketLoop: Story = {
  args: { showTicketLoop: false },
  parameters: {
    docs: { story: { description: 'Use when the connecting metaphor is the focus and a moving label would distract.' } },
  },
};
