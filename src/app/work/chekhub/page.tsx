import Image from 'next/image';
import Footer from '@/components/portfolio/Footer';
import MetaGrid from '@/components/portfolio/MetaGrid';
import SectionLabel from '@/components/portfolio/SectionLabel';
import SectionHeading from '@/components/portfolio/SectionHeading';
import ExploreMore from '@/components/portfolio/ExploreMore';

const metaItems = [
  { label: 'AFFILIATION', value: 'Chekhub' },
  {
    label: 'SKILLS',
    value:
      'Research, synthesis, IA, wireframing, prototyping, usability testing, iteration within an existing brand system.',
  },
  { label: 'TEAM', value: 'Sole UX/UI Designer' },
  { label: 'TOOLS', value: 'Figma, Miro, Canva' },
];

const exploreProjects = [
  {
    title: 'Led the Design of an Open-Access Sign Language Video Dictionary',
    meta: 'Product Design | Accessibility | 2025',
    href: '/work/fsldictionary',
    imageSrc:
      'https://static.wixstatic.com/media/77affe_28944738c6174061bdb712f8e5b36d66~mv2.png',
    imageAlt: 'FSL Dictionary thumbnail',
  },
  {
    title:
      'Spotify Feature Integrating Wearable Fitness Data for Personalized Music',
    meta: 'Product Design | Concept | 2025',
    href: '/work/spotifyactive',
    imageSrc:
      'https://static.wixstatic.com/media/77affe_fdd2b02f59f9497ebbeca4a1865bccd4~mv2.png',
    imageAlt: 'Spotify Active thumbnail',
  },
];

function RequestCTA() {
  return (
    <div style={{ textAlign: 'center', marginTop: 40 }}>
      <a
        href="mailto:camcnair@alumni.unc.edu?subject=Case Study Inquiry"
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          padding: '12px 28px',
          borderRadius: 'var(--r-pill)',
          background: 'var(--accent)',
          color: '#fff',
          fontFamily: 'var(--sans)',
          fontSize: 16,
          fontWeight: 500,
          textDecoration: 'none',
          transition: 'opacity 0.2s',
        }}
      >
        Request More Information
      </a>
    </div>
  );
}

function CalloutCard({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div
      style={{
        background: 'var(--paper-warm)',
        borderRadius: 'var(--r-md)',
        padding: '24px 28px',
      }}
    >
      <p
        style={{
          fontFamily: 'var(--mono)',
          fontSize: 11,
          letterSpacing: '0.18em',
          textTransform: 'uppercase',
          color: 'var(--grey-2)',
          marginBottom: 12,
        }}
      >
        {label}
      </p>
      {children}
    </div>
  );
}

