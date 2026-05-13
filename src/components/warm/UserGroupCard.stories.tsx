import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Wrench, ClipboardList } from "lucide-react";
import UserGroupCard from "./UserGroupCard";

const meta: Meta<typeof UserGroupCard> = {
  title: "Warm/UserGroupCard",
  component: UserGroupCard,
  parameters: { layout: "padded" },
};

export default meta;
type Story = StoryObj<typeof UserGroupCard>;

const wrap: React.CSSProperties = {
  padding: "64px var(--warm-content-padding)",
  background: "#FFE9D6",
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(min(280px, 100%), 1fr))",
  gap: 32,
  maxWidth: 1180,
  margin: "0 auto",
};

const TECHNICIAN = {
  icon: Wrench,
  name: "Field technician",
  sections: [
    {
      label: "Goal",
      content:
        "Close out the day's tickets without chasing approvals or waiting for paperwork.",
    },
    {
      label: "Friction",
      content:
        "Has to log into three tools just to know what's been signed off and what's still open.",
    },
  ],
};

const OPS_LEAD = {
  icon: ClipboardList,
  name: "Operations lead",
  sections: [
    {
      label: "Goal",
      content:
        "See vendor capacity, throughput, and exceptions across cohorts at a glance.",
    },
    {
      label: "Friction",
      content:
        "Status updates arrive via Slack, email, and spreadsheets — never in the same place.",
    },
  ],
};

export const Single: Story = {
  render: () => (
    <div style={{ ...wrap, gridTemplateColumns: "minmax(0, 360px)" }}>
      <UserGroupCard {...TECHNICIAN} />
    </div>
  ),
};

export const Pair: Story = {
  render: () => (
    <div style={wrap}>
      <UserGroupCard {...TECHNICIAN} />
      <UserGroupCard {...OPS_LEAD} />
    </div>
  ),
};

export const Desktop: Story = {
  globals: { viewport: { value: "desktop", isRotated: false } },
  render: () => (
    <div style={wrap}>
      <UserGroupCard {...TECHNICIAN} />
      <UserGroupCard {...OPS_LEAD} />
    </div>
  ),
};

export const Tablet: Story = {
  globals: { viewport: { value: "tablet", isRotated: false } },
  render: () => (
    <div style={wrap}>
      <UserGroupCard {...TECHNICIAN} />
      <UserGroupCard {...OPS_LEAD} />
    </div>
  ),
};

export const Mobile: Story = {
  globals: { viewport: { value: "mobile", isRotated: false } },
  render: () => (
    <div style={wrap}>
      <UserGroupCard {...TECHNICIAN} />
      <UserGroupCard {...OPS_LEAD} />
    </div>
  ),
};
