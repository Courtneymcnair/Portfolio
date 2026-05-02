import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import NumberedStep from './NumberedStep';
import PrincipleList from './PrincipleList';
import Aside from './Aside';
import Figure from './Figure';

const meta = {
  title: 'Case Study/NumberedStep',
  component: NumberedStep,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component:
          'A numbered subsection inside the Process section. Big mono number on the left, serif title and body on the right. The number fades from 30% to 100% opacity when the step enters the viewport. Accepts any combination of paragraphs, PrincipleList, Aside, and Figure as children.',
      },
    },
  },
  argTypes: {
    number: { control: 'text' },
    title: { control: 'text' },
  },
  args: {
    number: '02',
    title: 'The pivotal architectural decision: configurable per-connection',
    children: (
      <p style={{ margin: 0 }}>
        The single most important design call on the project. It emerged from discovery, not from a spec.
      </p>
    ),
  },
} satisfies Meta<typeof NumberedStep>;

export default meta;
type Story = StoryObj<typeof meta>;

const desktop = { value: 'desktop', isRotated: false };
const tablet = { value: 'tablet', isRotated: false };
const mobile = { value: 'mobile', isRotated: false };

export const Desktop: Story = { globals: { viewport: desktop } };
export const Tablet: Story = { globals: { viewport: tablet } };
export const Mobile: Story = { globals: { viewport: mobile } };

export const WithFullContent: Story = {
  args: {
    number: '02',
    title: 'The pivotal architectural decision: configurable per-connection',
    children: (
      <>
        <p>
          The two clients had <strong>mostly compatible</strong> needs — different priorities, different defaults.
          Mostly compatible is the trap. Optimize for one, and the other becomes a second-class case. Unify around
          an average, and neither client gets what they want.
        </p>
        <p style={{ marginTop: 16 }}>
          <strong>The structural choice:</strong> every connection between a client and a vendor is its own
          configuration. Same vendor, PO-required for one client and off for another. Different currencies, terms,
          templates.
        </p>
        <Aside label="Honest reflection">
          I won&apos;t claim I saw this from day one. It crystallized over discovery. It&apos;s the most
          senior-leaning decision on the project and the one I&apos;d defend most readily.
        </Aside>
        <div style={{ marginTop: 24 }}>
          <Figure
            src="/images/thumbnails/chekhub.png"
            alt="Diagram showing same vendor with three different connection configs"
            caption="Fig. 02 — Same vendor, three different connection configs across three clients"
            width="content"
            aspect="16 / 9"
          />
        </div>
      </>
    ),
  },
};

export const WithPrincipleList: Story = {
  args: {
    number: '03',
    title: 'The two-sided interaction model',
    children: (
      <>
        <p style={{ marginBottom: 20 }}>
          The lead dev&apos;s data model gave us a shared record. My job was making that feel native on both sides.
        </p>
        <PrincipleList
          items={[
            {
              lead: 'The ticket as the boundary.',
              body: 'SLA, dispatch, compliance, billing all attach to the ticket. One shared object, scoped permissions.',
            },
            {
              lead: 'Mirrored but distinct surfaces.',
              body: 'Client manages through a Portal tab. Vendor gets a dedicated portal organized around their day-to-day.',
            },
            {
              lead: 'Parallel onboarding, not sequential.',
              body: 'Both checklists, one view, shared progress. Activation gates on both completing.',
            },
          ]}
        />
      </>
    ),
  },
};
