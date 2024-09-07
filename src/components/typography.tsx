import {
  type DetailedHTMLProps,
  type HTMLAttributes,
  type PropsWithChildren,
} from "react";

export function H1(
  props: PropsWithChildren<
    DetailedHTMLProps<HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>
  >,
) {
  // TODO: implement classname props merging
  return (
    <h1
      className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl"
      {...props}
    />
  );
}
