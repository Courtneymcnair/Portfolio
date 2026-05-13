"use client";

import type { ReactNode } from "react";

type Ratio = "equal" | "text-heavy" | "visual-heavy";
type Align = "top" | "center";

type Props = {
  text: ReactNode;
  visual: ReactNode;
  ratio?: Ratio;
  align?: Align;
  reverse?: boolean;
  gap?: number;
};

const ratioMap: Record<Ratio, string> = {
  equal: "minmax(0, 1fr) minmax(0, 1fr)",
  "text-heavy": "minmax(0, 1.2fr) minmax(0, 1fr)",
  "visual-heavy": "minmax(0, 1fr) minmax(0, 1.4fr)",
};

export default function TwoColumn({
  text,
  visual,
  ratio = "equal",
  align = "center",
  reverse = false,
  gap = 64,
}: Props) {
  return (
    <div
      className={`warm-two-col ${reverse ? "warm-two-col--reverse" : ""}`}
      style={{
        display: "grid",
        gridTemplateColumns: ratioMap[ratio],
        gap,
        alignItems: align === "center" ? "center" : "start",
        width: "100%",
        maxWidth: 1100,
        margin: "0 auto",
      }}
    >
      <div style={{ order: reverse ? 2 : 1, minWidth: 0 }}>{text}</div>
      <div style={{ order: reverse ? 1 : 2, minWidth: 0 }}>{visual}</div>

      <style>{`
        @media (max-width: 860px) {
          .warm-two-col {
            grid-template-columns: 1fr !important;
            gap: 32px !important;
          }
          .warm-two-col > div {
            order: unset !important;
          }
          .warm-two-col.warm-two-col--reverse > div:first-child {
            order: 2 !important;
          }
          .warm-two-col.warm-two-col--reverse > div:last-child {
            order: 1 !important;
          }
        }
      `}</style>
    </div>
  );
}
