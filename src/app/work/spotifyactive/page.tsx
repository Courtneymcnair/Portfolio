import Image from 'next/image';
import Footer from '@/components/portfolio/Footer';
import MetaGrid from '@/components/portfolio/MetaGrid';
import SectionLabel from '@/components/portfolio/SectionLabel';
import SectionHeading from '@/components/portfolio/SectionHeading';
import JumpButton from '@/components/portfolio/JumpButton';
import ExploreMore from '@/components/portfolio/ExploreMore';

const metaItems = [
  { label: 'AFFILIATION', value: 'Conceptual (not affiliated with Spotify)' },
  {
    label: 'SKILLS',
    value:
      'Research, synthesis, IA, wireframing, prototyping, usability testing, iteration within an existing brand system.',
  },
  { label: 'TEAM', value: 'Sole UX/UI Designer' },
  { label: 'TOOLS', value: 'Figma, Miro, Canva' },
];

const trendCards = [
  {
    iconSrc:
      'https://static.wixstatic.com/media/77affe_e4bd479516a344beac17b590baf9712b~mv2.png',
    iconAlt: 'Headphones',
    label: 'Proven Benefits of Music on Performance',
    body: 'Music enhances workouts by improving mood, boosting efficiency, and increasing endurance by up to 15%.',
  },
  {
    iconSrc:
      'https://static.wixstatic.com/media/77affe_45dc5ab2bb424d048c38198a3e6267fa~mv2.png',
    iconAlt: 'Streaming platforms',
    label: 'Popularity of Music Streaming',
    body: 'Nearly all Gen Z (99%) and millennials (98%) stream music weekly.',
  },
  {
    iconSrc:
      'https://static.wixstatic.com/media/77affe_c2375261680d4b96a3658bbd1286f88c~mv2.png',
    iconAlt: 'Wearable devices',
    label: 'Growth of Wearable Fitness Tech',
    body: 'Wearables are growing at 18.5% CAGR, with most users citing health and fitness as the top reason for use.',
  },
];

const userStats = [
  { stat: '88%', insight: 'want music to match their energy levels' },
  { stat: '77%', insight: 'are interested in music that adapts to heart rate or pace' },
  { stat: '71%', insight: 'want variety to discover new workout tracks' },
];

const themeCards = [
  {
    number: '1',
    theme: 'Motivation',
    quote:
      "It's a challenge to find songs fun enough to keep me motivated or when music is too slow for the activity I'm doing.",
  },
  {
    number: '2',
    theme: 'Mood',
    quote: 'I want my workout music to fit my mood!',
  },
  {
    number: '3',
    theme: 'Variety',
    quote:
      "I get bored if I'm listening to the same music every run. I struggle to find new/different music to listen to each time.",
  },
  {
    number: '4',
    theme: 'Ease of Use',
    quote:
      "I don't want anything to slow me down, like trying to navigate my watch or get my phone out to change music.",
  },
];

const beforeAfterImages = [
  {
    src: 'https://static.wixstatic.com/media/77affe_1b0a887dc03c44b88a88b194bc794506~mv2.png',
    alt: 'Before/after — landing page',
    label: 'Landing Page',
    change:
      '"Create New Workout" moved to top + new "Browse by Activity, Genre, Mood, or BPM" section added for easier discovery.',
  },
  {
    src: 'https://static.wixstatic.com/media/77affe_72a329e347dd496d89dcdaaa17e6987b~mv2.png',
    alt: 'Before/after — setup screen',
    label: 'Setup Screen',
    change:
      'Added tooltips to biometric and warm-up options, and renamed "Motivational Cues" to "Artist Motivation Boosts" for clarity.',
  },
  {
    src: 'https://static.wixstatic.com/media/77affe_1c2d917a04044cf8bbf5099b7ce31114~mv2.png',
    alt: 'Before/after — active workout',
    label: 'Active Workout',
    change:
      "Removed biometric-selection buttons mid-workout and aligned the Currently Playing screen with Spotify's native design by removing bottom navigation.",
  },
  {
    src: 'https://static.wixstatic.com/media/77affe_ec331a49cef14148bbf4ffa5837cdd34~mv2.png',
    alt: 'Before/after — workout summary',
    label: 'Workout Summary',
    change:
      'Added a "Workout Soundtrack" summary so users can save tracks discovered during workouts, and updated the UI with visuals styled like Spotify Wrapped.',
  },
];

