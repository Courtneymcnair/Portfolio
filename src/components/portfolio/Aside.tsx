interface AsideProps {
  label?: string;
  children: React.ReactNode;
}

export default function Aside({ label = 'Why this matters', children }: AsideProps) {
  return (
    <div
      style={{
        margin: '24px 0',
        paddingLeft: 18,
        borderLeft: `2px solid var(--accent)`,
        maxWidth: 760,
      }}
    >
      <p
        style={{
          fontFamily: 'var(--mono)',
          fontSize: 10,
          letterSpacing: '0.16em',
          textTransform: 'uppercase',
          color: 'var(--accent)',
          margin: 0,
          marginBottom: 6,
        }}
      >
        {label}
      </p>
      <p
        style={{
          fontFamily: 'var(--serif)',
          fontStyle: 'italic',
          fontSize: 18,
          lineHeight: 1.5,
          color: 'var(--grey-1)',
          margin: 0,
        }}
      >
        {children}
      </p>
    </div>
  );
}
