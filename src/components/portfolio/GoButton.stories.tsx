import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import GoButton from './GoButton';

const meta = {
  title: 'UI/Buttons/GoButton',
  component: GoButton,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          '60×60 pill-radius black circle with a white arrow. Used as the primary "go to project" affordance on ProjectCard and elsewhere. Hover dims to 75% opacity. Fixed size — does not scale with viewport.',
      },
    },
  },
  argTypes: {
    href: { control: 'text', description: 'Destination route (any internal path).' },
  },
  args: {
    href: '/work/chekhub',
  },
} satisfies Meta<typeof GoButton>;

export default meta;
type Story = StoryObj<typeof meta>;

const desktop = { value: 'desktop', isRotated: false };
const tablet = { value: 'tablet', isRotated: false };
const mobile = { value: 'mobile', isRotated: false };

export const Desktop: Story = { globals: { viewport: desktop } };
export const Tablet: Story = { globals: { viewport: tablet } };
export const Mobile: Story = { globals: { viewport: mobile } };
