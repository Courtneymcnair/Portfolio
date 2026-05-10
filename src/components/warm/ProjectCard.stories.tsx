import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import ProjectCard from "./ProjectCard";

const meta: Meta<typeof ProjectCard> = {
  title: "Warm/ProjectCard",
  component: ProjectCard,
  parameters: { layout: "padded" },
};

export default meta;
type Story = StoryObj<typeof ProjectCard>;

const wrap: React.CSSProperties = { padding: "64px 56px", background: "#FFE9D6" };

const CARDS = [
  { title: "Vendor portal", placeholderColor: "#FFDBC9" },
  { title: "Billing system", placeholderColor: "#F4DEC8" },
  { title: "FSL Dictionary", placeholderColor: "#E8825F" },
];

export const Single: Story = {
  render: () => (
    <div style={{ ...wrap, maxWidth: 420 }}>
      <ProjectCard {...CARDS[0]} />
    </div>
  ),
};

export const Grid: Story = {
  render: () => (
    <div style={wrap}>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
          gap: 40,
        }}
      >
        {CARDS.map((c) => (
          <ProjectCard key={c.title} {...c} />
        ))}
      </div>
    </div>
  ),
};

export const Desktop: Story = {
  globals: { viewport: { value: "desktop", isRotated: false } },
  render: () => (
    <div style={wrap}>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: 40,
        }}
      >
        {CARDS.map((c) => (
          <ProjectCard key={c.title} {...c} />
        ))}
      </div>
    </div>
  ),
};

export const Tablet: Story = {
  globals: { viewport: { value: "tablet", isRotated: false } },
  render: () => (
    <div style={wrap}>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(2, 1fr)",
          gap: 32,
        }}
      >
        {CARDS.map((c) => (
          <ProjectCard key={c.title} {...c} />
        ))}
      </div>
    </div>
  ),
};

export const Mobile: Story = {
  globals: { viewport: { value: "mobile", isRotated: false } },
  render: () => (
    <div style={{ ...wrap, padding: "48px 24px" }}>
      <div style={{ display: "flex", flexDirection: "column", gap: 32 }}>
        {CARDS.map((c) => (
          <ProjectCard key={c.title} {...c} />
        ))}
      </div>
    </div>
  ),
};