export default function ChekhubPage() {
  return (
    <div style={{ background: 'var(--paper)' }}>
      {/* ───── Hero ───── */}
      <section
        style={{
          background: 'var(--paper-warm)',
          paddingTop: 60,
        }}
      >
        <div
          className="content-width"
          style={{
            paddingTop: 64,
            paddingBottom: 40,
            display: 'flex',
            flexDirection: 'column',
            gap: 16,
          }}
        >
          <div style={{ maxWidth: 720 }}>
            <SectionLabel>SOLE PRODUCT DESIGNER</SectionLabel>
            <h2
              style={{
                fontFamily: 'var(--serif)',
                fontWeight: 400,
                fontSize: 'clamp(32px, 5vw, 56px)',
                lineHeight: 1.05,
                letterSpacing: '-0.02em',
                color: 'var(--ink)',
                margin: 0,
              }}
            >
              Designing Core Experiences of a Data Center Operations{' '}
              <em>Platform</em>
            </h2>
            <p
              style={{
                fontFamily: 'var(--sans)',
                fontSize: 17,
                lineHeight: 1.55,
                color: 'var(--grey-1)',
                marginTop: 20,
                maxWidth: 600,
              }}
            >
              Shipping complex operational workflows at startup speed while
              building design infrastructure from the ground up.
            </p>
          </div>
          <div style={{ maxWidth: 900, alignSelf: 'center', marginTop: 16 }}>
            <Image
              src="https://static.wixstatic.com/media/77affe_2ce98ae13b1548abb7eeb18880d96ac5~mv2.png"
              alt="CheKHub dashboard — organization assets and team views with charts"
              width={900}
              height={500}
              style={{ width: '100%', height: 'auto' }}
              priority
              unoptimized
            />
          </div>
        </div>
      </section>

      {/* ───── TL;DR ───── */}
      <section style={{ background: 'var(--paper)' }}>
        <div
          className="content-width"
          style={{ paddingTop: 48, paddingBottom: 40 }}
        >
          <SectionLabel>TL;DR</SectionLabel>
          <p
            style={{
              fontSize: 16,
              lineHeight: 1.65,
              color: 'var(--ink)',
              maxWidth: 720,
            }}
          >
            I was hired as the{' '}
            <strong>first dedicated product designer</strong> at a fast-growing
            B2B SaaS startup serving the data center industry. With near-zero UX
            maturity, legacy tooling, and aggressive timelines, I took full
            ownership of product design&mdash;building design infrastructure,
            shipping complex operational workflows, and collaborating directly
            with customers and developers. I design at startup speed by{' '}
            <strong>integrating AI into my workflow</strong>, cutting
            design-to-dev cycles while maintaining design rigor.
          </p>
        </div>
      </section>

      {/* ───── Meta ───── */}
      <section style={{ background: 'var(--paper)' }}>
        <div className="content-width">
          <MetaGrid items={metaItems} />
        </div>
      </section>

      {/* ───── Product Context + My Role (2-col) ───── */}
      <section
        style={{ background: 'var(--paper)', borderTop: 'var(--hair-2)' }}
      >
        <div
          className="content-width"
          style={{ paddingTop: 48, paddingBottom: 48 }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <SectionLabel>PRODUCT CONTEXT</SectionLabel>
              <SectionHeading className="mb-4">
                What is <em>Chekhub?</em>
              </SectionHeading>
              <p
                style={{
                  fontSize: 15,
                  lineHeight: 1.65,
                  color: 'var(--grey-1)',
                }}
              >
                Chekhub is an{' '}
                <strong>
                  operations management platform built for data center teams.
                </strong>{' '}
                It centralizes critical workflows like service tickets, technician
                scheduling, training, asset management, and billing into a single
                system. By replacing fragmented tools and spreadsheets, Chekhub
                gives technicians, managers, and billing staff a unified view of
                daily operations.
              </p>
            </div>
            <div>
              <SectionLabel>MY ROLE</SectionLabel>
              <SectionHeading className="mb-4">
                Sole Product <em>Designer</em>
              </SectionHeading>
              <p
                style={{
                  fontSize: 15,
                  lineHeight: 1.65,
                  color: 'var(--grey-1)',
                }}
              >
                I am the{' '}
                <strong>first dedicated product designer at Chekhub</strong>,
                owning the <strong>end-to-end design process</strong> across the
                platform. I collaborate directly with the founder/CEO, developers,
                and customers while establishing foundational design workflows and
                reusable patterns.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ───── My Process — AI-Augmented Toolkit ───── */}
      <section
        style={{ background: 'var(--paper)', borderTop: 'var(--hair-2)' }}
      >
        <div
          className="content-width"
          style={{ paddingTop: 48, paddingBottom: 48 }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
            <div>
              <SectionLabel>MY PROCESS</SectionLabel>
              <SectionHeading className="mb-4">
                My AI-Augmented <em>Toolkit</em>
              </SectionHeading>
              <p
                style={{
                  fontSize: 15,
                  lineHeight: 1.65,
                  color: 'var(--grey-1)',
                  marginBottom: 20,
                }}
              >
                As a startup product designer, I built a workflow that moves fast
                without sacrificing rigor.
              </p>
              <ul
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 12,
                  fontSize: 15,
                  lineHeight: 1.6,
                  color: 'var(--grey-1)',
                  listStyle: 'none',
                  padding: 0,
                  marginBottom: 20,
                }}
              >
                <li>
                  <strong>Claude AI</strong> helps me scope features and research
                  competitive solutions before designing.
                </li>
                <li>
                  <strong>Claude Code</strong>, connected to our{' '}
                  <strong>GitLab</strong> codebase, lets me prototype directly in
                  the product. This allows me to integrate reusable components
                  early, validate layouts with real data, and enhance handoff
                  documentation.
                </li>
                <li>
                  I refine visuals in <strong>Figma</strong> and sync changes back
                  to the codebase using the Figma MCP.
                </li>
              </ul>
              <p
                style={{
                  fontSize: 15,
                  lineHeight: 1.65,
                  color: 'var(--grey-1)',
                }}
              >
                This workflow has reduced the design-to-development cycle from
                2&ndash;3 weeks to 3&ndash;5 days and{' '}
                <strong>cut development effort by 30&ndash;40%.</strong>
              </p>
            </div>
            <div
              style={{
                position: 'relative',
                width: '100%',
                aspectRatio: '806/711',
              }}
            >
              <Image
                src="https://static.wixstatic.com/media/77affe_965ae081e9da46668fb39d4fa3250ed9~mv2.png"
                alt="AI toolkit collage: Claude, Claude Code, Figma, GitLab"
                fill
                className="object-contain"
                unoptimized
              />
            </div>
          </div>
        </div>
      </section>

      {/* ───── Transition Headline ───── */}
      <section
        style={{ background: 'var(--paper)', borderTop: 'var(--hair-2)' }}
      >
        <div
          className="content-width"
          style={{ paddingTop: 56, paddingBottom: 56, textAlign: 'center' }}
        >
          <p
            style={{
              fontFamily: 'var(--serif)',
              fontWeight: 400,
              fontSize: 'clamp(20px, 2.5vw, 26px)',
              lineHeight: 1.4,
              color: 'var(--ink)',
              maxWidth: 680,
              margin: '0 auto',
            }}
          >
            This workflow supported the design and launch of several core product
            experiences. Below are three key areas I owned:
          </p>
        </div>
      </section>

      {/* ───── KEY PROJECT 01 — Field Service Scheduler ───── */}
      <section
        style={{ background: 'var(--paper)', borderTop: 'var(--hair-2)' }}
      >
        <div
          className="content-width"
          style={{ paddingTop: 48, paddingBottom: 48 }}
        >
          <SectionLabel>KEY PROJECT 01</SectionLabel>
          <SectionHeading className="mb-4">
            Field Service <em>Scheduler</em>
          </SectionHeading>
          <p
            style={{
              fontSize: 15,
              lineHeight: 1.65,
              color: 'var(--grey-1)',
              maxWidth: 720,
              marginBottom: 32,
            }}
          >
            Within my first 30 days, I designed a field service scheduler that
            helps operations managers{' '}
            <strong>assign open tickets more efficiently</strong>. Managers view
            all active work in a calendar grid, click on an open ticket, and
            receive <strong>intelligent recommendations</strong> based on
            technician expertise (past work on that asset, qualifications),
            availability (current workload, working hours), and proximity to the
            job site. Recommended time slots appear inline, allowing managers to
            click or drag-and-drop to{' '}
            <strong>schedule instantly.</strong>
          </p>
          <div
            style={{
              position: 'relative',
              width: '100%',
              aspectRatio: '1902/700',
              marginBottom: 40,
              background: 'var(--grey-5)',
              borderRadius: 'var(--r-sm)',
            }}
          >
            <Image
              src="https://static.wixstatic.com/media/77affe_16b8c9af079f42dd9c1dcee09eafd2f2~mv2.png"
              alt="Field Service Scheduler interface"
              fill
              className="object-cover"
              unoptimized
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div>
              <SectionLabel>DESIGN PROCESS &amp; KEY DECISIONS</SectionLabel>
              <ul
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 12,
                  fontSize: 15,
                  lineHeight: 1.6,
                  color: 'var(--grey-1)',
                  marginTop: 4,
                }}
              >
                <li>
                  Researched existing field service scheduling software to
                  identify common patterns and opportunities for improvement.
                </li>
                <li>
                  Designed multiple iterations, selecting the strongest elements
                  from each to create the final solution.
                </li>
                <li>
                  Worked within technical constraints: devs built using Mobiscroll
                  (existing tech stack), so I designed around library limitations
                  and reused existing components to reduce dev effort.
                </li>
              </ul>
            </div>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <CalloutCard label="IMPACT">
                <p
                  style={{
                    fontFamily: 'var(--serif)',
                    fontWeight: 400,
                    fontSize: 'clamp(20px, 2.5vw, 26px)',
                    lineHeight: 1.3,
                    color: 'var(--ink)',
                  }}
                >
                  Saves operations managers an estimated{' '}
                  <strong>5&ndash;8 hours</strong> per week on manual scheduling.
                </p>
              </CalloutCard>
            </div>
          </div>
          <RequestCTA />
        </div>
      </section>

      {/* ───── KEY PROJECT 02 — Billing System ───── */}
      <section
        style={{ background: 'var(--paper)', borderTop: 'var(--hair-2)' }}
      >
        <div
          className="content-width"
          style={{ paddingTop: 48, paddingBottom: 48 }}
        >
          <SectionLabel>KEY PROJECT 02</SectionLabel>
          <SectionHeading className="mb-4">
            Comprehensive Billing <em>System</em>
          </SectionHeading>
          <p
            style={{
              fontSize: 15,
              lineHeight: 1.65,
              color: 'var(--grey-1)',
              maxWidth: 720,
              marginBottom: 32,
            }}
          >
            I&apos;m designing a{' '}
            <strong>comprehensive billing system</strong> to eliminate a major
            client&apos;s dependency on external software. The system includes
            PRF/PO workflows, vendor payment tracking, vouchering, and invoice
            management&mdash;all integrated into Chekhub. The challenge: design a
            system flexible enough to match their existing processes while staying
            consistent with Chekhub&apos;s patterns.
          </p>
          <div
            style={{
              position: 'relative',
              width: '100%',
              aspectRatio: '959/280',
              marginBottom: 40,
              background: 'var(--grey-5)',
              borderRadius: 'var(--r-sm)',
            }}
          >
            <Image
              src="https://static.wixstatic.com/media/77affe_9ece0826a47a4286b1943564643d6846~mv2.png"
              alt="Comprehensive Billing System interface"
              fill
              className="object-cover"
              unoptimized
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div>
              <SectionLabel>DESIGN PROCESS &amp; KEY DECISIONS</SectionLabel>
              <ul
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 12,
                  fontSize: 15,
                  lineHeight: 1.6,
                  color: 'var(--grey-1)',
                  marginTop: 4,
                }}
              >
                <li>
                  Researched financial workflows and interviewed the
                  customer&apos;s billing team to understand core functionality
                  and user requirements.
                </li>
                <li>
                  Presented mockups to customers and iterated based on real-time
                  feedback.
                </li>
                <li>
                  Designed complex billing UI, consolidated modal structure, built
                  data tables with nested line items and multi-column filters, and
                  created reusable patterns that scale across document types.
                </li>
              </ul>
            </div>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <CalloutCard label="CLIENT FEEDBACK">
                <p
                  style={{
                    fontFamily: 'var(--serif)',
                    fontWeight: 400,
                    fontSize: 'clamp(20px, 2.5vw, 26px)',
                    lineHeight: 1.3,
                    color: 'var(--ink)',
                  }}
                >
                  &ldquo;This is exactly what we needed,{' '}
                  <strong>you nailed the workflow.</strong>&rdquo;
                </p>
              </CalloutCard>
            </div>
          </div>
          <RequestCTA />
        </div>
      </section>

      {/* ───── KEY PROJECT 03 — Dashboard Redesigns ───── */}
      <section
        style={{ background: 'var(--paper)', borderTop: 'var(--hair-2)' }}
      >
        <div
          className="content-width"
          style={{ paddingTop: 48, paddingBottom: 48 }}
        >
          <SectionLabel>KEY PROJECT 03</SectionLabel>
          <SectionHeading className="mb-4">
            Dashboard <em>Redesigns</em>
          </SectionHeading>
          <p
            style={{
              fontSize: 15,
              lineHeight: 1.65,
              color: 'var(--grey-1)',
              maxWidth: 720,
              marginBottom: 32,
            }}
          >
            Chekhub&apos;s current dashboards for member, team, and site profiles
            were data dumps with no hierarchy or actionable insights. Users
            couldn&apos;t quickly assess workload, identify bottlenecks, or
            understand asset health at a glance. The goal: reorganize profiles to{' '}
            <strong>surface critical information</strong> and make them scannable
            instead of overwhelming.
          </p>
          <div style={{ marginBottom: 40 }}>
            <Image
              src="https://static.wixstatic.com/media/77affe_dfcccdb8064e4b5db49d623caf4360ed~mv2.png"
              alt="Dashboard redesign showing team profiles and workload visualization"
              width={952}
              height={438}
              style={{ width: '100%', height: 'auto' }}
              unoptimized
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div>
              <SectionLabel>DESIGN PROCESS &amp; KEY DECISIONS</SectionLabel>
              <ul
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 12,
                  fontSize: 15,
                  lineHeight: 1.6,
                  color: 'var(--grey-1)',
                  marginTop: 4,
                }}
              >
                <li>
                  Added workload visualization to give managers instant visibility
                  into team capacity and bottlenecks.
                </li>
                <li>
                  Created dedicated &ldquo;Action Items&rdquo; card highlighting
                  overdue tasks, expiring qualifications, and pending
                  approvals&mdash;bringing critical tasks to the surface instead
                  of burying them in tables.
                </li>
                <li>
                  Reorganized profile layouts to prioritize high-value metrics
                  (utilization, active tickets, asset health) above granular
                  tables, reusing the existing table component for more detailed
                  views.
                </li>
              </ul>
            </div>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <CalloutCard label="IMPACT">
                <p
                  style={{
                    fontFamily: 'var(--serif)',
                    fontWeight: 400,
                    fontSize: 'clamp(20px, 2.5vw, 26px)',
                    lineHeight: 1.3,
                    color: 'var(--ink)',
                  }}
                >
                  Improved profile scannability and surfaced{' '}
                  <strong>actionable data</strong> for managers and team members.
                </p>
              </CalloutCard>
            </div>
          </div>
          <RequestCTA />
        </div>
      </section>

      {/* ───── Experience Takeaways ───── */}
      <section
        style={{ background: 'var(--paper)', borderTop: 'var(--hair-2)' }}
      >
        <div
          className="content-width"
          style={{ paddingTop: 48, paddingBottom: 48 }}
        >
          <SectionLabel>EXPERIENCE TAKEAWAYS</SectionLabel>
          <ul
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: 14,
              fontSize: 15,
              lineHeight: 1.65,
              color: 'var(--grey-1)',
              maxWidth: 720,
              marginTop: 4,
            }}
          >
            <li>
              Integrated AI into my workflow to design at startup speed without
              sacrificing quality. Balancing design rigor with velocity while
              navigating technical constraints and collaborating closely with
              developers and customers.
            </li>
            <li>
              Took full ownership of product design in a low-maturity environment.
              Built design infrastructure incrementally while shipping features
              and didn&apos;t wait for permission to improve processes.
            </li>
            <li>
              Embraced iterative design as a strategic choice. At startup speed,
              shipping core functionality fast and refining edge cases during
              testing is more valuable than trying to anticipate every scenario
              upfront.
            </li>
            <li>
              Learned to collaborate directly with customers and translate messy,
              real-world needs into coherent product features.
            </li>
          </ul>
        </div>
      </section>

      <ExploreMore projects={exploreProjects} />
      <Footer />
    </div>
  );
}
