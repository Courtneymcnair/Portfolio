'use client';

import { useInView } from '@/lib/useInView';

interface NumberedStepProps {
  number: string;
  title: string;
  children: React.ReactNode;
}

export default function NumberedStep({ number, title, children }: NumberedStepProps) {
  const [ref, inView] = useInView<HTMLElement>();

  return (
    <section
      ref={ref}
      style={{
        maxWidth: 1100,
        margin: '0 auto',
        padding: 'clamp(28px, 4vw, 48px) clamp(20px, 4vw, 56px)',
      }}
      className="numbered-step"
    >
      <header
        style={{
          display: 'flex',
          alignItems: 'baseline',
          gap: 'clamp(14px, 2vw, 24px)',
          marginBottom: 24,
        }}
      >
        <span
          className={`num-eyebrow ${inView ? 'num-eyebrow--in' : ''}`}
          style={{
            flexShrink: 0,
            minWidth: 'clamp(40px, 5vw, 64px)',
            fontFamily: 'var(--mono)',
            fontSize: 'clamp(28px, 4vw, 48px)',
            lineHeight: 1,
            color: 'var(--accent)',
            letterSpacing: '-0.01em',
            fontWeight: 400,
          }}
        >
          {number}
        </span>
        <h3
          style={{
            flex: 1,
            fontFamily: 'var(--serif)',
            fontWeight: 400,
            fontSize: 'clamp(24px, 3vw, 34px)',
            lineHeight: 1.2,
            letterSpacing: '-0.015em',
            color: 'var(--ink)',
            margin: 0,
          }}
        >
          {title}
        </h3>
      </header>
      <div
        style={{
          fontFamily: 'var(--sans)',
          fontSize: 16.5,
          lineHeight: 1.65,
          color: 'var(--grey-1)',
          maxWidth: '100%',
        }}
      >
        {children}
      </div>
    </section>
  );
}
