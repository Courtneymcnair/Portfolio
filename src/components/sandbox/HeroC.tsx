"use client";

import { useEffect, useRef, useState } from "react";
import {
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
  type MotionValue,
} from "motion/react";
import GrainOverlay from "./GrainOverlay";

const HOVER_COLOR = "#B8331A";
const INK = "#2A0F08";

const REVEAL_EASE = [0.22, 1, 0.36, 1] as const;

function BlobShape({ color, drip = false }: { color: string; drip?: boolean }) {
  const layers = [
    `radial-gradient(ellipse 36% 46% at 50% 45%, ${color} 0%, ${color}B3 18%, ${color}55 42%, transparent 72%)`,
    `radial-gradient(ellipse 22% 26% at 68% 36%, ${color}99 0%, ${color}44 30%, transparent 62%)`,
  ];
  if (drip) {
    layers.push(
      `radial-gradient(ellipse 5% 30% at 46% 84%, ${color}88 0%, ${color}33 35%, transparent 65%)`,
    );
  }
  return (
    <div
      style={{
        position: "absolute",
        inset: 0,
        background: layers.join(", "),
      }}
    />
  );
}

type Spring = { stiffness: number; damping: number; mass: number };

type FlowerCfg = {
  color: string;
  size: number;
  x: string;
  y: string;
  depth: number;
  rotate: number;
  drip?: boolean;
  spring: Spring;
  invertX?: boolean;
  invertY?: boolean;
  revealDelay: number;
};

const flowers: FlowerCfg[] = [
  {
    color: "#FF6B3D",
    size: 1700,
    x: "-12%",
    y: "-42%",
    depth: 55,
    rotate: 6,
    spring: { stiffness: 30, damping: 24, mass: 1.6 },
    revealDelay: 0.1,
  },
  {
    color: "#C7644A",
    size: 900,
    x: "-8%",
    y: "55%",
    depth: 70,
    rotate: -14,
    spring: { stiffness: 110, damping: 16, mass: 0.7 },
    invertY: true,
    revealDelay: 0.25,
  },
];

