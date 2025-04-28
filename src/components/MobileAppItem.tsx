import Image from "next/image";
import { H3, P } from "./typography";

interface MobileAppItemProps {
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
}

export function MobileAppItem({
  title,
  description,
  imageSrc,
  imageAlt,
}: MobileAppItemProps) {
  return (
    <div className="flex flex-col">
      <div className="relative aspect-[9/16] w-full overflow-hidden">
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          className="object-cover"
          sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
        />
      </div>
      <div className="flex flex-col pl-8">
        <H3 className="mt-4">{title}</H3>
        <P className="not-first:mt-0">{description}</P>
      </div>
    </div>
  );
}
