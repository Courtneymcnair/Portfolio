'use client';

import { useState } from 'react';
import { ExternalLink, Play } from 'lucide-react';
import { useInView } from '@/lib/useInView';

type Width = 'content' | 'wide' | 'full';

interface PrototypeEmbedProps {
  src: string;
  title: string;
  caption?: string;
  width?: Width;
  aspect?: string;
  externalHref?: string;
  externalLabel?: string;
}

const widthMap: Record<Width, string> = {
  content: '880px',
  wide: '1100px',
  full: '100%',
};

export default function PrototypeEmbed({
  src,
  title,
  caption,
  width = 'wide',
  aspect = '16 / 10',
  externalHref,
  externalLabel = 'Open in Figma',
}: PrototypeEmbedProps) {
  const [ref, inView] = useInView<HTMLDivElement>();
  const [loaded, setLoaded] = useState(false);
  const [active, setActive] = useState(false);

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
        }}
      >
        {/* Click-to-load poster keeps Figma's heavy iframe lazy */}
        {!active && (
          <button
            type="button"
            onClick={() => setActive(true)}
            aria-label={`Load ${title} prototype`}
            style={{
              position: 'absolute',
              inset: 0,
              width: '100%',
              height: '100%',
              border: 'none',
              cursor: 'pointer',
              background:
                'linear-gradient(135deg, var(--accent-tint-3) 0%, var(--accent-tint) 100%)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexDirection: 'column',
              gap: 16,
              fontFamily: 'var(--mono)',
              color: 'var(--accent)',
              transition: 'background 200ms ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background =
                'linear-gradient(135deg, var(--accent-tint) 0%, var(--accent-tint-2) 100%)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background =
                'linear-gradient(135deg, var(--accent-tint-3) 0%, var(--accent-tint) 100%)';
            }}
          >
            <span
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: 64,
                height: 64,
                borderRadius: '50%',
                background: 'var(--accent)',
                color: '#fff',
                boxShadow: 'var(--shadow-3)',
              }}
            >
              <Play size={24} strokeWidth={1.75} fill="currentColor" />
            </span>
            <span
              style={{
                fontSize: 11,
                letterSpacing: '0.16em',
                textTransform: 'uppercase',
              }}
            >
              Load prototype · {title}
            </span>
          </button>
        )}

        {active && (
          <>
            {!loaded && (
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontFamily: 'var(--mono)',
                  fontSize: 11,
                  letterSpacing: '0.14em',
                  textTransform: 'uppercase',
                  color: 'var(--grey-2)',
                }}
              >
                Loading prototype…
              </div>
            )}
            <iframe
              src={src}
              title={title}
              allow="fullscreen"
              loading="lazy"
              onLoad={() => setLoaded(true)}
              style={{
                position: 'absolute',
                inset: 0,
                width: '100%',
                height: '100%',
                border: 0,
                opacity: loaded ? 1 : 0,
                transition: 'opacity 300ms ease',
              }}
            />
          </>
        )}
      </div>

      {(caption || externalHref) && (
        <figcaption
          style={{
            marginTop: 14,
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: 16,
            flexWrap: 'wrap',
            fontFamily: 'var(--mono)',
            fontSize: 11,
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            color: 'var(--grey-2)',
          }}
        >
          <span>{caption}</span>
          {externalHref && (
            <a
              href={externalHref}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 6,
                color: 'var(--accent)',
                textDecoration: 'none',
              }}
            >
              {externalLabel}
              <ExternalLink size={12} strokeWidth={1.75} />
            </a>
          )}
        </figcaption>
      )}
    </figure>
  );
}
