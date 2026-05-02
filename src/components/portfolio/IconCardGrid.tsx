'use client';

import type { LucideIcon } from 'lucide-react';
import { useInView } from '@/lib/useInView';

export interface IconCardItem {
  icon: LucideIcon;
  title: string;
  body: string;
}

interface IconCardGridProps {
  items: IconCardItem[];
  columns?: 2 | 3;
}

export default function IconCardGrid({ items, columns = 2 }: IconCardGridProps) {
  const [ref, inView] = useInView<HTMLDivElement>();
  const isOdd = items.length % columns !== 0;

  return (
    <div
      ref={ref}
      className={`stagger icon-card-grid icon-card-grid--cols-${columns} ${inView ? 'stagger--in' : ''}`}
      style={{
        maxWidth: 1100,
        margin: '0 auto',
      }}
    >
      {items.map((item, i) => {
        const Icon = item.icon;
        const isLastOdd = isOdd && i === items.length - 1;
        return (
          <div
            key={i}
            className={isLastOdd ? 'icon-card icon-card--span-full' : 'icon-card'}
            style={{
              ...({ '--i': i } as React.CSSProperties),
              background: 'var(--paper-card)',
              border: 'var(--hair-2)',
              borderRadius: 'var(--r-md)',
              padding: 'clamp(20px, 2.4vw, 28px)',
              boxShadow: 'var(--shadow-1)',
              display: 'flex',
              gap: 16,
              alignItems: 'flex-start',
              transition: 'box-shadow 200ms ease, border-color 200ms ease, transform 200ms ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.boxShadow = 'var(--shadow-2)';
              e.currentTarget.style.borderColor = 'rgba(50,80,255,0.18)';
              e.currentTarget.style.transform = 'translateY(-2px)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.boxShadow = 'var(--shadow-1)';
              e.currentTarget.style.borderColor = 'rgba(10,10,15,0.12)';
              e.currentTarget.style.transform = '';
            }}
          >
            <div
              style={{
                flexShrink: 0,
                width: 44,
                height: 44,
                borderRadius: 'var(--r-sm)',
                background: 'var(--accent-tint)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--accent)',
              }}
            >
              <Icon size={22} strokeWidth={1.5} aria-hidden="true" />
            </div>
            <div style={{ minWidth: 0 }}>
              <h4
                style={{
                  fontFamily: 'var(--sans)',
                  fontWeight: 600,
                  fontSize: 18,
                  lineHeight: 1.3,
                  color: 'var(--ink)',
                  margin: 0,
                  marginBottom: 6,
                }}
              >
                {item.title}
              </h4>
              <p
                style={{
                  fontFamily: 'var(--sans)',
                  fontSize: 14.5,
                  lineHeight: 1.55,
                  color: 'var(--grey-2)',
                  margin: 0,
                }}
              >
                {item.body}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
