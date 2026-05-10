'use client';

import { useInView } from '@/lib/useInView';

interface HookCalloutProps {
  label?: string;
  children: React.ReactNode;
}

export default function HookCallout({ label = 'The hook', children }: HookCalloutProps) {
  const [ref, inView] = useInView<HTMLDivElement>();

  return (
    <div
      ref={ref}
      className={`reveal ${inView ? 'reveal--in' : ''}`}
      style={{
        background: 'var(--accent-tint-3)',
        border: 'var(--hair-blue)',
        borderRadius: 'var(--r-md)',
        padding: 'clamp(20px, 3vw, 32px)',
        maxWidth: 880,
        margin: '0 auto',
      }}
    >
      <p
        style={{
          fontFamily: 'var(--mono)',
          fontSize: 11,
          letterSpacing: '0.16em',
          textTransform: 'uppercase',
          color: 'var(--accent)',
          margin: 0,
          marginBottom: 10,
        }}
      >
        {label}
      </p>
      <p
        style={{
          fontFamily: 'var(--display)',
          fontWeight: 500,
          fontSize: 'clamp(18px, 1.8vw, 22px)',
          lineHeight: 1.45,
          letterSpacing: '-0.01em',
          color: 'var(--ink)',
          margin: 0,
        }}
      >
        {children}
      </p>
    </div>
  );
}
