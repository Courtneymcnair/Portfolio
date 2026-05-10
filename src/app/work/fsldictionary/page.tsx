import Image from 'next/image';
import Footer from '@/components/portfolio/Footer';
import MetaGrid from '@/components/portfolio/MetaGrid';
import SectionLabel from '@/components/portfolio/SectionLabel';
import SectionHeading from '@/components/portfolio/SectionHeading';
import UserGroupCard from '@/components/portfolio/UserGroupCard';
import JumpButton from '@/components/portfolio/JumpButton';
import ExploreMore from '@/components/portfolio/ExploreMore';

const metaItems = [
  { label: 'AFFILIATION', value: 'Accessifiers' },
  {
    label: 'SKILLS',
    value:
      'Information Architecture, Wireframing, User Flows, High-Fidelity Mockups, Style Guide Creation, Accessibility (WCAG)',
  },
  {
    label: 'TEAM',
    value:
      '4 UX designers, 1 UX Researcher, 3 Developers, Project Manager, Product Owner',
  },
  { label: 'TOOLS', value: 'Figma, Miro, Lovable, V0, Slack' },
];

const userGroups = [
  {
    iconSrc:
      'https://static.wixstatic.com/media/77affe_b882d4e24b4a4125b14592d5c23d86f5~mv2.png',
    iconAlt: 'Deaf and Hard-of-Hearing icon',
    name: 'Deaf & Hard-of-Hearing Individuals',
    sections: [
      {
        label: 'MOTIVATIONS',
        content:
          'Learn accurate signs, expand vocabulary, connect with community',
      },
      {
        label: 'PAIN POINTS',
        content:
          'Limited standardized signs, inconsistent resources, exclusion in academic/tech contexts',
      },
      {
        label: 'PREFERRED INTERACTIONS',
        content: 'Quick search, video-based learning, community validation',
      },
    ],
  },
  {
    iconSrc:
      'https://static.wixstatic.com/media/77affe_66cd172d0d8e4a3d97a7fb4976b769be~mv2.png',
    iconAlt: 'Families and caregivers icon',
    name: 'Families & Caregivers',
    sections: [
      {
        label: 'MOTIVATIONS',
        content:
          'Communicate with loved ones, support learning, feel included in conversations',
      },
      {
        label: 'PAIN POINTS',
        content: 'Lack of training in FSL, scattered or unreliable resources',
      },
      {
        label: 'PREFERRED INTERACTIONS',
        content:
          'Simple navigation, clear visuals, beginner-friendly resources',
      },
    ],
  },
  {
    iconSrc:
      'https://static.wixstatic.com/media/77affe_4248cf377cd84a239cd4dae59d450145~mv2.png',
    iconAlt: 'Educators icon',
    name: 'Educators',
    sections: [
      {
        label: 'MOTIVATIONS',
        content:
          'Teach effectively, support inclusive learning, access updated signs',
      },
      {
        label: 'PAIN POINTS',
        content:
          'No standard references, difficulty explaining technical terms, fragmented materials',
      },
      {
        label: 'PREFERRED INTERACTIONS',
        content: 'Structured categories, reliable sign accuracy',
      },
    ],
  },
];

const mockups = [
  {
    src: 'https://static.wixstatic.com/media/77affe_497a210d84b348eba2c1a51863e32563~mv2.png',
    alt: 'Splash screen — Start Exploring',
    caption:
      'Open-access FSL Dictionary: explore signs instantly, no account required.',
  },
  {
    src: 'https://static.wixstatic.com/media/77affe_a7e13e95144c4e0c82d6194b665eae21~mv2.png',
    alt: 'Home categories screen',
    caption: 'Browse signs by category with clear, visual icons.',
  },
  {
    src: 'https://static.wixstatic.com/media/77affe_95ac557ee9ad4ca9bc43c064388e3be7~mv2.png',
    alt: 'Grid view of sign variants',
    caption: 'Grid view of sign variants with visible vote counts.',
  },
  {
    src: 'https://static.wixstatic.com/media/77affe_9b539c0b3d8a402489e0982833a21ed1~mv2.png',
    alt: 'Sign video detail view',
    caption:
      'View a sign with contributor info, related words, and "I use this sign" feedback.',
  },
  {
    src: 'https://static.wixstatic.com/media/77affe_431f5badd18b4fe68c4c43e06d500654~mv2.png',
    alt: 'Recording countdown screen',
    caption: 'Recording screen with countdown and framing guide.',
  },
  {
    src: 'https://static.wixstatic.com/media/77affe_e731b3d5415a4403a27944b2ca7bb7c0~mv2.png',
    alt: 'Video preview and submit',
    caption:
      'Contributors review, edit, or retake before submitting a sign.',
  },
  {
    src: 'https://static.wixstatic.com/media/77affe_4adb24eeb0e34e55b75214dbc7448d9d~mv2.png',
    alt: 'Create Account form',
    caption:
      'Simple sign-up with name, phone, and password. Profile photo optional.',
  },
];

