import Image from 'next/image';
import Footer from '@/components/layout/Footer';
import MetaGrid from '@/components/ui/MetaGrid';
import SectionLabel from '@/components/ui/SectionLabel';
import SectionHeading from '@/components/ui/SectionHeading';
import UserGroupCard from '@/components/ui/UserGroupCard';
import JumpButton from '@/components/ui/JumpButton';
import ExploreMore from '@/components/ui/ExploreMore';

const metaItems = [
  { label: 'AFFILIATION', value: 'Accessifiers' },
  {
    label: 'SKILLS',
    value:
      'Information Architecture, Wireframing, User Flows, High-Fidelity Mockups, Style Guide Creation, Accessibility (WCAG)',
  },
  {
    label: 'TEAM',
    value: '4 UX designers, 1 UX Researcher, 3 Developers, Project Manager, Product Owner',
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
        content: 'Learn accurate signs, expand vocabulary, connect with community',
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
        content: 'Communicate with loved ones, support learning, feel included in conversations',
      },
      {
        label: 'PAIN POINTS',
        content: 'Lack of training in FSL, scattered or unreliable resources',
      },
      {
        label: 'PREFERRED INTERACTIONS',
        content: 'Simple navigation, clear visuals, beginner-friendly resources',
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
        content: 'Teach effectively, support inclusive learning, access updated signs',
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
  },
  {
    src: 'https://static.wixstatic.com/media/77affe_a7e13e95144c4e0c82d6194b665eae21~mv2.png',
    alt: 'Home categories screen',
  },
  {
    src: 'https://static.wixstatic.com/media/77affe_95ac557ee9ad4ca9bc43c064388e3be7~mv2.png',
    alt: 'Video thumbnails grid',
  },
  {
    src: 'https://static.wixstatic.com/media/77affe_9b539c0b3d8a402489e0982833a21ed1~mv2.png',
    alt: 'Sign video detail view',
  },
  {
    src: 'https://static.wixstatic.com/media/77affe_431f5badd18b4fe68c4c43e06d500654~mv2.png',
    alt: 'Recording countdown screen',
  },
  {
    src: 'https://static.wixstatic.com/media/77affe_e731b3d5415a4403a27944b2ca7bb7c0~mv2.png',
    alt: 'Video preview and submit',
  },
  {
    src: 'https://static.wixstatic.com/media/77affe_4adb24eeb0e34e55b75214dbc7448d9d~mv2.png',
    alt: 'Create Account form',
  },
];

const exploreProjects = [
  {
    title: 'Spotify Feature Integrating Wearable Fitness Data for Personalized Music',
    meta: 'Product Design | Concept | 2025',
    href: '/work/spotifyactive',
    imageSrc:
      'https://static.wixstatic.com/media/77affe_fdd2b02f59f9497ebbeca4a1865bccd4~mv2.png',
    imageAlt: 'Spotify Active thumbnail',
  },
  {
    title: 'Sole Product Designer for a Data Center Operations Management Platform',
    meta: 'Product Design | B2B SaaS | 2025–Present',
    href: '/work/chekhub',
    imageSrc:
      'https://static.wixstatic.com/media/77affe_80b050f6c37d4040b10bed969e186376~mv2.png',
    imageAlt: 'CheKHub thumbnail',
  },
];

