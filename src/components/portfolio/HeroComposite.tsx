"use client";

import Image from "next/image";
import { motion } from "motion/react";

type SidePanel = {
  src: string;
  alt: string;
  label?: string;
};

type Props = {
  left: SidePanel;
  right: SidePanel;
  showTicketLoop?: boolean;
  ticketLabel?: string;
  accent?: string;
};

const easeOut = [0.22, 1, 0.36, 1] as const;

export default function HeroComposite({
  left,
  right,
  showTicketLoop = true,
  ticketLabel = "TICKET #1042",
  accent = "var(--accent, #3250FF)",
}: Props) {
  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        maxWidth: 1180,
        margin: "0 auto",
      }}
    >
      <div
        className="warm-hero-composite-grid"
        style={{
          display: "grid",
          gridTemplateColumns: "1fr auto 1fr",
          alignItems: "center",
          gap: "clamp(20px, 4vw, 60px)",
          position: "relative",
        }}
      >
        <Panel side="left" panel={left} />
        <ConnectionColumn
          accent={accent}
          showTicketLoop={showTicketLoop}
          ticketLabel={ticketLabel}
        />
        <Panel side="right" panel={right} />
      </div>

      <style>{`
        @media (max-width: 720px) {
          .warm-hero-composite-grid {
            grid-template-columns: 1fr !important;
            gap: 0 !important;
          }
          .warm-hero-composite__connection--h { display: none !important; }
          .warm-hero-composite__connection--v { display: flex !important; }
        }
      `}</style>
    </div>
  );
}

function Panel({ side, panel }: { side: "left" | "right"; panel: SidePanel }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: side === "left" ? -24 : 24 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{
        duration: 0.7,
        delay: side === "left" ? 0.05 : 0.2,
        ease: easeOut,
      }}
      style={{
        position: "relative",
        aspectRatio: "4 / 3",
        width: "100%",
        borderRadius: "var(--r-md, 12px)",
        overflow: "hidden",
        border: "1px solid var(--border-color, rgba(10, 10, 15, 0.2))",
        boxShadow: "var(--shadow-2, 0 4px 14px rgba(10, 10, 15, 0.08))",
        background: "var(--paper-card, #FFFFFF)",
      }}
    >
      <Image
        src={panel.src}
        alt={panel.alt}
        fill
        sizes="(max-width: 768px) 50vw, 500px"
        style={{ objectFit: "cover" }}
      />
      {panel.label && (
        <span
          style={{
            position: "absolute",
            top: 12,
            left: 12,
            padding: "4px 10px",
            borderRadius: "var(--r-pill, 999px)",
            background: "rgba(244, 244, 240, 0.9)",
            backdropFilter: "blur(8px)",
            WebkitBackdropFilter: "blur(8px)",
            fontFamily: "var(--display, 'Plus Jakarta Sans', sans-serif)",
            fontSize: 10,
            fontWeight: 600,
            letterSpacing: "0.14em",
            textTransform: "uppercase",
            color: "var(--ink, #0A0A0F)",
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
    <>
      <Horizontal accent={accent} showTicketLoop={showTicketLoop} ticketLabel={ticketLabel} />
      <Vertical accent={accent} showTicketLoop={showTicketLoop} ticketLabel={ticketLabel} />
    </>
  );
}

const ticketBase: React.CSSProperties = {
  position: "absolute",
  padding: "4px 10px",
  borderRadius: "var(--r-pill, 999px)",
  fontFamily: "var(--display, 'Plus Jakarta Sans', sans-serif)",
  fontSize: 9,
  fontWeight: 600,
  letterSpacing: "0.12em",
  textTransform: "uppercase",
  whiteSpace: "nowrap",
  boxShadow: "0 4px 12px rgba(50, 80, 255, 0.35)",
  pointerEvents: "none",
};

function Horizontal({
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
      className="warm-hero-composite__connection--h"
      style={{
        position: "relative",
        width: "clamp(36px, 7vw, 80px)",
        height: "100%",
        minHeight: 80,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <svg
        width="100%"
        height="2"
        viewBox="0 0 100 2"
        preserveAspectRatio="none"
        style={{ position: "absolute", top: "50%", transform: "translateY(-50%)" }}
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
          animate={{
            opacity: [0, 1, 1, 0],
            left: ["0%", "0%", "100%", "100%"],
          }}
          transition={{
            duration: 4,
            delay: 2,
            ease: "linear",
            repeat: Infinity,
            repeatDelay: 1.5,
            times: [0, 0.1, 0.85, 1],
          }}
          style={{
            ...ticketBase,
            top: "50%",
            transform: "translate(-50%, -50%)",
            background: accent,
            color: "var(--paper, #F4F4F0)",
          }}
        >
          {ticketLabel}
        </motion.div>
      )}
    </div>
  );
}

function Vertical({
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
      className="warm-hero-composite__connection--v"
      style={{
        display: "none",
        position: "relative",
        height: "clamp(72px, 14vw, 120px)",
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <svg
        width="2"
        height="100%"
        viewBox="0 0 2 100"
        preserveAspectRatio="none"
        style={{ position: "absolute", left: "50%", transform: "translateX(-50%)" }}
        aria-hidden="true"
      >
        <motion.line
          x1="1"
          y1="0"
          x2="1"
          y2="100"
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
          animate={{
            opacity: [0, 1, 1, 0],
            top: ["0%", "0%", "100%", "100%"],
          }}
          transition={{
            duration: 4,
            delay: 2,
            ease: "linear",
            repeat: Infinity,
            repeatDelay: 1.5,
            times: [0, 0.1, 0.85, 1],
          }}
          style={{
            ...ticketBase,
            left: "50%",
            transform: "translate(-50%, -50%)",
            background: accent,
            color: "var(--paper, #F4F4F0)",
          }}
        >
          {ticketLabel}
        </motion.div>
      )}
    </div>
  );
}
