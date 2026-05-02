import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import UserGroupCard from './UserGroupCard';

const meta = {
  title: 'UI/UserGroupCard',
  component: UserGroupCard,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component:
          'User persona card with an icon, name, and labeled sections (e.g. "Goals", "Pain Points"). Accent-tint background, rounded medium. Designed to fill a grid cell — preview is constrained to ~360px to match typical use; see the InGrid story for the multi-card layout.',
      },
    },
  },
  decorators: [
    (Story) => (
      <div style={{ maxWidth: 360, margin: '0 auto' }}>
        <Story />
      </div>
    ),
  ],
  args: {
    iconSrc: '/images/og-image.png',
    iconAlt: 'Field technician icon',
    name: 'Field Technician',
    sections: [
      { label: 'Goals', content: 'Complete jobs efficiently with the right info on hand.' },
      { label: 'Pain points', content: 'Switching between tools, missing context on each site visit.' },
    ],
  },
} satisfies Meta<typeof UserGroupCard>;

export default meta;
type Story = StoryObj<typeof meta>;

const desktop = { value: 'desktop', isRotated: false };
const tablet = { value: 'tablet', isRotated: false };
const mobile = { value: 'mobile', isRotated: false };

export const Desktop: Story = { globals: { viewport: desktop } };
export const Tablet: Story = { globals: { viewport: tablet } };
export const Mobile: Story = { globals: { viewport: mobile } };

export const InGrid: Story = {
  decorators: [
    (Story) => (
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: 24,
          maxWidth: 1180,
          margin: '0 auto',
        }}
      >
        <Story />
        <Story />
        <Story />
      </div>
    ),
  ],
  parameters: {
    docs: {
      description: {
        story: 'Three cards in the responsive grid you would actually use them in. 3 columns on desktop, 2 on tablet, 1 on mobile.',
      },
    },
  },
};
