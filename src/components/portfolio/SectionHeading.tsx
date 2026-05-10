interface SectionHeadingProps {
  children: React.ReactNode;
  className?: string;
}

export default function SectionHeading({ children, className = '' }: SectionHeadingProps) {
  return (
    <h3
      className={className}
      style={{
        fontFamily: 'var(--display)',
        fontWeight: 500,
        fontSize: 'clamp(28px, 3.5vw, 40px)',
        lineHeight: 1.15,
        letterSpacing: '-0.005em',
        color: 'var(--ink)',
      }}
    >
      {children}
    </h3>
  );
}
