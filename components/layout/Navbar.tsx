'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

export default function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  const isWork = pathname === '/' || pathname.startsWith('/work');
  const isAbout = pathname === '/about';
  const onBlueBg = pathname === '/';

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 h-[60px] flex items-center">
        <div className="content-width w-full flex items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className={`text-logo transition-opacity hover:opacity-70 ${
              onBlueBg ? '!text-white/70' : ''
            }`}
          >
            Courtney McNair
          </Link>

          {/* Center nav links */}
          <div className="hidden md:flex items-center gap-8">
            <Link
              href="/"
              className={`font-satoshi text-[18px] font-normal transition-colors ${
                isWork
                  ? onBlueBg
                    ? 'text-white'
                    : 'text-brand-blue'
                  : onBlueBg
                  ? 'text-white/70 hover:text-white'
                  : 'text-black hover:text-brand-blue'
              }`}
            >
              Work
            </Link>
            <Link
              href="/about"
              className={`font-satoshi text-[18px] font-normal transition-colors ${
                isAbout
                  ? onBlueBg
                    ? 'text-white'
                    : 'text-brand-blue'
                  : onBlueBg
                  ? 'text-white/70 hover:text-white'
                  : 'text-black hover:text-brand-blue'
              }`}
            >
              About
            </Link>
          </div>

          {/* LinkedIn pill */}
          <a
            href="https://www.linkedin.com/in/courtney-mcnair/"
            target="_blank"
            rel="noopener noreferrer"
            className={`hidden md:flex items-center gap-2 px-5 py-2 rounded-full text-[14px] font-medium transition-colors border ${
              onBlueBg
                ? 'border-white/40 text-white hover:bg-white/10'
                : 'border-black/20 text-black hover:bg-black/5'
            }`}
          >
            <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
            LinkedIn
          </a>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileOpen(true)}
            className={`md:hidden font-satoshi text-[16px] font-medium ${
              onBlueBg ? 'text-white' : 'text-black'
            }`}
            aria-label="Open navigation"
          >
            Menu
          </button>
        </div>
      </nav>

      {/* Mobile nav overlay */}
      {mobileOpen && (
        <div className="fixed inset-0 z-[100] bg-white flex flex-col">
          <div className="flex items-center justify-end h-[60px] px-6">
            <button
              onClick={() => setMobileOpen(false)}
              className="text-black text-[24px] font-light leading-none"
              aria-label="Close navigation"
            >
              ✕
            </button>
          </div>
          <div className="flex flex-col items-center justify-center flex-1 gap-10">
            <Link
              href="/"
              onClick={() => setMobileOpen(false)}
              className={`font-satoshi text-[28px] ${isWork ? 'text-brand-blue' : 'text-black'}`}
            >
              Work
            </Link>
            <Link
              href="/about"
              onClick={() => setMobileOpen(false)}
              className={`font-satoshi text-[28px] ${isAbout ? 'text-brand-blue' : 'text-black'}`}
            >
              About
            </Link>
            <a
              href="https://www.linkedin.com/in/courtney-mcnair/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-satoshi text-[28px] text-black"
            >
              LinkedIn
            </a>
          </div>
        </div>
      )}
    </>
  );
}
