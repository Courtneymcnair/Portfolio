import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import PrototypeEmbed from './PrototypeEmbed';

const meta = {
  title: 'Case Study/PrototypeEmbed',
  component: PrototypeEmbed,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component:
          'Lazy-loaded iframe wrapper for Figma (or any) prototypes. Renders a click-to-load poster with a play affordance until the user activates it — keeps the page fast and avoids autoplay heaviness. Caption row supports an optional "Open in Figma" link.',
      },
    },
  },
  argTypes: {
    width: { control: { type: 'inline-radio' }, options: ['content', 'wide', 'full'] },
  },
  args: {
    src: 'https://embed.figma.com/proto/abc/Vendor-Portal',
    title: 'Vendor Portal · Bid flow',
    caption: 'Fig.B · Vendor accepting a ticket and submitting a bid',
    width: 'wide',
    aspect: '16 / 10',
    externalHref: 'https://figma.com',
    externalLabel: 'Open in Figma',
  },
} satisfies Meta<typeof PrototypeEmbed>;

export default meta;
type Story = StoryObj<typeof meta>;

const desktop = { value: 'desktop', isRotated: false };
const tablet = { value: 'tablet', isRotated: false };
const mobile = { value: 'mobile', isRotated: false };

export const Desktop: Story = { globals: { viewport: desktop } };
export const Tablet: Story = { globals: { viewport: tablet } };
export const Mobile: Story = { globals: { viewport: mobile } };

export const ContentWidth: Story = {
  args: { width: 'content' },
};

export const NoCaption: Story = {
  args: { caption: undefined, externalHref: undefined },
};
