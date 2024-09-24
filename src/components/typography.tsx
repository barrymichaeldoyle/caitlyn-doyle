import { type DetailedHTMLProps, type HTMLAttributes } from "react";

type TypographyProps = DetailedHTMLProps<
  HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>;

export function H1(props: TypographyProps) {
  // TODO: implement classname props merging (after implementing shadcn stuff)
  return (
    <h1
      className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl"
      {...props}
    />
  );
}

export function H2(props: TypographyProps) {
  return (
    <h2
      className="mt-10 scroll-m-20 pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0"
      {...props}
    />
  );
}

export function H3(props: TypographyProps) {
  return (
    <h3
      className="scroll-m-20 text-2xl font-semibold tracking-tight"
      {...props}
    />
  );
}

export function P(props: TypographyProps) {
  return <p className="leading-7 [&:not(:first-child)]:mt-6" {...props} />;
}
