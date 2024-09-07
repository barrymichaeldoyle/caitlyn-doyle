import "~/styles/globals.css";

import { type PropsWithChildren } from "react";
import { GeistSans } from "geist/font/sans";
import { type Metadata } from "next";
import Link from "next/link";

import { YouTubeIcon } from "~/icons/Youtube";
import { LinkedInIcon } from "~/icons/LinkedIn";
// import { DribbbleIcon } from "~/icons/Dribbble";

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
            <h1 className="flex items-center font-semibold">Caitlyn Doyle</h1>
          </Link>
          <nav className="flex gap-4 text-xl font-medium">
            <Link href="#work">Work</Link>
            <Link href="#about">About</Link>
            <Link href="#contact">Contact</Link>
          </nav>
        </header>
        <main className="flex-grow p-4">{children}</main>
        <footer className="bg-primary-500 mt-auto p-4 text-neutral-100">
          <div className="container mx-auto flex items-center justify-between">
            <div className="flex gap-6">
              <Link
                href="https://www.youtube.com/@createwithcaity"
                target="_blank"
              >
                <YouTubeIcon />
              </Link>
              <Link
                href="https://www.linkedin.com/in/caitlyn-doyle-988695167/"
                target="_blank"
              >
                <LinkedInIcon />
              </Link>
              {/* <Link href="https://dribbble.com/Cait_Doyle" target="_blank">
                <DribbbleIcon />
              </Link> */}
            </div>
            <p className="text-xs">
              Copyright &copy; Caitlyn Doyle {new Date().getFullYear()}
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}
