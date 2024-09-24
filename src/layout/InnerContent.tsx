import { type PropsWithChildren } from "react";

export function InnerContent(props: PropsWithChildren<{ className?: string }>) {
  return (
    <div className={`w-full max-w-[1350px] ${props.className ?? ""}`}>
      {props.children}
    </div>
  );
}
