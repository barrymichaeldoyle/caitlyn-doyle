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
      <body>
        <header className="bg-primary flex items-center justify-between p-4 text-2xl font-semibold text-white">
          <Link href="/">
            <div className="flex items-center">Caitlyn Doyle</div>
          </Link>
        </header>
        <main className="p-4">{children}</main>
      </body>
    </html>
  );
}
