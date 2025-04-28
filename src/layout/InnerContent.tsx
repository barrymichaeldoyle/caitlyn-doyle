import { type PropsWithChildren } from "react";
import { cn } from "~/lib/utils";

export function InnerContent(props: PropsWithChildren<{ className?: string }>) {
  return (
    <div className={cn("w-full max-w-[1350px]", props.className)}>
      {props.children}
    </div>
  );
}
