import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import SectionHeading from './SectionHeading';
import SectionLabel from './SectionLabel';

const meta = {
  title: 'UI/Typography/SectionHeading',
  component: SectionHeading,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component:
          'Instrument Serif H3 used as the primary section title inside case studies. Fluid sizing: clamp(28px, 3.5vw, 40px). Pair with SectionLabel above.',
      },
    },
  },
  argTypes: {
    children: { control: 'text', description: 'Heading text.' },
    className: { control: 'text', description: 'Optional Tailwind classes (e.g. "mb-2").' },
  },
  args: {
    children: 'Designing for moments of decision',
    className: '',
  },
} satisfies Meta<typeof SectionHeading>;

export default meta;
type Story = StoryObj<typeof meta>;

const desktop = { value: 'desktop', isRotated: false };
const tablet = { value: 'tablet', isRotated: false };
const mobile = { value: 'mobile', isRotated: false };

export const Desktop: Story = { globals: { viewport: desktop } };
export const Tablet: Story = { globals: { viewport: tablet } };
export const Mobile: Story = { globals: { viewport: mobile } };

export const WithLabel: Story = {
  render: (args) => (
    <div>
      <SectionLabel>Approach</SectionLabel>
      <SectionHeading {...args} />
    </div>
  ),
};