const mockups = [
  {
    src: 'https://static.wixstatic.com/media/77affe_4dd1b6628c39498fae0546b505b273b3~mv2.png',
    alt: 'Spotify Active on Apple Watch',
    caption: 'Apple Watch — workout setup, playback, cooldown, summary',
  },
  {
    src: 'https://static.wixstatic.com/media/77affe_ef9a2b91d872469cbd384968dc92e199~mv2.png',
    alt: 'Lock screen workout controls',
    caption: 'Lock screen with heart rate, timer, and current track',
  },
  {
    src: 'https://static.wixstatic.com/media/77affe_5e3b2c316ddc48119b1e383e4a6a65fc~mv2.png',
    alt: 'Spotify Active featured on home screen',
    caption: 'Spotify home with "Uniquely Yours" Active banner',
  },
  {
    src: 'https://static.wixstatic.com/media/77affe_bdf6dd68c9ef4b2c888af5f65e471704~mv2.png',
    alt: 'Spotify Active landing page',
    caption: 'Landing page — Create New Workout, favorites, recommended',
  },
  {
    src: 'https://static.wixstatic.com/media/77affe_dc898865d2614e3899c1fae9a8c3c7eb~mv2.png',
    alt: 'Workout playlist screen with device and biometric options',
    caption: 'Device connection and biometric sync options',
  },
  {
    src: 'https://static.wixstatic.com/media/77affe_fcd99931ee4f4771a5889c224983a61a~mv2.png',
    alt: 'Device and activity selection',
    caption: 'Select wearables, activity type, genre, syncing method',
  },
  {
    src: 'https://static.wixstatic.com/media/77affe_a58b5bfa2b3b45f7b7315b5de0a029b6~mv2.png',
    alt: 'Spotify Active workout screen',
    caption: 'Live workout — time, heart rate, current track, controls',
  },
  {
    src: 'https://static.wixstatic.com/media/77affe_1fe385a3f92d4f2fb9be123a8ecb3e20~mv2.png',
    alt: 'Motivational boost from Harry Styles',
    caption: 'Motivation Boost from your favorite artist',
  },
  {
    src: 'https://static.wixstatic.com/media/77affe_8afeea65e00646b3a36da01c9e6d1720~mv2.png',
    alt: 'Post-workout summary with stats and song list',
    caption: 'Workout summary with stats and Workout Soundtrack',
  },
];

const keyFeatures = [
  {
    label: 'KEY FEATURE 1',
    iconSrc:
      'https://static.wixstatic.com/media/77affe_b98bc529d74c439796e6b1e8e30a3506~mv2.png',
    heading: 'Hands-Free Control',
    body: 'Spotify Active adapts to workout intensity automatically, syncing music to your heart rate, steps, or custom BPM, eliminating manual adjustments mid-workout.',
  },
  {
    label: 'KEY FEATURE 2',
    iconSrc:
      'https://static.wixstatic.com/media/77affe_55c03fdf1ff6461e8ce5f339cc20b5c3~mv2.png',
    heading: 'Seamless Wearable Integration',
    body: 'Connect easily with devices like Apple Watch, Oura Ring, or Garmin for real-time fitness data and effortless syncing.',
  },
  {
    label: 'KEY FEATURE 3',
    iconSrc:
      'https://static.wixstatic.com/media/77affe_c0d42bcdd9a54577ac3036fb57c94482~mv2.png',
    heading: 'Smart Music Selection',
    body: "Powered by Spotify's existing personalization, your soundtrack blends favorite tracks with fresh discoveries, tailored to your genre, mood, and history.",
  },
  {
    label: 'KEY FEATURE 4',
    iconSrc:
      'https://static.wixstatic.com/media/77affe_1653e75c4c89422ba90f52771127070b~mv2.png',
    heading: 'Artist Motivation Boosts',
    body: 'Option to hear short, energizing messages from your favorite artists before their songs, adding an extra push to keep going.',
  },
  {
    label: 'KEY FEATURE 5',
    iconSrc:
      'https://static.wixstatic.com/media/77affe_442da705c68b4c7ea308f36c2a07396e~mv2.png',
    heading: 'Quick Controls on Smart Watch & Lock Screen',
    body: 'Access cooldown or end workouts directly from your wrist or lock screen without needing to open the app.',
  },
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
    title: 'Sole Product Designer for a Data Center Operations Management Platform',
    meta: 'Product Design | B2B SaaS | 2025\u2013Present',
    href: '/work/chekhub',
    imageSrc:
      'https://static.wixstatic.com/media/77affe_80b050f6c37d4040b10bed969e186376~mv2.png',
    imageAlt: 'CheKHub thumbnail',
  },
];

