import Link from 'next/link';

interface GoButtonProps {
  href: string;
}

export default function GoButton({ href }: GoButtonProps) {
  return (
    <Link href={href} className="inline-block">
      <div className="w-[60px] h-[60px] rounded-go bg-black border border-white flex items-center justify-center hover:opacity-75 transition-opacity cursor-pointer">
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          stroke="white"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M4 10h12M11 4l6 6-6 6" />
        </svg>
      </div>
    </Link>
  );
}
