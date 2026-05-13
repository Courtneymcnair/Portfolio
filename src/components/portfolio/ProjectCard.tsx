"use client";

type Props = {
  title: string;
  href?: string;
  /** Optional image src — if absent, renders a colored placeholder. */
  image?: string;
  /** Placeholder background color for when image is absent. */
  placeholderColor?: string;
};

export default function ProjectCard({
  title,
  href,
  image,
  placeholderColor = "var(--accent-tint, #E5E9FF)",
}: Props) {
  const Wrap = (href ? "a" : "div") as React.ElementType;

  return (
    <Wrap
      href={href}
      style={{
        display: "flex",
        flexDirection: "column",
        gap: 20,
        textDecoration: "none",
        color: "inherit",
        cursor: href ? "pointer" : "default",
        transition: "transform var(--dur-reveal, 400ms) var(--ease-out, cubic-bezier(0.22,1,0.36,1))",
      }}
    >
      <div
        style={{
          aspectRatio: "4 / 3",
          background: placeholderColor,
          borderRadius: "var(--r-md, 12px)",
          overflow: "hidden",
          border: "1px solid var(--hair-color, rgba(10, 10, 15, 0.12))",
          position: "relative",
        }}
      >
        {image ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={image}
            alt=""
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              display: "block",
            }}
          />
        ) : null}
      </div>
      <h3
        style={{
          margin: 0,
          fontFamily: "var(--display, 'Plus Jakarta Sans', sans-serif)",
          fontWeight: 600,
          fontSize: "clamp(20px, 1.8vw, 26px)",
          letterSpacing: "-0.015em",
          lineHeight: 1.2,
          color: "var(--ink, #0A0A0F)",
        }}
      >
        {title}
      </h3>
    </Wrap>
  );
}
