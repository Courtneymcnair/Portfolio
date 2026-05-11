"use client";

import { motion, useReducedMotion } from "motion/react";

type Props = {
  opacity?: number;
  blendMode?: "overlay" | "multiply" | "soft-light" | "normal";
  tile?: number;
  delay?: number;
  duration?: number;
  baseFrequency?: number;
};

const noiseSvg = (size: number, baseFrequency: number) =>
  `<svg xmlns='http://www.w3.org/2000/svg' width='${size}' height='${size}'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='${baseFrequency}' numOctaves='2' stitchTiles='stitch'/><feColorMatrix type='saturate' values='0'/></filter><rect width='100%' height='100%' filter='url(%23n)'/></svg>`;

export default function GrainOverlay({
  opacity = 0.18,
  blendMode = "overlay",
  tile = 180,
  delay = 0,
  duration = 0.4,
  baseFrequency = 0.9,
}: Props) {
  const reduced = useReducedMotion() ?? false;
  const url = `url("data:image/svg+xml;utf8,${encodeURIComponent(noiseSvg(tile, baseFrequency))}")`;

  return (
    <motion.div
      aria-hidden
      className="pointer-events-none absolute inset-0"
      style={{
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
