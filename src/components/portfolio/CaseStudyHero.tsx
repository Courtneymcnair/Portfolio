"use client";

import Image from "next/image";
import { Clock } from "lucide-react";
import { motion } from "motion/react";

type HeroImage = {
  src: string;
  alt: string;
  caption?: string;
};

type Layout = "split" | "stacked";

type Props = {
  caseNumber?: string;
  partnerName?: string;
  /** Prepended to the tags row — both render with the same pill style. */
  category?: string;
  title: string;
  description?: string;
  readTime?: string;
  tags?: string[];
  /** Layout: `split` = text left / image right (default). `stacked` = text on top, full-width image below (use for horizontal hero images). */
  layout?: Layout;
  /** One or two hero images. In `split`, a second image floats over the first. In `stacked`, only the first is used. */
  images?: [HeroImage] | [HeroImage, HeroImage];
  figLabel?: string;
};

const DEFAULT_IMAGES: [HeroImage] = [
  { src: "/images/thumbnails/chekhub.png", alt: "Product surface" },
];

const easeOut = [0.22, 1, 0.36, 1] as const;

export default function CaseStudyHero({
  caseNumber,
  partnerName,
  category,
  title,
  description,
  readTime,
  tags,
  layout = "split",
  images = DEFAULT_IMAGES,
  figLabel,
}: Props) {
  const allPills = [category, ...(tags ?? [])].filter(Boolean) as string[];
  const isStacked = layout === "stacked";
  return (
    <section
      className={`warm-cs-hero warm-cs-hero--${layout}`}
      style={{
        background: "var(--paper, #F4F4F0)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div className="warm-cs-hero__grid">
        <div className="warm-cs-hero__left">
          {(caseNumber || partnerName) && (
            <motion.div
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: easeOut }}
              style={{
                fontFamily:
                  "var(--display, 'Plus Jakarta Sans', sans-serif)",
                fontSize: 12,
                fontWeight: 600,
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                color: "var(--accent, #3250FF)",
                marginBottom: 24,
              }}
            >
              {caseNumber && <span>Case {caseNumber}</span>}
              {caseNumber && partnerName && (
                <span style={{ color: "var(--grey-2, rgba(42,15,8,0.65))" }}>
                  {" "}
                  /{" "}
                </span>
              )}
              {partnerName && <span>Partner: {partnerName}</span>}
            </motion.div>
          )}

          <motion.h1
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: easeOut }}
            style={{
              fontFamily: "var(--display, 'Plus Jakarta Sans', sans-serif)",
              fontWeight: 500,
              fontSize: "clamp(40px, 5.6vw, 80px)",
              lineHeight: 1.05,
              letterSpacing: "-0.025em",
              color: "var(--ink, #0A0A0F)",
              margin: 0,
              marginBottom: description ? 24 : 32,
            }}
          >
            {title}
          </motion.h1>

          {description && (
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: easeOut }}
              style={{
                fontFamily: "var(--sans, 'Plus Jakarta Sans', sans-serif)",
                fontSize: "clamp(16px, 1.3vw, 19px)",
                lineHeight: 1.6,
                color: "var(--grey-1, #1A1A22)",
                margin: 0,
                marginBottom: 36,
                maxWidth: 560,
              }}
            >
              {description}
            </motion.p>
          )}

          {readTime && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.28, ease: easeOut }}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                fontFamily:
                  "var(--display, 'Plus Jakarta Sans', sans-serif)",
                fontSize: 12,
                fontWeight: 600,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: "var(--grey-2, rgba(42,15,8,0.65))",
                marginBottom: 20,
              }}
            >
              <Clock size={13} strokeWidth={1.5} aria-hidden="true" />
              {readTime}
            </motion.div>
          )}

          {allPills.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.32, ease: easeOut }}
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: 8,
              }}
            >
              {allPills.map((tag) => (
                <span
                  key={tag}
                  style={{
                    display: "inline-block",
                    padding: "6px 12px",
                    borderRadius: "var(--warm-radius-pill, 999px)",
                    background: "var(--grey-5, #ECECE6)",
                    fontFamily:
                      "var(--display, 'Plus Jakarta Sans', sans-serif)",
                    fontSize: 11,
                    fontWeight: 600,
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                    color: "var(--ink, #0A0A0F)",
                  }}
                >
                  {tag}
                </span>
              ))}
            </motion.div>
          )}
        </div>

        <div className="warm-cs-hero__right">
          {isStacked ? (
            <StackedHeroImage image={images[0]} />
          ) : (
            <ProductTeaser images={images} figLabel={figLabel} />
          )}
        </div>
      </div>

      <style>{`
        .warm-cs-hero--split .warm-cs-hero__grid {
          display: grid;
          grid-template-columns: 1.05fr 1fr;
          min-height: clamp(420px, 60vh, 640px);
        }
        .warm-cs-hero--stacked .warm-cs-hero__grid {
          display: flex;
          flex-direction: column;
          max-width: 1280px;
          margin: 0 auto;
        }
        .warm-cs-hero__left {
          padding: clamp(40px, 5vw, 80px) var(--content-padding) clamp(28px, 4vw, 56px);
          display: flex;
          flex-direction: column;
          justify-content: center;
        }
        .warm-cs-hero--stacked .warm-cs-hero__left {
          padding-bottom: clamp(24px, 3vw, 40px);
        }
        .warm-cs-hero__right {
          position: relative;
          background: transparent;
          overflow: hidden;
        }
        .warm-cs-hero--stacked .warm-cs-hero__right {
          padding: 0 var(--content-padding) clamp(40px, 5vw, 80px);
        }
        @media (max-width: 960px) {
          .warm-cs-hero--split .warm-cs-hero__grid {
            grid-template-columns: 1fr;
            min-height: 0;
          }
          .warm-cs-hero--split .warm-cs-hero__right {
            min-height: clamp(360px, 50vw, 480px);
          }
        }
      `}</style>
    </section>
  );
}

