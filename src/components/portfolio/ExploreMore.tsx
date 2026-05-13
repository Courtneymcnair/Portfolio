"use client";

import Button from "./Button";
import ProjectCard from "./ProjectCard";
import SectionHeading from "./SectionHeading";

type ExploreProject = {
  title: string;
  meta?: string;
  href: string;
  imageSrc: string;
  imageAlt: string;
};

type Props = {
  heading?: string;
  description?: string;
  primaryHref?: string;
  primaryLabel?: string;
  secondaryHref?: string;
  secondaryLabel?: string;
  /** When provided, renders the related-works grid instead of the CTA panel. */
  projects?: ExploreProject[];
};

export default function ExploreMore({
  heading = "Looking for more?",
  description = "There are more case studies on the way — or get in touch directly.",
  primaryHref = "/",
  primaryLabel = "See all work",
  secondaryHref = "mailto:courtney@chekhub.com",
  secondaryLabel = "Get in touch",
  projects,
}: Props) {
  if (projects && projects.length > 0) {
    return (
      <section
        style={{
          padding: "clamp(64px, 8vw, 128px) var(--content-padding)",
          background: "var(--paper, #F4F4F0)",
          borderTop: "1px solid var(--hair-color, rgba(10, 10, 15, 0.08))",
        }}
      >
        <div style={{ maxWidth: 1180, margin: "0 auto" }}>
          <SectionHeading className="mb-10">Explore More Case Studies</SectionHeading>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(min(420px, 100%), 1fr))",
              gap: 40,
              marginTop: 40,
            }}
          >
            {projects.map((p) => (
              <ProjectCard
                key={p.href}
                title={p.title}
                href={p.href}
                image={p.imageSrc}
              />
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section
      style={{
        padding: "clamp(64px, 8vw, 128px) var(--content-padding)",
        background: "var(--paper, #F4F4F0)",
        borderTop: "1px solid var(--hair-color, rgba(10, 10, 15, 0.08))",
        textAlign: "center",
      }}
    >
      <div style={{ maxWidth: 720, margin: "0 auto", display: "flex", flexDirection: "column", gap: 24, alignItems: "center" }}>
        <h2
          style={{
            margin: 0,
            fontFamily: "var(--display, 'Plus Jakarta Sans', sans-serif)",
            fontWeight: 600,
            fontSize: "clamp(32px, 4vw, 56px)",
            letterSpacing: "-0.02em",
            lineHeight: 1.1,
            color: "var(--ink, #0A0A0F)",
          }}
        >
          {heading}
        </h2>
        <p
          style={{
            margin: 0,
            fontFamily: "var(--sans, 'Plus Jakarta Sans', sans-serif)",
            fontWeight: 450,
            fontSize: "clamp(16px, 1.2vw, 19px)",
            lineHeight: 1.6,
            color: "var(--grey-1, #1A1A22)",
            maxWidth: 520,
          }}
        >
          {description}
        </p>
        <div style={{ display: "flex", gap: 16, marginTop: 16, flexWrap: "wrap", justifyContent: "center" }}>
          <Button variant="primary" size="lg" href={primaryHref}>
            {primaryLabel}
          </Button>
          <Button variant="secondary" size="lg" href={secondaryHref}>
            {secondaryLabel}
          </Button>
        </div>
      </div>
    </section>
  );
}
