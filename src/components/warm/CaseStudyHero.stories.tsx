import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import CaseStudyHero from "./CaseStudyHero";

const meta: Meta<typeof CaseStudyHero> = {
  title: "Warm/CaseStudyHero",
  component: CaseStudyHero,
  parameters: { layout: "fullscreen" },
};

export default meta;
type Story = StoryObj<typeof CaseStudyHero>;

const COMMON = {
  caseNumber: "01",
  partnerName: "Chekhub",
  category: "B2B SaaS",
  title: "Vendor portal, end-to-end",
  description:
    "A single coordination surface that retired six fragmented tools and cut vendor onboarding from 11 days to 2.",
  readTime: "8 min read",
  tags: ["Discovery", "IA", "Flow design", "Rollout"],
};

export const Default: Story = { render: () => <CaseStudyHero {...COMMON} /> };

export const SplitTwoImages: Story = {
  render: () => (
    <CaseStudyHero
      {...COMMON}
      images={[
        { src: "/images/thumbnails/chekhub.png", alt: "Product surface — primary" },
        { src: "/images/thumbnails/chekhub.png", alt: "Product surface — secondary" },
      ]}
    />
  ),
};

export const Stacked: Story = {
  render: () => (
    <CaseStudyHero
      {...COMMON}
      layout="stacked"
      images={[
        {
          src: "/images/thumbnails/chekhub.png",
          alt: "Horizontal hero image",
        },
      ]}
    />
  ),
};

export const Desktop: Story = {
  globals: { viewport: { value: "desktop", isRotated: false } },
  render: () => <CaseStudyHero {...COMMON} />,
};

export const Tablet: Story = {
  globals: { viewport: { value: "tablet", isRotated: false } },
  render: () => <CaseStudyHero {...COMMON} />,
};

export const Mobile: Story = {
  globals: { viewport: { value: "mobile", isRotated: false } },
  render: () => <CaseStudyHero {...COMMON} />,
};
