'use client';

import Link from 'next/link';
import { motion } from 'motion/react';

type StatusVariant = 'active' | 'shipped' | 'planned';

interface CaseStudyHeroProps {
  partnerName?: string;
  projectType?: string;
  title: string;
  subtitle?: string;
  description?: string;
  tags?: string[];
  statusLabel?: string;
  statusVariant?: StatusVariant;
  ctaHref?: string;
  ctaLabel?: string;
  visual?: React.ReactNode;
}

const variantColors: Record<StatusVariant, { bg: string; text: string; dot: string }> = {
  active: { bg: 'var(--accent-tint)', text: 'var(--accent)', dot: 'var(--accent)' },
  shipped: { bg: '#E6F4EA', text: '#1E7C3A', dot: '#1E7C3A' },
  planned: { bg: 'var(--grey-5)', text: 'var(--grey-2)', dot: 'var(--grey-2)' },
};

const easeOut = [0.2, 0.8, 0.2, 1] as const;

export default function CaseStudyHero({
  partnerName,
  projectType,
  title,
  subtitle,
  description,
  tags,
  statusLabel,
  statusVariant = 'active',
  ctaHref,
  ctaLabel = 'Go to website ↗',
  visual,
}: CaseStudyHeroProps) {
  const status = statusLabel ? variantColors[statusVariant] : null;

  return (
    <section
      style={{
        background: 'var(--paper)',
        padding: 'clamp(64px, 8vw, 120px) clamp(20px, 4vw, 56px) clamp(48px, 6vw, 80px)',
      }}
    >
      <div style={{ maxWidth: 1180, margin: '0 auto' }}>
        {(partnerName || projectType) && (
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: easeOut }}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 12,
              fontFamily: 'var(--mono)',
              fontSize: 11,
              letterSpacing: '0.16em',
              textTransform: 'uppercase',
              color: 'var(--grey-2)',
              marginBottom: 28,
            }}
          >
            {partnerName && <span style={{ color: 'var(--accent)' }}>{partnerName}</span>}
            {partnerName && projectType && (
              <span aria-hidden="true" style={{ width: 18, height: 1, background: 'var(--grey-3)' }} />
            )}
            {projectType && <span>{projectType}</span>}
          </motion.div>
        )}

        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.05, ease: easeOut }}
          style={{
            fontFamily: 'var(--serif)',
            fontWeight: 400,
            fontSize: 'clamp(40px, 6.5vw, 88px)',
            lineHeight: 1.0,
            letterSpacing: '-0.025em',
            color: 'var(--ink)',
            margin: 0,
            marginBottom: subtitle ? 20 : 28,
            maxWidth: 1000,
          }}
        >
          {title}
        </motion.h1>

        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.18, ease: easeOut }}
            style={{
              fontFamily: 'var(--serif)',
              fontStyle: 'italic',
              fontSize: 'clamp(20px, 2.4vw, 28px)',
              lineHeight: 1.4,
              color: 'var(--grey-1)',
              margin: 0,
              marginBottom: 28,
              maxWidth: 880,
            }}
          >
            {subtitle}
          </motion.p>
        )}

        {description && (
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25, ease: easeOut }}
            style={{
              fontFamily: 'var(--sans)',
              fontSize: 'clamp(15px, 1.4vw, 17px)',
              lineHeight: 1.6,
              color: 'var(--grey-2)',
              margin: 0,
              marginBottom: 28,
              maxWidth: 760,
            }}
          >
            {description}
          </motion.p>
        )}

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.32, ease: easeOut }}
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: 14,
            alignItems: 'center',
            marginBottom: visual ? 56 : 0,
          }}
        >
          {status && (
            <span
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 8,
                padding: '6px 14px',
                borderRadius: 'var(--r-pill)',
                background: status.bg,
                color: status.text,
                fontFamily: 'var(--mono)',
                fontSize: 11,
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
              }}
            >
              <span style={{ width: 6, height: 6, borderRadius: '50%', background: status.dot }} aria-hidden="true" />
              {statusLabel}
            </span>
          )}

          {tags?.map((tag) => (
            <span
              key={tag}
              style={{
                display: 'inline-block',
                padding: '6px 12px',
                borderRadius: 'var(--r-pill)',
                border: 'var(--hair-2)',
                fontFamily: 'var(--mono)',
                fontSize: 10.5,
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                color: 'var(--ink)',
              }}
            >
              {tag}
            </span>
          ))}

          {ctaHref && (
            <Link
              href={ctaHref}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                padding: '8px 18px',
                borderRadius: 'var(--r-pill)',
                background: 'var(--accent)',
                color: '#fff',
                fontFamily: 'var(--mono)',
                fontSize: 11,
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                textDecoration: 'none',
                transition: 'background 0.2s',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.background = 'var(--accent-soft)')}
              onMouseLeave={(e) => (e.currentTarget.style.background = 'var(--accent)')}
            >
              {ctaLabel}
            </Link>
          )}
        </motion.div>

        {visual && (
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: easeOut }}
            style={{ marginTop: 24 }}
          >
            {visual}
          </motion.div>
        )}
      </div>
    </section>
  );
}
