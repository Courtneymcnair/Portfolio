import Link from "next/link";

const variants = [
  {
    href: "/sandbox/hero-a",
    title: "A — Grainy Drift",
    description: "Deep orange/coral blobs, heavy grain, editorial serif italic.",
  },
  {
    href: "/sandbox/hero-b",
    title: "B — Aurora Flow",
    description: "Iridescent conic swirl, smooth, bold sans + serif italic accent.",
  },
  {
    href: "/sandbox/hero-c",
    title: "C — Floral Bloom",
    description: "Blurred 6-petal flower silhouettes, naturalistic, all-serif lead.",
  },
  {
    href: "/sandbox/hero-d",
    title: "D — Sunrise Halo",
    description: "Lavender-to-orange strata + breathing sun, bold sans + serif accent.",
  },
  {
    href: "/sandbox/gradient",
    title: "Aceternity demo",
    description: "Original Aceternity background-gradient-animation.",
  },
];

export default function Page() {
  return (
    <main className="min-h-screen bg-neutral-50 px-6 py-24">
      <div className="mx-auto max-w-2xl">
        <h1 className="text-3xl font-semibold tracking-tight text-neutral-900">
          Sandbox — hero explorations
        </h1>
        <p className="mt-2 text-neutral-600">
          Visual direction studies. Open each in its own tab to compare side-by-side.
        </p>
        <ul className="mt-10 space-y-4">
          {variants.map((v) => (
            <li key={v.href}>
              <Link
                href={v.href}
                className="block rounded-lg border border-neutral-200 bg-white p-5 transition hover:border-neutral-400 hover:shadow-sm"
              >
                <div className="font-medium text-neutral-900">{v.title}</div>
                <div className="mt-1 text-sm text-neutral-600">{v.description}</div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}
