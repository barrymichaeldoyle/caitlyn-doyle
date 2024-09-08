import Link from "next/link";

import { Logo } from "./Logo";
import { NavContent } from "./NavContent";
import { MobileNavMenu } from "./MobileNavMenu";

export function Header() {
  return (
    <header className="bg-primary-500 sticky top-0 z-10 flex items-center justify-between p-2 px-10 text-2xl text-neutral-100 shadow-md">
      <Link href="/">
        <Logo />
      </Link>
      <nav className="hidden gap-8 text-2xl font-medium sm:flex">
        <NavContent />
      </nav>
      <MobileNavMenu />
    </header>
  );
}
