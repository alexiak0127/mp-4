import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "CS391 MP4 - Harvard Art",
  description: "Mini-project 4 using Harvard Art Museums API via lib/",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#f5f1e6] text-slate-900`}
      >

        <Header />
        <main className="mx-auto max-w-5xl px-4 pb-10">{children}</main>
      </body>
    </html>
  );
}
