import Link from "next/link";

import { Logo } from "./Logo";

export function Header() {
  return (
    <header className="bg-primary-500 flex items-center justify-between p-2 px-10 text-2xl text-neutral-100">
      <Link href="/">
        <Logo />
      </Link>
      <nav className="flex gap-8 text-2xl font-medium">
        <Link href="#work">Work</Link>
        <Link href="#about">About</Link>
        <Link href="#contact">Contact</Link>
      </nav>
    </header>
  );
}
