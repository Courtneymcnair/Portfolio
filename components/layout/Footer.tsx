import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-brand-footer w-full px-6 pt-16 pb-12 min-h-[627px] flex flex-col">
      <div className="content-width w-full flex flex-col flex-1">
        {/* Large wordmark */}
        <Link
          href="/"
          className="text-hero text-white block hover:opacity-80 transition-opacity leading-none"
        >
          COURTNEY MCNAIR
        </Link>

        {/* CONTACT circle — centered vertically */}
        <div className="flex justify-center my-auto py-16">
          <a
            href="mailto:camcnair@alumni.unc.edu?subject=Let's Connect – Website Contact"
            className="w-[200px] h-[200px] rounded-circle bg-white border border-black flex items-center justify-center font-sans text-[16px] font-medium text-black hover:bg-gray-50 transition-colors flex-shrink-0"
          >
            CONTACT
          </a>
        </div>

        {/* Bottom nav */}
        <div className="mt-auto">
          <hr className="border-white/20 mb-4" />
          <div className="flex gap-6">
            <Link
              href="/"
              className="font-sans text-[16px] text-white/80 hover:text-white transition-colors"
            >
              Work
            </Link>
            <Link
              href="/about"
              className="font-sans text-[16px] text-white hover:text-white/80 transition-colors"
            >
              About
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
