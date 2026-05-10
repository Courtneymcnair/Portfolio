'use client';

import type { ReactNode } from 'react';
import { useInView } from '@/lib/useInView';

type Ratio = 'equal' | 'text-heavy' | 'visual-heavy';
type Align = 'top' | 'center';

interface TwoColumnProps {
  text: ReactNode;
  visual: ReactNode;
  ratio?: Ratio;
  align?: Align;
  reverse?: boolean;
  gap?: number;
}

const ratioMap: Record<Ratio, string> = {
  equal: 'minmax(0, 1fr) minmax(0, 1fr)',
  'text-heavy': 'minmax(0, 1.2fr) minmax(0, 1fr)',
  'visual-heavy': 'minmax(0, 1fr) minmax(0, 1.4fr)',
};

export default function TwoColumn({
  text,
  visual,
  ratio = 'equal',
  align = 'center',
  reverse = false,
  gap = 64,
}: TwoColumnProps) {
  const [ref, inView] = useInView<HTMLDivElement>();

  return (
    <div
      ref={ref}
      className={`two-col reveal ${inView ? 'reveal--in' : ''} ${reverse ? 'two-col--reverse' : ''}`}
      style={{
        display: 'grid',
        gridTemplateColumns: ratioMap[ratio],
        gap,
        alignItems: align === 'center' ? 'center' : 'start',
        width: '100%',
        maxWidth: 1100,
        margin: '0 auto',
      }}
    >
      <div style={{ order: reverse ? 2 : 1, minWidth: 0 }}>{text}</div>
      <div style={{ order: reverse ? 1 : 2, minWidth: 0 }}>{visual}</div>

      <style>{`
        @media (max-width: 860px) {
          .two-col {
            grid-template-columns: 1fr !important;
            gap: 32px !important;
          }
          .two-col > div {
            order: unset !important;
          }
          .two-col.two-col--reverse > div:first-child {
            order: 2 !important;
          }
          .two-col.two-col--reverse > div:last-child {
            order: 1 !important;
          }
        }
      `}</style>
    </div>
  );
}
