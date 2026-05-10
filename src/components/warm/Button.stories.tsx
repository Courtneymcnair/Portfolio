import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import Button from "./Button";

const meta: Meta<typeof Button> = {
  title: "Warm/Button",
  component: Button,
  parameters: { layout: "centered" },
};

export default meta;
type Story = StoryObj<typeof Button>;

function Row({ children, label }: { children: React.ReactNode; label: string }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 12, alignItems: "flex-start" }}>
      <span
        style={{
          fontFamily: "'JetBrains Mono', monospace",
          fontSize: 11,
          letterSpacing: "0.12em",
          textTransform: "uppercase",
          color: "rgba(42, 15, 8, 0.6)",
        }}
      >
        {label}
      </span>
      <div style={{ display: "flex", gap: 16, alignItems: "center", flexWrap: "wrap" }}>
        {children}
      </div>
    </div>
  );
}

export const Variants: Story = {
  render: () => (
    <div
      style={{
        padding: "48px 56px",
        display: "flex",
        flexDirection: "column",
        gap: 40,
        background: "#FFE9D6",
      }}
    >
      <Row label="Primary">
        <Button variant="primary" size="sm">
          Get in touch
        </Button>
        <Button variant="primary" size="md">
          Get in touch
        </Button>
        <Button variant="primary" size="lg">
          Get in touch
        </Button>
      </Row>
      <Row label="Secondary">
        <Button variant="secondary" size="sm">
          View work
        </Button>
        <Button variant="secondary" size="md">
          View work
        </Button>
        <Button variant="secondary" size="lg">
          View work
        </Button>
      </Row>
      <Row label="Ghost">
        <Button variant="ghost" size="md">
          Resume
        </Button>
        <Button variant="ghost" size="md" iconRight={<span aria-hidden>→</span>}>
          Read case study
        </Button>
      </Row>
      <Row label="Link">
        <Button variant="link">View on Figma</Button>
        <Button variant="link" iconRight={<span aria-hidden>↗</span>}>
          External
        </Button>
      </Row>
    </div>
  ),
};

export const Desktop: Story = {
  globals: { viewport: { value: "desktop", isRotated: false } },
  render: () => <Button variant="primary">Read case study</Button>,
};

export const Tablet: Story = {
  globals: { viewport: { value: "tablet", isRotated: false } },
  render: () => <Button variant="primary">Read case study</Button>,
};

export const Mobile: Story = {
  globals: { viewport: { value: "mobile", isRotated: false } },
  render: () => <Button variant="primary">Read case study</Button>,
};
