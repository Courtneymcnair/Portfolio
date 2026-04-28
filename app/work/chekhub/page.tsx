import Image from 'next/image';
import Footer from '@/components/layout/Footer';
import MetaGrid from '@/components/ui/MetaGrid';
import SectionLabel from '@/components/ui/SectionLabel';
import SectionHeading from '@/components/ui/SectionHeading';
import ExploreMore from '@/components/ui/ExploreMore';
import QuoteBlock from '@/components/ui/QuoteBlock';

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
      'https://static.wixstatic.com/media/77affe_74461850a2a8410fbfeef9b7fa3a0735~mv2.png',
    imageAlt: 'FSL Dictionary thumbnail',
  },
  {
    title: 'Spotify Feature Integrating Wearable Fitness Data for Personalized Music',
    meta: 'Product Design | Concept | 2025',
    href: '/work/spotifyactive',
    imageSrc:
      'https://static.wixstatic.com/media/77affe_fdd2b02f59f9497ebbeca4a1865bccd4~mv2.png',
    imageAlt: 'Spotify Active thumbnail',
  },
];

export default function ChekhubPage() {
  return (
    <div className="bg-white">
      {/* Hero — lavender bg */}
      <section className="bg-brand-off-white pt-[60px]">
        <div className="content-width pt-16 pb-10">
          <SectionLabel>Sole Product Designer</SectionLabel>
          <h2 className="text-case-hero text-black mb-4 max-w-2xl">
            Designing Core Experiences of a Data Center Operations Platform
          </h2>
          <p className="text-case-subtitle text-black/70 max-w-xl">
            Shipped complex operational workflows at startup speed while building design
            infrastructure from the ground up.
          </p>
        </div>
        <div className="content-width pb-0 overflow-hidden">
          <div className="relative w-full" style={{ aspectRatio: '1847/628' }}>
            <Image
              src="https://static.wixstatic.com/media/77affe_1361374afdc64495bd6afa07093a671a~mv2.png"
              alt="CheKHub dashboard overview"
              fill
              className="object-cover object-top"
              priority
              unoptimized
            />
          </div>
        </div>
      </section>

      {/* TL;DR — same lavender bg continues */}
      <section className="bg-brand-off-white">
        <div className="content-width py-10">
          <SectionLabel>TL;DR</SectionLabel>
          <p className="text-body text-black max-w-3xl">
            I was hired as the first dedicated product designer at a fast-growing B2B SaaS startup
            serving the data center industry. With near-zero UX maturity, legacy tooling, and
            aggressive timelines, I took full ownership of product design—building design
            infrastructure, shipping complex operational workflows, and collaborating directly with
            customers and developers. I design at startup speed by integrating AI into my workflow,
            cutting design-to-dev cycles while maintaining design rigor.
          </p>
        </div>
      </section>

      {/* Meta grid */}
      <section className="bg-white">
        <div className="content-width py-4">
          <MetaGrid items={metaItems} />
        </div>
      </section>

      {/* Product Context + My Role */}
      <section className="bg-white">
        <div className="content-width py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div>
              <SectionLabel>PRODUCT CONTEXT</SectionLabel>
              <SectionHeading className="mb-4">What is Chekhub?</SectionHeading>
              <p className="text-body text-black">
                Chekhub is an{' '}
                <strong>operations management platform built for data center teams.</strong> It
                centralizes critical workflows like service tickets, technician scheduling, training,
                asset management, and billing into a single system. By replacing fragmented tools
                and spreadsheets, Chekhub gives technicians, managers, and billing staff a unified
                view of daily operations.
              </p>
            </div>
            <div>
              <SectionLabel>MY ROLE</SectionLabel>
              <SectionHeading className="mb-4">Sole Product Designer</SectionHeading>
              <p className="text-body text-black">
                I am the{' '}
                <strong>first dedicated product designer at Chekhub</strong>, owning the{' '}
                <strong>end-to-end design</strong> process across the platform. I collaborate
                directly with the founder/CEO, developers, and customers while establishing
                foundational design workflows and reusable patterns.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* My Process — AI-Augmented Toolkit */}
      <section className="bg-white border-t border-black/10">
        <div className="content-width py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
            <div>
              <SectionLabel>MY PROCESS</SectionLabel>
              <SectionHeading className="mb-4">My AI-Augmented Toolkit</SectionHeading>
              <p className="text-body text-black mb-5">
                As a startup product designer, I built a workflow that moves fast without
                sacrificing rigor.
              </p>
              <ul className="flex flex-col gap-3 text-body text-black mb-5 list-none">
                <li>
                  <strong>Claude AI</strong> helps me scope features and research competitive
                  solutions before designing.
                </li>
                <li>
                  <strong>Claude Code</strong>, connected to our <strong>GitLab</strong> codebase,
                  lets me prototype directly in the product. This allows me to identify reusable
                  components early, validate layouts with real data, and generate dev handoff
                  documentation as I iterate.
                </li>
                <li>
                  I refine visuals in <strong>Figma</strong> and sync changes back to the codebase
                  using the Figma MCP.
                </li>
              </ul>
              <p className="text-body text-black">
                This workflow has reduced the design-to-development cycle from 2–3 weeks to 3–5
                days and <strong>cut development effort by 30–40%.</strong>
              </p>
            </div>
            <div className="relative w-full" style={{ aspectRatio: '806/711' }}>
              <Image
                src="https://static.wixstatic.com/media/77affe_965ae081e9da46668fb39d4fa3250ed9~mv2.png"
                alt="AI toolkit: Figma, Claude, Claude Code, GitLab"
                fill
                className="object-contain"
                unoptimized
              />
            </div>
          </div>
        </div>
      </section>

      {/* Bridge */}
      <section className="bg-white border-t border-black/10">
        <div className="content-width py-12 text-center">
          <p className="text-card-title text-black max-w-2xl mx-auto">
            This workflow supported the design and launch of several core product experiences. Below
            are three key areas I owned:
          </p>
        </div>
      </section>

      {/* KEY PROJECT 01 — Field Service Scheduler */}
      <section className="bg-white border-t border-black/10">
        <div className="content-width py-12">
          <SectionLabel>KEY PROJECT 01</SectionLabel>
          <SectionHeading className="mb-4">Field Service Scheduler</SectionHeading>
          <p className="text-body text-black max-w-3xl mb-8">
            Within my first 30 days, I designed a field service scheduler that helps operations
            managers <strong>assign open tickets more efficiently</strong>. Managers view all active
            work in a calendar grid, click on an open ticket, and receive{' '}
            <strong>intelligent recommendations</strong> based on technician expertise (past work on
            that asset, qualifications), availability (current workload, working hours), and
            proximity to the job site. Recommended time slots appear inline, allowing managers to
            click or drag-and-drop to <strong>schedule instantly.</strong>
          </p>
          <div className="relative w-full mb-10" style={{ aspectRatio: '1902/700' }}>
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
              <ul className="flex flex-col gap-3 text-body text-black mt-3">
                <li>
                  Researched existing field service scheduling software to identify common patterns
                  and opportunities for improvement.
                </li>
                <li>
                  Designed multiple iterations, selecting the strongest elements from each to create
                  the final solution.
                </li>
                <li>
                  Worked within technical constraints: devs built using Mobiscroll (existing tech
                  stack), so I designed around library limitations and reused existing components to
                  reduce dev effort.
                </li>
              </ul>
            </div>
            <div>
              <p className="text-section text-black">
                Saves operations managers an estimated <strong>5–8 hours</strong> per week on
                manual scheduling.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* KEY PROJECT 02 — Billing System */}
      <section className="bg-white border-t border-black/10">
        <div className="content-width py-12">
          <SectionLabel>KEY PROJECT 02</SectionLabel>
          <SectionHeading className="mb-4">Comprehensive Billing System</SectionHeading>
          <p className="text-body text-black max-w-3xl mb-8">
            Co-leading this project with our lead developer, I&apos;m designing a{' '}
            <strong>comprehensive billing system</strong> to eliminate a major customer&apos;s
            dependency on external software. The system includes PRF/PO workflows, vendor payment
            tracking, vouchering, and invoice management—all integrated into Chekhub. The challenge:
            design a system flexible enough to match their existing processes while staying
            consistent with Chekhub&apos;s patterns.
          </p>
          <div className="relative w-full mb-10" style={{ aspectRatio: '959/280' }}>
            <Image
              src="https://static.wixstatic.com/media/77affe_2e4b9b807ad3463aaa485efe04e5efa1~mv2.png"
              alt="Comprehensive Billing System interface"
              fill
              className="object-cover"
              unoptimized
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div>
              <SectionLabel>DESIGN PROCESS &amp; KEY DECISIONS</SectionLabel>
              <ul className="flex flex-col gap-3 text-body text-black mt-3">
                <li>
                  Researched financial workflows and interviewed the customer&apos;s billing team to
                  understand core functionality and user requirements.
                </li>
                <li>
                  Presented mockups to customers and iterated based on real-time feedback.
                </li>
                <li>
                  Designed complex billing UI, consolidated modal structure, built data tables with
                  nested line items and multi-column filters, and created reusable patterns that
                  scale across document types.
                </li>
              </ul>
            </div>
            <div>
              <QuoteBlock
                quote="This is exactly what we needed, you nailed the workflow"
                attribution="— Customer Quote"
              />
            </div>
          </div>
        </div>
      </section>

      {/* KEY PROJECT 03 — Dashboard Redesigns */}
      <section className="bg-white border-t border-black/10">
        <div className="content-width py-12">
          <SectionLabel>KEY PROJECT 03</SectionLabel>
          <SectionHeading className="mb-4">Dashboard Redesigns</SectionHeading>
          <p className="text-body text-black max-w-3xl mb-8">
            Chekhub&apos;s current dashboards for member, team, and site profiles were data dumps
            with no hierarchy or actionable insights. Users couldn&apos;t quickly assess workload,
            identify bottlenecks, or understand asset health at a glance. The goal: reorganize
            profiles to <strong>surface critical information</strong> and make them scannable
            instead of overwhelming.
          </p>
          <div className="relative w-full mb-10" style={{ aspectRatio: '952/438' }}>
            <Image
              src="https://static.wixstatic.com/media/77affe_98c95aa802494ef489e57f371e898a9f~mv2.png"
              alt="Dashboard redesign"
              fill
              className="object-cover"
              unoptimized
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div>
              <SectionLabel>DESIGN PROCESS &amp; KEY DECISIONS</SectionLabel>
              <ul className="flex flex-col gap-3 text-body text-black mt-3">
                <li>
                  Added workload visualization to give managers instant visibility into team
                  capacity and bottlenecks.
                </li>
                <li>
                  Created dedicated &ldquo;Action Items&rdquo; card highlighting overdue tasks,
                  expiring qualifications, and pending approvals—bringing critical tasks to the
                  surface instead of burying them in tables.
                </li>
                <li>
                  Reorganized profile layouts to prioritize high-value metrics (utilization, active
                  tickets, asset health) above granular tables, reusing the existing table component
                  for more detailed views.
                </li>
              </ul>
            </div>
            <div>
              <p className="text-section text-black">
                Improved profile scannability and surfaced actionable data for managers and team
                members.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Takeaways */}
      <section className="bg-white border-t border-black/10">
        <div className="content-width py-12">
          <SectionLabel>EXPERIENCE TAKEAWAYS</SectionLabel>
          <ul className="flex flex-col gap-4 mt-4 text-body text-black max-w-3xl">
            <li>
              Integrated AI into my workflow to design at startup speed without sacrificing quality.
              Balancing design rigor with velocity while navigating technical constraints and
              collaborating closely with developers and customers.
            </li>
            <li>
              Took full ownership of product design in a low-maturity environment. Built design
              infrastructure incrementally while shipping features and didn&apos;t wait for
              permission to improve processes.
            </li>
            <li>
              Embraced iterative design as a strategic choice. At startup speed, shipping core
              functionality fast and refining edge cases during testing is more valuable than trying
              to anticipate every scenario upfront.
            </li>
            <li>
              Learned to collaborate directly with customers and translate messy, real-world needs
              into coherent product features.
            </li>
          </ul>
        </div>
      </section>

      <ExploreMore projects={exploreProjects} />
      <Footer />
    </div>
  );
}
