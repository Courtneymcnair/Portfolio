import Image from 'next/image';
import GoButton from './GoButton';

interface ProjectCardProps {
  title: string;
  meta: string;
  href: string;
  imageSrc: string;
  imageAlt: string;
}

export default function ProjectCard({ title, meta, href, imageSrc, imageAlt }: ProjectCardProps) {
  return (
    <div className="flex flex-col md:flex-row w-full py-10">
      {/* Left: text */}
      <div className="md:w-[33%] flex flex-col justify-between pr-0 md:pr-8 mb-6 md:mb-0">
        <div className="mb-6">
          <h5 className="text-card-title text-black mb-3">{title}</h5>
          <p className="text-body text-black/60">{meta}</p>
        </div>
        <GoButton href={href} />
      </div>
      {/* Right: image */}
      <div className="md:w-[67%] relative overflow-hidden" style={{ height: '480px' }}>
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 67vw"
        />
      </div>
    </div>
  );
}
