import { type DetailedHTMLProps, type HTMLAttributes } from "react";

import { cn } from "~/lib/utils";

type TypographyProps = DetailedHTMLProps<
  HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>;

export function H1({ className, ...props }: TypographyProps) {
  return (
    <h1
      className={cn(
        "scroll-mt-20 text-4xl font-extrabold tracking-tight lg:text-5xl",
        className,
      )}
      {...props}
    />
  );
}

export function H2({ className, ...props }: TypographyProps) {
  return (
    <h2
      className={cn(
        "mt-10 scroll-mt-20 text-3xl font-semibold tracking-tight transition-colors first:mt-0",
        className,
      )}
      {...props}
    />
  );
}

export function H3({ className, ...props }: TypographyProps) {
  return (
    <h3
      className={cn(
        "scroll-mt-20 text-2xl font-semibold tracking-tight",
        className,
      )}
      {...props}
    />
  );
}

export function P({ className, ...props }: TypographyProps) {
  return <p className={cn("leading-7 not-first:mt-6", className)} {...props} />;
}
