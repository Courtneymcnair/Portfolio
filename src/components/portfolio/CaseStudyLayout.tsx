interface CaseStudyLayoutProps {
  children: React.ReactNode;
}

export default function CaseStudyLayout({ children }: CaseStudyLayoutProps) {
  return (
    <main
      style={{
        minHeight: '100vh',
        background: 'var(--paper)',
        paddingTop: 64,
      }}
    >
      {children}
    </main>
  );
}

interface SectionProps {
  eyebrow?: string;
  heading?: string;
  background?: 'paper' | 'paper-warm' | 'white';
  topRule?: boolean;
  children: React.ReactNode;
}

const bgMap = {
  paper: 'var(--paper)',
  'paper-warm': 'var(--paper-warm)',
  white: 'var(--paper-card)',
} as const;

export function CaseStudySection({
  eyebrow,
  heading,
  background = 'paper',
  topRule = false,
  children,
}: SectionProps) {
  return (
    <section
      style={{
        background: bgMap[background],
        padding: 'clamp(56px, 8vw, 96px) clamp(20px, 4vw, 56px)',
        borderTop: topRule ? 'var(--hair)' : undefined,
      }}
    >
      <div style={{ maxWidth: 1180, margin: '0 auto' }}>
        {(eyebrow || heading) && (
          <header style={{ marginBottom: 'clamp(28px, 4vw, 48px)' }}>
            {eyebrow && (
              <p
                style={{
                  fontFamily: 'var(--mono)',
                  fontSize: 11,
                  letterSpacing: '0.16em',
                  textTransform: 'uppercase',
                  color: 'var(--accent)',
                  margin: 0,
                  marginBottom: 12,
                }}
              >
                {eyebrow}
              </p>
            )}
            {heading && (
              <h2
                style={{
                  fontFamily: 'var(--display)',
                  fontWeight: 600,
                  fontSize: 'clamp(32px, 4.5vw, 56px)',
                  lineHeight: 1.1,
                  letterSpacing: '-0.01em',
                  color: 'var(--ink)',
                  margin: 0,
                  maxWidth: 880,
                }}
              >
                {heading}
              </h2>
            )}
          </header>
        )}
        {children}
      </div>
    </section>
  );
}
