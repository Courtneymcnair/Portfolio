'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

// ─── Case data ──────────────────────────────────────────────────────────────

const CASES = [
  {
    n: '01',
    title: 'Operations Management Platform',
    pills: ['0→1', 'B2B SaaS', 'Design Systems', 'Sole Designer'],
    brief:
      'Shipping complex operational workflows at startup speed while building design infrastructure from the ground up.',
    metric: '0→1 foundation',
    href: '/work/chekhub',
    thumb: '/images/thumbnails/chekhub.png',
    thumbAlt: 'CheKHub dashboard showing data center operations management interface',
  },
  {
    n: '02',
    title: 'Open-Access Sign Language Dictionary',
    pills: ['Accessibility', 'Research', 'Video UX', 'Lead Designer'],
    brief:
      'Led the design of a freely available video dictionary making FSL resources accessible to deaf and hard-of-hearing communities.',
    metric: 'Open-access launch',
    href: '/work/fsldictionary',
    thumb: '/images/thumbnails/fsl.png',
    thumbAlt: 'FSL Dictionary app showing sign language categories and video player',
  },
  {
    n: '03',
    title: 'Wearable Fitness for Personalized Music',
    pills: ['Product Concept', 'Wearables', 'Music UX'],
    brief:
      'A Spotify feature concept integrating wearable fitness data to personalize music to real-time physiological state.',
    metric: 'End-to-end concept',
    href: '/work/spotifyactive',
    thumb: '/images/thumbnails/spotify.png',
    thumbAlt: 'Spotify Active feature showing workout music integration with wearable data',
  },
];

// ─── Main section ─────────────────────────────────────────────────────────────

