import Image from 'next/image';
import Footer from '@/components/portfolio/Footer';

const galleryImages = [
  {
    src: 'https://static.wixstatic.com/media/77affe_db128529aa2540c9ba91c99ed6d7f759~mv2.jpg',
    alt: 'Travel photo',
    width: 400,
    height: 600,
  },
  {
    src: 'https://static.wixstatic.com/media/77affe_4ba495b0f4e245fd88423bf51daf21fe~mv2.jpg',
    alt: 'Travel photo',
    width: 400,
    height: 600,
  },
  {
    src: 'https://static.wixstatic.com/media/77affe_5cf91e39c4574ee5a2d974981ec0f1cb~mv2.jpg',
    alt: 'Travel photo',
    width: 600,
    height: 400,
  },
  {
    src: 'https://static.wixstatic.com/media/77affe_c2188f50751447329056cc510a08ba13~mv2.jpg',
    alt: 'Personal photo',
    width: 400,
    height: 500,
  },
  {
    src: 'https://static.wixstatic.com/media/77affe_48e944581eb24c4a8594082307bcc01d~mv2.jpg',
    alt: 'Personal photo',
    width: 400,
    height: 500,
  },
  {
    src: 'https://static.wixstatic.com/media/77affe_6601ad7c1dcf4b1aaf713bc40dfd74aa~mv2.jpg',
    alt: 'Personal photo',
    width: 400,
    height: 500,
  },
  {
    src: 'https://static.wixstatic.com/media/77affe_c7417512a31c44ccbbb1e60315cc40bc~mv2.jpg',
    alt: 'Personal photo',
    width: 400,
    height: 500,
  },
];

export default function AboutPage() {
  return (
    <div className="bg-white">
      <main className="pt-[60px]">
        {/* Page title */}
        <section className="content-width py-16 text-center">
          <h1 className="text-page-title text-black">ABOUT ME</h1>
        </section>

        {/* Bio — two-column */}
        <section className="content-width pb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            {/* Profile photo */}
            <div className="flex justify-center md:justify-start">
              <div
                className="rounded-circle overflow-hidden relative flex-shrink-0"
                style={{ width: '271px', height: '271px' }}
              >
                <Image
                  src="https://static.wixstatic.com/media/77affe_da9449bb561e436e88b6dd4f1fba3e9c~mv2.jpg"
                  alt="Courtney McNair"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            {/* Bio text */}
            <div className="flex flex-col gap-5">
              <p className="text-body text-black">Hi, I&apos;m Courtney!</p>
              <p className="text-body text-black">
                I&apos;m currently the sole product designer at a B2B SaaS startup building
                software for mission-critical operations. I design web and mobile tools that help
                teams manage complex workflows, visualize capacity, and stay on top of high-stakes
                work. Earlier in my career, I helped nonprofits design early-stage platforms
                supporting sustainability and accessibility initiatives.
              </p>
              <p className="text-body text-black">
                My background in neuroscience, human behavior, and biology also shapes how I
                approach design. I enjoy blending analytical thinking and creativity to build
                products that reflect how people actually think, make decisions, and navigate
                complex workflows.
              </p>
              <p className="text-body text-black">
                Across every project, I use research and systems thinking to understand real-world
                problems and turn them into clear, thoughtful product experiences.
              </p>
            </div>
          </div>
        </section>

        {/* Hobbies */}
        <section className="content-width pb-16">
          <h3 className="text-section text-black mb-5">Outside of Work</h3>
          <p className="text-body text-black max-w-2xl">
            Outside of work, you&apos;ll likely find me painting, hiking, reading, or capturing
            moments through photography. I&apos;m also an avid traveler, with adventures spanning
            14 countries (and counting!). I draw inspiration from art and aesthetics, as well as the
            diverse cultures, landscapes, and experiences I encounter, all of which fuel my
            creativity and shape the way I approach design.
          </p>
        </section>

        {/* Photo gallery — masonry */}
        <section className="content-width pb-24">
          <div className="columns-2 md:columns-3 gap-4 space-y-4">
            {galleryImages.map((img) => (
              <div key={img.src} className="break-inside-avoid overflow-hidden rounded-sm">
                <Image
                  src={img.src}
                  alt={img.alt}
                  width={img.width}
                  height={img.height}
                  className="w-full h-auto object-cover"
                />
              </div>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
