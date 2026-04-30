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
        padding: '12px 28px',
        borderRadius: 'var(--r-pill)',
        background: 'var(--accent)',
        color: '#fff',
        fontFamily: 'var(--sans)',
        fontSize: 16,
        fontWeight: 500,
        textDecoration: 'none',
        transition: 'opacity 0.2s',
      }}
    >
      {label}
    </a>
  );
}
