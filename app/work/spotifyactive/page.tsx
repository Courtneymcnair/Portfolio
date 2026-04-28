import Image from 'next/image';
import Footer from '@/components/layout/Footer';
import MetaGrid from '@/components/ui/MetaGrid';
import SectionLabel from '@/components/ui/SectionLabel';
import SectionHeading from '@/components/ui/SectionHeading';
import JumpButton from '@/components/ui/JumpButton';
import ExploreMore from '@/components/ui/ExploreMore';

// TODO: Fill in meta values once confirmed
const metaItems = [
  { label: 'AFFILIATION', value: 'Concept Project' },
  {
    label: 'SKILLS',
    value:
      'User Research, Trend Analysis, Competitive Analysis, IA, Wireframing, Usability Testing, High-Fidelity Mockups',
  },
  { label: 'TEAM', value: 'Solo Designer' },
  { label: 'TOOLS', value: 'Figma' },
];

const trendCards = [
  {
    iconSrc:
      'https://static.wixstatic.com/media/77affe_e4bd479516a344beac17b590baf9712b~mv2.png',
    iconAlt: 'Headphones',
    // TODO: add stat label + body copy
    label: 'Music & Fitness',
    body: 'A growing number of people use music to enhance their workout performance.',
  },
  {
    iconSrc:
      'https://static.wixstatic.com/media/77affe_45dc5ab2bb424d048c38198a3e6267fa~mv2.png',
    iconAlt: 'Streaming platforms',
    label: 'Streaming Growth',
    body: 'Music streaming platforms have become the primary way people discover and listen to music.',
  },
  {
    iconSrc:
      'https://static.wixstatic.com/media/77affe_c2375261680d4b96a3658bbd1286f88c~mv2.png',
    iconAlt: 'Wearable devices',
    label: 'Wearables Adoption',
    body: 'Wearable fitness devices are increasingly mainstream, creating new opportunities for music-fitness integration.',
  },
];

const userStats = [
  { stat: '88%', insight: 'of respondents say music improves their workout motivation' },
  { stat: '77%', insight: 'want music recommendations tailored to their workout type' },
  { stat: '71%', insight: 'would use a feature that adapts music based on fitness data' },
];

// TODO: add actual quote card copy from user research
const insightCards = [
  { number: '1', theme: 'Motivation', quote: 'Music is what keeps me going when I want to stop.' },
  { number: '2', theme: 'Mood', quote: 'The right song at the right moment changes everything.' },
  { number: '3', theme: 'Variety', quote: "I get bored hearing the same playlist — I need it to adapt." },
  { number: '4', theme: 'Ease of Use', quote: 'I don\'t want to touch my phone mid-workout.' },
];

const beforeAfterImages = [
  {
    src: 'https://static.wixstatic.com/media/77affe_1b0a887dc03c44b88a88b194bc794506~mv2.png',
    alt: 'Before/after — landing page',
    label: 'Landing page',
    // TODO: add description of the change made
    change: 'Simplified onboarding entry point based on usability testing feedback.',
  },
  {
    src: 'https://static.wixstatic.com/media/77affe_72a329e347dd496d89dcdaaa17e6987b~mv2.png',
    alt: 'Before/after — setup screen',
    label: 'Setup screen',
    change: 'Reduced the number of steps in the initial device connection flow.',
  },
  {
    src: 'https://static.wixstatic.com/media/77affe_1c2d917a04044cf8bbf5099b7ce31114~mv2.png',
    alt: 'Before/after — workout screen',
    label: 'Workout screen',
    change: 'Reorganized workout controls to minimize interaction during exercise.',
  },
  {
    src: 'https://static.wixstatic.com/media/77affe_ec331a49cef14148bbf4ffa5837cdd34~mv2.png',
    alt: 'Before/after — workout summary',
    label: 'Workout summary',
    change: 'Added music highlights alongside fitness data in the post-workout recap.',
  },
];

const mockups = [
  {
    src: 'https://static.wixstatic.com/media/77affe_bdf6dd68c9ef4b2c888af5f65e471704~mv2.png',
    alt: 'Spotify Active landing screen',
  },
  {
    src: 'https://static.wixstatic.com/media/77affe_dc898865d2614e3899c1fae9a8c3c7eb~mv2.png',
    alt: 'Setup screen',
  },
  {
    src: 'https://static.wixstatic.com/media/77affe_fcd99931ee4f4771a5889c224983a61a~mv2.png',
    alt: 'Device and activity selection',
  },
  {
    src: 'https://static.wixstatic.com/media/77affe_a58b5bfa2b3b45f7b7315b5de0a029b6~mv2.png',
    alt: 'Workout playback',
  },
  {
    src: 'https://static.wixstatic.com/media/77affe_1fe385a3f92d4f2fb9be123a8ecb3e20~mv2.png',
    alt: 'Motivation Boost from Harry Styles',
  },
  {
    src: 'https://static.wixstatic.com/media/77affe_8afeea65e00646b3a36da01c9e6d1720~mv2.png',
    alt: 'Post-workout summary',
  },
];

