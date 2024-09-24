import Link from "next/link";

import { Logo } from "./Logo";
import { NavContent } from "./NavContent";
import { MobileNavMenu } from "./MobileNavMenu";

export function Header() {
  return (
    <header className="sticky top-0 z-10 flex h-[80px] items-center justify-between bg-primary-500 p-2 px-4 text-2xl text-neutral-100 shadow-md sm:px-10">
      <Link href="/">
        <Logo />
      </Link>
      <nav className="hidden scroll-m-20 gap-8 text-xl font-semibold tracking-tight sm:flex">
        <NavContent />
      </nav>
      <MobileNavMenu />
    </header>
  );
}
