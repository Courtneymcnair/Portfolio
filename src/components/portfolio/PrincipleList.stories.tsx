import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import PrincipleList from './PrincipleList';

const meta = {
  title: 'Case Study/PrincipleList',
  component: PrincipleList,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component:
          'Vertical bold-lead bullet list for dense inline content inside a Process step or Reflection section — places where IconCardGrid would be too heavy. Each item has a bold lead, a body, and an optional sublist. Stagger reveals on scroll.',
      },
    },
  },
  args: {
    items: [
      {
        lead: 'The ticket as the boundary.',
        body: 'SLA, dispatch, compliance, billing all attach to the ticket. One shared object, scoped permissions.',
      },
      {
        lead: 'Mirrored but distinct surfaces.',
        body: 'Client manages through a Portal tab inside their workspace. Vendor gets a dedicated portal organized around their day-to-day.',
      },
      {
        lead: 'Parallel onboarding, not sequential.',
        body: 'Both sides may have requirements of each other. Both checklists, one view, shared progress. Activation gates on both completing.',
      },
    ],
  },
} satisfies Meta<typeof PrincipleList>;

export default meta;
type Story = StoryObj<typeof meta>;

const desktop = { value: 'desktop', isRotated: false };
const tablet = { value: 'tablet', isRotated: false };
const mobile = { value: 'mobile', isRotated: false };

export const Desktop: Story = { globals: { viewport: desktop } };
export const Tablet: Story = { globals: { viewport: tablet } };
export const Mobile: Story = { globals: { viewport: mobile } };

export const WithSublists: Story = {
  args: {
    items: [
      {
        lead: 'Phase 1 (Days 1–7) — Onboarding & Connection',
        body: '~52 hrs across design, backend, frontend, testing.',
        sublist: ['Connection invitation flow', 'Parallel onboarding checklists', 'Activation gating logic'],
      },
      {
        lead: 'Phase 2 (Days 6–11) — Dispatch & Execution',
        body: '~36 hrs.',
        sublist: ['Ticket templates', 'Dispatch rules', 'Vendor accept/reject flow'],
      },
      {
        lead: 'Phase 3 (Days 10–15) — Billing & Financial Controls',
        body: '~32 hrs.',
        sublist: ['Invoice pipeline', 'Multi-currency support', 'PO gate logic'],
      },
    ],
  },
};
