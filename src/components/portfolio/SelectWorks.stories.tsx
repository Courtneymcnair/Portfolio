import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import SelectWorks from './SelectWorks';

const meta = {
  title: 'UI/SelectWorks',
  component: SelectWorks,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component:
          'Landing-page works section. Header ("Select works") + scroll-driven case rows. Each row scales/dims based on distance from viewport center; the closest row is "active" and shows full opacity + accent CTA. Case data is currently hardcoded inside the component — when this becomes data-driven, lift CASES into a prop.',
      },
    },
  },
} satisfies Meta<typeof SelectWorks>;

export default meta;
type Story = StoryObj<typeof meta>;

const desktop = { value: 'desktop', isRotated: false };
const tablet = { value: 'tablet', isRotated: false };
const mobile = { value: 'mobile', isRotated: false };

export const Desktop: Story = { globals: { viewport: desktop } };
export const Tablet: Story = { globals: { viewport: tablet } };
export const Mobile: Story = { globals: { viewport: mobile } };
