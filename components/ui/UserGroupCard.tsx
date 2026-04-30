import Image from 'next/image';

interface UserGroupSection {
  label: string;
  content: string;
}

interface UserGroupCardProps {
  iconSrc: string;
  iconAlt: string;
  name: string;
  sections: UserGroupSection[];
}

export default function UserGroupCard({ iconSrc, iconAlt, name, sections }: UserGroupCardProps) {
  return (
    <div
      style={{
        background: 'var(--accent-tint)',
        borderRadius: 'var(--r-md)',
        padding: '32px 24px',
        display: 'flex',
        flexDirection: 'column',
        gap: 20,
      }}
    >
      <div style={{ position: 'relative', width: 114, height: 114, margin: '0 auto' }}>
        <Image src={iconSrc} alt={iconAlt} fill className="object-contain" unoptimized />
      </div>
      <h5
        style={{
          fontFamily: 'var(--sans)',
          fontWeight: 500,
          fontSize: 20,
          color: 'var(--ink)',
          textAlign: 'center',
          margin: 0,
        }}
      >
        {name}
      </h5>
      {sections.map((section) => (
        <div key={section.label}>
          <p
            style={{
              fontFamily: 'var(--mono)',
              fontSize: 10,
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
              color: 'var(--grey-2)',
              marginBottom: 6,
            }}
          >
            {section.label}
          </p>
          <p style={{ fontSize: 14, lineHeight: 1.55, color: 'var(--grey-1)' }}>
            {section.content}
          </p>
        </div>
      ))}
    </div>
  );
}
