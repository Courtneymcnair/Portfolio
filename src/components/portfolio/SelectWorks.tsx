"use client";

import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import Button from "./Button";

export type WorkItem = {
  /** Case number — e.g. "01". Use NN form to match other numbered components. */
  n: string;
  /** Title — the last word is italicized to mirror the blue treatment. */
  title: string;
  pills?: string[];
  brief?: string;
  href: string;
  /** Card thumbnail image (centered inside the colored card). */
  image: string;
  imageAlt?: string;
  /** Background color of the card behind the image. */
  placeholderColor?: string;
};

type Props = {
  label?: string;
  /** Optional larger heading below the eyebrow. Omit for a tighter layout. */
  heading?: string;
  items?: WorkItem[];
};

// Colors sampled from each mockup so the card frame is cohesive with the art.
const DEFAULT_ITEMS: WorkItem[] = [
  {
    n: "01",
    title: "Operations Management Platform",
    pills: ["0→1", "B2B SaaS", "Sole Designer"],
    brief:
      "Shipping complex operational workflows at startup speed while building design infrastructure from the ground up.",
    href: "/work/chekhub",
    image: "/images/thumbnails/chekhub.png",
    imageAlt: "Chekhub dashboard",
    placeholderColor: "#F8B274", // chekhub: warm peachy orange (mockup top stop)
  },
  {
    n: "02",
    title: "Open-Access Sign Language Dictionary",
    pills: ["Accessibility", "Lead Designer"],
    brief:
      "Led the design of a freely available video dictionary making FSL resources accessible to deaf and hard-of-hearing communities.",
    href: "/work/fsldictionary",
    image: "/images/thumbnails/fsl.png",
    imageAlt: "FSL Dictionary",
    placeholderColor: "#BDA9F0", // fsl: lavender (mockup field)
  },
  {
    n: "03",
    title: "Wearable Fitness for Personalized Music",
    pills: ["Product Concept", "Wearables", "Music UX"],
    brief:
      "A Spotify feature concept integrating wearable fitness data to personalize music to real-time physiological state.",
    href: "/work/spotifyactive",
    image: "/images/thumbnails/spotify.png",
    imageAlt: "Spotify Active",
    placeholderColor: "#F09438", // spotify: saturated pumpkin (mockup top stop)
  },
];

