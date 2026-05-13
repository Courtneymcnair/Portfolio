'use client';

import { Layers, GitMerge, Users, Sparkles } from 'lucide-react';
import CaseStudyLayout, { CaseStudySection } from '@/components/portfolio/CaseStudyLayout';
import CaseStudyHero from '@/components/portfolio/CaseStudyHero';
import TLDR from '@/components/portfolio/TLDR';
import IconCardGrid from '@/components/portfolio/IconCardGrid';
import NumberedStep from '@/components/portfolio/NumberedStep';
import ImpactStatusBlock from '@/components/portfolio/ImpactStatusBlock';
import MetaGrid from '@/components/portfolio/MetaGrid';
import Aside from '@/components/portfolio/Aside';
import ExploreMore from '@/components/portfolio/ExploreMore';
import Footer from '@/components/portfolio/Footer';

const exploreProjects = [
  {
    title: 'Open-Access Sign Language Dictionary',
    meta: 'Product Design · Accessibility',
    href: '/work/fsldictionary',
    imageSrc: '/images/thumbnails/fsl.png',
    imageAlt: 'FSL Dictionary thumbnail',
  },
  {
    title: 'Wearable Fitness for Personalized Music',
    meta: 'Product Concept · Wearables',
    href: '/work/spotifyactive',
    imageSrc: '/images/thumbnails/spotify.png',
    imageAlt: 'Spotify Active thumbnail',
  },
];

const proseStyle: React.CSSProperties = {
  fontFamily: 'var(--sans)',
  fontSize: 'clamp(17px, 1.2vw, 19px)',
  lineHeight: 1.65,
  color: 'var(--grey-1)',
  margin: '0 0 20px 0',
  maxWidth: 780,
};

const calloutStyle: React.CSSProperties = {
  ...proseStyle,
  fontWeight: 600,
  color: 'var(--ink)',
};

const bulletListStyle: React.CSSProperties = {
  fontFamily: 'var(--sans)',
  fontSize: 'clamp(16px, 1.1vw, 18px)',
  lineHeight: 1.65,
  color: 'var(--grey-1)',
  margin: '0 0 24px 0',
  maxWidth: 780,
  paddingLeft: 22,
};

function VisualPlaceholder({ caption }: { caption: string }) {
  return (
    <figure
      style={{
        margin: '40px auto 0',
        maxWidth: 1100,
        width: '100%',
      }}
    >
      <div
        style={{
          width: '100%',
          aspectRatio: '16 / 9',
          borderRadius: 'var(--r-md, 12px)',
          background: 'var(--grey-5)',
          border: '1px dashed var(--border-color)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '32px',
          textAlign: 'center',
        }}
      >
        <span
          style={{
            fontFamily: 'var(--mono)',
            fontSize: 12,
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            color: 'var(--grey-2)',
            maxWidth: 560,
          }}
        >
          {caption}
        </span>
      </div>
    </figure>
  );
}

const roleItems = [
  'Product direction',
  'System design',
  'IA and workflows',
  'Discovery synthesis',
  'Front-end requirements',
  'Design QA',
];

const scopeItems = [
  'Two-sided enterprise workflow platform',
  '7 core vendor-facing surfaces',
  'Full work-order-to-invoice lifecycle',
  'Multi-org permissions and compliance workflows',
];

const approachCards = [
  {
    title: 'System-first design',
    icon: Layers,
    body:
      'Defined the bidirectional architecture before moving to screens. Early decisions focused on permissions, lifecycle ownership, and cross-organization workflows.',
  },
  {
    title: 'Tight design–engineering collaboration',
    icon: GitMerge,
    body:
      'Co-led discovery with lead dev. Discovery and implementation progressed in parallel. Flows and interaction models were validated directly against backend and operational constraints.',
  },
  {
    title: 'Cross-functional alignment',
    icon: Users,
    body:
      "Regular design presentations with our client's accounting, finance, and operations teams.",
  },
  {
    title: 'AI-augmented and code-aware',
    icon: Sparkles,
    body:
      'Claude AI, Claude Code, and Figma MCP for early rapid ideation, prototyping directly in our codebase, and including front-end code in handoff.',
  },
];