function FlowerLayer({
  cfg,
  mouseX,
  mouseY,
  reduced,
}: {
  cfg: FlowerCfg;
  mouseX: MotionValue<number>;
  mouseY: MotionValue<number>;
  reduced: boolean;
}) {
  const sx = useSpring(mouseX, cfg.spring);
  const sy = useSpring(mouseY, cfg.spring);

  const xRange: [number, number] = cfg.invertX
    ? [cfg.depth, -cfg.depth]
    : [-cfg.depth, cfg.depth];
  const yRange: [number, number] = cfg.invertY
    ? [cfg.depth * 0.75, -cfg.depth * 0.75]
    : [-cfg.depth * 0.75, cfg.depth * 0.75];

  const parallaxX = useTransform(sx, [-0.5, 0.5], xRange);
  const parallaxY = useTransform(sy, [-0.5, 0.5], yRange);

  return (
    <motion.div
      aria-hidden
      style={{
        position: "absolute",
        left: cfg.x,
        top: cfg.y,
        width: cfg.size,
        height: cfg.size,
        x: parallaxX,
        y: parallaxY,
        rotate: cfg.rotate,
        mixBlendMode: "multiply",
        willChange: "transform",
      }}
      initial={reduced ? false : { scale: 0.82, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={
        reduced
          ? { duration: 0 }
          : { delay: cfg.revealDelay, duration: 1.0, ease: REVEAL_EASE }
      }
    >
      <BlobShape color={cfg.color} drip={cfg.drip} />
    </motion.div>
  );
}

export default function HeroC() {
  const heroRef = useRef<HTMLDivElement>(null);
  const cursorRef = useRef<HTMLDivElement>(null);
  const rafRef = useRef<number | null>(null);
  const pendingRef = useRef<{ x: number; y: number; nx: number; ny: number } | null>(null);

  const reduced = useReducedMotion() ?? false;
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const sMouseX = useSpring(mouseX, { stiffness: 70, damping: 18, mass: 0.6 });
  const sMouseY = useSpring(mouseY, { stiffness: 70, damping: 18, mass: 0.6 });
  const baseShiftX = useTransform(sMouseX, [-0.5, 0.5], [-25, 25]);
  const baseShiftY = useTransform(sMouseY, [-0.5, 0.5], [-20, 20]);

  const [hoverName, setHoverName] = useState(false);

  useEffect(() => {
    const hero = heroRef.current;
    if (!hero) return;

    const flush = () => {
      rafRef.current = null;
      const p = pendingRef.current;
      if (!p) return;
      mouseX.set(p.nx);
      mouseY.set(p.ny);
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${p.x - 18}px, ${p.y - 18}px, 0)`;
        cursorRef.current.style.opacity = "1";
      }
    };

    const onMove = (e: MouseEvent) => {
      const rect = hero.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      pendingRef.current = {
        x,
        y,
        nx: x / rect.width - 0.5,
        ny: y / rect.height - 0.5,
      };
      if (rafRef.current == null) rafRef.current = requestAnimationFrame(flush);
    };

    const onLeave = () => {
      pendingRef.current = null;
      if (rafRef.current != null) {
        cancelAnimationFrame(rafRef.current);
        rafRef.current = null;
      }
      mouseX.set(0);
      mouseY.set(0);
      if (cursorRef.current) cursorRef.current.style.opacity = "0";
    };

    hero.addEventListener("mousemove", onMove);
    hero.addEventListener("mouseleave", onLeave);
    return () => {
      hero.removeEventListener("mousemove", onMove);
      hero.removeEventListener("mouseleave", onLeave);
      if (rafRef.current != null) cancelAnimationFrame(rafRef.current);
    };
  }, [mouseX, mouseY]);

  const tx = (delay: number, duration: number) =>
    reduced ? { duration: 0 } : { delay, duration, ease: REVEAL_EASE };
  const fadeInit = reduced ? false : { opacity: 0 };
  const fadeUp = (offset: number) => (reduced ? false : { opacity: 0, y: offset });

  return (
    <div
      ref={heroRef}
      style={{
        position: "relative",
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
        background: "#FFE9D6",
        cursor: reduced ? "auto" : "none",
      }}
    >
      <motion.div
        aria-hidden
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(ellipse at 30% 20%, #FFD7B3 0%, #FFE9D6 35%, #FFF1E0 65%, #F4DEC8 100%)",
          x: baseShiftX,
          y: baseShiftY,
          willChange: "transform",
        }}
        initial={fadeInit}
        animate={{ opacity: 1 }}
        transition={tx(0, 0.6)}
      />

      {flowers.map((cfg, i) => (
        <FlowerLayer key={i} cfg={cfg} mouseX={mouseX} mouseY={mouseY} reduced={reduced} />
      ))}

      <GrainOverlay opacity={0.38} blendMode="overlay" tile={200} delay={0.6} duration={0.4} />

      <div
        ref={cursorRef}
        style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 36,
          height: 36,
          border: `1.5px solid ${HOVER_COLOR}`,
          borderRadius: "50%",
          pointerEvents: "none",
          opacity: 0,
          transform: "translate3d(-100px, -100px, 0)",
          willChange: "transform, opacity",
          zIndex: 30,
        }}
      >
        <div
          style={{
            position: "absolute",
            left: "50%",
            top: "50%",
            width: 4,
            height: 4,
            marginLeft: -2,
            marginTop: -2,
            background: HOVER_COLOR,
            borderRadius: "50%",
          }}
        />
      </div>

      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          textAlign: "center",
          pointerEvents: "auto",
          whiteSpace: "nowrap",
          padding: "0 24px",
          width: "100%",
          boxSizing: "border-box",
          zIndex: 20,
        }}
      >
        <h1 style={{ margin: 0 }}>
          <motion.span
            onMouseEnter={() => setHoverName(true)}
            onMouseLeave={() => setHoverName(false)}
            style={{
              display: "block",
              fontFamily: "var(--display)",
              fontWeight: 600,
              fontStyle: "normal",
              fontSize: "clamp(56px, 13vw, 184px)",
              lineHeight: 0.95,
              letterSpacing: hoverName ? "0.02em" : "-0.015em",
              color: hoverName ? HOVER_COLOR : INK,
              transition: "letter-spacing 0.6s cubic-bezier(0.22,1,0.36,1), color 0.4s",
            }}
            initial={fadeUp(32)}
            animate={{ opacity: 1, y: 0 }}
            transition={tx(0.8, 0.7)}
          >
            Courtney
          </motion.span>
          <motion.span
            style={{
              display: "block",
              fontFamily: "var(--display)",
              fontWeight: 500,
              fontStyle: "italic",
              fontSize: "clamp(56px, 13vw, 184px)",
              lineHeight: 0.95,
              letterSpacing: "0em",
              color: INK,
              marginTop: -10,
            }}
            initial={fadeUp(32)}
            animate={{ opacity: 1, y: 0 }}
            transition={tx(1.0, 0.7)}
          >
            McNair
          </motion.span>
        </h1>

        <motion.p
          style={{
            fontFamily: "var(--sans)",
            fontWeight: 450,
            fontSize: "clamp(17px, 1.35vw, 21px)",
            lineHeight: 1.65,
            color: INK,
            maxWidth: 580,
            margin: "40px auto 0",
            whiteSpace: "normal",
          }}
          initial={fadeUp(20)}
          animate={{ opacity: 1, y: 0 }}
          transition={tx(1.4, 0.5)}
        >
          Designing thoughtful systems for messy, high-stakes workflows. Currently leading design
          for a B2B SaaS platform from the ground up.
        </motion.p>
      </div>
    </div>
  );
}
