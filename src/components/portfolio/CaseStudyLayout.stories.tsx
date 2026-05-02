import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { Brain, Sparkles, GitBranch, Megaphone } from 'lucide-react';
import CaseStudyLayout, { CaseStudySection } from './CaseStudyLayout';
import CaseStudyHero from './CaseStudyHero';
import HeroComposite from './HeroComposite';
import HookCallout from './HookCallout';
import IconCardGrid from './IconCardGrid';
import NumberedStep from './NumberedStep';
import PrincipleList from './PrincipleList';
import Aside from './Aside';
import Figure from './Figure';
import ImpactStatusBlock from './ImpactStatusBlock';

const meta = {
  title: 'Case Study/CaseStudyLayout',
  component: CaseStudyLayout,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component:
          'Top-level wrapper for any case study page. Provides the paper background, top padding for the fixed Navbar, and full-height min. Use the named export `CaseStudySection` for any section inside it — handles consistent gutter, eyebrow, heading, and background variant.',
      },
    },
  },
} satisfies Meta<typeof CaseStudyLayout>;

export default meta;
type Story = StoryObj<typeof meta>;

const desktop = { value: 'desktop', isRotated: false };
const tablet = { value: 'tablet', isRotated: false };
const mobile = { value: 'mobile', isRotated: false };

export const Desktop: Story = {
  globals: { viewport: desktop },
  args: {
    children: <FullVendorPortalDemo />,
  },
};

export const Tablet: Story = {
  globals: { viewport: tablet },
  args: {
    children: <FullVendorPortalDemo />,
  },
};

export const Mobile: Story = {
  globals: { viewport: mobile },
  args: {
    children: <FullVendorPortalDemo />,
  },
};

function FullVendorPortalDemo() {
  return (
    <>
      <CaseStudyHero
        partnerName="Chekhub Connect"
        projectType="B2B SaaS · Vendor Portal"
        title="Architecting a two-sided system where clients and their external vendors do business inside the same product."
        subtitle="A net-new bidirectional product spanning the client and vendor sides of a B2B service relationship — dispatch, compliance, execution, and invoicing all flowing through a single shared ticket."
        description="Designed end-to-end as the sole product designer, in close collaboration with our lead developer."
        tags={['0→1', 'System Design', 'B2B SaaS', 'Sole Designer']}
        statusLabel="In active development"
        statusVariant="active"
        visual={
          <HeroComposite
            left={{ src: '/images/thumbnails/chekhub.png', alt: 'Client side', label: 'Client' }}
            right={{ src: '/images/thumbnails/chekhub.png', alt: 'Vendor portal', label: 'Vendor' }}
            ticketLabel="TICKET #1042"
          />
        }
      />

      <CaseStudySection eyebrow="The hook" topRule>
        <HookCallout label="The hook">
          This wasn&apos;t a feature added to an existing product. It was a net-new product capability, scoped without
          a defined PRD, designed to serve multiple enterprise clients with related but non-identical requirements.
        </HookCallout>
      </CaseStudySection>

      <CaseStudySection eyebrow="How I worked" heading="Four principles that shaped the work" background="paper-warm" topRule>
        <IconCardGrid
          items={[
            {
              icon: Brain,
              title: 'I think in systems before screens',
              body: 'Diagrammed the bidirectional flow before designing screens. On 0→1 work, the architecture is the design.',
            },
            {
              icon: Sparkles,
              title: 'I work AI-augmented and code-aware',
              body: 'Claude for synthesis. Claude Code to prototype in our codebase. Figma MCP to run designs locally with developers.',
            },
            {
              icon: GitBranch,
              title: 'I collaborate with engineering as a peer',
              body: 'Co-led discovery with the lead dev. Sequenced the build in parallel rails, not handoff.',
            },
            {
              icon: Megaphone,
              title: 'I communicate the work to non-design stakeholders',
              body: 'Weekly presentations to accounting, finance, and operations. Authored an 18-page functional overview.',
            },
          ]}
        />
      </CaseStudySection>

      <CaseStudySection eyebrow="Process" heading="From discovery to demo, six steps" topRule>
        <NumberedStep number="01" title="The pivotal architectural decision: configurable per-connection">
          <p>
            The two clients had <strong>mostly compatible</strong> needs. That&apos;s the trap. Optimize for one, the
            other becomes a second-class case. Unify around an average, neither client gets what they want.
          </p>
          <p style={{ marginTop: 16 }}>
            <strong>The structural choice:</strong> every connection between a client and a vendor is its own
            configuration.
          </p>
          <Aside label="Honest reflection">
            I won&apos;t claim I saw this from day one. It crystallized over discovery.
          </Aside>
        </NumberedStep>

        <NumberedStep number="02" title="The two-sided interaction model">
          <PrincipleList
            items={[
              {
                lead: 'The ticket as the boundary.',
                body: 'SLA, dispatch, compliance, billing all attach to the ticket. One shared object, scoped permissions.',
              },
              {
                lead: 'Mirrored but distinct surfaces.',
                body: 'Client manages through a Portal tab. Vendor gets a dedicated portal organized around their day-to-day.',
              },
              {
                lead: 'Parallel onboarding, not sequential.',
                body: 'Both checklists, one view, shared progress. Activation gates on both completing.',
              },
            ]}
          />
          <div style={{ marginTop: 32 }}>
            <Figure
              src="/images/thumbnails/chekhub.png"
              alt="Side-by-side client vs vendor view"
              caption="Fig. 02 — Same data, different operational lens"
              width="content"
            />
          </div>
        </NumberedStep>
      </CaseStudySection>

      <CaseStudySection eyebrow="Impact" heading="What this proves before the metrics arrive" background="paper-warm" topRule>
        <ImpactStatusBlock
          statusLabel="In active development"
          statusVariant="active"
          today={[
            'Full design scoping and front-end product architecture locked for demo build',
            'Functional overview document delivered to stakeholders ahead of demo',
            'Build phases sequenced collaboratively with the lead developer',
          ]}
          coming={[
            'Demo to client end of May 2026',
            'First production use expected mid-late June 2026',
            'Adoption metrics and qualitative feedback over the following 6–8 weeks',
          ]}
          futureNote="This section will be updated with real shipped metrics as data arrives."
        />
      </CaseStudySection>
    </>
  );
}
