import Image from 'next/image';
import Link from 'next/link';

interface ProjectCardProps {
  title: string;
  meta?: string;
  href: string;
  imageSrc: string;
  imageAlt: string;
}

export default function ProjectCard({ title, href, imageSrc, imageAlt }: ProjectCardProps) {
  return (
    <Link
      href={href}
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: 24,
        textDecoration: 'none',
        color: 'inherit',
      }}
      className="project-card"
    >
      <div
        style={{
          position: 'relative',
          width: '100%',
          aspectRatio: '4 / 3',
          borderRadius: 'var(--r-md)',
          overflow: 'hidden',
        }}
      >
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          className="object-cover project-card-img"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </div>
      <p
        style={{
          fontFamily: 'var(--serif)',
          fontWeight: 400,
          fontSize: 'clamp(20px, 2vw, 26px)',
          lineHeight: 1.3,
          letterSpacing: '-0.01em',
          color: 'var(--ink)',
          textAlign: 'center',
          margin: 0,
          padding: '0 8px',
        }}
      >
        {title}
      </p>
    </Link>
  );
}
