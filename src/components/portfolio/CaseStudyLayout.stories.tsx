import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import CaseStudyLayout, { CaseStudySection } from "./CaseStudyLayout";
import TLDR from "./TLDR";
import NumberedStep from "./NumberedStep";

const meta: Meta<typeof CaseStudyLayout> = {
  title: "Case Study/CaseStudyLayout",
  component: CaseStudyLayout,
  parameters: { layout: "fullscreen" },
};

export default meta;
type Story = StoryObj<typeof CaseStudyLayout>;

const Body = () => (
  <CaseStudyLayout>
    <CaseStudySection>
      <TLDR>
        Designed and shipped a vendor management portal in 90 days, replacing
        six fragmented systems and reducing average vendor onboarding time from
        11 days to 2.
      </TLDR>
    </CaseStudySection>

    <CaseStudySection
      eyebrow="Approach"
      heading="Three layered problems"
      background="bg-bright"
      topRule
    >
      <NumberedStep number="01" title="Anchor the surface around a single question">
        <p style={{ margin: 0 }}>
          Vendors didn&apos;t need more dashboards. They needed to know what was
          waiting on them.
        </p>
      </NumberedStep>
      <NumberedStep number="02" title="Collapse approvals where possible">
        <p style={{ margin: 0 }}>
          Most approvals existed for visibility, not as real gates. Those moved
          to passive review queues.
        </p>
      </NumberedStep>
    </CaseStudySection>
  </CaseStudyLayout>
);

export const Default: Story = { render: () => <Body /> };

export const Desktop: Story = {
  globals: { viewport: { value: "desktop", isRotated: false } },
  render: () => <Body />,
};

export const Tablet: Story = {
  globals: { viewport: { value: "tablet", isRotated: false } },
  render: () => <Body />,
};

export const Mobile: Story = {
  globals: { viewport: { value: "mobile", isRotated: false } },
  render: () => <Body />,
};
