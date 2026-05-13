import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import PrincipleList from "./PrincipleList";

const meta: Meta<typeof PrincipleList> = {
  title: "Warm/PrincipleList",
  component: PrincipleList,
  parameters: { layout: "padded" },
};

export default meta;
type Story = StoryObj<typeof PrincipleList>;

const wrap: React.CSSProperties = {
  padding: "64px var(--warm-content-padding)",
  background: "#FFE9D6",
};

const ITEMS = [
  {
    lead: "Show status, not stages.",
    body: "Vendors need to know what's happening right now, not which phase of a process owns the work.",
  },
  {
    lead: "One source of truth per role.",
    body: "Every screen answers a question that role asks. Anything else lives elsewhere.",
  },
  {
    lead: "Make handoff legible.",
    body: "When work moves across teams, the artifact comes with context. No re-explaining.",
    sublist: [
      "Embedded comments survive the transition",
      "Required fields gate, but don't surprise",
      "Audit trail is queryable, not just visible",
    ],
  },
];

export const Default: Story = {
  render: () => (
    <div style={wrap}>
      <PrincipleList items={ITEMS} />
    </div>
  ),
};

export const Desktop: Story = {
  globals: { viewport: { value: "desktop", isRotated: false } },
  render: () => (
    <div style={wrap}>
      <PrincipleList items={ITEMS} />
    </div>
  ),
};

export const Tablet: Story = {
  globals: { viewport: { value: "tablet", isRotated: false } },
  render: () => (
    <div style={wrap}>
      <PrincipleList items={ITEMS} />
    </div>
  ),
};

export const Mobile: Story = {
  globals: { viewport: { value: "mobile", isRotated: false } },
  render: () => (
    <div style={{ ...wrap, padding: "32px var(--warm-content-padding)" }}>
      <PrincipleList items={ITEMS} />
    </div>
  ),
};
