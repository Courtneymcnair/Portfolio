'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Clock, ArrowUpRight } from 'lucide-react';
import { motion } from 'motion/react';

interface HeroImage {
  src: string;
  alt: string;
  caption?: string;
}

interface CaseStudyHeroProps {
  caseNumber?: string;
  partnerName?: string;
  category?: string;
  title: string;
  description?: string;
  readTime?: string;
  tags?: string[];
  ctaHref?: string;
  ctaLabel?: string;
  /** 1 or 2 product teaser images for the right side. Defaults to a placeholder. */
  images?: [HeroImage] | [HeroImage, HeroImage];
  figLabel?: string;
}

const DEFAULT_IMAGES: [HeroImage, HeroImage] = [
  { src: '/images/thumbnails/chekhub.png', alt: 'Product surface — primary view' },
  { src: '/images/thumbnails/chekhub.png', alt: 'Product surface — secondary view' },
];

const easeOut = [0.22, 1, 0.36, 1] as const;

export default function CaseStudyHero({
  caseNumber,
  partnerName,
  category,
  title,
  description,
  readTime,
  tags,
  ctaHref,
  ctaLabel = 'Read case',
  images = DEFAULT_IMAGES,
  figLabel,
}: CaseStudyHeroProps) {
  return (
    <section
      className="cs-hero"
      style={{
        background: 'var(--paper)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div className="cs-hero__grid">
        {/* LEFT — text content */}
        <div className="cs-hero__left">
          {(caseNumber || partnerName) && (
            <motion.div
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: easeOut }}
              style={{
                fontFamily: 'var(--mono)',
                fontSize: 11,
                letterSpacing: '0.18em',
                textTransform: 'uppercase',
                color: 'var(--accent)',
                marginBottom: 24,
              }}
            >
              {caseNumber && <span>Case {caseNumber}</span>}
              {caseNumber && partnerName && <span style={{ color: 'var(--grey-2)' }}> / </span>}
              {partnerName && <span>Partner: {partnerName}</span>}
            </motion.div>
          )}

          {category && (
            <motion.div
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.05, ease: easeOut }}
              style={{ marginBottom: 32 }}
            >
              <span
                style={{
                  display: 'inline-block',
                  padding: '6px 14px',
                  borderRadius: 'var(--r-pill)',
                  background: 'var(--accent-tint)',
                  color: 'var(--accent)',
                  fontFamily: 'var(--mono)',
                  fontSize: 11,
                  letterSpacing: '0.14em',
                  textTransform: 'uppercase',
                }}
              >
                {category}
              </span>
            </motion.div>
          )}

          <motion.h1
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: easeOut }}
            style={{
              fontFamily: 'var(--display)',
              fontWeight: 600,
              fontSize: 'clamp(40px, 5.6vw, 80px)',
              lineHeight: 1.05,
              letterSpacing: '-0.01em',
              color: 'var(--ink)',
              margin: 0,
              marginBottom: description ? 24 : 32,
            }}
          >
            {title}
          </motion.h1>

          {description && (
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: easeOut }}
              style={{
                fontFamily: 'var(--sans)',
                fontSize: 'clamp(15px, 1.25vw, 17px)',
                lineHeight: 1.6,
                color: 'var(--grey-1)',
                margin: 0,
                marginBottom: 36,
                maxWidth: 560,
              }}
            >
              {description}
            </motion.p>
          )}

          {readTime && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.28, ease: easeOut }}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 8,
                fontFamily: 'var(--mono)',
                fontSize: 11,
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                color: 'var(--grey-2)',
                marginBottom: 20,
              }}
            >
              <Clock size={13} strokeWidth={1.5} aria-hidden="true" />
              {readTime}
            </motion.div>
          )}

          {tags && tags.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.32, ease: easeOut }}
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: 8,
                marginBottom: ctaHref ? 36 : 0,
              }}
            >
              {tags.map((tag) => (
                <span
                  key={tag}
                  style={{
                    display: 'inline-block',
                    padding: '6px 12px',
                    borderRadius: 'var(--r-pill)',
                    background: 'var(--grey-5)',
                    fontFamily: 'var(--mono)',
                    fontSize: 10.5,
                    letterSpacing: '0.12em',
                    textTransform: 'uppercase',
                    color: 'var(--grey-1)',
                  }}
                >
                  {tag}
                </span>
              ))}
            </motion.div>
          )}

          {ctaHref && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4, ease: easeOut }}
            >
              <Link
                href={ctaHref}
                className="cs-hero__cta"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 8,
                  padding: '16px 28px',
                  borderRadius: 'var(--r-pill)',
                  background: 'var(--accent)',
                  color: '#fff',
                  fontFamily: 'var(--sans)',
                  fontWeight: 500,
                  fontSize: 16,
                  textDecoration: 'none',
                  boxShadow: 'var(--shadow-4)',
                  transition: 'background 200ms ease, transform 200ms ease, box-shadow 200ms ease',
                }}
              >
                {ctaLabel}
                <ArrowUpRight size={18} strokeWidth={1.75} aria-hidden="true" />
              </Link>
            </motion.div>
          )}
        </div>

        {/* RIGHT — product teaser images */}
        <div className="cs-hero__right">
          <ProductTeaser images={images} figLabel={figLabel} />
        </div>
      </div>

      <style>{`
        .cs-hero__grid {
          display: grid;
          grid-template-columns: 1.05fr 1fr;
          min-height: clamp(620px, 80vh, 820px);
        }
        .cs-hero__left {
          padding: clamp(64px, 7vw, 112px) clamp(40px, 5vw, 80px);
          display: flex;
          flex-direction: column;
          justify-content: center;
        }
        .cs-hero__right {
          position: relative;
          border-left: var(--hair-2);
          background: var(--paper-warm);
          overflow: hidden;
        }
        .cs-hero__cta:hover {
          background: var(--accent-soft);
          transform: translateY(-1px);
        }
        @media (max-width: 960px) {
          .cs-hero__grid {
            grid-template-columns: 1fr;
            min-height: 0;
          }
          .cs-hero__left {
            padding: clamp(48px, 8vw, 80px) clamp(22px, 5vw, 56px) clamp(36px, 5vw, 56px);
          }
          .cs-hero__right {
            border-left: none;
            border-top: var(--hair-2);
            min-height: clamp(360px, 50vw, 480px);
          }
        }
      `}</style>
    </section>
  );
}

