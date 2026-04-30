interface SectionHeadingProps {
  children: React.ReactNode;
  className?: string;
}

export default function SectionHeading({ children, className = '' }: SectionHeadingProps) {
  return (
    <h3
      className={className}
      style={{
        fontFamily: 'var(--serif)',
        fontWeight: 400,
        fontSize: 'clamp(28px, 3.5vw, 40px)',
        lineHeight: 1.1,
        letterSpacing: '-0.02em',
        color: 'var(--ink)',
      }}
    >
      {children}
    </h3>
  );
}
