import Image from "next/image";
import Link from "next/link";

interface ContactItemProps {
  imageSrc: string;
  label: string;
  link: string;
}

export function ContactItem({ imageSrc, label, link }: ContactItemProps) {
  return (
    <Link
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="flex cursor-pointer flex-col items-center transition-transform hover:scale-105"
    >
      <div className="flex h-8 w-8 items-center justify-center">
        <Image
          src={imageSrc}
          alt={label}
          width={32}
          height={32}
          className="object-contain"
        />
      </div>
      <span className="text-sm">{label}</span>
    </Link>
  );
}
