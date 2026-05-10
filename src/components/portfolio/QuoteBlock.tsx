interface QuoteBlockProps {
  quote: string;
  attribution?: string;
}

export default function QuoteBlock({ quote, attribution }: QuoteBlockProps) {
  return (
    <div>
      <p
        style={{
          fontFamily: 'var(--display)',
          fontWeight: 500,
          fontSize: 'clamp(22px, 2.5vw, 28px)',
          lineHeight: 1.3,
          letterSpacing: '-0.015em',
          color: 'var(--ink)',
          marginBottom: attribution ? 8 : 0,
        }}
      >
        &ldquo;{quote}&rdquo;
      </p>
      {attribution && (
        <p
          style={{
            fontFamily: 'var(--mono)',
            fontSize: 11,
            letterSpacing: '0.14em',
            textTransform: 'uppercase',
            color: 'var(--grey-2)',
          }}
        >
          {attribution}
        </p>
      )}
    </div>
  );
}
