'use client';

import { useInView } from '@/lib/useInView';

export interface PrincipleItem {
  lead: string;
  body: string;
  sublist?: string[];
}

interface PrincipleListProps {
  items: PrincipleItem[];
}

export default function PrincipleList({ items }: PrincipleListProps) {
  const [ref, inView] = useInView<HTMLUListElement>();

  return (
    <ul
      ref={ref}
      className={`stagger ${inView ? 'stagger--in' : ''}`}
      style={{
        listStyle: 'none',
        padding: 0,
        margin: 0,
        display: 'flex',
        flexDirection: 'column',
        gap: 22,
        maxWidth: 760,
      }}
    >
      {items.map((item, i) => (
        <li
          key={i}
          style={{
            ...({ '--i': i } as React.CSSProperties),
            paddingLeft: 18,
            borderLeft: '2px solid var(--grey-4)',
          }}
        >
          <p
            style={{
              fontFamily: 'var(--sans)',
              fontSize: 16.5,
              lineHeight: 1.6,
              color: 'var(--ink)',
              margin: 0,
            }}
          >
            <strong style={{ fontWeight: 600 }}>{item.lead}</strong>
            {item.body && (
              <>
                {' '}
                <span style={{ color: 'var(--grey-1)' }}>{item.body}</span>
              </>
            )}
          </p>
          {item.sublist && item.sublist.length > 0 && (
            <ul
              style={{
                listStyle: 'none',
                padding: 0,
                margin: '10px 0 0',
                display: 'flex',
                flexDirection: 'column',
                gap: 6,
              }}
            >
              {item.sublist.map((sub, j) => (
                <li
                  key={j}
                  style={{
                    fontFamily: 'var(--sans)',
                    fontSize: 14.5,
                    lineHeight: 1.55,
                    color: 'var(--grey-2)',
                    paddingLeft: 16,
                    position: 'relative',
                  }}
                >
                  <span
                    aria-hidden="true"
                    style={{
                      position: 'absolute',
                      left: 0,
                      top: '0.7em',
                      width: 6,
                      height: 1,
                      background: 'var(--grey-3)',
                    }}
                  />
                  {sub}
                </li>
              ))}
            </ul>
          )}
        </li>
      ))}
    </ul>
  );
}
