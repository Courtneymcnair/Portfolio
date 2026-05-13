import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import ImpactStatusBlock from "./ImpactStatusBlock";

const meta: Meta<typeof ImpactStatusBlock> = {
  title: "Warm/ImpactStatusBlock",
  component: ImpactStatusBlock,
  parameters: { layout: "padded" },
};

export default meta;
type Story = StoryObj<typeof ImpactStatusBlock>;

const wrap: React.CSSProperties = {
  padding: "64px var(--warm-content-padding)",
  background: "#FFE9D6",
};

const TODAY = [
  "Onboarded 3 vendor cohorts (47 vendors total) with no support escalations",
  "Reduced average onboarding time from 11 days to 2",
  "Retired 6 legacy tools and consolidated to a single portal",
];

const COMING = [
  "Self-serve compliance review queue (Q3)",
  "Vendor performance scoring with monthly export (Q4)",
];

const NOTE =
  "Six-month retention and NPS data lands in Q4 — this case study will be updated when the numbers are in.";

export const Active: Story = {
  render: () => (
    <div style={wrap}>
      <ImpactStatusBlock
        statusLabel="Active in production"
        statusVariant="active"
        today={TODAY}
        coming={COMING}
        futureNote={NOTE}
      />
    </div>
  ),
};

export const Shipped: Story = {
  render: () => (
    <div style={wrap}>
      <ImpactStatusBlock
        statusLabel="Shipped"
        statusVariant="shipped"
        today={TODAY}
      />
    </div>
  ),
};

export const Planned: Story = {
  render: () => (
    <div style={wrap}>
      <ImpactStatusBlock
        statusLabel="Planned for Q3"
        statusVariant="planned"
        today={["Discovery interviews complete", "Spec drafted, in review"]}
        coming={["Build kicks off June 2026", "First cohort early July"]}
      />
    </div>
  ),
};

export const Desktop: Story = {
  globals: { viewport: { value: "desktop", isRotated: false } },
  render: () => (
    <div style={wrap}>
      <ImpactStatusBlock
        statusLabel="Active in production"
        statusVariant="active"
        today={TODAY}
        coming={COMING}
        futureNote={NOTE}
      />
    </div>
  ),
};

export const Tablet: Story = {
  globals: { viewport: { value: "tablet", isRotated: false } },
  render: () => (
    <div style={wrap}>
      <ImpactStatusBlock
        statusLabel="Active in production"
        statusVariant="active"
        today={TODAY}
        coming={COMING}
        futureNote={NOTE}
      />
    </div>
  ),
};

export const Mobile: Story = {
  globals: { viewport: { value: "mobile", isRotated: false } },
  render: () => (
    <div style={{ ...wrap, padding: "32px var(--warm-content-padding)" }}>
      <ImpactStatusBlock
        statusLabel="Active in production"
        statusVariant="active"
        today={TODAY}
        coming={COMING}
        futureNote={NOTE}
      />
    </div>
  ),
};
