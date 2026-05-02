'use client';

import { useEffect, useRef, useState } from 'react';

export default function HeroFieldOfDots() {
  const heroRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const posRef = useRef({ x: 720, y: 450, active: false });

  const [hoverName, setHoverName] = useState(false);
  const [cursorVisible, setCursorVisible] = useState(false);
  const [cursorXY, setCursorXY] = useState({ x: 0, y: 0 });

  // Canvas dot field — drawn via RAF, never triggers React re-renders
  useEffect(() => {
    const canvas = canvasRef.current;
    const hero = heroRef.current;
    if (!canvas || !hero) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let rafId: number;
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const resize = () => {
      const dpr = window.devicePixelRatio || 1;
      const { width, height } = hero.getBoundingClientRect();
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
    };

    const draw = () => {
      const dpr = window.devicePixelRatio || 1;
      const W = canvas.width / dpr;
      const H = canvas.height / dpr;
      const { x, y, active } = posRef.current;

      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx.clearRect(0, 0, W, H);

      if (prefersReduced) {
        // Static dots — no animation
        const cols = 48, rows = 30;
        const cellW = W / cols, cellH = H / rows;
        ctx.fillStyle = 'rgba(10,10,15,0.10)';
        for (let r = 0; r < rows; r++) {
          for (let c = 0; c < cols; c++) {
            const hx = c * cellW + cellW / 2;
            const hy = r * cellH + cellH / 2;
            ctx.beginPath();
            ctx.arc(hx, hy, 1.6, 0, Math.PI * 2);
            ctx.fill();
          }
        }
      } else {
        const cols = 48, rows = 30;
        const cellW = W / cols, cellH = H / rows;

        for (let r = 0; r < rows; r++) {
          for (let c = 0; c < cols; c++) {
            const hx = c * cellW + cellW / 2;
            const hy = r * cellH + cellH / 2;
            const dx = x - hx;
            const dy = y - hy;
            const dist = Math.sqrt(dx * dx + dy * dy);
            const falloff = 220;
            const t = Math.max(0, 1 - dist / falloff);
            const ease = t * t * (3 - 2 * t); // smoothstep
            const ox = active ? (dx / Math.max(dist, 1)) * ease * 22 : 0;
            const oy = active ? (dy / Math.max(dist, 1)) * ease * 22 : 0;
            const size = 1.6 + ease * 4.5;
            const blue = ease > 0.05 && active;

            ctx.beginPath();
            ctx.arc(hx + ox, hy + oy, size, 0, Math.PI * 2);
            if (blue) {
              ctx.fillStyle = `rgba(50,80,255,${0.25 + ease * 0.2})`;
            } else {
              ctx.fillStyle = `rgba(10,10,15,${0.1 + ease * 0.12})`;
            }
            ctx.fill();
          }
        }
      }

      rafId = requestAnimationFrame(draw);
    };

    resize();
    const ro = new ResizeObserver(resize);
    ro.observe(hero);
    rafId = requestAnimationFrame(draw);

    const onMove = (e: MouseEvent) => {
      const rect = hero.getBoundingClientRect();
      const nx = e.clientX - rect.left;
      const ny = e.clientY - rect.top;
      posRef.current = { x: nx, y: ny, active: true };
      setCursorVisible(true);
      setCursorXY({ x: nx, y: ny });
    };

    const onLeave = () => {
      posRef.current = { ...posRef.current, active: false };
      setCursorVisible(false);
    };

    hero.addEventListener('mousemove', onMove);
    hero.addEventListener('mouseleave', onLeave);

    return () => {
      cancelAnimationFrame(rafId);
      ro.disconnect();
      hero.removeEventListener('mousemove', onMove);
      hero.removeEventListener('mouseleave', onLeave);
    };
  }, []);

  return (
    <div
      ref={heroRef}
      style={{
        position: 'relative',
        width: '100vw',
        height: '100vh',
        background: 'var(--paper)',
        cursor: 'none',
        overflow: 'hidden',
      }}
    >
      {/* Dot field canvas */}
      <canvas
        ref={canvasRef}
        style={{ position: 'absolute', inset: 0 }}
        aria-hidden="true"
        role="presentation"
      />

      {/* Custom cursor */}
      {cursorVisible && (
        <div
          style={{
            position: 'absolute',
            left: cursorXY.x,
            top: cursorXY.y,
            width: 36,
            height: 36,
            marginLeft: -18,
            marginTop: -18,
            border: '1.5px solid var(--accent)',
            borderRadius: '50%',
            pointerEvents: 'none',
            mixBlendMode: 'multiply',
          }}
        >
          <div
            style={{
              position: 'absolute',
              left: '50%',
              top: '50%',
              width: 4,
              height: 4,
              marginLeft: -2,
              marginTop: -2,
              background: 'var(--accent)',
              borderRadius: '50%',
            }}
          />
        </div>
      )}

      {/* Radial paper mask — quiets dots behind the headline */}
      <div
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: 'min(1100px, 90vw)',
          height: 620,
          pointerEvents: 'none',
          background:
            'radial-gradient(ellipse at center, rgba(244,244,240,0.55) 0%, rgba(244,244,240,0.70) 35%, rgba(244,244,240,0.85) 60%, rgba(244,244,240,0.55) 80%, rgba(244,244,240,0.00) 100%)',
        }}
      />

      {/* Centered content */}
      <div
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          textAlign: 'center',
          pointerEvents: 'auto',
          whiteSpace: 'nowrap',
          padding: '0 24px',
          width: '100%',
          boxSizing: 'border-box',
        }}
      >
        {/* Name — single h1, two display lines */}
        <h1 style={{ margin: 0 }}>
          <span
            onMouseEnter={() => setHoverName(true)}
            onMouseLeave={() => setHoverName(false)}
            style={{
              display: 'block',
              fontFamily: 'var(--serif)',
              fontWeight: 400,
              fontStyle: 'normal',
              fontSize: 'clamp(56px, 13vw, 184px)',
              lineHeight: 0.92,
              letterSpacing: hoverName ? '0.02em' : '-0.025em',
              color: hoverName ? 'var(--accent)' : 'var(--ink)',
              transition: 'letter-spacing 0.6s cubic-bezier(0.2,0.8,0.2,1), color 0.4s',
            }}
          >
            Courtney
          </span>
          <span
            style={{
              display: 'block',
              fontFamily: 'var(--serif)',
              fontWeight: 400,
              fontStyle: 'italic',
              fontSize: 'clamp(56px, 13vw, 184px)',
              lineHeight: 0.92,
              letterSpacing: '-0.025em',
              color: 'var(--ink)',
              marginTop: -10,
            }}
          >
            McNair
          </span>
        </h1>

        {/* Tagline */}
        <p
          style={{
            fontFamily: 'var(--serif)',
            fontStyle: 'italic',
            fontSize: 'clamp(24px, 2vw, 30px)',
            lineHeight: 1.4,
            color: 'var(--grey-1)',
            marginTop: 36,
            maxWidth: 880,
            margin: '36px auto 0',
            whiteSpace: 'normal',
          }}
        >
          <span style={{ color: 'var(--accent)' }}>Product Designer</span> with a background in neuroscience and human behavior,
          designing tools that turn <span style={{ color: 'var(--accent)' }}>complex systems</span> into clear, <span style={{ color: 'var(--accent)' }}>intuitive workflows</span>.
        </p>
      </div>

      {/* Footer meta — hidden on touch devices */}
      <div
        className="hero-cursor-hint"
        style={{
          position: 'absolute',
          bottom: 32,
          left: 56,
          fontFamily: 'var(--mono)',
          fontSize: 11,
          letterSpacing: '0.08em',
          textTransform: 'uppercase',
          color: 'var(--grey-2)',
          pointerEvents: 'none',
        }}
      >
        ⟢ Move your cursor
      </div>
    </div>
  );
}