export default function SelectWorks({
  label = "Selected work",
  heading,
  items = DEFAULT_ITEMS,
}: Props) {
  return (
    <section
      style={{
        background: "var(--paper, #F4F4F0)",
        padding: "clamp(64px, 9vw, 128px) var(--content-padding)",
        overflowX: "clip",
      }}
    >
      <div style={{ maxWidth: 1180, margin: "0 auto" }}>
        <header
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 16,
            marginBottom: "clamp(24px, 3vw, 48px)",
            maxWidth: 720,
          }}
        >
          <p
            style={{
              fontFamily:
                "var(--display, 'Plus Jakarta Sans', sans-serif)",
              fontSize: "clamp(11px, 1.3vw, 15px)",
              fontWeight: 600,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: "var(--accent, #3250FF)",
              margin: 0,
            }}
          >
            {label}
          </p>
          {heading && (
            <h2
              style={{
                fontFamily:
                  "var(--display, 'Plus Jakarta Sans', sans-serif)",
                fontWeight: 500,
                fontSize: "clamp(32px, 4.5vw, 56px)",
                lineHeight: 1.1,
                letterSpacing: "-0.025em",
                color: "var(--ink, #0A0A0F)",
                margin: 0,
              }}
            >
              {heading}
            </h2>
          )}
        </header>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "clamp(80px, 10vw, 160px)",
          }}
        >
          {items.map((item) => (
            <CaseRow key={item.n} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}

function CaseRow({ item }: { item: WorkItem }) {
  return (
    <article
      className="warm-case-row"
      style={{
        display: "grid",
        gridTemplateColumns: "minmax(0, 1fr) minmax(0, 1fr)",
        gap: "clamp(20px, 3vw, 48px)",
        alignItems: "center",
        width: "100%",
      }}
    >
      <div style={{ minWidth: 0 }}>
        <p
          style={{
            fontFamily: "var(--mono, 'JetBrains Mono', monospace)",
            fontSize: 13,
            letterSpacing: "0.16em",
            color: "var(--accent, #3250FF)",
            margin: 0,
            marginBottom: 24,
          }}
        >
          {item.n}
        </p>

        <h3
          style={{
            fontFamily: "var(--display, 'Plus Jakarta Sans', sans-serif)",
            fontWeight: 500,
            fontSize: "clamp(32px, 4vw, 60px)",
            lineHeight: 1.08,
            letterSpacing: "-0.025em",
            color: "var(--ink, #0A0A0F)",
            margin: 0,
            marginBottom: 26,
          }}
        >
          {item.title}
        </h3>

        {item.pills && item.pills.length > 0 && (
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: 8,
              marginBottom: 24,
            }}
          >
            {item.pills.map((p) => (
              <span
                key={p}
                style={{
                  display: "inline-block",
                  fontFamily:
                    "var(--display, 'Plus Jakarta Sans', sans-serif)",
                  fontSize: 11,
                  fontWeight: 600,
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  padding: "5px 12px",
                  border: "1px solid var(--border-color, rgba(42,15,8,0.2))",
                  borderRadius: "var(--warm-radius-pill, 999px)",
                  color: "var(--ink, #0A0A0F)",
                  background: "transparent",
                  lineHeight: 1.1,
                  whiteSpace: "nowrap",
                }}
              >
                {p}
              </span>
            ))}
          </div>
        )}

        {item.brief && (
          <p
            style={{
              fontFamily: "var(--sans, 'Plus Jakarta Sans', sans-serif)",
              fontWeight: 400,
              fontSize: 17,
              lineHeight: 1.55,
              color: "var(--grey-1, #1A1A22)",
              margin: 0,
              marginBottom: 32,
              maxWidth: 460,
            }}
          >
            {item.brief}
          </p>
        )}

        <Button
          href={item.href}
          variant="primary"
          size="md"
          iconRight={<ArrowUpRight size={16} strokeWidth={1.75} />}
        >
          Read case study
        </Button>
      </div>

      <CaseThumb
        image={item.image}
        alt={item.imageAlt ?? item.title}
        bg={item.placeholderColor ?? "var(--accent-soft, #4F6BFF)"}
      />

      <style>{`
        @media (max-width: 860px) {
          .warm-case-row {
            grid-template-columns: 1fr !important;
            gap: clamp(32px, 6vw, 48px) !important;
          }
          .warm-case-row > :first-child {
            order: 2;
          }
          .warm-case-row > :last-child {
            order: 1;
          }
        }
      `}</style>
    </article>
  );
}

function CaseThumb({
  image,
  alt,
  bg,
}: {
  image: string;
  alt: string;
  bg: string;
}) {
  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        aspectRatio: "4 / 3",
        borderRadius: "var(--warm-radius-lg, 24px)",
        overflow: "hidden",
        background: `linear-gradient(135deg, ${bg} 0%, ${shade(bg, -14)} 100%)`,
        border: "1px solid var(--hair-color, rgba(42,15,8,0.12))",
        boxShadow: "var(--shadow-2, 0 4px 14px rgba(42,15,8,0.08))",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "clamp(32px, 5vw, 72px)",
      }}
    >
      <div
        style={{
          position: "relative",
          width: "100%",
          height: "100%",
          maxWidth: "100%",
        }}
      >
        <Image
          src={image}
          alt={alt}
          fill
          sizes="(max-width: 860px) 90vw, 560px"
          style={{ objectFit: "contain" }}
        />
      </div>
    </div>
  );
}

/**
 * Lightly shade a hex color toward black (negative pct) or white (positive).
 * Used to derive a subtle gradient stop from a single placeholderColor.
 */
function shade(hex: string, pct: number): string {
  const clean = hex.replace("#", "");
  if (clean.length !== 6) return hex;
  const num = parseInt(clean, 16);
  const r = (num >> 16) & 0xff;
  const g = (num >> 8) & 0xff;
  const b = num & 0xff;
  const factor = pct / 100;
  const adjust = (c: number) =>
    Math.max(0, Math.min(255, Math.round(c + (factor < 0 ? c : 255 - c) * factor)));
  return `#${[adjust(r), adjust(g), adjust(b)]
    .map((v) => v.toString(16).padStart(2, "0"))
    .join("")}`;
}
