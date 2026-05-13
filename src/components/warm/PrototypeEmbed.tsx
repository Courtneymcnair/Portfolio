"use client";

import { useState } from "react";
import { ExternalLink, Play } from "lucide-react";

type Width = "content" | "wide" | "full";

type Props = {
  src: string;
  title: string;
  caption?: string;
  width?: Width;
  aspect?: string;
  externalHref?: string;
  externalLabel?: string;
};

const widthMap: Record<Width, string> = {
  content: "880px",
  wide: "1100px",
  full: "100%",
};

export default function PrototypeEmbed({
  src,
  title,
  caption,
  width = "wide",
  aspect = "16 / 10",
  externalHref,
  externalLabel = "Open in Figma",
}: Props) {
  const [loaded, setLoaded] = useState(false);
  const [active, setActive] = useState(false);

  return (
    <figure
      style={{
        width: "100%",
        maxWidth: widthMap[width],
        margin: "0 auto",
      }}
    >
      <div
        style={{
          position: "relative",
          width: "100%",
          aspectRatio: aspect,
          borderRadius: "var(--warm-radius-md, 12px)",
          overflow: "hidden",
          background: "var(--warm-bg-sunken, #F0DBC4)",
          border: "1px solid var(--warm-border, rgba(42,15,8,0.2))",
        }}
      >
        {!active && (
          <button
            type="button"
            onClick={() => setActive(true)}
            aria-label={`Load ${title} prototype`}
            style={{
              position: "absolute",
              inset: 0,
              width: "100%",
              height: "100%",
              border: "none",
              cursor: "pointer",
              background:
                "linear-gradient(135deg, var(--warm-bg-card, #FFEFE0) 0%, var(--warm-accent-tint, #FFDBC9) 100%)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "column",
              gap: 16,
              fontFamily:
                "var(--warm-display, 'Plus Jakarta Sans', sans-serif)",
              color: "var(--warm-accent-strong, #B8331A)",
              transition: "background 200ms ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background =
                "linear-gradient(135deg, var(--warm-accent-tint, #FFDBC9) 0%, var(--warm-accent-soft, #FF9472) 100%)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background =
                "linear-gradient(135deg, var(--warm-bg-card, #FFEFE0) 0%, var(--warm-accent-tint, #FFDBC9) 100%)";
            }}
          >
            <span
              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                width: 64,
                height: 64,
                borderRadius: "50%",
                background: "var(--warm-accent-strong, #B8331A)",
                color: "#FFE9D6",
                boxShadow:
                  "var(--warm-shadow-md, 0 4px 14px rgba(42,15,8,0.08))",
              }}
            >
              <Play size={24} strokeWidth={1.75} fill="currentColor" />
            </span>
            <span
              style={{
                fontSize: 12,
                fontWeight: 600,
                letterSpacing: "0.16em",
                textTransform: "uppercase",
              }}
            >
              Load prototype · {title}
            </span>
          </button>
        )}

        {active && (
          <>
            {!loaded && (
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontFamily:
                    "var(--warm-display, 'Plus Jakarta Sans', sans-serif)",
                  fontSize: 12,
                  fontWeight: 600,
                  letterSpacing: "0.14em",
                  textTransform: "uppercase",
                  color: "var(--warm-ink-mute, rgba(42,15,8,0.65))",
                }}
              >
                Loading prototype…
              </div>
            )}
            <iframe
              src={src}
              title={title}
              allow="fullscreen"
              loading="lazy"
              onLoad={() => setLoaded(true)}
              style={{
                position: "absolute",
                inset: 0,
                width: "100%",
                height: "100%",
                border: 0,
                opacity: loaded ? 1 : 0,
                transition: "opacity 300ms ease",
              }}
            />
          </>
        )}
      </div>

      {(caption || externalHref) && (
        <figcaption
          style={{
            marginTop: 14,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            gap: 16,
            flexWrap: "wrap",
            fontFamily: "var(--warm-sans, 'Plus Jakarta Sans', sans-serif)",
            fontSize: 13,
            fontWeight: 500,
            letterSpacing: "0.04em",
            color: "var(--warm-ink-mute, rgba(42,15,8,0.65))",
          }}
        >
          <span>{caption}</span>
          {externalHref && (
            <a
              href={externalHref}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 6,
                color: "var(--warm-accent-strong, #B8331A)",
                textDecoration: "none",
              }}
            >
              {externalLabel}
              <ExternalLink size={12} strokeWidth={1.75} />
            </a>
          )}
        </figcaption>
      )}
    </figure>
  );
}
