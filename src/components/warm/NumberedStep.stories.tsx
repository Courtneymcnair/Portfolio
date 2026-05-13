import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import NumberedStep from "./NumberedStep";

const meta: Meta<typeof NumberedStep> = {
  title: "Warm/NumberedStep",
  component: NumberedStep,
  parameters: { layout: "padded" },
};

export default meta;
type Story = StoryObj<typeof NumberedStep>;

const wrap: React.CSSProperties = {
  padding: "32px var(--warm-content-padding)",
  background: "#FFE9D6",
};

const BODY = (
  <>
    <p style={{ margin: 0, marginBottom: 16 }}>
      Vendors didn&apos;t need more dashboards. They needed to know what was waiting on
      them. So I started with a single question: <em>what do you check first when
      you log in?</em>
    </p>
    <p style={{ margin: 0 }}>
      The answer was always the same — &quot;am I blocked?&quot; That became the spine of the
      entire portal.
    </p>
  </>
);

export const Default: Story = {
  render: () => (
    <div style={wrap}>
      <NumberedStep number="01" title="Anchor the surface around a single question">
        {BODY}
      </NumberedStep>
    </div>
  ),
};

export const Sequence: Story = {
  render: () => (
    <div style={wrap}>
      <NumberedStep number="01" title="Anchor the surface around a single question">
        {BODY}
      </NumberedStep>
      <NumberedStep number="02" title="Collapse approvals where possible">
        <p style={{ margin: 0 }}>
          Most approvals existed because someone wanted visibility, not because
          they were a real gate. Those got moved to passive review queues.
        </p>
      </NumberedStep>
      <NumberedStep number="03" title="Make the audit trail queryable">
        <p style={{ margin: 0 }}>
          Visibility without searchability is just clutter. Every action wrote a
          structured event that ops could filter without opening a record.
        </p>
      </NumberedStep>
    </div>
  ),
};

export const Desktop: Story = {
  globals: { viewport: { value: "desktop", isRotated: false } },
  render: () => (
    <div style={wrap}>
      <NumberedStep number="01" title="Anchor the surface around a single question">
        {BODY}
      </NumberedStep>
    </div>
  ),
};

export const Tablet: Story = {
  globals: { viewport: { value: "tablet", isRotated: false } },
  render: () => (
    <div style={wrap}>
      <NumberedStep number="01" title="Anchor the surface around a single question">
        {BODY}
      </NumberedStep>
    </div>
  ),
};

export const Mobile: Story = {
  globals: { viewport: { value: "mobile", isRotated: false } },
  render: () => (
    <div style={wrap}>
      <NumberedStep number="01" title="Anchor the surface around a single question">
        {BODY}
      </NumberedStep>
    </div>
  ),
};
