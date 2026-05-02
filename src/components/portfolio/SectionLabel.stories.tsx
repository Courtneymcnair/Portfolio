import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import SectionLabel from './SectionLabel';

const meta = {
  title: 'UI/Typography/SectionLabel',
  component: SectionLabel,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'Mono-type overline used above SectionHeading to label a case study section ("Problem", "Approach", "Outcome"). Uses the `cs-eyebrow` global class.',
      },
    },
  },
  argTypes: {
    children: { control: 'text', description: 'Label text. Conventionally uppercase.' },
  },
  args: {
    children: 'Problem',
  },
} satisfies Meta<typeof SectionLabel>;

export default meta;
type Story = StoryObj<typeof meta>;

const desktop = { value: 'desktop', isRotated: false };
const tablet = { value: 'tablet', isRotated: false };
const mobile = { value: 'mobile', isRotated: false };

export const Desktop: Story = { globals: { viewport: desktop } };
export const Tablet: Story = { globals: { viewport: tablet } };
export const Mobile: Story = { globals: { viewport: mobile } };
