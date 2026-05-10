import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import TwoColumn from './TwoColumn';
import Figure from './Figure';

const meta = {
  title: 'Case Study/TwoColumn',
  component: TwoColumn,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component:
          'Side-by-side text + visual layout for case studies. Three column ratios (equal / text-heavy / visual-heavy), top or center alignment, and an optional reverse so the visual sits on the left. Stacks (text first, or reversed) below 860px.',
      },
    },
  },
  argTypes: {
    ratio: { control: { type: 'inline-radio' }, options: ['equal', 'text-heavy', 'visual-heavy'] },
    align: { control: { type: 'inline-radio' }, options: ['top', 'center'] },
    reverse: { control: 'boolean' },
  },
  args: {
    ratio: 'equal',
    align: 'center',
    reverse: false,
    text: (
      <div>
        <div
          style={{
            fontFamily: 'var(--mono)',
            fontSize: 11,
            letterSpacing: '0.16em',
            textTransform: 'uppercase',
            color: 'var(--accent)',
            marginBottom: 16,
          }}
        >
          The shared ticket
        </div>
        <h3
          style={{
            fontFamily: 'var(--display)',
            fontWeight: 400,
            fontSize: 'clamp(28px, 3.2vw, 40px)',
            lineHeight: 1.1,
            letterSpacing: '-0.02em',
            color: 'var(--ink)',
            margin: 0,
            marginBottom: 16,
          }}
        >
          One ticket, two surfaces, one source of truth.
        </h3>
        <p
          style={{
            fontFamily: 'var(--sans)',
            fontSize: 16,
            lineHeight: 1.6,
            color: 'var(--grey-1)',
            margin: 0,
          }}
        >
          The ticket is the canonical record on both sides of the relationship — what changes on the
          client surface is reflected on the vendor surface within the same data model. No duplicate
          state, no exports, no email handoff.
        </p>
      </div>
    ),
    visual: (
      <Figure
        src="/images/thumbnails/chekhub.png"
        alt="Vendor portal screenshot"
        width="full"
        aspect="4 / 3"
      />
    ),
  },
} satisfies Meta<typeof TwoColumn>;

export default meta;
type Story = StoryObj<typeof meta>;

const desktop = { value: 'desktop', isRotated: false };
const tablet = { value: 'tablet', isRotated: false };
const mobile = { value: 'mobile', isRotated: false };

export const Desktop: Story = { globals: { viewport: desktop } };
export const Tablet: Story = { globals: { viewport: tablet } };
export const Mobile: Story = { globals: { viewport: mobile } };

export const TextHeavy: Story = { args: { ratio: 'text-heavy' } };
export const VisualHeavy: Story = { args: { ratio: 'visual-heavy' } };
export const Reversed: Story = { args: { reverse: true } };