/* ─── ProductTeaser (right-side image collage) ─────────────────────────── */

function ProductTeaser({
  images,
  figLabel,
}: {
  images: [HeroImage] | [HeroImage, HeroImage];
  figLabel?: string;
}) {
  const [primary, secondary] = images;

  return (
    <div style={{ position: 'absolute', inset: 0, padding: 'clamp(32px, 4vw, 56px)' }}>
      {figLabel && (
        <div
          style={{
            position: 'absolute',
            top: 24,
            right: 28,
            fontFamily: 'var(--mono)',
            fontSize: 11,
            letterSpacing: '0.18em',
            textTransform: 'uppercase',
            color: 'var(--grey-2)',
            zIndex: 3,
          }}
        >
          {figLabel}
        </div>
      )}

      <div
        style={{
          position: 'relative',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {/* Primary image — main teaser */}
        <motion.figure
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.0, delay: 0.3, ease: easeOut }}
          style={{
            position: 'relative',
            width: secondary ? '78%' : '88%',
            aspectRatio: '4 / 3',
            margin: 0,
            borderRadius: 'var(--r-md)',
            overflow: 'hidden',
            background: 'var(--paper-card)',
            border: 'var(--hair-2)',
            boxShadow: 'var(--shadow-3)',
            transform: secondary ? 'translate(-6%, -8%)' : 'none',
            zIndex: 2,
          }}
        >
          <Image
            src={primary.src}
            alt={primary.alt}
            fill
            sizes="(max-width: 960px) 90vw, 600px"
            style={{ objectFit: 'cover' }}
          />
          {primary.caption && <TeaserCaption>{primary.caption}</TeaserCaption>}
        </motion.figure>

        {/* Secondary image — floating accent */}
        {secondary && (
          <motion.figure
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.0, delay: 0.5, ease: easeOut }}
            style={{
              position: 'absolute',
              right: '6%',
              bottom: '8%',
              width: '48%',
              aspectRatio: '4 / 3',
              margin: 0,
              borderRadius: 'var(--r-md)',
              overflow: 'hidden',
              background: 'var(--paper-card)',
              border: 'var(--hair-2)',
              boxShadow: 'var(--shadow-4)',
              zIndex: 1,
            }}
          >
            <Image
              src={secondary.src}
              alt={secondary.alt}
              fill
              sizes="(max-width: 960px) 60vw, 360px"
              style={{ objectFit: 'cover' }}
            />
            {secondary.caption && <TeaserCaption>{secondary.caption}</TeaserCaption>}
          </motion.figure>
        )}
      </div>
    </div>
  );
}

function TeaserCaption({ children }: { children: React.ReactNode }) {
  return (
    <figcaption
      style={{
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        padding: '8px 12px',
        background: 'rgba(10,10,15,0.55)',
        color: '#fff',
        fontFamily: 'var(--mono)',
        fontSize: 10.5,
        letterSpacing: '0.14em',
        textTransform: 'uppercase',
      }}
    >
      {children}
    </figcaption>
  );
}
