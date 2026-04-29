'use client';

import Link from 'next/link';

export default function Footer() {
  return (
    <footer
      className="site-footer"
      style={{
        background: 'var(--paper)',
        borderTop: 'var(--hair-2)',
        padding: '48px 88px 40px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: 32,
        flexWrap: 'wrap',
      }}
    >
      {/* Left — wordmark */}
      <Link
        href="/"
        style={{
          fontFamily: 'var(--mono)',
          fontSize: 11,
          letterSpacing: '0.12em',
          textTransform: 'uppercase',
          color: 'var(--ink)',
          textDecoration: 'none',
          opacity: 0.6,
          transition: 'opacity 0.2s',
        }}
        onMouseEnter={e => (e.currentTarget.style.opacity = '1')}
        onMouseLeave={e => (e.currentTarget.style.opacity = '0.6')}
      >
        Courtney McNair
      </Link>

      {/* Center — nav links */}
      <div style={{ display: 'flex', gap: 28, alignItems: 'center' }}>
        <Link
          href="/"
          style={{
            fontFamily: 'var(--mono)',
            fontSize: 11,
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            color: 'var(--ink)',
            textDecoration: 'none',
            opacity: 0.6,
            transition: 'opacity 0.2s',
          }}
          onMouseEnter={e => (e.currentTarget.style.opacity = '1')}
          onMouseLeave={e => (e.currentTarget.style.opacity = '0.6')}
        >
          Work
        </Link>
        <Link
          href="/about"
          style={{
            fontFamily: 'var(--mono)',
            fontSize: 11,
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            color: 'var(--ink)',
            textDecoration: 'none',
            opacity: 0.6,
            transition: 'opacity 0.2s',
          }}
          onMouseEnter={e => (e.currentTarget.style.opacity = '1')}
          onMouseLeave={e => (e.currentTarget.style.opacity = '0.6')}
        >
          About
        </Link>
      </div>

      {/* Right — contact CTA */}
      <a
        href="mailto:camcnair@alumni.unc.edu?subject=Let's Connect"
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: 8,
          padding: '8px 20px',
          borderRadius: 'var(--r-pill)',
          background: 'var(--accent)',
          fontFamily: 'var(--mono)',
          fontSize: 11,
          letterSpacing: '0.1em',
          textTransform: 'uppercase',
          color: '#fff',
          textDecoration: 'none',
          transition: 'background 0.2s',
        }}
        onMouseEnter={e => ((e.currentTarget as HTMLElement).style.background = 'var(--accent-soft)')}
        onMouseLeave={e => ((e.currentTarget as HTMLElement).style.background = 'var(--accent)')}
      >
        Get in touch ↗
      </a>
    </footer>
  );
}
