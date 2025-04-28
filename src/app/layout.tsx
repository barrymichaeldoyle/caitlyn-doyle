import "~/styles/globals.css";
import "@fontsource/inter/400.css";
import "@fontsource/inter/500.css";
import "@fontsource/inter/600.css";
import "@fontsource/inter/700.css";
import "@fontsource/inter/800.css";

import { type PropsWithChildren } from "react";
import { type Metadata } from "next";

import { Footer } from "~/layout/Footer";
import { Header } from "~/layout/Header";

export const metadata: Metadata = {
  title: "Caitlyn Doyle",
  description: "UI/UX Designer and Marketing Specialist | Caitlyn Doyle",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({ children }: Readonly<PropsWithChildren>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="flex min-h-screen flex-col">
        <Header />
        <div className="flex justify-center">
          <main className="grow">{children}</main>
        </div>
        <Footer />
      </body>
    </html>
  );
}
