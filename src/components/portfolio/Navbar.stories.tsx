import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import Navbar from './Navbar';

const meta = {
  title: 'Layout/Navbar',
  component: Navbar,
  parameters: {
    layout: 'fullscreen',
    nextjs: { navigation: { pathname: '/' } },
    docs: {
      description: {
        component:
          'Fixed top navigation. Mono type, paper background, hairline bottom border. Highlights "Work" on `/` and `/work/*`, "About" on `/about`. Mobile: collapses to a "Menu" button that opens a full-screen overlay.',
      },
    },
  },
} satisfies Meta<typeof Navbar>;

export default meta;
type Story = StoryObj<typeof meta>;

const desktop = { value: 'desktop', isRotated: false };
const tablet = { value: 'tablet', isRotated: false };
const mobile = { value: 'mobile', isRotated: false };

export const Desktop: Story = { globals: { viewport: desktop } };
export const Tablet: Story = { globals: { viewport: tablet } };
export const Mobile: Story = { globals: { viewport: mobile } };

export const OnAboutPage: Story = {
  parameters: { nextjs: { navigation: { pathname: '/about' } } },
};

export const OnCaseStudyPage: Story = {
  parameters: { nextjs: { navigation: { pathname: '/work/chekhub' } } },
};
