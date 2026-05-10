"use client";

import { motion, useReducedMotion } from "motion/react";
import GrainOverlay from "./GrainOverlay";

export default function HeroB() {
  const reduced = useReducedMotion();

  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-[#FFF4EC]">
      <motion.div
        aria-hidden
        className="absolute -inset-[20%]"
        style={{
          background: `conic-gradient(
            from 0deg at 50% 50%,
            #FFB89A 0deg,
            #FF7E78 60deg,
            #F86F95 120deg,
            #C99CE8 180deg,
            #9DD7DC 220deg,
            #F6E8A8 280deg,
            #FFB89A 360deg
          )`,
          filter: "blur(80px)",
        }}
        animate={reduced ? undefined : { rotate: 360 }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
      />

      <motion.div
        aria-hidden
        className="absolute left-1/2 top-1/2 h-[80vmin] w-[80vmin] -translate-x-1/2 -translate-y-1/2 rounded-full"
        style={{
          background: "radial-gradient(circle, #FFFFFFCC 0%, #FFFFFF40 40%, transparent 70%)",
          filter: "blur(40px)",
        }}
        animate={reduced ? undefined : { scale: [1, 1.15, 1] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      />

      <GrainOverlay opacity={0.08} blendMode="multiply" baseFrequency={1.2} />

      <div className="relative z-10 flex min-h-screen flex-col items-center justify-center px-6 py-24 text-center">
        <h1
          className="text-6xl leading-[0.92] tracking-tight text-[#1d1410] md:text-8xl lg:text-[140px]"
          style={{ fontFamily: "var(--font-sans), system-ui", fontWeight: 700, letterSpacing: "-0.04em" }}
        >
          Courtney McNair
        </h1>
        <p className="mt-8 max-w-2xl text-balance text-base leading-relaxed text-[#3a2a22]/85 md:text-lg">
          Product designer turning{" "}
          <span style={{ fontFamily: '"Source Serif 4", serif', fontStyle: "italic", fontWeight: 400 }}>
            complex systems
          </span>{" "}
          into intuitive, human-centered experiences. Currently leading design for a B2B SaaS
          platform, building the systems, infrastructure, and features behind{" "}
          <span style={{ fontFamily: '"Source Serif 4", serif', fontStyle: "italic", fontWeight: 400 }}>
            mission-critical workflows.
          </span>
        </p>
      </div>
    </section>
  );
}
