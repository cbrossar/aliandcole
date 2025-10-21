import { Inter } from "next/font/google";
import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import NavBar from "./ui/navbar";
import Footer from "./ui/footer";

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ali Ozmeral & Cole Brossart Wedding",
  description:
    "Ali Ozmeral and Cole Brossart's wedding website. Join us for our celebration of love. Find wedding details, RSVP information, travel details, and more.",
  keywords: [
    "Ali Ozmeral",
    "Cole Brossart",
    "wedding",
    "Ali Cole wedding",
    "wedding website",
    "Ozmeral Brossart wedding",
  ],
  authors: [{ name: "Ali Ozmeral & Cole Brossart" }],
  creator: "Ali Ozmeral & Cole Brossart",
  openGraph: {
    title: "Ali Ozmeral & Cole Brossart Wedding",
    description:
      "Join Ali Ozmeral and Cole Brossart for their wedding celebration. RSVP and find all the details you need.",
    type: "website",
    siteName: "Ali & Cole's Wedding",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ali Ozmeral & Cole Brossart Wedding",
    description:
      "Join Ali Ozmeral and Cole Brossart for their wedding celebration.",
  },
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
        <main className="min-h-screen flex flex-col items-center pt-16 md:pt-20 lg:pt-22]">
          {children}
        </main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