const portalSurfaces = [
  { label: '01', value: 'Tickets' },
  { label: '02', value: 'Calendar' },
  { label: '03', value: 'Documents' },
  { label: '04', value: 'Billing' },
  { label: '05', value: 'Teams' },
  { label: '06', value: 'Connections' },
  { label: '07', value: 'Settings' },
];

const impactToday = [
  "Defined the operational foundation for Chekhub's vendor workflow expansion",
  'Consolidated fragmented operational workflows into a unified system model',
  'Established a scalable configuration framework supporting domestic and international operations',
  'Aligned product direction, backend architecture, and client workflows ahead of rollout',
  'Design, engineering, and testing progressed in parallel across all sprint phases',
];

export default function ChekhubPage() {
  return (
    <CaseStudyLayout>
      <CaseStudyHero
        category="In active development"
        title="Chekhub Connect — Vendor Portal"
        description="Expanding a mission-critical operations platform into a multi-organization vendor system. 0→1 product connecting dispatch, compliance, execution, and invoicing across organizations. Designed end-to-end as the sole product designer in close partnership with engineering."
        tags={['0→1', 'B2B SaaS', 'Sole Designer']}
        layout="stacked"
        images={[
          {
            src: '/images/thumbnails/chekhub.png',
            alt: 'Chekhub Connect hero composite',
            caption:
              'Hero composite — client dashboard + vendor portal connected by a shared work order',
          },
        ]}
      />

      <CaseStudySection eyebrow="Overview" heading="At a glance">
        <TLDR label="ROLE / SCOPE">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
              gap: 32,
            }}
          >
            <div>
              <h4
                style={{
                  fontFamily: 'var(--mono)',
                  fontSize: 12,
                  letterSpacing: '0.14em',
                  textTransform: 'uppercase',
                  color: 'var(--grey-2)',
                  margin: '0 0 12px 0',
                }}
              >
                Role
              </h4>
              <p
                style={{
                  ...proseStyle,
                  fontSize: 'clamp(15px, 1.05vw, 17px)',
                  margin: '0 0 8px 0',
                }}
              >
                Sole product designer responsible for:
              </p>
              <ul style={{ ...bulletListStyle, marginBottom: 0 }}>
                {roleItems.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
            <div>
              <h4
                style={{
                  fontFamily: 'var(--mono)',
                  fontSize: 12,
                  letterSpacing: '0.14em',
                  textTransform: 'uppercase',
                  color: 'var(--grey-2)',
                  margin: '0 0 12px 0',
                }}
              >
                Scope
              </h4>
              <ul style={{ ...bulletListStyle, marginBottom: 0 }}>
                {scopeItems.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </TLDR>
      </CaseStudySection>

      <CaseStudySection eyebrow="Approach" heading="How I worked" topRule>
        <IconCardGrid items={approachCards} columns={2} />
      </CaseStudySection>

      <CaseStudySection eyebrow="Challenge" heading="From client tool to shared operational system" topRule>
        <p style={proseStyle}>
          Chekhub is a B2B SaaS platform for mission-critical operations teams managing data center
          infrastructure and field service workflows.
        </p>
        <p style={proseStyle}>
          As enterprise clients expanded usage, vendor coordination became the operational gap.
          External vendors were still managed through email, spreadsheets, phone calls, and
          disconnected legacy systems.
        </p>
        <p style={proseStyle}>
          Clients attempted to coordinate vendor dispatch inside their own Chekhub environments,
          but the platform lacked a true cross-organization workflow model. This created several
          operational problems:
        </p>
        <ul style={bulletListStyle}>
          <li>fragmented dispatch coordination</li>
          <li>limited visibility across organizations</li>
          <li>difficult-to-scale compliance management</li>
          <li>disconnected billing and operational records</li>
        </ul>
        <p style={calloutStyle}>
          I led product design to expand Chekhub from a client-side operations platform into a
          shared vendor management system.
        </p>
        <p style={proseStyle}>
          The challenge was not simply building a vendor portal, but designing a shared operational
          system that allowed clients and vendors to collaborate on the same work while
          maintaining:
        </p>
        <ul style={bulletListStyle}>
          <li>scoped permissions</li>
          <li>operational flexibility</li>
          <li>multi-client vendor support</li>
          <li>consistent lifecycle tracking</li>
        </ul>
        <VisualPlaceholder caption="Before/after architecture diagram — isolated orgs → connected orgs sharing tickets, billing, documents" />
      </CaseStudySection>

      <CaseStudySection eyebrow="Process" heading="Product definition" topRule>
        <p style={proseStyle}>
          Multiple enterprise clients were consolidating workflows from multiple legacy systems
          into Chekhub, including:
        </p>
        <ul style={bulletListStyle}>
          <li>dispatch coordination</li>
          <li>SLA tracking</li>
          <li>onboarding</li>
          <li>compliance</li>
          <li>invoicing</li>
          <li>vendor billing</li>
        </ul>
        <p style={proseStyle}>
          Most workflows were directionally aligned, but diverged in critical operational
          details — particularly around international compliance and billing requirements.
        </p>
        <p style={proseStyle}>
          I co-led weekly discovery sessions with the lead developer and client stakeholders to:
        </p>
        <ul style={bulletListStyle}>
          <li>map current operational workflows</li>
          <li>identify system conflicts and edge cases</li>
          <li>define ownership boundaries</li>
          <li>determine which workflows should standardize vs remain configurable</li>
        </ul>
        <p style={calloutStyle}>
          My role was to translate those fragmented workflows into a scalable product model that
          could support multiple organizations without favoring a single client&apos;s existing
          workflow.
        </p>
        <p style={proseStyle}>Key artifacts included:</p>
        <ul style={bulletListStyle}>
          <li>workflow diagrams</li>
          <li>lifecycle mapping</li>
          <li>onboarding and permissions models</li>
          <li>functional requirements</li>
          <li>interactive prototypes</li>
        </ul>
        <Aside label="The signal">
          The product direction and front-end system behavior were primarily defined through this
          process.
        </Aside>
        <VisualPlaceholder caption="Whiteboard / workflow synthesis artifacts → system architecture evolution" />
      </CaseStudySection>

      <CaseStudySection eyebrow="System Design" heading="Five operational decisions" topRule>
        <NumberedStep number="01" title="Per-connection configurability">
          <p style={proseStyle}>
            The core architectural decision was treating each client–vendor relationship as its
            own configurable connection. This allowed the system to support different onboarding
            requirements, domestic vs international workflows, client-specific billing rules,
            varying compliance requirements, and shared vendors across multiple organizations.
          </p>
          <p style={proseStyle}>
            Rather than enforcing a single operational model, the platform standardized the
            framework while allowing flexibility at the relationship layer.
          </p>
          <VisualPlaceholder caption="Same vendor → multiple configurable client relationships" />
        </NumberedStep>

        <NumberedStep number="02" title="Shared work-order model">
          <p style={proseStyle}>
            The work order became the shared operational boundary between organizations. It
            centralized dispatch, SLA tracking, compliance, documentation, billing, and
            permissions — creating a single operational record across both sides of the workflow.
          </p>
          <VisualPlaceholder caption="Vendor ticket connecting to client ticket" />
        </NumberedStep>

        <NumberedStep number="03" title="Distinct operational surfaces">
          <p style={proseStyle}>
            Both sides operated against the same system state, but required different operational
            experiences. The client side focused on operational oversight and configuration; the
            vendor side on execution, dispatch, and multi-client coordination.
          </p>
          <VisualPlaceholder caption="Client view vs vendor view" />
        </NumberedStep>

        <NumberedStep number="04" title="Parallel onboarding">
          <p style={proseStyle}>
            Onboarding requirements existed on both sides of the relationship. The onboarding
            system allowed both sides to contribute requirements, shared progress across
            organizations, and gated activation on mutual completion. This significantly reduced
            fragmented onboarding coordination.
          </p>
          <VisualPlaceholder caption="Documents tab with required compliance docs" />
        </NumberedStep>

        <NumberedStep number="05" title="Multi-client vendor workflows">
          <p style={proseStyle}>
            To avoid portal fragmentation for vendors, work orders consolidated into a unified
            queue, compliance documents could be reused across clients, and global defaults
            supported connection-level overrides. These workflows received particularly strong
            validation during client reviews.
          </p>
          <VisualPlaceholder caption="Unified vendor queue — dashboard with connecting lines to client profile icons" />
        </NumberedStep>
      </CaseStudySection>

      <CaseStudySection eyebrow="Outcome" heading="Shared vendor operations" topRule>
        <p style={proseStyle}>
          The final product expanded Chekhub from a client-only operations platform into a shared
          vendor operations system.
        </p>
        <p style={proseStyle}>The MVP included:</p>
        <ul style={bulletListStyle}>
          <li>configurable client–vendor connections</li>
          <li>dedicated vendor operations portal</li>
          <li>shared dispatch-to-invoice workflows</li>
          <li>parallel onboarding and compliance tracking</li>
          <li>consolidated vendor document management</li>
        </ul>
        <div style={{ margin: '40px 0' }}>
          <h4
            style={{
              fontFamily: 'var(--mono)',
              fontSize: 12,
              letterSpacing: '0.14em',
              textTransform: 'uppercase',
              color: 'var(--grey-2)',
              margin: '0 0 16px 0',
            }}
          >
            Vendor portal surfaces
          </h4>
          <MetaGrid items={portalSurfaces} columns={4} />
        </div>
        <p style={proseStyle}>
          I also produced a detailed functional overview and customer-facing system specification
          used to align stakeholders across product, engineering, operations, and client teams.
        </p>
        <VisualPlaceholder caption="Vendor portal navigation + lifecycle architecture" />
      </CaseStudySection>

      <ImpactStatusBlock
        statusLabel="In active development"
        statusVariant="active"
        today={impactToday}
        comingLabel="Next milestone"
        coming={['Initial production rollout scheduled for June 2026.']}
      />

      <CaseStudySection eyebrow="Reflection" heading="What this taught me" topRule>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: 32,
          }}
        >
          <div>
            <h3
              style={{
                fontFamily: 'var(--display)',
                fontSize: 'clamp(20px, 1.6vw, 24px)',
                fontWeight: 600,
                color: 'var(--ink)',
                margin: '0 0 12px 0',
              }}
            >
              What worked
            </h3>
            <p style={{ ...proseStyle, fontSize: 'clamp(15px, 1.05vw, 17px)' }}>
              The per-connection configuration model prevented the system from becoming
              client-specific while still supporting operational variability. That decision
              became the foundation for scalability across organizations.
            </p>
          </div>
          <div>
            <h3
              style={{
                fontFamily: 'var(--display)',
                fontSize: 'clamp(20px, 1.6vw, 24px)',
                fontWeight: 600,
                color: 'var(--ink)',
                margin: '0 0 12px 0',
              }}
            >
              What I&apos;d improve
            </h3>
            <p style={{ ...proseStyle, fontSize: 'clamp(15px, 1.05vw, 17px)' }}>
              Vendor-side decisions were informed primarily through client and internal
              operational inputs rather than direct vendor interviews. While the underlying system
              model likely remains correct, additional vendor conversations may have improved
              interface-level decisions and operational prioritization.
            </p>
          </div>
          <div>
            <h3
              style={{
                fontFamily: 'var(--display)',
                fontSize: 'clamp(20px, 1.6vw, 24px)',
                fontWeight: 600,
                color: 'var(--ink)',
                margin: '0 0 12px 0',
              }}
            >
              Key takeaway
            </h3>
            <p style={{ ...proseStyle, fontSize: 'clamp(15px, 1.05vw, 17px)' }}>
              &ldquo;Mostly compatible&rdquo; workflows are often more dangerous than completely
              different ones. The complexity emerges at the operational edges, where rigid
              standardization quietly breaks real-world processes.
            </p>
          </div>
        </div>
      </CaseStudySection>

      <ExploreMore projects={exploreProjects} />
      <Footer />
    </CaseStudyLayout>
  );
}