const exploreProjects = [
  {
    title:
      'Spotify Feature Integrating Wearable Fitness Data for Personalized Music',
    meta: 'Product Design | Concept | 2025',
    href: '/work/spotifyactive',
    imageSrc:
      'https://static.wixstatic.com/media/77affe_fdd2b02f59f9497ebbeca4a1865bccd4~mv2.png',
    imageAlt: 'Spotify Active thumbnail',
  },
  {
    title:
      'Sole Product Designer for a Data Center Operations Management Platform',
    meta: 'Product Design | B2B SaaS | 2025\u2013Present',
    href: '/work/chekhub',
    imageSrc:
      'https://static.wixstatic.com/media/77affe_80b050f6c37d4040b10bed969e186376~mv2.png',
    imageAlt: 'CheKHub thumbnail',
  },
];

export default function FSLPage() {
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
            gap: 40,
          }}
        >
          <div style={{ maxWidth: 720 }}>
            <SectionLabel>DESIGN FOR ACCESSIBILITY</SectionLabel>
            <h2
              style={{
                fontFamily: 'var(--display)',
                fontWeight: 500,
                fontSize: 'clamp(32px, 5vw, 56px)',
                lineHeight: 1.05,
                letterSpacing: '-0.02em',
                color: 'var(--ink)',
                margin: 0,
              }}
            >
              Leading UX Design for a Sign Language Video{' '}
              <em>Dictionary</em>
            </h2>
          </div>
          <div style={{ maxWidth: 700, alignSelf: 'center' }}>
            <Image
              src="https://static.wixstatic.com/media/77affe_394a63a01f3745b69eb41c06f28ebc89~mv2.png"
              alt="FSL Dictionary app on phones — home categories and sign video detail"
              width={700}
              height={669}
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
              marginBottom: 24,
            }}
          >
            I was the{' '}
            <strong>
              lead UX/UI designer for the Filipino Sign Language (FSL) Dictionary
            </strong>
            , the first open-access sign language video dictionary in the
            Philippines. The platform was created to make communication and learning
            accessible for Deaf and Hard-of-Hearing communities by addressing the
            lack of accurate, standardized resources. I joined the project in the
            early conceptual stage, where I defined the{' '}
            <strong>information architecture</strong>, designed{' '}
            <strong>user flows</strong>, established the{' '}
            <strong>visual system</strong>, and created{' '}
            <strong>wireframes</strong> and <strong>mockups</strong> to guide the
            team toward an MVP.
          </p>
          <JumpButton href="#final-design" />
        </div>
      </section>

      {/* ───── Meta ───── */}
      <section style={{ background: 'var(--paper)' }}>
        <div className="content-width">
          <MetaGrid items={metaItems} />
        </div>
      </section>

      {/* ───── Design Challenge + Solution (2-col, no H3s) ───── */}
      <section
        style={{ background: 'var(--paper)', borderTop: 'var(--hair-2)' }}
      >
        <div
          className="content-width"
          style={{ paddingTop: 48, paddingBottom: 48 }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <SectionLabel>DESIGN CHALLENGE</SectionLabel>
              <p
                style={{
                  fontSize: 15,
                  lineHeight: 1.65,
                  color: 'var(--grey-1)',
                  marginTop: 4,
                }}
              >
                Deaf and Hard-of-Hearing communities in the Philippines{' '}
                <strong>
                  lack accessible, standardized sign language resources
                </strong>{' '}
                that reflect regional variations and academic terminology. The team
                needed to design a platform that supports both interpreters and
                learners.
              </p>
            </div>
            <div>
              <SectionLabel>SOLUTION</SectionLabel>
              <p
                style={{
                  fontSize: 15,
                  lineHeight: 1.65,
                  color: 'var(--grey-1)',
                  marginTop: 4,
                }}
              >
                We designed a mobile-first MVP with core features like{' '}
                <strong>searchable signs</strong>, community voting to ensure{' '}
                <strong>accuracy</strong>, and{' '}
                <strong>streamlined video uploads</strong> for interpreters.{' '}
                <strong>Accessibility</strong> was prioritized through WCAG AA
                compliance, low-bandwidth optimization, and support for older
                devices. The product mockups secured buy-in from Deaf organizations
                and positioned the platform as the first open-access Filipino Sign
                Language dictionary, projected to serve over 1.7 million users.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ───── Tablet Mockup Image ───── */}
      <section style={{ background: 'var(--paper)' }}>
        <div className="content-width" style={{ paddingBottom: 16 }}>
          <div
            style={{
              position: 'relative',
              width: '100%',
              aspectRatio: '16/9',
            }}
          >
            <Image
              src="https://static.wixstatic.com/media/77affe_7832541c0a584ed8bbddec24a3f34728~mv2.png"
              alt="FSL Dictionary tablet mockup showing multiple app screens"
              fill
              className="object-contain"
              unoptimized
            />
          </div>
        </div>
      </section>

      {/* ───── Mobile Preview Image ───── */}
      <section style={{ background: 'var(--paper)' }}>
        <div className="content-width" style={{ paddingBottom: 16 }}>
          <div
            style={{
              position: 'relative',
              width: '100%',
              aspectRatio: '16/9',
            }}
          >
            <Image
              src="https://static.wixstatic.com/media/77affe_ce269e74d1014017b1fdf47b9b0785dd~mv2.png"
              alt="FSL Dictionary mobile preview screens"
              fill
              className="object-contain"
              unoptimized
            />
          </div>
        </div>
      </section>

      {/* ───── User Groups (Personas) ───── */}
      <section
        style={{ background: 'var(--paper)', borderTop: 'var(--hair-2)' }}
      >
        <div
          className="content-width"
          style={{ paddingTop: 48, paddingBottom: 48 }}
        >
          <SectionLabel>USER GROUPS</SectionLabel>
          <SectionHeading className="mb-4">
            Understanding the <em>Users</em>
          </SectionHeading>
          <p
            style={{
              fontSize: 15,
              lineHeight: 1.65,
              color: 'var(--grey-1)',
              maxWidth: 720,
              marginBottom: 40,
            }}
          >
            Based on research and community insights gathered by Accessifiers in
            the Philippines, we highlighted three key user groups for the FSL
            Dictionary: Deaf and hard-of-hearing individuals, educators, and
            families/caregivers. All face challenges due to the lack of
            standardized FSL signs, especially for academic and technology terms,
            which limits access to consistent learning and communication.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {userGroups.map((group) => (
              <UserGroupCard key={group.name} {...group} />
            ))}
          </div>
        </div>
      </section>

      {/* ───── IA & Wireframing ───── */}
      <section
        style={{ background: 'var(--paper)', borderTop: 'var(--hair-2)' }}
      >
        <div
          className="content-width"
          style={{ paddingTop: 48, paddingBottom: 48 }}
        >
          <SectionLabel>
            INFORMATION ARCHITECTURE &amp; WIREFRAMING
          </SectionLabel>
          <SectionHeading className="mb-4">
            Laying the <em>Foundation</em>
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
            At the start of the project, I concentrated on defining the
            information architecture and creating wireframes to establish a clear
            foundation for the product. The goal was to map how users would
            navigate the platform, ensure content could be organized in a logical
            way, and surface the most important features early. This helped the
            team align on core interactions and mobile layouts before progressing
            into visual design.
          </p>
          <div
            style={{ display: 'flex', flexDirection: 'column', gap: 24 }}
          >
            <div
              style={{
                position: 'relative',
                width: '100%',
                aspectRatio: '954/616',
              }}
            >
              <Image
                src="https://static.wixstatic.com/media/77affe_4eac5a03ca8042f388fb06e78e4902bf~mv2.png"
                alt="Information Architecture diagram"
                fill
                className="object-contain"
                unoptimized
              />
            </div>
            <div
              style={{
                position: 'relative',
                width: '100%',
                aspectRatio: '954/1115',
              }}
            >
              <Image
                src="https://static.wixstatic.com/media/77affe_4f85a116ce6b4db682f2ddd9c6f3d738~mv2.png"
                alt="Wireframes — contributor profile to sign variants with annotations"
                fill
                className="object-contain"
                unoptimized
              />
            </div>
            <div
              style={{
                position: 'relative',
                width: '100%',
                aspectRatio: '954/475',
              }}
            >
              <Image
                src="https://static.wixstatic.com/media/77affe_2248fb33ac5949a7b2003129a1fe2925~mv2.png"
                alt="Wireframes — search results, sign variants, contributor profiles, login prompts"
                fill
                className="object-contain"
                unoptimized
              />
            </div>
          </div>
        </div>
      </section>

      {/* ───── Iterations ───── */}
      <section
        style={{ background: 'var(--paper)', borderTop: 'var(--hair-2)' }}
      >
        <div
          className="content-width"
          style={{ paddingTop: 48, paddingBottom: 48 }}
        >
          <SectionLabel>ITERATIONS</SectionLabel>
          <SectionHeading className="mb-4">
            Refining the <em>Design</em>
          </SectionHeading>
          <p
            style={{
              fontSize: 15,
              lineHeight: 1.65,
              color: 'var(--grey-1)',
              maxWidth: 720,
              marginBottom: 20,
            }}
          >
            During weekly design meetings, I collaborated with the team to refine
            features in ways that balanced fairness, usability, and accessibility:
          </p>
          <ul
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: 12,
              fontSize: 15,
              lineHeight: 1.6,
              color: 'var(--grey-1)',
              maxWidth: 720,
              marginBottom: 32,
            }}
          >
            <li>
              <strong>Voting removed from thumbnails</strong> to prevent snap
              judgments, ensuring users evaluate signs based on content rather than
              popularity.
            </li>
            <li>
              <strong>Equal-sized thumbnails</strong> introduced to reduce bias
              toward older uploads, specific organizations, or certain
              interpreters.
            </li>
            <li>
              <strong>Vertical scrolling for video playback</strong> adopted to
              align with familiar mobile patterns and improve ease of use.
            </li>
            <li>
              <strong>Contributor and organization details</strong> moved above
              the video, with vote count and share button placed at the bottom for
              clear visibility and quick access.
            </li>
          </ul>
          <div
            style={{ display: 'flex', flexDirection: 'column', gap: 24 }}
          >
            <div
              style={{
                position: 'relative',
                width: '100%',
                aspectRatio: '954/429',
              }}
            >
              <Image
                src="https://static.wixstatic.com/media/77affe_21fd3c29179a49b4af5272a01e997619~mv2.png"
                alt="Iteration — thumbnail evolution: voting on thumbnails to equal-sized grid"
                fill
                className="object-contain"
                unoptimized
              />
            </div>
            <div
              style={{
                position: 'relative',
                width: '100%',
                aspectRatio: '954/435',
              }}
            >
              <Image
                src="https://static.wixstatic.com/media/77affe_994eb42d8f4a40cca2defd65a49d702b~mv2.png"
                alt="Iteration — video viewing evolution: horizontal to vertical scroll with refined layout"
                fill
                className="object-contain"
                unoptimized
              />
            </div>
          </div>
        </div>
      </section>

      {/* ───── Style Guide ───── */}
      <section
        style={{ background: 'var(--paper)', borderTop: 'var(--hair-2)' }}
      >
        <div
          className="content-width"
          style={{ paddingTop: 48, paddingBottom: 48 }}
        >
          <SectionLabel>STYLE GUIDE</SectionLabel>
          <SectionHeading className="mb-4">
            Creating Cohesive Visual <em>Design</em>
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
            As the project moved into high-fidelity design, consistency and
            scalability became critical. I developed a style guide covering
            typography, color, spacing, stroke, radius, shadows, and layout to
            ensure a unified look and feel. WCAG compliance was built into the
            guide so accessibility stayed central, and I began building a component
            library to streamline collaboration and enable efficient developer
            handoff.
          </p>
          <div
            style={{
              position: 'relative',
              width: '100%',
              aspectRatio: '954/499',
            }}
          >
            <Image
              src="https://static.wixstatic.com/media/77affe_071e5f15a790439a812617970faa6140~mv2.png"
              alt="FSL Dictionary style guide — typography, color, spacing, radius, shadows, WCAG"
              fill
              className="object-contain"
              unoptimized
            />
          </div>
        </div>
      </section>

      {/* ───── High Fidelity Mockups (Carousel) ───── */}
      <section
        id="final-design"
        style={{ background: 'var(--paper)', borderTop: 'var(--hair-2)' }}
      >
        <div
          className="content-width"
          style={{ paddingTop: 48, paddingBottom: 48 }}
        >
          <SectionLabel>HIGH FIDELITY MOCKUPS</SectionLabel>
          <SectionHeading className="mb-4">
            Bringing the App to <em>Life</em>
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
            Building on the information architecture and wireframes, I created
            high-fidelity mockups to showcase core features and user flows. I
            explored concepts with AI tools (Stitch, V0, Lovable) and refined them
            in Figma to present key functionality: searching for signs, voting on
            preferred signs, and uploading new videos with minimal steps. These
            visuals were presented by Accessifiers to Deaf organizations, securing
            cooperation from all six targeted groups to contribute sign videos.
          </p>
          <div
            style={{
              display: 'flex',
              gap: 24,
              overflowX: 'auto',
              scrollSnapType: 'x mandatory',
              paddingBottom: 16,
            }}
          >
            {mockups.map((m) => (
              <div
                key={m.src}
                style={{
                  flexShrink: 0,
                  scrollSnapAlign: 'start',
                  width: 280,
                }}
              >
                <div
                  style={{
                    position: 'relative',
                    width: 280,
                    height: 500,
                  }}
                >
                  <Image
                    src={m.src}
                    alt={m.alt}
                    fill
                    className="object-contain"
                    unoptimized
                  />
                </div>
                <p
                  style={{
                    fontFamily: 'var(--sans)',
                    fontSize: 13,
                    lineHeight: 1.4,
                    color: 'var(--grey-2)',
                    marginTop: 10,
                    textAlign: 'center',
                  }}
                >
                  {m.caption}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ───── Results & Next Steps (2-col) ───── */}
      <section
        style={{ background: 'var(--paper)', borderTop: 'var(--hair-2)' }}
      >
        <div
          className="content-width"
          style={{ paddingTop: 48, paddingBottom: 48 }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <SectionLabel>RESULTS</SectionLabel>
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
                  Secured participation from 6 Deaf organizations, ensuring
                  cultural accuracy and broad community buy-in for the dictionary.
                </li>
                <li>
                  Established a scalable design system (IA, style guide, and
                  component library), laying the groundwork for consistency and
                  faster iteration as the platform grows.
                </li>
                <li>
                  Defined MVP-ready user flows that prioritize accessibility while
                  respecting performance constraints, making the product feasible
                  to launch and expand.
                </li>
              </ul>
            </div>
            <div>
              <SectionLabel>NEXT STEPS</SectionLabel>
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
                  Conduct usability testing with Deaf community members to
                  validate accessibility and identify areas for improvement.
                </li>
                <li>
                  Evaluate search and upload flows through iterative testing to
                  refine ease of use and efficiency.
                </li>
                <li>
                  MVP launch for interpreters to begin contributing sign videos
                  and populate the dictionary.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <ExploreMore projects={exploreProjects} />
      <Footer />
    </div>
  );
}
