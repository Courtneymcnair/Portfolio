import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import HeroFieldOfDots from './HeroFieldOfDots';

const meta = {
  title: 'UI/Hero/HeroFieldOfDots',
  component: HeroFieldOfDots,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component:
          'Full-viewport landing hero. Canvas-rendered dot field that responds to cursor position with a smoothstep falloff. Custom blue cursor. Headline ("Courtney McNair") + tagline. Respects prefers-reduced-motion. Move cursor inside the canvas to see the effect.',
      },
    },
  },
} satisfies Meta<typeof HeroFieldOfDots>;

export default meta;
type Story = StoryObj<typeof meta>;

const desktop = { value: 'desktop', isRotated: false };
const tablet = { value: 'tablet', isRotated: false };
const mobile = { value: 'mobile', isRotated: false };

export const Desktop: Story = { globals: { viewport: desktop } };
export const Tablet: Story = { globals: { viewport: tablet } };
export const Mobile: Story = { globals: { viewport: mobile } };
