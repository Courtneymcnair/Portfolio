"use client";

import { motion, useReducedMotion } from "motion/react";
import GrainOverlay from "./GrainOverlay";

export default function HeroD() {
  const reduced = useReducedMotion();

  return (
    <section className="relative min-h-screen w-full overflow-hidden">
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to bottom, #B8C5E8 0%, #D8C4E0 28%, #F4B8B8 50%, #FF9C70 75%, #FF7A45 100%)",
        }}
      />

      <motion.div
        aria-hidden
        className="absolute -bottom-[35vmin] left-1/2 h-[120vmin] w-[120vmin] -translate-x-1/2 rounded-full"
        style={{
          background:
            "radial-gradient(circle at center, #FFD580 0%, #FF7A45 35%, #FF5E2C 55%, transparent 75%)",
          filter: "blur(40px)",
        }}
        animate={
          reduced
            ? undefined
            : {
                scale: [1, 1.08, 1],
                opacity: [0.85, 1, 0.85],
              }
        }
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.div
        aria-hidden
        className="absolute -top-[20vmin] left-[15%] h-[60vmin] w-[60vmin] rounded-full"
        style={{
          background: "radial-gradient(circle, #C9D2F0 0%, transparent 70%)",
          filter: "blur(60px)",
        }}
        animate={reduced ? undefined : { x: [0, 60, -40, 0], y: [0, 40, 20, 0] }}
        transition={{ duration: 30, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.div
        aria-hidden
        className="absolute -top-[10vmin] right-[10%] h-[50vmin] w-[50vmin] rounded-full"
        style={{
          background: "radial-gradient(circle, #F0C4D8 0%, transparent 70%)",
          filter: "blur(60px)",
        }}
        animate={reduced ? undefined : { x: [0, -50, 30, 0], y: [0, 30, -20, 0] }}
        transition={{ duration: 36, repeat: Infinity, ease: "easeInOut" }}
      />

      <GrainOverlay opacity={0.12} blendMode="overlay" baseFrequency={1.0} />

      <div className="relative z-10 flex min-h-screen flex-col items-center justify-center px-6 py-24 text-center">
        <h1
          className="text-6xl leading-[0.92] text-white md:text-8xl lg:text-9xl"
          style={{ fontFamily: "var(--font-sans), system-ui", fontWeight: 700, letterSpacing: "-0.04em" }}
        >
          Courtney McNair
        </h1>
        <p className="mt-8 max-w-2xl text-balance text-base leading-relaxed text-white/90 md:text-lg">
          Product designer turning complex systems into intuitive, human-centered experiences.
          Currently leading design for a B2B SaaS platform, building the{" "}
          <span style={{ fontFamily: '"Source Serif 4", serif', fontStyle: "italic", fontWeight: 400 }}>
            systems, infrastructure, and features
          </span>{" "}
          behind mission-critical workflows.
        </p>
      </div>
    </section>
  );
}
