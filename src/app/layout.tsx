import "~/styles/globals.css";

import { type PropsWithChildren } from "react";
import { GeistSans } from "geist/font/sans";
import { type Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Caitlyn Doyle",
  description: "UI/UX Designer and Marketing Specialist",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({ children }: Readonly<PropsWithChildren>) {
  return (
    <html lang="en" className={`${GeistSans.variable}`}>
      <body className="flex min-h-screen flex-col">
        <header className="bg-primary-500 flex items-center justify-between p-4 text-2xl text-neutral-100">
          <Link href="/">
            <div className="flex items-center font-semibold">Caitlyn Doyle</div>
          </Link>
          <nav className="flex gap-4 font-medium">
            <Link href="#work">Work</Link>
            <Link href="#about">About</Link>
            <Link href="#contact">Contact</Link>
          </nav>
        </header>
        <main className="flex-grow p-4">{children}</main>
        <footer className="bg-primary-500 mt-auto p-4 text-neutral-100">
          <div className="container mx-auto flex items-center justify-between">
            <div className=""></div>
            <p className="text-xs">
              Copyright &copy; Caitlyn Doyle {new Date().getFullYear()}
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}
