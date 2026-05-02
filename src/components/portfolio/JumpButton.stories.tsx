import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import JumpButton from './JumpButton';

const meta = {
  title: 'UI/Buttons/JumpButton',
  component: JumpButton,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'Pill-shaped accent-blue CTA used inside case studies to jump to anchored sections (e.g. "Jump to Final Design"). Use sparingly — one per case study at most.',
      },
    },
  },
  argTypes: {
    href: { control: 'text', description: 'Anchor or route to jump to.' },
    label: { control: 'text', description: 'Button text. Defaults to "Jump to Final Design".' },
  },
  args: {
    href: '#final-design',
    label: 'Jump to Final Design',
  },
} satisfies Meta<typeof JumpButton>;

export default meta;
type Story = StoryObj<typeof meta>;

const desktop = { value: 'desktop', isRotated: false };
const tablet = { value: 'tablet', isRotated: false };
const mobile = { value: 'mobile', isRotated: false };

export const Desktop: Story = { globals: { viewport: desktop } };
export const Tablet: Story = { globals: { viewport: tablet } };
export const Mobile: Story = { globals: { viewport: mobile } };

export const CustomLabel: Story = {
  args: { label: 'See the live product →' },
};
