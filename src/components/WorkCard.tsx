import Image from "next/image";
import Link from "next/link";

export function WorkCard(props: {
  imgAlt: string;
  imgSrc: string;
  title: string;
  info: string;
  link: string;
  priority?: boolean;
}) {
  const target = props.link.startsWith("http") ? "_blank" : "_self";

  return (
    <Link
      href={props.link}
      target={target}
      className="focus-visible:ring-primary group w-full max-w-[412px] rounded-[21px] border border-primary-500 shadow-xl transition-all hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2"
    >
      <div className="rounded-t-[20px] bg-primary-500 text-neutral-100">
        <Image
          alt={props.imgAlt}
          width={412}
          height={243}
          src={props.imgSrc}
          className="object-fit w-full rounded-t-[20px]"
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
