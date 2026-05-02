'use client';

import Image from 'next/image';
import { motion } from 'motion/react';

interface SidePanel {
  src: string;
  alt: string;
  label?: string;
}

interface HeroCompositeProps {
  left: SidePanel;
  right: SidePanel;
  showTicketLoop?: boolean;
  ticketLabel?: string;
  accent?: string;
}

const easeOut = [0.2, 0.8, 0.2, 1] as const;

export default function HeroComposite({
  left,
  right,
  showTicketLoop = true,
  ticketLabel = 'TICKET #1042',
  accent = 'var(--accent)',
}: HeroCompositeProps) {
  return (
    <div
      style={{
        position: 'relative',
        width: '100%',
        maxWidth: 1180,
        margin: '0 auto',
        padding: '0 16px',
      }}
    >
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr auto 1fr',
          alignItems: 'center',
          gap: 'clamp(20px, 4vw, 60px)',
          position: 'relative',
        }}
        className="hero-composite-grid"
      >
        <Panel side="left" panel={left} />
        <ConnectionColumn accent={accent} showTicketLoop={showTicketLoop} ticketLabel={ticketLabel} />
        <Panel side="right" panel={right} />
      </div>
    </div>
  );
}

function Panel({ side, panel }: { side: 'left' | 'right'; panel: SidePanel }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: side === 'left' ? -24 : 24 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.7, delay: side === 'left' ? 0.05 : 0.2, ease: easeOut }}
      style={{
        position: 'relative',
        aspectRatio: '4 / 3',
        width: '100%',
        borderRadius: 'var(--r-md)',
        overflow: 'hidden',
        border: 'var(--hair-2)',
        boxShadow: 'var(--shadow-2)',
        background: 'var(--accent-tint-3)',
      }}
    >
      <Image src={panel.src} alt={panel.alt} fill className="object-cover" sizes="(max-width: 768px) 50vw, 500px" />
      {panel.label && (
        <span
          style={{
            position: 'absolute',
            top: 12,
            left: 12,
            padding: '4px 10px',
            borderRadius: 'var(--r-pill)',
            background: 'rgba(255,255,255,0.9)',
            backdropFilter: 'blur(8px)',
            fontFamily: 'var(--mono)',
            fontSize: 10,
            letterSpacing: '0.14em',
            textTransform: 'uppercase',
            color: 'var(--ink)',
          }}
        >
          {panel.label}
        </span>
      )}
    </motion.div>
  );
}

function ConnectionColumn({
  accent,
  showTicketLoop,
  ticketLabel,
}: {
  accent: string;
  showTicketLoop: boolean;
  ticketLabel: string;
}) {
  return (
    <div
      style={{
        position: 'relative',
        width: 'clamp(36px, 7vw, 80px)',
        height: '100%',
        minHeight: 80,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <svg
        width="100%"
        height="2"
        viewBox="0 0 100 2"
        preserveAspectRatio="none"
        style={{ position: 'absolute', top: '50%', transform: 'translateY(-50%)' }}
        aria-hidden="true"
      >
        <motion.line
          x1="0"
          y1="1"
          x2="100"
          y2="1"
          stroke={accent}
          strokeWidth="1.2"
          strokeDasharray="100"
          initial={{ strokeDashoffset: 100 }}
          animate={{ strokeDashoffset: 0 }}
          transition={{ duration: 0.9, delay: 0.9, ease: easeOut }}
        />
      </svg>

      {showTicketLoop && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 1, 1, 0], left: ['0%', '0%', '100%', '100%'] }}
          transition={{
            duration: 4,
            delay: 2,
            ease: 'linear',
            repeat: Infinity,
            repeatDelay: 1.5,
            times: [0, 0.1, 0.85, 1],
          }}
          style={{
            position: 'absolute',
            top: '50%',
            transform: 'translate(-50%, -50%)',
            padding: '4px 10px',
            borderRadius: 'var(--r-pill)',
            background: accent,
            color: '#fff',
            fontFamily: 'var(--mono)',
            fontSize: 9,
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            whiteSpace: 'nowrap',
            boxShadow: '0 4px 12px rgba(50,80,255,0.3)',
            pointerEvents: 'none',
          }}
        >
          {ticketLabel}
        </motion.div>
      )}
    </div>
  );
}
