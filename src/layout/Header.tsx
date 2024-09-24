import Link from "next/link";

import { Logo } from "./Logo";
import { NavContent } from "./NavContent";
import { MobileNavMenu } from "./MobileNavMenu";
import { InnerContent } from "./InnerContent";
import { PageSection } from "~/types";

export function Header() {
  return (
    <header className="sticky top-0 z-10 flex h-[80px] justify-center bg-primary-500 text-2xl text-neutral-100 shadow-md">
      <InnerContent className="flex items-center justify-between p-2 px-4 sm:px-10">
        <Link href={`#${PageSection.about}`}>
          <Logo />
        </Link>
        <nav className="hidden scroll-m-20 gap-8 text-xl font-semibold tracking-tight sm:flex">
          <NavContent />
        </nav>
        <MobileNavMenu />
      </InnerContent>
    </header>
  );
}
