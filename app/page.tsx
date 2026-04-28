import ProjectCard from '@/components/ui/ProjectCard';
import Footer from '@/components/layout/Footer';

const projects = [
  {
    title: 'Sole Product Designer for a Data Center Operations Management Platform',
    meta: 'Product Design | B2B SaaS | 2025–Present',
    href: '/work/chekhub',
    imageSrc:
      'https://static.wixstatic.com/media/77affe_80b050f6c37d4040b10bed969e186376~mv2.png',
    imageAlt: 'CheKHub project thumbnail',
  },
  {
    title: 'Led the Design of an Open-Access Sign Language Video Dictionary',
    meta: 'Product Design | Accessibility | 2025',
    href: '/work/fsldictionary',
    imageSrc:
      'https://static.wixstatic.com/media/77affe_74461850a2a8410fbfeef9b7fa3a0735~mv2.png',
    imageAlt: 'FSL Dictionary project thumbnail',
  },
  {
    title: 'Spotify Feature Integrating Wearable Fitness Data for Personalized Music',
    meta: 'Product Design | Concept | 2025',
    href: '/work/spotifyactive',
    imageSrc:
      'https://static.wixstatic.com/media/77affe_fdd2b02f59f9497ebbeca4a1865bccd4~mv2.png',
    imageAlt: 'Spotify Active project thumbnail',
  },
];

export default function HomePage() {
  return (
    <div className="bg-brand-blue min-h-screen">
      {/* Hero */}
      <section className="pt-[60px]">
        <div className="content-width flex flex-col items-center text-center pt-20 pb-24">
          <h1 className="text-hero text-white mb-8">COURTNEY MCNAIR</h1>
          <p className="text-hero-sub text-white max-w-[500px]">
            Product Designer with a background in neuroscience and human behavior, designing tools
            that turn complex systems into clear, intuitive workflows.
          </p>
        </div>
      </section>

      {/* White content area — sits on top of blue creating the dome effect */}
      <div className="bg-white">
        <div className="content-width">
          <div className="flex flex-col divide-y divide-black/10">
            {projects.map((project) => (
              <ProjectCard key={project.href} {...project} />
            ))}
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}
