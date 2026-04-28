import Image from 'next/image';

interface UserGroupSection {
  label: string;
  content: string;
}

interface UserGroupCardProps {
  iconSrc: string;
  iconAlt: string;
  name: string;
  sections: UserGroupSection[];
}

export default function UserGroupCard({ iconSrc, iconAlt, name, sections }: UserGroupCardProps) {
  return (
    <div className="bg-brand-card-light rounded-card p-6 flex flex-col gap-5">
      <div className="relative w-[114px] h-[114px] mx-auto">
        <Image src={iconSrc} alt={iconAlt} fill className="object-contain" />
      </div>
      <h5 className="text-user-group text-black text-center">{name}</h5>
      {sections.map((section) => (
        <div key={section.label}>
          <p className="text-overline mb-1">{section.label}</p>
          <p className="text-body text-black">{section.content}</p>
        </div>
      ))}
    </div>
  );
}
