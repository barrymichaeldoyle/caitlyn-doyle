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

export function H2(
  props: PropsWithChildren<
    DetailedHTMLProps<HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>
  >,
) {
  return (
    <h2
      className="mt-10 scroll-m-20 pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0"
      {...props}
    />
  );
}
