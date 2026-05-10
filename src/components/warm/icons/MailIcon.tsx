"use client";

type Props = {
  size?: number | string;
  strokeWidth?: number;
};

export default function MailIcon({ size = 18, strokeWidth = 1.6 }: Props) {
  return (
    <svg
      aria-hidden
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      width={size}
      height={size}
      style={{ display: "block" }}
    >
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="M3 7l9 6 9-6" />
    </svg>
  );
}