export default function FSLPage() {
  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="bg-brand-off-white pt-[60px]">
        <div className="content-width pt-16 pb-10 flex flex-col md:flex-row md:items-end gap-10">
          <div className="flex-1">
            <SectionLabel>DESIGN FOR ACCESSIBILITY</SectionLabel>
            <h2 className="text-case-hero text-black max-w-2xl">
              Leading UX Design for a Sign Language Video Dictionary
            </h2>
          </div>
          <div className="md:w-[463px] flex-shrink-0">
            <Image
              src="https://static.wixstatic.com/media/77affe_394a63a01f3745b69eb41c06f28ebc89~mv2.png"
              alt="FSL Dictionary app on phones with interpreter"
              width={463}
              height={442}
              className="w-full h-auto"
              priority
              unoptimized
            />
          </div>
        </div>
      </section>

      {/* TL;DR */}
      <section className="bg-white">
        <div className="content-width py-10">
          <SectionLabel>TL;DR</SectionLabel>
          <p className="text-body text-black max-w-3xl mb-6">
            I was the lead UX/UI designer for the Filipino Sign Language (FSL) Dictionary, the
            first open-access sign language video dictionary in the Philippines. The platform was
            created to make communication and learning accessible for Deaf and Hard-of-Hearing
            communities by addressing the lack of accurate, standardized resources. I joined the
            project in the early conceptual stage, where I defined the{' '}
            <strong>information architecture</strong>, designed <strong>user flows</strong>,
            established the <strong>visual system</strong>, and created <strong>wireframes</strong>{' '}
            and <strong>mockups</strong> to guide the team toward an MVP.
          </p>
          <JumpButton href="#final-design" />
        </div>
      </section>

      {/* Meta */}
      <section className="bg-white">
        <div className="content-width">
          <MetaGrid items={metaItems} />
        </div>
      </section>

      {/* Design Challenge + Solution */}
      <section className="bg-white">
        <div className="content-width py-12 border-t border-black/10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div>
              <SectionLabel>DESIGN CHALLENGE</SectionLabel>
              <p className="text-body text-black mt-3">
                Deaf and Hard-of-Hearing communities in the Philippines{' '}
                <strong>
                  lack accessible, standardized sign language resources
                </strong>{' '}
                that reflect regional variations and academic terminology. The team needed to design
                a platform that supports both interpreters and learners.
              </p>
            </div>
            <div>
              <SectionLabel>SOLUTION</SectionLabel>
              <p className="text-body text-black mt-3">
                We designed a mobile-first MVP with core features like{' '}
                <strong>searchable signs</strong>, community voting to ensure{' '}
                <strong>accuracy</strong>, and <strong>streamlined video uploads</strong> for
                interpreters. <strong>Accessibility</strong> was prioritized through WCAG AA
                compliance, low-bandwidth optimization, and support for older devices. The product
                mockups secured buy-in from Deaf organizations and positioned the platform as the
                first open-access Filipino Sign Language dictionary, projected to serve over 1.7
                million users.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* User Groups */}
      <section className="bg-white border-t border-black/10">
        <div className="content-width py-12">
          <SectionLabel>USER GROUPS</SectionLabel>
          <SectionHeading className="mb-4">Understanding the Users</SectionHeading>
          <p className="text-body text-black max-w-3xl mb-10">
            Based on research and community insights gathered by Accessifiers in the Philippines, we
            highlighted three key user groups for the FSL Dictionary: Deaf and hard-of-hearing
            individuals, educators, and families/caregivers. All face challenges due to the lack of
            standardized FSL signs, especially for academic and technology terms, which limits
            access to consistent learning and communication.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {userGroups.map((group) => (
              <UserGroupCard key={group.name} {...group} />
            ))}
          </div>
        </div>
      </section>

      {/* IA & Wireframing */}
      <section className="bg-white border-t border-black/10">
        <div className="content-width py-12">
          <SectionLabel>INFORMATION ARCHITECTURE &amp; WIREFRAMING</SectionLabel>
          <SectionHeading className="mb-4">Laying the Foundation</SectionHeading>
          <p className="text-body text-black max-w-3xl mb-8">
            At the start of the project, I concentrated on defining the information architecture and
            creating wireframes to establish a clear foundation for the product. The goal was to map
            how users would navigate the platform, ensure content could be organized in a logical
            way, and surface the most important features early. This helped the team align on core
            interactions and mobile layouts before progressing into visual design.
          </p>
          <div className="flex flex-col gap-6">
            <div className="relative w-full" style={{ aspectRatio: '954/616' }}>
              <Image
                src="https://static.wixstatic.com/media/77affe_4eac5a03ca8042f388fb06e78e4902bf~mv2.png"
                alt="Information Architecture diagram"
                fill
                className="object-contain"
                unoptimized
              />
            </div>
            <div className="relative w-full" style={{ aspectRatio: '954/1115' }}>
              <Image
                src="https://static.wixstatic.com/media/77affe_4f85a116ce6b4db682f2ddd9c6f3d738~mv2.png"
                alt="Wireframes — part 1"
                fill
                className="object-contain"
                unoptimized
              />
            </div>
            <div className="relative w-full" style={{ aspectRatio: '954/475' }}>
              <Image
                src="https://static.wixstatic.com/media/77affe_2248fb33ac5949a7b2003129a1fe2925~mv2.png"
                alt="Wireframes — part 2"
                fill
                className="object-contain"
                unoptimized
              />
            </div>
          </div>
        </div>
      </section>

      {/* Iterations */}
      <section className="bg-white border-t border-black/10">
        <div className="content-width py-12">
          <SectionLabel>ITERATIONS</SectionLabel>
          <SectionHeading className="mb-4">Refining the Design</SectionHeading>
          <p className="text-body text-black max-w-3xl mb-5">
            During weekly design meetings, I collaborated with the team to refine features in ways
            that balanced fairness, usability, and accessibility:
          </p>
          <ul className="flex flex-col gap-3 text-body text-black max-w-3xl mb-8">
            <li>
              <strong>Voting removed from thumbnails</strong> to prevent snap judgments, ensuring
              users evaluate signs based on content rather than popularity.
            </li>
            <li>
              <strong>Equal-sized thumbnails</strong> introduced to reduce bias toward older
              uploads, specific organizations, or certain interpreters.
            </li>
            <li>
              <strong>Vertical scrolling for video playback</strong> adopted to align with familiar
              mobile patterns and improve ease of use.
            </li>
            <li>
              <strong>Contributor and organization details</strong> moved above the video, with vote
              count and share button placed at the bottom for clear visibility and quick access.
            </li>
          </ul>
          <div className="flex flex-col gap-6">
            <div className="relative w-full" style={{ aspectRatio: '954/429' }}>
              <Image
                src="https://static.wixstatic.com/media/77affe_21fd3c29179a49b4af5272a01e997619~mv2.png"
                alt="Iteration changes — thumbnail layout"
                fill
                className="object-contain"
                unoptimized
              />
            </div>
            <div className="relative w-full" style={{ aspectRatio: '954/435' }}>
              <Image
                src="https://static.wixstatic.com/media/77affe_994eb42d8f4a40cca2defd65a49d702b~mv2.png"
                alt="Iteration changes — video view"
                fill
                className="object-contain"
                unoptimized
              />
            </div>
          </div>
        </div>
      </section>

      {/* Style Guide */}
      <section className="bg-white border-t border-black/10">
        <div className="content-width py-12">
          <SectionLabel>STYLE GUIDE</SectionLabel>
          <SectionHeading className="mb-4">Creating Cohesive Visual Design</SectionHeading>
          <p className="text-body text-black max-w-3xl mb-8">
            As the project moved into high-fidelity design, consistency and scalability became
            critical. I developed a style guide covering typography, color, spacing, stroke, radius,
            shadows, and layout to ensure a unified look and feel. WCAG compliance was built into
            the guide so accessibility stayed central, and I began building a component library to
            streamline collaboration and enable efficient developer handoff.
          </p>
          <div className="relative w-full" style={{ aspectRatio: '954/499' }}>
            <Image
              src="https://static.wixstatic.com/media/77affe_071e5f15a790439a812617970faa6140~mv2.png"
              alt="FSL Dictionary style guide"
              fill
              className="object-contain"
              unoptimized
            />
          </div>
        </div>
      </section>

      {/* High Fidelity Mockups */}
      <section id="final-design" className="bg-white border-t border-black/10">
        <div className="content-width py-12">
          <SectionLabel>HIGH FIDELITY MOCKUPS</SectionLabel>
          <SectionHeading className="mb-4">Bringing the App to Life</SectionHeading>
          <p className="text-body text-black max-w-3xl mb-8">
            Building on the information architecture and wireframes, I created high-fidelity mockups
            to showcase core features and user flows. I explored concepts with AI tools (Stitch, V0,
            Lovable) and refined them in Figma to present key functionality: searching for signs,
            voting on preferred signs, and uploading new videos with minimal steps. These visuals
            were presented by Accessifiers to Deaf organizations, securing cooperation from all six
            targeted groups to contribute sign videos.
          </p>
          <div className="flex flex-wrap gap-4">
            {mockups.map((m) => (
              <div
                key={m.src}
                className="relative flex-shrink-0"
                style={{ width: '232px', height: '424px' }}
              >
                <Image src={m.src} alt={m.alt} fill className="object-contain" unoptimized />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="bg-white border-t border-black/10">
        <div className="content-width py-12">
          <SectionLabel>RESULTS</SectionLabel>
          <ul className="flex flex-col gap-4 mt-4 text-body text-black max-w-3xl">
            <li>
              Secured participation from 6 Deaf organizations, ensuring cultural accuracy and broad
              community buy-in for the dictionary.
            </li>
            <li>
              Established a scalable design system (IA, style guide, and component library), laying
              the groundwork for consistency and faster iteration as the platform grows.
            </li>
            <li>
              Defined MVP-ready user flows that prioritize accessibility while respecting performance
              constraints, making the product feasible to launch and expand.
            </li>
          </ul>
        </div>
      </section>

      {/* Next Steps */}
      <section className="bg-white border-t border-black/10">
        <div className="content-width py-12">
          <SectionLabel>NEXT STEPS</SectionLabel>
          <ul className="flex flex-col gap-4 mt-4 text-body text-black max-w-3xl">
            <li>
              Conduct usability testing with Deaf community members to validate accessibility and
              identify areas for improvement.
            </li>
            <li>
              Evaluate search and upload flows through iterative testing to refine ease of use and
              efficiency.
            </li>
            <li>
              MVP launch for interpreters to begin contributing sign videos and populate the
              dictionary.
            </li>
          </ul>
        </div>
      </section>

      <ExploreMore projects={exploreProjects} />
      <Footer />
    </div>
  );
}
