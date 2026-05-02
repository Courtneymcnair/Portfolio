import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import CaseStudyHero from './CaseStudyHero';
import HeroComposite from './HeroComposite';

const meta = {
  title: 'Case Study/CaseStudyHero',
  component: CaseStudyHero,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component:
          'The top of every case study page. Holds partner name + project type meta, large serif title, italic subtitle, optional description paragraph, optional status pill, skill tags, optional external CTA, and an optional visual slot (typically a HeroComposite or Figure). Each element fades in with a small stagger on mount.',
      },
    },
  },
  argTypes: {
    statusVariant: { control: { type: 'inline-radio' }, options: ['active', 'shipped', 'planned'] },
  },
  args: {
    partnerName: 'Chekhub Connect',
    projectType: 'B2B SaaS · Vendor Portal',
    title: 'Architecting a two-sided system where clients and their external vendors do business inside the same product.',
    subtitle:
      'A net-new bidirectional product spanning the client and vendor sides of a B2B service relationship — dispatch, compliance, execution, and invoicing all flowing through a single shared ticket.',
    description:
      'Designed end-to-end as the sole product designer, in close collaboration with our lead developer.',
    tags: ['0→1', 'System Design', 'B2B SaaS', 'Sole Designer'],
    statusLabel: 'In active development',
    statusVariant: 'active',
    ctaHref: undefined,
    ctaLabel: 'Go to website ↗',
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

export const WithHeroComposite: Story = {
  args: {
    visual: (
      <HeroComposite
        left={{ src: '/images/thumbnails/chekhub.png', alt: 'Client side', label: 'Client' }}
        right={{ src: '/images/thumbnails/chekhub.png', alt: 'Vendor portal', label: 'Vendor' }}
        ticketLabel="TICKET #1042"
      />
    ),
  },
};

export const ShippedStatus: Story = {
  args: {
    statusLabel: 'Shipped',
    statusVariant: 'shipped',
    ctaHref: 'https://example.com',
  },
};