// TODO: Add actual heading + description for each key feature
const keyFeatures = [
  {
    label: 'KEY FEATURE 1',
    iconSrc:
      'https://static.wixstatic.com/media/77affe_b98bc529d74c439796e6b1e8e30a3506~mv2.png',
    // TODO: fill heading + body
    heading: 'Adaptive Music Selection',
    body: 'Music recommendations automatically adapt based on your heart rate, workout intensity, and activity type detected by your wearable.',
    screenshots: [
      'https://static.wixstatic.com/media/77affe_4dd1b6628c39498fae0546b505b273b3~mv2.png',
      'https://static.wixstatic.com/media/77affe_ef9a2b91d872469cbd384968dc92e199~mv2.png',
    ],
  },
  {
    label: 'KEY FEATURE 2',
    iconSrc:
      'https://static.wixstatic.com/media/77affe_55c03fdf1ff6461e8ce5f339cc20b5c3~mv2.png',
    heading: 'Activity-Aware Playlists',
    body: 'Playlists are built around your activity type — whether you\'re warming up, in peak effort, or cooling down.',
    screenshots: [
      'https://static.wixstatic.com/media/77affe_5e3b2c316ddc48119b1e383e4a6a65fc~mv2.png',
    ],
  },
  {
    label: 'KEY FEATURE 3',
    iconSrc:
      'https://static.wixstatic.com/media/77affe_c0d42bcdd9a54577ac3036fb57c94482~mv2.png',
    heading: 'Motivation Boosts',
    body: 'At key moments in your workout, Spotify Active serves a high-energy song or artist message to keep you going.',
    screenshots: [],
  },
  {
    label: 'KEY FEATURE 4',
    iconSrc:
      'https://static.wixstatic.com/media/77affe_1653e75c4c89422ba90f52771127070b~mv2.png',
    heading: 'Minimal Mid-Workout Controls',
    body: 'The interface stays out of your way. Glanceable controls on Apple Watch let you skip or adjust without breaking stride.',
    screenshots: [],
  },
  {
    label: 'KEY FEATURE 5',
    iconSrc:
      'https://static.wixstatic.com/media/77affe_442da705c68b4c7ea308f36c2a07396e~mv2.png',
    heading: 'Post-Workout Music Recap',
    body: 'After your workout, see which songs played at your peak intensity and save them to a new playlist.',
    screenshots: [],
  },
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
    title: 'Sole Product Designer for a Data Center Operations Management Platform',
    meta: 'Product Design | B2B SaaS | 2025–Present',
    href: '/work/chekhub',
    imageSrc:
      'https://static.wixstatic.com/media/77affe_80b050f6c37d4040b10bed969e186376~mv2.png',
    imageAlt: 'CheKHub thumbnail',
  },
];

