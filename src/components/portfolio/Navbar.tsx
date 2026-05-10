'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

export default function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  if (pathname.startsWith('/sandbox')) return null;

  const isWork = pathname === '/' || pathname.startsWith('/work');
  const isAbout = pathname === '/about';

  return (
    <>
      <nav
        style={{
          position: 'fixed',
          top: 0, left: 0, right: 0,
          zIndex: 50,
          height: 64,
          display: 'flex',
          alignItems: 'center',
          paddingLeft: 56,
          paddingRight: 56,
          justifyContent: 'space-between',
          background: 'var(--paper)',
          borderBottom: 'var(--hair)',
        }}
      >
        {/* Logo / name */}
        <Link
          href="/"
          style={{
            fontFamily: 'var(--mono)',
            fontSize: 12,
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            color: 'var(--ink)',
            textDecoration: 'none',
            opacity: 1,
            transition: 'opacity 0.2s',
          }}
          onMouseEnter={e => (e.currentTarget.style.opacity = '0.5')}
          onMouseLeave={e => (e.currentTarget.style.opacity = '1')}
        >
          Courtney McNair
        </Link>

        {/* Center links */}
        <div className="hidden md:flex" style={{ gap: 32, alignItems: 'center' }}>
          <Link
            href="/"
            style={{
              fontFamily: 'var(--mono)',
              fontSize: 12,
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              textDecoration: 'none',
              color: isWork ? 'var(--accent)' : 'var(--ink)',
              opacity: isWork ? 1 : 0.6,
              transition: 'opacity 0.2s, color 0.2s',
            }}
            onMouseEnter={e => (e.currentTarget.style.opacity = '1')}
            onMouseLeave={e => (e.currentTarget.style.opacity = isWork ? '1' : '0.6')}
          >
            Work
          </Link>
          <Link
            href="/about"
            style={{
              fontFamily: 'var(--mono)',
              fontSize: 12,
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              textDecoration: 'none',
              color: isAbout ? 'var(--accent)' : 'var(--ink)',
              opacity: isAbout ? 1 : 0.6,
              transition: 'opacity 0.2s, color 0.2s',
            }}
            onMouseEnter={e => (e.currentTarget.style.opacity = '1')}
            onMouseLeave={e => (e.currentTarget.style.opacity = isAbout ? '1' : '0.6')}
          >
            About
          </Link>
        </div>

        {/* LinkedIn pill */}
        <a
          href="https://www.linkedin.com/in/courtney-mcnair/"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:flex"
          style={{
            alignItems: 'center',
            gap: 8,
            padding: '6px 16px',
            borderRadius: 'var(--r-pill)',
            border: 'var(--hair-2)',
            fontFamily: 'var(--mono)',
            fontSize: 11,
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
            color: 'var(--ink)',
            textDecoration: 'none',
            transition: 'background 0.2s, color 0.2s',
          }}
          onMouseEnter={e => {
            (e.currentTarget as HTMLElement).style.background = 'var(--accent-tint)';
            (e.currentTarget as HTMLElement).style.color = 'var(--accent)';
            (e.currentTarget as HTMLElement).style.borderColor = 'var(--accent)';
          }}
          onMouseLeave={e => {
            (e.currentTarget as HTMLElement).style.background = 'transparent';
            (e.currentTarget as HTMLElement).style.color = 'var(--ink)';
            (e.currentTarget as HTMLElement).style.borderColor = 'rgba(10,10,15,0.12)';
          }}
        >
          <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
          </svg>
          LinkedIn
        </a>

        {/* Mobile menu button */}
        <button
          onClick={() => setMobileOpen(true)}
          className="md:hidden"
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: 28,
            height: 28,
            color: 'var(--ink)',
            background: 'none',
            border: 'none',
            padding: 0,
            cursor: 'pointer',
          }}
          aria-label="Open navigation"
        >
          <svg width="22" height="22" viewBox="0 0 22 22" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" aria-hidden="true">
            <line x1="3" y1="6" x2="19" y2="6" />
            <line x1="3" y1="11" x2="19" y2="11" />
            <line x1="3" y1="16" x2="19" y2="16" />
          </svg>
        </button>
      </nav>

      {/* Mobile overlay */}
      {mobileOpen && (
        <div
          style={{
            position: 'fixed', inset: 0, zIndex: 100,
            background: 'var(--paper)',
            display: 'flex', flexDirection: 'column',
          }}
        >
          <div style={{ display: 'flex', justifyContent: 'flex-end', height: 64, alignItems: 'center', paddingRight: 22 }}>
            <button
              onClick={() => setMobileOpen(false)}
              style={{
                fontFamily: 'var(--mono)', fontSize: 12, letterSpacing: '0.08em',
                textTransform: 'uppercase', color: 'var(--ink)',
                background: 'none', border: 'none', cursor: 'pointer',
              }}
              aria-label="Close navigation"
            >
              Close
            </button>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', flex: 1, gap: 16 }}>
            {[
              { href: '/', label: 'Work', active: isWork },
              { href: '/about', label: 'About', active: isAbout },
            ].map(({ href, label, active }) => (
              <Link
                key={href}
                href={href}
                onClick={() => setMobileOpen(false)}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  padding: '10px 24px',
                  borderRadius: 'var(--r-pill)',
                  border: active ? '1px solid var(--accent)' : 'var(--hair-2)',
                  fontFamily: 'var(--mono)',
                  fontSize: 11,
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  color: active ? 'var(--accent)' : 'var(--ink)',
                  textDecoration: 'none',
                }}
              >
                {label}
              </Link>
            ))}
            <a
              href="https://www.linkedin.com/in/courtney-mcnair/"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 8,
                padding: '10px 24px',
                borderRadius: 'var(--r-pill)',
                border: 'var(--hair-2)',
                fontFamily: 'var(--mono)',
                fontSize: 11,
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                color: 'var(--ink)',
                textDecoration: 'none',
              }}
            >
              <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
              LinkedIn
            </a>
          </div>
        </div>
      )}
    </>
  );
}
