interface JumpButtonProps {
  href: string;
  label?: string;
}

export default function JumpButton({ href, label = 'Jump to Final Design' }: JumpButtonProps) {
  return (
    <a
      href={href}
      className="inline-flex items-center px-6 h-[43px] rounded-pill bg-brand-footer text-white font-satoshi text-[18px] font-normal hover:opacity-90 transition-opacity"
    >
      {label}
    </a>
  );
}
