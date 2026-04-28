interface SectionHeadingProps {
  children: React.ReactNode;
  className?: string;
}

export default function SectionHeading({ children, className = '' }: SectionHeadingProps) {
  return <h3 className={`text-section text-black ${className}`}>{children}</h3>;
}
