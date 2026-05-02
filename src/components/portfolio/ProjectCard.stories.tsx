import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import ProjectCard from './ProjectCard';

const meta = {
  title: 'UI/ProjectCard',
  component: ProjectCard,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component:
          'Used inside ExploreMore to surface other case studies. Text column (33%) with title + meta + GoButton, image column (67%) with cover image. Stacks on mobile.',
      },
    },
  },
  argTypes: {
    title: { control: 'text' },
    meta: { control: 'text' },
    href: { control: 'text' },
    imageSrc: { control: 'text' },
    imageAlt: { control: 'text' },
  },
  args: {
    title: 'Operations Management Platform',
    meta: 'B2B SaaS · 2024 — Ongoing',
    href: '/work/chekhub',
    imageSrc: '/images/thumbnails/chekhub.png',
    imageAlt: 'CheKHub dashboard',
  },
} satisfies Meta<typeof ProjectCard>;

export default meta;
type Story = StoryObj<typeof meta>;

const desktop = { value: 'desktop', isRotated: false };
const tablet = { value: 'tablet', isRotated: false };
const mobile = { value: 'mobile', isRotated: false };

export const Desktop: Story = { globals: { viewport: desktop } };
export const Tablet: Story = { globals: { viewport: tablet } };
export const Mobile: Story = { globals: { viewport: mobile } };
