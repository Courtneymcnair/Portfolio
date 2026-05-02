'use client';

import Image from 'next/image';
import { useInView } from '@/lib/useInView';

type Width = 'content' | 'wide' | 'full' | 'half';

interface FigureProps {
  src: string;
  alt: string;
  caption?: string;
  width?: Width;
  aspect?: string;
  unoptimized?: boolean;
}

const widthMap: Record<Width, string> = {
  content: '880px',
  wide: '1100px',
  full: '100%',
  half: '440px',
};

export default function Figure({
  src,
  alt,
  caption,
  width = 'content',
  aspect = '16 / 10',
  unoptimized = false,
}: FigureProps) {
  const [ref, inView] = useInView<HTMLDivElement>();

  return (
    <figure
      ref={ref}
      className={`figure-defer reveal ${inView ? 'reveal--in' : ''}`}
      style={{
        width: '100%',
        maxWidth: widthMap[width],
        margin: '0 auto',
      }}
    >
      <div
        style={{
          position: 'relative',
          width: '100%',
          aspectRatio: aspect,
          borderRadius: 'var(--r-md)',
          overflow: 'hidden',
          background: 'var(--accent-tint-3)',
          border: 'var(--hair-2)',
          transition: 'box-shadow 300ms ease, transform 300ms ease',
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.boxShadow = 'var(--shadow-3)';
          e.currentTarget.style.transform = 'translateY(-2px)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.boxShadow = '';
          e.currentTarget.style.transform = '';
        }}
      >
        <Image
          src={src}
          alt={alt}
          fill
          unoptimized={unoptimized}
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 1100px"
        />
      </div>
      {caption && (
        <figcaption
          style={{
            marginTop: 12,
            fontFamily: 'var(--mono)',
            fontSize: 11,
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            color: 'var(--grey-2)',
            textAlign: 'center',
          }}
        >
          {caption}
        </figcaption>
      )}
    </figure>
  );
}
