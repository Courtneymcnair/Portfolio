interface QuoteBlockProps {
  quote: string;
  attribution?: string;
}

export default function QuoteBlock({ quote, attribution }: QuoteBlockProps) {
  return (
    <div>
      <p className="text-section text-black mb-3">&ldquo;{quote}&rdquo;</p>
      {attribution && (
        <p className="text-quote-attr text-text-muted">{attribution}</p>
      )}
    </div>
  );
}