export default function SpotifyActivePage() {
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
            <SectionLabel>PRODUCT DESIGN &middot; CONCEPT</SectionLabel>
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
              Spotify Active: Music That{' '}
              <em>Moves With You</em>
            </h2>
            <p
              style={{
                fontFamily: 'var(--sans)',
                fontSize: 17,
                lineHeight: 1.55,
                color: 'var(--grey-1)',
                marginTop: 20,
                maxWidth: 560,
              }}
            >
              A Spotify feature designed to combine wearable fitness-tracking
              technology with personalized music synchronization.
            </p>
          </div>
          <div style={{ maxWidth: 700, alignSelf: 'center' }}>
            <Image
              src="https://static.wixstatic.com/media/77affe_4edff4636f9248fe805f83ff5a38b917~mv2.png"
              alt="Spotify Active app on phones — workout setup and live playback"
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
        <div className="content-width" style={{ paddingTop: 48, paddingBottom: 40 }}>
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
            I designed Spotify Active, a conceptual feature that syncs music with
            wearable fitness data to match workout intensity. To solve the problem
            of users interrupting workouts to fix mismatched music, I{' '}
            <strong>surveyed</strong> active individuals, <strong>synthesized</strong>{' '}
            insights, and <strong>analyzed competitors</strong> to identify Spotify
            as the best-fit platform. I then created{' '}
            <strong>information architecture</strong>, <strong>wireframes</strong>,
            and <strong>prototypes</strong>, refining through{' '}
            <strong>usability testing</strong>. The result was a polished concept
            featuring hands-free biometric syncing, customizable soundtracks, and
            seamless wearable integration, showcasing my skills in research, UX/UI
            design, prototyping, and iteration.
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

      {/* ───── Design Challenge + Solution (2-col) ───── */}
      <section style={{ background: 'var(--paper)', borderTop: 'var(--hair-2)' }}>
        <div className="content-width" style={{ paddingTop: 48, paddingBottom: 48 }}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <SectionLabel>DESIGN CHALLENGE</SectionLabel>
              <SectionHeading className="mb-4">
                Finding Your Workout Soundtrack is <em>Hard</em>
              </SectionHeading>
              <p style={{ fontSize: 15, lineHeight: 1.65, color: 'var(--grey-1)' }}>
                Music is a powerful motivator during workouts, but finding songs that
                match intensity is often frustrating. Many people pause mid-exercise
                to adjust tracks, breaking focus and momentum. Current fitness music
                features don&apos;t adapt in real time, leaving users with soundtracks
                that fail to keep up with the dynamic nature of workouts.
              </p>
            </div>
            <div>
              <SectionLabel>SOLUTION</SectionLabel>
              <SectionHeading className="mb-4">
                Music That Moves <em>With You</em>
              </SectionHeading>
              <p style={{ fontSize: 15, lineHeight: 1.65, color: 'var(--grey-1)' }}>
                Spotify Active integrates wearable fitness data with Spotify&apos;s
                personalization engine to create music that moves with you. By syncing
                tempo to heart rate, cadence, or a custom BPM, it removes the need for
                manual adjustments. Users set preferred genres and moods, while Spotify
                curates tracks that both fit their energy and introduce variety, turning
                every workout into a personalized, motivating, and immersive experience.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ───── Preview Images ───── */}
      <section style={{ background: 'var(--paper)' }}>
        <div className="content-width" style={{ paddingBottom: 16 }}>
          <div style={{ position: 'relative', width: '100%', aspectRatio: '16/9' }}>
            <Image
              src="https://static.wixstatic.com/media/77affe_974ba3f636714626812becb83f6d3006~mv2.png"
              alt="Spotify Active desktop preview"
              fill
              className="object-contain"
              unoptimized
            />
          </div>
          <div
            style={{
              position: 'relative',
              width: '100%',
              maxWidth: 500,
              aspectRatio: '9/16',
              margin: '24px auto 0',
            }}
          >
            <Image
              src="https://static.wixstatic.com/media/77affe_c9ac1bd86cd0475b9c65f30d9d2c365e~mv2.png"
              alt="Spotify Active mobile preview"
              fill
              className="object-contain"
              unoptimized
            />
          </div>
        </div>
      </section>

      {/* ───── Trend Analysis ───── */}
      <section style={{ background: 'var(--paper)', borderTop: 'var(--hair-2)' }}>
        <div className="content-width" style={{ paddingTop: 48, paddingBottom: 48 }}>
          <SectionLabel>TREND ANALYSIS</SectionLabel>
          <SectionHeading className="mb-10">
            The Opportunity: Music + Fitness + <em>Wearables</em>
          </SectionHeading>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {trendCards.map((card) => (
              <div key={card.label}>
                <div style={{ position: 'relative', width: 120, height: 120, marginBottom: 16 }}>
                  <Image
                    src={card.iconSrc}
                    alt={card.iconAlt}
                    fill
                    className="object-contain"
                    unoptimized
                  />
                </div>
                <p
                  style={{
                    fontFamily: 'var(--mono)',
                    fontSize: 11,
                    letterSpacing: '0.16em',
                    textTransform: 'uppercase',
                    color: 'var(--grey-2)',
                    marginBottom: 10,
                  }}
                >
                  {card.label}
                </p>
                <p style={{ fontSize: 15, lineHeight: 1.6, color: 'var(--grey-1)' }}>
                  {card.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ───── User Research ───── */}
      <section style={{ background: 'var(--paper)', borderTop: 'var(--hair-2)' }}>
        <div className="content-width" style={{ paddingTop: 48, paddingBottom: 48 }}>
          <SectionLabel>USER RESEARCH</SectionLabel>
          <SectionHeading className="mb-4">
            Listening to the <em>Users</em>
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
            I surveyed 17 active individuals (ages 18&ndash;34, all wearable users) to
            learn how music shapes their workouts and whether a dynamic syncing feature
            would add value. The survey included both multiple-choice and short-answer
            questions, allowing me to capture a mix of quantitative trends and
            qualitative insights.
          </p>

          {/* Stats + chart */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12" style={{ marginBottom: 40 }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 28 }}>
              {userStats.map((s) => (
                <div key={s.stat}>
                  <p
                    style={{
                      fontFamily: 'var(--display)',
                      fontWeight: 500,
                      fontSize: 'clamp(48px, 5vw, 64px)',
                      lineHeight: 1,
                      color: 'var(--ink)',
                    }}
                  >
                    {s.stat}
                  </p>
                  <p
                    style={{
                      fontSize: 15,
                      lineHeight: 1.5,
                      color: 'var(--grey-1)',
                      marginTop: 6,
                      maxWidth: 260,
                    }}
                  >
                    {s.insight}
                  </p>
                </div>
              ))}
            </div>
            <div style={{ position: 'relative', width: '100%', aspectRatio: '810/337' }}>
              <Image
                src="https://static.wixstatic.com/media/77affe_b2eca2f466a44ab0a1aa2a59dce20aa4~mv2.png"
                alt="Survey results bar chart"
                fill
                className="object-contain"
                unoptimized
              />
            </div>
          </div>
        </div>
      </section>

      {/* ───── Pull Quote ───── */}
      <section
        style={{
          background: 'var(--paper-warm)',
          borderTop: 'var(--hair-2)',
          borderBottom: 'var(--hair-2)',
        }}
      >
        <div className="content-width" style={{ paddingTop: 56, paddingBottom: 56 }}>
          <p
            style={{
              fontFamily: 'var(--display)',
              fontWeight: 500,
              fontSize: 'clamp(22px, 3vw, 30px)',
              lineHeight: 1.4,
              color: 'var(--ink)',
              maxWidth: 800,
              margin: '0 auto',
              textAlign: 'center',
            }}
          >
            &ldquo;Overall, users see music as essential for motivation, but when
            songs don&apos;t match their workout intensity, it breaks focus and
            momentum. This frustration shaped the four key themes I
            identified&hellip;&rdquo;
          </p>
        </div>
      </section>

      {/* ───── Four Themes ───── */}
      <section style={{ background: 'var(--paper)' }}>
        <div className="content-width" style={{ paddingTop: 48, paddingBottom: 48 }}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {themeCards.map((card) => (
              <div
                key={card.number}
                style={{
                  background: 'var(--accent-tint)',
                  borderRadius: 'var(--r-md)',
                  padding: 24,
                }}
              >
                <p
                  style={{
                    fontFamily: 'var(--mono)',
                    fontSize: 11,
                    letterSpacing: '0.16em',
                    textTransform: 'uppercase',
                    color: 'var(--grey-2)',
                    marginBottom: 12,
                  }}
                >
                  {card.number}. {card.theme}
                </p>
                <p
                  style={{
                    fontFamily: 'var(--display)',
                    fontStyle: 'italic',
                    fontSize: 17,
                    lineHeight: 1.5,
                    color: 'var(--ink)',
                  }}
                >
                  &ldquo;{card.quote}&rdquo;
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ───── Market Analysis ───── */}
      <section style={{ background: 'var(--paper)', borderTop: 'var(--hair-2)' }}>
        <div className="content-width" style={{ paddingTop: 48, paddingBottom: 48 }}>
          <SectionLabel>MARKET ANALYSIS</SectionLabel>
          <SectionHeading className="mb-4">
            Platform Choice: Why <em>Spotify?</em>
          </SectionHeading>
          <div className="grid grid-cols-1 md:grid-cols-[1fr_240px] gap-10 items-start">
            <div>
              <p
                style={{
                  fontSize: 15,
                  lineHeight: 1.65,
                  color: 'var(--grey-1)',
                  marginBottom: 16,
                }}
              >
                To identify the right platform, I compared major streaming services
                using market share, demographics, and user demand.
              </p>
              <p
                style={{
                  fontFamily: 'var(--mono)',
                  fontSize: 11,
                  letterSpacing: '0.14em',
                  textTransform: 'uppercase',
                  color: 'var(--grey-2)',
                  marginBottom: 12,
                }}
              >
                Why Spotify stood out:
              </p>
              <ul
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 10,
                  fontSize: 15,
                  lineHeight: 1.6,
                  color: 'var(--grey-1)',
                }}
              >
                <li>
                  <strong>Market leader:</strong> Holds 31% share, far ahead of
                  competitors
                </li>
                <li>
                  <strong>Right demographics:</strong> Largest U.S. base of
                  18&ndash;34 year olds, matching my survey group
                </li>
                <li>
                  <strong>High demand:</strong> 86% of surveyed Spotify users
                  expressed strong interest in this feature (higher than the overall
                  76%)
                </li>
              </ul>
            </div>
            <div style={{ position: 'relative', width: 240, height: 230 }}>
              <Image
                src="https://static.wixstatic.com/media/77affe_26ddf3ee73064443b7bbe351bc332762~mv2.png"
                alt="Spotify logo"
                fill
                className="object-contain"
                unoptimized
              />
            </div>
          </div>
        </div>
      </section>

      {/* ───── Competitive Analysis ───── */}
      <section style={{ background: 'var(--paper)', borderTop: 'var(--hair-2)' }}>
        <div className="content-width" style={{ paddingTop: 48, paddingBottom: 48 }}>
          <SectionLabel>COMPETITIVE ANALYSIS</SectionLabel>
          <SectionHeading className="mb-4">
            Exploring Existing Solutions: What&apos;s <em>Missing</em>
          </SectionHeading>
          <p
            style={{
              fontSize: 15,
              lineHeight: 1.65,
              color: 'var(--grey-1)',
              maxWidth: 720,
              marginBottom: 16,
            }}
          >
            I analyzed four workout music apps: RockMyRun, PaceDJ, FITRADIO, and
            Running Beats BPM. Each offered tempo-based music, but all fell short in
            key ways.
          </p>
          <ul
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: 10,
              fontSize: 15,
              lineHeight: 1.6,
              color: 'var(--grey-1)',
              maxWidth: 720,
              marginBottom: 16,
            }}
          >
            <li>
              No single app combined real-time syncing, manual controls, streaming
              library integration, and wearable connection.
            </li>
            <li>
              RockMyRun came closest with real-time syncing, but lacked music library
              integration and had limited HR matching.
            </li>
            <li>
              Others overloaded users with too many playlists, making it hard to find
              the right fit.
            </li>
          </ul>
          <p
            style={{
              fontSize: 15,
              lineHeight: 1.65,
              color: 'var(--grey-1)',
              maxWidth: 720,
              marginBottom: 32,
            }}
          >
            This gap highlighted the opportunity for{' '}
            <strong>
              Spotify Active: a seamless, adaptive experience built into a platform
              users already love.
            </strong>
          </p>
          <div
            style={{
              position: 'relative',
              width: '100%',
              aspectRatio: '954/1482',
              background: 'var(--grey-5)',
              borderRadius: 'var(--r-sm)',
            }}
          >
            <Image
              src="https://static.wixstatic.com/media/77affe_f56767a6eb60497ab1f6911eb4a5faba~mv2.jpg/v1/fill/w_1200,q_80,enc_avif/77affe_f56767a6eb60497ab1f6911eb4a5faba~mv2.jpg"
              alt="Competitive analysis comparison table"
              fill
              className="object-contain"
              unoptimized
            />
          </div>
        </div>
      </section>

      {/* ───── IA & Wireframing ───── */}
      <section style={{ background: 'var(--paper)', borderTop: 'var(--hair-2)' }}>
        <div className="content-width" style={{ paddingTop: 48, paddingBottom: 48 }}>
          <SectionLabel>INFORMATION ARCHITECTURE &amp; WIREFRAMING</SectionLabel>
          <SectionHeading className="mb-4">
            Structuring the <em>Experience</em>
          </SectionHeading>
          <p
            style={{
              fontSize: 15,
              lineHeight: 1.65,
              color: 'var(--grey-1)',
              maxWidth: 720,
              marginBottom: 12,
            }}
          >
            As I mapped the information architecture, I realized the landing screen
            was overloaded with choices. To reduce cognitive load, I split the flow
            into two steps: a clean landing page and a dedicated workout settings
            screen. This shift let users focus on one task at a time without feeling
            overwhelmed.
          </p>
          <p
            style={{
              fontSize: 15,
              lineHeight: 1.65,
              color: 'var(--grey-1)',
              maxWidth: 720,
              marginBottom: 32,
            }}
          >
            With user needs and competitive gaps in mind, I then sketched and
            wireframed different layouts and flows. My goal was to balance familiarity
            with innovation, creating an experience that felt seamless to navigate
            while introducing new functionality.
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
            <div style={{ position: 'relative', width: '100%', aspectRatio: '954/1060' }}>
              <Image
                src="https://static.wixstatic.com/media/77affe_ec6d294f8e3a4e87ac3b33ae20afaa2f~mv2.jpg"
                alt="Information Architecture flowchart"
                fill
                className="object-contain"
                unoptimized
              />
            </div>
            <div style={{ position: 'relative', width: '100%', aspectRatio: '954/596' }}>
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

      {/* ───── Usability Testing ───── */}
      <section style={{ background: 'var(--paper)', borderTop: 'var(--hair-2)' }}>
        <div className="content-width" style={{ paddingTop: 48, paddingBottom: 48 }}>
          <SectionLabel>USABILITY TESTING</SectionLabel>
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
            I tested a high-fidelity prototype with five participants to uncover
            friction in core flows like starting workouts, creating new ones, and
            navigating cooldown. The feedback revealed where users got stuck or
            confused, and I refined the design accordingly:
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
              marginBottom: 40,
            }}
          >
            <li>
              <strong>Easier discovery:</strong> Added a &ldquo;Browse by Activity,
              Genre, Mood, or BPM&rdquo; section and moved Create New Workout to the
              top for quick access.
            </li>
            <li>
              <strong>Clearer features:</strong> Added tooltips to biometric and
              warm-up options, and renamed Motivational Cues to Artist Motivation
              Boosts for clarity.
            </li>
            <li>
              <strong>Simplified playback:</strong> Removed biometric-selection
              buttons mid-workout and aligned the Currently Playing screen with
              Spotify&apos;s native design by removing bottom navigation.
            </li>
            <li>
              <strong>Better post-workout value:</strong> Added a Workout Soundtrack
              summary so users can save tracks discovered during workouts, and updated
              the UI with visuals styled like Spotify Wrapped.
            </li>
          </ul>

          {/* Before / After rows */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 48 }}>
            {beforeAfterImages.map((item, i) => (
              <div key={item.src}>
                <p
                  style={{
                    fontFamily: 'var(--mono)',
                    fontSize: 11,
                    letterSpacing: '0.16em',
                    textTransform: 'uppercase',
                    color: 'var(--grey-2)',
                    marginBottom: 8,
                  }}
                >
                  Change {i + 1} &mdash; {item.label}
                </p>
                <p
                  style={{
                    fontSize: 15,
                    lineHeight: 1.6,
                    color: 'var(--grey-1)',
                    marginBottom: 16,
                  }}
                >
                  {item.change}
                </p>
                <div style={{ position: 'relative', width: '100%', aspectRatio: '954/537' }}>
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

      {/* ───── Final Design (Mockup Carousel) ───── */}
      <section
        id="final-design"
        style={{ background: 'var(--paper)', borderTop: 'var(--hair-2)' }}
      >
        <div className="content-width" style={{ paddingTop: 48, paddingBottom: 48 }}>
          <SectionLabel>HIGH FIDELITY MOCKUPS</SectionLabel>
          <SectionHeading className="mb-8">
            Final <em>Design</em>
          </SectionHeading>
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
                <div style={{ position: 'relative', width: 280, height: 500 }}>
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

      {/* ───── Key Features ───── */}
      {keyFeatures.map((feature, i) => (
        <section
          key={feature.label}
          style={{ background: 'var(--paper)', borderTop: 'var(--hair-2)' }}
        >
          <div className="content-width" style={{ paddingTop: 48, paddingBottom: 48 }}>
            <SectionLabel>{feature.label}</SectionLabel>
            <div
              className="grid grid-cols-1 md:grid-cols-[1fr_120px] gap-10 items-start"
              style={{
                direction: i % 2 === 1 ? 'rtl' : 'ltr',
              }}
            >
              <div style={{ direction: 'ltr' }}>
                <SectionHeading className="mb-3">
                  {feature.heading}
                </SectionHeading>
                <p
                  style={{
                    fontSize: 15,
                    lineHeight: 1.65,
                    color: 'var(--grey-1)',
                    maxWidth: 520,
                  }}
                >
                  {feature.body}
                </p>
              </div>
              <div
                style={{
                  position: 'relative',
                  width: 120,
                  height: 120,
                  direction: 'ltr',
                }}
              >
                <Image
                  src={feature.iconSrc}
                  alt={`${feature.heading} icon`}
                  fill
                  className="object-contain"
                  unoptimized
                />
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* ───── Learnings & Next Steps ───── */}
      <section style={{ background: 'var(--paper)', borderTop: 'var(--hair-2)' }}>
        <div className="content-width" style={{ paddingTop: 48, paddingBottom: 48 }}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <SectionLabel>LEARNINGS</SectionLabel>
              <p style={{ fontSize: 15, lineHeight: 1.65, color: 'var(--grey-1)' }}>
                Designing within Spotify&apos;s ecosystem pushed me to adapt brand
                guidelines while keeping consistency in color, graphics, and UI
                patterns. I learned how to introduce new functionality in a way that
                feels fresh but still aligned with a familiar user experience.
              </p>
            </div>
            <div>
              <SectionLabel>NEXT STEPS</SectionLabel>
              <p
                style={{
                  fontSize: 15,
                  lineHeight: 1.65,
                  color: 'var(--grey-1)',
                  marginBottom: 12,
                }}
              >
                Future opportunities for Spotify Active could include:
              </p>
              <ul
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 8,
                  fontSize: 15,
                  lineHeight: 1.6,
                  color: 'var(--grey-1)',
                }}
              >
                <li>AI-coached workouts that adapt in real time to biometric changes</li>
                <li>Custom cooldowns that begin after a set duration</li>
                <li>Speed-based BPM settings tied to running or walking pace</li>
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
