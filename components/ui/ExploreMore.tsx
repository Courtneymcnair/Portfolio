import ProjectCard from './ProjectCard';
import SectionHeading from './SectionHeading';

interface ExploreProject {
  title: string;
  meta: string;
  href: string;
  imageSrc: string;
  imageAlt: string;
}

export default function ExploreMore({ projects }: { projects: ExploreProject[] }) {
  return (
    <section className="border-t border-black/10">
      <div className="content-width py-16">
        <SectionHeading className="mb-2">Explore More Case Studies</SectionHeading>
        <div className="flex flex-col divide-y divide-black/10">
          {projects.map((p) => (
            <ProjectCard key={p.href} {...p} />
          ))}
        </div>
      </div>
    </section>
  );
}
