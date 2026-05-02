import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import ExploreMore from './ExploreMore';

const meta = {
  title: 'UI/ExploreMore',
  component: ExploreMore,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component:
          'Bottom-of-case-study section: "Explore More Case Studies" heading + a stack of ProjectCards divided by hairlines. Pass the *other* case studies (not the current one).',
      },
    },
  },
  args: {
    projects: [
      {
        title: 'Open-Access Sign Language Dictionary',
        meta: 'Accessibility · Lead Designer',
        href: '/work/fsldictionary',
        imageSrc: '/images/thumbnails/fsl.png',
        imageAlt: 'FSL Dictionary app',
      },
      {
        title: 'Wearable Fitness for Personalized Music',
        meta: 'Product Concept · Wearables',
        href: '/work/spotifyactive',
        imageSrc: '/images/thumbnails/spotify.png',
        imageAlt: 'Spotify Active concept',
      },
    ],
  },
} satisfies Meta<typeof ExploreMore>;

export default meta;
type Story = StoryObj<typeof meta>;

const desktop = { value: 'desktop', isRotated: false };
const tablet = { value: 'tablet', isRotated: false };
const mobile = { value: 'mobile', isRotated: false };

export const Desktop: Story = { globals: { viewport: desktop } };
export const Tablet: Story = { globals: { viewport: tablet } };
export const Mobile: Story = { globals: { viewport: mobile } };
