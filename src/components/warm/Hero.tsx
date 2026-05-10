"use client";

import { useEffect, useRef } from "react";
import {
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
  type MotionValue,
} from "motion/react";
import GrainOverlay from "./GrainOverlay";
import BloomMark from "./icons/BloomMark";

const HOVER_COLOR = "#B8331A";
const INK = "#2A0F08";

const REVEAL_EASE = [0.22, 1, 0.36, 1] as const;

const NAME = "Courtney McNair";

function BlobShape({ color, drip = false }: { color: string; drip?: boolean }) {
  const layers = [
    `radial-gradient(ellipse 42% 52% at 50% 45%, ${color} 0%, ${color}A0 22%, ${color}48 48%, transparent 80%)`,
    `radial-gradient(ellipse 24% 30% at 68% 36%, ${color}88 0%, ${color}3C 36%, transparent 72%)`,
  ];
  if (drip) {
    layers.push(
      `radial-gradient(ellipse 6% 32% at 46% 84%, ${color}77 0%, ${color}2C 36%, transparent 70%)`,
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
  /** Size as % of viewport max dimension (vmax) — drives desktop coverage. */
  sizeVmax: number;
  /** Hard px floor — kicks in on small viewports so the blob never goes
   *  too small relative to the screen (mobile portrait especially). */
  sizeMinPx: number;
  /** Horizontal offset of blob center from viewport center, in vw. */
  dxVw: number;
  /** Vertical offset of blob center from viewport center, in vh. */
  dyVh: number;
  /** Final opacity after reveal. Lower = subtler multiply blend. */
  opacity: number;
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
    sizeVmax: 165,
    sizeMinPx: 1350,
    dxVw: 6,
    dyVh: -4,
    opacity: 0.64,
    depth: 60,
    rotate: 6,
    spring: { stiffness: 30, damping: 24, mass: 1.6 },
    revealDelay: 0.1,
  },
  {
    color: "#E5754A",
    sizeVmax: 115,
    sizeMinPx: 1000,
    dxVw: -8,
    dyVh: 22,
    opacity: 0.8,
    depth: 75,
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

  const blobSize = `max(${cfg.sizeVmax}vmax, ${cfg.sizeMinPx}px)`;
  const halfBlob = `max(${cfg.sizeVmax / 2}vmax, ${cfg.sizeMinPx / 2}px)`;

  return (
    <motion.div
      aria-hidden
      style={{
        position: "absolute",
        left: `calc(50% - ${halfBlob} + ${cfg.dxVw}vw)`,
        top: `calc(50% - ${halfBlob} + ${cfg.dyVh}vh)`,
        width: blobSize,
        height: blobSize,
        x: parallaxX,
        y: parallaxY,
        rotate: cfg.rotate,
        mixBlendMode: "multiply",
        willChange: "transform",
      }}
      initial={reduced ? false : { scale: 0.78, opacity: 0 }}
      animate={{ scale: 1, opacity: cfg.opacity }}
      transition={
        reduced
          ? { duration: 0 }
          : { delay: cfg.revealDelay, duration: 1.1, ease: REVEAL_EASE }
      }
    >
      <BlobShape color={cfg.color} drip={cfg.drip} />
    </motion.div>
  );
}

export default function Hero() {
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
        background: "var(--warm-bg, #FFE9D6)",
        cursor: reduced ? "auto" : "none",
      }}
    >
      <motion.div
        aria-hidden
        style={{
          position: "absolute",
          inset: "-80px",
          background:
            "radial-gradient(ellipse at 50% 50%, #FFD7B3 0%, #FFE9D6 35%, #FFF1E0 65%, #FFE9D6 100%)",
          x: baseShiftX,
          y: baseShiftY,
          willChange: "transform",
        }}
        initial={fadeInit}
        animate={{ opacity: 1 }}
        transition={tx(0, 0.7)}
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
          width: 40,
          height: 40,
          border: `2px solid ${INK}`,
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
            width: 5,
            height: 5,
            marginLeft: -2.5,
            marginTop: -2.5,
            background: INK,
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
          padding: "0 24px",
          width: "100%",
          boxSizing: "border-box",
          zIndex: 20,
        }}
      >
        <div
          aria-hidden
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            width: "clamp(420px, 80vw, 880px)",
            height: "clamp(420px, 80vw, 880px)",
            transform: "translate(-50%, -50%)",
            pointerEvents: "none",
            zIndex: 0,
            color: INK,
          }}
        >
          <BloomMark
            variant="frame"
            size="100%"
            animate
            delay={1.85}
            color="currentColor"
            ringColor="rgba(42,15,8,0.32)"
            strokeWidth={0.25}
          />
        </div>

        <div
          style={{
            position: "relative",
            zIndex: 1,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 20,
            marginBottom: 24,
            fontFamily: "var(--warm-display, 'Plus Jakarta Sans', sans-serif)",
            fontSize: "clamp(11px, 1.3vw, 15px)",
            fontWeight: 600,
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            color: INK,
          }}
        >
          <motion.span
            aria-hidden
            style={{
              flex: "0 1 120px",
              height: 1,
              background: "var(--warm-hair-strong, rgba(42,15,8,0.32))",
              transformOrigin: "right center",
            }}
            initial={reduced ? false : { scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={tx(0.5, 0.5)}
          />
          <motion.span
            style={{ whiteSpace: "nowrap" }}
            initial={fadeInit}
            animate={{ opacity: 1 }}
            transition={tx(0.75, 0.35)}
          >
            Product Designer
          </motion.span>
          <motion.span
            aria-hidden
            style={{
              flex: "0 1 120px",
              height: 1,
              background: "var(--warm-hair-strong, rgba(42,15,8,0.32))",
              transformOrigin: "left center",
            }}
            initial={reduced ? false : { scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={tx(0.5, 0.5)}
          />
        </div>

        <h1
          style={{
            position: "relative",
            zIndex: 1,
            margin: 0,
            textAlign: "center",
            whiteSpace: "nowrap",
          }}
        >
          <span
            style={{
              display: "inline-block",
              fontFamily: "var(--warm-display, 'Plus Jakarta Sans', sans-serif)",
              fontWeight: 500,
              fontSize: "clamp(36px, 6.5vw, 88px)",
              lineHeight: 1,
              letterSpacing: "-0.025em",
              color: INK,
              whiteSpace: "pre",
            }}
          >
            <motion.span
              style={{ display: "inline-block", willChange: "transform, opacity" }}
              initial={fadeUp(22)}
              animate={{ opacity: 1, y: 0 }}
              transition={tx(0.9, 0.55)}
            >
              {NAME}
            </motion.span>
          </span>
        </h1>

        <motion.p
          style={{
            position: "relative",
            zIndex: 1,
            fontFamily: "var(--warm-sans, 'Plus Jakarta Sans', sans-serif)",
            fontWeight: 450,
            fontSize: "clamp(17px, 1.35vw, 21px)",
            lineHeight: 1.65,
            color: INK,
            maxWidth: 580,
            margin: "32px auto 0",
            whiteSpace: "normal",
          }}
          initial={fadeUp(20)}
          animate={{ opacity: 1, y: 0 }}
          transition={tx(1.3, 0.45)}
        >
          Designing thoughtful systems for messy, high-stakes workflows. Currently leading design
          for a B2B SaaS platform from the ground up.
        </motion.p>
      </div>
    </div>
  );
}
