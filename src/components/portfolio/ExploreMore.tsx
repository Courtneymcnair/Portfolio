import ProjectCard from './ProjectCard';
import SectionHeading from './SectionHeading';

interface ExploreProject {
  title: string;
  meta?: string;
  href: string;
  imageSrc: string;
  imageAlt: string;
}

export default function ExploreMore({ projects }: { projects: ExploreProject[] }) {
  return (
    <section className="border-t border-black/10">
      <div className="content-width py-16">
        <SectionHeading className="mb-10">Explore More Case Studies</SectionHeading>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12">
          {projects.map((p) => (
            <ProjectCard key={p.href} {...p} />
          ))}
        </div>
      </div>
    </section>
  );
}
