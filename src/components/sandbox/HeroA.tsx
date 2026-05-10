"use client";

import { motion, useReducedMotion } from "motion/react";
import GrainOverlay from "./GrainOverlay";

const blobs = [
  { color: "#FF4500", x: "10%", y: "15%", size: 720, dx: 80, dy: -60, dur: 22 },
  { color: "#FF7A45", x: "65%", y: "10%", size: 640, dx: -100, dy: 70, dur: 28 },
  { color: "#FFB088", x: "25%", y: "70%", size: 580, dx: 60, dy: -90, dur: 26 },
  { color: "#FFD9B0", x: "70%", y: "65%", size: 700, dx: -70, dy: 50, dur: 30 },
  { color: "#C8331F", x: "40%", y: "40%", size: 500, dx: 50, dy: 40, dur: 24 },
];

export default function HeroA() {
  const reduced = useReducedMotion();

  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-[#1a0f0a]">
      {blobs.map((b, i) => (
        <motion.div
          key={i}
          aria-hidden
          className="absolute rounded-full"
          style={{
            left: b.x,
            top: b.y,
            width: b.size,
            height: b.size,
            background: `radial-gradient(circle at center, ${b.color} 0%, ${b.color}88 40%, transparent 70%)`,
            filter: "blur(60px)",
            transform: "translate(-50%, -50%)",
          }}
          animate={
            reduced
              ? undefined
              : {
                  x: [0, b.dx, -b.dx * 0.6, 0],
                  y: [0, b.dy, b.dy * 0.4, 0],
                  scale: [1, 1.08, 0.96, 1],
                }
          }
          transition={{
            duration: b.dur,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      <GrainOverlay opacity={0.22} blendMode="overlay" baseFrequency={0.85} />

      <div className="relative z-10 flex min-h-screen flex-col items-center justify-center px-6 py-24 text-center">
        <h1
          className="text-5xl leading-[0.95] text-white/95 md:text-7xl lg:text-8xl"
          style={{ fontFamily: '"Source Serif 4", serif', fontStyle: "italic", fontWeight: 400 }}
        >
          Courtney McNair
        </h1>
        <p className="mt-8 max-w-2xl text-balance text-base leading-relaxed text-white/80 md:text-lg">
          Product designer turning complex systems into{" "}
          <span style={{ fontFamily: '"Source Serif 4", serif', fontStyle: "italic", fontWeight: 400 }}>
            intuitive, human-centered
          </span>{" "}
          experiences. Currently leading design for a B2B SaaS platform, building the systems,
          infrastructure, and features behind mission-critical workflows.
        </p>
      </div>
    </section>
  );
}
