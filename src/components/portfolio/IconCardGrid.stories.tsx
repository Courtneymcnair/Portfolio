import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { Brain, Sparkles, GitBranch, Megaphone, Layers, Boxes, Calendar, FileText, Wallet } from 'lucide-react';
import IconCardGrid from './IconCardGrid';

const meta = {
  title: 'Case Study/IconCardGrid',
  component: IconCardGrid,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component:
          'Grid of summary cards with icon + title + body. Workhorse for "How I worked", "Solution components", and other top-level summary lists. Last card spans the full width when item count is odd. Stagger reveals on scroll with hover lift.',
      },
    },
  },
  argTypes: {
    columns: { control: { type: 'inline-radio' }, options: [2, 3] },
  },
  args: {
    columns: 2,
    items: [
      {
        icon: Brain,
        title: 'I think in systems before screens',
        body: 'Diagrammed the bidirectional flow — connection lifecycle, parallel onboarding, dispatch-to-invoice — before designing screens. On 0→1 work, the architecture is the design.',
      },
      {
        icon: Sparkles,
        title: 'I work AI-augmented and code-aware',
        body: 'Claude for synthesis and pressure-testing. Claude Code to prototype in our codebase. Figma MCP to run designs locally with developers.',
      },
      {
        icon: GitBranch,
        title: 'I collaborate with engineering as a peer',
        body: 'Co-led discovery with the lead dev. Sequenced the 3-week build with him in parallel, not handoff. Design tracks ran on parallel rails to backend.',
      },
      {
        icon: Megaphone,
        title: 'I communicate the work to non-design stakeholders',
        body: 'Weekly presentations to accounting, finance, and operations. Authored an 18-page functional overview and a customer-facing specification sheet.',
      },
    ],
  },
} satisfies Meta<typeof IconCardGrid>;

export default meta;
type Story = StoryObj<typeof meta>;

const desktop = { value: 'desktop', isRotated: false };
const tablet = { value: 'tablet', isRotated: false };
const mobile = { value: 'mobile', isRotated: false };

export const Desktop: Story = { globals: { viewport: desktop } };
export const Tablet: Story = { globals: { viewport: tablet } };
export const Mobile: Story = { globals: { viewport: mobile } };

export const FiveItemsLastFullWidth: Story = {
  args: {
    items: [
      {
        icon: Layers,
        title: 'Connection invitation + activation',
        body: '4 signup paths, parallel onboarding gates activation.',
      },
      {
        icon: Boxes,
        title: 'Client-side Portal tab',
        body: 'Per-connection config: templates, sites, dispatch rules, currency, terms.',
      },
      {
        icon: Calendar,
        title: 'Vendor Portal',
        body: '7 tabs consolidated across every active client connection.',
      },
      {
        icon: FileText,
        title: 'Full ticket-to-invoice lifecycle',
        body: '5 phases with shared state and clear ownership at each step.',
      },
      {
        icon: Wallet,
        title: '18-page functional overview',
        body: 'Customer-facing artifact explaining the system end-to-end.',
      },
    ],
  },
};

export const ThreeColumns: Story = {
  args: {
    columns: 3,
    items: [
      {
        icon: Layers,
        title: 'Two-sided product, one shared record',
        body: 'Client and vendor read/write the same ticket with scoped permissions.',
      },
      {
        icon: Boxes,
        title: 'Multi-client by design',
        body: 'A vendor servicing five clients shouldn\'t operate five portals.',
      },
      {
        icon: GitBranch,
        title: 'No defined PRD',
        body: 'Lead dev owned backend. Front-end product scoping, IA, flows, MVP — all mine.',
      },
    ],
  },
};