export default function SelectWorks() {
  const rowRefs = useRef<(HTMLDivElement | null)[]>([]);
  const ctaRefs = useRef<(HTMLAnchorElement | null)[]>([]);
  const [active, setActive] = useState(0);
  const activeRef = useRef(0);

  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const update = () => {
      const mid = window.innerHeight / 2;
      let bestDist = Infinity;
      let best = 0;

      rowRefs.current.forEach((el, i) => {
        if (!el) return;
        const rect = el.getBoundingClientRect();
        const rowCenter = rect.top + rect.height / 2;
        const dist = Math.abs(rowCenter - mid);
        if (dist < bestDist) { bestDist = dist; best = i; }
      });

      // Apply depth imperatively — no re-render needed
      rowRefs.current.forEach((el, i) => {
        if (!el) return;
        const rect = el.getBoundingClientRect();
        const rowCenter = rect.top + rect.height / 2;
        const dist = Math.min(1, Math.abs(rowCenter - mid) / (window.innerHeight * 0.7));
        const eased = dist * dist;
        const scale = prefersReduced ? 1 : 1 - eased * 0.22;
        const depthOpacity = 1 - eased * 0.55;
        const baseOpacity = i === best ? 1 : 0.45;
        el.style.transform = `scale(${scale})`;
        el.style.opacity = String(baseOpacity * depthOpacity);
      });

      // CTA visibility
      ctaRefs.current.forEach((el, i) => {
        if (!el) return;
        el.style.opacity = i === best ? '1' : '0.5';
      });

      if (best !== activeRef.current) {
        activeRef.current = best;
        setActive(best);
      }
    };

    window.addEventListener('scroll', update, { passive: true });
    update();
    return () => window.removeEventListener('scroll', update);
  }, []);

  return (
    <section style={{ background: 'var(--paper)' }}>
      {/* Section header */}
      <div
        className="select-works-header"
        style={{
          padding: '64px 88px 48px',
          display: 'flex',
          alignItems: 'baseline',
          justifyContent: 'space-between',
          borderBottom: '1px solid rgba(10,10,15,0.1)',
        }}
      >
        <div>
          <h2
            style={{
              fontFamily: 'var(--serif)',
              fontWeight: 400,
              fontSize: 'clamp(48px, 7vw, 96px)',
              lineHeight: 0.95,
              letterSpacing: '-0.02em',
              margin: 0,
              color: 'var(--ink)',
            }}
          >
            Select <em>works</em>
          </h2>
        </div>
      </div>

      {/* Case rows */}
      <div className="select-works-body" style={{ padding: '60px 88px 80px' }}>
        {CASES.map((c, i) => {
          const titleWords = c.title.split(' ');
          const titleInit = titleWords.slice(0, -1).join(' ');
          const titleLast = titleWords[titleWords.length - 1];

          return (
            <div
              key={c.n}
              ref={(el) => { rowRefs.current[i] = el; }}
              data-case={i}
              className="case-row"
              style={{
                marginBottom: i === CASES.length - 1 ? 0 : 220,
                willChange: 'transform, opacity',
                transition: 'opacity 0.25s linear',
              }}
            >
              {/* Left — text */}
              <div>
                {/* Case meta */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 14,
                    fontFamily: 'var(--mono)',
                    fontSize: 11,
                    letterSpacing: '0.16em',
                    textTransform: 'uppercase',
                    color: 'var(--grey-2)',
                    marginBottom: 22,
                  }}
                >
                  <span style={{ color: 'var(--accent)' }}>{c.n}</span>
                </div>

                {/* Title */}
                <h3
                  style={{
                    fontFamily: 'var(--serif)',
                    fontWeight: 400,
                    fontSize: 'clamp(32px, 4vw, 60px)',
                    lineHeight: 1.0,
                    letterSpacing: '-0.02em',
                    margin: 0,
                    marginBottom: 26,
                    color: 'var(--ink)',
                  }}
                >
                  {titleInit} <em>{titleLast}</em>
                </h3>

                {/* Pills */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 7, marginBottom: 24 }}>
                  {c.pills.map((p) => (
                    <span
                      key={p}
                      style={{
                        display: 'inline-block',
                        fontFamily: 'var(--mono)',
                        fontSize: 10.5,
                        letterSpacing: '0.12em',
                        textTransform: 'uppercase',
                        padding: '5px 11px',
                        border: '1px solid rgba(10,10,15,0.18)',
                        borderRadius: 'var(--r-pill)',
                        color: 'var(--ink)',
                        background: 'transparent',
                        lineHeight: 1.1,
                        whiteSpace: 'nowrap',
                      }}
                    >
                      {p}
                    </span>
                  ))}
                </div>

                {/* Brief */}
                <p
                  style={{
                    fontFamily: 'var(--serif)',
                    fontSize: 19,
                    lineHeight: 1.5,
                    color: 'var(--grey-1)',
                    margin: 0,
                    maxWidth: 460,
                  }}
                >
                  {c.brief}
                </p>

                {/* CTA */}
                <Link
                  href={c.href}
                  ref={(el) => { ctaRefs.current[i] = el; }}
                  style={{
                    display: 'inline-block',
                    marginTop: 26,
                    fontFamily: 'var(--mono)',
                    fontSize: 11,
                    letterSpacing: '0.18em',
                    textTransform: 'uppercase',
                    color: 'var(--accent)',
                    textDecoration: 'none',
                    opacity: 0.5,
                    transition: 'opacity 0.5s',
                  }}
                >
                  ↳ {c.metric} · Read case →
                </Link>
              </div>

              {/* Right — thumbnail */}
              <div className="case-thumb" style={{ position: 'relative' }}>
                <div
                  style={{
                    position: 'absolute',
                    top: -28,
                    right: 0,
                    fontFamily: 'var(--mono)',
                    fontSize: 10,
                    letterSpacing: '0.18em',
                    textTransform: 'uppercase',
                    color: 'var(--grey-2)',
                  }}
                >
                  Fig. {c.n}
                </div>
                <Link
                  href={c.href}
                  style={{
                    display: 'block',
                    borderRadius: 'var(--r-md)',
                    border: '1px solid rgba(10,10,15,0.12)',
                    overflow: 'hidden',
                    transition: 'border-color 0.2s',
                  }}
                  onMouseEnter={e => (e.currentTarget.style.borderColor = 'var(--accent)')}
                  onMouseLeave={e => (e.currentTarget.style.borderColor = 'rgba(10,10,15,0.12)')}
                >
                  <Image
                    src={c.thumb}
                    alt={c.thumbAlt}
                    width={700}
                    height={525}
                    style={{
                      display: 'block',
                      width: '100%',
                      height: 'auto',
                    }}
                  />
                </Link>
              </div>
            </div>
          );
        })}

      </div>
    </section>
  );
}
