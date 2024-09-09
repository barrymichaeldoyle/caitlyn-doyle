import "~/styles/globals.css";

import { type PropsWithChildren } from "react";
import { GeistSans } from "geist/font/sans";
import { type Metadata } from "next";

import { Footer } from "~/layout/Footer";
import { Header } from "~/layout/Header";

export const metadata: Metadata = {
  title: "Caitlyn Doyle",
  description: "UI/UX Designer and Marketing Specialist",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({ children }: Readonly<PropsWithChildren>) {
  return (
    <html lang="en" className={`${GeistSans.variable} scroll-smooth`}>
      <body className="flex min-h-screen flex-col">
        <Header />
        <div className="flex justify-center">
          <main className="max-w-[1350px] flex-grow p-4">{children}</main>
        </div>
        <Footer />
      </body>
    </html>
  );
}
