'use client';

export default function HeroCursive() {
  return (
    <section
      style={{
        position: 'relative',
        width: '100vw',
        minHeight: '100vh',
        background: 'var(--accent)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        padding: '0 24px',
        boxSizing: 'border-box',
      }}
    >
      <h1
        style={{
          position: 'absolute',
          width: 1,
          height: 1,
          overflow: 'hidden',
          clip: 'rect(0 0 0 0)',
          whiteSpace: 'nowrap',
          border: 0,
          padding: 0,
          margin: -1,
        }}
      >
        Courtney
      </h1>

      <svg
        viewBox="0 0 1200 420"
        style={{ width: 'min(1100px, 88vw)', height: 'auto', display: 'block' }}
        role="img"
        aria-label="Courtney, written in cursive"
      >
        <text
          x="50%"
          y="72%"
          textAnchor="middle"
          fontFamily="'Great Vibes', cursive"
          fontSize="340"
          fontWeight={400}
          className="cursive-draw"
        >
          Courtney
        </text>
      </svg>

      <p className="cursive-tagline">Product Designer</p>
    </section>
  );
}
