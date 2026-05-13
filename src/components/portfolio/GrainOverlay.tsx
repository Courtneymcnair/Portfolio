"use client";

import { motion, useReducedMotion } from "motion/react";

type Props = {
  opacity?: number;
  blendMode?: "overlay" | "multiply" | "soft-light" | "normal";
  tile?: number;
  delay?: number;
  duration?: number;
};

const noiseSvg = (size: number) =>
  `<svg xmlns='http://www.w3.org/2000/svg' width='${size}' height='${size}'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/><feColorMatrix type='saturate' values='0'/></filter><rect width='100%' height='100%' filter='url(%23n)'/></svg>`;

export default function GrainOverlay({
  opacity = 0.18,
  blendMode = "overlay",
  tile = 180,
  delay = 0,
  duration = 0.4,
}: Props) {
  const reduced = useReducedMotion() ?? false;
  const url = `url("data:image/svg+xml;utf8,${encodeURIComponent(noiseSvg(tile))}")`;

  return (
    <motion.div
      aria-hidden
      style={{
        position: "absolute",
        inset: 0,
        pointerEvents: "none",
        backgroundImage: url,
        backgroundRepeat: "repeat",
        backgroundSize: `${tile}px ${tile}px`,
        mixBlendMode: blendMode,
      }}
      initial={reduced ? false : { opacity: 0 }}
      animate={{ opacity }}
      transition={{ delay: reduced ? 0 : delay, duration: reduced ? 0 : duration }}
    />
  );
}
