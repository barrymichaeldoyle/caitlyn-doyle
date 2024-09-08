import Image from "next/image";
import Link from "next/link";

export function WorkCard(props: {
  imgAlt: string;
  imgSrc: string;
  title: string;
  info: string;
  priority?: boolean;
}) {
  return (
    <Link
      href="#"
      className="focus-visible:ring-primary border-primary-500 group w-[412px] rounded-[21px] border shadow-xl transition-all hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2"
    >
      <div className="bg-primary-500 h-[243px] rounded-t-[20px] text-neutral-100">
        <Image
          alt={props.imgAlt}
          width={412}
          height={243}
          src={props.imgSrc}
          className="h-full w-full rounded-t-[20px] object-cover"
          priority={props.priority}
        />
      </div>
      <div className="flex flex-col gap-2 rounded-b-[21px] bg-white p-2 pb-4 text-center">
        <h3 className="text-sm font-semibold">{props.title}</h3>
        <p className="text-xs">{props.info}</p>
      </div>
    </Link>
  );
}
