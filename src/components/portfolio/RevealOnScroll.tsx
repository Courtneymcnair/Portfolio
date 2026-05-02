'use client';

import { useInView } from '@/lib/useInView';

interface RevealOnScrollProps {
  children: React.ReactNode;
  delay?: number;
  as?: keyof React.JSX.IntrinsicElements;
  className?: string;
  style?: React.CSSProperties;
}

export default function RevealOnScroll({
  children,
  delay = 0,
  as = 'div',
  className = '',
  style,
}: RevealOnScrollProps) {
  const [ref, inView] = useInView<HTMLDivElement>();
  const Tag = as as 'div';

  return (
    <Tag
      ref={ref}
      className={`reveal ${inView ? 'reveal--in' : ''} ${className}`.trim()}
      style={{ ...style, transitionDelay: delay ? `${delay}ms` : undefined }}
    >
      {children}
    </Tag>
  );
}
