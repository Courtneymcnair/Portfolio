"use client";

import { motion, useReducedMotion } from "motion/react";

/**
 * BloomMark — custom personal mark for the warm design system.
 *
 * Two variants:
 * - `icon`: small mark with inner circle + a wide band of dots radiating out.
 *   Use inline beside text.
 * - `frame`: large halo modeled on the Mindbloom mark — many concentric
 *   rings with shrinking dots, rotational offsets between adjacent rings,
 *   and per-dot positional jitter so it reads as a soft scatter rather
 *   than uniform spokes.
 *
 * When `animate` is true (default), reveals itself: circle strokes on,
 * then dots populate ring-by-ring inner → outer.
 */

type Variant = "icon" | "frame";

type Props = {
  size?: number | string;
  color?: string;
  ringColor?: string;
  animate?: boolean;
  delay?: number;
  variant?: Variant;
  strokeWidth?: number;
};

type RingCfg = {
  count: number;
  radius: number;
  dotR: number;
  offset: number;
  opacity: number;
};
type VariantCfg = { circleR: number; rings: RingCfg[] };

const VARIANTS: Record<Variant, VariantCfg> = {
  icon: {
    circleR: 22,
    rings: [
      { count: 28, radius: 31, dotR: 1.4, offset: 0, opacity: 1 },
      { count: 36, radius: 38, dotR: 1.0, offset: Math.PI / 36, opacity: 0.92 },
      { count: 48, radius: 44, dotR: 0.7, offset: 0, opacity: 0.75 },
    ],
  },
  // Mindbloom-style: many rings, shrinking dots, offset, jittered, opacity
  // fades from center outward so the outer halo dissolves into the bg.
  frame: {
    circleR: 55,
    rings: [
      { count: 46, radius: 58, dotR: 0.45, offset: 0, opacity: 0.5 },
      { count: 46, radius: 60.5, dotR: 0.41, offset: Math.PI / 46, opacity: 0.46 },
      { count: 44, radius: 63, dotR: 0.38, offset: 0, opacity: 0.42 },
      { count: 42, radius: 66, dotR: 0.34, offset: Math.PI / 42, opacity: 0.38 },
      { count: 40, radius: 69, dotR: 0.31, offset: 0, opacity: 0.34 },
      { count: 36, radius: 72, dotR: 0.28, offset: Math.PI / 36, opacity: 0.3 },
      { count: 32, radius: 75.5, dotR: 0.26, offset: 0, opacity: 0.26 },
      { count: 30, radius: 79, dotR: 0.24, offset: Math.PI / 30, opacity: 0.22 },
      { count: 26, radius: 82.5, dotR: 0.23, offset: 0, opacity: 0.18 },
      { count: 24, radius: 86, dotR: 0.21, offset: Math.PI / 24, opacity: 0.15 },
      { count: 20, radius: 89.5, dotR: 0.2, offset: 0, opacity: 0.12 },
      { count: 18, radius: 93, dotR: 0.2, offset: Math.PI / 18, opacity: 0.09 },
      { count: 14, radius: 97, dotR: 0.2, offset: 0, opacity: 0.07 },
    ],
  },
};

const TWO_PI = Math.PI * 2;
const EASE = [0.22, 1, 0.36, 1] as const;

type Dot = { x: number; y: number; r: number; o: number };

// Deterministic per-dot jitter so the rings don't read as perfect circles.
// Seeded by (ring, index) — same output every render, no SSR mismatch.
function ringDots(cfg: RingCfg, ringIdx: number, jitter = false): Dot[] {
  const out: Dot[] = [];
  for (let i = 0; i < cfg.count; i++) {
    const baseA = (i / cfg.count) * TWO_PI + cfg.offset;
    let r = cfg.radius;
    let a = baseA;
    let dotR = cfg.dotR;
    if (jitter) {
      const seed = i * 0.971 + ringIdx * 0.317;
      r += Math.sin(seed * 1.73) * 0.7;
      a += Math.cos(seed * 2.31) * 0.035;
      dotR *= 0.82 + Math.sin(seed * 3.07) * 0.18;
    }
    out.push({
      x: 50 + r * Math.cos(a),
      y: 50 + r * Math.sin(a),
      r: dotR,
      o: cfg.opacity,
    });
  }
  return out;
}

export default function BloomMark({
  size = 56,
  color = "currentColor",
  ringColor,
  animate = true,
  delay = 0,
  variant = "icon",
  strokeWidth,
}: Props) {
  const reduced = useReducedMotion() ?? false;
  const shouldAnimate = animate && !reduced;
  const cfg = VARIANTS[variant];
  const circumference = 2 * Math.PI * cfg.circleR;
  const stroke = strokeWidth ?? (variant === "icon" ? 2 : 0.6);
  const useJitter = variant === "frame";

  const circleAnim = shouldAnimate
    ? {
        initial: { strokeDashoffset: circumference } as const,
        animate: { strokeDashoffset: 0 } as const,
        transition: { delay, duration: 0.7, ease: EASE },
      }
    : {};

  // Stagger rings inner → outer. Frame variant uses a longer window so the
  // outward spread is perceptible — reads as the halo blooming from the
  // center toward the edges of the screen.
  const ringWindow = variant === "frame" ? 1.0 : 0.5;
  const ringStep = cfg.rings.length > 1 ? ringWindow / (cfg.rings.length - 1) : 0;

  const ringFade = (idx: number) =>
    shouldAnimate
      ? {
          initial: { opacity: 0 } as const,
          animate: { opacity: 1 } as const,
          transition: {
            delay: delay + 0.3 + idx * ringStep,
            duration: 0.36,
            ease: EASE,
          },
        }
      : {};

  return (
    <svg
      aria-hidden
      viewBox="0 0 100 100"
      style={{
        display: "block",
        overflow: "visible",
        width: size,
        height: size,
      }}
    >
      <motion.circle
        cx={50}
        cy={50}
        r={cfg.circleR}
        fill="none"
        stroke={ringColor ?? color}
        strokeWidth={stroke}
        strokeDasharray={circumference}
        transform="rotate(-90 50 50)"
        {...circleAnim}
      />
      {cfg.rings.map((rcfg, idx) => {
        const dots = ringDots(rcfg, idx, useJitter);
        return (
          <motion.g key={idx} {...ringFade(idx)}>
            {dots.map((d, i) => (
              <circle key={i} cx={d.x} cy={d.y} r={d.r} fill={color} opacity={d.o} />
            ))}
          </motion.g>
        );
      })}
    </svg>
  );
}
