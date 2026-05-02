import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import Figure from './Figure';

const meta = {
  title: 'Case Study/Figure',
  component: Figure,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component:
          'Image with optional caption. Replaces every `[VISUAL: ...]` placeholder in case studies. Supports four widths (content / wide / full / half), custom aspect ratio, and reveals on scroll. Hover lifts elevation.',
      },
    },
  },
  argTypes: {
    width: { control: 'select', options: ['content', 'wide', 'full', 'half'] },
    aspect: { control: 'text' },
  },
  args: {
    src: '/images/thumbnails/chekhub.png',
    alt: 'Chekhub dashboard',
    caption: 'Fig. 01 — Client side dashboard, vendor connections panel',
    width: 'content',
    aspect: '16 / 10',
  },
} satisfies Meta<typeof Figure>;

export default meta;
type Story = StoryObj<typeof meta>;

const desktop = { value: 'desktop', isRotated: false };
const tablet = { value: 'tablet', isRotated: false };
const mobile = { value: 'mobile', isRotated: false };

export const Desktop: Story = { globals: { viewport: desktop } };
export const Tablet: Story = { globals: { viewport: tablet } };
export const Mobile: Story = { globals: { viewport: mobile } };

export const NoCaption: Story = { args: { caption: undefined } };
export const Wide: Story = { args: { width: 'wide' } };
export const FullBleed: Story = { args: { width: 'full' } };
export const Half: Story = { args: { width: 'half', aspect: '4 / 3' } };