export default function SpotifyActivePage() {
  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="bg-brand-off-white pt-[60px]">
        <div className="content-width pt-16 pb-10 flex flex-col md:flex-row md:items-end gap-10">
          <div className="flex-1">
            {/* TODO: confirm exact H4 subtitle text */}
            <SectionLabel>PRODUCT DESIGN · CONCEPT</SectionLabel>
            <h2 className="text-case-hero text-black max-w-2xl">
              Spotify Active: Integrating Wearable Fitness Data for Personalized Music
            </h2>
          </div>
          <div className="md:w-[463px] flex-shrink-0">
            <Image
              src="https://static.wixstatic.com/media/77affe_4edff4636f9248fe805f83ff5a38b917~mv2.png"
              alt="Spotify Active app on phones"
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
      {/* TODO: add full TL;DR copy */}
      <section className="bg-white">
        <div className="content-width py-10">
          <SectionLabel>TL;DR</SectionLabel>
          <p className="text-body text-black max-w-3xl mb-6">
            Spotify Active is a concept feature that bridges the gap between music streaming and
            fitness tracking. I designed a fully integrated experience that uses wearable data from
            Apple Watch and other devices to intelligently adapt music selection in real time—keeping
            you motivated throughout your entire workout without ever touching your phone.
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

      {/* Design Challenge */}
      {/* TODO: add full copy */}
      <section className="bg-white border-t border-black/10">
        <div className="content-width py-12">
          <SectionLabel>DESIGN CHALLENGE</SectionLabel>
          <SectionHeading className="mb-4">The Problem with Working Out to Music</SectionHeading>
          <p className="text-body text-black max-w-3xl">
            Spotify is the world&apos;s leading music streaming platform, but its workout experience
            is generic. Users manually create static playlists and have no way to connect their
            fitness effort to what they hear. As wearable devices proliferate, there&apos;s a clear
            opportunity to make music adaptive—responding to how hard you&apos;re actually working
            in real time.
          </p>
        </div>
      </section>

      {/* Solution */}
      {/* TODO: add full copy */}
      <section className="bg-white border-t border-black/10">
        <div className="content-width py-12">
          <SectionLabel>SOLUTION</SectionLabel>
          <SectionHeading className="mb-4">Music That Moves With You</SectionHeading>
          <p className="text-body text-black max-w-3xl">
            I designed Spotify Active as a native feature within the Spotify app that connects to
            Apple Watch and fitness wearables to deliver music that adapts to workout intensity,
            provides motivation boosts at critical moments, and gives users a post-workout music
            recap alongside their fitness data.
          </p>
        </div>
      </section>

      {/* Trend Analysis */}
      <section className="bg-white border-t border-black/10">
        <div className="content-width py-12">
          <SectionLabel>TREND ANALYSIS</SectionLabel>
          <SectionHeading className="mb-8">Why Now?</SectionHeading>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {trendCards.map((card) => (
              <div key={card.label} className="flex flex-col gap-4">
                <div className="relative w-[158px] h-[158px]">
                  <Image
                    src={card.iconSrc}
                    alt={card.iconAlt}
                    fill
                    className="object-contain"
                    unoptimized
                  />
                </div>
                <p className="text-overline">{card.label}</p>
                <p className="text-body text-black">{card.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* User Research */}
      <section className="bg-white border-t border-black/10">
        <div className="content-width py-12">
          <SectionLabel>USER RESEARCH</SectionLabel>
          <SectionHeading className="mb-4">What Users Actually Want</SectionHeading>
          <p className="text-body text-black max-w-3xl mb-10">
            I conducted a survey to validate the opportunity and understand how people currently use
            music during exercise, what frustrates them, and what they&apos;d want from an adaptive
            music feature.
          </p>

          {/* Stats */}
          <div className="flex flex-col md:flex-row gap-10 mb-10">
            {userStats.map((s) => (
              <div key={s.stat}>
                <p className="font-satoshi font-bold text-black" style={{ fontSize: 'clamp(32px, 4vw, 34px)', lineHeight: 1 }}>
                  {s.stat}
                </p>
                <p className="text-body text-black mt-2 max-w-[200px]">{s.insight}</p>
              </div>
            ))}
          </div>

          {/* Survey chart */}
          <div className="relative w-full mb-10" style={{ aspectRatio: '810/337' }}>
            <Image
              src="https://static.wixstatic.com/media/77affe_b2eca2f466a44ab0a1aa2a59dce20aa4~mv2.png"
              alt="Survey results bar chart"
              fill
              className="object-contain"
              unoptimized
            />
          </div>

          {/* Insight quote cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {insightCards.map((card) => (
              <div key={card.number} className="bg-brand-card-light rounded-card p-6">
                <p className="text-overline mb-2">{card.number}. {card.theme}</p>
                <p className="text-body text-black">&ldquo;{card.quote}&rdquo;</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Market Analysis */}
      <section className="bg-white border-t border-black/10">
        <div className="content-width py-12">
          <SectionLabel>MARKET ANALYSIS</SectionLabel>
          <SectionHeading className="mb-4">Spotify&apos;s Opportunity</SectionHeading>
          <div className="flex flex-col md:flex-row gap-10 items-start">
            <div className="md:w-[246px] flex-shrink-0">
              <Image
                src="https://static.wixstatic.com/media/77affe_26ddf3ee73064443b7bbe351bc332762~mv2.png"
                alt="Spotify logo"
                width={246}
                height={235}
                className="w-full h-auto"
                unoptimized
              />
            </div>
            <ul className="flex flex-col gap-4 text-body text-black max-w-2xl">
              {/* TODO: add actual bullet copy */}
              <li>
                <strong>Spotify has 600M+ users</strong> but no native fitness-aware music
                experience—a gap that competitors have not meaningfully addressed.
              </li>
              <li>
                <strong>Apple Watch and Fitbit penetration</strong> is high among Spotify&apos;s
                core demographic, making wearable integration technically feasible and commercially
                attractive.
              </li>
              <li>
                <strong>Retention and engagement</strong> are primary growth levers for Spotify;
                workout-linked listening sessions show significantly higher session duration.
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Competitive Analysis */}
      <section className="bg-white border-t border-black/10">
        <div className="content-width py-12">
          <SectionLabel>COMPETITIVE ANALYSIS</SectionLabel>
          <SectionHeading className="mb-4">The Landscape</SectionHeading>
          <p className="text-body text-black max-w-3xl mb-8">
            I mapped the competitive landscape across music apps, fitness platforms, and wearable
            integrations to identify where existing solutions fall short and where Spotify Active
            could differentiate.
          </p>
          <div className="relative w-full mb-8" style={{ aspectRatio: '954/1482' }}>
            <Image
              src="https://static.wixstatic.com/media/77affe_f56767a6eb60497ab1f6911eb4a5faba~mv2.jpg"
              alt="Competitive analysis table"
              fill
              className="object-contain"
              unoptimized
            />
          </div>
        </div>
      </section>

      {/* IA & Wireframing */}
      <section className="bg-white border-t border-black/10">
        <div className="content-width py-12">
          <SectionLabel>INFORMATION ARCHITECTURE &amp; WIREFRAMING</SectionLabel>
          <SectionHeading className="mb-4">Mapping the Experience</SectionHeading>
          <p className="text-body text-black max-w-3xl mb-4">
            I started by mapping the full information architecture of Spotify Active—how it fits
            within the existing Spotify app structure and the new flows required for device
            connection, workout setup, real-time playback, and post-workout recap.
          </p>
          <p className="text-body text-black max-w-3xl mb-8">
            From there, I sketched low-fidelity wireframes to validate key interactions before
            moving into high-fidelity design.
          </p>
          <div className="flex flex-col gap-6">
            <div className="relative w-full" style={{ aspectRatio: '954/1060' }}>
              <Image
                src="https://static.wixstatic.com/media/77affe_ec6d294f8e3a4e87ac3b33ae20afaa2f~mv2.jpg"
                alt="Information Architecture flowchart"
                fill
                className="object-contain"
                unoptimized
              />
            </div>
            <div className="relative w-full" style={{ aspectRatio: '954/596' }}>
              <Image
                src="https://static.wixstatic.com/media/77affe_d4f8dba3f308401f90093ae19886ec21~mv2.jpg"
                alt="Wireframe sketches"
                fill
                className="object-contain"
                unoptimized
              />
            </div>
          </div>
        </div>
      </section>

      {/* Usability Testing */}
      <section className="bg-white border-t border-black/10">
        <div className="content-width py-12">
          <SectionLabel>USABILITY TESTING</SectionLabel>
          <SectionHeading className="mb-4">Testing &amp; Iterating</SectionHeading>
          <p className="text-body text-black max-w-3xl mb-8">
            I conducted usability testing with participants who regularly exercise with music. Based
            on their feedback, I made four key changes before finalizing the design:
          </p>
          <div className="flex flex-col gap-12">
            {beforeAfterImages.map((item, i) => (
              <div key={item.src}>
                <p className="text-overline mb-2">CHANGE {i + 1} — {item.label.toUpperCase()}</p>
                <p className="text-body text-black mb-4">{item.change}</p>
                <div className="relative w-full" style={{ aspectRatio: '954/537' }}>
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    className="object-contain"
                    unoptimized
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* High Fidelity Mockups */}
      <section id="final-design" className="bg-white border-t border-black/10">
        <div className="content-width py-12">
          <SectionLabel>HIGH FIDELITY MOCKUPS</SectionLabel>
          <SectionHeading className="mb-4">Final Design</SectionHeading>
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

      {/* Key Features */}
      {keyFeatures.map((feature) => (
        <section key={feature.label} className="bg-white border-t border-black/10">
          <div className="content-width py-12">
            <SectionLabel>{feature.label}</SectionLabel>
            <div className="flex flex-col md:flex-row gap-10 items-start">
              <div className="flex-1">
                <div className="relative w-[80px] h-[80px] mb-4">
                  <Image
                    src={feature.iconSrc}
                    alt={`${feature.label} icon`}
                    fill
                    className="object-contain"
                    unoptimized
                  />
                </div>
                <SectionHeading className="mb-3">{feature.heading}</SectionHeading>
                <p className="text-body text-black max-w-lg">{feature.body}</p>
              </div>
              {feature.screenshots.length > 0 && (
                <div className="flex gap-4 flex-shrink-0">
                  {feature.screenshots.map((src) => (
                    <div
                      key={src}
                      className="relative flex-shrink-0"
                      style={{ width: '232px', height: '424px' }}
                    >
                      <Image
                        src={src}
                        alt={`${feature.heading} screenshot`}
                        fill
                        className="object-contain"
                        unoptimized
                      />
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </section>
      ))}

      <ExploreMore projects={exploreProjects} />
      <Footer />
    </div>
  );
}
