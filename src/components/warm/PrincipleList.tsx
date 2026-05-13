"use client";

export type PrincipleItem = {
  lead: string;
  body?: string;
  sublist?: string[];
};

type Props = {
  items: PrincipleItem[];
};

export default function PrincipleList({ items }: Props) {
  return (
    <ul
      style={{
        listStyle: "none",
        padding: 0,
        margin: 0,
        display: "flex",
        flexDirection: "column",
        gap: 22,
        maxWidth: 760,
      }}
    >
      {items.map((item, i) => (
        <li
          key={i}
          style={{
            paddingLeft: 18,
            borderLeft: "2px solid var(--warm-hair, rgba(42,15,8,0.12))",
          }}
        >
          <p
            style={{
              fontFamily: "var(--warm-sans, 'Plus Jakarta Sans', sans-serif)",
              fontSize: 16.5,
              lineHeight: 1.6,
              color: "var(--warm-ink, #2A0F08)",
              margin: 0,
            }}
          >
            <strong style={{ fontWeight: 600 }}>{item.lead}</strong>
            {item.body && (
              <>
                {" "}
                <span style={{ color: "var(--warm-ink-soft, #4A1F12)" }}>
                  {item.body}
                </span>
              </>
            )}
          </p>
          {item.sublist && item.sublist.length > 0 && (
            <ul
              style={{
                listStyle: "none",
                padding: 0,
                margin: "10px 0 0",
                display: "flex",
                flexDirection: "column",
                gap: 6,
              }}
            >
              {item.sublist.map((sub, j) => (
                <li
                  key={j}
                  style={{
                    fontFamily:
                      "var(--warm-sans, 'Plus Jakarta Sans', sans-serif)",
                    fontSize: 14.5,
                    lineHeight: 1.55,
                    color: "var(--warm-ink-soft, #4A1F12)",
                    paddingLeft: 16,
                    position: "relative",
                  }}
                >
                  <span
                    aria-hidden="true"
                    style={{
                      position: "absolute",
                      left: 0,
                      top: "0.7em",
                      width: 6,
                      height: 1,
                      background: "var(--warm-ink-faint, rgba(42,15,8,0.4))",
                    }}
                  />
                  {sub}
                </li>
              ))}
            </ul>
          )}
        </li>
      ))}
    </ul>
  );
}
