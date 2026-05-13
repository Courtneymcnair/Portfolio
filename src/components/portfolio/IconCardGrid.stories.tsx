import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Compass, Layers, Workflow, Users, Zap, ShieldCheck } from "lucide-react";
import IconCardGrid from "./IconCardGrid";

const meta: Meta<typeof IconCardGrid> = {
  title: "Case Study/IconCardGrid",
  component: IconCardGrid,
  parameters: { layout: "padded" },
};

export default meta;
type Story = StoryObj<typeof IconCardGrid>;

const wrap: React.CSSProperties = {
  padding: "64px var(--content-padding)",
  background: "#F4F4F0",
};

const FOUR = [
  {
    icon: Compass,
    title: "Discovery",
    body: "Mapped six fragmented vendor flows, interviewed eight ops leads, and shadowed two onboarding cycles.",
  },
  {
    icon: Layers,
    title: "Information architecture",
    body: "Consolidated six surfaces into one portal with role-aware navigation and a single source of truth.",
  },
  {
    icon: Workflow,
    title: "Flow design",
    body: "Reduced an 11-day average onboarding to 2 by collapsing approvals and unblocking parallel work.",
  },
  {
    icon: Users,
    title: "Handoff & rollout",
    body: "Wrote the spec, paired with engineering through ship, and ran live training for three vendor cohorts.",
  },
];

const THREE = [
  {
    icon: Zap,
    title: "Speed",
    body: "Decisions that used to take days now happen inline. No more email tag.",
  },
  {
    icon: ShieldCheck,
    title: "Trust",
    body: "Vendors see real-time status. Ops sees an audit trail. Both stop guessing.",
  },
  {
    icon: Workflow,
    title: "Scale",
    body: "One portal, six retired tools, ~70K tickets/year of throughput unblocked.",
  },
];

export const TwoColumns: Story = {
  render: () => (
    <div style={wrap}>
      <IconCardGrid items={FOUR} columns={2} />
    </div>
  ),
};

export const ThreeColumnsOdd: Story = {
  render: () => (
    <div style={wrap}>
      <IconCardGrid items={THREE} columns={3} />
    </div>
  ),
};

export const Desktop: Story = {
  globals: { viewport: { value: "desktop", isRotated: false } },
  render: () => (
    <div style={wrap}>
      <IconCardGrid items={FOUR} columns={2} />
    </div>
  ),
};

export const Tablet: Story = {
  globals: { viewport: { value: "tablet", isRotated: false } },
  render: () => (
    <div style={wrap}>
      <IconCardGrid items={FOUR} columns={2} />
    </div>
  ),
};

export const Mobile: Story = {
  globals: { viewport: { value: "mobile", isRotated: false } },
  render: () => (
    <div style={{ ...wrap, padding: "32px var(--content-padding)" }}>
      <IconCardGrid items={FOUR} columns={2} />
    </div>
  ),
};
