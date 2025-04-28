import Image from "next/image";
import { H3, P } from "./typography";

interface WebsiteItemProps {
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
}

export function WebsiteItem({
  title,
  description,
  imageSrc,
  imageAlt,
}: WebsiteItemProps) {
  return (
    <div className="mb-4 flex flex-col">
      <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[20px] shadow-md">
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          className="object-cover"
          sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
        />
      </div>
      <H3 className="mt-4">{title}</H3>
      <P className="not-first:mt-0">{description}</P>
    </div>
  );
}
