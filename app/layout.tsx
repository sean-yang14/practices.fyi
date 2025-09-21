import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Header } from "@/components/header";
import { DetailedFooter } from "@/components/DetailedFooter";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Practices.fyi",
  description:
    "Clean, professional layout with global header, footer, and Tailwind styling.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-primary-background text-gray-900`}>
        <Header />
        <main className="min-h-screen px-6 py-8 pt-24">{children}</main>
        <DetailedFooter />
      </body>
    </html>
  );
}
