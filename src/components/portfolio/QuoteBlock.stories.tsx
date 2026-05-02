import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import QuoteBlock from './QuoteBlock';

const meta = {
  title: 'UI/QuoteBlock',
  component: QuoteBlock,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component:
          'Pull-quote in Instrument Serif with optional mono attribution beneath. Use for user research quotes, stakeholder feedback, or testimonial moments inside case studies.',
      },
    },
  },
  argTypes: {
    quote: { control: 'text' },
    attribution: { control: 'text' },
  },
  args: {
    quote: 'I used to keep this stuff in my head. Now I just open the app.',
    attribution: 'Field Technician, post-launch interview',
  },
} satisfies Meta<typeof QuoteBlock>;

export default meta;
type Story = StoryObj<typeof meta>;

const desktop = { value: 'desktop', isRotated: false };
const tablet = { value: 'tablet', isRotated: false };
const mobile = { value: 'mobile', isRotated: false };

export const Desktop: Story = { globals: { viewport: desktop } };
export const Tablet: Story = { globals: { viewport: tablet } };
export const Mobile: Story = { globals: { viewport: mobile } };

export const WithoutAttribution: Story = {
  args: { attribution: undefined },
};
