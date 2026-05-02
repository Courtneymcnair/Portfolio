interface JumpButtonProps {
  href: string;
  label?: string;
}

export default function JumpButton({ href, label = 'Jump to Final Design' }: JumpButtonProps) {
  return (
    <a
      href={href}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        padding: 'clamp(8px, 1.5vw, 12px) clamp(18px, 3vw, 28px)',
        borderRadius: 'var(--r-pill)',
        background: 'var(--accent)',
        color: '#fff',
        fontFamily: 'var(--sans)',
        fontSize: 'clamp(13px, 1.4vw, 16px)',
        fontWeight: 500,
        textDecoration: 'none',
        transition: 'opacity 0.2s',
      }}
    >
      {label}
    </a>
  );
}
