"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { X } from "lucide-react";

type Width = "content" | "wide" | "full" | "half";

type Props = {
  src: string;
  alt: string;
  caption?: string;
  width?: Width;
  aspect?: string;
  unoptimized?: boolean;
  /** Disable the click-to-zoom lightbox. Default: enabled. */
  disableLightbox?: boolean;
};

const widthMap: Record<Width, string> = {
  content: "880px",
  wide: "1100px",
  full: "100%",
  half: "440px",
};

export default function Figure({
  src,
  alt,
  caption,
  width = "content",
  aspect = "16 / 10",
  unoptimized = false,
  disableLightbox = false,
}: Props) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [open]);

  const interactive = !disableLightbox;

  return (
    <>
      <figure
        style={{
          width: "100%",
          maxWidth: widthMap[width],
          margin: "0 auto",
        }}
      >
        <div
          role={interactive ? "button" : undefined}
          tabIndex={interactive ? 0 : undefined}
          aria-label={interactive ? `Open ${alt} larger` : undefined}
          onClick={interactive ? () => setOpen(true) : undefined}
          onKeyDown={
            interactive
              ? (e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    setOpen(true);
                  }
                }
              : undefined
          }
          style={{
            position: "relative",
            width: "100%",
            aspectRatio: aspect,
            borderRadius: "var(--r-md, 12px)",
            overflow: "hidden",
            background: "var(--grey-5, #ECECE6)",
            border: "1px solid var(--border-color, rgba(10, 10, 15, 0.2))",
            cursor: interactive ? "zoom-in" : undefined,
            transition: "box-shadow 300ms ease, transform 300ms ease",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.boxShadow =
              "var(--shadow-3, 0 16px 48px rgba(10, 10, 15, 0.12))";
            e.currentTarget.style.transform = "translateY(-2px)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.boxShadow = "";
            e.currentTarget.style.transform = "";
          }}
        >
          <Image
            src={src}
            alt={alt}
            fill
            unoptimized={unoptimized}
            style={{ objectFit: "cover" }}
            sizes="(max-width: 768px) 100vw, 1100px"
          />
        </div>
        {caption && (
          <figcaption
            style={{
              marginTop: 12,
              fontFamily: "var(--sans, 'Plus Jakarta Sans', sans-serif)",
              fontSize: 13,
              fontWeight: 500,
              letterSpacing: "0.04em",
              color: "var(--grey-2, rgba(10, 10, 15, 0.65))",
              textAlign: "center",
            }}
          >
            {caption}
          </figcaption>
        )}
      </figure>

      {open && (
        <Lightbox
          src={src}
          alt={alt}
          caption={caption}
          unoptimized={unoptimized}
          onClose={() => setOpen(false)}
        />
      )}
    </>
  );
}

function Lightbox({
  src,
  alt,
  caption,
  unoptimized,
  onClose,
}: {
  src: string;
  alt: string;
  caption?: string;
  unoptimized?: boolean;
  onClose: () => void;
}) {
  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={alt}
      onClick={onClose}
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 9999,
        background: "rgba(10, 10, 15, 0.82)",
        backdropFilter: "blur(4px)",
        WebkitBackdropFilter: "blur(4px)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "clamp(24px, 4vw, 56px)",
        cursor: "zoom-out",
        animation: "warm-lightbox-fade 200ms ease-out",
      }}
    >
      <button
        type="button"
        onClick={onClose}
        aria-label="Close"
        style={{
          position: "absolute",
          top: "clamp(16px, 2.5vw, 32px)",
          right: "clamp(16px, 2.5vw, 32px)",
          width: 44,
          height: 44,
          border: "none",
          borderRadius: "50%",
          background: "rgba(244, 244, 240, 0.12)",
          color: "#F4F4F0",
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          transition: "background 150ms ease",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.background = "rgba(244, 244, 240, 0.22)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.background = "rgba(244, 244, 240, 0.12)";
        }}
      >
        <X size={22} strokeWidth={1.75} />
      </button>

      <figure
        onClick={(e) => e.stopPropagation()}
        style={{
          margin: 0,
          maxWidth: "min(1400px, 92vw)",
          maxHeight: "92vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 16,
          cursor: "default",
        }}
      >
        <div
          style={{
            position: "relative",
            maxWidth: "100%",
            maxHeight: caption ? "82vh" : "88vh",
            borderRadius: "var(--r-md, 12px)",
            overflow: "hidden",
            boxShadow: "0 32px 80px rgba(0, 0, 0, 0.5)",
          }}
        >
          {/* Use native img for natural sizing inside the lightbox. */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={src}
            alt={alt}
            style={{
              display: "block",
              maxWidth: "min(1400px, 92vw)",
              maxHeight: caption ? "82vh" : "88vh",
              width: "auto",
              height: "auto",
              objectFit: "contain",
            }}
          />
          {/* Preserve next/image preload behavior so optimized variants load too. */}
          <div style={{ display: "none" }}>
            <Image src={src} alt="" width={1} height={1} unoptimized={unoptimized} />
          </div>
        </div>
        {caption && (
          <figcaption
            style={{
              fontFamily: "var(--sans, 'Plus Jakarta Sans', sans-serif)",
              fontSize: 14,
              fontWeight: 500,
              letterSpacing: "0.04em",
              color: "rgba(244, 244, 240, 0.78)",
              textAlign: "center",
              maxWidth: 720,
            }}
          >
            {caption}
          </figcaption>
        )}
      </figure>

      <style>{`
        @keyframes warm-lightbox-fade {
          from { opacity: 0; }
          to { opacity: 1; }
        }
      `}</style>
    </div>
  );
}
