import { type PropsWithChildren } from "react";

export function InnerContent({ children }: PropsWithChildren) {
  return <div className="max-w-[1350px] p-4">{children}</div>;
}
