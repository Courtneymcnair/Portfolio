'use client';

import { useInView } from '@/lib/useInView';

type StatusVariant = 'active' | 'shipped' | 'planned';

interface ImpactStatusBlockProps {
  statusLabel: string;
  statusVariant?: StatusVariant;
  today: string[];
  coming?: string[];
  futureNote?: string;
  todayLabel?: string;
  comingLabel?: string;
}

const variantColors: Record<StatusVariant, { bg: string; text: string; dot: string }> = {
  active: { bg: 'var(--accent-tint)', text: 'var(--accent)', dot: 'var(--accent)' },
  shipped: { bg: '#E6F4EA', text: '#1E7C3A', dot: '#1E7C3A' },
  planned: { bg: 'var(--grey-5)', text: 'var(--grey-2)', dot: 'var(--grey-2)' },
};

export default function ImpactStatusBlock({
  statusLabel,
  statusVariant = 'active',
  today,
  coming,
  futureNote,
  todayLabel = 'Today',
  comingLabel = 'Coming',
}: ImpactStatusBlockProps) {
  const [ref, inView] = useInView<HTMLDivElement>();
  const colors = variantColors[statusVariant];

  return (
    <div
      ref={ref}
      className={`reveal ${inView ? 'reveal--in' : ''}`}
      style={{ maxWidth: 1100, margin: '0 auto', display: 'flex', flexDirection: 'column', gap: 32 }}
    >
      <span
        style={{
          alignSelf: 'flex-start',
          display: 'inline-flex',
          alignItems: 'center',
          gap: 8,
          padding: '6px 14px',
          borderRadius: 'var(--r-pill)',
          background: colors.bg,
          color: colors.text,
          fontFamily: 'var(--mono)',
          fontSize: 11,
          letterSpacing: '0.12em',
          textTransform: 'uppercase',
        }}
      >
        <span
          style={{
            width: 6,
            height: 6,
            borderRadius: '50%',
            background: colors.dot,
          }}
          aria-hidden="true"
        />
        {statusLabel}
      </span>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: coming ? 'repeat(auto-fit, minmax(280px, 1fr))' : '1fr',
          gap: 32,
        }}
      >
        <StatusColumn label={todayLabel} items={today} accent />
        {coming && <StatusColumn label={comingLabel} items={coming} />}
      </div>

      {futureNote && (
        <p
          style={{
            fontFamily: 'var(--display)',
            fontStyle: 'italic',
            fontWeight: 400,
            fontSize: 16,
            lineHeight: 1.5,
            color: 'var(--grey-2)',
            margin: 0,
            paddingTop: 16,
            borderTop: 'var(--hair-2)',
          }}
        >
          {futureNote}
        </p>
      )}
    </div>
  );
}

function StatusColumn({
  label,
  items,
  accent = false,
}: {
  label: string;
  items: string[];
  accent?: boolean;
}) {
  return (
    <div>
      <p
        style={{
          fontFamily: 'var(--mono)',
          fontSize: 11,
          letterSpacing: '0.16em',
          textTransform: 'uppercase',
          color: accent ? 'var(--accent)' : 'var(--grey-2)',
          margin: 0,
          marginBottom: 14,
        }}
      >
        {label}
      </p>
      <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 10 }}>
        {items.map((item, i) => (
          <li
            key={i}
            style={{
              fontFamily: 'var(--sans)',
              fontSize: 15,
              lineHeight: 1.55,
              color: 'var(--grey-1)',
              paddingLeft: 18,
              position: 'relative',
            }}
          >
            <span
              aria-hidden="true"
              style={{
                position: 'absolute',
                left: 0,
                top: '0.7em',
                width: 8,
                height: 1,
                background: accent ? 'var(--accent)' : 'var(--grey-3)',
              }}
            />
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