function StackedHeroImage({ image }: { image: HeroImage }) {
  return (
    <motion.figure
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.0, delay: 0.3, ease: easeOut }}
      style={{
        position: "relative",
        width: "100%",
        aspectRatio: "16 / 9",
        margin: 0,
        borderRadius: "var(--warm-radius-md, 12px)",
        overflow: "hidden",
        background: "var(--paper-card, #FFFFFF)",
        border: "1px solid var(--border-color, rgba(42,15,8,0.2))",
        boxShadow: "var(--shadow-3, 0 16px 48px rgba(42,15,8,0.12))",
      }}
    >
      <Image
        src={image.src}
        alt={image.alt}
        fill
        sizes="(max-width: 960px) 100vw, 1200px"
        style={{ objectFit: "cover" }}
      />
    </motion.figure>
  );
}

function ProductTeaser({
  images,
  figLabel,
}: {
  images: [HeroImage] | [HeroImage, HeroImage];
  figLabel?: string;
}) {
  const [primary, secondary] = images;

  return (
    <div
      style={{
        position: "absolute",
        inset: 0,
        padding: "clamp(16px, 2vw, 32px)",
      }}
    >
      {figLabel && (
        <div
          style={{
            position: "absolute",
            top: 24,
            right: 28,
            fontFamily: "var(--display, 'Plus Jakarta Sans', sans-serif)",
            fontSize: 11,
            fontWeight: 600,
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            color: "var(--grey-2, rgba(42,15,8,0.65))",
            zIndex: 3,
          }}
        >
          {figLabel}
        </div>
      )}

      <div
        style={{
          position: "relative",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <motion.figure
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.0, delay: 0.3, ease: easeOut }}
          style={{
            position: "relative",
            width: secondary ? "94%" : "100%",
            aspectRatio: "4 / 3",
            margin: 0,
            borderRadius: "var(--warm-radius-md, 12px)",
            overflow: "hidden",
            background: "var(--paper-card, #FFFFFF)",
            border: "1px solid var(--border-color, rgba(42,15,8,0.2))",
            boxShadow:
              "var(--shadow-3, 0 16px 48px rgba(42,15,8,0.12))",
            transform: secondary ? "translate(-4%, -8%)" : "none",
            zIndex: 2,
          }}
        >
          <Image
            src={primary.src}
            alt={primary.alt}
            fill
            sizes="(max-width: 960px) 90vw, 600px"
            style={{ objectFit: "cover" }}
          />
          {primary.caption && <TeaserCaption>{primary.caption}</TeaserCaption>}
        </motion.figure>

        {secondary && (
          <motion.figure
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.0, delay: 0.5, ease: easeOut }}
            style={{
              position: "absolute",
              right: "0%",
              bottom: "4%",
              width: "60%",
              aspectRatio: "4 / 3",
              margin: 0,
              borderRadius: "var(--warm-radius-md, 12px)",
              overflow: "hidden",
              background: "var(--paper-card, #FFFFFF)",
              border: "1px solid var(--border-color, rgba(42,15,8,0.2))",
              boxShadow:
                "var(--shadow-4, 0 32px 80px rgba(42,15,8,0.16))",
              zIndex: 1,
            }}
          >
            <Image
              src={secondary.src}
              alt={secondary.alt}
              fill
              sizes="(max-width: 960px) 60vw, 360px"
              style={{ objectFit: "cover" }}
            />
            {secondary.caption && (
              <TeaserCaption>{secondary.caption}</TeaserCaption>
            )}
          </motion.figure>
        )}
      </div>
    </div>
  );
}

function TeaserCaption({ children }: { children: React.ReactNode }) {
  return (
    <figcaption
      style={{
        position: "absolute",
        bottom: 0,
        left: 0,
        right: 0,
        padding: "8px 12px",
        background: "rgba(26, 9, 3, 0.6)",
        color: "var(--paper, #F4F4F0)",
        fontFamily: "var(--display, 'Plus Jakarta Sans', sans-serif)",
        fontSize: 11,
        fontWeight: 600,
        letterSpacing: "0.14em",
        textTransform: "uppercase",
      }}
    >
      {children}
    </figcaption>
  );
}
