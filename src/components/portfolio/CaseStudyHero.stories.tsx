import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import CaseStudyHero from './CaseStudyHero';

const meta = {
  title: 'Case Study/CaseStudyHero',
  component: CaseStudyHero,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component:
          'Split case-study hero. Left column: case number + partner mono eyebrow, tinted accent category pill (hugs its content), big serif title, paragraph subtitle, read-time meta, tag chips, large pill CTA. Right column: a product teaser composition (one or two screenshots, with the second floating bottom-right). Stacks below 960px.',
      },
    },
  },
  args: {
    caseNumber: '01',
    partnerName: 'Chekhub Connect',
    category: 'B2B SaaS · Vendor Portal',
    title: 'Expanding a mission-critical operations platform into a multi-organization vendor system.',
    description:
      '0→1 product connecting dispatch, compliance, execution, and invoicing across organizations. Designed end-to-end as the sole product designer in close partnership with engineering.',
    readTime: '~8 min read',
    tags: ['0→1', 'System Design', 'B2B SaaS', 'Sole Designer'],
    ctaHref: '#story',
    ctaLabel: 'Read case',
    images: [
      { src: '/images/thumbnails/chekhub.png', alt: 'Client surface', caption: 'Client · Dispatch' },
      { src: '/images/thumbnails/chekhub.png', alt: 'Vendor surface', caption: 'Vendor · Inbox' },
    ],
    figLabel: 'Fig.A · System surface',
  },
} satisfies Meta<typeof CaseStudyHero>;

export default meta;
type Story = StoryObj<typeof meta>;

const desktop = { value: 'desktop', isRotated: false };
const tablet = { value: 'tablet', isRotated: false };
const mobile = { value: 'mobile', isRotated: false };

export const Desktop: Story = { globals: { viewport: desktop } };
export const Tablet: Story = { globals: { viewport: tablet } };
export const Mobile: Story = { globals: { viewport: mobile } };

export const SingleImage: Story = {
  args: {
    images: [{ src: '/images/thumbnails/chekhub.png', alt: 'Product surface' }],
    figLabel: undefined,
  },
};

export const NoCaptions: Story = {
  args: {
    images: [
      { src: '/images/thumbnails/chekhub.png', alt: 'Client surface' },
      { src: '/images/thumbnails/chekhub.png', alt: 'Vendor surface' },
    ],
  },
};
