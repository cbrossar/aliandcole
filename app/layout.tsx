import { Inter } from "next/font/google";
import type { Metadata } from "next";
import NavBar from "./ui/navbar";

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });


export const metadata: Metadata = {
  title: "Ali & Cole",
  description: "Ali Ozmeral and Cole Brossart's wedding website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
        <body className={inter.className}>
            <NavBar />
            <main className="min-h-screen flex flex-col items-center pt-20 md:pt-24">
                {children}
            </main>
        </body>
    </html>
  );
}
